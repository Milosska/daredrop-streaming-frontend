import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f18585;

  font-family: 'MontserratRegular';
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 550px;
    padding: 30px;
  }

  @media screen and (min-width: 1200px) {
    width: 700px;
  }
`;

export const FormBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: ${({ theme }) => theme.bgImages.streamerFormBg};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  filter: blur(4px);
  -webkit-filter: blur(4px);
`;

export const StyledForm = styled.form`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 10px;

  font-size: 18px;
`;

export const StyledFormTitle = styled.h3`
  font-family: 'MontserratBold';
  font-size: 18px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
  }
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-family: 'MontserratMedium';
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const SubmitBtn = styled.button`
  display: inline-block;
  padding: 8px 20px;
  margin: 0 auto;

  background-color: transparent;
  border: 3px solid ${({ theme }) => theme.commonColors.accentElemBg};
  border-radius: 37.5px;

  font-family: 'MontserratMedium', sans-serif;
  font-size: 16px;
  color: ${({ theme }) => theme.textColors.mainText};

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
    color: ${({ theme }) => theme.commonColors.contrastText};
  }

  @media screen and (min-width: 768px) {
    margin: 10px auto 0;
    padding: 8px 20px;

    font-size: 18px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 22px;
  }
`;
