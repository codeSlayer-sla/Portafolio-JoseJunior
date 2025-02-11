"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

interface GitHubEvent {
  id: string
  type: string
  repo: {
    name: string
  }
  payload: {
    commits?: Array<{
      message: string
    }>
  }
  created_at: string
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([])
  const { language } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    fetch("https://api.github.com/users/yourusername/events/public")
      .then((response) => response.json())
      .then((data) => setEvents(data.slice(0, 5)))
      .catch((error) => console.error("Error fetching GitHub activity:", error))
  }, [])

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white"
        >
          {t.githubActivity.title}
        </motion.h2>
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
            >
              <p className="text-gray-800 dark:text-white">
                {event.type === "PushEvent" && event.payload.commits
                  ? `Pushed to ${event.repo.name}: ${event.payload.commits[0].message}`
                  : `${event.type} on ${event.repo.name}`}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {new Date(event.created_at).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

