import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    buttons: (cond) => ({
        height: 30,
        width: 90,
        borderColor: '#6D7B7D',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        backgroundColor: cond ? '#0091BF' : '#212829',
        borderWidth: cond ? 0 : 1,
    }),
    buttonText: {
        fontSize: 13,
        fontWeight: '600',
        color: 'white'

    }
})

export default styles