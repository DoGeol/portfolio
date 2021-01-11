const screenSize = {
  'screen-xsm': '320px',
  'screen-sm': '768px',
  'screen-md': '1024px',
  'screen-lg': '1280px',
  'screen-xlg': '1440px',
};

const viewport = {
  mobile: `(max-width: ${screenSize['screen-sm']})`,
  tablet: `(max-width: ${screenSize['screen-lg']} - 1)`,
  desktop: `(min-width: ${screenSize['screen-lg']})`,
};

const color = {
  background: '#282c34',
};

const theme = {
  viewport,
  color,
};

export default theme;