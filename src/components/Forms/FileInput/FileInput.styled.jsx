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

export const StyledLabel = styled.label`
  position: relative;

  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 110px;
  margin-top: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  outline: 1px solid ${({ theme }) => theme.textColors.mainText};
  background-color: ${({ theme }) => theme.bgColors.fileInputBg};
  cursor: pointer;

  font-family: 'MontserratMedium';
  color: ${({ theme }) => theme.textColors.mainText};
  font-size: 14px;
  line-height: 1.22;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.bgColors.fileInputHoverBg};
  }

  ::file-selector-button {
    background-color: transparent;
    border: 3px solid ${({ theme }) => theme.commonColors.accentElemBg};
    border-radius: 37.5px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.commonColors.accentElemBg};
      color: ${({ theme }) => theme.commonColors.contrastText};
    }
  }

  @media screen and (min-width: 768px) {
    padding: 8px 20px;
    border-radius: 8px;

    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const ValidationThumb = styled.div`
  position: relative;
`;

export const StyledValidation = styled.p`
  position: absolute;
  bottom: -20px;

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
