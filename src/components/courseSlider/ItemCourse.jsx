import React, {useState} from 'react'
import "./style.scss";
import { Link } from 'react-router-dom';

export const ItemCourse = (props) => {

    return (
        <div key={props.key} className="itemslider">
            <img src={props.cover} alt={props.title}/>
            <div className="content">
                <h3><Link to={'kelas/'+props.title}>{props.title}</Link></h3>
                <h5>{props.level}</h5>
                <div className="price">{props.price}</div>
            </div>
        </div>
    )
}
