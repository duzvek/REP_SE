import { Text, View, TouchableOpacity, StatusBar, Image } from "react-native"
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "./style";

function UploadCoverReplay() {

    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={styles.topbar}>
                <View style={styles.top}>
                    <TouchableOpacity>
                        <Ionicons name="chevron-back" size={25} color="white" />
                    </TouchableOpacity>
                    <Text style={{ color: "white", fontWeight: "bold", fontSize: 17 }}>Original Artist and Song</Text>
                    <TouchableOpacity>
                        <Ionicons name="save" size={25} color="#00C2FF" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", marginVertical: 30, }}>
                <TouchableOpacity style={styles.non}>
                    <Text style={{ fontWeight: 'semi-bold', fontSize: 13, color: 'white' }}>Non-re:Play</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", marginBottom: 40 }}>
                <View style={{ borderBottomWidth: 1, borderColor: '#323A3B', marginVertical: 10, width: 300 }} />
            </View>
            <View style={styles.music}>
                <Text style={{ fontSize: 17, color: 'white', marginLeft: 15 }}>Original Song </Text>
                <Ionicons name="chevron-forward" size={25} color="#B4B4B4" />
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                <Image style={{ height: 80, width: 80, marginTop: 15 }} source={require('../../assets/coldplay.jpg')} />
                <View style={{ justifyContent: 'center', alignItems: "center", marginLeft: 10 }}>
                    <Text style={{ color: 'white', marginRight: 25, fontSize: 15, marginVertical: 3 }}>Something Just Like This</Text>
                    <Text style={{ color: '#9D9D9D', fontSize: 13, marginRight: 20 }}>The Chainsmokers / Coldplay</Text>
                </View>
                <TouchableOpacity style={styles.replace}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 13 }}>Replace</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default UploadCoverReplay;