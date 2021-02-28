import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "./style.scss";
import {IconRight} from "../../../assets/images";
import { Link, useHistory } from 'react-router-dom';
import {ItemCourse} from "./ItemCourse";
import axios from "axios";


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

    const [product, setProduct] = useState([]);

    const history = useHistory;

    useEffect(()=> {
        fetch("http://localhost:3007/courseinfo")
        .then((response)=> response.json())
        .then((data)=> {
            console.log(data)
            console.log(data[0].title)
            setProduct(data)
        })
    },[])

    const EditBtn =() => {
        return (
            <div>
                {alert("Edit Btn")}
            </div>
        )
    }

    const DeleteBtn = (index, e) => {
        return (
            <div>
                {alert("Delete Btn")}
            </div>
        )
    }

    return (
        <div className="wrp-sliderproduct">   
            <div className="titleslider">
                <div className="left">Course</div>
                <div className="right"><Link to="/"> Read More <img src={IconRight} alt=""/></Link></div>
            </div>
            <Slider {...settings}>
                {   
                    product.map((item,i)=> {
                        return (
                            <ItemCourse EditBtn={EditBtn} DeleteBtn={DeleteBtn.bind(this.index)} key={i} cover={item.cover} title={item.title} level={item.level} price={item.price}/>
                        )
                    })                                
                }
            </Slider>
        </div>        
    )
}


