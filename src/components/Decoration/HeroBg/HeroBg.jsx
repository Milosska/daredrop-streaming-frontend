import PropTypes from 'prop-types';
import { HeroHeaderBg } from './HeroBg.styled';

export const HeroBg = ({ image, bigimage }) => {
  return <HeroHeaderBg image={image} bigimage={bigimage} />;
};

HeroBg.propTypes = {
  image: PropTypes.string,
  bigimage: PropTypes.string,
};
