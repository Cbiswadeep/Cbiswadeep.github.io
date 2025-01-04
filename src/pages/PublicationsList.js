import React, { useState, useEffect } from "react";
import BibtexParser from "bibtex-parse-js";
import { ExternalLink, Book, Award, Calendar, Users } from "lucide-react";
import "./PublicationsList.css";

const PublicationsList = () => {
  const [publicationsByYear, setPublicationsByYear] = useState([]);
  const [error, setError] = useState(null);
  const [activeYear, setActiveYear] = useState(null);

  useEffect(() => {
    fetch("/publications.bib")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to load publications");
        return response.text();
      })
      .then((bibtexData) => {
        const parsedData = BibtexParser.toJSON(bibtexData);
        const grouped = parsedData.reduce((acc, pub) => {
          const year = pub.entryTags.year || "Unknown Year";
          if (!acc[year]) acc[year] = [];
          acc[year].push(pub);
          return acc;
        }, {});

        const sortedByYear = Object.keys(grouped)
          .sort((a, b) => (b === "Unknown Year" ? -1 : a === "Unknown Year" ? 1 : b - a))
          .map((year) => ({
            year,
            publications: grouped[year].sort((a, b) => {
              const titleA = a.entryTags.title || "";
              const titleB = b.entryTags.title || "";
              return titleA.localeCompare(titleB);
            }),
          }));

        setPublicationsByYear(sortedByYear);
        setActiveYear(sortedByYear[0]?.year);
      })
      .catch((err) => setError(err.message));
  }, []);

  const renderPublication = (pub, index) => {
    const title = pub.entryTags.title || "Untitled";
    const venue = pub.entryTags.journal || pub.entryTags.booktitle || "Unknown Venue";
    const authors = pub.entryTags.author
      ? pub.entryTags.author
          .split(" and ")
          .map((name) => 
            name.includes("Chakraborty, Biswadeep") 
              ? <span key={name} className="font-semibold text-indigo-600 dark:text-indigo-400">{name}</span> 
              : name
          )
          .reduce((prev, curr) => [prev, ", ", curr])
      : "Unknown Authors";

    const pubType = pub.entryType || "article";
    const doi = pub.entryTags.doi;

    return (
      <li 
        key={pub.citationKey} 
        className="publication-item bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
        style={{ '--publication-index': index }}
      >
        <div className="flex flex-col space-y-4">
          {/* Title and DOI */}
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
              {title}
            </h3>
            {doi && (
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                title="View publication"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              <Book size={14} className="mr-1.5" />
              {venue}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
              <Award size={14} className="mr-1.5" />
              {pubType}
            </span>
          </div>

          {/* Authors */}
          <div className="flex items-start gap-2">
            <Users size={16} className="mt-1 text-gray-500 dark:text-gray-400 flex-shrink-0" />
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {authors}
            </p>
          </div>
        </div>
      </li>
    );
  };

  // Year navigation tabs
  const renderYearTabs = () => (
    <div className="flex items-center space-x-1 overflow-x-auto pb-2 mb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {publicationsByYear.map(({ year }) => (
        <button
          key={year}
          onClick={() => setActiveYear(year)}
          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors duration-200 
            ${activeYear === year 
              ? 'bg-indigo-600 text-white' 
              : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
        >
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {year}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Publications
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of research papers and academic publications
          </p>
        </div>

        {error ? (
          <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg" role="alert">
            <p className="font-medium">Error loading publications</p>
            <p className="text-sm mt-1">{error}</p>
          </div>
        ) : (
          <>
            {renderYearTabs()}
            
            <div className="space-y-12">
              {publicationsByYear
                .filter(({ year }) => activeYear === year)
                .map(({ year, publications }) => (
                  <div key={year} className="space-y-6">
                    <ul className="grid gap-6">
                      {publications.map((pub, index) => renderPublication(pub, index))}
                    </ul>
                  </div>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PublicationsList;