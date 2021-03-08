import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import "./style.scss";
import { Baner } from '../../../containers/organism/baner/Baner';
import { Quote } from '../../../containers/organism/quote/Quote';
import { Title } from '../../../components/title/Title';
import {ItemCourse} from "../../../containers/organism/courseSlider/ItemCourse";
import axios from "axios";

export const Kelas = () => {
    const [product, setProduct] = useState([])
    const history = useHistory()


    const getData = () => {
        axios.get(`http://localhost:4000/products`)
        .then((res)=> {
            setProduct(res.data.data);
        })
        .catch((e)=>{
            console.log(`error ${e}`)
        })
    }

    const DeleteBtn = (id) => {
        axios.delete(`http://localhost:4000/products/${id}`)
        .then(res=>{
            console.log(`data yang terhapus ${res.data[id]}`)
            getData();
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:4000/products`)
        .then((res=> {
            setProduct(res.data.data)
         }))
    }, []);


    return (
        <div>
            <Baner/>
            <Title title="Category"/>
            <div className="wrp-filter">
                <Link to="/">Development</Link>
                <Link to="/">Marketing</Link>
                <Link to="/">Security</Link>
            </div>
            
            <div className="container" style={{paddingLeft:"40px", marginBottom:"10px"}}>
                <button className="btn" onClick={()=> history.push("/kelas/create")}>Create Data</button> 
            </div>

            <div className="container wrp-listproduct">
                {   
                    product.map((item,i)=> {
                        return (
                            <ItemCourse key={i} id={item.id} cover={item.image} title={item.title} description={item.description} price={item.price} paramId={item.id} DeleteBtn={()=>DeleteBtn(item.id)}/>
                        )
                    })                                
                }
            </div>

            <div className="wrp-paging">
                <Link to="/">Prev</Link>
                <Link to="/">1</Link>
                <Link to="/">2</Link>
                <Link to="/">3</Link>
                <Link to="/">Next</Link>
            </div>

            <Quote/>

        </div>
    )
}
