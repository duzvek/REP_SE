import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, Image, TextInput, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import * as ImagePicker from 'expo-image-picker'


export default function ArtistAccountCreation({ navigation }) {

    const [photo, setPhoto] = useState()
    const [cover, setCover] = useState()
    const [signup, setSignup] = useState(false)

    const [artistName, setArtistName] = useState('')
    



    useEffect(() => {
        if (artistName && photo) {
            setSignup(true)
        }
        else{
            setSignup(false)
        }
    })




    const pickPhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
            base64: true
        })

        if (!result.canceled) {

            let filename = (result.assets[0].uri).split('/').pop()
            let match = /\.(\w+)$/.exec(filename)
            let type = match ? 'image/' + match[1] : 'image'

            setPhoto([{
                uri: result.assets[0].uri,
                name: filename,
                type: type
            }])
        }
    }


    const pickCover = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 2],
            quality: 1,
            base64: true
        })

        if (!result.canceled) {

            let filename = (result.assets[0].uri).split('/').pop()
            let match = /\.(\w+)$/.exec(filename)
            let type = match ? 'image/' + match[1] : 'image'

            setCover([{
                uri: result.assets[0].uri,
                name: filename,
                type: type
            }])
        }
    }


    const insertToDb = async () => {
        return
        // let formData = new FormData();
        // if (photo) {
        //     formData.append('image', {
        //         uri: photo[0].uri,
        //         name: photo[0].name,
        //         type: photo[0].type
        //     })
        // }


        // axios.post(api + '/register', {
        //     username: accname,
        //     birthdate: date,
        //     gender: selectedGender,
        //     email: route.params.email,
        //     password: route.params.password,
        //     firstname: fname,
        //     lastname: lname,
        //     country: country,
        //     city: city
        // })
        //     .then((response) => {
        //         if (photo) {
        //             axios.post(api + '/insertUserImage', formData, {
        //                 headers: {
        //                     'Content-type': 'multipart/form-data'
        //                 }
        //             })
        //         }
        //         ToastAndroid.showWithGravityAndOffset('Invalid Credentials!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 50, 100)
        //         navigation.navigate('LoginForm')
        //     })
    }




    return (
        <View style={{ flex: 1, paddingHorizontal: '3.8%', backgroundColor: '#212829' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 0, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', marginRight: '33%' }}> Artist Sign Up </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                    <Image style={{ marginTop: 50, width: 60, height: 60, }} source={require('../../assets/replaylogo.png')} />
                    <Text style={{ fontSize: 40, color: "white", marginTop: 50, textAlign: "center" }}> re:Play </Text>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={{
                        color: "white", marginBottom: 10, fontWeight: '600', fontSize: 14
                    }}> Artist Name </Text>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Artist Name" value={artistName} onChangeText={setArtistName} />
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ height: 350, width: 350, backgroundColor: "#262B2C", borderRadius: 15, elevation: 3 }}>
                        {photo && (<Image source={{ uri: photo[0].uri }} style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 15, opacity: 0.5 }} />)}
                        <View style={{ zIndex: 2, position: 'absolute', top: 150, alignItems: 'center', width: '100%' }}>
                            <TouchableOpacity onPress={pickPhoto}>
                                <Text style={styles.photo}> Upload Photo </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <View style={{ height: 175, width: 350, backgroundColor: "#262B2C", borderRadius: 15, elevation: 3 }}>
                        {cover && (<Image source={{ uri: cover[0].uri }} style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 15, opacity: 0.5 }} />)}
                        <View style={{ zIndex: 2, position: 'absolute', top: 65, alignItems: 'center', width: '100%' }}>
                            <TouchableOpacity onPress={pickCover}>
                                <Text style={styles.photo}> Upload Cover </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
                    <TouchableOpacity onPress={insertToDb} disabled={!signup}>
                        <View style={styles.loginChild(signup)}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>{signup ? 'Create' : 'Complete the information!'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}