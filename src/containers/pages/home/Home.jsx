import React from 'react'
import {Baner} from "../../../containers/organism/baner/Baner"
import {Feature} from "../../../containers/organism/feature/Feature";
import {Benefit} from "../../../containers/organism/bennefit/Benefit";
import {CourseSlider} from "../../../containers/organism/courseSlider/CourseSlider";

import {Title} from "../../../components/title/Title";
import { Pricing } from '../../../containers/organism/pricing/Pricing';
import { Quote } from '../../../containers/organism/quote/Quote';
import { Layout } from '../../organism/layout/Layout';

export const Home = () => {
    return (
        <div>
            <Layout>
                <Baner/>
                <Feature/>
                <Benefit/>
                <Title title="Mulai bersama daridasar.com" subtitle="Platform belajar yang dapat membantumu belajar apapun dari dasar"/>
                <CourseSlider/>
                <CourseSlider/>
                <Pricing/>
                <Quote/>
            </Layout>
        </div>
    )
}
