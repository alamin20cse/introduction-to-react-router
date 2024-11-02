import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {

    const navigation=useNavigation();

    return (
        <div>
             <h1>This is the home component</h1>
             {/* here also can use spin  */}
           <Header></Header>
            {
                navigation.state==="loading"? <h1>Looding.....</h1>:<Outlet></Outlet>
            }
            
            
        </div>
    );
};

export default Home;