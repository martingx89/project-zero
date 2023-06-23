import { colors } from '../constants/colors';

export const colorSwitcher = (level) => {
  switch (level) {
    case 1:
      return colors.noob;
    case 2:
      return colors.traveler;
    case 3:
      return colors.moderate;
    case 4:
      return colors.advanced;
    case 5:
      return colors.crazy;

    default:
      return colors.none;
  }
};
