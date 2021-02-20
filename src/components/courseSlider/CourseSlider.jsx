import React, {useState} from 'react';
import Slider from "react-slick";
import "./style.scss";
import {IconRight, imageCover} from "../../assets/images";
import { Link } from 'react-router-dom';
import {ItemCourse} from "./ItemCourse";


export const CourseSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
        dots:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]        
    };

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
                "title": "Golang",
                "level":"Basic",
                "price":"Rp. 899.000"
            },            
        ]
    })

    return (
        <div className="wrp-sliderproduct">           
            <div className="titleslider">
                <div className="left">Course</div>
                <div className="right"><Link to="/"> Read More <img src={IconRight} alt=""/></Link></div>
            </div>

            <Slider {...settings}>
                {   
                    product.products.map((item,i)=> {
                        return (
                            <ItemCourse key={i} cover={item.cover} title={item.title} level={item.level} price={item.price}/>
                        )
                    })                                
                }
            </Slider>
        </div>        
    )
}


