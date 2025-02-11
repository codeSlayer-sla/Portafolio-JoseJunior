"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

const blogPosts = [
  {
    title: "Understanding React Hooks",
    excerpt: "An in-depth look at React Hooks and how they can simplify your code.",
    date: "2023-05-15",
    url: "/blog/understanding-react-hooks",
  },
  {
    title: "Building Scalable APIs with Node.js",
    excerpt: "Learn how to create robust and scalable APIs using Node.js and Express.",
    date: "2023-04-22",
    url: "/blog/building-scalable-apis-nodejs",
  },
  {
    title: "Python for Data Science: Getting Started",
    excerpt: "A beginner's guide to using Python for data analysis and visualization.",
    date: "2023-03-10",
    url: "/blog/python-data-science-getting-started",
  },
]

export default function BlogPosts() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="blog-posts" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          {t.blogPosts.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  <a href={post.url} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {post.title}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{post.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

