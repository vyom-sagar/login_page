import "./navbar.css"
import { useHistory } from "react-router-dom";
export default function NavBar()
{
    let history = useHistory();
    const email=JSON.parse(localStorage.getItem("formData"))
return(
    <>
    <div className="nav">
    <header >welcome {email}</header>
    <button onClick={() => {
            localStorage.removeItem("formdata");
            history.push("/login");
        }}>log Out</button>
    </div>
    </>
)

}