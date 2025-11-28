import { Box, Container } from '@mui/material';
import React from 'react'
import Iframe from 'react-iframe';

const LocationWidget = () => {
  return <>
        <Box sx={{background: '#ffffff', py:4}}>
            <Container maxWidth="xl">
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0506436049204!2d78.37053850000001!3d17.457290000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9300709c69b7%3A0xe78a00637e2be879!2sTechLinx%20IT%20Services%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1755870628958!5m2!1sen!2sin" width="100%" height="250" style="border:1px solid transparent;" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
            </Container>
        </Box>
  </>
}

export default LocationWidget