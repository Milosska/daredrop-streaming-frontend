export const LightThemeSelectStyles = {
  control: (base, { data, isDisabled, isFocused, isSelected }) => ({
    ...base,
    marginTop: 8,
    background: `#FFFFFF`,
    color: `#000000`,
    outline: isFocused ? `1px solid #E91E63` : `1px solid #000000`,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? `#E91E63` : `#FFFFFF`,
    color: isFocused ? `#FFFFFF` : `#000000`,
  }),
  singleValue: (styles, state) => ({
    ...styles,
    color: `#000000`,
  }),
};

export const DarkThemeSelectStyles = {
  control: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    marginTop: 8,
    background: `#303030`,
    color: `#FFFFFF`,
    outline: `1px solid #FFFFFF`,
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? `#E91E63` : `#303030`,
    color: `#FFFFFF`,
  }),
  singleValue: (styles, state) => ({
    ...styles,
    color: `#FFFFFF`,
  }),
};
