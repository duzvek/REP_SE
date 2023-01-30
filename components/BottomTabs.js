//BottomBars.js
import React, { useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopBars from './HomeTopTab/HomeTopTabs';
import Search from './Search/Search';
import Playlist from './Playlist/Playlist';
import Favorite from './Favorite/Favorite';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import TrackDetail from './TrackDetail/TrackDetail';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

// function HomeScreens2() {
//     return (
//         <View style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#212829',
//         }}>
//             <StatusBar backgroundColor="#212829" barStyle="light-content" />
//             <Text style={{ color: 'white' }}>Home!</Text>
//         </View>
//     );
// }

// '#2B3435'

// const HomeBar = () => {
//     return (
//         <>
//             <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='TopBars'>
//                 <Stack.Screen name='TopBars' component={TopBars}/>
//                 <Stack.Screen name='TrackDetail' component={TrackDetail} />
//             </Stack.Navigator>
//         </>
//     )
// }

// const SearchBar = () => {
//     return (
//         <>
//             <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='TopBars'>
//                 <Stack.Screen name='Search' component={Search}/>
//                 <Stack.Screen name='TrackDetail' component={TrackDetail} />
//             </Stack.Navigator>
//         </>
//     )
// }



function BottomBars() {

    

    return (
        <Tab.Navigator
            screenOptions={() => ({
                headerShown: false,
                tabBarLabelStyle: {
                    color: 'white'
                },
                tabBarStyle: {
                    backgroundColor: '#212829',
                    zIndex: 3,
                    borderTopWidth: 1,
                    borderTopColor: '#3E4545',
                    height: 58,
                    elevation: 0
                },
            })}>
            <Tab.Screen
                name="Home"
                component={TopBars}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons style={{ paddingTop: 11 }}
                            name={focused ? 'home-outline' : 'home-outline'}
                            size={20}
                            color={focused ? '#00B3EB' : 'white'}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : 'white',
                            fontSize: 11,
                            paddingBottom: 9,
                        }}>Home</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons style={{ paddingTop: 11 }}
                            name={focused ? 'search-outline' : 'search-outline'}
                            size={20}
                            color={focused ? '#00B3EB' : 'white'}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : 'white',
                            fontSize: 11,
                            paddingBottom: 9,
                        }}>Search</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Playlist"
                component={Playlist}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons style={{ paddingTop: 11 }}
                            name={focused ? 'albums-outline' : 'albums-outline'}
                            size={20}
                            color={focused ? '#00B3EB' : 'white'}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : 'white',
                            fontSize: 11,
                            paddingBottom: 9,
                        }}>Playlist</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Favorites"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons style={{ paddingTop: 11 }}
                            name={focused ? 'heart-outline' : 'heart-outline'}
                            size={20}
                            color={focused ? '#00B3EB' : 'white'}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : 'white',
                            fontSize: 11,
                            paddingBottom: 9,
                        }}>Favorites</Text>
                    ),
                }}
            />

            <Tab.Screen
                name="Karaoke"
                component={Favorite}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons style={{ paddingTop: 11 }}
                            name={focused ? 'mic-outline' : 'mic-outline'}
                            size={20}
                            color={focused ? '#00B3EB' : 'white'}
                        />
                    ),
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : 'white',
                            fontSize: 11,
                            paddingBottom: 9,
                        }}>Karaoke</Text>
                    ),
                }}
            />

        </Tab.Navigator>
    );
}
export default BottomBars;