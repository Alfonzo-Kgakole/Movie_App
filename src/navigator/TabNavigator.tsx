import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/HomeScreen';
import SearchScreen from '../screen/SearchScreen';
import TicketScreen from '../screen/TicketScreen';
import UserAccountScreen from '../screen/UserAccountScreen';
import { COLOR, FONTSIZE, SPACING } from '../theme/theme';



const Tab = createBottomTabNavigator()


const TabNavigator = () => {


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: COLOR.Black,
                    borderTopWidth: 0,
                    height: SPACING.space_10 * 10
                }
            }}
        >
            <Tab.Screen name='Home' component={HomeScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLOR.Orange } : {}]}>
                        <MaterialCommunityIcons
                            name='video-outline'
                            color={"#000000"}
                            size={FONTSIZE.size_30}
                        />
                    </View>
                }
            }} />

            <Tab.Screen name='Search' component={SearchScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLOR.Orange } : {}]}>
                        <FontAwesome
                            name='search'
                            color={COLOR.White}
                            size={FONTSIZE.size_30}
                        />
                    </View>
                }
            }} />
            <Tab.Screen name='Ticket' component={TicketScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLOR.Orange } : {}]}>
                        <FontAwesome
                            name='ticket'
                            color={COLOR.White}
                            size={FONTSIZE.size_30}
                        />
                    </View>
                }
            }} />
            <Tab.Screen name='User' component={UserAccountScreen} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ focused, color, size }) => {
                    return <View style={[styles.activeTabBackground, focused ? { backgroundColor: COLOR.Orange } : {}]}>
                        <Ionicons
                            name='person'
                            color={COLOR.White}
                            size={FONTSIZE.size_30}
                        />
                    </View>
                }
            }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    activeTabBackground: {
        backgroundColor: COLOR.Black,
        padding: SPACING.space_18,
        borderRadius: SPACING.space_18 * 10,
    }
})

export default TabNavigator