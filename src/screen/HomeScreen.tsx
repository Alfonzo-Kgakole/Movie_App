import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLOR } from '../theme/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black
  }
});

export default HomeScreen;

