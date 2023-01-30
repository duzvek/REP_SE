import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    play:{
        fontSize: 40,
        color: "white",
        marginTop: 50,
        textAlign: "center"
    },
    logo:{
        marginTop: 50,
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
    fblogo:{
        backgroundColor: "white", 
        height: 29, 
        width: 28, 
        borderRadius: 500, 
        justifyContent: "center", 
        alignItems: "center",
        marginLeft: 15
 
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
        width: 295,
        paddingLeft: 5,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10

    },
    onpress: {
        marginTop: 10,
        justifyContent: "space-around", 
        flexDirection: 'row',
    },
    loginChild: (signup) => ({
        height: 60, 
        justifyContent: "center",
        alignItems: "center", 
        borderRadius: 30, 
        backgroundColor: signup ? '#0091BF' : '#9e3f3f' ,
        padding: 13,
        width: 350,
        marginTop: 10

    }),
    icon: {
        height: 50,
        marginLeft: 17,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        paddingTop: 10,
        width: 55,

    },
    
})

export default styles