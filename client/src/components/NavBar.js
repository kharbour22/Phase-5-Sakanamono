import { NavLink } from "react-router-dom"
import { useOutletContext } from "react-router-dom"


function NavBar(){
    return(
        <nav>
            <NavLink to ="/">Home</NavLink>
            

        </nav>
    )
}

export default NavBar