import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});

export default HomeScreen;

