import React, { Component } from 'react'
import { View, Text,TouchableOpacity,Dimensions } from 'react-native'
import styles from './styles'
// import Icon from 'react-native-vector-icons/Ionicons'

export default class FooterComponent extends Component {
    render() {
        const { selectedPanel,navigation } = this.props
        const routes = navigation.state.routes
        const index = navigation.state.index
        const currentRouteName = routes[index].routeName
        // const iconSize=28
        // const iconBottom=0
        // const txtTop=0
        const fontSize =12
        return (
        	<View style={styles.footer}>
	            <View style={[{flexDirection:'row'}]}>
					<TouchableOpacity onPress={() =>{
						navigation.navigate('Main')
					}} style={[styles.item]}>
						<View style={{justifyContent:'flex-end',alignItems:'center'}}>
							{false&&<Icon name='ios-document-outline' style={{backgroundColor:'transparent'}}/>}
							<Text style={{fontSize:fontSize,backgroundColor:'transparent'}}>首页</Text> 
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						navigation.navigate('Loan')
					}} style={[styles.item]}>
						<View style={{justifyContent:'center',alignItems:'center'}}>
							{false&&<Icon name='ios-document-outline' style={{backgroundColor:'transparent'}}/>}
							<Text style={{backgroundColor:'transparent'}}>贷款</Text> 
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						if(currentRouteName!='Investment'){ 
							navigation.navigate('Investment')
						}
					}} style={[styles.item]}>
						<View style={{justifyContent:'center',alignItems:'center'}}>
							{false&&<Icon name='ios-document-outline' style={{backgroundColor:'transparent'}}/>}
							<Text style={{backgroundColor:'transparent'}}>投资</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						if(currentRouteName!='Discovery'){ 
							navigation.navigate('Discovery')
						}
					}} style={[styles.item]}>
						<View style={{justifyContent:'center',alignItems:'center'}}>
							{false&&<Icon name='ios-document-outline' style={{backgroundColor:'transparent'}}/>}
							<Text style={{backgroundColor:'transparent'}}>发现</Text>
							
						</View>
					</TouchableOpacity>
					<TouchableOpacity onPress={() =>{
						if(currentRouteName!='Profile'){ 
							navigation.navigate('Profile')
						}					
					}} style={[styles.item]}>
						<View style={{width:50,justifyContent:'center',alignItems:'center'}}>
							{false&&<Icon name='ios-document-outline' style={{backgroundColor:'transparent'}}/>}
							<Text style={{backgroundColor:'transparent'}}>我的</Text>
						</View>
					</TouchableOpacity>
				</View>
			</View>
        )
    }
} 
