import { useEffect, useState } from 'react'
import './Taskbar.css'

function Taskbar() {
  const [time, setTime] = useState('');
  const [volume, setVolume] = useState(true);
  const [ModalHoverC, setModalHoverC] = useState(false);
  const [ModalHoverA, setModalHoverA] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12 || 12 // convert 0 -> 12
      const mins = minutes < 10 ? `0${minutes}` : minutes

      setTime(`${hours}:${mins} ${ampm}`)
    }

    updateTime() // run once immediately
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  function SetVolToggle(){
    setVolume(!volume);
  }

  function SetModCToggle(){
    setModalHoverC(!ModalHoverC);
  }
  function SetModAToggle(){
    setModalHoverA(!ModalHoverA);
  }

  return (
    <div className='Taskbar'>
      <div className='Left'>
        <button>start</button>
      </div>

      <div className='Middle'></div>

      <div className='Right'>
        <div className='systraybtns'>
            <button id='Resume' className='Systraybtn'>R</button>
            <button id='Availability' className='Systraybtn' onMouseEnter={SetModAToggle} onMouseLeave={SetModAToggle}>A</button>
            <button id='Contact' className='Systraybtn' onMouseEnter={SetModCToggle} onMouseLeave={SetModCToggle}>C</button>
            <button id='Volume' className='Systraybtn' style={{textDecoration: volume ? "line-through" : "none"}} onClick={SetVolToggle} >V</button>
        </div>
        {/* Time right next to P */}
        <span className='Clock'>{time}</span>
        <span className='HoverModalC' style={{display: ModalHoverC ? "block" : "none"}}>My contact is </span>
        <span className='HoverModalA' style={{display: ModalHoverA ? "block" : "none"}}>R - not available</span>
      </div>
    </div>
  )
}

export default Taskbar
