import React from 'react'
import { Container, Grid, Box } from '@mui/material';

const PartnerList = ({partnerLogo}) => {
  return (
 <Box sx={{ backgroundColor: '#fff', py: 0 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">

          {/* Image Column */}
          <Grid item xs={12} md={6} size={{ xs: 12, md: 12 }}>
            <Box
              component="img"
              src={partnerLogo}
              alt="Banner illustration"
              sx={{
                width: '180px',
                height: '80px',
                borderRadius: 2,
                aspectRatio: 2/2,
                objectFit: 'contain',
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default PartnerList