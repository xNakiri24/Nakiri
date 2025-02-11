import React, {useContext, useEffect} from 'react'
import "../css/styles.css"
import Logo from './subcomponent/Logo'
import Profile from './subcomponent/Profile'
import Home from './subcomponent/home'
import Navigation from './subcomponent/Navigation'
import { RouteContext, useRoute } from '../context/RouteContext'

const Main = () => {

  const {data} = useRoute();


    

  return (
    <>
    <main>
        
        <Logo />
        {data.page === "Navigation" && <Navigation />}
        {data.page === "Home" && <Home />}
        {data.page === "Profile" && <Profile /> }
    </main>
    
    </>
  )
}

export default Main