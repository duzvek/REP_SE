import { Text, View, TouchableOpacity, ScrollView, StatusBar, Image } from "react-native"
import { Ionicons, Entypo } from "@expo/vector-icons";
import styles from "./style";

function SongDetail() {
    return (
        <View style={{ backgroundColor: '#212829', flex: 1, paddingHorizontal: 20 }}>
            <StatusBar backgroundColor={'#212829'} />
            <View style={{ flexDirection: 'row', alignItems: "center", height: 70, justifyContent: "space-between" }}>
                <TouchableOpacity>
                    <Ionicons name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View style={{ borderWidth: 1, height: 30, width: 120, justifyContent: 'center', alignItems: "center", backgroundColor: '#CDC411', borderRadius: 20 }}>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: "bold", marginLeft: 20 }}>SONG</Text>
                        <View style={{ height: 20, width: 20, marginLeft: 10, justifyContent: "center", alignItems: "center", backgroundColor: 'white', borderBottomRightRadius: 7, borderTopRightRadius: 7, borderBottomLeftRadius: 7 }}>
                            <Text style={{ color: 'black', fontSize: 16, fontWeight: "bold" }}>E</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Entypo name="dots-three-vertical" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 340, width: 340, backgroundColor: '#404B4C', elevation: 20, borderRadius: 10 }}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{ marginHorizontal: 25, marginVertical: 25}}>
                                <Text style={styles.detail}>Plays:</Text>
                                <Text style={styles.detail}>Duration:</Text>
                                <Text style={styles.detail}>Genre:</Text>
                                <Text style={styles.detail}>Song Key:</Text>
                                <Text style={styles.detail}>Bpm:</Text>
                                <Text style={styles.detail}>Year:</Text>
                                <Text style={styles.detail}>Label:</Text>
                            </View>
                            <View style={{marginHorizontal: 25, marginVertical: 25}}>
                                <Text style={styles.detailss}>1,362,272,292</Text>
                                <Text style={styles.detailss}>2:30</Text>
                                <Text style={styles.detailss}>Pop Hip-Hop</Text>
                                <Text style={styles.detailss}>Ab Major</Text>
                                <Text style={styles.detailss}>140</Text>
                                <Text style={styles.detailss}>2018</Text>
                                <Text style={styles.detailss}>Republic Records</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", marginTop: 20, marginBottom: 10, fontSize: 21, color: 'white' }}>Psycho</Text>
                    <Text style={{ marginBottom: 20, color: 'white', fontSize: 17 }}>Post Malone - beerbongs & bentleys</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={{ borderWidth: 1, backgroundColor: '#CDC411', height: 38, width: 290, justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold" }}>Listen</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ marginLeft: 15 }}>
                                <Ionicons name="heart-sharp" size={40} color="white" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <View style={{ borderBottomWidth: 1, borderColor: '#323A3B', marginVertical: 20, width: 300 }} />
                    </View>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: 'semi-bold', fontSize: 17, color: 'white' }}>Related Songs</Text>
                </View>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Something Just Like This</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>The Chainsmokers / Coldplay</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Major Distribution</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>Drake / 21 Savage</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Anti Hero</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>Taylor Swift</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <View style={{ height: 90, width: 90, marginTop: 15 }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../assets/coldplay.jpg')} />
                    </View>
                    <View style={{ marginTop: 40, marginLeft: 10 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Dancing In The Rain</Text>
                        <Text style={{ fontSize: 11, color: '#9D9D9D' }}>MUUS</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default SongDetail;