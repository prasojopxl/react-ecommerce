import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import { PostForm } from '../../organism/postForm/PostForm';

export const KelasUpdate = () => {
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory();
    const [postDetail, setPostDetail] = useState();
    const params = useParams();

    const UpdatePost = (titleVal, levelVal, priceVal, postId) => {
        axios.put(`http://localhost:3007/courseinfo/${postId}`,
            {
                title: titleVal,
                level: levelVal,
                price: priceVal,
                cover: "https://dummyimage.com/300x200/000/fff"
            },
            {
                headers: {
                    "Content-type": "application/json; charset=UTF-8",                    
                }
            }            
        )
        .then (res=> {
            console.log("ini respon update kelas"+res)
            history.push("/")
        })
    }

    const getPostDetail = (postId) => {
        axios.get(`http://localhost:3007/courseinfo/${postId}`)
        .then (res=> {
            setPostDetail(res.data)
            setTitle(res.data.title)
            setLevel(res.data.level)
            setPrice(res.data.price)
        })
    }

    useEffect(()=> {
        getPostDetail(params.id)
    },[])

    return (
        <div className="formpage">
            <div className="wrp-form">
                <h4>Data Course</h4>
                <div className="boxlogin">
                    <PostForm
                        isUpdate={true}
                        title={title}
                        onTitle={setTitle}
                        level={level}
                        onLevel={setLevel}
                        price={price}
                        onPrice={setPrice}
                        onSubmit={()=> UpdatePost(title, level, price, params.id)}
                    />
                </div>
            </div>
        </div>
    )
}
