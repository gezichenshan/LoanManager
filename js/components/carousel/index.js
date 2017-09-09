import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import Swiper from 'react-native-swiper';
import styles from '../../theme/'

//图片轮播
export default class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded:false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState(
        {loaded:true}
      )
    }, 100);
  }

  //图片轮播
  render() {
  	const IMAGES = this.props.imageUrls
	let xx = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1504957047074&di=3dced7067ac29cb6e9e8ea81907af829&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fjob%2Fgroups%2F5df0558d077600000141f0dbddf1.jpg'
    if (this.state.loaded) {
      return (
        <View style={{height:150}}>
          <Swiper style={styles.wrapper} autoplay={true}>
          	{
          		Object.keys(IMAGES).map((item, index) => {
              	return(
	                <View style={styles.slide} key={index}>
	                	<Image resizeMode='stretch' style={styles.image} source={IMAGES['image' + index]} />
	               	</View>
              	)
        	})}
          </Swiper>
        </View>
      )
    }
  	return (
  		<View style={{height:150}}>
		    
	    </View>
    )
  }
}