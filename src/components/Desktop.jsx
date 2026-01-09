import { useEffect, useState } from 'react'
import './Desktop.css'

function Desktop() {
  return (
    <>
        <div className="Desktop">
            <div className='Icon' onClick={() => console.log("it's mee web projects")}>
                📁
            </div>
            <div className='Icon' onClick={() => console.log("it's mee About.txt")}>
                📄
            </div>
            <div className='Icon' onClick={() => console.log("it's mee game projects")}>
                📁
            </div>
            <div className='Icon' onClick={() => console.log("it's mee Resume.txt")}>
                📄
            </div>
        </div>
    </>
  )
}

export default Desktop

