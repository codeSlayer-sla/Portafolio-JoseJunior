"use client"

import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

export default function AboutMe() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          {t.aboutMe.title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">{t.aboutMe.paragraph1}</p>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">{t.aboutMe.paragraph2}</p>
          <p className="text-lg text-gray-600 dark:text-gray-300">{t.aboutMe.paragraph3}</p>
        </motion.div>
      </div>
    </section>
  )
}

