import 'react-toggle/style.css';
import { PiSunDimFill, PiMoonStarsDuotone } from 'react-icons/pi';

import { useSelector } from 'react-redux';
import { selectCurrentTheme } from 'redux/selectors';

import { useDispatch } from 'react-redux';
import { toggleTheme } from 'redux/theme/themeSlice';
import { StyledToggle } from './ThemeToggler.styled';

export const ThemeToggler = () => {
  const dispatch = useDispatch();

  const currentTheme = useSelector(selectCurrentTheme);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledToggle
      id="theme-toggler"
      defaultChecked={currentTheme}
      aria-label="No label tag"
      icons={{
        checked: <PiMoonStarsDuotone />,
        unchecked: <PiSunDimFill />,
      }}
      onChange={handleClick}
    />
  );
};
