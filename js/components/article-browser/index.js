import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')
import UserInfoCard from '../../components/user-info-card'
import VipAuthorityList from '../vip-authority-list'
import Icon from 'react-native-vector-icons/Ionicons'

export default class ArtitleBrowser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articleContentHeight:350,
    }
  }
  //标题、发布机构、关键字
  renderArticleTitle() {
    const {data} = this.props
    return (
      <View style={{padding:15,backgroundColor:'#fff'}}>
        <View style={{height:40,justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#3b3b63'}}>
          {data.title}
          </Text>
        </View>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
          <Text style={{fontSize:12}}>
            发布时间
          </Text>
          <Text style={{fontSize:12,color:'#8c8c8c',marginLeft:10}}>
            {data.create_time}
          </Text>
        </View>
        <View style={{backgroundColor:'#e6e6e6',height:1}}></View>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
          <Text style={{fontSize:12}}>
            发布机构
          </Text>
          <Text style={{fontSize:12,color:'#8c8c8c',marginLeft:10}}>
            {data.author}
          </Text>
        </View>
        <View style={{backgroundColor:'#e6e6e6',height:1}}></View>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
          <Text style={{fontSize:12}}>
            关键字
          </Text>
          <Text style={{fontSize:12,color:'#8c8c8c',marginLeft:20}}>
            {data.keywords}
          </Text>
        </View>
      </View>
    )
  }
  //权限不够时的提示遮罩
  renderMask() {
    return(
      <View style={{width:width,paddingTop:20,height:this.state.articleContentHeight,alignItems:'center',backgroundColor:'#rgba(255,255,255,.9)',position:'absolute',zIndex:999}}>
        <View>
          <Icon name='md-sad' style={{fontSize:60,color:'#e65021',marginTop:2}}/>
        </View>
        <View style={{marginTop:20,width:width-100}}>
          <Text style={{color:'#6d7173'}}>
            对不起，您当前访问的VIP会员内容，升级为vip即可完整观看！
          </Text>
        </View>
        <TouchableOpacity style={{width:width-100,justifyContent:'center',alignItems:'center',padding:10,borderRadius:4,marginTop:20,backgroundColor:'#e84f0e'}} onPress={()=>''}>
          <Text style={{fontSize: 14,textAlign: 'center',color: '#fff'}}>立即升级</Text>
        </TouchableOpacity>
      </View>
    )
  }
  //正文部分
  renderArticleContent() {
    const {data} = this.props
    return (
      <View style={{position:'relative',minHeight:350,padding:15,paddingTop:0}} onLayout={({nativeEvent:e})=>this.setState({articleContentHeight:e.layout.height})} name='articleContent' ref={component => this.articleContent = component}>
        {!data.permission&&this.renderMask()}
        <Text style={{color:'#333'}}>
          {data.content}
        </Text>
      </View>
    )
  }
  render() {
    const {data} = this.props
    return(
      <View style={{backgroundColor:'#f0f0f2'}}>
        <UserInfoCard/>
        {this.renderArticleTitle()}
        {this.renderArticleContent()}
        {!data.permission&&<VipAuthorityList/>}
      </View>
    )
  }
}