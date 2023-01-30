import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212829',
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    playlistHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0, marginTop: 10
    },
    playlistInputStyle: {
        marginTop: 17,
        width: '100%',
        height: 50,
        backgroundColor: '#333839',
        borderRadius: 25,
    },
    playlistInputLabelStyle: {
        marginTop: 10,
        color: '#999B9C',
        marginLeft: 20,
        paddingRight: 20,
    },
    dropdownButton: {
        backgroundColor: '#212829',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
    },
    dropdownButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 3,
    },
    allDropdownButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
    },
    privateDropdownButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
    },
    publicDropdownButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
    },
    dropdownContainer: {
        backgroundColor: '#212829',
    },
    flexDirectionRow: {
        flexDirection: "row",
    },
    modalDropdownButtonTitle: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 20,
        textAlign: "center",
    },
    modalContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalContentContainer: {
        backgroundColor: '#212829',
        height: '30%'
    },
    createPlaylistStyle: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 3,
        color: '#00C2FF',
    },
    flexDirectionRowSpaceBetween: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    itemInvisible: {
        backgroundColor: 'transparent',
    },
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 1,
        height: Dimensions.get('window').width / 2, // approximate a square
    },
    imgStyle: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    itemRenderer: {
        width: 159,
        height: 159,
        marginBottom: 50
    },
    albumTitle: {
        color: 'white',
        fontWeight: '600',
        fontSize: 13
    },
    albumPrivacy: {
        color: '#9D9D9D',
        fontWeight: '600',
        fontSize: 11
    },
    createPlaylistHeader: {
        color: '#000',
        fontWeight: '900',
        fontSize: 13,
        textAlign: "center",
    },
    createPlaylistHeaderContainer: {
        width: 175,
        height: 24,
        backgroundColor: '#F0E2EF',
        borderRadius: 10,
        justifyContent: "center",

    },
    playlistContentContainer: {
        alignItems: "center",
        marginTop: 30,
    },
    addBtn: {
        width: 65,
        height: 28,
        backgroundColor: '#212829',
        borderWidth: 1,
        borderColor: '#F0E2EF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    addTxt: {
        fontWeight: 'semi-bold',
        fontSize: 13,
        color: 'white'
    },
    songSection: {
        fontWeight: 'semi-bold',
        fontSize: 17,
        color: 'white'
    },
    underLine: {
        borderBottomWidth: 1,
        borderColor: '#323A3B',
        marginVertical: 20,
        width: 300
    },
    listenBtn: {
        borderWidth: 1,
        backgroundColor: '#F0E2EF',
        height: 38,
        width: 290,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    playlistArtist: {
        marginBottom: 20,
        color: '#9D9D9D',
        fontSize: 17
    },
    playlistTitle: {
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        fontSize: 21,
        color: 'white'
    },
    playlistCover: {
        height: '100%',
        width: '100%',
        resizeMode: 'stretch',
        borderRadius: 10
    },
    headerTitleTxt: {
        color: 'black',
        fontSize: 16,
        fontWeight: "bold"
    },
    headerTitleTxtContainer: {
        borderWidth: 1,
        height: 30,
        width: 174,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#F0E2EF',
        borderRadius: 20
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        height: 70,
        justifyContent: "space-between"
    },
    pageContainer: {
        backgroundColor: '#212829', 
        flex: 1, 
        paddingHorizontal: 20
    },
});

export default styles;