import DefaultTheme from './DefaultTheme';
import DarkTheme from './DarkTheme';

const CurrentTheme = selectedTheme => {
  const currentTheme = selectedTheme === 'default' ? DefaultTheme : DarkTheme;
  return currentTheme;
};

export default CurrentTheme;
