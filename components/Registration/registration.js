import React, { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image, Button, ScrollView, StatusBar, Touchable, ToastAndroid } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import axios from "axios";
import * as Location from 'expo-location'
import { useEffect } from "react";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import * as ImagePicker from 'expo-image-picker'
import * as DocumentPicker from 'expo-document-picker'
import { useSelector } from "react-redux";

function RegistrationForm({ route }) {

    const { api } = useSelector(state => state.userReducer)

    const [country, setCountry] = useState()
    const [city, setCity] = useState()
    const [date, setDate] = useState()
    const [initDate, setInitDate] = useState(new Date().toString())
    const [imageData, setImageData] = useState()


    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [accname, setAccname] = useState('')

    const [selectedGender, setSelectedGender] = useState('')
    const [signup, setSignup] = useState(false)



    const onDateChange = (event, selectedDate) => {

        const convert = (date) => {
            if (date < 10) {
                return '0' + date
            }
            else {
                return date
            }
        }

        const currentDate = selectedDate || initDate

        let tempDate = new Date(currentDate)
        let fDate = tempDate.getFullYear() + '-' + convert(tempDate.getMonth() + 1) + '-' + convert(tempDate.getDate())

        setDate(fDate)
        setInitDate(currentDate)
    }

    const showDatePicker = () => {
        DateTimePickerAndroid.open({
            value: new Date(initDate),
            onChange: onDateChange,
            mode: 'date',
            is24Hour: true,
            minimumDate: new Date(1950, 0, 1),
            maximumDate: new Date(2020, 12, 31)
        })
    }

    useEffect(() => {
        const getLocation = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                navigation.goBack()
            }

            const location = await Location.getCurrentPositionAsync({})
            const { latitude, longitude } = location.coords

            axios.get('https://nominatim.openstreetmap.org/reverse?format=json&lat=' + latitude + '&lon=' + longitude)
                .then((response) => {
                    setCountry(response.data.address.country)
                    setCity(response.data.address.city)
                })
        }
        setDate('Set Date')
        getLocation()
            .catch((error) => {
                console.warn(error)
            })
    }, [])



    const navigation = useNavigation();
    const [isGenderCheck, setIsGenderCheck] = useState([
        {
            male: false,
            female: false,
            nonBinary: false,
            others: false,
            preferNotToSay: false
        }
    ])


    const locationShow = () => {
        let locText = (country + ', ' + city)
        let returnText = ""
        if (locText.length > 29) {
            for (let i = 0; i < 27; i++) {
                returnText += locText[i]
            }
            returnText += '...'
            return returnText
        }
        else {
            return locText
        }
    }



    const pickImage = async () => {
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

            setImageData([{
                uri: result.assets[0].uri,
                name: filename,
                type: type
            }])
        }
    }


    useEffect(() => {
        if (fname && lname && accname && selectedGender && date !== 'Set Date') {
            setSignup(true)
        }
        else {
            setSignup(false)
        }
    })


    const insertToDb = async () => {
        let formData = new FormData();
        if (imageData) {
            formData.append('image', {
                uri: imageData[0].uri,
                name: imageData[0].name,
                type: imageData[0].type
            })
        }


        axios.post(api + '/register', {
            username: accname,
            birthdate: date,
            gender: selectedGender,
            email: route.params.email,
            password: route.params.password,
            firstname: fname,
            lastname: lname,
            country: country,
            city: city
        })
            .then((response) => {
                if (imageData) {
                    axios.post(api + '/insertUserImage', formData, {
                        headers: {
                            'Content-type': 'multipart/form-data'
                        }
                    })
                }
                ToastAndroid.showWithGravityAndOffset('Registered!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 50, 100)
                navigation.navigate('LoginForm')
            })
    }

    // const getGender = () => {
    //     let gender = ''
    //     for (const key in isGenderCheck[0]) {
    //         if (isGenderCheck[0][key]) {
    //             gender = key
    //         }
    //     }
    //     return gender
    // }





    return (

        <View style={{ backgroundColor: '#212829', flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <StatusBar backgroundColor='#212829' />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 0, marginTop: 10 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: '700', marginRight: '40%' }}> Sign Up </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <Image style={styles.logo} source={require('../../assets/replaylogo.png')} />
                        <Text style={styles.play}> re:Play </Text>
                    </View>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={{
                        color: "white", marginBottom: 10, fontWeight: '600', fontSize: 14
                    }}> First Name </Text>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Name" value={fname} onChangeText={setFname} />
                    </View>
                    <Text style={{
                        color: "white", marginBottom: 10, fontWeight: '600', fontSize: 14
                    }}> Last Name </Text>
                    <View>
                        <TextInput style={styles.input}
                            placeholder="Last Name" value={lname} onChangeText={setLname} />
                    </View>
                    <Text style={{
                        color: "white", marginBottom: 10, fontWeight: '600', fontSize: 14
                    }}> Account Name </Text>
                    <View>
                        <TextInput style={{ ...styles.input, marginBottom: 5 }}
                            placeholder="Account Name" value={accname} onChangeText={setAccname} />
                    </View>
                </View>
                <View>
                    <TouchableOpacity onPress={showDatePicker}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.bilo}>Date of Birth</Text>
                            <Text style={{ marginTop: 8, color: "#C7C9C9", marginLeft: 170 }}>{date}</Text>
                            {/* <AntDesign style={{ color: 'white', marginTop: 10, }} name="right" size={24} color="black" /> */}
                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: -5 }} >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={styles.bilo}>Location</Text>
                            <Text style={{ marginTop: 8, color: "#C7C9C9" }}>{country && locationShow()}</Text>
                        </View>
                    </View>
                </View>

                <View>
                    <Text style={{
                        color: 'white',
                        marginTop: 15,
                        fontWeight: '600',
                    }}>What's your gender?</Text>

                    <View style={{ flexDirection: "row" }}>


                        <TouchableOpacity onPress={() => {
                            setIsGenderCheck(isGenderCheck.map((item) => {
                                setSelectedGender('Male')
                                return { ...item, male: true, female: false, nonBinary: false, others: false, preferNotToSay: false }
                            }))
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white', marginTop: 8, borderRadius: 10, justifyContent: 'center' }} >
                                    <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: isGenderCheck[0]['male'] ? '#0091BF' : 'white', borderRadius: 10, marginLeft: 2 }}>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <Text style={{
                                    color: 'white',
                                    fontWeight: '200',
                                    textAlign: "center",
                                    marginTop: 8,
                                    marginLeft: 5
                                }}>Male</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            setIsGenderCheck(isGenderCheck.map((item) => {
                                setSelectedGender('Female')
                                return { ...item, male: false, female: true, nonBinary: false, others: false, preferNotToSay: false }
                            }))
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white', marginLeft: 50, marginTop: 8, borderRadius: 10, justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: isGenderCheck[0]['female'] ? '#0091BF' : 'white', borderRadius: 10, marginLeft: 2 }}>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <Text style={{
                                    color: 'white',
                                    textAlign: "center",
                                    fontWeight: '200',
                                    marginTop: 8,
                                    marginLeft: 5
                                }}>Female</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => {
                            setIsGenderCheck(isGenderCheck.map((item) => {
                                setSelectedGender('Non binary')
                                return { ...item, male: false, female: false, nonBinary: true, others: false, preferNotToSay: false }
                            }))
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white', marginLeft: 50, marginTop: 8, borderRadius: 10, justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: isGenderCheck[0]['nonBinary'] ? '#0091BF' : 'white', borderRadius: 10, marginLeft: 2 }}>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <Text style={{
                                    color: 'white',
                                    textAlign: "center",
                                    fontWeight: '200',
                                    marginTop: 8,
                                    marginLeft: 5
                                }}>Non - binary</Text>
                            </View>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => {
                            setSelectedGender('Others')
                            setIsGenderCheck(isGenderCheck.map((item) => {
                                return { ...item, male: false, female: false, nonBinary: false, others: true, preferNotToSay: false }
                            }))
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white', marginTop: 8, borderRadius: 10, justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: isGenderCheck[0]['others'] ? '#0091BF' : 'white', borderRadius: 10, marginLeft: 2 }}>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <Text style={{
                                    color: 'white',
                                    textAlign: "center",
                                    fontWeight: '200',
                                    marginTop: 8,
                                    marginLeft: 5
                                }}>Others</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => {
                            setIsGenderCheck(isGenderCheck.map((item) => {
                                setSelectedGender('Prefer not to say')
                                return { ...item, male: false, female: false, nonBinary: false, others: false, preferNotToSay: true }
                            }))
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: 'white', marginLeft: 40, marginTop: 8, borderRadius: 10, justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: isGenderCheck[0]['preferNotToSay'] ? '#0091BF' : 'white', borderRadius: 10, marginLeft: 2 }}>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                                <Text style={{
                                    color: 'white',
                                    textAlign: "center",
                                    fontWeight: '200',
                                    marginTop: 8,
                                    marginLeft: 5
                                }}>Prefer not to say</Text>
                            </View>
                        </TouchableOpacity>


                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 45 }}>
                        <View style={{ height: 350, width: 350, backgroundColor: "#262B2C", borderRadius: 15, elevation: 3 }}>
                            {imageData && (<Image source={{ uri: imageData[0].uri }} style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 15, opacity: 0.5 }} />)}
                            <View style={{ zIndex: 2, position: 'absolute', top: 150, alignItems: 'center', width: '100%' }}>
                                <TouchableOpacity onPress={pickImage}>
                                    <Text style={styles.photo}> Upload Photo </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 50 }}>
                        <TouchableOpacity onPress={insertToDb} disabled={!signup}>
                            <View style={styles.loginChild(signup)}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>{signup ? 'Sign up' : 'Complete the information!'}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View >

    );

}
export default RegistrationForm;