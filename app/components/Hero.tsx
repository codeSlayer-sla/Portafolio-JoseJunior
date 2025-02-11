"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"
import type React from "react"

const pulseAnimation = {
  scale: [1, 1.02, 1],
  transition: {
    duration: 2,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

interface ProgressBarProps {
  progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div className="w-full bg-blue-200 rounded-full h-2.5 mb-4">
    <motion.div
      className="bg-blue-100 h-2.5 rounded-full"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.5, delay: 0.2 }}
    />
  </div>
)

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language]
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="absolute top-6 right-6 w-60 h-64 rounded-full overflow-hidden">
          <img src="/Leet.png" alt={t.hero.imageAlt} className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-80 right-6 w-full sm:w-auto px-4 text-center text-white text-xl font-semibold">
          <p>{t.hero.quote}</p>
        </div>

        <div className="absolute bottom-3 right-6 w-60 h-64 border-2 border-gray-300 overflow-hidden rounded-lg">
          <img src="/Leet.png" alt={t.hero.imageAlt} className="w-full h-full object-cover" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          {t.hero.greeting}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl mb-6"
        >
          {t.hero.subtitle}
        </motion.p>

        <div className="mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div
              animate={pulseAnimation}
              className="bg-blue-500 bg-opacity-80 rounded-lg p-4 shadow-lg w-full max-w-md mb-4"
            >
              <h2 className="text-lg font-semibold mb-2">{t.hero.currentlyLearning}</h2>
              <p className="text-blue-100 mb-2">{t.hero.learningTopic}</p>
              <ProgressBar progress={30} />
              <p className="text-sm text-blue-100">30% {t.hero.completed}</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              animate={pulseAnimation}
              className="bg-blue-500 bg-opacity-80 rounded-lg p-4 shadow-lg w-full max-w-md"
            >
              <h2 className="text-lg font-semibold mb-2">{t.hero.currentProject}</h2>
              <p className="text-blue-100 mb-2">{t.hero.projectDescription}</p>
              <ProgressBar progress={20} />
              <p className="text-sm text-blue-100">20% {t.hero.completed}</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-4">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
          >
            {t.hero.cta}
          </motion.a>
          <motion.a
            href="/assets/Hoja de vida.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-400 transition duration-300 border-2 border-white"
          >
            {t.hero.viewCV}
          </motion.a>
        </div>
      </div>
    </section>
  )
}

