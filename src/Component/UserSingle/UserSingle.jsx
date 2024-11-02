import { Link } from "react-router-dom";


const UserSingle = ({user}) => {
    const {id,phone,name,email}=user;

    return (
        <div className="single">
            <h3>name: {name}</h3>
            <h3>{phone}</h3>
            <h3>{email}</h3>
            <h5>id:{id}</h5>
            <Link to={`/user/${id}`}>Show details</Link>
           
            
        </div>
    );
};

export default UserSingle;