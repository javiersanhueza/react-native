import { Platform } from 'react-native';

const theme = {
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
    white: '#fafafa'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      ios: 'System',
      android: 'Roboto',
      default: 'Arial'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  },
  appBar: {
    primary: '#24292e',
    primaryText: '#fff',
    secondaryText: '#999'
  }
}

export default theme;
