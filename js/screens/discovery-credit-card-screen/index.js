import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../theme/'
import ExcellentLoanListComponent from '../../components/excellent-loan-list'
import Separator from '../../components/separator'
import Carousel from '../../components/carousel'

const imageUrls = {
  image0: require('../../../images/investment-1.jpeg'), // statically analyzed
  image1: require('../../../images/investment-2.jpeg'), // statically analyzed
  image2: require('../../../images/investment-3.jpeg'), // statically analyzed
  image3: require('../../../images/investment-4.jpeg'), // statically analyzed
}

//银行卡模拟数据
let creditCardData = [
  {key:1,type:1,title:'广发唯品会信用卡',sub_title_1:'200元购物优惠券',count:'1000'},
  {key:2,type:1,title:'广发东风日产车主信用卡',sub_title_1:'刷卡累积积分',count:'1000'},
  {key:3,type:1,title:'广发唯品会信用卡',sub_title_1:'200元购物优惠券',count:'1000'},
  {key:4,type:1,title:'广发东风日产车主信用卡',sub_title_1:'刷卡累积积分',count:'1000'},
  {key:5,type:1,title:'广发唯品会信用卡',sub_title_1:'200元购物优惠券',count:'1000'},
  {key:6,type:1,title:'广发东风日产车主信用卡',sub_title_1:'刷卡累积积分',count:'1000'},
]

export default class DiscoveryCreditCart extends React.Component {
  static navigationOptions = {
    title: '信用卡',
  };
  //图片轮播
  renderCarousel() {
  	return (
  		<View style={{height:150}}>
        <Swiper style={styles.wrapper} showsPagination={true} autoplay={true}>
            <View style={styles.slide}>
              <Image style={styles.image} source={require('../../../images/investment-1.jpeg')} />
            </View>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../images/investment-2.jpeg')} />
            </View>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../images/investment-3.jpeg')} />
            </View>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../images/investment-4.jpeg')} />
            </View>
        </Swiper>
      </View>
    )
  }
  //推荐办卡item
  creditCardItem = ({item}) => {
    let navigation = this.props.navigation
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('DiscoveryCreditCardApply')} style={[styles.itemContainer,{marginTop:0,paddingLeft:10,paddingRight:0,flexDirection:'row',alignItems:'center'}]}>
        <View>
          <Image style={{width: 110,height: 70}} source={require('../../../images/credit-card.png')}/>
        </View>
        <View style={{flex:1,marginLeft:15}}>
          <View>
            <Text>{item.title}</Text>
          </View>
        <View style={{marginTop:5,flexDirection:'row'}}>
          <Text style={{color:'#999',fontSize:12}}>{item.sub_title_1}</Text>
        </View>
        <View style={{marginTop:5,flexDirection:'row'}}>
          <Text style={{color:'#e51c23',fontSize:12}}>{item.count}<Text style={{color:'#999'}}>人本月申请</Text></Text>
        </View>
        </View>
      </TouchableOpacity>
    )
  }
  //信用卡的、列表
  creditCartList() {
    return (
      <View>
      <FlatList
        data={creditCardData}
        renderItem={this.creditCardItem}
      />
    </View>
    )
  }

  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		<Carousel imageUrls={imageUrls}/>
        <Separator text={'推荐办卡'}/>
        {this.creditCartList()}
    	</ScrollView>
    )
  }
}