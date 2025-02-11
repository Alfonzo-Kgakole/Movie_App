import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SearchScreenProps {}

const SearchScreen = (props: SearchScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default SearchScreen;

