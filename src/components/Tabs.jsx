import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box, Container } from '@mui/material';
import ImageBanner from './ImageBanner';
import HrImg from '../assets/hr_tech.jpg'
import TalentOperationImg from '../assets/talent_operation.jpg'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabSection() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', background:'#fff', py: 8 }}>
        <Container>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Talent Operation" {...a11yProps(0)} />
                <Tab label="HR Tech" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <ImageBanner title={"Talent Operations Optimization & Delivery"} text={"Optimize your talent operations with our deep consulting expertise to deliver a best-in-class talent experience."} btnText={<a style={{color:'white'}} href='/contact'>Contact Us</a>} widgetImg={TalentOperationImg}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <ImageBanner title={"HR Tech Implementation and Optimization Services"} text={"Phenoms TXM platform helps you get the most from your talent. But who is helping you get the most from Phenom? Augment your staff with our team of Phenom-certified talent acquisition strategy, project management and technical professionals. We can engage before you sign a contract and will stay on as long as you need us."} btnText={<a style={{color:'white'}} href='/contact'>Contact Us</a>} widgetImg={HrImg}/>
            </CustomTabPanel>
      </Container>
    </Box>
  );
}