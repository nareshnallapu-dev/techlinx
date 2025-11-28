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
   

    const Footer = () => {
      return (
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            backgroundColor: '#0b4a99', // Or another color from your theme
            paddingTop: '1rem',
            paddingBottom: '1rem',
          }}
        >
          <Container>
          <Grid container spacing={2} sx={{alignItems:'center', justifyContent: 'space-between'}}>
            <Grid item size={{ xs: 12, sm: 6, md: 5 }}>
              <Typography variant="body2" color="white" >
                {'Copyright © '}
                <Link style={{color: '#fff'}} href="https://yourwebsite.com/">
                  Techlinx
                </Link>{' '}
                {new Date().getFullYear()}.
                All rights are reserved.
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} >
              <Typography variant="body2" color="white" sx={{display: 'flex', gap: 1, alignItems:'center'}}>
                <SendIcon fontSize="small"/><a style={{color:'white'}} href='mailto:support@techlinx.ai'>support@techlinx.ai</a> 
              </Typography>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{display: 'flex', justifyContent:'end',
                          // Responsive styles using breakpoints
            '@media (max-width: 1023px)': { // md breakpoint
              justifyContent:'start'
            },
            }}>
            <List>
              <ListItem sx={{display:'flex', justifyContent: 'end', paddingLeft: '0',
                '@media (max-width: 1023px)': { // md breakpoint
                  justifyContent:'start'
                },
              }}>
                <ListItemIcon>
                <Link to='https://www.facebook.com/profile.php?id=61561137262959' target='_blank'><FacebookIcon fontSize="small" style={{ fill: '#fff' }}/></Link>  
                </ListItemIcon>
                <ListItemIcon>
                  <Link to=''><InstagramIcon fontSize="small" style={{ fill: '#fff' }}/></Link>
                </ListItemIcon>
                <ListItemIcon>
                  <Link to=''><LinkedInIcon fontSize="small" style={{ fill: '#fff' }}/></Link>
                </ListItemIcon>
                <ListItemIcon>
                  <Link to=''><XIcon fontSize="small" style={{ fill: '#fff' }}/></Link>
                </ListItemIcon>
                <ListItemIcon>
                  <Link to=''><YouTubeIcon fontSize="small" style={{ fill: '#fff' }}/></Link>
                </ListItemIcon>
              </ListItem>
            </List>
            </Grid>
          </Grid>
          </Container>
        </Box>
      );
    };

    export default Footer;