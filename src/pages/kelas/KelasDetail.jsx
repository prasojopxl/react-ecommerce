import React from 'react'
import {Header} from "../../components/";
import {useParams} from "react-router-dom";

export const KelasDetail = () => {
    const params = useParams();
    return (
        <div className="container wrp-kelasdetail">
            <div style={{margin: "90px auto", textAlign:"center"}}>
                Welcome Page 
                <h3 style={{textTransform:"uppercase"}}>{params.id}</h3>
            </div>
        </div>
    )
}
