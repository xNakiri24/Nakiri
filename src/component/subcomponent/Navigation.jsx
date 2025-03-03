import React from 'react'
import { useRoute } from '../../context/RouteContext'

const Navigation = () => {

    const {dispatch} = useRoute();
    

  return (
   
    <>
        <div className='navigation-container'>
            <ul>
                <li><a href="https://nakiri24.wordpress.com/">Wordpress website</a></li>
                <li><p onClick={()=>dispatch({ type: "Profile"})}>About Me</p></li>
                <li><p onClick={()=>dispatch({ type: "Project"})}>Projects</p></li>
                <li><p onClick={()=>dispatch({ type: "Home"})}>Home</p></li>
            </ul>
        </div>
    
    </>
  )
}

export default Navigation