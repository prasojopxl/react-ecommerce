import React, {useState, useEffect} from 'react';
import Slider from "react-slick";
import "./style.scss";
import {IconRight} from "../../../assets/images";
import { Link, useHistory, useParams } from 'react-router-dom';
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
                  centerPadding: '40px',
                  slidesToShow: 3
                }
            },
            {
                breakpoint: 900,
                settings: {
                  arrows: false,
                  centerPadding: '40px',
                  slidesToShow: 2
                }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]        
    };

    const [product, setProduct] = useState([]);
    const [loading, setLoading] =  useState(false);

    const history = useHistory();
    const params = useParams();

    const token = localStorage.getItem("JWT")


    const getData = () => {
        setLoading(true)
        axios.get(`http://localhost:4000/products`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }            
        })
        .then((res)=> {
            setProduct(res.data.data);
            setLoading(false)
        })
        .catch((e)=>{
            setLoading(false)
            console.log(`error ${e}`)
        })
    }

    useEffect(()=> {
        getData();
    },[])

    const EditBtn =() => {
        return (
            <div>
                {alert("Edit Btn")}
            </div>
        )
    }

    const DeleteBtn = (id) => {
        axios.delete(`http://localhost:4000/products/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }            
        })
        .then(res=>{
            console.log(`data yang terhapus ${res.data[id]}`)
            getData();
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="wrp-sliderproduct">   
            {loading && <div>Loading ...</div>}
            <div className="titleslider">
                <div className="left">Course</div>
                <div className="right"><Link to="/"> Read More <img src={IconRight} alt=""/></Link></div>
            </div>
            <Slider {...settings}>
                {   
                    product.map((item,i)=> {
                        return (
                            <ItemCourse EditBtn={EditBtn} paramId={item.id} DeleteBtn={()=>DeleteBtn(item.id)} id={item.id} key={i} cover={item.image} description={item.title} level={item.level} price={item.price}/>
                        )
                    })                                
                }
            </Slider>
        </div>        
    )
}


