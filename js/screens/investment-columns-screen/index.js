import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
const { width } = Dimensions.get('window')
import ExcellentLoanListComponent from '../../components/excellent-loan-list'

let stockNewsData = [
	{key:1,type:1,title:'9月最牛股推荐',sub_title:'网销底价，多重好礼，专项理财，更多收益',contributor:'网商银行',create_time:'2017-08-30'},
	{key:2,type:2,title:'每日晨报',sub_title:'网销底价，多重好礼，专项理财，更多收益',contributor:'网商银行',create_time:'2017-08-30'},
  {key:3,type:1,title:'9月最牛股推荐',sub_title:'网销底价，多重好礼，专项理财，更多收益',contributor:'网商银行',create_time:'2017-08-30'},
  {key:4,type:2,title:'每日晨报',sub_title:'网销底价，多重好礼，专项理财，更多收益',contributor:'网商银行',create_time:'2017-08-30'},
]

export default class InvestmentColumnsScreen extends React.Component {
  static navigationOptions = {
    title: '股票',
  };
  //分割栏
  separator(text) {
  	return(
  		<View style={{flexDirection:'row',height:45,backgroundColor:'#f0f0f2',justifyContent:'center',alignItems:'center'}}>
  			<View style={{width:80,backgroundColor:'#709eb5',height:1}}>
  			</View>
  			<View style={{marginLeft:30,marginRight:30}}>
  				<Text style={{fontSize:12,fontWeight:'bold',color:'#709eb5'}}>
  					{text}
  				</Text>
  			</View>
  			<View style={{width:80,backgroundColor:'#709eb5',height:1}}>
  			</View>
  		</View>
  	)
  }
  //渲染中间图片轮播
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
  //资讯单独item
  renderNewsItem = ({item}) => {
  	let uri
    let navigation = this.props.navigation
  	return (
  		<TouchableOpacity onPress={()=>navigation.navigate('')} style={[styles.itemContainer,{paddingLeft:10,paddingRight:0,flexDirection:'row',alignItems:'center'}]}>
  			<View>
  				<Image style={styles.investmentItemImage} source={require('../../../images/investment-item-1.jpeg')}/>
  			</View>
  			<View style={{flex:1,marginLeft:15}}>
  				<View>
  					<Text>
  						{item.title}
  					</Text>
  				</View>
  				<View style={{marginTop:8}}>
  					<View style={{marginTop:5}}>
	  					<Text style={{color:'#999',fontSize:12}}>
	  						{item.sub_title}
	  					</Text>
  					</View>
  					<View style={{marginTop:5,flexDirection:'row'}}>
  						<Text style={{color:'#999',fontSize:12}}>发布机构</Text> 
  						<Text style={{color:'#91b1c2',marginLeft:10,fontSize:12}}>{item.contributor}</Text>
  					</View>
  					<View style={{marginTop:5,flexDirection:'row'}}>
  						<Text style={{color:'#999',fontSize:12}}>发布时间</Text>
  						<Text style={{color:'#91b1c2',marginLeft:10,fontSize:12}}>{item.create_time}</Text>
  					</View>
  				</View>
  			</View>
  		</TouchableOpacity>
  	)
  }
  //分割线
  SeparatorComponent () {
  	return(
  		<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
  	)
  }
  //股票资讯列表
  renderStockNews(){
  	return(
  		<View style={[styles.itemContainer,{paddingLeft:0,paddingRight:0,marginTop:0}]}>
  			<View>
  				<FlatList
				  	data={stockNewsData}
				  	renderItem={this.renderNewsItem}
				  	ItemSeparatorComponent={this.SeparatorComponent}
				/>
  			</View>
  		</View>
  	)
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.renderCarousel()}
    		{this.separator('股票资讯')}
    		{this.renderStockNews()}
    		<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
    	</ScrollView>
    )
  }
}