import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './Explore_styles';
import Explore from './Explore';
import { StatusBar } from 'react-native';
import ForYou from './ForYou';

const Tab = createMaterialTopTabNavigator();

const ExploreTabs = () => {
    // const insets = useSafeAreaInsets()
    return (
        <View style={{ flex: 1, backgroundColor: '#212829', width: '100%' }}>
            <Tab.Navigator screenOptions={{
                justifyContent: 'center',
                tabBarStyle: {
                    ...styles.tabStyle,
                    elevation: 0
                },
                swipeEnabled: false,
                tabBarIndicatorStyle: {
                    ...styles.indicatorStyle
                },


            }}>
                <Tab.Screen name="FYP" component={ForYou} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : '#909394',
                            ...styles.materialTabBarLabelStyle
                        }} >For You</Text>
                    ),
                }} />
                <Tab.Screen name="MFYP" component={Explore} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : '#909394',
                            ...styles.materialTabBarLabelStyle
                        }} >More For You</Text>
                    ),
                }} />
                <Tab.Screen name="NewRelease" component={Explore} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{
                            color: focused ? '#00B3EB' : '#909394',
                            ...styles.materialTabBarLabelStyle
                        }} >New</Text>
                    )
                }} />
            </Tab.Navigator>
        </View>
    );
}

export default ExploreTabs;