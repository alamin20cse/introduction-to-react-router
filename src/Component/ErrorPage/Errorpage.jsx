import { Link, useRouteError } from "react-router-dom";

const Errorpage = () => {


    const error=useRouteError();
    console.log(error);


    return (
        <div>
            <h1>Oops!!</h1>
            <p>{error.statusText || error.massage}</p>

            {
                error.status===404&& <div>
                    <h4>go back to main page </h4>
                   <Link to={`/`}> <button>Go back Home</button></Link>
                    </div>
            }
            
        </div>
    );
};

export default Errorpage;