import React from 'react';
import ResponsiveHeader from './headersAndFooters/ResponsiveHeader';


const Header = () => {

  const headerElements = {
      brands: ['BitsGate'],
      pages: ['Home', 'About','Services'],
      settings : ['Profile', 'Account', 'Dashboard', 'Logout'],
    };
    {}
    {}
  return(
    <ResponsiveHeader responsiveHeaderElements={headerElements} />
  );

}

export default Header;