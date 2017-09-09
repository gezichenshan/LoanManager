import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, Platform } from 'react-native';
import styles from '../../theme/'
import ArticleBrowser from '../../components/article-browser'
import FastApplyFooter from '../../components/fast-apply-footer'
const { width } = Dimensions.get('window')
import Icon from 'react-native-vector-icons/Ionicons'
let articleData = {
  title:'今日行情提示',
  create_time:'2017-08-10',
  author:'贷款逸机构',
  keywords:'贷款,理财,贷款',
  content:'这几天心里颇不宁静。今晚在院子里坐着乘凉，忽然想起日日走过的荷塘，在这满月的光里，总该另有一番样子吧。月亮渐渐地升高了，墙外马路上孩子们的欢笑，已经听不见了；妻在屋里拍着闰儿，迷迷糊糊地哼着眠歌。我悄悄地披了大衫，带上门出去。沿着荷塘，是一条曲折的小煤屑路。这是一条幽僻的路；白天也少人走，夜晚更加寂寞。荷塘四面，长着许多树，蓊蓊郁郁的。路的一旁，是些杨柳，和一些不知道名字的树。没有月光的晚上，这路上阴森森的，有些怕人。今晚却很好，虽然月光也还是淡淡的。路上只我一个人，背着手踱着。这一片天地好像是我的；我也像超出了平常的自己，到了另一世界里。我爱热闹，也爱冷静；爱群居，也爱独处。像今晚上，一个人在这苍茫的月下，什么都可以想，什么都可以不想，便觉是个自由的人。白天里一定要做的事，一定要说的话，现在都可不理。这是独处的妙处，我且受用这无边的荷香月色好了。曲曲折折的荷塘上面，弥望的是田田的叶子。叶子出水很高，像亭亭的舞女的裙。层层的叶子中间，零星地点缀着些白花，有袅娜地开着的，有羞涩地打着朵儿的；正如一粒粒的明珠，又如碧天里的星星，又如刚出浴的美人。',
  permission:false
}
//发现里的资讯页
export default class DiscoveryArticle extends React.Component {
  static navigationOptions = {
    title: '资讯正文',
  };
  render() {
  	let navigation = this.props.navigation
    return (
      <View style={{flex:1,paddingBottom:45}}>
      	<ScrollView style={styles.bg}>
          <ArticleBrowser data={articleData}/>
      	</ScrollView>
        <FastApplyFooter/>
      </View>
    )
  }
}