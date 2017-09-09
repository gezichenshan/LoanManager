import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
import Icon from 'react-native-vector-icons/Ionicons'

//会员权限介绍页展示组建
export default class VipAuthorityList extends React.Component {
  //会员权限
  render() {
    return(
      <View style={{backgroundColor:'#fff',marginTop:10,height:200}}>
        <View style={{flexDirection:'row',height:45,justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1,marginLeft:30,backgroundColor:'#e84f0e',height:1}}>
          </View>
          <View style={{marginLeft:30,marginRight:30}}>
            <Text style={{fontWeight:'bold',color:'#e84f0e'}}>
              会员特权
            </Text>
          </View>
          <View style={{flex:1,marginRight:30,backgroundColor:'#e84f0e',height:1}}>
          </View>
        </View>
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff',justifyContent:'space-around',paddingLeft:30}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='md-checkbox-outline' style={{fontSize:20,color:'#e65021',marginTop:2}}/>
            <Text style={{marginLeft:10}}>
              查看最新的收费文章
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='md-checkbox-outline' style={{fontSize:20,color:'#e65021',marginTop:2}}/>
            <Text style={{marginLeft:10}}>
             获取最新资讯推送
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='md-checkbox-outline' style={{fontSize:20,color:'#e65021',marginTop:2}}/>
            <Text style={{marginLeft:10}}>
             人工客服一对一服务
            </Text>
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='md-checkbox-outline' style={{fontSize:20,color:'#e65021',marginTop:2}}/>
            <Text style={{marginLeft:10}}>
             会员专享特权
            </Text>
          </View>
        </View>
      </View>
    )
  }
}