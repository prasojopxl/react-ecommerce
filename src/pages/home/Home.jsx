import React from 'react'
import {Baner} from "../../components/baner/Baner"
import {Feature} from "../../components/feature/Feature";
import {Benefit} from "../../components/bennefit/Benefit";
import {CourseSlider} from "../../components/courseSlider/CourseSlider";

export const Home = () => {
    return (
        <div>
            <Baner/>
            <Feature/>
            <Benefit/>
            <CourseSlider/>
        </div>
    )
}
