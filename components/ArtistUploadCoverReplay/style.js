import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    topbar: {
        elevation: 25,
        height: 70,
        backgroundColor: '#212829',
    },
    top: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20
    },
    non: {
        backgroundColor: '#0091BF',
        height: 50,
        width: 140,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    music: {
        flexDirection: 'row',
        alignItems: "center"
    },
    replace: {
        backgroundColor: '#C45858', 
        height: 30, 
        width: 70, 
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 10,
        marginTop: 35
    }

})
export default styles;