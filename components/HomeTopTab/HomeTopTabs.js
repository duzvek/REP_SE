import { Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import { useFocusEffect } from '@react-navigation/native';
import styles from './style';
import React from 'react';
// import { useEffect } from 'react';
// import { useCallback } from 'react';
// import useNavigation from '@react-navigation/native';
import ExploreTabs from '../Explore/ExploreTabs';
import HomeHome from '../HomeHome/HomeHome';
import HomePopular from '../HomePopular/HomePopular';


import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setFloating } from '../../src/redux/actions';
// const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator()
const Stack = createStackNavigator()






function TopBars({ navigation }) {

    const dispatch = useDispatch()
    const insets = useSafeAreaInsets()
    const { userImage } = useSelector(state => state.userReducer)

    // const navigation = useNavigation()

    // useFocusEffect(
    //     useCallback(() => {
    //         const onBackPress = () => {
    //             dispatch(setFloating(true))
    //             return true
    //         }
    //         navigation.addListener('beforeRemove', onBackPress);
    //         return () => navigation.removeListener('beforeRemove', onBackPress)
    //     }, [navigation])
    // );



    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#2B3435' />
            <TouchableOpacity style={styles.profileImage} onPress={() => {
                navigation.navigate('UserProfile')
                dispatch(setFloating(false))
            }}>
                {/* <View }> */}
                <Image source={{ uri: userImage }} style={styles.image} />
                {/* </View> */}
            </TouchableOpacity>
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#2B3435',
                    width: '70%',
                    height: 58,
                    marginLeft: 80,
                    elevation: 0
                },
                swipeEnabled: true,
                tabBarIndicatorStyle: {
                    backgroundColor: '#00C2FF',
                    height: 4,
                    borderRadius: 10,
                    width: 70,
                    marginLeft: 13
                },
                tabBarPressColor: 'transparent',
            }}>
                <Tab.Screen name="TopHome" component={HomeHome} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : '#909394',
                            fontSize: 15,
                            fontWeight: '600',
                            marginTop: 5
                        }} >Home</Text>
                    )
                }} />
                <Tab.Screen name="TopPopular" component={HomePopular} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : '#909394',
                            fontSize: 15,
                            fontWeight: '600',
                            marginTop: 5
                        }} >Popular</Text>
                    ),
                }} />
                <Tab.Screen name="TopExplore" component={ExploreTabs} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : '#909394',
                            fontSize: 15,
                            fontWeight: '600',
                            marginTop: 5
                        }} >Explore</Text>
                    )
                }} />
            </Tab.Navigator>
        </View>
    );
}

export default TopBars;