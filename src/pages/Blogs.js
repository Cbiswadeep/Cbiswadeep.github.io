import React from "react";

const Blogs = () => {
  // Blog data
  const blogSeries = [
    {
      id: "cov_series", // Unique identifier for the series
      title: "Calculus of Variations and Optimal Control",
      description:
        "A series exploring the fundamentals of calculus of variations and its applications in optimal control.",
      posts: [
        {
          id: "cov1",
          title: "Introduction to Calculus of Variations",
          link: "/blogs/cov_series/cov1", // Link to the CoV1.js page
          date: "January 1, 2025",
        },
        // Add more posts as you create them
        {
          id: "cov2",
          title: "Euler-Lagrange Equations",
          link: "/blogs/cov_series/cov2",
          date: "January 10, 2025",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Blogs</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Sharing insights, tutorials, and thoughts on topics in AI, mathematics, and beyond.
        </p>
      </div>

      {/* Blog Series Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Series</h2>
        <div className="grid gap-8">
          {blogSeries.map((series) => (
            <div
              key={series.id}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800">{series.title}</h3>
              <p className="text-gray-600 mt-4">{series.description}</p>

              {/* Expandable Posts */}
              <div className="mt-6">
                {series.posts.map((post) => (
                  <div
                    key={post.id}
                    className="mb-4 pl-4 border-l-2 border-gray-300 hover:border-green-500 transition-colors"
                  >
                    <h4 className="text-lg font-bold text-gray-800">
                      <a href={post.link} className="text-indigo-600 underline">
                        {post.title}
                      </a>
                    </h4>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
