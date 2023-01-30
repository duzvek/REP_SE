import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import styles from './Explore_styles';
import Explore from './Explore';
import { StatusBar } from 'react-native';

const SongData = [
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
        SongTitle: 'Song Title 1',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
        SongTitle: 'Song Title 2',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 3',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 3',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 3',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 3',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 3',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 3',
    },
    {
        SongImg: require('../../assets/nega.jpg'),
        SongId: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
        SongTitle: 'Song Title 10',
    },
];

const SongContainer = ({ item, index }) => {
    return (
        <View>
            <View style={{ padding: 10 }}>
                <Image source={item.SongImg} style={{ width: '100%', height: '50%', borderRadius: 5 }} />
                <Text style={{ color: 'white', fontWeight: '600', fontSize: 11, marginTop: 6 }}>{item.SongTitle}</Text>
            </View>
        </View>

    )
}

const ForYou = () => {
    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <View style={{ marginLeft: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'white', marginLeft: 13, marginTop: 13, fontWeight: '600' }}>Songs</Text>
                    <Ionicons style={{ marginTop: 15, marginLeft: 5, transform: [{ rotateY: '180deg' }] }}
                        name={'chevron-back-outline'}
                        size={15}
                        color={'white'}
                    />
                </View>
                <View>
                    <FlatList
                        data={SongData}
                        horizontal={true}
                        renderItem={SongContainer}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

            </View>
            

        </View>

    )
}

export default ForYou;