import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    imgStyle: {
        width: 90,
        height: 90,
        borderRadius: 5
    },
    songText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    songTitle: { 
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
    },
    songArtist: {
        color: '#9D9D9D',
        fontSize: 12,
    },
    underLine: {
        width: '70%',
        alignSelf: "center",
        height: 1,
        backgroundColor: '#323A3C',
        marginTop: 20,
    },
    goButton: {
        height: 30,
        width: 80,
        marginLeft: 300,
        justifyContent: 'center',
        alignItems: 'center', 
        marginTop: -13,
        backgroundColor: '#00A7DC',
        borderRadius: 20
    },


})
export default styles