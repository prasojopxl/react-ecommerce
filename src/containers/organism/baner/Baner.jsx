import React from 'react'
import {Link} from "react-router-dom";
import "./style.scss";
import {MainBaner} from "../../../assets/images";


export const Baner = () => {
    return (
        <div className="wrp-baner" style={{background:"rgba(184,229,255, 26%)"}}>
            <div className="contents">
                <div className="left">
                    <div className="content">
                        <h1>Belajar Pemrograman</h1>
                        <p>Mulai Karirmu di dunia programming dengan belajar pemrogramman bersama kami mulai dari dasar. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nisi explicabo quaerat non quis eveniet commodi exercitationem. </p>
                        <Link to="/started" className="btn">Get Starter</Link>

                    </div>
                </div>
                <div className="right">
                    <img src={MainBaner} className="img-mainbaner" alt=""/>
                </div>
            </div>
        </div>
    )
}
