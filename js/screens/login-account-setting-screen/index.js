import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'

export default class Login extends React.Component {
  static navigationOptions = {
    title: '贷款管家',
  };
  //安全头像
  avatar() {
    return (
        <TouchableOpacity>
          <Image style={{width:70,height:70,borderRadius:Platform.OS == 'ios' ? 35 : 50,marginRight:10}} source={require('../../../images/daya.jpeg')}/>
        </TouchableOpacity>
    )
  }
  //个人信息
  profile() {
  	return(
  			<View style={{borderRadius:4,justifyContent:'center',alignItems:'center',paddingTop:15,marginLeft:15,marginRight:15}}>
          {this.avatar()}
          <Text style={{fontSize:16,color:'#999',fontWeight:'500',marginTop:15}}>
            点击设置头像
          </Text>
        </View>
  	)
  }
  //radiobtn选择男女
  onSelect(index, value){
    this.setState({
      text: `Selected index: ${index} , value: ${value}`
    })
  }
  //登录表单
  loginForm() {
    return (
      <View style={{backgroundColor:'#fff',paddingLeft:30,paddingRight:30}}>

        <View style={styles2.formItemContainer}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16}}>昵称</Text>
          </View>
          <TextInput
            {...this.props}
            editable = {true}
            maxLength = {40}
            underlineColorAndroid = {'transparent'}
            clearButtonMode = {'always'}
            style={{flex:1,height:40,fontSize:16}}/>
        </View>

        <View style={styles2.formItemContainer}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16}}>性别</Text>
          </View>
          <View>
            <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)} style={{flexDirection:'row'}}>
              <RadioButton value={'item1'} style={{marginLeft:20}}>
                <Text>男</Text>
              </RadioButton>
              <RadioButton value={'item2'} style={{marginLeft:20}}>
                <Text>女</Text>
              </RadioButton>
            </RadioGroup>
          </View>
        </View>

        <View style={styles2.formItemContainer}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16}}>职业身份</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{color:'#666'}}>
              上班族
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:3}}/>
          </View>
        </View>

        <View style={styles2.formItemContainer}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontSize:16}}>所在地</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{color:'#666'}}>
              广西南宁
            </Text>
            <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb',marginTop:3}}/>
          </View>
        </View>
        {this.loginButton()}
      </View>
    )
  }
  //返回至Main菜单
  navigateToMain() {
    const {navigation} = this.props
    navigation.dispatch({ type: 'Navigation/RESET', index: 0, actions: [{ type: 'Navigation/NAVIGATE', routeName: 'Main' }] })
  }
  //登录按钮
  loginButton() {
    const {navigation} = this.props
    return (
      <TouchableOpacity onPress={()=>this.navigateToMain()} style={{backgroundColor:'#57b756',height:40,justifyContent:'center',alignItems:'center',borderRadius:4,marginTop:30}}>
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
let styles2 = StyleSheet.create({
  formItemContainer: {
    height:45,padding:10,flexDirection:'row',alignItems:'center',borderBottomWidth:1,borderBottomColor:'#a8a8a8',marginTop:10
  }
});