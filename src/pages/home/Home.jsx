import React from 'react'
import {Baner} from "../../components/baner/Baner"
import {Feature} from "../../components/feature/Feature";
import {Benefit} from "../../components/bennefit/Benefit";
import {CourseSlider} from "../../components/courseSlider/CourseSlider";

import {Title} from "../../components/title/Title";
import { Pricing } from '../../components/pricing/Pricing';
import { Quote } from '../../components/quote/Quote';

export const Home = () => {
    return (
        <div>
            <Baner/>
            <Feature/>
            <Benefit/>
            <Title title="Mulai bersama daridasar.com" subtitle="Platform belajar yang dapat membantumu belajar apapun dari dasar"/>
            <CourseSlider/>
            <CourseSlider/>
            <Pricing/>
            <Quote/>
        </div>
    )
}
