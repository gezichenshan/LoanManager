import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles'
import Icon from 'react-native-vector-icons/Ionicons'

let loanData = [
	{key:1,type:1,name:'秒贷-极速贷',description:'15分钟快速审核 2小时快速贷款',range:'3000 - 30000',dailyRate:'0.03%',thumbnail:'../../../images/loan-item-1.jpeg'},
	{key:2,type:2,name:'现金贷',description:'适合短期贷款需求',range:'3000 - 6000',dailyRate:'0.03%'},
	{key:3,type:3,name:'现金贷款小额贷',description:'信用换现金',range:'3000 - 30000',dailyRate:'0.026%'},
	{key:4,type:1,name:'秒贷-极速贷',description:'15分钟快速审核 2小时快速贷款',range:'3000 - 30000',dailyRate:'0.03%'},
	{key:5,type:2,name:'现金贷',description:'适合短期贷款需求',range:'3000 - 6000',dailyRate:'0.03%'}
]

export default class ExcellentLoanListComponent extends React.Component {
  //精选贷款里的具体项目
  renderLoanItem = ({item}) => {
  	let uri
    let navigation = this.props.navigation
  	switch (item.type) {
  		case 1:
  		uri = require('../../../images/loan-item-1.jpeg')
  		break;
  		case 2:
  		uri = require('../../../images/loan-item-2.jpeg')
  		break;
  		case 3:
  		uri = require('../../../images/loan-item-3.jpeg')
  		break;
  	}
  	return (
  		<TouchableOpacity onPress={()=>navigation.navigate('LoanDetail')} style={[styles.itemContainer,{flexDirection:'row',alignItems:'center'}]}>
  			<View>
  				<Image style={styles.loanItemImage} source={uri}/>
  			</View>
  			<View style={{flex:1,marginLeft:15}}>
  				<View>
  					<Text style={{fontSize:15,fontWeight:'bold'}}>
  						{item.name}
  					</Text>
  				</View>
  				<View style={{marginTop:8}}>
  					<View style={{marginTop:5}}>
	  					<Text style={{color:'#999'}}>
	  						{item.description}
	  					</Text>
  					</View>
  					<View style={{marginTop:5,flexDirection:'row'}}>
  						<Text style={{color:'#999'}}>货款范围</Text> 
  						<Text style={{color:'#e51c23',marginLeft:10}}>{item.range}</Text>
  					</View>
  					<View style={{marginTop:5,flexDirection:'row'}}>
  						<Text style={{color:'#999'}}>日利率</Text>
  						<Text style={{color:'#e51c23',marginLeft:10}}>{item.dailyRate}</Text>
  					</View>
  				</View>
  			</View>
  			<View style={{justifyContent:'center',justifyContent:'flex-end'}}>
  				<Text style={{color:'#999'}}>
  					<Icon name='ios-arrow-forward' style={{fontSize:20,color:'#bbb'}}/>
  				</Text>
  			</View>
  		</TouchableOpacity>
  	)
  }
  SeparatorComponent () {
  	return(
  		<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
  	)
  }
  // 精选贷款
  excellentLoan() {
  	return (
  		<View style={[styles.itemContainer,{paddingLeft:0,paddingRight:0,marginTop:0}]}>
  			<View>
  				<FlatList
				  	data={loanData}
				  	renderItem={this.renderLoanItem}
				  	ItemSeparatorComponent={this.SeparatorComponent}
				/>
  			</View>
  		</View>
  	)
  }
  render() {
    return (
    	<ScrollView style={styles.bg}>
    		{this.excellentLoan()}
    	</ScrollView>
    )
  }
}