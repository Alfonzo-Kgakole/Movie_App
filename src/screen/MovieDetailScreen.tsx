import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {movieDetail, movieDetailCast} from '../api/apiCalls';
import {COLOR} from '../theme/theme';
import AppHeader from '../components/AppHeader';

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
          fetch(movieDetailCast(route.params.movieId)).then(res => res.json())
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
      <ScrollView style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <View>
          
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color={COLOR.Black} />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
    <StatusBar hidden />
    
   <Text>Alfonzo</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLOR.Orange,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
});

export default MovieDetailScreen;
