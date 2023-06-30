import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/selectors';

import Select from 'react-select';

import {
  LightThemeSelectStyles,
  DarkThemeSelectStyles,
} from './SelectInput.styled';

export const SelectInput = ({ name, options, setUserChoice, defaultValue }) => {
  useEffect(() => {
    if (defaultValue) {
      setUserChoice(prevState => ({
        ...prevState,
        [`${name}`]: defaultValue.value,
      }));
    }
  }, [name, defaultValue, setUserChoice]);

  const currentTheme = useSelector(selectCurrentTheme);

  const selectCustomStyles = currentTheme =>
    currentTheme ? LightThemeSelectStyles : DarkThemeSelectStyles;

  return (
    <>
      <Select
        name={name}
        options={options}
        styles={selectCustomStyles(currentTheme)}
        onChange={choice =>
          setUserChoice(prevState => ({
            ...prevState,
            [`${name}`]: choice.value,
          }))
        }
        defaultValue={defaultValue}
      />
    </>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  setUserChoice: PropTypes.func.isRequired,
  defaultValue: PropTypes.object,
};
