import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [showsuccess, setShowsuccess] = useState(false);
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmpassword: ""
    })

    const ChangeHandler = (e) => {
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value })

    }
    const Success = () => {
       setShowsuccess(true)
       setTimeout(() => {
        setShowsuccess(false)
        navigate('/')
       }, 3000);
    }
    const SubmitRegister = (e) => {
        e.preventDefault()
        axios.post('https://authentication-server-mern.herokuapp.com/registration', values).then(
            res => console.log(res.data))

        //console.log(values);
        setValues({
            username: "",
            email: "",
            password: "",
            confirmpassword: ""
        })
        Success();
       
    }

    return (
        <>
            <div className="container p-md-5">
                {showsuccess ?
                    <div className="w-100 p-3 bg-success rounded shadow-sm text-white"
                    >User Added successfully</div> : null
                }
                <h2 className="w-100 text-center mb-4 mt-4">Register</h2>
                <div className="d-flex justify-content-center">
                    <form onSubmit={SubmitRegister} className="w-75 border rounded p-4 shadow-sm">
                        <div className="form-group">
                            <label>Username:<span className="text-danger">*</span> </label>
                            <input type="text" className="form-control"
                                placeholder="Enter name" name="username"
                                value={values.username || ""}
                                onChange={ChangeHandler} required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email address: <span className="text-danger">*</span></label>
                            <input type="email" className="form-control"
                                placeholder="Enter email"
                                name="email"
                                value={values.email || ""}
                                onChange={ChangeHandler} required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: <span className="text-danger">*</span></label>
                            <input type="password" className="form-control"
                                placeholder="Enter password"
                                name="password"
                                value={values.password || ""}
                                onChange={ChangeHandler} required
                            />
                        </div>
                        <div className="form-group">
                            <label>ConfirmPassword: <span className="text-danger">*</span></label>
                            <input type="password" className="form-control"
                                placeholder="Enter password"
                                name="confirmpassword"
                                value={values.confirmpassword || ""}
                                onChange={ChangeHandler} required
                            />
                        </div>

                        <button type="submit" className="btn btn-info text-white">Register</button>
                        <Link to="/">
                        <button type="submit" className="btn btn-info text-white ml-2">Back</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register;