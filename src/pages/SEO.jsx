import React from 'react';
import { Helmet } from 'react-helmet-async';
import OgImage from '../assets/og/OG_Image.jpg'

export default function SEO({title, description, keywords, type}) {
return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name="keywords" content={keywords}/>
        { /* End standard metadata tags */ }
        { /* OG tags */ }
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={OgImage} />
        { /* End OG tags */ }
    </Helmet>
)
}