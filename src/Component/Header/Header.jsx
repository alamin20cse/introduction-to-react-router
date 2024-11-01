
import { Link } from "react-router-dom";
import "../Styel/styel.css"
const Header = () => {
    return (
        <div >
            <h1>NavBar</h1>
        
           <div className="abc">
           <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/user">User</Link>
           </div>
           
        </div>
    );
};

export default Header;