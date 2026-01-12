import { useState } from 'react'

function Desktop() {
  const [windows, setWindows] = useState([])
  const [dragging, setDragging] = useState(null)
  const [resizing, setResizing] = useState(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [icons, setIcons] = useState([
    { id: 'web-projects', type: 'folder', title: 'Web Projects', emoji: '📁', x: 0, y: 0 },
    { id: 'about', type: 'document', title: 'About.txt', emoji: '📄', x: 0, y: 100 },
    { id: 'game-projects', type: 'folder', title: 'Game Projects', emoji: '📁', x: 0, y: 200 },
    { id: 'resume', type: 'document', title: 'Resume.pdf', emoji: '📄', x: 0, y: 300 }
  ])
  const [draggingIcon, setDraggingIcon] = useState(null)
  
  const [folderContents] = useState({
    'Web Projects': [
      { id: 'web-1', name: 'E-Commerce Site', language: 'JavaScript', lines: 2500, rarity: 4, date: '2024-01-15' },
      { id: 'web-2', name: 'Portfolio Website', language: 'React', lines: 800, rarity: 2, date: '2024-03-20' },
      { id: 'web-3', name: 'Blog Platform', language: 'Python', lines: 3500, rarity: 5, date: '2023-11-10' },
      { id: 'web-4', name: 'API Dashboard', language: 'TypeScript', lines: 1200, rarity: 3, date: '2024-02-05' },
      { id: 'web-5', name: 'Chat Application', language: 'JavaScript', lines: 1800, rarity: 4, date: '2024-04-12' }
    ],
    'Game Projects': [
      { id: 'game-1', name: 'Platformer Game', language: 'C++', lines: 4500, rarity: 5, date: '2023-09-15' },
      { id: 'game-2', name: 'Puzzle Solver', language: 'Python', lines: 600, rarity: 1, date: '2024-05-01' },
      { id: 'game-3', name: 'RPG Battle System', language: 'C++', lines: 3200, rarity: 4, date: '2024-01-30' },
      { id: 'game-4', name: 'Card Game', language: 'JavaScript', lines: 1500, rarity: 3, date: '2023-12-20' },
      { id: 'game-5', name: 'Physics Simulator', language: 'C++', lines: 2800, rarity: 5, date: '2024-03-15' }
    ]
  })
  
  const [filters, setFilters] = useState({})
  const [activeFolder, setActiveFolder] = useState(null)

  const openWindow = (type, title) => {
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
      height: type === 'folder' ? 450 : 300
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
    openWindow(icon.type, icon.title)
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
            fontSize: '48px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5px',
            userSelect: 'none',
            textAlign: 'center',
            color: 'white',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            cursor: 'pointer'
          }}
        >
          <div style={{ fontSize: '48px' }}>{icon.emoji}</div>
          <div style={{ fontSize: '12px', maxWidth: '90px', wordWrap: 'break-word' }}>{icon.title}</div>
        </div>
      ))}

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
          <div
            onMouseDown={(e) => handleMouseDown(e, window.id)}
            style={{
              background: 'linear-gradient(to bottom, #e8e8e8, #d0d0d0)',
              padding: '8px 12px',
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

          <div style={{ flex: 1, padding: '20px', overflow: 'auto' }}>
            {window.type === 'folder' ? (
              <div>
                <h3 style={{ marginTop: 0, marginBottom: '15px' }}>{window.title}</h3>
                
                <div style={{ 
                  background: '#f5f5f5', 
                  padding: '15px', 
                  borderRadius: '6px',
                  marginBottom: '20px'
                }}>
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(2, 1fr)', 
                    gap: '10px',
                    fontSize: '13px'
                  }}>
                    <div>
                      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                        Sort By:
                      </label>
                      <select 
                        value={filters[window.title]?.sortBy || 'newest'}
                        onChange={(e) => updateFilter(window.title, 'sortBy', e.target.value)}
                        style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                      >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                        Language:
                      </label>
                      <select 
                        value={filters[window.title]?.language || 'all'}
                        onChange={(e) => updateFilter(window.title, 'language', e.target.value)}
                        style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                      >
                        <option value="all">All Languages</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Python">Python</option>
                        <option value="C++">C++</option>
                        <option value="TypeScript">TypeScript</option>
                        <option value="React">React</option>
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                        Lines of Code:
                      </label>
                      <select 
                        value={filters[window.title]?.lines || 'all'}
                        onChange={(e) => updateFilter(window.title, 'lines', e.target.value)}
                        style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                      >
                        <option value="all">All</option>
                        <option value="high">High (2000+)</option>
                        <option value="low">Low (&lt;2000)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
                        Rarity:
                      </label>
                      <select 
                        value={filters[window.title]?.rarity || 'all'}
                        onChange={(e) => updateFilter(window.title, 'rarity', e.target.value)}
                        style={{ width: '100%', padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                      >
                        <option value="all">All</option>
                        <option value="best">Best (4-5★)</option>
                        <option value="simple">Simple (1-2★)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {getFilteredFiles(window.title).map(file => (
                    <div
                      key={file.id}
                      onDoubleClick={() => openFile(window.title, file)}
                      style={{
                        padding: '12px',
                        background: 'white',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = '#f0f8ff'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                            📄 {file.name}
                          </div>
                          <div style={{ fontSize: '12px', color: '#666' }}>
                            {file.language} • {file.lines} lines • {file.date}
                          </div>
                        </div>
                        <div style={{ fontSize: '14px', color: '#ffa500' }}>
                          {'★'.repeat(file.rarity)}{'☆'.repeat(5 - file.rarity)}
                        </div>
                      </div>
                    </div>
                  ))}
                  {getFilteredFiles(window.title).length === 0 && (
                    <div style={{ textAlign: 'center', color: '#999', padding: '20px' }}>
                      No files match the current filters
                    </div>
                  )}
                </div>
              </div>
            ) : window.type === 'file' ? (
              <div>
                <h3 style={{ marginTop: 0 }}>{window.fileData.name}</h3>
                <div style={{ 
                  background: '#f5f5f5', 
                  padding: '10px', 
                  borderRadius: '4px',
                  marginBottom: '15px',
                  fontSize: '13px'
                }}>
                  <div><strong>Language:</strong> {window.fileData.language}</div>
                  <div><strong>Lines:</strong> {window.fileData.lines}</div>
                  <div><strong>Date:</strong> {window.fileData.date}</div>
                  <div><strong>Rating:</strong> {'★'.repeat(window.fileData.rarity)}{'☆'.repeat(5 - window.fileData.rarity)}</div>
                </div>
                <div style={{ 
                  border: '2px dashed #ccc', 
                  padding: '40px', 
                  textAlign: 'center',
                  background: '#fafafa',
                  borderRadius: '6px'
                }}>
                  <div style={{ fontSize: '48px', marginBottom: '10px' }}>📄</div>
                  <div style={{ color: '#666', marginBottom: '10px' }}>
                    PDF Content Area
                  </div>
                  <div style={{ fontSize: '12px', color: '#999' }}>
                    Use react-pdf to display PDF content here
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h3 style={{ marginTop: 0 }}>{window.title}</h3>
                <p>This is the content of {window.title}.</p>
                <p>You can add any content here - text, images, links, etc.</p>
              </div>
            )}
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