import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

function Settings() {

    const navigation = useNavigation();

    return (
        <View style={{ backgroundColor: '#212829', flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10,  }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons style={{ marginLeft: 5 }} name="chevron-back" size={24} color="white" />
                </TouchableOpacity>
                <View >
                    <Text style={{ marginLeft: 150, color: 'white', fontSize: 16, fontWeight: '500' }}>Settings</Text>
                </View>
            </View>
            <View >
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                        <Text style={styles.settingsBars}>Music Player </Text>
                        <AntDesign style={{ color: 'white', marginTop: 17, }} name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('Karaoke')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                        <Text style={styles.settingsBars}>Karaoke</Text>
                        <AntDesign style={{ color: 'white', marginTop: 17, }} name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                        <Text style={styles.settingsBars}>Privacy </Text>
                        <AntDesign style={{ color: 'white', marginTop: 17, }} name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('Term')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 5 }}>
                        <Text style={styles.settingsBars}>Terms and Conditions </Text>
                        <AntDesign style={{ color: 'white', marginTop: 17, }} name="right" size={24} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Settings;