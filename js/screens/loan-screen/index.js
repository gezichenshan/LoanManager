import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './styles'
import ExcellentLoanListComponent from '../../components/excellent-loan-list'
import Icon from 'react-native-vector-icons/Ionicons'

export default class LoanScreen extends React.Component {
  static navigationOptions = {
    title: '贷款',
  };
  //筛选条件
  renderCondition() {
  	return(
  		<View style={[styles.itemContainer,{marginTop:0}]}>
	  		<View style={{height:30,flexDirection:'row',alignItems:'center'}}>
	  			<Icon name='ios-bookmark' style={{fontSize:18,color:'#333'}}/>
	  			<Text style={{fontSize:12,marginLeft:10}}>
	  				筛选贷款
	  			</Text>
	  		</View>
	  		<View>
	  			<View>
	  				<View style={{flexDirection:'row',alignItems:'center'}}>
	  					<TouchableOpacity>
		  					<Text style={{fontWeight:'bold'}}>职业身份</Text>
	  					</TouchableOpacity>
	  					<View style={{flex:1,flexDirection:'row'}}>
		  					<TouchableOpacity style={styles.conditionItem}>
			  					<Text style={styles.conditionItemText}> 全部 </Text>
		  					</TouchableOpacity>
		  					<TouchableOpacity style={[styles.conditionItem,{backgroundColor:'#ffb8bc'}]}>
			  					<Text style={styles.conditionItemText,{color:'#000'}}> 上班族 </Text>
		  					</TouchableOpacity>
		  					<TouchableOpacity style={styles.conditionItem}>
			  					<Text style={styles.conditionItemText}> 企业主 </Text>
		  					</TouchableOpacity>
		  					<TouchableOpacity style={styles.conditionItem}>
			  					<Text style={styles.conditionItemText}> 个体户 </Text>
		  					</TouchableOpacity>
	  					</View>
	  				</View>
	  				<View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
	  					<TouchableOpacity>
		  					<Text style={{fontWeight:'bold'}}>贷款金额</Text>
	  					</TouchableOpacity>
	  					<View style={{flex:1,flexDirection:'row'}}>
		  					<TouchableOpacity style={styles.conditionItem}>
			  					<Text style={styles.conditionItemText}> 全部 </Text>
		  					</TouchableOpacity>
		  					<TouchableOpacity style={[styles.conditionItem,{backgroundColor:'#ffb8bc'}]}>
			  					<Text style={[styles.conditionItemText,{color:'#000'}]}> 3000+ </Text>
		  					</TouchableOpacity>
		  					<TouchableOpacity style={styles.conditionItem}>
			  					<Text style={styles.conditionItemText}> 30000+ </Text>
		  					</TouchableOpacity>
		  					<TouchableOpacity style={styles.conditionItem}>
			  					<Text style={styles.conditionItemText}> 100000+ </Text>
		  					</TouchableOpacity>
		  				</View>
	  				</View>
	  			</View>
	  		</View>
	  	</View>
  	)
  }
  //结果总数
  renderResultCount() {
  	return (
  		<View style={[styles.itemContainer,{marginTop:0,padding:5}]}>
  			<Text style={{color:'#999',fontSize:12}}>
  				共80个结果
  			</Text>
  		</View>
  	)
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.renderCondition()}
    		<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
    		{this.renderResultCount()}
    		<View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
    		<ExcellentLoanListComponent navigation={navigation}/>
    	</ScrollView>
    )
  }
}