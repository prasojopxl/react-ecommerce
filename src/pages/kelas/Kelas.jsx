import React from 'react'
import { Link } from 'react-router-dom'
import "./style.scss";
import { Baner } from '../../components/baner/Baner'
import { Quote } from '../../components/quote/Quote'
import { Title } from '../../components/title/Title'


export const Kelas = () => {
    return (
        <div>
            <Baner/>
            <Title title="Category"/>
            <div className="wrp-filter">
                <Link to="#">Development</Link>
                <Link to="#">Marketing</Link>
                <Link to="#">Security</Link>
            </div>
            
            <Quote/>
            <div className="wrp-paging">
                <Link>Prev</Link>
                <Link>1</Link>
                <Link>2</Link>
                <Link>3</Link>
                <Link>Next</Link>
            </div>
        </div>
    )
}
