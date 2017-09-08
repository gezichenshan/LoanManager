import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../theme/'
import ExcellentLoanListComponent from '../../components/excellent-loan-list'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '贷款管家',
  };
  //图片轮播
  renderCarousel() {
  	return (
  		<View style={{height:150}}>
		    <Swiper style={styles.wrapper} showsPagination={true} autoplay={true}>
		        <View style={styles.slide}>
		        	<Image style={styles.image} source={require('../../../images/carousel-1.jpeg')} />
		        </View>
		        <View style={styles.slide}>
		          	<Image style={styles.image} source={require('../../../images/carousel-2.jpeg')} />
		        </View>
		        <View style={styles.slide}>
		          	<Image style={styles.image} source={require('../../../images/carousel-3.jpeg')} />
		        </View>
		        <View style={styles.slide}>
		          	<Image style={styles.image} source={require('../../../images/carousel-4.jpeg')} />
		        </View>
		    </Swiper>
	    </View>
    )
  }
  //快速浏览其他产品
  others() {
  	let navigation = this.props.navigation
  	return (
  		<View style={styles.itemContainer}>
  			<View style={{flexDirection:'row'}}>
  				<TouchableOpacity onPress={()=>navigation.navigate('Loan')}  style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#ebf0f2'}}>
  					<View style={{flex:1,justifyContent:'center'}}>
  						<Text>贷款大全</Text>
  						<Text style={{marginTop:5,fontSize:13,color:'#607d8b'}}>总有适合你</Text>
  					</View>
  					<View style={{justifyContent:'flex-end'}}>
  						<Image style={styles.homeItemImage} source={require('../../../images/home-item-1.jpeg')}/>
  					</View>
  				</TouchableOpacity>
  				<TouchableOpacity style={{flex:1,flexDirection:'row',padding:5,marginLeft:10,backgroundColor:'#ebf0f2'}}>
  					<View style={{flex:1,justifyContent:'center'}}>
  						<Text>投资渠道</Text>
  						<Text style={{marginTop:5,fontSize:13,color:'#607d8b'}}>最全的渠道信息</Text>
  					</View>
  					<View>
  						<Image style={styles.homeItemImage} source={require('../../../images/home-item-2.jpeg')}/>
  					</View>
  				</TouchableOpacity>
  			</View>
  			<View style={{flexDirection:'row',marginTop:5,paddingTop:5}}>
  				<TouchableOpacity style={{flex:1,flexDirection:'row',padding:5,backgroundColor:'#ebf0f2'}}>
  					<View style={{flex:1,justifyContent:'center'}}>
  						<Text>分享赚钱</Text>
  						<Text style={{marginTop:5,fontSize:13,color:'#607d8b'}}>奖励不重样</Text>
  					</View>
  					<View>
  						<Image style={styles.homeItemImage} source={require('../../../images/home-item-3.jpeg')}/>
  					</View>
  				</TouchableOpacity>
  				<TouchableOpacity style={{flex:1,flexDirection:'row',padding:5,marginLeft:10,backgroundColor:'#ebf0f2'}}>
  					<View style={{flex:1,justifyContent:'center'}}>
  						<Text>新手专属</Text>
  						<Text style={{marginTop:5,fontSize:13,color:'#607d8b'}}>抢先货款</Text>
  					</View>
  					<View>
  						<Image style={styles.homeItemImage} source={require('../../../images/home-item-4.jpeg')}/>
  					</View>
  				</TouchableOpacity>
  			</View>
  		</View>
  	)
  }
  //专题推荐里的具体项目
  renderRecommandItem = ({item}) => {
  	let navigation = this.props.navigation
  	return (
  		<TouchableOpacity onPress={()=>navigation.navigate('LoanSpacialTopic')} style={{marginLeft:item.key>1?10:0,borderWidth:1,borderColor:'#ebf0f2',width:80,height:60,justifyContent:'center',alignItems:'center'}}>
  			<View>
  				<Text>{item.title}</Text>
  			</View>
  			<View style={{marginTop:5}}>
  				<Text style={{color:'#ed6136'}}>{item.num}</Text>
  			</View>
  		</TouchableOpacity>
  	)
  }

  //专题推荐
  recommandList() {
  	return(
  		<View style={styles.itemContainer}>
  			<View style={{height:30}}>
  				<Text>专题推荐</Text>
  			</View>
  			<View>
  				<FlatList
  				  	horizontal
				  	data={[{key: 1,title:'最新',num:'20+'}, {key: 2,title:'极速房贷',num:'50+'}, {key: 3,title:'快速审查',num:'30+'}, {key: 4,title:'校园贷',num:'40+'}]}
				  	renderItem={this.renderRecommandItem}
				/>
  			</View>
  		</View>
  	)
  }
  // 精选贷款标题
  excellentLoanTitle() {
  	return (
  		<View style={[styles.itemContainer,{paddingLeft:0,paddingRight:0}]}>
  			<View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingRight:15,paddingBottom:5}}>
  				<View>
  					<Text>
  						精选贷款
  					</Text>
  				</View>
  				<View>
  					<Text style={{color:'#9c9c9c'}}>
  						查看全部
  					</Text>
  				</View>
  			</View>
  			{/**分割线**/}
  			<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
  		</View>
  	)
  }

  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.renderCarousel()}
    		{this.others()}
    		{this.recommandList()}
  			{this.excellentLoanTitle()}
    		<ExcellentLoanListComponent navigation={navigation}/>
    	</ScrollView>
    )
  }
}