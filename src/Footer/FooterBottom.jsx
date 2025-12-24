import React from 'react'
import { Link } from 'react-router';
import { Box, Container, Typography, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PhenomCertifiedLogo from '../assets/phenomCertifiedLogo.webp'
import PhenomCertifiedIMg from '../assets/certifiedPartner.png'
import LinkedInFollowButton from '../components/LinkedInFollowButton';
   

const FooterBottom = () => {
      return (
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            backgroundColor: '#fff', // Or another color from your theme
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <Container>
          <Grid container spacing={2} sx={{alignItems:'center', justifyContent: 'space-between'}}>
            <Grid item size={{ xs: 12, sm: 6, md: 5 }}>
              <LinkedInFollowButton companyId={'102691007'}/>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 7 }} sx={{display: 'flex', justifyContent:'end',
                          // Responsive styles using breakpoints
            '@media (max-width: 1023px)': { // md breakpoint
              justifyContent:'start'
            },
            }}>
            <img src={PhenomCertifiedIMg} alt="" />
            </Grid>
          </Grid>
          </Container>
        </Box>
      );
    };

    export default FooterBottom;