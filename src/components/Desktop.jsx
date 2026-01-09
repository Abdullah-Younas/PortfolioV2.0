import { useEffect, useState } from 'react'
import './Desktop.css'
import myResume from '../assets/Malik Muhammad Abdullah Younas Resume.pdf'

function Desktop() {

    function OpenWebFolder(){
        console.log("Opening web folder!");
    }

    function OpenGameFolder(){
        console.log("Opening game folder!");
    }



  return (
    <>
        <div className="Desktop">
            <div className='Icon' onClick={OpenWebFolder}>
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

