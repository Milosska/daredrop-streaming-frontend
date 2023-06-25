import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { SocialsThumb, SocialLink } from './SocialsList.styled';

export const SocialList = () => {
  return (
    <SocialsThumb>
      <li>
        <SocialLink
          href="https://github.com/Milosska"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label="github"
        >
          <FaGithub />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://www.linkedin.com/in/liudmyla-deinychenko-b98799264/"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label="linkedin"
        >
          <FaLinkedin />
        </SocialLink>
      </li>
      <li>
        <SocialLink
          href="https://t.me/DeinychenkoLG"
          target="_blank"
          rel="noreferrer noopener nofollow"
          aria-label="telegram"
        >
          <FaTelegram />
        </SocialLink>
      </li>
    </SocialsThumb>
  );
};
