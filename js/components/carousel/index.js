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