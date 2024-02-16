import { Link} from "react-router-dom";
import "./menu.css";
export default function Menu(){
    return(
        <div className="menu">
            <Link to ="/">Home</Link>
            <Link to="/create">Create Category</Link>
        </div>
    );
}