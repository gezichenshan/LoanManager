import React, { Component } from 'react'
import { View, Text, Dimensions } from 'react-native'

export default class Separator extends Component {
    render() {
    	const {text} = this.props
        return (
        	<View style={{flexDirection:'row',height:45,backgroundColor:'#f0f0f2',justifyContent:'center',alignItems:'center'}}>
	  			<View style={{width:80,backgroundColor:'#709eb5',height:1}}>
	  			</View>
	  			<View style={{marginLeft:30,marginRight:30}}>
	  				<Text style={{fontSize:12,fontWeight:'bold',color:'#709eb5'}}>
	  					{text}
	  				</Text>
	  			</View>
	  			<View style={{width:80,backgroundColor:'#709eb5',height:1}}>
	  			</View>
	  		</View>
        )
    }
} 
