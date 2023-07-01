import PropTypes from 'prop-types';
import {
  sortFilterOptions,
  genreOptions,
  platformFilterOptions,
} from 'assets/data/index';

import { SelectInput } from 'components/Forms/SelectInput/SelectInput';
import {
  Container,
  FiltersThumb,
  StyledLabel,
  FiltersTitle,
} from './FilterMenu.styled';

export const FilterMenu = ({ setUserChoice }) => {
  return (
    <Container>
      <FiltersTitle>Select yout filters</FiltersTitle>
      <FiltersThumb>
        <StyledLabel>
          Platform
          <SelectInput
            name="platform"
            options={platformFilterOptions}
            setUserChoice={setUserChoice}
          />
        </StyledLabel>
        <StyledLabel>
          Genre
          <SelectInput
            name="genre"
            options={genreOptions}
            setUserChoice={setUserChoice}
          />
        </StyledLabel>
        <StyledLabel>
          Sort by
          <SelectInput
            name="sort"
            options={sortFilterOptions}
            setUserChoice={setUserChoice}
            defaultValue={sortFilterOptions[0]}
          />
        </StyledLabel>
      </FiltersThumb>
    </Container>
  );
};

FilterMenu.propTypes = {
  setUserChoice: PropTypes.func.isRequired,
};
