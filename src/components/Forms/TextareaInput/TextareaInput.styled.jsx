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

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  margin: 8px 0 0;
  padding: 5px 10px;
  resize: none;
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

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.commonColors.linksBg};
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: ${({ theme }) => theme.commonColors.linksBg};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.commonColors.accentElemBg};
  }

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    border-radius: 8px;

    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    height: 275px;
    font-size: 18px;
  }
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
