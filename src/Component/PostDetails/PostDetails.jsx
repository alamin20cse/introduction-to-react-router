import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const postdetails=useLoaderData();

    const navagite=useNavigate();
    const handelBack=()=>{
        navagite(-1);

    }
    
    const {id,title,body}=postdetails
    return (
        <div className="post">
            <h3>Id: {id}</h3>
            <h4>Title:{title} </h4>
            <p>{body}</p>

            <button onClick={handelBack}>Back</button>
            
        </div>
    );
};

export default PostDetails;