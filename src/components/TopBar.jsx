import { Box, Button, Container, Grid, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import { Link } from 'react-router';

const TopBar = () => {
    const [isVisible, setIsVisible] = useState(true);
     const handleClose = () => {
        setIsVisible(false);
    }
  return <>
    {isVisible && <Box sx={{background: '#27478d', color: 'white', py: 1.5, px:4, position: 'sticky', top: 0, zIndex: 9999, width: '100%'}}>
        <Container maxWidth='md'>
            <Grid sx={{textAlign:'center'}}>
                <Typography variant='p' sx={{fontWeight: 'normal', color: 'white'}} gutterBottom>
                    We are now a <strong>Phenom Certified Integration Partner. </strong>Click to <strong><Link to={'https://www.phenom.com/marketplace/partners/techlinx?taxon_id=94'} target='_blank'> learn more ›</Link></strong>
                </Typography>
                <Button sx={{position: 'absolute', right:0,top:'50%', transform: 'translateY(-50%)', color: 'white'}} onClick={handleClose}><CloseIcon/></Button>
            </Grid>
        </Container>
    </Box>}
  </>
}

export default TopBar;