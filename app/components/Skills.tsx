"use client"

import { motion } from "framer-motion"
import { Code, Database, Globe, Server } from "lucide-react"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

export default function Skills() {
  const { language } = useLanguage()
  const t = translations[language]

  const skills = [
    { name: t.skills.frontend, icon: Globe, description: t.skills.frontendDesc },
    { name: t.skills.backend, icon: Server, description: t.skills.backendDesc },
    { name: t.skills.database, icon: Database, description: t.skills.databaseDesc },
    { name: t.skills.versionControl, icon: Code, description: t.skills.versionControlDesc },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          {t.skills.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <skill.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

