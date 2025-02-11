"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

export function InteractiveCodingChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showResult, setShowResult] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  const challenges = t.codingChallenge.challenges

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)
  }

  const nextChallenge = () => {
    setCurrentChallenge((prev) => (prev + 1) % challenges.length)
    setSelectedAnswer("")
    setShowResult(false)
  }

  const challenge = challenges[currentChallenge]

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">{t.codingChallenge.title}</h3>
      <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">{challenge.question}</p>
      <div className="space-y-2">
        <AnimatePresence mode="wait">
          {challenge.options.map((option) => (
            <motion.button
              key={option}
              onClick={() => handleAnswer(option)}
              className={`w-full p-2 text-left rounded ${
                selectedAnswer === option
                  ? option === challenge.correctAnswer
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
              }`}
              disabled={showResult}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {option}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      {showResult && (
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-bold text-gray-800 dark:text-white">
            {selectedAnswer === challenge.correctAnswer ? t.codingChallenge.correct : t.codingChallenge.incorrect}
          </p>
          <button onClick={nextChallenge} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {t.codingChallenge.nextChallenge}
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}

