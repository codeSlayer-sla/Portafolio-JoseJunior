import Link from "next/link"
import Image from "next/image"
import { DarkModeToggle } from "./DarkModeToggle"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useLanguage } from "../contexts/LanguageContext"
import { translations } from "../translations"

export default function Header() {
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          {t.header.name}
        </Link>
        <ul className="flex space-x-4">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {t.header.about}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {t.header.skills}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {t.header.projects}
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {t.header.contact}
            </button>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <LanguageSwitcher />
          <div className="w-16 h-16">
            <Image src="/qr-code-placeholder.png" alt={t.header.qrCodeAlt} width={64} height={64} />
          </div>
        </div>
      </nav>
    </header>
  )
}

