import React, {useState,  useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { store } from "../App";



const Login = () => {
    
    const[values, setValues] = useState({
        email: "",
        password: ""
    })
    const[token, setToken] = useContext(store)
    const navigate = useNavigate();

    const ChangeHandler = (e) => {
     e.preventDefault()
     const name = e.target.name;
     const value = e.target.value;
     setValues({...values,[name]:value})
   
    }
   
    const SubmitLogin =(e)=> {
     e.preventDefault()
     axios.post('https://authentication-server-mern.herokuapp.com/login', values).then(
         res => setToken(res.data.token))
    }

    if(token){
 
     return  navigate('/me')
    }

    return (
        <>
            <div className="container p-md-3 p-lg-5">
                <h2 className="w-100 text-center mb-4 mt-4">Signin</h2>
                <div className="d-flex justify-content-center">
                <form onSubmit={SubmitLogin} className="w-75  p-4 border rounded shadow-sm">
                    <div className="form-group">
                        <label>Email address:</label>
                        <input type="email" className="form-control" 
                        placeholder="Enter email" 
                        name="email"
                        value={values.email || ""}
                         onChange={ChangeHandler}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" 
                        placeholder="Enter password" name="password" 
                        value={values.password || ""}
                         onChange={ChangeHandler}
                        />
                    </div>            
                    <button type="submit" className="btn btn-info text-white">Signin</button>
                    <span className="ml-2">Not a user ? 
                    <Link to="/register">
                    <button className="btn btn-link">Signup here</button> 
                    </Link>
                    </span>
                </form>
                </div>
            </div>
        </>
    )
}

export default Login;