
import React, { lazy, Suspense } from 'react';
import Banner from "../components/Banner"
const ImageBanner = lazy(() => import('../components/ImageBanner'));
import ImgBannerComponent from "../components/ImgBannerComponent"
import PartnerComponent from "../components/PartnerComponent"
import Layout from "../Layout/Layout"
import ImgBanner from '../assets/banner3.avif'
import UnleashingImg from '../assets/unleashing_exp.jpg'
import TextQuoteWidget from "../components/TextQuoteWidget"

const Home = () => {
    return <>
        <Layout>
            <ImgBannerComponent  title={'Empowering Innovation with Expert Implementation'} text={['Our strategy focuses on expanding your talent network effectively.', <br/>, 'By leveraging innovative techniques and targeted approaches.']} btnText={'Know More'} ImgBanner={ImgBanner}/>
            <Suspense fallback={<div>Loading component...</div>}>
                <ImageBanner title={"Unleashing Talent Elevating Experience"} text={"Transforming Talent, Revolutionizing Enterprise Operations."} btnText={"Know More"} widgetImg={UnleashingImg}/>
            </Suspense>
            <Banner 
            head={["Our strategy to", <br/>,  "grow your talent"]} 
            para={'A compelling tagline or description.'}
            btnText='Know more'
            />
            <TextQuoteWidget/>
            <PartnerComponent/>
            
        </Layout>
    </>
}
export default Home