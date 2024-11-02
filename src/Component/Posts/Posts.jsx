import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";


const Posts = () => {

    const posts=useLoaderData();
    return (
        <div>
            <h3>all post: {posts.length}</h3>
           
           <div className="usergrid">
           {
                posts.map(post=><Post key={post.id}  post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;