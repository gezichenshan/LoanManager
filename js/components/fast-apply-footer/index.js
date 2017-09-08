import React from 'react';
import { View, Text, Dimensions } from 'react-native';
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

export default class FastApplyFooter extends React.Component {
  //底部悬浮层
  render() {
    return (
      <View style={{width,flexDirection:'row',height:45,backgroundColor:'#fff',position:'absolute',bottom:0,borderTopWidth:1,borderTopColor:'#ccc'}}>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <Icon name='md-star-outline' style={{color:'#999',fontSize:22,fontWeight:'bold'}}/>
          <Text style={{color:'#999',fontWeight:'500',marginLeft:5}}>
            收藏
          </Text>
        </View>
        <View style={{flex:3,justifyContent:'center',alignItems:'center',backgroundColor:'#458afb'}}>
          <Text style={{fontSize:16,color:'#fff'}}>
            立即申请
          </Text>
          <Text style={{fontSize:10,color:'#fff',opacity:0.7,marginTop:5}}>
            (已经有1324235人申请)
          </Text>
        </View>
      </View>
    )
  }
}