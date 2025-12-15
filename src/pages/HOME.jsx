
import React, { lazy, Suspense } from 'react';
import Banner from "../components/Banner"
import Mydata from "../data/myData.json"
import parse from "html-react-parser"
const ImageBanner = lazy(() => import('../components/ImageBanner'));
import ImgBannerComponent from "../components/ImgBannerComponent"
import PartnerComponent from "../components/PartnerComponent"
import ImgTextWidget from '../components/ImgTextWidget';
import Layout from "../Layout/Layout"
import ImgBanner from '../assets/banner3.avif'
import ServicesImg from '../assets/services.jpg'
import UnleashingImg from '../assets/unleashing_exp.jpg'

const Home = () => {
    return <>
        <Layout>
            <ImgBannerComponent  title={Mydata[0].heroText} text={Mydata[0].heroSubTitle} ImgBanner={ImgBanner}/>
            <Suspense fallback={<div>Loading component...</div>}>
                <ImageBanner title={Mydata[0].title2} text={Mydata[0].text2} btnText={parse(Mydata[0].btntext2)} widgetImg={UnleashingImg}/>
            </Suspense>
            <Banner 
            head={["Our strategy to", <br/>,  "grow your talent"]} 
            para={'A compelling tagline or description.'}
            btnText='Know more'
            />
            <PartnerComponent/>
            <ImgTextWidget title={'Our Services'} btnText={'Reach Us'} ImgBanner={ServicesImg} point1={'HR Platform Implementations (ATS, CRM, Career Sites, Onboarding)'} point2={'HR Systems Integrations (HRIS, Job Boards, Assessments)'} point3={'Talent Experience OptimizationTalent Experience Optimization'} point4={'HR Automation & Workflow Enablement'} point5={'Quality Assurance & Managed Support'}/>
            
        </Layout>
    </>
}
export default Home