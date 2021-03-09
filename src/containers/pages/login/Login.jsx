import React, {useState} from 'react'
import axios from "axios";
import {useHistory} from "react-router-dom";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState ("")
    const history = useHistory();

    const login = () => {
        axios.post (`http://localhost:4000/login`, {
            email,
            password
        })
        .then((res)=> {
            console.log("berhasil",res)
            localStorage.setItem("JWT", res.data.accessToken)
            history.push("/dashboard");
        })
        .catch ((err)=> {
            console.log("gagal",err)
        })
    }

    return (
        <div className="formpage">
            <div className="wrp-form">
                <h4>Login</h4>
                <div className="boxlogin">
                    <div className="item-input">
                        <input type="text" value={email} name="email" id="" onChange={(e) => { setEmail(e.target.value)}} placeholder="Name"/>
                    </div>
                    <div className="item-input">
                        <input type="password" value={password} name="password" onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password"/>
                    </div>
                    <div className="item-input">
                        <input type="button" onClick={()=> login()} value="Submit"/>
                    </div>

                </div>
            </div>
        </div>
    )
}
