import { useEffect, useState } from 'react'
import './Monitor.css'
import Taskbar from './Taskbar.jsx'
import Desktop from './Desktop.jsx'

function Monitor() {
  const [on, setOn] = useState(false)
  const [showDesktop, setShowDesktop] = useState(false)

  useEffect(() => {
    // Monitor power-on animation
    const powerOnTimer = setTimeout(() => setOn(true), 200)
    
    // Show desktop after 3 seconds from power-on
    const desktopTimer = setTimeout(() => setShowDesktop(true), 3600)
    
    return () => {
      clearTimeout(powerOnTimer)
      clearTimeout(desktopTimer)
    }
  }, [])

  return (
    <div className={`MonitorScreen ${on ? 'on' : ''}`}>
      {!showDesktop ? (
        <div style={{
          width: '100%',
          height: '100%',
          background: '#00000093',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '2rem',
          fontFamily: 'Tahoma, sans-serif'
        }}>
        </div>
      ) : (
        <>
          <Desktop/>
          <Taskbar/>
        </>
      )}
    </div>
  )
}

export default Monitor