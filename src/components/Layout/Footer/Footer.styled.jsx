import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column-reverse;
  padding: 20px 0;

  color: ${({ theme }) => theme.textColors.mainText};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
  }
`;

export const LogoThumb = styled.div`
  padding: 0 20px 0 40px;
  text-align: center;
`;

export const StyledCopyright = styled.p`
  font-size: 14px;
  line-height: 1.42;
`;

export const StyledCopyrightLink = styled.a`
  display: inline-block;
  padding: 5px 15px;
  background-color: ${({ theme }) => theme.bgColors.mainBg};
  border-radius: 37.5px;

  font-family: 'MontserratBold';
  font-size: 14px;
  color: ${({ theme }) => theme.commonColors.accentElemBg};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
    box-shadow: 0px 0px 49px -2px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.commonColors.contrastText};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const InfoThumb = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-content: start;
  padding: 20px 20px 0;
`;

export const InfoTitle = styled.h4`
  margin-bottom: 20px;

  font-family: 'MontserratBold';
  font-size: 18px;
  text-transform: uppercase;
`;

export const InfoList = styled.ul`
  :not(:last-child) {
    margin-bottom: 15px;
  }

  & a {
    color: ${({ theme }) => theme.textColors.mainText};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.commonColors.accentElemBg};
    }
  }
`;

export const CommunityThumb = styled.div`
  padding: 0 40px 20px;
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 20px 40px 0 20px;
    text-align: left;
  }
`;
