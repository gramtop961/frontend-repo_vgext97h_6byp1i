import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600" />
            <span className="text-lg font-semibold">Your Brand</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-gray-700 sm:flex">
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#get-started" className="hover:text-gray-900">Get Started</a>
            <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-white hover:bg-black">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
