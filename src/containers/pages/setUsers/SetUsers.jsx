import React, {useState, useEffect} from 'react'
import { LayoutAdmin } from '../../organism/layoutAdmin/LayoutAdmin'
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


export const SetUsers = () => {
    const token = localStorage.getItem("JWT");
    const history = useHistory();
    const [dataUser, setDataUser] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/users`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then ((res)=> {
            console.log(res.data)
            setDataUser(res.data.data)
        })
    }, [])
    return (
        <LayoutAdmin>
            {
                dataUser.map((item, i)=> {
                    return (
                        <div className="row-item">
                            <div className="item">{item.name}</div>
                            <div className="item">{item.email}</div>
                            <div className="item">{item.phone}</div>
                            <div className="item"><Link>Edit</Link> | <Link>Delete</Link></div>
                        </div>

                    )
                })
            }
        </LayoutAdmin>
    )
}
