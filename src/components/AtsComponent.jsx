import React from 'react'
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Marquee from 'react-fast-marquee'
import PartnerList from './PartnerList'
import MyData from '../data/myData.json'

const AtsComponent = () => {
  return (
    <div>
 <Box sx={{ backgroundColor: '#fff', py: 8, textAlign:'center' }}>
      <Container sx={{ backgroundColor: '#fff', textAlign:'center' }}>
        <Grid container spacing={4} alignItems="center" justifyContent='center'>
          <Grid item xs={12} md={6} size={{ xs: 12, md: 12 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Integration Excellence in Action
            </Typography>
            <Typography variant="body2" component="p" className='' sx={{ mb: 3, color: 'text.secondary' }}>
              Seamlessly integrating multiple ATS platforms to create a unified recruitment experience.
            </Typography>
          </Grid>
        </Grid>
      <Marquee>
        <PartnerList partnerLogo={"https://upload.wikimedia.org/wikipedia/commons/3/3b/Workday_Logo.png"}/>
        <PartnerList partnerLogo={"https://cdn.prod.website-files.com/657890a20fc7e8389faccae9/65a790857c8aacfca3ddc324_Logo%20SAP.png"}/>
        <PartnerList partnerLogo={"https://getleadline.com/wp-content/uploads/brand-logo-ukg-1.png"}/>
        <PartnerList partnerLogo={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/ICIMS_logo.svg/1280px-ICIMS_logo.svg.png"}/>
        <PartnerList partnerLogo={"https://upload.wikimedia.org/wikipedia/commons/3/3b/Workday_Logo.png"}/>
        <PartnerList partnerLogo={"https://cdn.prod.website-files.com/657890a20fc7e8389faccae9/65a790857c8aacfca3ddc324_Logo%20SAP.png"}/>
      </Marquee>
      </Container>
    </Box>
    </div>
  )
}

export default AtsComponent;