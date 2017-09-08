import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../theme/'
import ExcellentLoanListComponent from '../../components/excellent-loan-list'
const { width } = Dimensions.get('window')
let articleData = {
  title:'今日行情提示',
  create_time:'2017-08-10',
  author:'贷款逸机构',
  keywords:'贷款,理财,贷款',
  content:'这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了；妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。沿着荷塘，是一条曲折的小煤屑路。这是一条幽僻的路；白天也少人走，夜晚更加寂寞。荷塘四面，长着许多树，蓊蓊郁郁的。路的一旁，是些杨柳，和一些不知道名字的树。没有月光的晚上，这路上阴森森的，有些怕人。今晚却很好，虽然月光也还是淡淡的。路上只我一个人，背着手踱着。这一片天地好像是我的；我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静；爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。'
}

export default class ArticleBrowser extends React.Component {
  static navigationOptions = {
    title: '资讯正文',
  };

  //资讯征文里的个人信息
  profile() {
  	return(
  		<View style={[styles.itemContainer,{backgroundColor:'#f0f0f2'}]}>
  			<View style={{flex:1,backgroundColor:'#d8e0e3',borderRadius:4}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:10}}>
            <View>
              <Image style={{width:40,height:40,borderRadius:Platform.OS == 'ios' ? 20 : 50}} source={require('../../../images/daya.jpeg')}/>
            </View>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <Text style={{color:'#e84f0e',fontSize:12}}>
                立即升级
              </Text>
              <Text>
                >
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
  renderMask() {
    return(
      <View style={{flex:1,padding:30,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(255,255,255,.8)',position:'absolute',top:0,left:0,width:width-30,height:300,zIndex:999}}>
        <View>
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
  //文章部分
  renderArticle() {
    return(
      <View style={{backgroundColor:'#fff',padding:15}}>
        <View style={{height:40,justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'#3b3b63'}}>
          {articleData.title}
          </Text>
        </View>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
          <Text style={{fontSize:12}}>
            发布时间
          </Text>
          <Text style={{fontSize:12,color:'#8c8c8c',marginLeft:10}}>
            {articleData.create_time}
          </Text>
        </View>
        <View style={{backgroundColor:'#e6e6e6',height:1}}></View>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
          <Text style={{fontSize:12}}>
            发布机构
          </Text>
          <Text style={{fontSize:12,color:'#8c8c8c',marginLeft:10}}>
            {articleData.author}
          </Text>
        </View>
        <View style={{backgroundColor:'#e6e6e6',height:1}}></View>
        <View style={{flexDirection:'row',height:40,alignItems:'center'}}>
          <Text style={{fontSize:12}}>
            关键字
          </Text>
          <Text style={{fontSize:12,color:'#8c8c8c',marginLeft:20}}>
            {articleData.keywords}
          </Text>
        </View>
        <View style={{position:'relative'}}>
          {this.renderMask()}
          <Text style={{color:'#333'}}>
            {articleData.content}
          </Text>
        </View>
      </View>
    )
  }
  //会员权限
  vipAuthority() {
    return(
      <View style={{backgroundColor:'#fff',marginTop:10,height:200}}>
        <View style={{flexDirection:'row',height:45,justifyContent:'center',alignItems:'center'}}>
          <View style={{flex:1,marginLeft:30,backgroundColor:'#e84f0e',height:1}}>
          </View>
          <View style={{marginLeft:30,marginRight:30}}>
            <Text style={{fontWeight:'bold',color:'#e84f0e'}}>
              会员特权
            </Text>
          </View>
          <View style={{flex:1,marginRight:30,backgroundColor:'#e84f0e',height:1}}>
          </View>
        </View>
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#fff',justifyContent:'space-around',paddingLeft:30}}>
          <View>
            <Text>
              * 查看最新的收费文章
            </Text>
          </View>
          <View>
            <Text>
             * 获取最新资讯推送
            </Text>
          </View>
          <View>
            <Text>
             * 人工客服一对一服务
            </Text>
          </View>
          <View>
            <Text>
             * 会员专享特权
            </Text>
          </View>
        </View>
      </View>
    )
  }
  render() {
  	let navigation = this.props.navigation
    return (
    	<ScrollView style={styles.bg}>
    		{this.profile()}
        {this.renderArticle()}
        {this.vipAuthority()}
    	</ScrollView>
    )
  }
}