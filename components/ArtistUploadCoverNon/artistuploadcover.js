import { Text, View, TouchableOpacity, StatusBar, TextInput } from "react-native"
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import styles from "./style";

function UploadCover() {

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
            <Text style={{ marginLeft: 35, color: 'white' }}>Arist Name</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={{ ...styles.artistsong, marginBottom: 30 }}>
                    <TextInput
                        placeholder="The Chainsmoker" />
                </View>
            </View>
            <Text style={{ marginLeft: 35, color: 'white' }}>Song Title</Text>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={styles.artistsong}>
                    <TextInput
                        placeholder="Something Just Like This" />
                </View>
            </View>
        </View>
    )
}
export default UploadCover;