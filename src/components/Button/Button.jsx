import PropTypes from 'prop-types';
import { StyledBtn } from './Button.styled';

export const Button = ({ type, text, onClick }) => {
  return (
    <StyledBtn type={type} onClick={onClick}>
      {text}
    </StyledBtn>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
