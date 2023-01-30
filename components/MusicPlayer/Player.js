import { Switch, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './Player_styles.js';
import { useState } from 'react';
import Slider from '@react-native-community/slider';

function Player() {
    const [isEnabled, setIsEnabled] = useState(false);


    return (
        <View style={styles.pageContainer}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={styles.playerHeaderStyle}>
                <TouchableOpacity onPress={() => console.log('hello')}>
                    <Ionicons name="chevron-back-outline" size={24} color="white" style={{ transform: [{ rotate: '270deg' }] }} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}> Lyrics </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10 }}>

                <Text style={styles.textFormat}>Up next:</Text>
                <Text style={[{ marginLeft: 5 }, styles.textFormat]}>Song Title</Text>
                <Text style={[{ marginLeft: 5, marginRight: 5 }, styles.textFormat]}>-</Text>
                <Text style={{ color: 'white', fontSize: 14 }}>Artist Name</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 14 }}>Auto-Play</Text>
                <Switch
                    trackColor={{ false: "#48595B", true: "#48595B" }}
                    thumbColor={isEnabled ? "#00C2FF" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={setIsEnabled}
                    value={isEnabled}
                />
            </View>

            <View style={styles.songCoverContainer}>
                <View style={{ height: 340, width: '100%' }}>
                    <Image style={styles.songCover}
                        source={require('../../assets/nega.jpg')} />
                </View>
            </View>

            <View style={{ marginTop: 10, marginLeft: 5 }}>
                <Text style={styles.textFormatSongTitle}>Song Title</Text>
                <Text style={{ color: '#C8C8C8', fontSize: 15 }}>Artist Name</Text>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, }}>
                <TouchableOpacity style={{ padding: 5, marginLeft: 5 }}>
                    <Ionicons name="heart" size={24} color="white" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Ionicons name="mic" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Ionicons name="options" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5 }}>
                        <Ionicons name="add-circle" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 5, marginRight: 5 }}>
                        <Ionicons name="menu" size={24} color="white" />
                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Slider
                    style={{ width: '100%', height: 20, }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#00C2FF"
                    maximumTrackTintColor="white"
                    thumbTintColor="#00C2FF"
                />
            </View>


        </View>
    )
}

export default Player;
