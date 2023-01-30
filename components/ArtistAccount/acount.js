import react from "react";
import { Text, View, StatusBar, TouchableOpacity, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { Ionicons, Entypo } from "@expo/vector-icons";

function Account() {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={{ flexDirection: 'row', alignItems: "center", height: 60, justifyContent: "space-between", marginHorizontal: 10 }}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="white" onPress={() => navigation.navigate('Profile')} />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: "bold" }}>Account</Text>
                <TouchableOpacity>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: '#00A9DE' }}>Save</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Image style={{ width: '100%', height: 170, opacity: 0.5 }} source={require('../../assets/Chains.png')} />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', position: 'absolute', left: 0, right: 0, top: 140 }}>
                <View style={{ height: 110, width: 110, borderRadius: 50, marginVertical: 35 }}>
                    <Image style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 100 }} source={require('../../assets/social.jpg')} />
                </View>

            </View>
            <TouchableOpacity style={{ height: 40, width: 40, backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 50, justifyContent: "center", alignItems: "center", position: 'absolute', top: 241, left: 220 }}>
                <View style={{ position: "absolute" }}>
                    <Ionicons name="md-camera-sharp" size={24} color="white" />
                </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 80, justifyContent: 'space-between', marginHorizontal: 10, alignItems: "center" }}>
                <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Name</Text>
                <Text style={{ marginLeft: 173, color: '#C7C9C9', fontSize: 16 }}>The Chainsmokers</Text>
                <TouchableOpacity>
                    <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row',marginVertical: 20, justifyContent: 'space-between', marginHorizontal: 10 }}>
                <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>User View</Text>
                <TouchableOpacity>
                    <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10 }}>
                <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16, color: '#DE7979' }}>Delete Artist Account</Text>
                <TouchableOpacity>
                    <Ionicons style={{}} name="chevron-forward" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </View >
    )
}
export default Account;