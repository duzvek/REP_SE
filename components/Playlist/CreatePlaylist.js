import { FlatList, Modal, Text, View, Image, TouchableOpacity, StatusBar, TextInput, TouchableWithoutFeedback } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from './Playlist_styles';
import { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

function CreatePlaylist({ navigation }) {

    return (
        <View style={styles.pageContainer}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={styles.headerTitleTxtContainer}>
                    <Text style={styles.headerTitleTxt}>PUBLIC</Text>
                </View>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 340, width: 340, }}>
                        <Image style={styles.playlistCover}
                            source={require('../../assets/melon.jpg')} />
                    </View>
                </View>
                <View>
                    <Text style={styles.playlistTitle}>Psycho</Text>
                    <Text style={styles.playlistArtist}>Post Malone - beerbongs & bentleys</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.listenBtn}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Listen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginLeft: 15 }}>
                                <Ionicons name="heart-sharp" size={40} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <View style={styles.underLine} />
                    </View>
                </View>

                <View style={styles.flexDirectionRowSpaceBetween}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={styles.songSection}>Songs</Text>
                    </View>
                    <TouchableOpacity style={styles.addBtn}>
                        <View style={[styles.flexDirectionRow]}>
                            <Text style={styles.addTxt}>Add</Text>
                            <View style={{ marginTop: 1 }}>
                                <Ionicons name="add-outline" size={15} color="white" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>



                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Something Just Like This</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>The Chainsmokers / Coldplay</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Major Distribution</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>Drake / 21 Savage</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Anti Hero</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>Taylor Swift</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Dancing In The Rain</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>MUUS</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CreatePlaylist;