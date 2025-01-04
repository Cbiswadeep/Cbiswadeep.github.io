import React, { useState } from 'react';

const Blogs = () => {
  // Blog data
  const singleBlogs = [
    {
      title: "Hi There!",
      description: "An introduction to my blog space and what you can expect.",
      link: "/blog/hi-there",
      date: "January 1, 2025",
    },
    // {
    //   title: "The Beauty of Neural Networks",
    //   description: "Exploring the intuition behind neural networks and their applications.",
    //   link: "/blog/beauty-of-neural-networks",
    //   date: "February 15, 2025",
    // },
  ];

  const blogSeries = [
    {
      title: "Calculus of Variations and Optimal Control",
      description:
        "A series exploring the fundamentals of calculus of variations and its applications in optimal control.",
      posts: [
        { title: "Introduction", link: "/blog/calculus-variations/intro", date: "January 1, 2025" },
        // { title: "Functional Spaces", link: "/blog/calculus-variations/functional-spaces", date: "January 5, 2025" },
        // { title: "Euler-Lagrange Equations", link: "/blog/calculus-variations/euler-lagrange", date: "January 10, 2025" },
        // { title: "Constrained Optimization", link: "/blog/calculus-variations/constrained-opt", date: "January 15, 2025" },
        // { title: "Dynamic Programming", link: "/blog/calculus-variations/dynamic-programming", date: "January 20, 2025" },
        // { title: "Pontryagin’s Maximum Principle", link: "/blog/calculus-variations/pontryagin", date: "January 25, 2025" },
        // { title: "Hamiltonian Systems", link: "/blog/calculus-variations/hamiltonian", date: "January 30, 2025" },
        // { title: "Applications in Robotics", link: "/blog/calculus-variations/robotics", date: "February 5, 2025" },
        // { title: "Applications in Control Theory", link: "/blog/calculus-variations/control-theory", date: "February 10, 2025" },
        // { title: "Conclusion and Future Directions", link: "/blog/calculus-variations/conclusion", date: "February 15, 2025" },
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

      {/* Single Blogs Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Single Posts</h2>
        <div className="grid gap-8">
          {singleBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.date}</p>
              <p className="text-gray-600 mt-4">{blog.description}</p>
              <a
                href={blog.link}
                className="text-indigo-600 underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Series Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Series</h2>
        <div className="grid gap-8">
          {blogSeries.map((series, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800">{series.title}</h3>
              <p className="text-gray-600 mt-4">{series.description}</p>

              {/* Expandable Posts */}
              <div className="mt-6">
                {series.posts.map((post, idx) => (
                  <div
                    key={idx}
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
