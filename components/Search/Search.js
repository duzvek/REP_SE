import { FlatList, StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './Search_styles';
import Explore from '../Explore/Explore';
import { Dimensions } from 'react-native';
import { useState } from 'react';

function TestScreen() {
    const [selectedButtons, setSelectedButtons] = useState([]);
    const handleButtonPress = (button) => {
        if (selectedButtons.includes(button)) {
            setSelectedButtons(selectedButtons.filter((b) => b !== button));
        } else {
            setSelectedButtons([...selectedButtons, button]);
        }
    };
    const buttons = Array.from({ length: 16 }, (_, i) => `Button ${i + 1}`);
    return (
        <FlatList
            style={{backgroundColor: '#212829'}}
            data={buttons}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    activeOpacity={1}
                    key={item}
                    style={[
                        styles.button,
                        selectedButtons.includes(item) ? styles.selectedButton : null,
                    ]}
                    onPress={() => handleButtonPress(item)}
                >
                    <Text style={{ color: 'white', marginRight: '50%' }}>{item}</Text>
                </TouchableOpacity>
            )}
        />
    )
}

const Tab = createMaterialTopTabNavigator();

function Search() {
    const windowHeight = Dimensions.get('window').height;
    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#212829' />
            <View style={styles.searchHeaderStyle}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', marginRight: '40%' }}> Search </Text>
                </View>
            </View>

            <View style={styles.searchInputStyle}>
                <TextInput style={styles.searchInputLabelStyle} placeholder='Search by Music | Singer | Album' placeholderTextColor={'#999B9C'} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.filterSearchCounterStyle}>
                    <Text style={styles.filterSearchCounterLabelStyle}>Filter</Text>
                    <Text style={styles.filterSearchCounterValueStyle}>3</Text>
                </View>
                <TouchableOpacity style={{ marginTop: 24 }}>
                    <Text style={styles.clearAll}>Clear All</Text>
                </TouchableOpacity>
            </View>

            <View style={{ height: 700, backgroundColor: '#212829'}}>
                <Tab.Navigator screenOptions={{
                    justifyContent: 'center',
                    tabBarStyle: {
                        ...styles.tabStyle
                    },
                    swipeEnabled: false,
                    tabBarIndicatorStyle: {
                        ...styles.indicatorStyle
                    },


                }}>
                    <Tab.Screen name="FYP" component={TestScreen} options={{

                        tabBarLabel: ({ focused }) => (
                            <View style={styles.flexDirectionRowCenter}>
                                <Text style={{
                                    color: focused ? '#00B3EB' : 'white',
                                    ...styles.materialTabBarLabelStyle
                                }} >Genre</Text>
                                <View style={styles.notificationBadgeContainer}>
                                    <Text style={styles.notificationBadgeCount}>1</Text>
                                </View>
                            </View>
                        ),
                    }} />
                    <Tab.Screen name="MFYP" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <View style={styles.flexDirectionRowCenter}>
                                <Text style={{
                                    color: focused ? '#00B3EB' : 'white',
                                    ...styles.materialTabBarLabelStyle
                                }} >Country</Text>
                                <View style={styles.notificationBadgeContainer}>
                                    <Text style={styles.notificationBadgeCount}>1</Text>
                                </View>
                            </View>
                        ),
                    }} />
                    <Tab.Screen name="NewRelease" component={TestScreen} options={{
                        tabBarLabel: ({ focused }) => (
                            <View style={styles.flexDirectionRowCenter}>
                                <Text style={{
                                    color: focused ? '#00B3EB' : 'white',
                                    ...styles.materialTabBarLabelStyle
                                }} >Year</Text>
                                <View style={styles.notificationBadgeContainer}>
                                    <Text style={styles.notificationBadgeCount}>1</Text>
                                </View>
                            </View>
                        )
                    }} />
                </Tab.Navigator>
                <View style={styles.underLine}>

                </View>

                <View style={styles.flexDirectionRowSpaceBetween}>
                    <View style={styles.filterSearchCounterStyle}>
                        <Text style={styles.recentSearchCounterLabelStyle}>Recent Searches</Text>
                    </View>
                    <TouchableOpacity style={{ marginTop: 24 }}>
                        <Text style={styles.clearAll}>Clear All</Text>
                    </TouchableOpacity>
                </View>


                <View style={styles.recentSearchContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={require('../../assets/nega.jpg')} style={styles.imgStyle} />
                        </View>
                        <View style={styles.imgTypeContainer}>
                            <Text style={styles.imgType}>Song</Text>
                            <Text style={styles.imgTypeTitle}>Song Title</Text>
                            <Text style={styles.imgTypeSubTitle}>Artist Name</Text>
                        </View>
                    </View>


                    <View style={{ marginTop: '10%' }}>
                        <Ionicons name="close-outline" size={24} color="white" />
                    </View>
                </View>

                <View style={styles.recentSearchContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={require('../../assets/nega.jpg')} style={styles.imgStyle} />
                        </View>
                        <View style={styles.imgTypeContainer}>
                            <Text style={styles.imgType}>Song</Text>
                            <Text style={styles.imgTypeTitle}>Song Title</Text>
                            <Text style={styles.imgTypeSubTitle}>Artist Name</Text>
                        </View>
                    </View>


                    <View style={{ marginTop: '10%' }}>
                        <Ionicons name="close-outline" size={24} color="white" />
                    </View>
                </View>

                <View style={styles.recentSearchContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <Image source={require('../../assets/nega.jpg')} style={styles.imgStyle} />
                        </View>
                        <View style={styles.imgTypeContainer}>
                            <Text style={styles.imgType}>Song</Text>
                            <Text style={styles.imgTypeTitle}>Song Title</Text>
                            <Text style={styles.imgTypeSubTitle}>Artist Name</Text>
                        </View>
                    </View>


                    <View style={{ marginTop: '10%' }}>
                        <Ionicons name="close-outline" size={24} color="white" />
                    </View>
                </View>




            </View>

        </ScrollView>
    )
}

export default Search;