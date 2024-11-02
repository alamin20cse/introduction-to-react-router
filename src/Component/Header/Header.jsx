
import { Link, NavLink } from "react-router-dom";
import "../Styel/styel.css"
const Header = () => {
    return (
        <div >
            <h1>NavBar</h1>
        
           <nav className="abc">
            <NavLink to="/">Home</NavLink>
                <NavLink  to="/about" className="ancor">About</NavLink>
                
                <NavLink to="/contact" className="ancor">Contact</NavLink>
                <NavLink to="/user" className="ancor">User</NavLink>
                <NavLink to="/post" className="ancor">Post</NavLink>

           </nav>
           
        </div>
    );
};

export default Header;