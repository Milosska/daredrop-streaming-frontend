import { NavLink, Link } from 'react-router-dom';
import { useWindowSize } from 'react-use';

import * as logo from 'assets/images/logo-min.png';
import * as bigLogo from 'assets/images/logo@2x-min.png';

import { SocialList } from '../SocialsList/SocialList';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import {
  StyledFooter,
  LogoThumb,
  StyledLogoImg,
  StyledLogoTitle,
  StyledCopyright,
  StyledCopyrightLink,
  InfoThumb,
  InfoTitle,
  InfoList,
  CommunityThumb,
} from './Footer.styled';

export const Footer = () => {
  const window = useWindowSize();

  return (
    <StyledFooter>
      <LogoThumb>
        <NavLink to="/">
          <StyledLogoImg
            srcSet={`${logo.default} 1x, ${bigLogo.default} 2x`}
            src={logo.default}
            alt="Web-app logo img"
            width="95"
            height="95"
          />
        </NavLink>
        <StyledLogoTitle>Video</StyledLogoTitle>
        <StyledCopyright>All rights reserved</StyledCopyright>
        <StyledCopyrightLink
          href="https://github.com/Milosska"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          {'\u0040'} Milosska
        </StyledCopyrightLink>
      </LogoThumb>
      {window.width >= 1200 && (
        <InfoThumb>
          <div>
            <InfoTitle>Company</InfoTitle>
            <InfoList>
              <li>
                <Link to="/">Lorem ipsum dolor</Link>
              </li>
              <li>
                <Link to="/">Amet consectetur</Link>
              </li>
              <li>
                <Link to="/">Consequatur aliquid</Link>
              </li>
              <li>
                <Link to="/">Molestias nostrum</Link>
              </li>
            </InfoList>
          </div>
          <div>
            <InfoTitle>Services</InfoTitle>
            <InfoList>
              <li>
                <Link to="/">Lorem ipsum dolor</Link>
              </li>
              <li>
                <Link to="/">Amet consectetur</Link>
              </li>
              <li>
                <Link to="/">Consequatur aliquid</Link>
              </li>
              <li>
                <Link to="/">Molestias nostrum</Link>
              </li>
            </InfoList>
          </div>
          <div>
            <InfoTitle>Legal</InfoTitle>
            <InfoList>
              <li>
                <Link to="/">Lorem ipsum dolor</Link>
              </li>
              <li>
                <Link to="/">Amet consectetur</Link>
              </li>
              <li>
                <Link to="/">Consequatur aliquid</Link>
              </li>
              <li>
                <Link to="/">Molestias nostrum</Link>
              </li>
            </InfoList>
          </div>
        </InfoThumb>
      )}

      <CommunityThumb>
        <SocialList />
        <SubscribeForm />
      </CommunityThumb>
    </StyledFooter>
  );
};
