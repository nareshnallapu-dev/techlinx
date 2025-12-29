
import React, { lazy, Suspense } from 'react';
import Banner from "../components/Banner"
import Mydata from "../data/myData.json"
import parse from "html-react-parser";
import { Helmet } from 'react-helmet';
const ImageBanner = lazy(() => import('../components/ImageBanner'));
import ImgBannerComponent from "../components/ImgBannerComponent"
import PartnerComponent from "../components/PartnerComponent"
import ScrollToTop from '../components/scrollToTopButton'
import ImgTextWidget from '../components/ImgTextWidget';
import Layout from "../Layout/Layout"
import HeroBannerImg from '../assets/heroBannerImg.png'
import OgImage from '../assets/og/OG_Image.jpg'
import UnleashingImg from '../assets/image2.png'
import ServicesSvg from '../assets/services.svg'
import AbstractBg from '../assets/abstract_bg.jpg'
import AtsComponent from '../components/AtsComponent';

const Home = () => {
    return <>
        <div>
            <Helmet>
                <title>Phenom Certified Integration Partner || Techlinx - Home</title>
                <meta name="description" content="Techlinx is an HR technology services company delivering Phenom implementations, AI automation, integrations, and managed services for scalable hiring success. We partner with enterprises to deliver scalable, secure, and high-performing HR technology ecosystems that drive measurable hiring and business outcomes." />
                <meta name="keywords" content="Phenom Certified Integration Partner, HR technology services, Phenom implementations, AI in HR, AI-driven HR solutions, Phenom Implementation Partner"/>
                <meta name="author" content="TECHLINX"/>
                <meta property="og:title" content="Techlinx - Home" />
                <meta property="og:type" content="Website" />
                <meta property="og:description" content="Techlinx is an HR technology services company delivering Phenom implementations, AI automation, integrations, and managed services for scalable hiring success." />
                <meta property="og:site_name" content="Techlinx" />
                <meta property="og:image" content={OgImage} />
            </Helmet>
            <Layout>
                <ImgBannerComponent  title={Mydata[0].heroText} text={Mydata[0].heroSubTitle} ImgBanner={HeroBannerImg}/>
                <Suspense fallback={<div>Loading content. Please wait…</div>}>
                    <ImageBanner title={Mydata[0].title2} text={Mydata[0].text2} btnText={parse(Mydata[0].btntext2)} widgetImg={UnleashingImg}/>
                </Suspense>
                <Banner 
                head={["Our strategy to", <br/>,  "grow your talent"]} 
                para={'A compelling tagline or description.'}
                btnText='Know more'
                />
                <PartnerComponent/>
                <ImgTextWidget AbstractBg={AbstractBg} title={'Our Services'} btnText={'Reach Us'} ImgBanner={ServicesSvg} point1={'HR Platform Implementations (ATS, CRM, Career Sites, Onboarding)'} point2={'HR Systems Integrations (HRIS, Job Boards, Assessments)'} point3={'Talent Experience OptimizationTalent Experience Optimization'} point4={'HR Automation & Workflow Enablement'} point5={'Quality Assurance & Managed Support'}/>
                <AtsComponent/>
            <ScrollToTop />
            </Layout>
        </div>
    </>
}
export default Home