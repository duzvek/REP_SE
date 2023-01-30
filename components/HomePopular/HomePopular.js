import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, TextInput, Image, ScrollView, LogBox } from "react-native";
import styles from './style'
import { Entypo, FontAwesome5 } from '@expo/vector-icons';

export default function HomePopular() {



    const [isSelected, setIsSelected] = useState([true, false, false])
    const [topSongs, setTopSongs] = useState([
        {
            id: 'balba',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'yes',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'hmm',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'bra',
            image: 'img.jpg',
            title: 'Rockstarasdasdasdasdasdsadasdaasdasdsadasds'
        },
        {
            id: 'yeah',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'hahas',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'ssc',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'zbc',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'hahcseas',
            image: 'img.jpg',
            title: 'Rockstar'
        }
    ])

    const [topArtist, setTopArtist] = useState([
        {
            id: 'balba',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'yes',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'hmm',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'bra',
            image: 'img.jpg',
            title: 'Rockstarasdasdasdasdasdsadasdaasdasdsadasds'
        },
        {
            id: 'yeah',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'hahas',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'ssc',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'zbc',
            image: 'img.jpg',
            title: 'Rockstar'
        },
        {
            id: 'hahcseas',
            image: 'img.jpg',
            title: 'Rockstar'
        }
    ])

    const [maxLimitTopSong, setMaxLimitTopSong] = useState(6)
    const renderLimitTopSong = topSongs.slice(0, maxLimitTopSong)

    const [maxLimitTopArtist, setMaxLimitTopArtist] = useState(6)
    const renderLimitTopArtist = topArtist.slice(0, maxLimitTopArtist)


    const tsShowOpt = () => {
        if (maxLimitTopSong === 6) {
            setMaxLimitTopSong(9)
        }
        else {
            setMaxLimitTopSong(6)
        }
    }

    const taShowOpt = () => {
        if (maxLimitTopArtist === 6) {
            setMaxLimitTopArtist(9)
        }
        else {
            setMaxLimitTopArtist(6)
        }
    }

    const alltime = () => {
        setIsSelected([true, false, false])
    }

    const thisweek = () => {
        setIsSelected([false, true, false])
    }

    const thisday = () => {
        setIsSelected([false, false, true])
    }




    const topSongsRender = ({ item }) => {

        let fix_title = ''

        if (item.title.length > 24) {
            for (let i = 0; i < 24; i++) {
                fix_title += item.title[i]
            }
            fix_title += '...'
        }

        return (
            <TouchableOpacity style={{ width: 110, height: 152, marginRight: 17, marginBottom: 20 }}>
                <View style={{ width: 110, height: 110, backgroundColor: 'green', borderRadius: 8, marginBottom: 5 }}>
                    <Image source={require('../../assets/' + 'img.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 8 }} />
                </View>
                <View style={{ marginRight: 10 }}>
                    <Text style={{ fontSize: 13, fontWeight: '600', color: 'white' }}>{fix_title ? fix_title : item.title} </Text>
                </View>
            </TouchableOpacity>
        )
    }


    const topArtistRender = ({ item }) => {
        let fix_title = ''

        if (item.title.length > 13) {
            for (let i = 0; i < 13; i++) {
                fix_title += item.title[i]
            }
            fix_title += '...'
        }

        return (
            <TouchableOpacity style={{ width: 110, height: 152, marginRight: 17, marginBottom: 20 }}>
                <View style={{ width: 110, height: 110, backgroundColor: 'green', borderRadius: 100, marginBottom: 5 }}>
                    <Image source={require('../../assets/' + 'img.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 100 }} />
                </View>
                <View style={{ alignItems: 'center', marginBottom: 1 }}>
                    <Text style={{ fontSize: 12, fontWeight: '700', color: 'white' }}>{fix_title ? fix_title : item.title} </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#0091BF', width: 70, height: 16, alignItems: 'center', borderRadius: 100 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', fontSize: 10, fontWeight: '700', marginRight: 3 }}>Verified</Text>
                            <View style={{ backgroundColor: '#006788', height: 12, width: 12, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <FontAwesome5 name="check" size={9} color="white" />
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }


    return (
        <View style={{ flex: 1, backgroundColor: '#212829', paddingHorizontal: '3.8%' }}>

            {/* paddingHorizontal: 15 */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <TouchableOpacity style={styles.buttons(isSelected[0])} onPress={alltime}>
                        <Text style={{ ...styles.buttonText }}>All Time</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons(isSelected[1])} onPress={thisweek}>
                        <Text style={{ ...styles.buttonText }}>This Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttons(isSelected[2])} onPress={thisday}>
                        <Text style={{ ...styles.buttonText }}>This Day</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 23 }}>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: 'white' }}>Top Songs</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={renderLimitTopSong}
                        numColumns={3}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                        renderItem={topSongsRender}
                    />
                </View>
                <TouchableOpacity style={{ backgroundColor: '#0091BF', height: 42, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }} onPress={tsShowOpt}>
                    <View style={{ flexDirection: 'row', width: 110 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginRight: 7 }}>{maxLimitTopSong === 6 ? 'Show More' : 'Show Less'}</Text>
                        <Entypo name={maxLimitTopSong === 6 ? "chevron-down" : 'chevron-up'} size={24} color="white" />
                    </View>
                </TouchableOpacity>


                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#323A3C', marginTop: 25, height: 1, width: '75%', marginBottom: 53 }}></View>
                </View>


                <View>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: 'white' }}>Top Artists</Text>
                </View>

                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={renderLimitTopArtist}
                        numColumns={3}
                        keyExtractor={item => item.id}
                        scrollEnabled={false}
                        renderItem={topArtistRender}
                    />
                </View>

                <TouchableOpacity style={{ backgroundColor: '#0091BF', height: 42, borderRadius: 5, justifyContent: 'center', alignItems: 'center', marginBottom: 20 }} onPress={taShowOpt}>
                    <View style={{ flexDirection: 'row', width: 110 }}>
                        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600', marginRight: 7 }}>{maxLimitTopArtist === 6 ? 'Show More' : 'Show Less'}</Text>
                        <Entypo name={maxLimitTopArtist === 6 ? "chevron-down" : 'chevron-up'} size={24} color="white" />
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </View>

    )
}
