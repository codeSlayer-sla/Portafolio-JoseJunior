"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

interface Tool {
  name: string
  image: string
  level: 1 | 2 | 3 | 4
}

const tools: Tool[] = [
  { name: "JavaScript", image: "/images/javascript.png", level: 4 },
  { name: "React", image: "/images/react.png", level: 3 },
  { name: "Node.js", image: "/images/nodejs.png", level: 3 },
  { name: "Python", image: "/images/python.png", level: 2 },
  { name: "Git", image: "/images/git.png", level: 4 },
  { name: "Docker", image: "/images/docker.png", level: 2 },
]

function Badge({ tool }: { tool: Tool }) {
  return (
    <div className="relative">
      <Image
        src={tool.image || "/placeholder.svg"}
        alt={tool.name}
        width={64}
        height={64}
        className="rounded-lg shadow-md"
      />
      <div className="absolute bottom-0 right-0 bg-blue-600 dark:bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
        {tool.level}
      </div>
    </div>
  )
}

export default function Toolbox() {
  const { language } = useLanguage()
  const t = translations[language]

  const levelDescriptions = [
    { level: 1, description: t.toolbox.levels.basics },
    { level: 2, description: t.toolbox.levels.familiar },
    { level: 3, description: t.toolbox.levels.capable },
    { level: 4, description: t.toolbox.levels.proficient },
  ]

  return (
    <section id="toolbox" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          {t.toolbox.title}
        </motion.h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-12">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <Badge tool={tool} />
            </motion.div>
          ))}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">{t.toolbox.level}</th>
                <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300">{t.toolbox.description}</th>
              </tr>
            </thead>
            <tbody>
              {levelDescriptions.map(({ level, description }) => (
                <tr key={level} className="border-b border-gray-200 dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{level}</td>
                  <td className="px-4 py-2 text-gray-800 dark:text-gray-300">{description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

