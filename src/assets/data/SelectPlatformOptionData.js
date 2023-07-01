import * as youtubeImg from 'assets/images/platforms/youtube-min.png';
import * as tiktokImg from 'assets/images/platforms/tiktok-min.png';
import * as twitchImg from 'assets/images/platforms/twitch-min.png';
import * as kickImg from 'assets/images/platforms/kick-min.png';
import * as rumbleImg from 'assets/images/platforms/rumble-min.png';

export const platformOptionsData = [
  {
    platform: 'YouTube',
    imgURL: `${youtubeImg.default}`,
    description:
      'A popular video hosting service that offers streaming, access to original programming, and offline video playback on mobile devices.',
  },
  {
    platform: 'TikTok',
    imgURL: `${tiktokImg.default}`,
    description:
      'A popular social media app known for its short, creative videos and viral trends.',
  },
  {
    platform: 'Twitch',
    imgURL: `${twitchImg.default}`,
    description:
      'A live-streaming platform primarily focused on gaming, providing a space for gamers and viewers to interact and build communities.',
  },
  {
    platform: 'Kick',
    imgURL: `${kickImg.default}`,
    description:
      'A new and ambitious streaming platform that allows users to create and watch live broadcasts in real time.',
  },
  {
    platform: 'Rumble',
    imgURL: `${rumbleImg.default}`,
    description:
      'A platform where users can share and discover user-generated videos.',
  },
];

export const platformFilterOptions = [
  {
    value: 'youtube',
    label: 'YouTube',
  },
  {
    value: 'tiktok',
    label: 'TikTok',
  },
  {
    value: 'twitch',
    label: 'Twitch',
  },
  {
    value: 'kick',
    label: 'Kick',
  },
  {
    value: 'rumble',
    label: 'Rumble',
  },
];
