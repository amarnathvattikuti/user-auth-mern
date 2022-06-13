import React, { useContext, useState, useEffect } from "react";
import { store } from "../App";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import avatar from '../images/img_avatar1.png';

const Me = () => {
    const [token, setToken] = useContext(store)
    const [data, SetData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://authentication-server-mern.herokuapp.com/me', {
            headers: {
                'x-token': token
            }
        }).then(
            res => SetData(res.data)
        ).catch(
            err => console.log(err)
        )
        // eslint-disable-next-line
    }, [])
    //setToken(data.token);
    if (!token) {
        return navigate('/')
    }

    return (
        <>
            <div className="container p-4">

                {data &&
                    <div className="w-100 d-flex justify-content-center p-4 text-center">
                        <div className="card shadow-sm" style={{width: '340px'}}>
                            <img className="card-img-top" src={avatar} alt="avatar" style={{width: '100%'}}/>
                            <div className="card-body">
                                <h4 className="card-title border-bottom p-1 text-left">welcome {data.username}</h4>
                                <p className="text-left">Your deatils are as follow from the login</p>
                                <p className="text-left"><strong>Username:</strong> {data.username}</p>
                                <p className="card-text text-left"><strong>Email:</strong> {data.email}</p>
                                <button className="btn btn-info text-white mt-4"
                                    onClick={() => setToken(null)}
                                >Sign out</button>
                            </div>

                        </div>
                    </div>
                }

            </div>
        </>
    )

}

export default Me;