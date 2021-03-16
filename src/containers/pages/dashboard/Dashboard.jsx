import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom";
import { LayoutAdmin } from '../../organism/layoutAdmin/LayoutAdmin';


export const Dashboard = () => {
    const [dataUser, setDataUser] = useState([])
    const token = localStorage.getItem("JWT")
    const user = localStorage.getItem("user")
    const history = useHistory();

    useEffect(()=> {
        axios.get(`http://localhost:4000/users`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res)=> {
            console.log(res.data.data)
            setDataUser(res.data.data)
        })

    },[])
    return (
        <LayoutAdmin>
            Welcome <strong>{user}</strong>
        </LayoutAdmin>
    )
}
