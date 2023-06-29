import { useState } from 'react';
import { useFormik } from 'formik';
import { StreamerRegisterSchema } from 'helpers/FormValidationSchemas';

import { SelectInput } from '../SelectInput/SelectInput';
import { GeneralInput } from '../GeneralInput/GeneralInput';
import { TextareaInput } from '../TextareaInput/TextareaInput';
import { FileInput } from '../FileInput/FileInput';

import { platformOptions } from '../PlatformOptions/PlatformOptions';
import { genreOptions } from 'assets/data/SelectGenresOptionData';

import { fetchAPI } from 'helpers/backendAPI';

import {
  Container,
  FormBg,
  StyledForm,
  StyledFormTitle,
  StyledFormLayoutThumb,
  SubmitBtn,
  StyledLabel,
} from './StreamerForm.styled';

export const StreamerForm = () => {
  const [userChoice, setUserChoice] = useState({});
  const [isFile, setIsFile] = useState(null);
  const [isSubmited, setIsSubmited] = useState('false');

  const formik = useFormik({
    initialValues: {
      name: '',
      genre: '',
      platform: '',
      description: '',
      photo: '',
    },
    validationSchema: StreamerRegisterSchema,
    onSubmit: (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('genre', userChoice.genre);
      formData.append('platform', userChoice.platform);
      formData.append('description', values.description);
      formData.append('photo', isFile);

      fetchAPI('post', '/api/streamers', formData);
      resetForm();
      setIsFile(null);
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
        <StyledFormLayoutThumb>
          <div>
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
            <FileInput
              name="photo"
              submited={isSubmited}
              formik={formik}
              isFile={isFile}
              setIsFile={setIsFile}
            />
          </div>
          <div>
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
              Add streamer activity description
              <TextareaInput
                name="description"
                rows="5"
                placeholder="Enter streamer activity description"
                submited={isSubmited}
                formik={formik}
              />
            </StyledLabel>
          </div>
        </StyledFormLayoutThumb>
        <SubmitBtn type="submit" onClick={handleValidation}>
          Submit
        </SubmitBtn>
      </StyledForm>
    </Container>
  );
};
