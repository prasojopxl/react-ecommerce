import React from 'react'
import "./style.scss";
import {IconList,  IconVideo, IconTime, IconMember} from "../../assets/images";

const ItemFeater = (props) => {
    return (
        <div className="item-feature">
            <div className="wrp-icon"><img src={props.icon} alt=""/> </div>
            <h4>{props.total}+</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export const Feature = () => {
    return (
        <div className="container wrp-feature">
            <ItemFeater icon={IconList} total="1000" desc="Belajar dengan 40 lebih course tersedia"/>
            <ItemFeater icon={IconVideo} total="2.000" desc="Memiliki lebih dari 2000 video"/>
            <ItemFeater icon={IconTime} total="15.000" desc="Total waktu lebih dari 15.000 jam"/>
            <ItemFeater icon={IconMember} total="1.000.000" desc="Bergabung bersama lebih dari 1.000.000+ Member"/>
        </div>
    )
}
