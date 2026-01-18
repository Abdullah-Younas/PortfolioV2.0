import { useEffect, useState } from 'react'
import './Taskbar.css'

// Taskbar Component
function Taskbar() {
  const [time, setTime] = useState('')
  const [ModalHoverC, setModalHoverC] = useState(false)
  const [ModalHoverA, setModalHoverA] = useState(false)
  const [startMenuOpen, setStartMenuOpen] = useState(false)

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
        setStartMenuOpen(false)
      }
    }

    if (startMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => document.removeEventListener('click', handleClickOutside)
  }, [startMenuOpen])

  function toggleStartMenu(e) {
    e.stopPropagation()
    setStartMenuOpen(!startMenuOpen)
  }

  return (
    <>
      <div style={{
        width: '100%',
        height: 'clamp(32px, 5vh, 48px)',
        flexShrink: 0,
        background: 'linear-gradient(0.25turn, rgb(65, 65, 255), rgb(111, 111, 255))',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }}>
        <button
          onClick={toggleStartMenu}
          style={{
            color: 'rgba(245, 222, 179, 0.8)',
            height: '100%',
            width: 'clamp(60px, 10vw, 120px)',
            border: 'none',
            backgroundColor: 'rgb(0, 204, 0)',
            transition: 'all 0.3s',
            fontSize: 'clamp(12px, 2vw, 24px)',
            fontWeight: 'bolder',
            fontStyle: 'italic',
            cursor: 'pointer',
            flexShrink: 0
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'green'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(0, 204, 0)'}
        >
          start
        </button>

        <div style={{ flex: 1 }}></div>

        <div style={{
          paddingRight: 'clamp(4px, 1vw, 16px)',
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: 'clamp(4px, 1vw, 12px)',
          flexShrink: 0
        }}>
          <button
            onMouseEnter={() => setModalHoverA(true)}
            onMouseLeave={() => setModalHoverA(false)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: 'clamp(10px, 1.5vw, 18px)',
              color: 'rgba(245, 222, 179, 0.8)',
              fontStyle: 'italic',
              cursor: 'pointer',
              padding: '2px 4px'
            }}
          >
            🟢
          </button>
          <button
            onMouseEnter={() => setModalHoverC(true)}
            onMouseLeave={() => setModalHoverC(false)}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: 'clamp(10px, 1.5vw, 18px)',
              color: 'rgba(245, 222, 179, 0.8)',
              fontStyle: 'italic',
              cursor: 'pointer',
              padding: '2px 4px'
            }}
          >
            C
          </button>
          <span style={{
            cursor: 'default',
            fontSize: 'clamp(10px, 1.5vw, 18px)',
            color: 'rgba(245, 222, 179, 0.8)',
            fontStyle: 'italic',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}>
            {time}
          </span>
          {ModalHoverC && (
            <span style={{
              position: 'absolute',
              backgroundColor: 'white',
              bottom: '100%',
              right: 'clamp(4px, 1vw, 16px)',
              marginBottom: '4px',
              padding: 'clamp(3px, 0.5vw, 5px)',
              fontSize: 'clamp(9px, 1.2vw, 12px)',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              zIndex: 10000
            }}>
              abdullahyounas0805@gmail.com
            </span>
          )}
          {ModalHoverA && (
            <span style={{
              position: 'absolute',
              backgroundColor: 'white',
              bottom: '100%',
              right: 'clamp(4px, 1vw, 16px)',
              marginBottom: '4px',
              padding: 'clamp(3px, 0.5vw, 5px)',
              fontSize: 'clamp(9px, 1.2vw, 12px)',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              zIndex: 10000
            }}>
              Available
            </span>
          )}
        </div>
      </div>

      {startMenuOpen && (
        <div style={{
          position: 'fixed',
          bottom: 'clamp(32px, 5vh, 48px)',
          left: 0,
          width: 'clamp(280px, 40vw, 380px)',
          height: 'clamp(320px, 50vh, 480px)',
          background: 'linear-gradient(to right, #3c5ea6 0%, #3c5ea6 clamp(36px, 8vw, 52px), #ffffff clamp(36px, 8vw, 52px), #ffffff 100%)',
          border: '2px solid #0831d9',
          borderRadius: '8px 8px 0 0',
          boxShadow: '2px -2px 8px rgba(0,0,0,0.5)',
          display: 'flex',
          zIndex: 9999,
          animation: 'slideUp 0.15s ease-out'
        }}>
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            background: 'linear-gradient(to bottom, #5291ff, #4084ff)'
          }}>
            <div style={{
              flex: 1,
              padding: 'clamp(8px, 1.5vw, 12px)'
            }}>
              <button
                onClick={() => {
                  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=abdullahyounas0805@gmail.com&su=Hire/Contact Inquiry', '_blank')
                  setStartMenuOpen(false)
                }}
                style={{
                  width: '100%',
                  background: 'white',
                  border: '1px solid #0a3ea8',
                  padding: 'clamp(8px, 1.5vw, 12px)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: 'clamp(10px, 1.5vw, 14px)',
                  fontFamily: 'Tahoma, sans-serif',
                  display: 'flex',
                  fontStyle: 'italic',
                  alignItems: 'center',
                  gap: 'clamp(6px, 1vw, 12px)',
                  borderRadius: '4px',
                  transition: 'all 0.1s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to bottom, #3d91ff, #206ee7)'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = 'black'
                }}
              >
                <div style={{
                  width: 'clamp(20px, 3vw, 32px)',
                  height: 'clamp(20px, 3vw, 32px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(16px, 2.5vw, 24px)'
                }}>
                  📧
                </div>
                <div style={{ fontWeight: 'bold' }}>Hire / Contact</div>
              </button>
            </div>
            <div style={{
              background: 'linear-gradient(to bottom, #4084ff, #5291ff)',
              padding: 'clamp(6px, 1vw, 8px)'
            }}>
              <button
                onClick={() => {
                  const confirmed = window.confirm('Are you sure you want to shut down?')
                  if (confirmed) {
                    window.close()
                    setTimeout(() => {
                      window.location.href = 'about:blank'
                    }, 100)
                  }
                }}
                style={{
                  width: '100%',
                  background: 'white',
                  border: '1px solid #0a3ea8',
                  padding: 'clamp(8px, 1.5vw, 12px)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: 'clamp(10px, 1.5vw, 14px)',
                  fontFamily: 'Tahoma, sans-serif',
                  display: 'flex',
                  fontStyle: 'italic',
                  alignItems: 'center',
                  gap: 'clamp(6px, 1vw, 12px)',
                  borderRadius: '4px',
                  transition: 'all 0.1s'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(to bottom, #3d91ff, #206ee7)'
                  e.target.style.color = 'white'
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'white'
                  e.target.style.color = 'black'
                }}
              >
                <div style={{
                  width: 'clamp(20px, 3vw, 32px)',
                  height: 'clamp(20px, 3vw, 32px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(16px, 2.5vw, 24px)'
                }}>
                  ⏻
                </div>
                <div style={{ fontWeight: 'bold' }}>Shutdown / Exit</div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Taskbar