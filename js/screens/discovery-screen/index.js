import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../theme/'
import ExcellentLoanListComponent from '../../components/excellent-loan-list'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

let creditCardData = [
	{key:1,type:1,title:'广发唯品会信用卡',sub_title_1:'200元购物优惠券',count:'1000'},
	{key:2,type:1,title:'广发东风日产车主信用卡',sub_title_1:'刷卡累积积分',count:'1000'},
]

let netLoanNews = [
	{key:1,type:2,title:'快速贷款',description:'网销底价，多重好礼，专享理财，更多收益',permission:false},
	{key:2,type:2,title:'全车无忧保险',description:'网销底价，多重好礼，专享理财，更多收益',permission:false},
]

let largeLoanNews = [
	{key:1,type:3,title:'境外旅游保险',description:'网销底价，多重好礼，专享理财，更多收益',permission:true},
	{key:2,type:3,title:'全车无忧保险',description:'网销底价，多重好礼，专享理财，更多收益',permission:true},
]

let investmentNews = [
	{key:1,type:4,title:'平安e家保',description:'网销底价，多重好礼，专享理财，更多收益',permission:true},
	{key:2,type:4,title:'关爱女神综合保障',description:'网销底价，多重好礼，专享理财，更多收益',permission:true},
]

export default class DiscoveryScreen extends React.Component {
  static navigationOptions = {
    title: '发现',
  };
  //头部图片
  renderTopImage() {
  	return (
  		<View>
        	<Image style={{width,height:120}} source={require('../../../images/investment-1.jpeg')} />
	    </View>
  	)
  }
  //VIP信息
  renderVip() {
  	return (
  		<View style={{flexDirection:'row',height:90,backgroundColor:'#fff',justifyContent:'space-between',alignItems:'center',paddingLeft:15,paddingRight:15}}>
  			<View style={{justifyContent:'center',alignItems:'center'}}>
  					<View style={{width:40,height:40,borderRadius:Platform.OS=='ios'?20:50,backgroundColor:'#ee636c',justifyContent:'center',alignItems:'center'}}>
              <Icon name='md-watch' style={{fontSize:22,color:'#fff',backgroundColor:'transparent'}}/>
            </View>
  					<Text style={{color:'#012a36',fontSize:12,fontWeight:'500',marginTop:5}}>
  						普通会员
  					</Text>
  			</View>
  			<View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={{width:40,height:40,borderRadius:Platform.OS=='ios'?20:50,backgroundColor:'#7592fb',justifyContent:'center',alignItems:'center'}}>
  					  <Icon name='md-cafe' style={{fontSize:22,color:'#fff',backgroundColor:'transparent'}}/>
            </View>
  					<Text style={{color:'#012a36',fontSize:12,fontWeight:'500',marginTop:5}}>
  						白银会员
  					</Text>
  			</View>
  			<View style={{justifyContent:'center',alignItems:'center'}}>
  					<View style={{width:40,height:40,borderRadius:Platform.OS=='ios'?20:50,backgroundColor:'#f6d369',justifyContent:'center',alignItems:'center'}}>
              <Icon name='md-umbrella' style={{fontSize:22,color:'#fff',backgroundColor:'transparent'}}/>
            </View>
  					<Text style={{color:'#012a36',fontSize:12,fontWeight:'500',marginTop:5}}>
  						黄金会员
  					</Text>
  			</View>
  			<View style={{justifyContent:'center',alignItems:'center'}}>
  					<View style={{width:40,height:40,borderRadius:Platform.OS=='ios'?20:50,backgroundColor:'#6eaae6',justifyContent:'center',alignItems:'center'}}>
              <Icon name='md-wine' style={{fontSize:22,color:'#fff',backgroundColor:'transparent'}}/>
            </View>
  					<Text style={{color:'#012a36',fontSize:12,fontWeight:'500',marginTop:5}}>
  						白金会员
  					</Text>
  			</View>
	    </View>
  	)
  }
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
  //推荐办卡
  creditCardItem = ({item}) => {
  	let navigation = this.props.navigation
  	return (
  		<TouchableOpacity onPress={()=>navigation.navigate('DiscoveryCreditCard')} style={[styles.itemContainer,{marginTop:0,paddingLeft:10,paddingRight:0,flexDirection:'row',alignItems:'center'}]}>
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

  //资讯item
  newsItem = ({item}) => {
  	let navigation = this.props.navigation
  	return (
  		<TouchableOpacity onPress={()=>navigation.navigate('DiscoveryArticle')} style={[styles.itemContainer,{marginTop:0,paddingLeft:10,paddingRight:0,flexDirection:'row',alignItems:'center'}]}>
  			<View>
  				<Image style={{width: 110,height: 70}} source={require('../../../images/home-item-2.jpeg')}/>
  			</View>
  			<View style={{flex:1,marginLeft:15}}>
  				<View>
  					<Text>{item.title}</Text>
  				</View>
				<View style={{marginTop:5,flexDirection:'row'}}>
					<Text style={{color:'#999',fontSize:12}}>{item.description}</Text>
				</View>
				<View style={{height:30,marginTop:5,flexDirection:'row',justifyContent:'flex-end',alignItems:'center',paddingRight:20}}>
					{item.permission?
						<Text style={{color:'#ec6846'}}>加入会员阅读</Text>
						:
						<Text style={{color:'#ec6846'}}>免费阅读</Text>
					}
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
  //网贷资讯列表
  netLoanNewsList() {
  	return (
  		<View>
			<FlatList
		  	data={netLoanNews}
		  	renderItem={this.newsItem}
		  	ItemSeparatorComponent={this.SeparatorComponent}
			/>
		</View>
  	)
  }
  //大额贷款资讯列表
  largeLoanNewsList() {
  	return (
  		<View>
			<FlatList
		  	data={largeLoanNews}
		  	renderItem={this.newsItem}
		  	ItemSeparatorComponent={this.SeparatorComponent}
			/>
		</View>
  	)
  }
  //网贷资讯列表
  investmentNewsList() {
  	return (
  		<View>
			<FlatList
		  	data={investmentNews}
		  	renderItem={this.newsItem}
		  	ItemSeparatorComponent={this.SeparatorComponent}
			/>
		</View>
  	)
  }

  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.renderTopImage()}
    		{this.renderVip()}
    		{this.separator('推荐办卡')}
    		{this.creditCartList()}
    		{this.separator('网贷资讯')}
    		{this.netLoanNewsList()}
    		{this.separator('大额贷款资讯')}
    		{this.largeLoanNewsList()}
    		{this.separator('投资资讯')}
    		{this.investmentNewsList()}
    	</ScrollView>
    )
  }
}