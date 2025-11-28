import { Box, Grid, Typography, Container } from '@mui/material'
import React from 'react'
//import abstractBg from '../assets/abstract_bg.jpg'

const StoryWidget = () => {
  return <>
    <Box sx={{background: `#27478d`, py:8}}>
        <Container maxWidth="md">
            <Grid container size={{xs:12, md: 12, sm: 12}}>
                <Typography variant='h4' component="h4" sx={{mb:3, fontWeight: 'bold', color: '#fff'}}>
                    Connect Techlinx
                </Typography>
                <Box sx={{background: '#fff', p:4, borderRadius: 4, boxShadow: 2}}>
                    <Typography variant='h5' component="h3" sx={{mb:3, fontWeight: 'bold', color: 'text.secondary'}}>
                        Our Story
                    </Typography>
                    <Typography variant='body1' sx={{color: 'text.secondary'}}>
                        During my eight years as the chief evangelist for Phenom, we led the shift in our industry from a focus on process efficiency to an obsession with delivering a better experience.  <br/><br/>

                        It has also become evident that transforming a corporate talent acquisition function into a talent experience operation requires a considerable amount of change management and professional services.<br/><br/>

                        For that reason, I decided to start Techlinx, a specialized consulting firm dedicated to helping corporations with their talent experience initiatives.<br/><br/>

                        Whether you need assistance optimizing your operation, additional res<br/><br/>

                        <i>__ Ranjith Repala</i>
                    </Typography>
                </Box>
            </Grid>
        </Container>
    </Box>
  </>
}

export default StoryWidget