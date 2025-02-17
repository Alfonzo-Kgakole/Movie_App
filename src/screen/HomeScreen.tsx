import React, {useEffect} from 'react';
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {COLOR, SPACING} from '../theme/theme';
import {
  upComingMovie,
  nowPlayingMovies,
  popularMovies,
  baseImagePath,
} from '../api/apiCalls';
import InputHeader from '../components/InputHeader';
import CategoryHeader from '../components/CategoryHeader';
import SubMovieCard from '../components/SubMovieCard';
import MovieCard from '../components/MovieCard';

const {width, height} = Dimensions.get('window');

const getNowPlayingMovieList = async () => {
  console.log(nowPlayingMovies);
  try {
    let response = await fetch(nowPlayingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('something went wrong in the nowPlayingMovieList function');
  }
};

const getUpComingMovieList = async () => {
  try {
    let response = await fetch(upComingMovie);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('something went wrong in the nowUpComingMovieList function');
  }
};

const getPopularMovieList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error('something went wrong in the nowPopularMovieList function');
  }
};

const HomeScreen = ({navigation}: any) => {
  //use state
  const [nowPlayingMovieList, setNowPlayingMovieList] =
    React.useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] =
    React.useState<any>(undefined);
  const [upComingMovieList, setUpComingMovieList] =
    React.useState<any>(undefined);

  //useEffect
  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMovieList();
      setNowPlayingMovieList(tempNowPlaying.results);

      let tempUpcoming = await getNowPlayingMovieList();
      setUpComingMovieList(tempUpcoming.results);

      let tempPopularMovie = await getNowPlayingMovieList();
      setPopularMoviesList(tempPopularMovie.results);
    })();
  }, []);

  // console.log(
  //   nowPlayingMovieList.length,
  //   popularMoviesList.length,
  //   upComingMovieList.length)

  const searchMovieFunction = () => {
    navigation.navigate('Search');
  };

  if (
    nowPlayingMovieList == undefined &&
    nowPlayingMovieList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upComingMovieList == undefined &&
    upComingMovieList == null
  ) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />

        <View style={styles.inputHeadContainer}>
          <InputHeader searchFunction={searchMovieFunction} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLOR.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />

        <View style={styles.inputHeadContainer}>
          <InputHeader searchFunction={searchMovieFunction} />
        </View>

        <CategoryHeader title={'Now Playing'} />
        <FlatList
          horizontal
          data={popularMoviesList}
          keyExtractor={(item: any) => item.id}
          contentContainerStyle={styles.containerGap}
          renderItem={({item, index}) => (
            <MovieCard
            shouldMarginatedAtEnd={true}
              title={item.original_title}
              cardFunction={() => {
                navigation.push('MovieDetail', {movieid: item.id})
              }}
              cardWidth={width * 0.7}
              isFirst={index == 0 ? true : false}
              isLast={index == upComingMovieList?.length - 1 ? true : false}
              imagePath={baseImagePath('w780', item.poster_path)}
              genre={item.genre_ids.slice(1,4)}
              vote_average = {item.vote_average}
              vote_count= {item.vote_count}
            />
          )}
        />


        <CategoryHeader title={'Popular'} />
        <FlatList
          horizontal
          data={popularMoviesList}
          keyExtractor={(item: any) => item.id}
          contentContainerStyle={styles.containerGap}
          renderItem={({item, index}) => (
            <SubMovieCard
            shouldMarginatedAtEnd={true}
              title={item.original_title}
              cardFunction={() => {
                navigation.push('MovieDetail', {movieid: item.id})
              }}
              cardWidth={width /3}
              isFirst={index == 0 ? true : false}
              isLast={index == upComingMovieList?.length - 1 ? true : false}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />

        <CategoryHeader title={'Upcoming'} />
        <FlatList
          horizontal
          data={upComingMovieList}
          keyExtractor={(item: any) => item.id}
          contentContainerStyle={styles.containerGap}
          renderItem={({item, index}) => (
            <SubMovieCard
            shouldMarginatedAtEnd={true}
              title={item.original_title}
              cardFunction={() => {
                navigation.push('MovieDetail', {movieid: item.id})
              }}
              cardWidth={width /3}
              isFirst={index == 0 ? true : false}
              isLast={index == upComingMovieList?.length - 1 ? true : false}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.Black,
    display: 'flex',
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  inputHeadContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap: {
    gap: SPACING.space_36,
  },
});

export default HomeScreen;
