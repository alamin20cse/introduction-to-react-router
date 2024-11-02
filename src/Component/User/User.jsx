import { useLoaderData } from "react-router-dom";
import UserSingle from "../UserSingle/UserSingle";


const User = () => {

    const users=useLoaderData();
    // console.log(users);

    return (
        <div>
            
            <h1>This is user :{users.length}  </h1>

            <div className="usergrid">
            {
                    users.map(user=><UserSingle key={user.id} user={user}></UserSingle>)
             }
            </div>
            
        </div>
    );
};

export default User;