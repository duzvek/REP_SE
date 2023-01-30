import React from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image, StatusBar, KeyboardAvoidingView, ScrollView, Keyboard, Modal, TouchableWithoutFeedback, ToastAndroid } from "react-native";
import { MaterialIcons, Feather, FontAwesome } from '@expo/vector-icons'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";





function Signin() {

    const { api } = useSelector(state => state.userReducer)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    const [isEValid, setIsEValid] = useState(false)
    const [isPValid, setIsPValid] = useState(false)
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)
    const [doesEmailExists, setDoesEmailExist] = useState(false)

    const [signup, setSignup] = useState(false)


    Keyboard.addListener('keyboardDidShow', () => {
        setIsKeyboardVisible(true)
    })

    Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardVisible(false)
    })



    const navigation = useNavigation();
    const FbPress = async () => {
        const supported = await Linking.canOpenURL('https://web.facebook.com/');
        if (supported) {
            await Linking.openURL('https://web.facebook.com/');
        } else {
            console.log("Don't know how to open URI: " + 'https://web.facebook.com/');
        }
    };
    const GogelPress = async () => {
        const supported = await Linking.canOpenURL('https://accounts.google.com/signin');
        if (supported) {
            await Linking.openURL('https://accounts.google.com/signin');
        } else {
            console.log("Don't know how to open URI: " + 'https://accounts.google.com/signin');
        }
    };



    const checkEmail = (typed) => {
        setUsername(typed)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(typed)) {
            setIsEValid(true)
        }
        else {
            setIsEValid(false)
        }
    }

    const checkPassword = (typed) => {
        setPassword(typed)
        if (typed.length < 8) {
            setIsPValid(false)
            setConfirmPass('')
        }
        else {
            setIsPValid(true)
        }
    }

    const checkConfirmPass = (typed) => {
        setConfirmPass(typed)
    }


    useEffect(() => {
        if (isEValid && isPValid && password === confirmPass) {
            setSignup(true)
        }
        else {
            setSignup(false)
        }
    })

    const validateEmail = () => {
        axios.post(api + '/validateEmail', { email: username })
            .then((response) => {
                let doesExist = response.data['result']
                if (doesExist) {
                    setDoesEmailExist(true)
                }
                else {
                    navigation.navigate('RegistrationForm', {
                        email: username,
                        password: password
                    })
                }
            })
            .catch(() => {
                ToastAndroid.showWithGravityAndOffset('Not available. Try again later!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 50, 100)
            })
    }


    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <Modal animationType='fade' transparent={true} visible={doesEmailExists}>
                <TouchableWithoutFeedback onPress={() => setDoesEmailExist(false)}>
                    <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '95%', height: 150, backgroundColor: '#212829', borderRadius: 10, elevation: 10 }}>
                            <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 20 }}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Email already existed!</Text>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <TouchableOpacity style={{ height: 37, width: 100, backgroundColor: '#0091BF', borderRadius: 5, elevation: 3, justifyContent: 'center', alignItems: 'center' }} onPress={() => setDoesEmailExist(false)}>
                                    <Text style={{ color: 'white', fontSize: 13, fontWeight: '600' }}>Okay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <ScrollView>
                {/* <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-150}> */}
                <StatusBar backgroundColor='#212829' hidden={false} />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: isKeyboardVisible ? -150 : 10, paddingHorizontal: 15 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons style={{ marginLeft: 5 }} name="chevron-back-outline" size={24} color="white" />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ marginRight: '40%', color: 'white', fontSize: 17, fontWeight: '700' }}> Sign Up </Text>
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center" }}>
                        <Image style={styles.logo} source={require('../../assets/replaylogo.png')} />
                        <Text style={styles.play}> re:Play </Text>
                    </View>
                    <View style={{ width: 400 }}>
                        <TouchableOpacity style={styles.loginfb} onPress={FbPress}>
                            <Image style={{ height: 35, width: 35, marginLeft: 15 }} source={require('../../assets/logofb.png')} />
                            <View style={{ justifyContent: "center", marginLeft: 60 }}>
                                <Text style={{ color: 'white' }}> Login using Facebook </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{ ...styles.loginfb, marginTop: 5, marginBottom: 20, backgroundColor: 'white' }} onPress={GogelPress}>
                            <Image style={{ height: 28, width: 28, marginLeft: 18 }} source={require('../../assets/gagle.png')} />
                            <View style={{ marginLeft: 70 }}>
                                <Text style={{ alignItems: "center" }}> Login using Google </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 10 }}>
                        <View style={{ width: 150, height: 1, backgroundColor: 'white', shadowColor: "#00C2FF", elevation: 2 }} />
                        <Text style={{ color: "white" }}>   OR   </Text>
                        <View style={{ width: 150, height: 1, backgroundColor: 'white', shadowColor: "#00C2FF", elevation: 2 }} />
                    </View>

                    {/* <Text style={{ marginRight: 305, color: 'white', marginBottom: 5, marginTop: 20 }}>Email</Text> */}
                    <View style={{ flexDirection: 'row', marginRight: 15, marginBottom: 0, marginTop: 40 }}>
                        <View>
                            <FontAwesome style={{ ...styles.icon, paddingLeft: 18, paddingTop: 15, backgroundColor: isEValid ? '#0091BF' : "#ACB8BC" }} name="user-o" size={20} color="white" />
                        </View>
                        <TextInput
                            style={styles.email}
                            placeholder={"Email Address"}
                            value={username}
                            onChangeText={checkEmail}
                        />
                    </View>
                    {/* <Text style={{ marginRight: 280, color: 'white', marginBottom: 5 }}>Password</Text> */}
                    <View style={{ flexDirection: 'row', marginRight: 15, marginBottom: 0, marginTop: 5 }}>
                        <View>
                            <Feather style={{ ...styles.icon, paddingLeft: 18, paddingTop: 15, backgroundColor: isPValid ? '#DE005D' : "#D6C9CE" }} name="lock" size={20} color="white" />
                        </View>
                        <TextInput
                            style={styles.pass}
                            placeholder="Password"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={checkPassword}
                        />
                    </View>
                    {isPValid && (<View>
                        {/* <Text style={{ marginRight: 200, color: 'white', marginBottom: 5 }}>Confirm your Password</Text> */}
                    </View>)}

                    {isPValid && (<View style={{ flexDirection: 'row', marginRight: 15, marginTop: 5 }}>
                        <View>
                            <Ionicons style={{ ...styles.icon, paddingLeft: 18, paddingTop: 15, backgroundColor: password == confirmPass ? '#24AF6C' : "#99A8A1" }} name="shield-checkmark-outline" size={20} color="white" />
                        </View>
                        <TextInput
                            style={styles.pass}
                            placeholder="Confirm Password"
                            secureTextEntry={true}
                            value={confirmPass}
                            onChangeText={checkConfirmPass}
                        />
                    </View>)}
                    <View style={styles.onpress}>

                        <TouchableOpacity onPress={validateEmail} disabled={!signup}>

                            <View style={styles.loginChild(signup)}>
                                <Text style={{ color: 'white' }}>{signup ? 'Continue' : 'Complete the information!'}</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: isPValid ? 60 : 120 }}>
                        <Text style={{ color: 'white' }}>Existing user?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginForm')}>
                            <Text style={{ color: '#00A9DE' }}> Log in </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* </KeyboardAvoidingView> */}
            </ScrollView>
        </View>

    );
}

export default Signin;
