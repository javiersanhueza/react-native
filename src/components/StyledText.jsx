import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  colorPrimary: {
    color: theme.colors.textPrimary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlignCenter: {
    textAlign: 'center'
  }
});

export default function StyledText({
  align,
  children,
  color = '',
  fontSize = '',
  fontWeight = '',
  style,
  ...restOfProps
}) {
  const textStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.textAlignCenter,
    style
  ]
  return (
    <Text style={textStyle} {...restOfProps}>
      { children }
    </Text>
  )
}

StyledText.propTypes = {
  color: PropTypes.string,
  fontSize:  PropTypes.string,
  fontWeight:  PropTypes.string,
  align:  PropTypes.string,
}
