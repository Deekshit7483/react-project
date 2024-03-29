import React from 'react';
import Container from '@mui/material/Container';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const Services = () => {
    return(
        <React.Fragment>
            <Container maxWidth="sm" sx={{ 
                textAlign:'center', 
                paddingTop:'3em'
            }}>
                <RocketLaunchIcon />
                <h1> Page</h1>
                <p>Friendly People Coding for Good</p>
            </Container>
        </React.Fragment>
    );
}

export default Services;