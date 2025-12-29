
import ImgBannerComponent from "../components/ImgBannerComponent"
import AbstractBg from '../assets/abstract_bg.jpg'
import WhoWeAre from '../assets/whoWeAre.svg'
import WhatWeDoImg from '../assets/whatWeDo.svg'
import OurApproach from '../assets/ourApproach.svg'
import ChooseTechlinx from '../assets/chooseTechlinx.svg'
import WeSupport from '../assets/weSupport.svg'
import ImgTextWidget from '../components/ImgTextWidget';
import Commitment from '../assets/commitment.svg';
import Layout from "../Layout/Layout";
import ImgTextWidgetTrpnt from '../components/ImgTextWidgetTrpnt';
import ScrollToTop from '../components/scrollToTopButton'
import AboutImg from '../assets/aboutImg.svg'
import SEO from './SEO';
const About = () => {
    return <>
        <Layout>
        <SEO title={'Phenom Certified Integration Partner || Techlinx - About'} description={'Techlinx is an HR technology services company delivering Phenom implementations, AI automation, integrations, and managed services for scalable hiring success. We partner with enterprises to deliver scalable, secure, and high-performing HR technology ecosystems that drive measurable hiring and business outcomes.'} keywords={'Phenom Certified Integration Partner, HR technology services, Phenom implementations, AI in HR, AI-driven HR solutions, Phenom Implementation Partner'} />
            <ImgBannerComponent title={'Enterprise HR Technology Specialists. Phenom Experts.'} text={"Techlinx is an HR technology services company specializing in Phenom implementations, AI automation, integrations, and managed services. We partner with enterprises to deliver scalable, secure, and high-performing HR technology ecosystems that drive measurable hiring and business outcomes."} point1={'Talent Department Diagnostic (People, Process, Technology)'} point2={'Technology Evaluation Guidance'} point3={'People Analytics & Reporting'} ImgBanner={AboutImg}/>

            <ImgTextWidgetTrpnt title={'Who We Are'} text={'We are a team of HR technology specialists with deep experience delivering enterprise-scale talent acquisition solutions. Our focus is simple - help organizations realize the full value of their HR technology investments through structured delivery, strong governance, and continuous optimization.'} ImgBanner={WhoWeAre}/>

            <ImgTextWidget AbstractBg={AbstractBg} title={'What We Do'} ImgBanner={WhatWeDoImg} point1={'Phenom implementations and enterprise rollouts'} point2={'AI-driven HR automation'} point3={'HR systems integrations'} point4={'Quality assurance and platform stability'} point5={'Post-go-live support and managed services'}/>

            <ImgTextWidgetTrpnt title={'Our Approach'} text={'Enterprise-ready. Outcome-driven.'} ImgBanner={OurApproach} point1={'Deep platform expertise with Phenom'} point2={'QA-first delivery and risk-managed execution'} point3={'Strong governance and transparency'} point4={'Long-term partnership mindset'}/>
            
            <ImgTextWidget AbstractBg={AbstractBg} title={'Why Enterprises Choose Techlinx'} ImgBanner={ChooseTechlinx} point1={'Specialized focus on Phenom HR technology'} point2={'Proven experience across complex enterprise environments'} point3={'Reliable delivery with minimal post-go-live risk'} point4={'Trusted partner beyond implementation'}/>
            
            <ImgTextWidgetTrpnt title={'Industries We Support'} ImgBanner={WeSupport} point1={'Engineering & Construction'} point2={'Healthcare'} point3={'Manufacturing'} point4={'Logistics & Transportation'}/>

            <ImgTextWidget AbstractBg={AbstractBg} title={'Our Commitment'} ImgBanner={Commitment} text={'We are committed to helping HR and talent teams build intelligent, scalable, and future-ready hiring platforms—delivered with precision and accountability.'}/>
            <ScrollToTop />
        </Layout>
    </>
}
export default About;