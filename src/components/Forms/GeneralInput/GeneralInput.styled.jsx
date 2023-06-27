import styled from 'styled-components';

const validateColor = (error, submited, theme, color) => {
  if (submited === 'false') {
    return color;
  } else {
    return error
      ? theme.commonColors.inputErrorText
      : theme.commonColors.inputCorrectText;
  }
};

export const StyledInput = styled.input`
  width: 100%;
  margin: 8px 0 0;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid rgba(220, 227, 229, 0.6);

  background: ${({ theme }) => theme.bgColors.mainBg};
  outline: 1px solid ${({ theme }) => theme.textColors.mainText};
  outline-color: ${({ error, submited, theme }) =>
    validateColor(error, submited, theme, `${theme.textColors.mainText}`)};

  color: ${({ theme }) => theme.textColors.mainText};
  font-size: 14px;
  line-height: 1.22;

  ::placeholder {
    color: rgba(220, 227, 229, 0.6);
  }

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    border-radius: 8px;

    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const StyledValidation = styled.p`
  margin-top: 8px;
  margin-left: 14px;
  font-size: 12px;
  line-height: 1.16;
  color: ${({ error, submited, theme }) =>
    validateColor(error, submited, theme, `${theme.textColors.mainText}`)};

  @media screen and (min-width: 768px) {
    margin-left: 18px;
    font-size: 16px;
  }
`;
