import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./index.css";



function Login() {
 
    let history = useHistory();

    const [formData, setFormData] = React.useState({
        email: "",
        password: ""
    });

    const [storedpassword, setStoredPassword] = React.useState("");
    const [storeduser, setstoreduser] = React.useState("");
    const[submitted,setsubmit]=React.useState("");
    const[submittede,setsubmite]=React.useState("");
    useEffect(() => {
        axios.get("https://randomuser.me/api/")
            .then(response => {
                const storedpassword = response.data.results[0].login.password;
                const storeduser = response.data.results[0].login.username
                setStoredPassword(storedpassword);
                setstoreduser(storeduser)
                console.log(storedpassword,storeduser);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    function handleChange(event) {
        setsubmit("")
        setsubmite("")
        const { name, value } = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        if(formData.email==="")
        {
            setsubmite("enter email id")
        }
       if(formData.password==="")
        {
            setsubmit("enter password")
        }
        
        else if(storedpassword === formData.password)
         {
            localStorage.setItem("formData",JSON.stringify(storeduser))
            history.push("/home")

        }
       
       else
       {
        setsubmit("incorrect password")
       }

    }

    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit} >
                <header>Login Form</header>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="E-mail"
                    onChange={handleChange}
                    className="form_email"
                />
                <label htmlFor="email" style={{color:"red"}}>{submittede }</label>
                <br />
                <br />
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    className="form_password"
                />
                <label htmlFor="password" style={{color:"red"}}>{submitted}</label>

                <br />
                <br />
                <button type="submit" className="form_submit">Submit</button>
            </form>
            </div>
        </>
    );
}

export default Login;
