import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

export default class ProfileAccountSetting extends React.Component {
  static navigationOptions = {
    title: '账户设置',
  };

  //个人信息
  profile() {
  	return(
  		<View style={[styles.itemContainer,{marginTop:0,paddingBottom:0}]}>
  			<View style={{flex:1,borderRadius:4}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
              <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50}} source={require('../../../images/daya.jpeg')}/>
              <Text style={{fontSize:12,color:'#607d8b'}}>大雅</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
            </View>
          </View>
          <View style={{backgroundColor:'#ebf0f2',height:1}}></View>
          <View style={{padding:10}}>
            <Text style={{fontSize:12}}>
              会员身份<Text style={{color:'#03a9f4'}}>普通会员</Text>
            </Text>
          </View>
        </View>
  		</View>
  	)
  }
  //column1 密码管理、安全保护问题
  column1() {
    return (
      <View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
        <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
          <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
            密码管理
          </Text>
        </View>
        <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
          <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
        </View>
      </View>
      <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
      <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
        <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
          <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
            我的申请
          </Text>
        </View>
        <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
          <Text style={{fontSize:12,fontWeight:'bold',color:'#607d8b'}}>
            已设置
          </Text>
          <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
        </View>
      </View>
      </View>
    )
  }
  //column2 风险能力评估
  column2() {
    return (
      <View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
              风险能力评估
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <View>
              <Text style={{fontSize:12,fontWeight:'bold',color:'#607d8b'}}>
                保守型 (默认)
              </Text>
              <Text style={{fontSize:12,fontWeight:'bold',color:'#607d8b',marginTop:5}}>
                主动评估更准确
              </Text>
            </View>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
          </View>
        </View>
      </View>
    )
  }
  //安全退出
  logoutBtn() {
    return (
      <TouchableOpacity style={{height:40,backgroundColor:'#fd704b',justifyContent:'center',alignItems:'center',marginTop:50,marginLeft:10,marginRight:10}}>
        <Text style={{color:'#fff',fontWeight:'bold'}}>
          安全退出
        </Text>
      </TouchableOpacity>
    )
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.profile()}
        {this.column1()}
        {this.column2()}
        {this.logoutBtn()}
    	</ScrollView>
    )
  }
}