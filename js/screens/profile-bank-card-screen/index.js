import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')

export default class ProfileBankCard extends React.Component {
  static navigationOptions = {
    title: '我的银行卡',
  };
  //个人信息
  profile() {
  	return(
  			<View style={{height:110,borderRadius:4,justifyContent:'center',alignItems:'center',marginTop:5,marginLeft:15,marginRight:15,backgroundColor:'#d3dce0'}}>
          <Text style={{color:'#5677fc',fontWeight:'500'}}>
            + 绑定理财卡
          </Text>
        </View>
  	)
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.profile()}
    	</ScrollView>
    )
  }
}