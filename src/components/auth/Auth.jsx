import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';

export const Auth = ({children, login = false}) => {
    const token = localStorage.getItem("JWT")
    const history = useHistory();

    const beforeLogin = () => {
        return (
            <div className="wrp-membermenu">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
        )
    }

    useEffect(()=> {
        axios.get(`http://localhost:4000/login`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res)=> {
            console.log(res)
        })
        .catch((err)=> {
            console.log(err)
        })
    },[])

    return (
        <div>
            {
                token ? children : beforeLogin()            
            }
        </div>
    )
}
