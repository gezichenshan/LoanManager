import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
//会员卡状信息
export default class UserInfoCard extends React.Component {
  render() {
  	return(
  		<View style={[styles.itemContainer,{backgroundColor:'#f0f0f2'}]}>
  			<View style={{flex:1,backgroundColor:'#d8e0e3',borderRadius:4}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
            <View>
              <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50}} source={require('../../../images/daya.jpeg')}/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'#e84f0e',fontSize:12,marginRight:10}}>
                立即升级
              </Text>
              <Icon name='ios-arrow-forward' style={{fontSize:18,color:'#617d8a'}}/>
            </View>
          </View>
          <View style={{backgroundColor:'#fff',height:0.5,marginLeft:15,marginRight:15}}></View>
          <View style={{padding:10}}>
            <Text style={{fontSize:12}}>
              会员身份<Text style={{color:'#03a9f4'}}>普通会员</Text>
            </Text>
          </View>
        </View>
  		</View>
  	)
  }
}