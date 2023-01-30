import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabStyle: {
        backgroundColor: '#212829',
        height: 58,
        marginTop: 20,
    },
    indicatorStyle: {
        backgroundColor: '#00C2FF',
        height: 4,
        borderRadius: 10,
        width: 58,
        marginLeft: '7%'
    },
    materialTabBarLabelStyle: {
        fontSize: 15,
        fontWeight: '600',
        marginTop: 5
    },
});

export default styles;