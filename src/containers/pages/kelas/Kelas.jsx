import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import "./style.scss";
import { Baner } from '../../../containers/organism/baner/Baner';
import { Quote } from '../../../containers/organism/quote/Quote';
import { Title } from '../../../components/title/Title';
import {ItemCourse} from "../../../containers/organism/courseSlider/ItemCourse";
import imageCover from "../../../assets/images/cover-dev.jpg";

export const Kelas = () => {
    const [product, setProduct] = useState({
        "products": [
            {
                "cover":imageCover,
                "title": "Frontend Dev with Vue",
                "level":"Basic",
                "price":"Rp. 799.000"
            },
            {
                "cover":imageCover,
                "title": "NodeJS with Express",
                "level":"Basic",
                "price":"Rp. 599.000"
            },
            {
                "cover":imageCover,
                "title": "SEO",
                "level":"Medium",
                "price":"Rp. 500.000"
            },
            {
                "cover":imageCover,
                "title": "Rest API",
                "level":"Medium",
                "price":"Rp. 510.000"
            },
            {
                "cover":imageCover,
                "title": "Fundamental React Native",
                "level":"Basic",
                "price":"Rp. 490.000"
            },
            {
                "cover":imageCover,
                "title": "Fullstack Designer",
                "level":"Basic",
                "price":"Rp. 499.200"
            },
            {
                "cover":imageCover,
                "title": "Golang",
                "level":"Basic",
                "price":"Rp. 899.000"
            },            
            {
                "cover":imageCover,
                "title": "Fullstack Laravel Vue",
                "level":"Basic",
                "price":"Rp. 791.000"
            },
            {
                "cover":imageCover,
                "title": "API Development with NodeJS",
                "level":"Medium",
                "price":"Rp. 999.000"
            },            
        ]
    })

    return (
        <div>
            <Baner/>
            <Title title="Category"/>
            <div className="wrp-filter">
                <Link to="#">Development</Link>
                <Link to="#">Marketing</Link>
                <Link to="#">Security</Link>
            </div>

            <div className="container wrp-listproduct">
                {   
                    product.products.map((item,i)=> {
                        return (
                            <ItemCourse key={i} cover={item.cover} title={item.title} level={item.level} price={item.price}/>
                        )
                    })                                
                }
            </div>

            <div className="wrp-paging">
                <Link>Prev</Link>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>Next</Link>
            </div>

            <Quote/>

        </div>
    )
}
