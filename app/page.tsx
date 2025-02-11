import { AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import Toolbox from "./components/Toolbox"
import Skills from "./components/Skills"
import { ProjectCarousel } from "./components/ProjectCarousel"
import { InteractiveCodingChallenge } from "./components/InteractiveCodingChallenge"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import PageTransition from "./components/PageTransition"
import ChessGame from "./components/ChessGame"
import TechStack from "./components/TechStack"
import GitHubActivity from "./components/GitHubActivity"
import BlogPosts from "./components/BlogPosts"

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Header />
        <AnimatePresence>
          <main className="pt-16">
            <Hero />
            <AboutMe />
            <TechStack />
            <Toolbox />
            <Skills />
            <section id="projects" className="py-20 bg-white dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
                <ProjectCarousel />
              </div>
            </section>
            <GitHubActivity />
            <BlogPosts />
            <section id="challenge" className="py-20 bg-gray-50 dark:bg-gray-700">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Coding Challenge</h2>
                <InteractiveCodingChallenge />
              </div>
            </section>
            <section id="chess" className="py-20 bg-white dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Chess Game</h2>
                <ChessGame />
              </div>
            </section>
            <Contact />
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </PageTransition>
  )
}

