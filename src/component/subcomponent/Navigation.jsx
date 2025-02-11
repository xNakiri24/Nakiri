import React from 'react'
import { useRoute } from '../../context/RouteContext'

const Navigation = () => {

    const {dispatch} = useRoute();
    

  return (
   
    <>
        <div className='navigation-container'>
            <ul>
                <li><p onClick={()=>dispatch({ type: "Profile"})}>About Me</p></li>
                <li><p onClick={()=>dispatch({ type: "Home"})}>Projects</p></li>
                <li><p onClick={()=>dispatch({ type: "Home"})}>Home</p></li>
            </ul>
        </div>
    
    </>
  )
}

export default Navigation