import React, { useCallback } from "react"
import { useFocusEffect } from "@react-navigation/native"
import { Text, TouchableOpacity, View, Image, ScrollView, StatusBar } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { setFloating } from "../../src/redux/actions";


function Profile() {

    const navigation = useNavigation();
    const dispatch = useDispatch()


    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                dispatch(setFloating(true))
                return true
            }
            navigation.addListener('beforeRemove', onBackPress);
            return () => navigation.removeListener('beforeRemove', onBackPress)
        }, [navigation])
    );

    const { userImage } = useSelector(state => state.userReducer)
    const { userData } = useSelector(state => state.userReducer)

    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor='#212829' hidden={false} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: '3.8%', marginTop: 10 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); dispatch(setFloating(true)) }}>
                    <Ionicons style={{ marginLeft: 5 }} name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View>
                    <Text style={{ marginRight: '41%', color: 'white', fontSize: 17, fontWeight: '700' }}>Profile</Text>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: "center", marginTop: 15, marginBottom: 20 }}>
                        <Image style={styles.profileIcon} source={{ uri: userImage }} />
                        <Text style={{ color: "white", fontSize: 16, fontWeight: '600', marginBottom: 20, marginLeft: 10 }}>{userData[1]}</Text>
                    </View>
                    <View>
                        <Text style={{ color: '#909394', marginLeft: 110, marginTop: -50, }}> 1K Follower   3 Following</Text>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.premium}>
                                <FontAwesome style={{ marginLeft: 15, marginTop: 20 }} name="diamond" size={24} color="white" />
                                <View style={{ marginLeft: 60, marginTop: -25, }}>
                                    <Text style={{ color: 'white', fontSize: 14, }}>Join Premium </Text>
                                    <Text style={{ fontSize: 12, color: 'white', }}>Subscribing for 6 months can now enjoy</Text>
                                    <Text style={{ fontSize: 12, color: 'white' }}>50% off! </Text>
                                </View>
                                <TouchableOpacity style={styles.goButton}>
                                    <Text style={{ color: 'white', }}>Go!</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ alignItems: 'center' }}>
                            <View style={styles.profileBox}>
                                <TouchableOpacity onPress={() => navigation.navigate('History')}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                        <Text style={styles.settingsBars}>History </Text>
                                        <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.profileBox}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                        <Text style={styles.settingsBars}>My Downloads</Text>
                                        <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.profileBox}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                        <Text style={styles.settingsBars}>My Playlists </Text>
                                        <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.profileBox}>
                                <TouchableOpacity>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                        <Text style={styles.settingsBars}>Favorites </Text>
                                        <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ ...styles.artistBox, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 5 }}>

                        <Text style={{ fontWeight: 'bold', color: "white", fontSize: 14 }}> Artist Account </Text>

                        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('ArtistAccountCreation')}>
                            <Text style={{ color: 'white', justifyContent: 'center', justifyContent: 'center' }}> Create </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileBox}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                <Text style={styles.artistBars}>My Wallet </Text>
                                <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.profileBox}>
                        <TouchableOpacity onPress={() => navigation.navigate('Account')} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                <Text style={styles.artistBars}>Account </Text>
                                <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profileBox}>
                        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                                <Text style={styles.artistBars}>Settings </Text>
                                <AntDesign style={{ color: 'white', }} name="right" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    )
}
export default Profile;