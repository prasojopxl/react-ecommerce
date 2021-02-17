import React, {useState} from 'react'
import Slider from "react-slick";
import imageCover from "../../assets/images/cover-dev.jpg";
import "./style.scss";

export const CourseSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
		// prevArrow: 'aa',
		// nextArrow: '87',        
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
            <Slider {...settings}>
                {   
                    product.products.map((item,i)=> {
                        return (
                            <div key={i} className="itemslider">
                                <img src={item.cover} alt="sdsa"/>
                                <h3>{item.title}</h3>
                                <h5>{item.level}</h5>
                                <div className="price">{item.price}</div>
                            </div>
                        )
                    })                
                
                }
            </Slider>
        </div>        
    )
}


