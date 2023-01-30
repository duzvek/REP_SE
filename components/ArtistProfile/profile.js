import react from "react";
import { Text, View, StatusBar, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

import { Ionicons, Entypo } from "@expo/vector-icons";

function Profile() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={{ flexDirection: 'row', alignItems: "center", height: 60 }}>
                <TouchableOpacity style={{ marginLeft: 10 }}>
                    <Ionicons name="chevron-back" size={24} color="white" onPress={() => navigation.navigate('Artist')}/>
                </TouchableOpacity>
                <Text style={{ color: 'white', marginLeft: 135, fontSize: 16, fontWeight: "bold" }}>Profile</Text>
            </View>
            <Image source={require('../../assets/Chains.png')} style={{ width: '100%', height: 170, opacity: 0.5 }} />
            <View style={{ position: 'absolute', top: 65 }}>
                <View style={{ flexDirection: 'row' }}>
                        <Image style={{ height: 90, width: 90, borderRadius: 50, marginVertical: 35, marginLeft: 20 }} source={require('../../assets/social.jpg')} />
                    <View>
                        <Text style={{ color: 'white', fontSize: 16, fontSize: 18, marginTop: 50, marginLeft: 20, fontWeight: '600' }}>The Chainsmokers</Text>
                        <View style={{ flexDirection: 'row', height: 20, width: 80, backgroundColor: '#0091BF', marginLeft: 20, marginTop: 1, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: 'white', marginRight: 5, fontSize: 10, fontWeight: '600' }}>Verified</Text>
                            <Entypo style={{ borderRadius: 50, height: 15, width: 15, backgroundColor: '#006788', justifyContent: "center", alignItems: "center", marginLeft: 5 }} name="check" size={15} color="white" />
                        </View>
                        <View style={{ marginLeft: 20, marginTop: 5, flexDirection: 'row', justifyContent: "space-between", width: 200 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginRight: 5, color: 'white' }}>25m</Text>
                                <Text style={{ fontWeight: 'bold', opacity: 0.5, color: 'white', fontWeight: 'normal' }}>Followers</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontWeight: 'bold', marginRight: 5, color: 'white' }}>50m</Text>
                                <Text style={{ fontWeight: 'bold', opacity: 0.5, color: 'white', fontWeight: 'normal' }}>Listeners</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <View>

                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Manage Releases</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Playlist</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>My Playlist</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Favourites</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginBottom: 30 }}>
                    <View style={{ flexDirection: 'row', height: 55, backgroundColor: '#0091BF', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>User Account</Text>
                        <TouchableOpacity style={{ height: 30, width: 100, backgroundColor: '#333839', justifyContent: 'center', alignItems: 'center', borderRadius: 5, elevation: 3 }}>
                            <Text style={{ color: 'white', fontWeight: "bold" }}>Switch</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>My wallet</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Account</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" onPress={() => navigation.navigate('Account')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', height: 40, backgroundColor: '#333839', justifyContent: 'space-between', alignItems: "center", marginHorizontal: 10, paddingHorizontal: 7, borderRadius: 7, marginTop: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', marginLeft: 10 }}>Settings</Text>
                        <TouchableOpacity>
                            <Ionicons name="chevron-forward" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Profile;