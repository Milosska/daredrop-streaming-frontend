import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { ImArrowLeft, ImArrowRight } from 'react-icons/im';
import { Container, StyledBtn } from './Controllers.styled';

export const Controllers = ({ page, maxPages, setPage }) => {
  const [isBackwardsDisabled, setIsBackwardsDisabled] = useState(true);
  const [isForwardsDisabled, setIsForwardsDisabled] = useState(false);

  useEffect(() => {
    if (page === 1) {
      setIsBackwardsDisabled(true);
      setIsForwardsDisabled(false);
    } else if (page === maxPages) {
      setIsBackwardsDisabled(false);
      setIsForwardsDisabled(true);
    } else {
      setIsBackwardsDisabled(false);
      setIsForwardsDisabled(false);
    }
  }, [page, maxPages]);

  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevState => prevState - 1);
  };

  return (
    <Container>
      <StyledBtn
        type="button"
        aria-label="backwards"
        onClick={handlePreviousPage}
        disabled={isBackwardsDisabled}
      >
        <ImArrowLeft />
      </StyledBtn>
      <StyledBtn
        type="button"
        aria-label="forwards"
        onClick={handleNextPage}
        disabled={isForwardsDisabled}
      >
        <ImArrowRight />
      </StyledBtn>
    </Container>
  );
};

Controllers.propTypes = {
  page: PropTypes.number.isRequired,
  maxPages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
