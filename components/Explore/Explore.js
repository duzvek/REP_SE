import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './Explore_styles';

function Explore() {
    return (
        <View>
            <StatusBar backgroundColor='#212829' hidden={false} barStyle="light-content" />
            <Text>Hello!</Text>
        </View>
    )
}

export default Explore;