import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform, TextInput } from 'react-native';
import styles from '../../theme/'
import FastApplyFooterComponent from '../../components/fast-apply-footer'
const { width } = Dimensions.get('window')

export default class ProfileCreditCardApply extends React.Component {
  static navigationOptions = {
    title: '申请信用卡',
  };
  //办卡流程
  process() {
    return (
      <View style={{backgroundColor:'#fff',padding:20,paddingTop:0}}>
        <View>
          <Image style={{width:150,height:70}} source={require('../../../images/discovery-1.jpeg')} />
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <View style={{width:40,height:40,backgroundColor:'#Fb5a5b',borderRadius:Platform.OS=='IOS'?25:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>
              1
            </Text>
          </View>
          <View style={{flex:1,height:10,backgroundColor:'#Fb5a5b',marginLeft:-5,marginRight:-5}}>
          </View>
          <View style={{width:40,height:40,backgroundColor:'#adadad',borderRadius:Platform.OS=='IOS'?25:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>
              2
            </Text>
          </View>
          <View style={{flex:1,height:10,backgroundColor:'#adadad',marginLeft:-5,marginRight:-5}}>
          </View>
          <View style={{width:40,height:40,backgroundColor:'#adadad',borderRadius:Platform.OS=='IOS'?25:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#fff',fontSize:20,fontWeight:'bold'}}>
              √
            </Text>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:20}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:'500'}}>填写基本信息</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:'500'}}>填写其他信息</Text>
          </View>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:12,fontWeight:'500'}}>提交成功</Text>
          </View>
        </View>
      </View>
    )
  }
  //卡样本
  cardImage() {
    return (
      <View style={{height:180,backgroundColor:'#fff',padding:20,justifyContent:'center',alignItems:'center'}}>
        <Image style={{width:180,height:100,borderRadius:4}} source={require('../../../images/discovery-2.jpeg')} />
        <Text style={{marginTop:10,fontWeight:'400',color:'#333'}}>
          银联版
        </Text>
      </View>
    )
  }
  lineSeparator() {
    return (
      <View style={{backgroundColor:'#ccc',height:1}}></View>
    )
  }
  //个人信息
  userInfo() {
    /**
     * 此处为模拟表单出错--开始
    **/
    let result = {success:false,err_msg:'请至少选择一种卡组织'}
    /**
     * --结束
    **/
    return (
      <View style={{backgroundColor:'#fff'}}>
        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontSize:16}}>个人信息</Text>
          <Text style={{fontSize:10,color:'#f00',marginLeft:5}}>为提高审核通过率，请准备填写各项内容。</Text>
        </View>
        {this.lineSeparator()}
        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#Fb5a5b',fontSize:20}}>*</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>卡组织</Text>
          </View>
          <TextInput
            {...this.props}
            editable = {true}
            maxLength = {40}
            style={{flex:1}}/>
          {!result.success&&<Text style={{fontSize:10,color:'#f00'}}>{result.err_msg}</Text>}
        </View>
        {this.lineSeparator()}
        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#Fb5a5b',fontSize:20}}>*</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>姓名</Text>
          </View>
          <TextInput
            {...this.props}
            placeholder={'请输入姓名'}
            editable = {true}
            maxLength = {40}
            style={{flex:1,fontSize:13}}
          />
        </View>
        {this.lineSeparator()}
        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#Fb5a5b',fontSize:20}}>*</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>姓名拼音</Text>
          </View>
          <TextInput
            {...this.props}
            editable = {true}
            maxLength = {40}
            style={{flex:1}}
          />
        </View>
        {this.lineSeparator()}
        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#Fb5a5b',fontSize:20}}>*</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>身份证号</Text>
          </View>
          <TextInput
            {...this.props}
            placeholder={'请输入身份证号码'}
            editable = {true}
            maxLength = {40}
            style={{flex:1,fontSize:13}}
          />
        </View>
        {this.lineSeparator()}
        <View style={{padding:10,flexDirection:'row',alignItems:'center'}}>
          <View style={{width:80,flexDirection:'row',alignItems:'center'}}>
            <Text style={{color:'#Fb5a5b',fontSize:20}}>*</Text>
            <Text style={{fontSize:16,fontWeight:'bold'}}>单位名称</Text>
          </View>
          <TextInput
            {...this.props}
            placeholder={'须与单位劳动合同公司名称一致'}
            editable = {true}
            maxLength = {40}
            style={{flex:1}}
            style={{flex:1,fontSize:13}}
          />
        </View>
      </View>
    )
  }

  render() {
  	let navigation = this.props.navigation
    return (
      <View style={{flex:1}}>
      	<ScrollView style={[styles.bg,{marginBottom:45}]}>
      		{this.process()}
          <View style={{backgroundColor:'#ba6b72',height:1}}></View>
          {this.cardImage()}
          {this.userInfo()}
      	</ScrollView>
        <FastApplyFooterComponent/>
      </View>
    )
  }
}