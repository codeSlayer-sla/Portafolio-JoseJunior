"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

export function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { language } = useLanguage()
  const t = translations[language]

  const projects = t.projects.list

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <div className="relative h-64 md:h-96">
            <Image
              src={projects[currentIndex].image || "/placeholder.svg"}
              alt={projects[currentIndex].title}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{projects[currentIndex].title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{projects[currentIndex].description}</p>
            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              {t.projects.viewProject}
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-gray-800 dark:text-white"
        aria-label={t.projects.previousProject}
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md text-gray-800 dark:text-white"
        aria-label={t.projects.nextProject}
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

