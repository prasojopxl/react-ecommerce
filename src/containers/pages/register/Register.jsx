import React, {useState} from 'react'
import axios from "axios";


export const Register = () => {
    const [name, setName]= useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const register = () => {
        axios.post(`http://localhost:4000/register`,  {
            name,
            email,
            password,
            phone
        })
        .then ((res) => {
            console.log("berhasil",res)
        })
        .catch((err)=> {
            console.log("gagal",err)
        })
    }


    return (
        <div className="formpage">
            <div className="wrp-form">
                <h4>Register</h4>
                <div className="boxlogin">
                    <div className="item-input">
                        <input type="text" value={name} name="name" id="" onChange={(e) => { setName(e.target.value)}} placeholder="Name"/>
                    </div>
                    <div className="item-input">
                        <input type="password" value={password} name="password" onChange={(e)=> {setPassword(e.target.value)}} placeholder="Password"/>
                    </div>
                    <div className="item-input">
                        <input type="text" value={email} name="email" onChange={(e)=> {setEmail(e.target.value)}} placeholder="Email"/>
                    </div>
                    <div className="item-input">
                        <input type="text" value={phone} name="phone" onChange={(e)=> {setPhone(e.target.value)}} placeholder="Phone"/>
                    </div>
                    <div className="item-input">
                        <input type="button" onClick={()=> register()} value="Submit"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
