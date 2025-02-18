import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {movieDetail, movieDetailCast, baseImagePath} from '../api/apiCalls';
import {COLOR, SPACING} from '../theme/theme';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';

// function
const getMovieDetail = async (movieId: number) => {
  try {
    let response = await fetch(movieDetail(movieId));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('something went wrong in get movie Details', error);
  }
};

const getMovieCastDetail = async (movieId: number) => {
  console.log(movieDetail(movieId))
  try {
    let response = await fetch(movieDetailCast(movieId));
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('something went wrong in get movie Cast Details', error);
  }
};

const MovieDetailScreen = ({navigation, route}: any) => {
  //useState
  const [movieData, setMovieData] = useState(undefined);
  const [movieCastData, setMovieCastData] = useState<any>(undefined);

  // useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movie, cast] = await Promise.all([
          fetch(movieDetail(route.params.movieId)).then(res => res.json()),
          fetch(movieDetailCast(route.params.movieId)).then(res => res.json()),
        ]);
        setMovieData(movie);
        setMovieCastData(cast);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(movieData, movieCastData);

  if (!movieData || !movieCastData) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.appHeaderContainer}>
          <AppHeader
            name="times"
            header={'movie details'}
            action={() => navigation.goBack()}
          />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLOR.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
    style={styles.container}
    bounces={false}
    showsVerticalScrollIndicator={false}>
      <StatusBar hidden />

      <View>
      <ImageBackground
          source={{
            uri: baseImagePath('w780', movieData?.backdrop_path*),
          }}
          style={styles.imageBG}>
          <LinearGradient
            colors={[COLOR.BlackRGB10, COLOR.Black]}
            style={styles.linearGradient}>
            <View style={styles.appHeaderContainer}>
              <AppHeader
                name="close"
                header={''}
                action={() => navigation.goBack()}
              />
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLOR.Black,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2
  },
  imageBG: {
    width: "100%",
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {
    height: "100%"
  },
  cardImage: {},
  clockIcon: {},
  timeContainer: {},
  runtimeText:{},
  title: {},
  genreContainer: {},
  genreBox: {},
  genreText: {},
  tagline: {},
  infoContainer: {},
  rateContainer: {},
  starIcon: {},
  descriptionText: {},
  containerGap24: {},
  buttonBG: {},
  buttonText: {}
});

export default MovieDetailScreen;
