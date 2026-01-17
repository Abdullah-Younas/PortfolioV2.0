import { useEffect, useState } from 'react'
import './Taskbar.css'
import resume from '../assets/Malik Muhammad Abdullah Younas Resume.pdf';

function Taskbar() {
  const [time, setTime] = useState('');
  const [volume, setVolume] = useState(true);
  const [ModalHoverC, setModalHoverC] = useState(false);
  const [ModalHoverA, setModalHoverA] = useState(false);
  const [startMenuOpen, setStartMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = now.getMinutes()
      const ampm = hours >= 12 ? 'PM' : 'AM'

      hours = hours % 12 || 12
      const mins = minutes < 10 ? `0${minutes}` : minutes

      setTime(`${hours}:${mins} ${ampm}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.Taskbar') && !e.target.closest('.StartMenu')) {
        setStartMenuOpen(false);
      }
    };

    if (startMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [startMenuOpen]);

  function SetVolToggle(){
    setVolume(!volume);
  }

  function SetModCToggle(){
    setModalHoverC(!ModalHoverC);
  }
  
  function SetModAToggle(){
    setModalHoverA(!ModalHoverA);
  }

  function toggleStartMenu(e){
    e.stopPropagation();
    setStartMenuOpen(!startMenuOpen);
  }

  return (
    <>
      <div className='Taskbar'>
        <div className='Left'>
          <button onClick={toggleStartMenu}>start</button>
        </div>

        <div className='Middle'></div>

        <div className='Right'>
          <div className='systraybtns'>
            <button id='Availability' className='Systraybtn' onMouseEnter={SetModAToggle} onMouseLeave={SetModAToggle}>A</button>
            <button id='Contact' className='Systraybtn' onMouseEnter={SetModCToggle} onMouseLeave={SetModCToggle}>C</button>
          </div>
          <span className='Clock'>{time}</span>
          <span className='HoverModalC' style={{display: ModalHoverC ? "block" : "none"}}>My contact is abdullahyounas0805@gmail.com</span>
          <span className='HoverModalA' style={{display: ModalHoverA ? "block" : "none"}}>🔴 - not available</span>
        </div>
      </div>

      {startMenuOpen && (
        <div className='StartMenu'>
          <div className='StartMenuRight'>
            <div className='StartMenuTop'>
              <button className='MenuButton' onClick={() => {
                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=abdullahyounas0805@gmail.com&su=Hire/Contact Inquiry', '_blank');
                setStartMenuOpen(false);
              }}>
                <div className='MenuIcon'>📧</div>
                <div className='MenuText'>Hire / Contact</div>
              </button>
            </div>
            <div className='StartMenuBottom'>
              <button className='MenuButton' onClick={() => {
                const confirmed = window.confirm('Are you sure you want to shut down?');
                if (confirmed) {
                  window.close();
                  // Fallback if window.close() doesn't work (browsers prevent closing tabs not opened by script)
                  setTimeout(() => {
                    window.location.href = 'about:blank';
                  }, 100);
                }
              }}>
                <div className='MenuIcon'>⏻</div>
                <div className='MenuText'>Shutdown / Exit</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Taskbar