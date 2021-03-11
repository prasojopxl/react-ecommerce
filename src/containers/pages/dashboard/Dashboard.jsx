import React, {useState, useEffect} from 'react'
import axios from "axios"
import {useHistory} from "react-router-dom";


export const Dashboard = () => {
    const [dataUser, setDataUser] = useState([])
    const token = localStorage.getItem("JWT")
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
        <React.Fragment>
            {!token ? history.push("/login") :  
                <div className="container">
                    {
                        dataUser.map((item, i) => {
                            return (                        
                                <React.Fragment>
                                    <div className="itemdata">Name: {item.name}</div>                        
                                    <div className="itemdata">Email: {item.email}</div>
                                    <div className="itemdata">Phone: {item.phone}</div>                            
                                    <hr/>
                                </React.Fragment>
                            )
                        })
                    }
                </div>            
            }
        </React.Fragment>
    )
}
