import React, {useEffect, useState} from 'react'
import {FormInput} from "../../../components/formInput/FormInput";
import { PostForm } from '../../organism/postForm/PostForm';
import axios from "axios"

export const KelasCreate = () => {
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState("");

    const createPostKelas = (titleVal, levelVal, priceVal)=> {
        axios.post(`http://localhost:3007/courseinfo/`,
            {
                cover: "https://dummyimage.com/300x200/000/fff",
                title: titleVal,
                price:  priceVal,
                level: levelVal,
            },
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            }            
        )
        .then (res=> {
            console.log("ini respon create"+res)
        })
        .catch(err=> {console.log(err)})
    }

    return (
        <div className="formpage">
            <div className="wrp-form">
                <h4>Data Course</h4>
                <div className="boxlogin">
                    <PostForm
                        isUpdate={false}
                        title={title}
                        onTitle={setTitle}
                        level={level}
                        onLevel={setLevel}
                        price={price}
                        onPrice={setPrice}
                        onSubmit={()=> createPostKelas(title, level,price)}
                    />
                    {title}<br/>{level}<br/>{price}
                </div>
            </div>
        </div>
    )
}
