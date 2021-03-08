import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import { PostForm } from '../../organism/postForm/PostForm';

export const KelasUpdate = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory();
    const [postDetail, setPostDetail] = useState();
    const params = useParams();

    const UpdatePost = (titleVal, descriptionVal, priceVal, postId) => {
        axios.put(`http://localhost:4000/products/${postId}`,
            {
                title: titleVal,
                description: descriptionVal,
                price: priceVal,
                images: "https://placeimg.com/480/480/tech"
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
        axios.get(`http://localhost:4000/products/${postId}`)
        .then (res=> {
            setPostDetail(res.data.data)
            setTitle(res.data.title)
            setDescription(res.data.description)
            setPrice(res.data.price)
            console.log(res.data)
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
                        description={description}
                        onDescription={setDescription}
                        price={price}
                        onPrice={setPrice}
                        onSubmit={()=> UpdatePost(title, description, price, params.id)}
                    />
                </div>
            </div>
        </div>
    )
}
