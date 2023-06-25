import { NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import * as logo from 'assets/images/logo-min.png';
import * as bigLogo from 'assets/images/logo@2x-min.png';

import { Menu } from '../Menu/Menu';
import { MobileMenu } from '../MobileMenu/MobileMenu';
import { StyledNav, StyledImage } from './NavBar.styled';

export const NavBar = () => {
  const window = useWindowSize();

  return (
    <StyledNav>
      <NavLink to="/">
        <StyledImage
          srcSet={`${logo.default} 1x, ${bigLogo.default} 2x`}
          src={logo.default}
          alt="Web-app logo img"
          width="55"
          height="55"
        />
      </NavLink>
      {window.width <= 768 ? <MobileMenu /> : <Menu />}
    </StyledNav>
  );
};
