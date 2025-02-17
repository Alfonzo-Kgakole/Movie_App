import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './src/navigator/TabNavigator';
import MovieDetailScreen from './src/screen/MovieDetailScreen';
import SeatBookingScreen from './src/screen/SeatBookingScreen';
import { useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    FontAwesome.loadFont();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Tab' component={TabNavigator} options={{animation: 'default'}}/>
        <Stack.Screen name='MovieDetail' component={MovieDetailScreen} options={{animation: 'slide_from_right'}}/>
        <Stack.Screen name='SeatBooking' component={SeatBookingScreen} options={{animation: "slide_from_bottom"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};



export default App;

