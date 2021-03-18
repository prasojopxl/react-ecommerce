import React, {useState, useEffect} from 'react'
import { LayoutAdmin } from '../../organism/layoutAdmin/LayoutAdmin'
import {Link, useHistory} from "react-router-dom";
import axios from "axios";


export const SetUsers = () => {
    const token = localStorage.getItem("JWT");
    const history = useHistory();
    const [dataUser, setDataUser] = useState([])

    const DeleteUser = (id) => {
        axios.delete(`http://localhost:4000/users/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then ((res)=> {
            console.log(`Data terhapus ${id}`)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/users`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then ((res)=> {
            setDataUser(res.data.data)
        })
    }, [])
    return (
        <LayoutAdmin>
            {
                dataUser.map((item, i)=> {
                    return (
                        <div className="row-item" key={item.id}>
                            <div className="item">{item.name}</div>
                            <div className="item">{item.email}</div>
                            <div className="item">{item.phone}</div>
                            <div className="item"><button>Edit</button> | <button onClick={()=> DeleteUser(item.id)}>Delete</button> </div>
                        </div>

                    )
                })
            }
        </LayoutAdmin>
    )
}
