import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class LoginBtn extends React.Component {
  //登陆按钮
  render() {
    const {navigation} = this.props
    const routes = navigation.state.routes
    const index = navigation.state.index
    const currentRouteName = routes[index].routeName
    return (
      <View>
        {currentRouteName=='Home'&&
          <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={{width:120,flexDirection:'row',height:30,paddingRight:10,paddingRight:10}}>
            <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#384ba0',borderRadius:8,paddingLeft:5,paddingRight:5}}>
              <Icon name='md-person' style={{fontSize:16,color:'#b7bfe2',marginTop:2}}/>
              <View style={{padding:3}}>
                <Text style={{color:'#b7bfe2'}}>
                  登陆
                </Text>
              </View>
              <Text style={{color:'#b7bfe2'}}>/</Text>
              <View style={{padding:3}}>
                <Text style={{color:'#b7bfe2'}}>
                  注册
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        }
      </View>
    )
  }
}