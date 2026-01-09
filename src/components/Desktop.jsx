import { useEffect, useState } from 'react'
import './Desktop.css'

function Desktop({ folder }) {
  return (
    <>
        {folder === 1 && 
        <div id={`folder${folder}`} className="folder">
            📁 This is Folder One
        </div>
        }

        {folder === 2 && 
        <div id={`folder${folder}`} className='folder'>
            📁 This is Folder 2
        </div>}

        {folder === 3 && 
        <div id={`folder${folder}`} className='folder'>
            📁 This is Folder 3
        </div>}
    </>
  )
}

export default Desktop

