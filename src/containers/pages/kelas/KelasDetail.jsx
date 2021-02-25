import React from 'react'
import {useParams} from "react-router-dom";

export const KelasDetail = () => {
    const params = useParams();
    window.document.title="Kelas "+params.id
    return (
        <div className="container wrp-kelasdetail">
            <div style={{margin: "90px auto", textAlign:"center"}}>
                Selamat Datang di Kelas
                <h3 style={{textTransform:"uppercase"}}>{params.id}</h3>
            </div>
        </div>
    )
}
