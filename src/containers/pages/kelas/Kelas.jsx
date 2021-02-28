import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import "./style.scss";
import { Baner } from '../../../containers/organism/baner/Baner';
import { Quote } from '../../../containers/organism/quote/Quote';
import { Title } from '../../../components/title/Title';
import {ItemCourse} from "../../../containers/organism/courseSlider/ItemCourse";

export const Kelas = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch("http://localhost:3007/courseinfo")
        .then((res)=>res.json())
        .then((data)=> {
            setProduct(data)
        })
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

            <div className="container wrp-listproduct">
                {   
                    product.map((item,i)=> {
                        return (
                            <ItemCourse key={i} id={item.id} cover={item.cover} title={item.title} level={item.level} price={item.price}/>
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
