import {
  StyledLabel,
  StyledInput,
  ValidationThumb,
  StyledValidation,
} from './FileInput.styled';

export const FileInput = ({ name, formik, submited, isFile, setIsFile }) => {
  const handleFile = e => {
    setIsFile(e.target.files[0]);
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
          ? `Photo ${isFile.name} is chosen`
          : 'Click here to add streamer photo'}

        <StyledInput
          type="file"
          name={name}
          value={formik.values[`${name}`]}
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
