import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')

export default class ProfileAccountDetails extends React.Component {
  static navigationOptions = {
    title: '贷款管家',
  };
  //个人信息
  profile() {
  	return(
  			<View style={{backgroundColor:'#4052b2',height:200,paddingTop:30,alignItems:'center'}}>
          <Text style={{fontSize:30,color:'#fff',fontWeight:'500'}}>
            200.00
          </Text>
          <Text style={{fontSize:12,color:'#fff',fontWeight:'500',marginTop:15}}>
            可提现金额
          </Text>
          <View style={{marginLeft:50,marginRight:50,height:40,backgroundColor:'#fff',flexDirection:'row',marginTop:30}}>
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#a8a8a8'}}>
                历史提现
              </Text>
            </TouchableOpacity>
            <View style={{width:1,backgroundColor:'#a8a8a8',marginTop:8,marginBottom:8}}></View>
            <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <Text style={{color:'#a8a8a8'}}>
                收入明细
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  	)
  }
  //提现按钮
  button() {
    return (
      <TouchableOpacity style={{backgroundColor:'#57b756',height:40,marginLeft:30,marginRight:30,justifyContent:'center',alignItems:'center',borderRadius:4,marginTop:30}}>
        <Text style={{color:'#fff',fontWeight:'500',fontSize:16}}>
          申请提现
        </Text>
      </TouchableOpacity>
    )
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={{flex:1,backgroundColor:'#fff'}}>
    		{this.profile()}
        {this.button()}
    	</ScrollView>
    )
  }
}