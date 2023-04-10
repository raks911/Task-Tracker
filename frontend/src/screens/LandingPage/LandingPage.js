import React from 'react'

import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='contain'>
        <div className='texts'>
            <div className='Intro'>
                <h1 className='introtext'>Welcome To Task Manager</h1>
        
            </div>
            <div className='sublime'>
                Increase Productivity and efficiency
            </div>
            <div className='btns'>
                <a href="/login">
            <button className='button-86'>
                login
            </button>
            </a> 
            <a href="/register">
            <button className='button-86'>
                Signup
            </button>
            </a>
            </div>
        </div>
        <div className='image'>
        </div>
    </div>
   
  )
}

export default LandingPage;