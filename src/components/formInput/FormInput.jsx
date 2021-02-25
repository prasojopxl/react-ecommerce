import React from 'react'
import "./style.scss";


export const FormInput = (props) => {
    return (
        <div className="item-input">
            <input type={props.type} placeholder={props.placeholder} value={props.value}/>
        </div>
    )
}
