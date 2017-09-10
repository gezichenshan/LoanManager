import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

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
            <Text style={{fontWeight:'bold',color:'#98a5ab'}}>
              设置头像
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50,marginRight:10}} source={require('../../../images/daya.jpeg')}/>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
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
            <Text style={{fontWeight:'bold',color:'#98a5ab'}}>
              昵称
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#607d8b',marginRight:5}}>
              tui1234
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:2}}/>
          </View>
        </View>
        <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontWeight:'bold',color:'#98a5ab'}}>
              所在地
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#607d8b',marginRight:5}}>
              南宁
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:2}}/>
          </View>
        </View>
        <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
        <View style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontWeight:'bold',color:'#98a5ab'}}>
              职业身份
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#607d8b',marginRight:5}}>
              上班族
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:2}}/>
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
            <Text style={{fontWeight:'bold',color:'#98a5ab'}}>
              我的支付宝账户
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#999',marginRight:5}}>
              未设置
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:2}}/>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
        <TouchableOpacity onPress={()=>navigation.navigate('ProfileBankCard')} style={{flexDirection:"row",height:45,alignItems:'center'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            <Text style={{fontWeight:'bold',color:'#98a5ab'}}>
              我的微信账户
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:12,fontWeight:'500',color:'#ff9800',marginRight:5}}>
              jujude
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:2}}/>
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