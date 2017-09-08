import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform} from 'react-native';
import styles from '../../theme/'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: '我的',
  };
  //顶部个人信息
  renderUserInfo() {
  	let navigation =  this.props.navigation
  	return (
  		<View style={[styles.itemContainer,{height:170,marginTop:0,paddingBottom:0,backgroundColor:'#4054b2'}]}>
  			<View style={{flex:1,backgroundColor:'#4054b2',borderRadius:4}}>
	          	<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
		            <View style={{flexDirection:'row',alignItems:'center'}}>
		              <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50}} source={require('../../../images/daya.jpeg')}/>
		              <Text style={{color:'#fff',marginLeft:10,fontWeight:'bold'}}>大雅</Text>
		            </View>
		            <View>
		            	<Text style={{color:'#fff',fontSize:12,fontWeight:'bold'}}>
		            		普通会员
		            	</Text>
		            </View>
	          	</View>
	          	<View style={{flexDirection:'row',justifyContent:'space-between'}}>
		          	<TouchableOpacity onPress={()=>navigation.navigate('ProfileWithdraw')} style={{paddingLeft:10}}>
		          		<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
		          			<Text style={{color:'#e0e0ff',fontSize:12,fontWeight:'500'}}>总资产 (元) </Text>
  			                <Icon name='ios-eye' style={{fontSize:22,color:'#e0e0ff',backgroundColor:'transparent'}}/>
		          		</View>
		          		<View>
		          			<Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>
		          				0.00
		          			</Text>
		          		</View>
		          	</TouchableOpacity>
		          	<View style={{paddingRight:10}}>
		          		<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
		          			<Text style={{color:'#e0e0ff',fontSize:12,fontWeight:'500'}}>昨日收益 (元) </Text>
		          			<Icon name='ios-stats' style={{fontSize:22,color:'#e0e0ff',backgroundColor:'transparent'}}/>
		          		</View>
		          		<View>
		          			<Text style={{fontSize:20,fontWeight:'bold',color:'#fff'}}>
		          				+200.00
		          			</Text>
		          		</View>
		          	</View>
		        </View>
	          	<View style={{backgroundColor:'#bbb',height:0.5,marginLeft:15,marginRight:15,marginTop:10,opacity:0.4}}></View>
	          	<View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:15,paddingRight:15}}>
	          		<Text style={{color:'#ccc',fontSize:12,fontWeight:'bold'}}>
	          			邀请好友加入获取积分
	          		</Text>
		          	<TouchableOpacity style={{width:70,height:30,borderRadius:2,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
		          		<Text style={{fontSize:12}}>
		          			立即邀请
		          		</Text>
		          	</TouchableOpacity>
	          	</View>
	        </View>
  		</View>
  	)
  }
  //好友，好友圈信息
  renderFriendshipInfo() {
  	return (
  		<View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
  			<View style={{flexDirection:'row'}}>
  				<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
  					<Text style={{color:'#03a9f4',fontSize:16,fontWeight:'bold'}}>
  						好友
  					</Text>
  					<Text style={{marginLeft:20,color:'#98a5ab',fontWeight:'bold'}}>
  						99
  					</Text>
  				</View>
  				<View style={{height:25,backgroundColor:'#ccc',width:1}}></View>
  				<View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
  					<Text style={{color:'#03a9f4',fontSize:16,fontWeight:'bold'}}>
  						好友圈子
  					</Text>
  					<Text style={{marginLeft:20,color:'#98a5ab',fontWeight:'bold'}}>
  						2000+
  					</Text>
  				</View>
  			</View>
  		</View>
  	)
  }
  //VIP信息
  vipInfo() {
  	let navigation = this.props.navigation
  	return (
  		<View style={[styles.itemContainer,{height:50,paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
  			<View style={{flexDirection:"row"}}>
  				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
	  				<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
	  					会员身份
	  				</Text>
	  				<Text style={{fontSize:15,fontWeight:'bold',color:'#ff9800',marginLeft:10}}>
	  					普通会员
	  				</Text>
  				</View>
  				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
	  				<TouchableOpacity onPress={()=>navigation.navigate('ProfileVipUpgrade')} style={{width:100,height:20,backgroundColor:'#ff9800',justifyContent:'center',alignItems:'center',borderRadius:4}}>
	  					<Text style={{fontSize:12,fontWeight:'bold',color:'#fff'}}>
	  						立即升级成VIP
	  					</Text>
	  				</TouchableOpacity>
  				</View>
  			</View>
  		</View>
  	)
  }
  //column1个人资料、手机验证、会员资料等杂项
  column1() {
  	let navigation = this.props.navigation
  	return (
  		<View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
	  		<TouchableOpacity onPress={()=>navigation.navigate('ProfileAccountSetting')} style={{flexDirection:"row",height:45,alignItems:'center'}}>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
					<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
						个人资料
					</Text>
				</View>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>

					<Text style={{fontSize:12,fontWeight:'bold',color:'#ff9800',marginRight:10}}>
						50%完成度
					</Text>
					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
				</View>
			</TouchableOpacity>
			<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
			<TouchableOpacity onPress={()=>navigation.navigate('ProfileAccountInfo')} style={{flexDirection:"row",height:45,alignItems:'center'}}>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
					<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
						手机验证
					</Text>
				</View>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
					<Text style={{fontSize:12,fontWeight:'bold',color:'#607d8b',marginRight:10}}>
						139****1222
					</Text>
					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
				</View>
			</TouchableOpacity>
			<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
			<View style={{flexDirection:"row",height:45,alignItems:'center'}}>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
					<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
						会员资料
					</Text>
				</View>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
					<Text style={{fontSize:12,fontWeight:'bold',color:'#ff9800',marginRight:10}}>
						未填写
					</Text>
					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
				</View>
			</View>
	  	</View>
  	)
  }
  //column2我的收藏、我的申请
  column2() {
  	return (
  		<View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
	  		<View style={{flexDirection:"row",height:45,alignItems:'center'}}>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
					<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
						我的收藏
					</Text>
				</View>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
				</View>
			</View>
			<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
			<View style={{flexDirection:"row",height:45,alignItems:'center'}}>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
					<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
						我的申请
					</Text>
				</View>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
				</View>
			</View>
	  	</View>
  	)
  }
  //关于我们
  about() {
  	return (
  		<View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
	  		<View style={{flexDirection:"row",height:45,alignItems:'center'}}>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
					<Text style={{fontSize:15,fontWeight:'bold',color:'#6b6b6b'}}>
						关于我们
					</Text>
				</View>
				<View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
				</View>
			</View>
	  	</View>
  	)
  }
  render() {
    return (
    	<ScrollView>
    		{this.renderUserInfo()}
    		{this.renderFriendshipInfo()}
    		{this.vipInfo()}
    		{this.column1()}
    		{this.column2()}
    		{this.about()}
    	</ScrollView>
	)
  }
}