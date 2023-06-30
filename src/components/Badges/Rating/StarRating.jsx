import { Rating, Star } from '@smastrom/react-rating';
import { Container, RatingNumber } from './StarRating.styled';

export const StaredRating = ({ rating, style }) => {
  const customStyles = {
    itemShapes: Star,
    activeFillColor: '#FFAC33',
    inactiveFillColor: '#CEC9C1',
  };

  return (
    <Container>
      <Rating
        style={{ ...style }}
        value={rating ? rating : 0}
        itemStyles={customStyles}
        readOnly
      />
      <RatingNumber>{rating ? rating : 0}</RatingNumber>
    </Container>
  );
};
