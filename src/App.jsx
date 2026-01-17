import { useRef, useState, useEffect } from 'react'
import Monitor from './components/Monitor.jsx'

function App() {
  const screenRef = useRef(null)
  const [booted, setBooted] = useState(false)

  const handleMouseMove = (e) => {
    const screen = screenRef.current
    if (!screen) return

    const rect = screen.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateX = ((y - centerY) / centerY) * 2
    const rotateY = ((x - centerX) / centerX) * 2

    screen.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.01)
    `
  }

  const handleMouseLeave = () => {
    const screen = screenRef.current
    if (!screen) return

    screen.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === 'e') {
        setBooted(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="Monitor">
      <div
        ref={screenRef}
        className="MonitorScr"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {!booted && <h2>Press E to bootup</h2>}
        {booted && <Monitor />}
      </div>
    </div>
  )
}

export default App
