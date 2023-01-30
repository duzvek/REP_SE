import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212829',
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: "center",
        height: 70,
        justifyContent: "space-between"
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
    pageContainer: {
        backgroundColor: '#212829',
        flex: 1,
        paddingHorizontal: 20
    },
    tabStyle: {
        backgroundColor: '#212829',
        height: 58,
        marginTop: 10,
    },
    indicatorStyle: {
        backgroundColor: '#00C2FF',
        height: 4,
        borderRadius: 10,
        width: '20%',
    },
    materialTabBarLabelStyle: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 5
    },
    favoriteInputStyle: {
        marginTop: 17,
        width: '100%',
        height: 50,
        backgroundColor: '#333839',
        borderRadius: 25,
    },
    favoriteInputLabelStyle: {
        marginTop: 10,
        color: '#999B9C',
        marginLeft: 20,
        paddingRight: 20,
    },
    favoriteHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0, 
        marginTop: 10
    },
    headerTitle: {
        color: 'white', 
        fontSize: 17, 
        fontWeight: '700', 
        marginRight: '40%' 
    },
});

export default styles;