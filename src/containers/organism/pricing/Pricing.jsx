import React from 'react'
import "./style.scss";
import {Title} from "../../../components/title/Title";


const ItemPricing = (props) => {
    return (
            <div className="itempricing">
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <h6>{props.start}</h6>
                <h2>{props.price}</h2>
            </div>
    )
}

export const Pricing = () => {
    return (
        <div className="wrp-pricing">
            <Title title="Pricing" subtitle="Pilih sistem pembayaran yang kamu sukai"></Title>
            <div className="wrp-listpricing">
                <ItemPricing 
                    title="Free" 
                    desc="Kami menyediakan banyak kelas gratis, kamu bisa memilih kelas gratis yang ingin kamu pelajari"
                    start="Free"
                    price="Rp. 0,-"
                />
                <ItemPricing 
                    title="Sekali Bayar" 
                    desc="Kamu bisa membeli beragam kelas dengan sistem sekali bayar, dapat mengakses selamanya ke kelas yang kamu beli"
                    start="Mulai dari"
                    price="Rp. 150.000,-"
                />
                <ItemPricing 
                    title="VIP (Berlangganan)" 
                    desc="Dengan sistem berlangganan, kamu bebas mengakses seluruh course selama 1,3,6 atau 12 bulan"
                    start="Mulai dari"
                    price="Rp. 90.000,-"
                />
            </div>
        </div>
    )
}
