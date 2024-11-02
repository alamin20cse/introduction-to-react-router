import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const navigation=useNavigate();

// also use function 
    const detailsHandel=()=>
    {

        // console.log("handel ditels");
        navigation(`/post/${id}`);

    }

    const {id,title,body}=post;
    return (
        <div className="single">
            <h1>id:{id}</h1>
            <h2>{title}</h2>
           
            <Link to={`/post/${id}`}>Post Details</Link>
            <br />

            <button onClick={detailsHandel}>SHOW DETAIELS</button>

            
        </div>
    );
};

export default Post;