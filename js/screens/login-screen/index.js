import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')

export default class Login extends React.Component {
  static navigationOptions = {
    title: '贷款管家',
  };
  //个人信息
  profile() {
  	return(
  			<View style={{height:110,borderRadius:4,justifyContent:'center',alignItems:'center',marginTop:5,marginLeft:15,marginRight:15}}>
          <Text style={{fontSize:20,color:'#333',fontWeight:'500'}}>
            输入手机号
          </Text>
          <Text style={{fontSize:16,color:'#999',fontWeight:'500',marginTop:15}}>
            登录进入获取贷款
          </Text>
        </View>
  	)
  }
  //登录表单
  loginForm() {
    return (
      <View style={{backgroundColor:'#fff',paddingLeft:30,paddingRight:30}}>
        <View style={{padding:10,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#a8a8a8'}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16}}>手机号</Text>
          </View>
          <TextInput
            {...this.props}
            editable = {true}
            maxLength = {40}
            keyboardType = {'numeric'}
            underlineColorAndroid = {'transparent'}
            clearButtonMode = {'always'}
            style={{flex:1,fontSize:16}}/>
        </View>
        <View style={{padding:10,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginTop:10}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16}}>验证码</Text>
          </View>
          <TextInput
            {...this.props}
            editable = {true}
            maxLength = {40}
            underlineColorAndroid = {'transparent'}
            clearButtonMode = {'always'}
            style={{flex:1,fontSize:16}}/>
          <View>
            <Text style={{color:'#03a9f4',fontWeight:'500'}}>
              获取验证码
            </Text>
          </View>
        </View>
        {this.loginButton()}
      </View>
    )
  }
  //登录按钮
  loginButton() {
    const {navigation} = this.props
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('LoginAccountSetting')} style={{backgroundColor:'#57b756',height:40,justifyContent:'center',alignItems:'center',borderRadius:4,marginTop:30}}>
        <Text style={{color:'#fff',fontWeight:'500',fontSize:16}}>
          下一步
        </Text>
      </TouchableOpacity>
    )
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={{flex:1,backgroundColor:'#fff'}}>
    		{this.profile()}
        {this.loginForm()}
    	</ScrollView>
    )
  }
}