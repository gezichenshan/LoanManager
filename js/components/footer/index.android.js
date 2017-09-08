import React, { Component } from 'react'
import { View, Text,TouchableOpacity,Dimensions,StatusBar } from 'react-native'
import styles from './styles'
import HomePanelStore from '../../panels/home-panel/store'
import ProfilePanelStore from '../../panels/profile-panel/store'
import DiscoverPanelStore from '../../panels/discover-panel/store'
import SharePanelStore from '../../panels/share-panel/store' 
import I18n from 'react-native-i18n'
import { DrawerNavigator } from 'react-navigation'
import { observer } from 'mobx-react/native' 
import BadgeCount from '../badge-count/'
import Icon from 'react-native-vector-icons/Ionicons'
@observer
export default class CustomComponent3 extends Component {
    renderIndex() {
        const { selectedPanel,navigation } = this.props
        const routes = navigation.state.routes
        const index = navigation.state.index
        const currentRouteName = routes[index].routeName
        const iconSize=28
        const iconBottom=0
        const txtTop=0
        const fontSize =12
        return (
        	<View style={styles.footer}>
        	<StatusBar
		     	backgroundColor={'transparent'}
		  		translucent
		  		animated={true}
		   	/>
            <View style={[{flexDirection:'row'}]}>
				<TouchableOpacity onPress={() =>{
					global.gNavigate('Main')
				}} style={[styles.item]}>
					<View style={{justifyContent:'flex-end',alignItems:'center'}}>
						<Icon name='ios-document-outline' style={{color:currentRouteName=='Home'?global.gThemeStore.color:'#768a9a',fontSize:iconSize}}/>
						<Text style={{fontSize:fontSize,color:currentRouteName=='Home'?global.gThemeStore.color:'#768a9a'}}>文件</Text> 
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() =>{
					global.gNavigate('Share')
				}} style={[styles.item]}>
					<View style={{justifyContent:'center',alignItems:'center'}}>
						<View style={{position:'absolute',right:-14,top:0,zIndex:999}}>
							<BadgeCount type='share'/>
						</View>
						<Icon name='ios-git-merge' style={{color:currentRouteName=='Share'?global.gThemeStore.color:'#768a9a',fontSize:iconSize,transform:[{rotate:'-90deg'}]}}/>
						<Text style={{fontSize:fontSize,color:currentRouteName=='Share'?global.gThemeStore.color:'#768a9a'}}>分享</Text> 
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() =>{
					if(currentRouteName!='Discover'){ 
						global.gNavigate('Discover')
					}
				}} style={[styles.item]}>
					<View style={{justifyContent:'center',alignItems:'center'}}>
						<View style={{position:'absolute',right:-15,top:0,zIndex:999}}>
							<BadgeCount type='uploadAndDownload'/>
						</View>
						<Icon name='ios-compass-outline' style={{color:currentRouteName=='Discover'?global.gThemeStore.color:'#768a9a',fontSize:iconSize}}/>
						<Text style={{fontSize:fontSize,color:currentRouteName=='Discover'?global.gThemeStore.color:'#768a9a'}}>发现</Text>
						
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={() =>{
					if(currentRouteName!='Profile'){ 
						global.gNavigate('Profile')
					}					
				}} style={[styles.item]}>
					<View style={{width:50,justifyContent:'center',alignItems:'center'}}>
						<Icon name='ios-person-outline' style={{color:currentRouteName=='Profile'?global.gThemeStore.color:'#768a9a',fontSize:iconSize}}/>
						<Text style={{fontSize:fontSize,color:currentRouteName=='Profile'?global.gThemeStore.color:'#768a9a'}}>我的</Text>
					</View>
				</TouchableOpacity>
			</View>
			</View>
        )
    }
    render() {
    	if(!HomePanelStore.showOperation){
    		return(
    			this.renderIndex()
    		)
    	}else{
    		return null
    	}
    }
} 
