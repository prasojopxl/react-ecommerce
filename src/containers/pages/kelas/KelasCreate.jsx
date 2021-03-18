import React, {useState} from 'react'
import { PostForm } from '../../organism/postForm/PostForm';
import { useHistory } from 'react-router-dom';

import axios from "axios"
import { LayoutAdmin } from '../../organism/layoutAdmin/LayoutAdmin';

export const KelasCreate = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const history = useHistory();
    const token = localStorage.getItem("JWT")

    const createPostKelas = (titleVal, descriptionVal, priceVal)=> {
        axios.post(`http://localhost:4000/products/`,
            {
                image: "https://placeimg.com/480/480/tech",
                title: titleVal,
                price:  priceVal,
                description: descriptionVal,
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type": "application/json; charset=UTF-8",
                }
            }            
        )
        .then (res=> {
            console.log("ini respon create"+res)
            history.push("/setproducts")
        
        })
        .catch(err=> {console.log(err)})
    }

    return (
        <LayoutAdmin>
            <div className="formpage">
                <div className="wrp-form">
                    <h4>Data Course</h4>
                    <div className="boxlogin">
                        <PostForm
                            isUpdate={false}
                            title={title}
                            onTitle={setTitle}
                            description={description}
                            onDescription={setDescription}
                            price={price}
                            onPrice={setPrice}
                            onSubmit={()=> createPostKelas(title, description,price)}
                        />
                    </div>
                </div>
            </div>
        </LayoutAdmin>
    )
}
