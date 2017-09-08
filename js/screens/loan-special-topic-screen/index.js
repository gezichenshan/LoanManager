import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../theme/'
import ExcellentLoanListComponent from '../../components/excellent-loan-list'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

export default class LoanSpacialTopic extends React.Component {
  static navigationOptions = {
    title: '贷款专题',
  };
  //图片轮播
  renderCarousel() {
  	return (
  		<View style={{height:150}}>
		    <Swiper style={styles.wrapper} showsPagination={true} autoplay={true}>
		        <View style={styles.slide}>
		        	<Image style={styles.image} source={require('../../../images/special-topic-1.jpeg')} />
		        </View>
		        <View style={styles.slide}>
		          	<Image style={styles.image} source={require('../../../images/special-topic-2.jpeg')} />
		        </View>
		        <View style={styles.slide}>
		          	<Image style={styles.image} source={require('../../../images/special-topic-3.jpeg')} />
		        </View>
		    </Swiper>
	    </View>
    )
  }
  //邀请朋友获得奖励
  bonus() {
    return (
      <View style={[styles.itemContainer,{marginBottom:45}]}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View>
            <Text style={{fontSize:13,color:'#9c9c9c'}}>
              呼唤朋友一起来贷款赚奖励
            </Text>
          </View>
        </View>
        <View style={{marginTop:5,flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center'}}>
            <Icon name='ios-chatbubbles' style={{fontSize:30,color:'#159588'}}/>
          </View>
          <View style={{flex:1,padding:10,justifyContent:'center',alignItems:'center'}}>
            <Icon name='ios-people' style={{fontSize:45,color:'#159588'}}/>
          </View>
        </View>
      </View>
    )
  }
  //底部悬浮层
  footer() {
    return (
      <View style={{width,flexDirection:'row',height:45,backgroundColor:'#fff',position:'absolute',bottom:0}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text>
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
  render() {
  	let navigation = this.props.navigation
    return (
      <View style={{flex:1}}>
      	<ScrollView style={styles.bg}>
      		{this.renderCarousel()}
      		<ExcellentLoanListComponent navigation={navigation}/>
          {this.bonus()}
      	</ScrollView>
        {this.footer()}
      </View>
    )
  }
}