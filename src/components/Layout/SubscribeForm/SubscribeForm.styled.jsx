import styled from 'styled-components';

export const StyledForm = styled.form`
  margin-top: 40px;
`;

export const FormLabel = styled.label`
  display: inline-block;
  margin-bottom: 10px;
  font-family: 'MontserratBold';
`;

export const InputThumb = styled.div`
  position: relative;
  width: 250px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const FormInput = styled.input`
  width: 250px;
  padding: 8px 20px;

  background-color: ${({ theme }) => theme.bgColors.mainBg};
  border-radius: 15px;
  border: 2px solid #e91e63;

  font-family: 'MontserratRegular';
`;

export const FormSubmitBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 58px;
  height: 38px;
  margin: 0;
  background-color: ${({ theme }) => theme.commonColors.accentElemBg};
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;

  > svg {
    width: 25px;
    height: 25px;
    color: ${({ theme }) => theme.commonColors.contrastText};
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover,
  &:focus {
    > svg {
      color: ${({ theme }) => theme.commonColors.linksBg};
    }
  }
`;
