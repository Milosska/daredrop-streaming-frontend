import { object, string, mixed } from 'yup';
import { genreOptions } from 'assets/data/SelectGenresOptionData';
import { platformOptionsData } from 'assets/data/SelectPlatformOptionData';

const allowedGenres = genreOptions.map(genre => genre.value);
const allowedPlatforms = platformOptionsData.map(platformObj =>
  platformObj.platform.toLowerCase()
);

export const StreamerRegisterSchema = object().shape({
  name: string().required('Streamer name is required'),
  genre: string().oneOf(allowedGenres, 'Invalide option'),
  platform: string().oneOf(allowedPlatforms, 'Invalide option'),
  description: string()
    .max(1000, 'Description should not exceed 1000 characters')
    .required('Description is required'),
  photo: mixed()
    .test('fileSize', 'File too large', value => {
      if (!value) {
        return true;
      }
      const MAX_FILE_SIZE = 1024 * 1024;
      return value.size <= MAX_FILE_SIZE;
    })
    .test('fileFormat', 'Unsupported format', value => {
      if (!value) {
        return true;
      }
      const supportedFormats = ['image/jpg', 'image/jpeg', 'image/png'];
      return supportedFormats.includes(value.type);
    }),
});
