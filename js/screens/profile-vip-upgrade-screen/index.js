import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'

let vipInfoData = [
  {key:1,name:'白银会员',features:['查阅白银会员文章','定制会员内容专栏推送','白银会员专属权限'],price:'99',checked:false},
  {key:2,name:'黄金会员',features:['查阅白银会员文章','定制会员内容专栏推送','白银会员专属权限'],price:'199',checked:false},
  {key:3,name:'白金会员',features:['查阅白银会员文章','定制会员内容专栏推送','白银会员专属权限'],price:'399',checked:true},
]

export default class ProfileVipUpgrade extends React.Component {
  static navigationOptions = {
    title: '我的',
  };

  //个人信息
  profile() {
    return(
      <View style={[styles.itemContainer,{backgroundColor:'#f0f0f2'}]}>
        <View style={{flex:1,backgroundColor:'#d8e0e3',borderRadius:4}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50}} source={require('../../../images/daya.jpeg')}/>
              <Text>
                大雅
              </Text>
            </View>
          </View>
          <View style={{backgroundColor:'#fff',height:0.5,marginLeft:15,marginRight:15}}></View>
          <View style={{padding:10}}>
            <Text style={{fontSize:12}}>
              会员身份<Text style={{color:'#03a9f4'}}>普通会员</Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }

  //特性解析器List
  featuresExtractorList(list){
    if(list&&list.length>0){
          return list.map( (item,i) => this.featuresExtractorItem(item,i) );
        }else{
          return null
        }
    }
  //特性解析器Item
  featuresExtractorItem(item,i) {
    if(item){
        return (
          <View key={i}>
            <Text style={{color:'#6b6b6b',fontWeight:'500',marginTop:5}}>. {item}</Text>
          </View>
        )
      }
      return(
        <View key={i}/>
      )
  }
  //分割线
  SeparatorComponent () {
    return(
      <View style={{backgroundColor:'#e0e0e0',height:0.5}}></View>
    )
  }
  //选择VIP
  selectVip(item) {
    for(let i=0;i<vipInfoData.length;i++){
      let unit = vipInfoData[i]
      unit.checked = false
    }
    item.checked = !item.checked
    this.forceUpdate()
  }
  //会员类别项
  vipInfoItem = (item,index) => {
    console.log(index)
    return (
      <TouchableOpacity onPress={()=>this.selectVip(item)} style={[styles.itemContainer,{marginTop:0,paddingRight:55,paddingTop:15,paddingBottom:15}]}>
        <View style={{flexDirection:'row'}}>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center'}}>
            {!item.checked?
              <Icon name='md-square-outline' style={{fontSize:30,color:'#484748',marginTop:2}}/>
              :
              <Icon name='md-checkbox-outline' style={{fontSize:30,color:'#2c9a2d',marginTop:2}}/>
            }
            <Text style={{fontSize:16,fontWeight:'500',marginLeft:5}}>
              {item.name}
            </Text>
          </View>
          <View style={{flex:1,height:34,flexDirection:"row",alignItems:'center',justifyContent:'flex-end'}}>
            <Text style={{fontSize:20,fontWeight:'bold',color:'#e84f0e'}}>
              ¥{item.price} <Text style={{color:'#98a5ab',fontSize:12}}>一年</Text>
            </Text>
          </View>
        </View>
        <View>
          {this.featuresExtractorList(item.features)}
        </View>
      </TouchableOpacity>
    )
  }
  //会员类别列表
  vipInfoList() {
    return (
      <View style={{paddingLeft:15,paddingRight:15}}>
        {
          vipInfoData.map((item, index) => {
            return(
              <View key={index}>
                  {this.vipInfoItem(item,index)}
              </View>
            )
          })
        }
      </View>
    )
  }
  render() {
    let navigation = this.props.navigation
    return (
      <ScrollView style={styles.bg}>
        {this.profile()}
        {this.vipInfoList()}
      </ScrollView>
    )
  }
}