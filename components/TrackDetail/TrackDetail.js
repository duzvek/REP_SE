import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native"
import React, { useCallback } from "react"
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native"
import { useSelector, useDispatch } from "react-redux"
import { setNavDetails } from "../../src/redux/actions"






export default function TrackDetail() {
    const dispatch = useDispatch()
    const navigation = useNavigation()

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                dispatch(setNavDetails(false))
                return true
            }
            navigation.addListener('beforeRemove', onBackPress);
            return () => navigation.removeListener('beforeRemove', onBackPress)
        }, [navigation])
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#212829', paddingHorizontal: '3.8%' }}>
            <StatusBar backgroundColor='#212829' hidden={false} />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); dispatch(setNavDetails(false)) }}>
                    <Ionicons style={{ marginLeft: 5 }} name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={{ height: 27, width: 130, backgroundColor: '#CDC411', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                    <Text style={{ color: 'black', fontSize: 14, fontWeight: '900' }}>ALBUM</Text>
                    {/* <View style={{ backgroundColor: 'white', height: 18, width: 18, elevation: 8, position: 'absolute', right: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5, borderBottomLeftRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '700' }}>E</Text>
                    </View> */}
                </View>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <View style={{ height: 341, width: 341, backgroundColor: 'white', borderRadius: 10 }}>
                    <Image source={require('../../assets/melon.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'stretch', borderRadius: 10 }} />
                </View>
            </View>
            <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: '700' }}>Paranoid</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, color: '#9D9D9D' }}>Post Malone - </Text>
                    <Text style={{ fontSize: 18, color: '#9D9D9D', fontWeight: '700' }}>beerbongs and bentleys</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                    <View style={{ height: 40, width: 285, backgroundColor: '#CDC411', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: 'black', fontSize: 18, fontWeight: '700' }}>Listen</Text>
                    </View>
                    <AntDesign name="heart" size={33} color="white" />
                </View>
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={{ backgroundColor: '#323A3C', marginTop: 25, height: 1, width: '75%', marginBottom: 53 }}></View>
            </View>

        </View>
    )
}