import { FlatList, Modal, Text, View, Image, TouchableOpacity, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from './Favorite_styles.js';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function TestScreen(){
    return(
        <View>
            <Text>Hello!</Text>
        </View>
    )
}

function Favorite() {
    return (
        <View style={styles.pageContainer}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={styles.favoriteHeaderStyle}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={styles.headerTitle}> Favorite </Text>
                </View>
            </View>

            <View style={styles.favoriteInputStyle}>
                <TextInput style={styles.favoriteInputLabelStyle} placeholder='Search in Favorite' placeholderTextColor={'#999B9C'} />
            </View>


            <View style={{ flex: 1, backgroundColor: '#212829', width: '100%' }}>
                <Tab.Navigator screenOptions={{
                    justifyContent: 'center',
                    tabBarStyle: {
                        ...styles.tabStyle,
                    },
                    swipeEnabled: false,
                    tabBarIndicatorStyle: {
                        ...styles.indicatorStyle
                    },
                    tabBarPressColor: 'transparent'

                }}>
                    <Tab.Screen name="Tab1" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: focused ? '#00B3EB' : '#909394',
                                ...styles.materialTabBarLabelStyle
                            }} >All</Text>
                        ),
                    }} />
                    <Tab.Screen name="Tab2" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: focused ? '#00B3EB' : '#909394',
                                ...styles.materialTabBarLabelStyle
                            }} >Song</Text>
                        ),
                    }} />
                    <Tab.Screen name="Tab3" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: focused ? '#00B3EB' : '#909394',
                                ...styles.materialTabBarLabelStyle
                            }} >Artist</Text>
                        )
                    }} />
                    <Tab.Screen name="Tab4" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: focused ? '#00B3EB' : '#909394',
                                ...styles.materialTabBarLabelStyle
                            }} >Album</Text>
                        )
                    }} />
                    <Tab.Screen name="Tab5" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <Text style={{
                                color: focused ? '#00B3EB' : '#909394',
                                ...styles.materialTabBarLabelStyle
                            }} >Playlist</Text>
                        )
                    }} />
                </Tab.Navigator>
            </View>
        </View>
    )
}

export default Favorite;