import { useEffect, useState } from 'react'
import './Monitor.css'
import Taskbar from './Taskbar.jsx'
import Desktop from './Desktop.jsx'

function Monitor() {
  const [on, setOn] = useState(false)

  useEffect(() => {
    // small delay = feels like power-on
    const t = setTimeout(() => setOn(true), 200)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`MonitorScreen ${on ? 'on' : ''}`}>
      <Taskbar/>
      <Desktop folder={3}/>
      <Desktop folder={2}/>
      <Desktop folder={1}/>
    </div>
  )
}

export default Monitor
