import React from 'react'
import "./style.scss";
import {Link} from "react-router-dom";

const ItemFooter = (props) => {
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

export const Footer = () => {
    return (
        <div className=" wrp-footer">
            <div className="container contents">
                <div className="top">
                    <ItemFooter title="ABOUT" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dolor officia illum consectetur molestias ducimus quam voluptatum minus, soluta ad eos reiciendis consequatur minima. At, vel. Molestiae soluta corrupti facere?" menu={[]}/>
                    <ItemFooter title="SERVICES" menu={["course","integration","book","blog"]}/>
                    <ItemFooter title="SUPPORT" menu={["contact","privacy","agreement"]}/>
                    <ItemFooter title="SOCIAL" menu={["facebook","instagram","youtube"]}/>
                </div>
            </div>
            <div className="btm">&copy;abc {new Date().getFullYear()}</div>
        </div>
    )
}
