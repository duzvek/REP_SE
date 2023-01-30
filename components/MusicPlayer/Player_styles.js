import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212829',
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    playerHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 1,
        marginTop: 10
    },
    headerTitle: {
        color: '#ADADAD',
        fontSize: 13,
        fontWeight: "900",
        textAlign: "center",
    },
    pageContainer: {
        backgroundColor: '#212829',
        flex: 1,
        paddingHorizontal: 20
    },
    headerTitleContainer: {
        width: 117,
        height: 24,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#48595B',
        borderRadius: 50,
    },
    textFormat: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14
    },
    toggleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    toggleBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 50,
        borderRadius: 25
    },
    toggleTxt: {
        color: 'white',
        fontWeight: 'bold'
    },
    toggleCircle: {
        width: 25,
        height: 25,
        borderRadius: 12.5,
    },
    songCover: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 10
    },
    songCoverContainer: {
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    textFormatSongTitle: {
        color: 'white',
        fontWeight: '900',
        fontSize: 19,
    },
});

export default styles;