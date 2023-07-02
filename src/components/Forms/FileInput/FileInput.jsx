import PropTypes from 'prop-types';
import {
  StyledLabel,
  StyledInput,
  ValidationThumb,
  StyledValidation,
} from './FileInput.styled';

export const FileInput = ({ name, formik, submited, isFile, setIsFile }) => {
  const handleFile = async e => {
    setIsFile(e.target.files[0]);
    formik.setFieldValue('photo', e.target.files[0]);
    await Promise.resolve();
  };

  const handleDrop = e => {
    e.preventDefault();
    setIsFile(e.dataTransfer.files[0]);
  };

  const handleDefault = e => {
    e.preventDefault();
  };

  return (
    <ValidationThumb>
      <StyledLabel
        onDragStart={e => handleDefault(e)}
        onDragLeave={e => handleDefault(e)}
        onDragOver={e => handleDefault(e)}
        onDrop={e => handleDrop(e)}
      >
        {isFile
          ? `Streamer photo is chosen`
          : 'Click here to add streamer photo'}

        <StyledInput
          type="file"
          name={name}
          // value={formik.values[`${name}`]}
          submited={submited}
          error={formik.errors[`${name}`]}
          onChange={handleFile}
        />
      </StyledLabel>
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

FileInput.propTypes = {
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  submited: PropTypes.string.isRequired,
  isFile: PropTypes.object,
  setIsFile: PropTypes.func.isRequired,
};
