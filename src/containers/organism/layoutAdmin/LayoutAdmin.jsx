import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./style.scss";

export const LayoutAdmin = ({children}) => {
    const history = useHistory()
    const Logout = () => {
        localStorage.removeItem("JWT");
        localStorage.removeItem("user");
        history.push("/login")
    }

    return (
        <div className="wrp-adminpanel">
            <div className="sidebar">
                <div className="nameapp">CMS COMMERCE</div>
                <ul>
                    <li><Link to="/dashboard">Home</Link></li>
                    <li><Link to="/setproducts">Product</Link></li>
                    <li><Link to="/setcoupons">Coupons</Link></li>
                    <li><Link to="/setcategories">Categories</Link></li>
                    <li><Link to="/setusers">Users</Link></li>
                    <li><button  onClick={()=>Logout()} >Logout</button></li>
                </ul>
                <div className="copyright">&copy; 2021 - CMS COMMERCE</div>
            </div>
            <div className="bodycontent">
                <div className="topbar"><h1>Dashboard</h1></div>
                {children}
            </div>
        </div>
    )
}
