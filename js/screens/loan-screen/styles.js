var React = require('react-native');
var { StyleSheet, Dimensions, Platform } = React;
const { width } = Dimensions.get('window')
module.exports = StyleSheet.create({
	bg: {
		flex:1,
		backgroundColor:'#f0f0f2'
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
        width:40,
        height:40,
        borderRadius:Platform.OS=='ios'?20:50
    },
    loanItemImage: {
        width:60,
        height:60,
    },
    itemContainer: {
        backgroundColor:'#fff',
        width,
        marginTop:10,
        padding:10,
        paddingLeft:15,
        paddingRight:15
    },
    conditionItem: {
        width:70,
        padding:5,
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center'
    },
    conditionItemText: {
        fontSize:13,
        color:'#8c8c8c'
    }
});