import React from 'react'
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import Marquee from 'react-fast-marquee'
import PartnerList from './PartnerList'
import MyData from '../data/myData.json'
import PhenomHire from '../assets/partnerLogo/phenomHire.png'
import SmartRecruiters from '../assets/partnerLogo/SmartRecruiters.png'
import OracleLogo from '../assets/partnerLogo/oracleLogo.png'
import TaleoLogo from '../assets/partnerLogo/taleoLogo.jpg'
import WorkdayLogo from '../assets/partnerLogo/workdayLogo.png'
import UkgLogo from '../assets/partnerLogo/ukgLogo.png'
import SAPLogo from '../assets/partnerLogo/SAP_Success_factors_Logo.png'
import IcimsLogo from '../assets/partnerLogo/icimsLogo.png'

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
        <PartnerList partnerLogo={WorkdayLogo}/>
        <PartnerList partnerLogo={SAPLogo}/>
        <PartnerList partnerLogo={UkgLogo}/>
        <PartnerList partnerLogo={IcimsLogo}/>
        <PartnerList partnerLogo={PhenomHire}/>
        <PartnerList partnerLogo={SmartRecruiters}/>
        <PartnerList partnerLogo={OracleLogo}/>
        <PartnerList partnerLogo={TaleoLogo}/>
      </Marquee>
      </Container>
    </Box>
    </div>
  )
}

export default AtsComponent;