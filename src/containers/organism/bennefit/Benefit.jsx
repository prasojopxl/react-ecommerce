import React from "react";
import "./style.scss";
import {Dev, IconStar} from "../../../assets/images";

const Itembenefit = (props) => {
    return (
        <div className="itembenefit">
            <img src={props.icon} alt=""/>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
        </div>
    )
}

export const Benefit = () => {
    return (
        <div className="wrp-bennefit">
            <h2>Keuntungan yang Akan Kamu Dapatkan</h2>
            <h5>Apa sih keuntungan belajar di layanan daridasar.com ?</h5>
            <div className="contents container">
                <div className="left"><img src={Dev} alt=""/> </div>
                <div className="right">
                    <div className="wrp-itembenefit">
                        <Itembenefit icon={IconStar} title="Waktu" desc="Kamu bebas menentukan waktu belajar kapan saja"/>
                        <Itembenefit icon={IconStar} title="Trainer" desc="Belajar bersama praktisi dibidangnya"/>
                        <Itembenefit icon={IconStar} title="Certificate" desc="Dapatkan sertifikat setelah selesai belajar"/>
                        <Itembenefit icon={IconStar} title="Video" desc="Belajar menggunakan video dengan kualitas HD"/>
                        <Itembenefit icon={IconStar} title="Case Studi" desc="Belajar dengan studi kasus"/>
                        <Itembenefit icon={IconStar} title="Dari Dasar" desc="Materi belajar dimulai dari dasar"/>
                    </div>
                </div>
            </div>
        </div>
    )
}