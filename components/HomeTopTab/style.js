import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B3435',
    },
    profileImage: {
        backgroundColor: 'white',
        height: 45,
        width: 45,
        borderRadius: 100,
        position: 'absolute',
        top: '0.9%',
        left: 18,
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 2
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
        borderRadius: 100
    }
})

export default styles