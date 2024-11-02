import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const userDetails=useLoaderData();
    const {name}=userDetails;


    return (
        <div>
           
            <h2>name: {name}</h2>
            
        </div>
    );
};

export default UserDetails;