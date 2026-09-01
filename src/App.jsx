import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PalacesPage from './pages/PalacesPage'
import StarsPage from './pages/StarsPage'
import TermsPage from './pages/TermsPage'
import LinYanPage from './pages/LinYanPage'
import JiaSongPage from './pages/JiaSongPage'
import CouplePage from './pages/CouplePage'
import './styles/App.css'

export default function App() {
  const location = useLocation()

  // 換頁捲回頂端
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palaces" element={<PalacesPage />} />
        <Route path="/stars" element={<StarsPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/linyan" element={<LinYanPage />} />
        <Route path="/jiasong" element={<JiaSongPage />} />
        <Route path="/couple" element={<CouplePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
