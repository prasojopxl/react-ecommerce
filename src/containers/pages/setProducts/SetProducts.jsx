import React, {useState, useEffect} from 'react'
import { LayoutAdmin } from '../../organism/layoutAdmin/LayoutAdmin'
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import "./style.scss";

export const SetProducts = () => {
    const token = localStorage.getItem("JWT");
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(()=> {
        axios.get(`http://localhost:4000/products`, {
            headers: {
                "Authorization":`Bearer ${token}`
            }
        })
        .then((res)=> {
            console.log(res.data.data)
            setProducts(res.data.data)
        })
    },[])

    const DeleteBtn = (id) => {
        axios.delete(`http://localhost:4000/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res)=>{
            console.log(`data terhapus ${res.data[id]}`)
        })
        .catch((err)=> {
            console.log("ada error",err)
        })
    }

    return (
    <LayoutAdmin>
            <button className="btn" onClick={()=> history.push("/kelas/create")}>Create Data</button> 
            <div className="row-products">
                {
                    products.map((item, i) => {
                        return (
                            <React.Fragment key={item.id}>
                                <div className="item-products">
                                    <div className="imgwrp"><img src={item.image} alt={item.title}/></div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <h5>{item.price}</h5>
                                    <div className="wrp-action">
                                        <button onClick={()=>history.push(`kelas/update/${item.id}`)}>Edit</button>
                                        <button onClick={()=> DeleteBtn(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </LayoutAdmin>            
    )
}
