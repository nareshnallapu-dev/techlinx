import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';

const TextWithImg = () => {
  return (
    <Box sx={{ backgroundColor: '#fffaee', py: 8 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Text Column */}
          <Grid item xs={12} md={6} size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Empowering Innovation with Expert Implementation
            </Typography>
            <Typography variant="body1" component="p" className='' sx={{ mb: 3 }}>
              Transforming Talent, Revolutionizing Enterprise Operations.
            </Typography>
            <Button variant="contained" color="primary">
              Know More
            </Button>
          </Grid>

          {/* Image Column */}
          <Grid item xs={12} md={6} size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src="https://techlinx.ai/techlinx-ai/assets/images/mainservices1.avif"
              alt="Banner illustration"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TextWithImg;
