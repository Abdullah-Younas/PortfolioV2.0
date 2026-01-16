import { useState } from 'react'
import About from './Pdf/About';
import { PDFViewer } from '@react-pdf/renderer'

function Desktop() {
  const [windows, setWindows] = useState([])
  const [dragging, setDragging] = useState(null)
  const [resizing, setResizing] = useState(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [icons, setIcons] = useState([
    { id: 'web-projects', type: 'folder', title: 'Web Projects', emoji: '📁', x: 0, y: 0 },
    { 
      id: 2, 
      type: 'file', 
      title: 'About.txt', 
      emoji: '📄', 
      x: 0, 
      y: 100,
      hideStats: true,
      fileData: { 
        id: 2, 
        name: 'About', 
        language: 'Text', 
        lines: 100, 
        rarity: 3, 
        date: '2024-01-01' 
      }
    },
    { id: 'game-projects', type: 'folder', title: 'Game Projects', emoji: '📁', x: 0, y: 200 },
    { 
      id: 4, 
      type: 'file', 
      title: 'Resume.pdf', 
      emoji: '📄', 
      x: 0, 
      y: 300,
      hideStats: true,
      fileData: { 
        id: 4, 
        name: 'Resume', 
        language: 'PDF', 
        lines: 500, 
        rarity: 5, 
        date: '2024-01-01' 
      }
    }
  ])
  const [draggingIcon, setDraggingIcon] = useState(null)
  
  const [folderContents] = useState({
    'Web Projects': [
      { id: 5, name: 'E-Commerce Site', language: 'JavaScript', lines: 2500, rarity: 4, date: '2024-01-15' },
      { id: 6, name: 'Portfolio Website', language: 'React', lines: 800, rarity: 2, date: '2024-03-20' },
      { id: 7, name: 'Blog Platform', language: 'Python', lines: 3500, rarity: 5, date: '2023-11-10' },
      { id: 8, name: 'API Dashboard', language: 'TypeScript', lines: 1200, rarity: 3, date: '2024-02-05' },
      { id: 9, name: 'Chat Application', language: 'JavaScript', lines: 1800, rarity: 4, date: '2024-04-12' }
    ],
    'Game Projects': [
      { id: 10, name: 'Platformer Game', language: 'C++', lines: 4500, rarity: 5, date: '2023-09-15' },
      { id: 11, name: 'Puzzle Solver', language: 'Python', lines: 600, rarity: 1, date: '2024-05-01' },
      { id: 12, name: 'RPG Battle System', language: 'C++', lines: 3200, rarity: 4, date: '2024-01-30' },
      { id: 13, name: 'Card Game', language: 'JavaScript', lines: 1500, rarity: 3, date: '2023-12-20' },
      { id: 14, name: 'Physics Simulator', language: 'C++', lines: 2800, rarity: 5, date: '2024-03-15' }
    ]
  })
  
  const [filters, setFilters] = useState({})
  const [activeFolder, setActiveFolder] = useState(null)

  const openWindow = (type, title, iconData = null) => {
    if (windows.some(w => w.title === title)) {
      return
    }
    
    const newWindow = {
      id: Date.now(),
      type,
      title,
      x: 100 + windows.length * 30,
      y: 100 + windows.length * 30,
      width: type === 'folder' ? 600 : 400,
      height: type === 'folder' ? 450 : 300,
      isMaximized: false
    }
    
    // If it's a file from desktop, add the file data
    if (type === 'file' && iconData?.fileData) {
      newWindow.fileData = iconData.fileData
      newWindow.fileId = iconData.fileData.id
      newWindow.hideStats = iconData.hideStats || false
    }
    
    setWindows([...windows, newWindow])
    
    if (type === 'folder') {
      setActiveFolder(title)
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
      const deltaX = e.clientX - offset.x
      const deltaY = e.clientY - offset.y
      
      setWindows(windows.map(w => {
        if (w.id === resizing) {
          const newWidth = Math.max(200, offset.startWidth + deltaX)
          const newHeight = Math.max(150, offset.startHeight + deltaY)
          return { ...w, width: newWidth, height: newHeight }
        }
        return w
      }))
    }
  }

  const handleMouseUp = () => {
    setDragging(null)
    setResizing(null)
    
    if (draggingIcon) {
      const gridSize = 100
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
  
  const updateFilter = (folder, filterType, value) => {
    setFilters({
      ...filters,
      [folder]: { ...filters[folder], [filterType]: value }
    })
  }
  
  const getFilteredFiles = (folder) => {
    const files = folderContents[folder] || []
    const filter = filters[folder] || { sortBy: 'newest', language: 'all', lines: 'all', rarity: 'all' }
    
    let filtered = [...files]
    
    if (filter.language !== 'all') {
      filtered = filtered.filter(f => f.language === filter.language)
    }
    
    if (filter.lines === 'high') {
      filtered = filtered.filter(f => f.lines >= 2000)
    } else if (filter.lines === 'low') {
      filtered = filtered.filter(f => f.lines < 2000)
    }
    
    if (filter.rarity === 'best') {
      filtered = filtered.filter(f => f.rarity >= 4)
    } else if (filter.rarity === 'simple') {
      filtered = filtered.filter(f => f.rarity <= 2)
    }
    
    if (filter.sortBy === 'newest') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date))
    } else if (filter.sortBy === 'oldest') {
      filtered.sort((a, b) => new Date(a.date) - new Date(b.date))
    }
    
    return filtered
  }
  
  const openFile = (folder, file) => {
    const fileTitle = `${file.name}.pdf`
    if (windows.some(w => w.title === fileTitle)) {
      return
    }
    
    const newWindow = {
      id: Date.now(),
      type: 'file',
      title: fileTitle,
      folder,
      fileData: file,
      fileId: file.id,
      hideStats: false,
      isMaximized: false,
      x: 100 + windows.length * 30,
      y: 100 + windows.length * 30,
      width: 500,
      height: 400
    }
    setWindows([...windows, newWindow])
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      style={{ 
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'rgba(0, 0, 0, 0.20)',
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
            width: '90px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontSize: '48px',
            padding: '6px 0',
            userSelect: 'none',
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: '48px' }}>{icon.emoji}</div>
          <div
            style={{
              fontSize: '12px',
              maxWidth: '90px',
              textAlign: 'center',
              wordBreak: 'break-word',
              lineHeight: '1.2',
              fontFamily: 'Tahoma, sans-serif',
              fontWeight: 'bold'
            }}
          >
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
            height: window.isMaximized ? '100%' : `${window.height}px`,
            background: 'white',
            border: '3px solid',
            borderColor: '#0054e3 #0054e3 #0054e3 #0054e3',
            borderRadius: '8px 8px 0 0',
            boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 1000
          }}
        >
          <div
            onMouseDown={(e) => handleMouseDown(e, window.id)}
            style={{
              background: 'linear-gradient(to bottom, #0997ff 0%, #0053ee 3%, #0050ee 6%, #004de4 8%, #0046dd 11%, #0041d5 20%, #003dd1 24%, #0035c7 56%, #0034c5 81%, #003bc7 85%, #0040cc 88%, #0045d1 91%, #004dd8 94%, #0052db 97%, #0054e0 100%)',
              padding: '3px 8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: 'none',
              userSelect: 'none',
              height: '28px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '14px' }}>📁</span>
              <span style={{ fontWeight: 'bold', fontSize: '11px', color: 'white', fontFamily: 'Tahoma, sans-serif' }}>
                {window.title}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '2px' }}>
              <button
                onClick={() => toggleMaximize(window.id)}
                onMouseDown={(e) => e.stopPropagation()}
                style={{
                  background: 'linear-gradient(to bottom, #4288f6, #2874e6)',
                  border: '1px solid #003c74',
                  borderRadius: '2px',
                  width: '21px',
                  height: '21px',
                  cursor: 'pointer',
                  fontSize: '11px',
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
              <button
                onClick={() => closeWindow(window.id)}
                onMouseDown={(e) => e.stopPropagation()}
                style={{
                  background: 'linear-gradient(to bottom, #f87960, #e4452d)',
                  border: '1px solid #a5301f',
                  borderRadius: '2px',
                  width: '21px',
                  height: '21px',
                  cursor: 'pointer',
                  fontSize: '13px',
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

          <div style={{ flex: 1, padding: '0', overflow: 'auto', display: 'flex', background: 'white' }}>
            {window.type === 'folder' ? (
              <div style={{ display: 'flex', width: '100%', flexDirection: 'column', padding: '15px' }}>
                <h3 style={{ marginTop: 0, fontSize: '14px', fontFamily: 'Tahoma, sans-serif' }}>
                  {window.title}
                </h3>
                
                {/* File List */}
                <div style={{ flex: 1, overflow: 'auto' }}>
                  {getFilteredFiles(window.title).map(file => (
                    <div
                      key={file.id}
                      onDoubleClick={() => openFile(window.title, file)}
                      style={{
                        padding: '8px',
                        marginBottom: '4px',
                        background: '#f0f0f0',
                        border: '1px solid #ccc',
                        cursor: 'pointer',
                        fontFamily: 'Tahoma, sans-serif',
                        fontSize: '11px'
                      }}
                    >
                      <div style={{ fontWeight: 'bold' }}>📄 {file.name}</div>
                      <div style={{ fontSize: '10px', color: '#666' }}>
                        {file.language} • {file.lines} lines • {file.date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : window.type === 'file' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                {!window.hideStats && (
                  <>
                    <div style={{ padding: '15px 15px 0 15px' }}>
                      <h3 style={{ marginTop: 0, fontSize: '13px', fontFamily: 'Tahoma, sans-serif', color: '#333' }}>
                        {window.fileData?.name || 'File'}
                      </h3>

                      <div style={{ background: '#e8eef7', padding: '8px', border: '1px solid #c0c7d8', marginBottom: '12px' }}>
                        <div><strong>Language:</strong> {window.fileData?.language}</div>
                        <div><strong>Lines:</strong> {window.fileData?.lines}</div>
                        <div><strong>Date:</strong> {window.fileData?.date}</div>
                        <div><strong>Rating:</strong> {'★'.repeat(window.fileData?.rarity || 0)}{'☆'.repeat(5 - (window.fileData?.rarity || 0))}</div>
                      </div>
                    </div>
                  </>
                )}

                <div style={{ flex: 1 }}>
                  <PDFViewer width="100%" height="100%">
                    <About />
                  </PDFViewer>
                </div>
              </div>
            ) : null}
          </div>
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
  )
}

export default Desktop