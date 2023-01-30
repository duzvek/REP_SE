import react from "react";
import { Text, View, StatusBar, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import styles from './styles'

function Account() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={{ flexDirection: 'row', alignItems: "center", height: 60, justifyContent: "space-between", marginHorizontal: 10 }}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="white" onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold" }}>Account</Text>
                <TouchableOpacity>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: '#00A9DE' }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{ width: '100%', height: 170, opacity: 0.5 }} source={require('../../assets/cover.jpg')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', left: 0, right: 0, top: 140 }}>
                <View style={{ height: 110, width: 110, borderRadius: 50, marginVertical: 35 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100 }} source={require('../../assets/img.jpg')} />
                </View>

            </View>
            <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 50, justifyContent: "center", alignItems: "center", position: 'absolute', top: 241, left: 220 }}>
                <View style={{ position: "absolute" }}>
                    <Ionicons name="md-camera-sharp" size={24} color="white" />
                </View>
            </TouchableOpacity>

            <View >

                <View style={{ marginHorizontal: 10, marginTop: 70 }}>

                    <View style={{ marginTop: 20, }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Name</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text style={{ color: '#C7C9C9', fontSize: 16 }}>Figma Nuts</Text>

                                    <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Date</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text style={{ color: '#C7C9C9', fontSize: 16 }}>2022-02-22</Text>

                                    <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 20, }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Gender</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                    <Text style={{ color: '#C7C9C9', fontSize: 16 }}>Male</Text>

                                    <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Email</Text>
                                <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 20, }}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>Change My Password</Text>
                                <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{marginTop: 20,}}>
                        <TouchableOpacity>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16, color: '#DE7979' }}>Delete My Account Permanently</Text>
                                <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ alignItems: 'center', position: 'absolute', bottom: 10, width: '100%' }}>
                <TouchableOpacity style={styles.goButton}>
                    <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}
export default Account;