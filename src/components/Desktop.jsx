import { useState } from 'react'
import './Desktop.css'

function Desktop() {
  const [windows, setWindows] = useState([])
  const [dragging, setDragging] = useState(null)
  const [resizing, setResizing] = useState(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  const openWindow = (type, title) => {
    const newWindow = {
      id: Date.now(),
      type,
      title,
      x: 100 + windows.length * 30,
      y: 100 + windows.length * 30,
      width: 400,
      height: 300
    }
    setWindows([...windows, newWindow])
  }

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id))
  }

  const handleMouseDown = (e, windowId) => {
    const window = windows.find(w => w.id === windowId)
    setDragging(windowId)
    setOffset({
      x: e.clientX - window.x,
      y: e.clientY - window.y
    })
    
    // Bring to front
    setWindows(windows.filter(w => w.id !== windowId).concat(window))
  }

  const handleResizeStart = (e, windowId) => {
    e.stopPropagation()
    const window = windows.find(w => w.id === windowId)
    setResizing(windowId)
    setOffset({
      x: e.clientX,
      y: e.clientY,
      startWidth: window.width,
      startHeight: window.height
    })
    
    // Bring to front
    setWindows(windows.filter(w => w.id !== windowId).concat(window))
  }

  const handleMouseMove = (e) => {
    if (dragging) {
      setWindows(windows.map(w => 
        w.id === dragging 
          ? { ...w, x: e.clientX - offset.x, y: e.clientY - offset.y }
          : w
      ))
    } else if (resizing) {
      const deltaX = e.clientX - offset.x
      const deltaY = e.clientY - offset.y
      
      setWindows(windows.map(w => {
        if (w.id === resizing) {
          const newWidth = Math.min(
            Math.max(200, offset.startWidth + deltaX),
            window.innerWidth - 1200
          )
          const newHeight = Math.min(
            Math.max(150, offset.startHeight + deltaY),
            window.innerHeight - 300
          )
          return { ...w, width: newWidth, height: newHeight }
        }
        return w
      }))
    }
  }

  const handleMouseUp = () => {
    setDragging(null)
    setResizing(null)
  }

  function OpenWebFolder() {
    openWindow('folder', 'Web Projects')
  }

  function OpenGameFolder() {
    openWindow('folder', 'Game Projects')
  }

  return (
    <>
      <div 
        className="Desktop"
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ position: 'relative' }}
      >
        <div className='Icon' onClick={OpenWebFolder}>
          📁
        </div>
        <div className='Icon' onClick={() => openWindow('document', 'About.txt')}>
          📄
        </div>
        <div className='Icon' onClick={OpenGameFolder}>
          📁
        </div>
        <div className='Icon' onClick={() => openWindow('document', 'Resume.pdf')}>
          📄
        </div>

        {/* Windows */}
        {windows.map((window) => (
          <div
            key={window.id}
            style={{
              position: 'absolute',
              left: `${window.x}px`,
              top: `${window.y}px`,
              width: `${window.width}px`,
              height: `${window.height}px`,
              background: 'white',
              border: '1px solid #ccc',
              borderRadius: '8px 8px 0 0',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              zIndex: 1000
            }}
          >
            {/* Title Bar */}
            <div
              onMouseDown={(e) => handleMouseDown(e, window.id)}
              style={{
                background: 'linear-gradient(to bottom, #e8e8e8, #d0d0d0)',
                padding: '8px 12px',
                cursor: dragging === window.id ? 'grabbing' : 'grab',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid #aaa',
                userSelect: 'none'
              }}
            >
              <span style={{ fontWeight: 'bold', fontSize: '14px' }}>{window.title}</span>
              <button
                onClick={() => closeWindow(window.id)}
                onMouseDown={(e) => e.stopPropagation()}
                style={{
                  background: '#ff5f56',
                  border: 'none',
                  borderRadius: '50%',
                  width: '16px',
                  height: '16px',
                  cursor: 'pointer',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
              {window.type === 'folder' ? (
                <div>
                  <h3 style={{ marginTop: 0 }}>{window.title}</h3>
                  <p>This is a folder containing various projects...</p>
                  <ul>
                    <li>Project 1</li>
                    <li>Project 2</li>
                    <li>Project 3</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <h3 style={{ marginTop: 0 }}>{window.title}</h3>
                  <p>This is the content of {window.title}.</p>
                  <p>You can add any content here - text, images, links, etc.</p>
                </div>
              )}
            </div>

            {/* Resize Handle */}
            <div
              onMouseDown={(e) => handleResizeStart(e, window.id)}
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '20px',
                height: '20px',
                cursor: 'nwse-resize',
                background: 'linear-gradient(135deg, transparent 50%, #999 50%)',
                borderRadius: '0 0 8px 0'
              }}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default Desktop