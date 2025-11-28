import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const TextQuoteWidget = () => {
  return <>
    <Box sx={{background: '#27478d', color: 'white', py: 8}}>
        <Container maxWidth='md'>
            <Grid sx={{textAlign:'center'}}>
                <Typography variant='h5' sx={{fontWeight: 'bold', color: 'white'}} gutterBottom>
                    <q>We deeply value Techlinx as a partner in our transformation. Their insight, consistent support, and trustworthiness have been instrumental in driving our success.</q>
                </Typography>
                <Typography>
                    <i>Michael J. Squarzini, <small>CEO of Thornton Tomasetti</small>.</i>
                </Typography>
            </Grid>
        </Container>
    </Box>
  </>
}

export default TextQuoteWidget