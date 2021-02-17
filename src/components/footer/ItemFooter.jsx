import React from 'react'
import {Link} from "react-router-dom";

export const ItemFooter = (props) => {
    return (
        <div className="itemfooter">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <ul>
                {props.menu.map((menuname,i)=> {
                    return <li key={i}><Link to={menuname}>{menuname}</Link> </li>
                })}                    
            </ul>

        </div>
    )
}
