import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";

export const KelasDetail = () => {
    const params = useParams();
    const [dataDetail, setDataDetail] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = () => {
        setLoading(true)
        axios.get(`http://localhost:3007/courseinfo/${params.id}`)
        .then (res=>{
            console.log(res.data)
            setDataDetail(res.data)
            setLoading(false)
        })
        .catch (error => {
            setLoading(true)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container wrp-kelasdetail">
            <div style={{margin: "90px auto", textAlign:"center"}}>
                {
                    loading === true && <div>Loading...</div>
                }
                Selamat Datang di Kelas<br/>

                <img src={dataDetail.cover} alt={dataDetail.title}/>
                <h4>{dataDetail.title}</h4>
                <h5>{dataDetail.level}</h5>
                {dataDetail.price}
            </div>
        </div>
    )
}
