
import { Link, useNavigate } from "react-router-dom";

export function Home() {

    const navigate = useNavigate();
    const goToWiki = () => {
        navigate("./wiki");
    }

    return (
     <>
        <h1> Welcome to the Purdue CS USB Website!</h1>
        <button onClick={goToWiki}>Student Wiki</button>

     </>
    );


}

