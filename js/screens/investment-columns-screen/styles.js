var React = require('react-native');
var { StyleSheet, Dimensions, Platform } = React;
const { width } = Dimensions.get('window')
module.exports = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#f0f0f2'
    },
    container: {
        flex: 1
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width,
        flex: 1
    },
    homeItemImage: {
        width: 40,
        height: 40,
        borderRadius: Platform.OS == 'ios' ? 20 : 50
    },
    investmentItemImage: {
        width: 100,
        height: 80,
    },
    itemContainer: {
        backgroundColor: '#fff',
        width,
        marginTop: 10,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    categoryItem: {
        flexDirection: 'row',
        width: (width - 30) / 2 - 5,
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    conditionItemText: {
        fontSize: 13,
        color: '#8c8c8c'
    }
});