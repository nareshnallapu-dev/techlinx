import React from 'react'
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Marquee from 'react-fast-marquee'
import PartnerList from './PartnerList'

const PartnerComponent = () => {
  return (
    <div>
 <Box sx={{ backgroundColor: '#fff', py: 8, textAlign:'center' }}>
      <Container sx={{ backgroundColor: '#fff', textAlign:'center' }}>
        <Grid container spacing={4} alignItems="center" justifyContent='center'>
          <Grid item xs={12} md={6} size={{ xs: 12, md: 12 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Work in Action
            </Typography>
            <Typography variant="body2" component="p" className='' sx={{ mb: 3, color: 'text.secondary' }}>
              From complex platform rollouts to seamless hiring engines—see <br/> how we’ve helped high-growth companies transform their talent technology.
            </Typography>
          </Grid>
        </Grid>
      <Marquee>
        <PartnerList partnerLogo={"https://www.atsginc.com/~/media/Images/A/ATSG/ATSGINC/logo/logo.png"}/>
        <PartnerList partnerLogo={"https://assets-us-01.kc-usercontent.com/1ca05609-4ad1-009e-bc40-2e1230b16a75/4a4a117a-a2f1-4b35-9b3b-d11766252b8d/thornton_thomasetti_logo_600x480.png"}/>
        <PartnerList partnerLogo={"https://clemensfoodgroup.com/wp-content/uploads/2022/04/Clemens-LogoRefresh.png"}/>
        <PartnerList partnerLogo={"https://cdn.phenompeople.com/CareerConnectResources/SKISJRUS/images/SJRMC_Desktop_logo-1738059849200.png"}/>
        <PartnerList partnerLogo={"https://www.atsginc.com/~/media/Images/A/ATSG/ATSGINC/logo/logo.png"}/>
        <PartnerList partnerLogo={"https://assets-us-01.kc-usercontent.com/1ca05609-4ad1-009e-bc40-2e1230b16a75/4a4a117a-a2f1-4b35-9b3b-d11766252b8d/thornton_thomasetti_logo_600x480.png"}/>
        <PartnerList partnerLogo={"https://clemensfoodgroup.com/wp-content/uploads/2022/04/Clemens-LogoRefresh.png"}/>
        <PartnerList partnerLogo={"https://cdn.phenompeople.com/CareerConnectResources/SKISJRUS/images/SJRMC_Desktop_logo-1738059849200.png"}/>
      </Marquee>
      </Container>
    </Box>
    </div>
  )
}

export default PartnerComponent