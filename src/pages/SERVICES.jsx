import { Breadcrumbs } from "@mui/material";
import ImgBanner from '../assets/services.jpg'
import ImgBannerComponent from "../components/ImgBannerComponent"
import Breadcrumb from "../components/Breadcrumb";
import Layout from "../Layout/Layout";
import TabSection from "../components/Tabs";
import ImgTextWidget from "../components/ImgTextWidget";
const Services = () => {
    return <>
    <Layout>
        <Breadcrumb currentPage={'Our Services'}/>
        <ImgTextWidget title={'Strategic Advisory'} text={"Transform your talent function from one that emphasizes process to one that prioritizes the needs of your people."} btnText={'Reach Us'} ImgBanner={ImgBanner} point1={'Talent Department Diagnostic (People, Process, Technology)'} point2={'Technology Evaluation Guidance'} point3={'People Analytics & Reporting'}/>
        <TabSection/>
    </Layout>
    </>
}
export default Services;