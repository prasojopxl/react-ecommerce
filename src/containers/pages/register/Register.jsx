import React from 'react'
import {FormInput} from "../../../components/formInput/FormInput";


export const Register = () => {
    return (
        <div className="formpage">
            <div className="wrp-form">
                <h4>Register</h4>
                <div className="boxlogin">
                    <FormInput type="text" placeholder="Nama Lengkap"/>
                    <FormInput type="text" placeholder="Email"/>
                    <FormInput type="text" placeholder="Username"/>
                    <FormInput type="password" placeholder="Password"/>
                    <FormInput type="submit" value="Submit"/>
                </div>
            </div>
        </div>
    )
}
