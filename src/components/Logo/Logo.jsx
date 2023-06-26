import { NavLink } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import * as logo from 'assets/images/logo-min.png';
import * as bigLogo from 'assets/images/logo@2x-min.png';

import { StyledLogoImg, StyledLogoTitle } from './Logo.styled';

export const Logo = () => {
  const window = useWindowSize();

  return (
    <div>
      <NavLink to="/">
        <StyledLogoImg
          srcSet={`${logo.default} 1x, ${bigLogo.default} 2x`}
          src={logo.default}
          alt="Web-app logo img"
          width="95"
          height="95"
        />
      </NavLink>
      <StyledLogoTitle>
        Dare Drop {window.width >= 767 && <br />}Streaming
      </StyledLogoTitle>
    </div>
  );
};
