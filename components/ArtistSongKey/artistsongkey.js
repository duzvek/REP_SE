import { FlatList, Text, View, ScrollView, StatusBar, TouchableOpacity, TextInput } from "react-native"
import { Ionicons, Octicons } from "@expo/vector-icons"
import styles from "./style";

const data = [
    { key: '1', name: 'Alternative Rock' },
    { key: '2', name: 'Ambient' },
    { key: '3', name: 'Classical' },
    { key: '4', name: 'Country' },
    { key: '5', name: 'Dance & EDM' },
    { key: '6', name: 'Dance Hall' },
    { key: '7', name: 'Deep House' },
    { key: '8', name: 'Disco' },
    { key: '9', name: 'Drum & Bass' },
    { key: '10', name: 'Dub Step' },
    { key: '11', name: 'Folk & Singer-Songwriter' },
    { key: '12', name: 'Hip-Hop & Rap' },
    { key: '13', name: 'House' },
    { key: '14', name: 'Indie' },
    { key: '15', name: 'Jazz & Blues' },
    { key: '16', name: 'Latin' },
    { key: '17', name: 'Metal' },
    { key: '18', name: 'Piano' },
    { key: '19', name: 'Pop' },
    { key: '20', name: 'R&B / Soul' },




    // ...
];

function SongKey() {
    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={{ flexDirection: "row", justifyContent: "space-between", elevation: 30, height: 70, backgroundColor: '#212829', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", height: 60 }}>
                    <TouchableOpacity style={{ marginLeft: 10 }}>
                        <Ionicons name="chevron-back" size={24} color="white" onPress={() => navigation.navigate('Artist')} />
                    </TouchableOpacity>
                    <Text style={{ color: 'white', marginLeft: 100, fontSize: 16, fontWeight: "bold" }}>Select Song Key</Text>
                </View>
            </View>
            <View style={styles.search}>
                <TextInput style={{ width: 290, }}
                    placeholder="C Minor" />
                <TouchableOpacity>
                    <Octicons style={styles.x} name="x-circle-fill" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ marginLeft:20}}>
                        <Text style={styles.genre}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}

export default SongKey;