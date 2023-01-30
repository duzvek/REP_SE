import React from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

function History() {

    const navigation = useNavigation()

    return (

        <View style={{ backgroundColor: '#212829', flex: 1, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 10, marginBottom: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', marginLeft: 25 }}>History</Text>
                </View>
                <TouchableOpacity>
                    <View>
                        <Text style={{ color: '#E26868', fontSize: 12, }}>Clear All</Text>

                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{ alignItems: 'center', paddingVertical: 10, marginTop: 20 }}>
                    <Text style={{ color: '#9D9D9D', fontSize: 10, }}>10 days ago</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.underLine}>

                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10, marginTop: 20 }}>
                    <Text style={{ color: '#9D9D9D', fontSize: 10, }}>2 weeks ago</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.underLine}>

                    </View>
                </View>
                <View style={{ alignItems: 'center', paddingVertical: 10, marginTop: 20 }}>
                    <Text style={{ color: '#9D9D9D', fontSize: 10, }}>2 weeks ago</Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={require('../../assets/img.jpg')} style={styles.imgStyle} />
                            </View>
                            <View style={{ marginLeft: 10, marginTop: 25 }}>
                                <Text style={styles.songTitle}>Song Title</Text>
                                <Text style={styles.songArtist}>Artist Name</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.underLine}>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default History;