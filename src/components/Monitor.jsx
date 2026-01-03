import { useEffect, useState } from 'react'
import './Monitor.css'

function Monitor() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    // small delay = feels like power-on
    const t = setTimeout(() => setOn(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`MonitorScreen ${on ? 'on' : ''}`}>
        <div className='Taskbar'></div>
    </div>
  )
}

export default Monitor
