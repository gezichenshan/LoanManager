var React = require('react-native');

var { StyleSheet, Dimensions, Platform } = React;
var width = Dimensions.get('window').width;


module.exports = StyleSheet.create({
	footer: {
		flexDirection : 'row',
		height: 55,
		borderTopWidth: 1,
		borderTopColor:'rgba(42,80,90,0.2)',
    	alignSelf: 'stretch',
    	alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: 'rgba(255,255,255,1)'
	},
	textColor:{
		color: "#768a9a"
	},
	fontType:{
		fontSize:12,
	},
	item:{
		flex:1,
		height:55,
		justifyContent:'center',
		alignItems:'center',
		bottom:Platform.OS=='ios'? 0 : 2
	}
});
