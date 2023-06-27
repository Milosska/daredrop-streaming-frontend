import { object, string } from 'yup';
import { genreOptions } from 'assets/data/SelectGenresOptionData';
import { platformOptionsData } from 'assets/data/SelectPlatformOptionData';

const allowedGenres = genreOptions.map(genre => genre.value);
const allowedPlatforms = platformOptionsData.map(platformObj =>
  platformObj.platform.toLowerCase()
);

export const StreamerRegisterSchema = object().shape({
  name: string()
    .max(16, 'Streamer name should not exceed 16 characters')
    .required('Streamer name is required'),
  genre: string().oneOf(allowedGenres, 'Invalide option'),
  platform: string().oneOf(allowedPlatforms, 'Invalide option'),
});
