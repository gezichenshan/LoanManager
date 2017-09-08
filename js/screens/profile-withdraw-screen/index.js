import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform, Alert } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')

export default class ProfileWithdraw extends React.Component {
  static navigationOptions = {
    title: '取现',
  };
  componentDidMount(){
    Alert.alert(
      '提示',
      '您没有绑定银行卡，无法取现',
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed!'),style: 'cancel'},
        {text: '立即绑定', onPress: () => console.log('OK Pressed!')},
      ]
    )
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<View style={styles.bg}>

    	</View>
    )
  }
}