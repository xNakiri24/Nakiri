import menu from "../assets/menu.svg"
import { useRoute } from "../context/RouteContext"
import "../css/styles.css"



const NavBar = () =>{

    const {dispatch} = useRoute();

return(
<>
<header>
    <nav>
    <a href="">Nakiri</a>

    <div onClick={()=>dispatch({ type: "Navigation"})}>
    <img src={menu} alt="" />
    </div>
    </nav>
</header>
</>
)}

export default NavBar;