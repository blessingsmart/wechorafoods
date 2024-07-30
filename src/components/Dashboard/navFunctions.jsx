import { useState } from 'react';

export const NavFunctions = () => {
  const [openSideNav, setOpenSideNav] = useState(false);

  const handleMenuClick = () => {
    setOpenSideNav(!openSideNav);
  };

  return { openSideNav, handleMenuClick };
};