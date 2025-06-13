import { Routes, Route } from 'react-router-dom'
import { Analytics } from "@vercel/analytics/react"
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './components/ThemeProvider'
import HomePage from './pages/HomePage'
import InformationPage from './pages/InformationPage'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900 font-sans text-logo-800 dark:text-gray-100 transition-colors duration-200">
      <ThemeProvider>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/information" element={<InformationPage />} />
          </Routes>
        </main>
        <Footer />
        <Analytics />
      </ThemeProvider>
    </div>
  )
}

export default App 