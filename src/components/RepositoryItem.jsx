import React from 'react';
import { View, StyleSheet, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';

import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats';
import theme from '../theme';

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language}) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }}></Image>
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight='bold'>{ fullName }</StyledText>
        <StyledText color='secondary'>{ description }</StyledText>
        <StyledText style={styles.language}>{ language }</StyledText>
      </View>
    </View>
  )
}

const RepositoryItem = ({ repo }) => {
  return (
    <View key={repo.id} style={styles.container}>
      <RepositoryItemHeader {...repo }/>
      <RepositoryStats {...repo } />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: 'orange',
      default: 'purple'
    }),
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

RepositoryItem.propTypes = {
  repo: PropTypes.object.isRequired
}

export default RepositoryItem;