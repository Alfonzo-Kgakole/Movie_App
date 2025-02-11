import * as React from 'react';
import { StatusBar,Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { COLOR, SPACING } from '../theme/theme';
import { upComingMovie, nowPlayingMovies, popularMovies, baseImagePath } from '../api/apiCalls';
import InputHeader from '../components/InputHeader';

const { width, height } = Dimensions.get('window')


const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovieList, setNowPlayingMovieList] = React.useState<any>(undefined)
  const [popularMoviesList, setPopularMoviesList] = React.useState<any>(undefined)
  const [upComingMovieList, setUpComingMovieList] = React.useState<any>(undefined)

  if(
    nowPlayingMovieList == undefined &&
    nowPlayingMovieList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upComingMovieList == undefined &&
    upComingMovieList == null
  ) {
    return (
      <ScrollView style={styles.container} bounces={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <StatusBar hidden />

        <View style={styles.inputHeadContainer}>
          <InputHeader />
        </View>
        <View style={styles.loadingContainer}>
        <ActivityIndicator size={"large"}  color={COLOR.Orange}/>

        </View>
      </ScrollView>
    )
  }


  return (
    <ScrollView style={styles.container}>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.Black,
    display: "flex",
  },
  scrollViewContainer: {
    flex: 1
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputHeadContainer: {
    marginHorizontal:SPACING.space_36,
    marginTop: SPACING.space_28
  }

});

export default HomeScreen;

