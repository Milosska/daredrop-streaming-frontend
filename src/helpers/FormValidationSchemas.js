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
  photo: mixed(),
});
