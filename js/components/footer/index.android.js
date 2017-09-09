import React, { Component } from 'react'
import { View, Text,TouchableOpacity,Dimensions } from 'react-native'
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

export default class FooterComponent extends Component {
    render() {
        const { navigation } = this.props
        const routes = navigation.state.routes
        const index = navigation.state.index
        const currentRouteName = routes[index].routeName
        return (
        	<View style={styles.footer}>
	            <View style={[{flexDirection:'row'}]}>
					<TouchableOpacity onPress={() =>{
						navigation.navigate('Home')
					}} style={[styles.item]}>
						<View style={{justifyContent:'flex-end',alignItems:'center'}}>
							<Icon name='ios-home' style={{color:currentRouteName=='Home'?'#92b1c1':'#333',fontSize:25}}/>
							<Text style={{color:currentRouteName=='Home'?'#92b1c1':'#333',backgroundColor:'transparent'}}>首页</Text> 
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						navigation.navigate('Loan')
					}} style={[styles.item]}>
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Icon name='ios-cash' style={{color:currentRouteName=='Loan'?'#92b1c1':'#333',fontSize:25}}/>
							<Text style={{color:currentRouteName=='Loan'?'#92b1c1':'#333',backgroundColor:'transparent'}}>贷款</Text> 
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						if(currentRouteName!='Investment'){
							navigation.navigate('Investment')
						}
					}} style={[styles.item]}>
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Icon name='ios-stats' style={{color:currentRouteName=='Investment'?'#92b1c1':'#333',fontSize:25}}/>
							<Text style={{color:currentRouteName=='Investment'?'#92b1c1':'#333',backgroundColor:'transparent'}}>投资</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						if(currentRouteName!='Discovery'){ 
							navigation.navigate('Discovery')
						}
					}} style={[styles.item]}>
						<View style={{justifyContent:'center',alignItems:'center'}}>
							<Icon name='ios-eye' style={{color:currentRouteName=='Discovery'?'#92b1c1':'#333',fontSize:25}}/>
							<Text style={{color:currentRouteName=='Discovery'?'#92b1c1':'#333',backgroundColor:'transparent'}}>发现</Text>
							
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						if(currentRouteName!='Profile'){ 
							navigation.navigate('Profile')
						}					
					}} style={[styles.item]}>
						<View style={{width:50,justifyContent:'center',alignItems:'center'}}>
							<Icon name='ios-person' style={{color:currentRouteName=='Profile'?'#92b1c1':'#333',fontSize:25}}/>
							<Text style={{color:currentRouteName=='Profile'?'#92b1c1':'#333',backgroundColor:'transparent'}}>我的</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
        )
    }
} 
