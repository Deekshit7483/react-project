import React from 'react';
import BasicFooter from './headersAndFooters/BasicFooter'; 


const Footer = () => {

  const footerElements = {
      brands: ['BrandName'],
      pages: ['Contact', 'About','Disclaimer'],
    };

  return(
    <BasicFooter  basicFooterElements={footerElements} />
  );
  
}

export default Footer;