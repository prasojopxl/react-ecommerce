import React from 'react'
import "./style.scss";

export const Title = (props) => {
    return (
        <div className="wrp-title">
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}
