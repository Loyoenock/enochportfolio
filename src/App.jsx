import './App.css'
import "./index.css"
import { LoadingScreen } from './components/LoadingScreen'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileNav } from './components/sections/MobileNav'

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoading ? 'opacity' : 'opacity-0'} bg-black text-gray-100`}>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
    </>
  )
}

export default App
