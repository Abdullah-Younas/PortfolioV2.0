import { useState, useMemo, memo, useEffect } from 'react'
import About from './Pdf/About';
import ACB from './Pdf/ACB';
import BloomWars from './Pdf/BloomWars';
import Boardify from './Pdf/Boardify';
import Cv from './Pdf/Cv';
import GENG from './Pdf/GENG';
import Haze from './Pdf/Haze';
import PongFusion from './Pdf/PongFusion';
import Sencdec from './Pdf/Sencdec';
import Smochat from './Pdf/Smochat';
import Turfist from './Pdf/Turfist';
import Whispern from './Pdf/Whispern';
import Pong from './games/Pong';
import Snake from './games/Snake';
import { PDFViewer } from '@react-pdf/renderer'

// Memoized PDF Component to prevent re-renders
const MemoizedPDFViewer = memo(({ fileId }) => {
  const pdfContent = useMemo(() => {
    switch(fileId) {
      case 2: return <About />
      case 4: return <Cv />
      case 5: return <ACB />
      case 6: return <Sencdec />
      case 7: return <Whispern />
      case 8: return <Boardify />
      case 9: return <Smochat />
      case 10: return <BloomWars />
      case 11: return <Haze />
      case 12: return <PongFusion />
      case 13: return <Turfist />
      case 14: return <GENG />
      default: return null
    }
  }, [fileId])

  return (
    <PDFViewer width="100%" height="100%" showToolbar={false}>
      {pdfContent}
    </PDFViewer>
  )
})

// Desktop Component
function Desktop() {
  const [windows, setWindows] = useState([])
  const [dragging, setDragging] = useState(null)
  const [resizing, setResizing] = useState(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [icons, setIcons] = useState([
    { id: 'web-projects', type: 'folder', title: 'Web Projects', emoji: '📁', x: 0, y: 0 },
    { id: 2, type: 'file', title: 'About', emoji: '📄', x: 0, y: 100, hideStats: true, fileData: { id: 2, name: 'About', language: 'Text', rarity: 3, date: '2024-01-01' }},
    { id: 'game-projects', type: 'folder', title: 'Game Projects', emoji: '📁', x: 0, y: 200 },
    { id: 4, type: 'file', title: 'CV', emoji: '📄', x: 0, y: 300, hideStats: true, fileData: { id: 4, name: 'Resume', language: 'PDF', rarity: 5, date: '2024-01-01' }},
    { id: 'pong-game', type: 'game', title: 'Pong', emoji: '🏓', x: 100, y: 0 },  // Move to second column
    { id: 'snake-game', type: 'game', title: 'Snake', emoji: '🐍', x: 100, y: 100 }  // Move to second column
  ])
  const [draggingIcon, setDraggingIcon] = useState(null)
  
  const [folderContents] = useState({
    'Web Projects': [
      { id: 5, name: 'ACB Software and Extension', language: 'Python, Javascript', rarity: 2, date: '2025-10-01' },
      { id: 6, name: 'Sencdec', language: 'React', rarity: 4, date: '2025-09-11' },
      { id: 7, name: 'Whispern', language: 'React', rarity: 3, date: '2025-07-05' },
      { id: 8, name: 'Boardify', language: 'React', rarity: 2, date: '2025-04-18' },
      { id: 9, name: 'Smochat', language: 'React', rarity: 5, date: '2024-10-01' }
    ],
    'Game Projects': [
      { id: 10, name: 'BloomWars', language: 'Godot', rarity: 5, date: '2025-08-16' },
      { id: 11, name: 'Haze', language: 'Unreal Engine', rarity: 1, date: '2025-03-24' },
      { id: 12, name: 'PongFusion', language: 'Java', rarity: 4, date: '2025-02-10' },
      { id: 13, name: 'Turfist Prototype', language: 'Unreal Engine', rarity: 3, date: '2025-12-25' },
      { id: 14, name: 'GENG', language: 'OpenGL C++', rarity: 5, date: 'In Development' }
    ]
  })
  
  const [filters, setFilters] = useState({})

  const openWindow = (type, title, iconData = null) => {
    if (type === 'file' && iconData?.fileData) {
      if (windows.some(w => w.fileId === iconData.fileData.id)) {
        return
      }
    } else if (windows.some(w => w.title === title)) {
      return
    }
    
    const baseWidth = type === 'folder' ? 800 : type === 'game' ? 844 : 700
    const baseHeight = type === 'folder' ? 650 : type === 'game' ? 663 : 600
    
    const newWindow = {
      id: Date.now(),
      type,
      title,
      x: Math.min(50 + windows.length * 20, window.innerWidth - baseWidth - 50),
      y: Math.min(50 + windows.length * 20, window.innerHeight - baseHeight - 100),
      width: Math.min(baseWidth, window.innerWidth - 100),
      height: Math.min(baseHeight, window.innerHeight - 150),
      isMaximized: false,
      minWidth: type === 'game' ? 440 : 200,
      minHeight: type === 'game' ? 380 : 150,
      maxWidth: type === 'game' ? 844 : null,
      maxHeight: type === 'game' ? 663 : null
    }
    
    if (type === 'file' && iconData?.fileData) {
      newWindow.fileData = iconData.fileData
      newWindow.fileId = iconData.fileData.id
      newWindow.hideStats = iconData.hideStats || false
    }
    
    setWindows([...windows, newWindow])
    
    if (type === 'folder') {
      setFilters({
        ...filters,
        [title]: { sortBy: 'newest', language: 'all', lines: 'all', rarity: 'all' }
      })
    }
  }

  const toggleMaximize = (windowId) => {
    setWindows(windows.map(w => 
      w.id === windowId 
        ? { ...w, isMaximized: !w.isMaximized }
        : w
    ))
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
    
    setWindows(windows.filter(w => w.id !== windowId).concat(window))
  }

  const handleMouseMove = (e) => {
    if (draggingIcon) {
      setIcons(icons.map(icon =>
        icon.id === draggingIcon
          ? { ...icon, x: e.clientX - offset.x, y: e.clientY - offset.y }
          : icon
      ))
    } else if (dragging) {
      setWindows(windows.map(w => 
        w.id === dragging 
          ? { ...w, x: e.clientX - offset.x, y: e.clientY - offset.y }
          : w
      ))
    } else if (resizing) {
      e.preventDefault()
      const deltaX = e.clientX - offset.x
      const deltaY = e.clientY - offset.y
      
      setWindows(windows.map(w => {
        if (w.id === resizing) {
          const minWidth = w.minWidth || 200
          const minHeight = w.minHeight || 150
          const maxWidth = w.maxWidth || window.innerWidth - 50
          const maxHeight = w.maxHeight || window.innerHeight - 100
          
          let newWidth = Math.max(minWidth, Math.min(maxWidth, offset.startWidth + deltaX))
          let newHeight = Math.max(minHeight, Math.min(maxHeight, offset.startHeight + deltaY))
          
          if (w.type === 'game') {
            const aspectRatio = 4 / 3
            const widthBasedHeight = newWidth / aspectRatio
            const heightBasedWidth = newHeight * aspectRatio
            
            if (Math.abs(deltaX) > Math.abs(deltaY)) {
              newHeight = Math.max(minHeight, Math.min(maxHeight, widthBasedHeight))
              newWidth = newHeight * aspectRatio
            } else {
              newWidth = Math.max(minWidth, Math.min(maxWidth, heightBasedWidth))
              newHeight = newWidth / aspectRatio
            }
          }
          
          return { ...w, width: newWidth, height: newHeight }
        }
        return w
      }))
    }
  }

  useEffect(() => {
  const repositionIcons = () => {
    const gridSize = 100
    const maxItemsPerColumn = Math.floor((window.innerHeight - 100) / gridSize) // -100 for taskbar space
    
    setIcons(prevIcons => prevIcons.map((icon, index) => {
      const col = Math.floor(index / maxItemsPerColumn)
      const row = index % maxItemsPerColumn
      return {
        ...icon,
        x: col * gridSize,
        y: row * gridSize
      }
    }))
  }
  
  repositionIcons()
  window.addEventListener('resize', repositionIcons)
  return () => window.removeEventListener('resize', repositionIcons)
}, [])

  const handleMouseUp = () => {
    setDragging(null)
    setResizing(null)
    
    if (draggingIcon) {
      const gridSize = Math.max(60, Math.min(100, window.innerWidth / 10))
      setIcons(icons.map(icon =>
        icon.id === draggingIcon
          ? { 
              ...icon, 
              x: Math.round(icon.x / gridSize) * gridSize,
              y: Math.round(icon.y / gridSize) * gridSize
            }
          : icon
      ))
    }
    
    setDraggingIcon(null)
  }

  const handleIconMouseDown = (e, iconId) => {
    const icon = icons.find(i => i.id === iconId)
    setDraggingIcon(iconId)
    setOffset({
      x: e.clientX - icon.x,
      y: e.clientY - icon.y
    })
  }

  const handleIconDoubleClick = (icon) => {
    openWindow(icon.type, icon.title, icon)
  }
  
  const getFilteredFiles = (folder) => {
    const files = folderContents[folder] || []
    const filter = filters[folder] || { sortBy: 'newest' }
    
    let filtered = [...files]
    
    if (filter.sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
    } else if (filter.sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
    }
    
    return filtered
  }
  
  const openFile = (folder, file) => {
    if (windows.some(w => w.fileId === file.id)) {
      return
    }
    
    const baseWidth = 700
    const baseHeight = 600
    
    const newWindow = {
      id: Date.now(),
      type: 'file',
      title: file.name,
      folder,
      fileData: file,
      fileId: file.id,
      hideStats: false,
      isMaximized: false,
      x: Math.min(50 + windows.length * 20, window.innerWidth - baseWidth - 50),
      y: Math.min(50 + windows.length * 20, window.innerHeight - baseHeight - 100),
      width: Math.min(baseWidth, window.innerWidth - 100),
      height: Math.min(baseHeight, window.innerHeight - 150)
    }
    setWindows([...windows, newWindow])
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, 0.40)',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          onMouseDown={(e) => handleIconMouseDown(e, icon.id)}
          onDoubleClick={() => handleIconDoubleClick(icon)}
          style={{
            position: 'absolute',
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            width: 'clamp(50px, 8vw, 90px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '4px 0',
            userSelect: 'none',
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            cursor: 'pointer'
          }}
        >
          <div style={{ 
            fontSize: 'clamp(24px, 5vw, 48px)', 
            pointerEvents: 'none' 
          }}>
            {icon.emoji}
          </div>
          <div style={{
            fontSize: 'clamp(8px, 1.2vw, 12px)',
            maxWidth: '100%',
            textAlign: 'center',
            wordBreak: 'break-word',
            lineHeight: '1.2',
            fontFamily: 'Tahoma, sans-serif',
            fontWeight: 'bold',
            pointerEvents: 'none'
          }}>
            {icon.title}
          </div>
        </div>
      ))}

      {windows.map((window) => (
        <div
          key={window.id}
          style={{
            position: 'absolute',
            left: window.isMaximized ? '0' : `${window.x}px`,
            top: window.isMaximized ? '0' : `${window.y}px`,
            width: window.isMaximized ? '100%' : `${window.width}px`,
            height: window.isMaximized ? 'calc(100% - clamp(32px, 5vh, 48px))' : `${window.height}px`,
            background: '#0000009c',
            border: '3px solid #0054e3',
            borderRadius: '8px 8px 0 0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 1000,
            pointerEvents: 'auto'
          }}
        >
          <div
            onMouseDown={(e) => handleMouseDown(e, window.id)}
            style={{
              background: 'linear-gradient(to bottom, #0997ff 0%, #0053ee 3%, #0050ee 6%, #004de4 8%, #0046dd 11%, #0041d5 20%, #003dd1 24%, #0035c7 56%, #0034c5 81%, #003bc7 85%, #0040cc 88%, #0045d1 91%, #004dd8 94%, #0052db 97%, #0054e0 100%)',
              padding: 'clamp(2px, 0.5vw, 4px) clamp(4px, 1vw, 8px)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: 'none',
              userSelect: 'none',
              height: 'clamp(20px, 3vh, 28px)',
              cursor: 'move'
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 'clamp(3px, 0.5vw, 6px)', 
              pointerEvents: 'none',
              overflow: 'hidden'
            }}>
              <span style={{ fontSize: 'clamp(10px, 1.5vw, 14px)' }}>📁</span>
              <span style={{ 
                fontWeight: 'bold', 
                fontSize: 'clamp(9px, 1.2vw, 12px)', 
                color: 'white', 
                fontFamily: 'Tahoma, sans-serif',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}>
                {window.title}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '2px', flexShrink: 0 }}>
              {window.type !== 'game' && (
                <button
                  onClick={() => toggleMaximize(window.id)}
                  onMouseDown={(e) => e.stopPropagation()}
                  style={{
                    background: 'linear-gradient(to bottom, #4288f6, #2874e6)',
                    border: '1px solid #003c74',
                    borderRadius: '2px',
                    width: 'clamp(16px, 2.5vw, 21px)',
                    height: 'clamp(16px, 2.5vw, 21px)',
                    cursor: 'pointer',
                    fontSize: 'clamp(8px, 1.2vw, 11px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontFamily: 'Tahoma, sans-serif'
                  }}
                >
                  □
                </button>
              )}
              <button
                onClick={() => closeWindow(window.id)}
                onMouseDown={(e) => e.stopPropagation()}
                style={{
                  background: 'linear-gradient(to bottom, #f87960, #e4452d)',
                  border: '1px solid #a5301f',
                  borderRadius: '2px',
                  width: 'clamp(16px, 2.5vw, 21px)',
                  height: 'clamp(16px, 2.5vw, 21px)',
                  cursor: 'pointer',
                  fontSize: 'clamp(10px, 1.5vw, 13px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontFamily: 'Tahoma, sans-serif'
                }}
              >
                ×
              </button>
            </div>
          </div>

          <div style={{ 
            flex: 1, 
            padding: '0', 
            overflow: 'hidden', 
            display: 'flex',
            pointerEvents: (dragging === window.id || resizing === window.id) ? 'none' : 'auto'
          }}>
            {window.type === 'folder' ? (
              <div style={{ display: 'flex', width: '100%', flexDirection: 'column' }}>
                <div style={{ 
                  display: 'flex', 
                  borderBottom: '1px solid #d4d4d4',
                  padding: 'clamp(2px, 0.5vw, 4px) clamp(4px, 1vw, 8px)',
                  fontFamily: 'Tahoma, sans-serif',
                  fontSize: 'clamp(8px, 1.2vw, 11px)',
                  fontWeight: 'bold',
                  color: '#aaaaaa'
                }}>
                  <div style={{ flex: 2 }}>Name</div>
                  <div style={{ flex: 1 }}>Type</div>
                  <div style={{ flex: 1 }}>Date</div>
                </div>
                
                <div style={{ flex: 1, overflow: 'auto' }}>
                  {getFilteredFiles(window.title).map(file => (
                    <div
                      key={file.id}
                      onDoubleClick={() => openFile(window.title, file)}
                      style={{
                        display: 'flex',
                        padding: 'clamp(4px, 1vw, 8px)',
                        cursor: 'pointer',
                        fontFamily: 'Tahoma, sans-serif',
                        fontSize: 'clamp(8px, 1.2vw, 11px)',
                        borderBottom: '1px solid #f0f0f041',
                        color: 'white'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#00000083'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <div style={{ flex: 2, display: 'flex', alignItems: 'center', gap: '4px', overflow: 'hidden' }}>
                        <span style={{ fontSize: 'clamp(10px, 1.5vw, 14px)' }}>📄</span>
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.name}</span>
                      </div>
                      <div style={{ flex: 1, color: '#aaaaaa', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.language}</div>
                      <div style={{ flex: 1, color: '#aaaaaa', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file.date}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : window.type === 'file' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ flex: 1 }}>
                  <MemoizedPDFViewer fileId={window.fileId} />
                </div>
              </div>
            ) : window.type === 'game' ? (
              window.title === 'Pong' ? <Pong /> : window.title === 'Snake' ? <Snake /> : null
            ) : null}
          </div>
          {window.type !== 'game' && (
            <div
              onMouseDown={(e) => handleResizeStart(e, window.id)}
              style={{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: 'clamp(12px, 2vw, 20px)',
                height: 'clamp(12px, 2vw, 20px)',
                cursor: 'nwse-resize',
                background: 'linear-gradient(135deg, transparent 50%, #999 50%)',
                borderRadius: '0 0 8px 0'
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default Desktop