import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')

export default class ProfileAccountInfo extends React.Component {
  static navigationOptions = {
    title: '个人信息',
  };
  //安全头像
  avatar() {
    return (
      <View style={[styles.itemContainer,{marginTop:0,paddingTop:5,paddingBottom:5,backgroundColor:'#fff'}]}>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
              安全头像
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50,marginRight:10}} source={require('../../../images/daya.jpeg')}/>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#607d8b'}}>
              >
            </Text>
          </View>
        </View>
      </View>
    )
  }
  //column2 用户名 手机号码
  column2() {
    return (
      <View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
              用户名
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#607d8b'}}>
              tui1234
            </Text>
          </View>
        </View>
        <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
              手机号码
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#607d8b'}}>
              139****1232
            </Text>
          </View>
        </View>
      </View>
    )
  }
  //银行卡
  bankCard() {
    let navigation = this.props.navigation
    return (
      <View style={[styles.itemContainer,{paddingTop:8,paddingBottom:8,backgroundColor:'#fff'}]}>
        <TouchableOpacity onPress={()=>navigation.navigate('ProfileBankCard')} style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#98a5ab'}}>
              我的银行卡
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#ff9800'}}>
              未绑卡
            </Text>
            <Text style={{fontSize:15,fontWeight:'bold',color:'#607d8b'}}>
              >
            </Text>
          </View>
        </TouchableOpacity>
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
        {this.avatar()}
        {this.column2()}
        {this.bankCard()}
    	</ScrollView>
    )
  }
}