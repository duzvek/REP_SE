import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    play:{
        fontSize: 40,
        color: "white",
        marginTop: 120,
        textAlign: "center"
    },
    logo:{
        marginTop: 125,
        width: 60,
        height: 60,

    },
    loginfb: {
        height: 60, 
        borderRadius: 25, 
        marginTop: 50, 
        alignItems: "center", 
        backgroundColor: '#3B5998', 
        marginBottom: 12, 
        marginHorizontal: 25,
        flexDirection: 'row',
        width: 350,
        
    },
    email: {
        height: 50, 
        backgroundColor: "white", 
        marginBottom: 10,
        width: 295,
        paddingLeft: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10

    },
    pass: {
        height: 50, 
        backgroundColor: "white",  
        marginBottom: 10,
        width: 250,
        paddingLeft: 5,

    },
    onpress: {
        marginTop: 30,
        width: 350,
        justifyContent: "space-around", 
        flexDirection: 'row',
    },
    loginChild: {
        backgroundColor: "white", 
        height: 60, 
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 30, 
        backgroundColor: '#0091BF',
        padding: 13,
        width: 155,
        marginTop: 25

    },
    signinChild: {
        height: 60, 
        borderRadius: 30, 
        backgroundColor: '#656F73',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: 13,
        width: 155,
        marginTop: 25
    },
    icon: {
        height: 50,
        backgroundColor: "#0091BF",
        marginLeft: 17,
        paddingTop: 10,
        width: 55,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10

    },
    
})

export default styles