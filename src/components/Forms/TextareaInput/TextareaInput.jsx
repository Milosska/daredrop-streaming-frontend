import PropTypes from 'prop-types';
import {
  StyledTextarea,
  ValidationThumb,
  StyledValidation,
} from './TextareaInput.styled';

export const TextareaInput = ({
  name,
  rows,
  placeholder,
  formik,
  submited,
}) => {
  return (
    <ValidationThumb>
      <StyledTextarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={formik.values[`${name}`]}
        submited={submited}
        onChange={formik.handleChange}
        error={formik.errors[`${name}`]}
      />
      {formik.touched[`${name}`] && (
        <StyledValidation submited={submited} error={formik.errors[`${name}`]}>
          {formik.errors[`${name}`]
            ? formik.errors[`${name}`]
            : `This is a correct ${name}`}
        </StyledValidation>
      )}
    </ValidationThumb>
  );
};

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
  placeholder: PropTypes.string,
  formik: PropTypes.object.isRequired,
  submited: PropTypes.string.isRequired,
};
