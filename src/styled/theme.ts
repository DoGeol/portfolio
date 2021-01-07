const size = {
  'screen-xsm': '320px',
  'screen-sm': '768px',
  'screen-md': '1024px',
  'screen-lg': '1280px',
  'screen-xlg': '1440px',
};

const theme = {
  mobile: `(max-width: ${size['screen-sm']})`,
  tablet: `(max-width: ${size['screen-lg']} - 1)`,
  desktop: `(min-width: ${size['screen-lg']})`,
};

export default theme;