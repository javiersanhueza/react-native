import React from 'react';
import { FlatList, Text, View } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';



const RepositoryList = () => {
  const { repositories, isLoading } = useRepositories();

  return (
    <View>
      {isLoading ? (
        <View>
          <Text>Loading repositories...</Text>
        </View>
      ) : (
        <FlatList
          data={repositories}
          ItemSeparatorComponent={() => <Text />}
          renderItem={({ item: repo }) => (
            <RepositoryItem repo={repo} />
          )}
        />
      )}
    </View>
  );
}

export default RepositoryList;
