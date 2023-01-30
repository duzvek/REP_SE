import React from "react";
import { View, Text, FlatList, LogBox, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { setIsPlaying, setPlayedDetail, setSongDuration, setFloating, setCoverColors, setPlayDuration } from '../../src/redux/actions'

export default function HomeHome({ navigation }) {

    const dispatch = useDispatch()
    const { api, songAudio, isPlaying, songDuration, floating, playDuration } = useSelector(state => state.userReducer)
    // const [music, setMusic] = useState()
    // const music = new Audio.Sound()

    let useSongID = ''
    let playing = []
    const [recentSongs, setRecentSongs] = useState([])

    useEffect(() => {
        axios.get(api + '/songs')
            .then((response) => {
                setRecentSongs(response.data)
            })
        Audio.setAudioModeAsync({ staysActiveInBackground: true })
    }, [])


    const playAudio = async () => {
        if (floating) {
            await songAudio.stopAsync()
            await songAudio.unloadAsync()
        }

        try {
            // console.warn(songAudio.loadAsync)
            // dispatch(setSongAudio(new Audio.Sound()))
            await axios.post(api + '/retrieveSong', {
                songID: useSongID
            })
                .then((response) => {
                    songAudio.loadAsync({ uri: response.data['audio'] }, { shouldPlay: true })
                    dispatch(setIsPlaying(true))
                    dispatch(setPlayedDetail(playing))
                    dispatch(setCoverColors([ response.data['is_light'], response.data['dominant'], response.data['player_color'], response.data['tracker_color'] ]))
                    dispatch(setFloating(true))
                    // music.loadAsync({ uri: response.data['audio'] }, { shouldPlay: true })
                    // const status = songAudio.getStatusAsync()
                    // dispatch(setSongDuration(status.durationMillis))

                })
                .catch((error) => {
                    console.warn(error)
                })

        } catch (error) {
            console.log(error)
        }

    }


    const renderRecent = ({ item }) => {

        let adjust_title = ''
        let adjust_artists = ''

        if (item.title.length > 29) {
            for (let i = 0; i < 29; i++) {
                adjust_title += item.title[i]
            }
            adjust_title += '...'
        }


        if (item.artists.length > 35) {
            for (let i = 0; i < 35; i++) {
                adjust_artists += item.artists[i]
            }
            adjust_artists += '...'
        }

        return (
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 15 }} onPress={() => {
                useSongID = item.songID
                playing = [adjust_title ? adjust_title : item.title, adjust_artists ? adjust_artists : item.artists, item.cover, useSongID ]
                playAudio()
                // navigation.navigate('TrackDetail')
            }}>
                <View style={{ height: 70, width: 70, borderRadius: 8, elevation: 5, marginRight: 10 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 8 }} source={{ uri: item.cover }} />
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: 'white' }}>{adjust_title ? adjust_title : item.title}</Text>
                    <Text style={{ fontSize: 11, fontWeight: '400', color: '#9D9D9D' }}>{adjust_artists ? adjust_artists : item.artists}</Text>
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#212829', paddingHorizontal: '3.8%', marginBottom: floating ? 80 : 0, paddingBottom: floating ? 20 : 0 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 30 }}>
                    <Text style={{ fontSize: 19, fontWeight: '600', color: 'white' }}>Recently Played Songs</Text>
                </View>
                <View style={{ marginTop: 15 }}>
                    <FlatList
                        data={recentSongs}
                        // numColumns={2}
                        keyExtractor={(item) => item.key}
                        scrollEnabled={false}
                        renderItem={renderRecent}
                    />
                </View>
            </ScrollView>
            {/* <Text style={{ color: 'white' }}>{songDuration}</Text>
            <Button title="sige" onPress={async () => { await songAudio.setStatusAsync({ shouldPlay: false }) }} />
            <Button title="sige" onPress={async () => { await songAudio.setStatusAsync({ shouldPlay: true }) }} /> */}
        </View>
    )
}