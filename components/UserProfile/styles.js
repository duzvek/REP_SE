import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    onpress: {
        marginTop: 10,
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
        marginTop: 200

    },
    profileIcon: {
        
        marginLeft: '5%',
        borderRadius: 50,
        width: 80,
        height: 80,

    }, 

    premium: {
        marginTop: 10, 
        marginBottom: 2,
        height: 105,
        width: 400,
        backgroundColor: '#006D8F', 
        borderRadius: 10, 
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
    settingsBars: {
        color: 'white',
        textAlign: "center",
        height: 40,
        fontSize: 16,
        marginLeft: 10,
        marginTop: 10
    },
    artistBars: {
        color: 'white',
        textAlign: "center",
        height: 40,
        fontSize: 14,
        marginLeft: 10,
        marginTop: 10


    },
    profileBox: {

        marginTop: 5,
        height: 45,
        width:400,
        backgroundColor: '#333839',
        borderRadius: 5
    },
    artistBox: {
        marginBottom: 2,
        height: 60,
        width: 400,
        backgroundColor: '#006D8F', 
        borderRadius: 10, 
    }, 
    createButton: {
        height: 30,
        width: 80,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#00A7DC',
        borderRadius: 20
    }



})
export default styles 