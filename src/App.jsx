import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import SoftSkills from './components/SoftSkills'
import Projects from './components/Projects'
import Research from './components/Research'
import Contact from './components/Contact'

function App() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className="min-h-screen">
            <Navbar theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Skills />
                <SoftSkills />
                <Projects />
                <Research />
                <Contact />
            </main>
        </div>
    )
}

export default App
