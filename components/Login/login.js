import React, { useEffect } from "react";
import { useState } from "react";
import { Text, View, TouchableOpacity, TextInput, Image, Button, Linking, KeyboardAvoidingView, StatusBar, Animated, Keyboard, ToastAndroid } from "react-native";

import { MaterialIcons, Feather, FontAwesome, Ionicons } from '@expo/vector-icons'
import axios from 'axios';
import styles from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setUserData, setUserImage } from "../../src/redux/actions";


function LoginForm({ navigation }) {


    const dispatch = useDispatch()
    const { api } = useSelector(state => state.userReducer)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPassHidden, setIsPassHidden] = useState(true)
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false)

    const fadeAnim = new Animated.Value(0)


    const togglePassword = () => {
        setIsPassHidden(() => {
            if (isPassHidden) {
                return false
            }
            else {
                return true
            }
        })
    }

    Keyboard.addListener('keyboardDidShow', () => {
        fadeAnim.setValue(0)
        setIsKeyboardVisible(true)
    })

    Keyboard.addListener('keyboardDidHide', () => {
        setIsKeyboardVisible(false)
    })

    useEffect(() => {
        fadeAnim.setValue(0)
    }, [fadeAnim])


    const show = () => {
        fadeAnim.setValue(1)
        setTimeout(() => {
            Animated.timing(
                fadeAnim,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ).start()
        }, 2000);
    }

    const handleSubmit = () => {
        axios.post(api + '/login', {
            email: username,
            password: password
        })
            .then((response) => {
                if (response.data['message'] == 'Logged-in!') {
                    dispatch(setUserData(response.data['userData']))
                    dispatch(setUserImage(response.data['userImage']))
                    // axios.post(api + '/retrieveUserImage', {
                    //     usrimg: response.data['userData'][6]
                    // })
                    //     .then((response) => {
                    //         dispatch(setUserImage(response.data['userImage']))
                    //     })

                    navigation.navigate('BottomBars')
                }
                else {
                    // show()
                    ToastAndroid.showWithGravityAndOffset('Invalid Credentials!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 50, 100)

                }
            })
            .catch(() => {
                ToastAndroid.showWithGravityAndOffset('Not available. Try again later!', ToastAndroid.SHORT, ToastAndroid.BOTTOM, 50, 100)
            })
    }




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


    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            {/* <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={-80}> */}
            <StatusBar backgroundColor='#212829' />
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: isKeyboardVisible ? -100 : 0 }}>
                <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: "center", marginTop: -60 }}>
                    <Image style={styles.logo} source={require('../../assets/replaylogo.png')} />
                    <Text style={styles.play}> re:Play </Text>
                </View>
                <View style={{ width: 400 }}>
                    <TouchableOpacity style={styles.loginfb} onPress={FbPress}>
                        <Image style={{ height: 35, width: 35, marginLeft: 15 }} source={require('../../assets/logofb.png')} />
                        <View style={{ justifyContent: "center", marginLeft: 60 }}>
                            <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}> Login using Facebook </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{ ...styles.loginfb, marginTop: 5, marginBottom: 20, backgroundColor: 'white' }} onPress={GogelPress}>
                        <Image style={{ height: 28, width: 28, marginLeft: 18 }} source={require('../../assets/gagle.png')} />
                        <View style={{ marginLeft: 70 }}>
                            <Text style={{ alignItems: "center", fontSize: 14, fontWeight: '600' }}> Login using Google </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", marginTop: 10 }}>
                    <View style={{ width: 150, height: 1, backgroundColor: 'white', shadowColor: "#00C2FF", elevation: 2 }} />
                    <Text style={{ color: "white" }}>   OR   </Text>
                    <View style={{ width: 150, height: 1, backgroundColor: 'white', shadowColor: "#00C2FF", elevation: 2 }} />
                </View>

                {/* <Text style={{ marginRight: 305, color: 'white', marginBottom: 5, marginTop: 20, fontSize: 14, fontWeight: '600' }}>Email</Text> */}
                <View style={{ flexDirection: 'row', marginRight: 15, marginTop: 40 }}>
                    <View>
                        <FontAwesome style={{ ...styles.icon, paddingLeft: 18, paddingTop: 15 }} name="user-o" size={20} color="white" />
                    </View>
                    <TextInput
                        style={styles.email}
                        placeholder="Email Address"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                {/* <Text style={{ marginRight: 280, color: 'white', marginBottom: 5, fontSize: 14, fontWeight: '600' }}>Password</Text> */}
                <View style={{ flexDirection: 'row', marginRight: 15, marginTop: 5 }}>
                    <View>
                        <Feather style={{ ...styles.icon, paddingLeft: 16, paddingTop: 15, backgroundColor: "#DE005D" }} name="lock" size={20} color="white" />
                    </View>
                    <TextInput
                        style={styles.pass}
                        placeholder="Password"
                        secureTextEntry={isPassHidden}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <View style={{ width: 46, height: 50, backgroundColor: 'white', borderTopRightRadius: 10, borderBottomRightRadius: 10, alignItems: 'center', justifyContent: 'center', marginLeft: -1 }} >
                        <TouchableOpacity onPress={togglePassword}>
                            <Ionicons name={isPassHidden ? "eye-outline" : 'eye-off-outline'} size={27} color="#3C3C3C" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 165, color: 'white', fontSize: 13, fontWeight: '600' }}>Forgot Password?</Text>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 5, color: '#00A9DE', fontSize: 13, fontWeight: '600', textDecorationLine: 'underline' }}> Click Here </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.onpress}>
                    <TouchableOpacity onPress={handleSubmit}>
                        <View style={styles.loginChild}>
                            <Text style={{ color: 'white' }}> Log in </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                        <View style={styles.signinChild}>
                            <Text style={{ color: 'white' }}> Sign up </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            {/* </KeyboardAvoidingView> */}
            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', position: 'absolute', bottom: '2%', right: 0, left: 0 }}>
                <Animated.View style={{ backgroundColor: '#545F61', width: '95%', height: 35, borderRadius: 10, elevation: 10, justifyContent: 'center', alignItems: 'center', opacity: fadeAnim }}>
                    <Text style={{ fontSize: 12, fontWeight: '600', color: '#D2D2D2' }}>Invalid Credentials!</Text>
                </Animated.View>
            </View>
        </View>
    );
}

export default LoginForm;
