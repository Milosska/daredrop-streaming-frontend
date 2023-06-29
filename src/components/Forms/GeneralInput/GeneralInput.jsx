import {
  StyledInput,
  ValidationThumb,
  StyledValidation,
} from './GeneralInput.styled';

export const GeneralInput = ({ type, name, placeholder, formik, submited }) => {
  return (
    <ValidationThumb>
      <StyledInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
        value={formik.values[`${name}`]}
        submited={submited}
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