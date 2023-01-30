import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";

function Artist() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={{ flexDirection: "row", marginTop: 0, justifyContent: "space-between", elevation: 25, height: 100, backgroundColor: '#212829', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Image style={{ height: 48, width: 48, borderRadius: 50, marginLeft: 15 }} source={require('../../assets/eminem.jpg')} />
                </TouchableOpacity>
                <View>
                    <Text style={{ color: "white", marginRight: 60, fontWeight: "bold" }}>Hi Eminem!</Text>
                    <Text style={{ color: "gray" }}>100 Songs</Text>
                    <Text style={{ color: "cyan" }}>5.1M Followers</Text>
                </View>
                <View>
                    <Text style={{ color: "white", marginRight: 45, fontWeight: "bold" }}>Revenue:</Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Listeners:</Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>Plays:</Text>
                </View>
                <View>
                    <Text style={{ color: "white", marginRight: 25 }}>$1000</Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>  1000</Text>
                    <Text style={{ color: "white", fontWeight: "bold" }}>  1000</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ height: 120, borderWidth: 1, paddingRight: 5, paddingTop: 5, marginLeft: 10, marginRight: 10, borderColor: "#828586", borderRadius: 10, marginTop: 30 }}>
                    <View style={{ flexDirection: 'row-reverse' }}>
                        <TouchableOpacity>
                            <Feather style={{ color: "white", }} name="x" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 40 }}>
                        <Text style={{ color: 'white' }}>To start using premium features on </Text>
                        <Text style={{ color: 'white' }}>Replay for artists, subscribe to a </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white' }}>plan </Text>
                            <TouchableOpacity>
                                <Text style={{ color: '#00C2FF', fontWeight: "bold" }}>Let's go</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }}>
                    <Image style={{ height: 130, width: 130 }} source={require('../../assets/disc.jpg')} />
                    <View style={{ height: 130, width: 240, backgroundColor: '#333839' }}>
                        <Text style={{ color: "white", fontWeight: "bold", marginTop: 15, marginLeft: 10 }}>Have a song  you want to share?</Text>
                        <Text style={{ color: "white", marginLeft: 10 }}>Upload your first song and it's</Text>
                        <Text style={{ color: "white", marginLeft: 10 }}>free!</Text>
                        <TouchableOpacity style={{ backgroundColor: '#0091BF', width: 120, height: 30, marginTop: 15, justifyContent: "center", alignItems: "center", marginLeft: 20, borderRadius: 5 }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Upload Music</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ color: "white", fontWeight: "bold", marginTop: 20, fontSize: 16 }}>Your Recent Releases</Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 20, marginLeft: 10 }}>
                    <Image style={{ height: 130, width: 130 }} source={require('../../assets/audio.jpg')} />
                    <View style={{ height: 130, width: 240, backgroundColor: '#333839' }}>
                        <Text style={{ color: "white", fontWeight: "bold", marginTop: 15, marginLeft: 10 }}>Distribute your music to the</Text>
                        <Text style={{ color: "white", marginLeft: 10, fontWeight: "bold" }}>world!</Text>
                        <Text style={{ color: "white", marginLeft: 10 }}>We have a special offer for you</Text>
                        <TouchableOpacity style={{ backgroundColor: '#0091BF', width: 120, height: 30, marginTop: 15, justifyContent: "center", alignItems: "center", marginLeft: 20, borderRadius: 5 }}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Upload Music</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16, marginVertical: 10 }}>Your Revenue</Text>
                </View>
                <View style={{ height: 300, borderWidth: 1, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#828586' }}>
                    <View style={{ justifyContent: "center", alignItems: "center", borderRadius: 50, height: 70, width: 70, backgroundColor: "#333839", marginBottom: 30 }} >
                        <FontAwesome style={{}} name="dollar" size={35} color="white" />
                    </View>
                    <Text style={{ fontWeight: "bold", color: 'white', marginVertical: 5 }}>Earn money from your Music.</Text>
                    <Text style={{ color: 'white' }}>You can earn money by monetizing</Text>
                    <Text style={{ color: 'white' }}>your music. Let the world hear</Text>
                    <Text style={{ color: 'white' }}>your music and earn from it!</Text>
                    <TouchableOpacity style={{ backgroundColor: '#0091BF', width: 120, height: 30, marginTop: 15, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Upgrade now</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: 10, marginVertical: 10 }}>Your Top music on Replay</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginBottom: 10 }}>
                        <Text style={{ color: 'white', opacity: 0.5 }}>Last Month</Text>
                        <Text style={{ color: 'white', marginRight: 10, opacity: 0.5 }}>Last 6 Months</Text>
                        <Text style={{ color: 'white', marginRight: 20, fontWeight: "bold" }}>Last 12 Months</Text>
                    </View>
                    <Text style={{ marginLeft: 10, color: 'white', marginBottom: 20 }}>Dec. 2021-Dec. 2022</Text>
                </View>
                <View style={{ height: 300, borderWidth: 1, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderColor: '#828586' }}>
                    <View style={{ justifyContent: "center", alignItems: "center", borderRadius: 50, height: 70, width: 70, backgroundColor: "#333839", marginBottom: 30 }} >
                        <Ionicons name="ios-stats-chart" size={30} color="white" />
                    </View>
                    <Text style={{ fontWeight: "bold", color: 'white', marginVertical: 5 }}>Earn money from your Music.</Text>
                    <Text style={{ color: 'white' }}>You can earn money by monetizing</Text>
                    <Text style={{ color: 'white' }}>your music. Let the world hear</Text>
                    <Text style={{ color: 'white' }}>your music and earn from it!</Text>
                    <TouchableOpacity style={{ backgroundColor: '#0091BF', width: 120, height: 30, marginTop: 15, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                        <Text style={{ color: "white", fontWeight: "bold" }}>Upgrade now</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

    );
}
export default Artist;