import React, {useState} from 'react'
import "./style.scss";
import { Link, useHistory } from 'react-router-dom';

export const ItemCourse = (props, title, description, price, onTitle, onDescription, onPrice, onSubmit, isUpdate) => {
    const history = useHistory();


    return (
        <div key={props.keyId} className="itemslider">
            <img src={props.cover} alt={props.title}/>
            <div className="content">
                <h3><Link to={`kelas/${props.id}`}>{props.title}</Link></h3>
                <h5>{props.description}</h5>
                <div className="price">{props.price}</div>
            </div>
            <div className="wrp-btn">
                <button onClick={()=>history.push(`kelas/update/${props.paramId}`)}> Edit</button>
                <button onClick={props.DeleteBtn}>Delete</button>
            </div>
        </div>
    )
}
