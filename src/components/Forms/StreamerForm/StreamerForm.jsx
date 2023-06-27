import { useState } from 'react';
import { useFormik } from 'formik';
import { StreamerRegisterSchema } from 'helpers/FormValidationSchemas';

import { SelectInput } from '../SelectInput/SelectInput';
import { GeneralInput } from '../GeneralInput/GeneralInput';
import { platformOptions } from '../PlatformOptions/PlatformOptions';
import { genreOptions } from 'assets/data/SelectGenresOptionData';

import {
  Container,
  FormBg,
  StyledForm,
  StyledFormTitle,
  SubmitBtn,
  StyledLabel,
} from './StreamerForm.styled';

export const StreamerForm = () => {
  const [userChoice, setUserChoice] = useState({});
  const [isSubmited, setIsSubmited] = useState('false');

  const formik = useFormik({
    initialValues: {
      name: '',
      genre: '',
      platform: '',
    },
    validationSchema: StreamerRegisterSchema,
    onSubmit: (values, { resetForm }) => {
      values.genre = userChoice.genre;
      values.platform = userChoice.platform;
      console.log(values);
      resetForm();
      setIsSubmited('false');
    },
  });

  const handleValidation = e => {
    e.preventDefault();
    setIsSubmited('true');
    formik.handleSubmit();
  };

  return (
    <Container>
      <FormBg />
      <StyledForm>
        <StyledFormTitle>Join the community!</StyledFormTitle>
        <StyledLabel>
          Streamer name
          <GeneralInput
            type="text"
            name="name"
            placeholder="Enter your name"
            submited={isSubmited}
            formik={formik}
          />
        </StyledLabel>
        <StyledLabel>
          Streaming genre
          <SelectInput
            name="genre"
            options={genreOptions}
            setUserChoice={setUserChoice}
            defaultValue={genreOptions[0]}
            value={formik.values['genre']}
            error={formik.errors['genre']}
            submited={isSubmited}
            formik={formik}
          />
        </StyledLabel>
        <StyledLabel>
          Choose your platform
          <SelectInput
            name="platform"
            options={platformOptions}
            setUserChoice={setUserChoice}
            defaultValue={platformOptions[0]}
            value={formik.values['platform']}
            error={formik.errors['platform']}
            submited={isSubmited}
            formik={formik}
          />
        </StyledLabel>
        <SubmitBtn type="submit" onClick={handleValidation}>
          Submit
        </SubmitBtn>
      </StyledForm>
    </Container>
  );
};
