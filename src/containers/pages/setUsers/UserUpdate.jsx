import React, { useEffect, useState } from 'react'
import { LayoutAdmin } from '../../organism/layoutAdmin/LayoutAdmin'
import axios from "axios";
import { useHistory, useParams } from 'react-router';


export const UserUpdate = () => {
    // password, email, phone
    const params = useParams();
    const token = localStorage.getItem("JWT");
    const [name, setName] = useState("");
    const [password, setPassword]= useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone]= useState("");
    const history = useHistory();

    const UpdateUser = (nameVal, passwordVal, emailVal, phoneVal, id) => {
        axios.put(`http://localhost:4000/users/${id}`,
            {
                name: nameVal,
                password: passwordVal, 
                email: emailVal,
                phone: phoneVal
            },
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",                    
                    "Authorization": `Bearer ${token}`
                }
            }
        )
        .then ((res)=> {
            console.log("update", res)
            history.pushState("/setusers")
        })
    }

    const userDetail = (id) => {
        axios.get(`http://localhost:4000/users/${id}`, 
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",                    
                    "Authorization": `Bearer ${token}`
                }                
            },
            {
                name
            }
        )
        .then ((res)=> {
            console.log(res.data)
            setName(res.data.name)
            setPassword(res.data.password)
            setEmail(res.data.email)
            setPhone(res.data.phone)
        })

    }
    useEffect (()=> {
        userDetail(params.id)
    })

    return (
        <LayoutAdmin>
            
            <div className="item-input">
                <input type="text" placeholder="Name" devaultValue={name}  />
            </div>
            <div className="item-input">
                <input type="password" placeholder="Password" value={password}/>
            </div>
            <div className="item-input">
                <input type="text" placeholder="Email" value={email}/>
            </div>
            <div className="item-input">
                <input type="text" placeholder="Phone" value={phone}/>
            </div>
            <div className="item-input">
                <button className="btn" onSubmit={()=> UpdateUser(name, password, email, phone)} style={{border:"none", minWidth:"100px"}}>Update </button>
            </div>

        </LayoutAdmin>
    )
}
