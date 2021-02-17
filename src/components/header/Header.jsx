import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/global.scss"
import "./style.scss";
import Logo from "../../assets/images/logo-abc.svg"

export const Header = () => {
    return (
        <div className="wrp-header container">
            <div className="left"><Link to="/"><img src={Logo} className="logo" alt=""/> </Link></div>
            <div className="center">
                <div className="mainmenu">
                    <Link to="/kelas">Kelas</Link>
                    <Link to="/buku">Buku</Link>
                    <Link to="/blog">Blog</Link>
                </div>
            </div>
            <div className="right">
                <div className="wrp-membermenu">
                    <Link to="/login">Login</Link>
                    <Link to="/started" className="btn">Get Starter</Link>
                </div>
            </div>
        </div>
    )
}