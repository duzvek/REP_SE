import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    input: {
        backgroundColor: "white",
        height: 50,
        paddingLeft: 10,
        borderRadius: 10,
        marginBottom: 15
    },
    photo: {
        borderColor: "white",
        textAlign: "center",
        color: "white",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 1,
        borderRadius: 10,
        width: 150,
        fontWeight: "600",
        backgroundColor: '#333839',
    },
    loginChild: (signup) => ({
        backgroundColor: "white",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: signup ? '#0091BF' : '#9e3f3f',
        padding: 13,
        width: 350,
        marginTop: 30

    })

})

export default styles