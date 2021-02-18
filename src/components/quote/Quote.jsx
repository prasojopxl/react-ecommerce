import React from 'react'
import {Link} from "react-router-dom";
import "./style.scss";


export const Quote = () => {
    return (
        <div className="wrp-quote">
            <div className="content">
                <h2>"Jika kamu tidak sanggup menahan lelahnya belajar maka kamu harus sanggup menahan perihnya kebodohan"</h2>
                <h6>Imam Syafi'i</h6>
                <Link className="btn">Get Started</Link>
            </div>
        </div>
    )
}
