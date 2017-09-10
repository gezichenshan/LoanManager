import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../../theme/'
import FastApplyFooterComponent from '../../components/fast-apply-footer'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

export default class LoanDetail extends React.Component {
  static navigationOptions = {
    title: '贷款详情',
  };
  constructor(props) {
    super(props)
    this.state = {
      stretchIntro:false
    }
  }
  // 精选贷款
  detailTitle() {
  	return (
  		<View style={[styles.itemContainer,{marginTop:0}]}>
        <View style={{flexDirection:'row',paddingTop:10,paddingBottom:10}}>
          <View>
            <Image style={styles.homeItemImage} source={require('../../../images/home-item-4.jpeg')}/>
          </View>
          <View style={{justifyContent:'center',marginLeft:5}}>
            <Text>
              小赢卡贷-2万极速放款
            </Text>
            <View style={{backgroundColor:'#0088cc',borderRadius:10,width:50,justifyContent:'center',alignItems:'center',marginTop:5}}>
              <Text style={{fontSize:12,color:'#fff',backgroundColor:'transparent'}}>
                放款快
              </Text>
            </View>
          </View>
        </View>
        {/**分割线**/}
        <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
        {/**分割线**/}
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:8}}>
          <View>
            <Text style={{fontSize:13,fontWeight:'500',color:'#888'}}>
              最低月息：0.34%
            </Text>
          </View>
          <View>
            <Text style={{fontSize:13,fontWeight:'500',color:'#888'}}>
              贷款期限：3-12个月
            </Text>
          </View>
        </View>
  		</View>
  	)
  }
  //点击展开按钮
  stretch() {
    this.setState({
      stretchIntro : !this.state.stretchIntro
    })
  }
  //简介
  renderBriefIntroduction() {
    return (
      <View style={styles.itemContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View>
            <Text style={{fontSize:13,color:'#607d8b',fontWeight:'500'}}>
              |产品简介
            </Text>
          </View>
          <TouchableOpacity onPress={()=>this.stretch()} style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:13,color:'#0088cc'}}>
              展开 
            </Text>
            {this.state.stretchIntro?
              <Icon name='ios-arrow-forward' style={{fontSize:20,color:'#ccc',marginTop:2}}/>
              :
              <Icon name='ios-arrow-down' style={{fontSize:20,color:'#ccc',marginTop:2}}/>
            }
          </TouchableOpacity>
        </View>
        <View style={{marginTop:5}} ref={component => this.introContainer = component}>
          <Text style={{fontSize:13,fontWeight:'500',color:'#9c9c9c'}} numberOfLines={this.state.stretchIntro?0:4}>
            小赢卡贷是一款帮助年轻用户极速借款、轻松提额、快速到账的手机应用。小赢卡贷依托人脸识别、智能扫描等技术以及大数据风控，为用户打造“轻松申请、高效审批、快速放款”的移动端借款体验。小赢卡贷是一款帮助年轻用户极速借款、轻松提额、快速到账的手机应用。小赢卡贷依托人脸识别、智能扫描等技术以及大数据风控，为用户打造“轻松申请、高效审批、快速放款”的移动端借款体验。
          </Text>
        </View>
      </View>
    )
  }
  renderLoanProcessSeperator() {
    return(
      <View style={{height:40}}><Text style={{color:'#999'}}>...</Text></View>
    )
  }
  //贷款流程
  renderLoanProcess() {
    return (
      <View style={styles.itemContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View>
            <Text style={{fontSize:13,color:'#607d8b',fontWeight:'500'}}>
              |贷款流程
            </Text>
          </View>
        </View>
        <View style={{marginTop:5,flexDirection:'row',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:30,height:30}} source={require('../../../images/loan-process-1.png')}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              信息填写
            </Text>
          </View>
          {this.renderLoanProcessSeperator()}
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:30,height:30}} source={require('../../../images/loan-process-2.png')}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              实名认证  
            </Text>
          </View>
          {this.renderLoanProcessSeperator()}
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:30,height:30}} source={require('../../../images/loan-process-3.png')}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              电话审核
            </Text>
          </View>
          {this.renderLoanProcessSeperator()}
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={{width:30,height:30}} source={require('../../../images/loan-process-4.png')}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              等待放款
            </Text>
          </View>
        </View>
      </View>
    )
  }
  //所需资料
  neededDocuments() {
    return(
      <View style={styles.itemContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View>
            <Text style={{fontSize:13,color:'#607d8b',fontWeight:'500'}}>
              |所需资料
            </Text>
          </View>
        </View>
        <View style={{marginTop:5,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
            <Icon name='md-mail' style={{fontSize:30,color:'#fdac33'}}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              信用卡
            </Text>
          </View>
          <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
          <Icon name='md-phone-portrait' style={{fontSize:30,color:'#6dacfc'}}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              运营商
            </Text>
          </View>
          <View style={{width:60,justifyContent:'center',alignItems:'center'}}>
            <Icon name='md-card' style={{fontSize:30,color:'#21bfa5'}}/>
            <Text style={{fontSize:12,color:'#607d8b',marginTop:5}}>
              身份证
            </Text>
          </View>
        </View>
      </View>
    )
  }
  //L贷款条件
  creditConditions() {
    return(
      <View style={styles.itemContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <View>
            <Text style={{fontSize:13,color:'#607d8b',fontWeight:'500'}}>
              |贷款条件
            </Text>
          </View>
        </View>
        <View style={{marginTop:5,flexDirection:'row',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:13,fontWeight:'500',color:'#999',marginTop:5}}>
              满18周岁，且持有信用卡的用户
            </Text>
          </View>
        </View>
      </View>
    )
  }
  //邀请朋友获得奖励
  bonus() {
    return (
      <View style={styles.itemContainer}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View>
            <Text style={{fontSize:14,color:'#9c9c9c',fontWeight:'500'}}>
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
  render() {
    return (
      <View style={{flex:1}}>
      	<ScrollView style={[styles.bg,{marginBottom:45}]}>
          {this.detailTitle()}
          {this.renderBriefIntroduction()}
          {this.renderLoanProcess()}
          {this.neededDocuments()}
          {this.creditConditions()}
          {this.bonus()}
      	</ScrollView>
        <FastApplyFooterComponent/>
      </View>
    )
  }
}