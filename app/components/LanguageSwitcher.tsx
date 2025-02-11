"use client"

import { useLanguage } from "../contexts/LanguageContext"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-200"
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  )
}

