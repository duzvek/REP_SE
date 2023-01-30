import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212829',
        flex: 1,
        width: '100%',
        paddingHorizontal: 20,
    },
    searchHeaderStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 0, 
        marginTop: 11
    },
    searchInputStyle: {
        alignItems: "center",
        marginTop: '5%',
        width: '100%',
        height: 50,
        backgroundColor: '#333839',
        borderRadius: 25,
    },
    searchInputLabelStyle: {
        marginTop: 10,
        color: '#999B9C',
        marginRight: '30%',

    },
    tabStyle: {
        backgroundColor: '#212829',
        height: 58,
    },
    indicatorStyle: {
        backgroundColor: '#00C2FF',
        height: 4,
        borderRadius: 10,
        width: 58,
        marginLeft: '7%',
        marginBottom: 10
    },
    materialTabBarLabelStyle: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: '600',
        marginTop: 5
    },
    filterSearchCounterStyle: {
        flexDirection: "row",
        marginTop: 24
    },
    filterSearchCounterLabelStyle: {
        color: 'white',
        fontWeight: '600',
    },
    filterSearchCounterValueStyle: {
        color: '#00C2FF',
        fontWeight: '600',
        marginLeft: 4
    },
    clearAll: {
        color: '#E26868',
        fontSize: 13,
    },
    notificationBadgeContainer: {
        backgroundColor: '#00C2FF',
        height: 17,
        width: 17,
        borderRadius: 25,
        alignItems: "center"
    },
    notificationBadgeCount: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700',
    },
    flexDirectionRowCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
    underLine: {
        width: '70%',
        alignSelf: "center",
        height: 2,
        backgroundColor: '#323A3C',
        marginTop: 20,
    },
    flexDirectionRowSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    recentSearchCounterStyle: {
        flexDirection: "row",
        marginTop: 24
    },
    recentSearchCounterLabelStyle: {
        color: 'white',
        fontWeight: '600',
    },
    imgStyle: {
        width: 90,
        height: 90,
        borderRadius: 5
    },
    imgType: {
        color: '#00A9DE',
        fontWeight: '600',
        fontSize: 11
    },
    imgTypeTitle: {
        color: 'white',
        fontWeight: '700',
        fontSize: 15
    },
    imgTypeSubTitle: {
        color: '#9D9D9D',
        fontSize: 13
    },
    imgTypeContainer: {
        marginLeft: 8,
        marginTop: '10%'
    },
    recentSearchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    button: {
        width: '49.5%',
        height: 35,
        backgroundColor: '#212829',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 1,
        backgroundColor: '#333839',
    },
    selectedButton: {
        backgroundColor: '#0091BF'
    },
});

export default styles;