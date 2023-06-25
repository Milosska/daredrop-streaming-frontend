import { useState } from 'react';
import { MdMenu, MdClose, MdHome, MdPeopleAlt } from 'react-icons/md';

import { ThemeToggler } from 'components/Layout/ThemeToggler/ThemeToggler';
import {
  ContentThumb,
  ToggleBtn,
  MenuContainer,
  List,
  StyledLink,
} from './MobileMenu.styled';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      {!isOpen ? (
        <ContentThumb>
          <ThemeToggler />
          <ToggleBtn
            onClick={handleToggle}
            aria-expanded="false"
            aria-controls="mobile-menu-open"
            type="button"
          >
            <MdMenu />
          </ToggleBtn>
        </ContentThumb>
      ) : (
        <MenuContainer open={isOpen}>
          <ToggleBtn
            type="button"
            onClick={handleToggle}
            aria-expanded="false"
            aria-controls="mobile-menu-close"
          >
            <MdClose />
          </ToggleBtn>
          <List>
            <li>
              <StyledLink to="/" onClick={handleToggle}>
                <MdHome /> <p>Home</p>
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/streamers" onClick={handleToggle}>
                <MdPeopleAlt /> <p>Streamers</p>
              </StyledLink>
            </li>
          </List>
        </MenuContainer>
      )}
    </>
  );
};
