import React, { Component } from 'react'
import { AppRegistry, View, Text, Button, TouchableOpacity, Platform, BackHandler, ToastAndroid} from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeScreen from '../home-screen/'
import LoanScreen from '../loan-screen/'
import InvestmentScreen from '../investment-screen/'
import DiscoveryScreen from '../discovery-screen/'
import ProfileScreen from '../profile-screen/'

import Footer from '../../components/footer/'

if (Platform.OS!='ios') {
        //多按一次退出应用
    BackHandler.addEventListener('hardwareBackPressQuit', (abc) => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now()
        ToastAndroid.showWithGravity(
          '再按一次退出应用',
          ToastAndroid.SHORT,
          ToastAndroid.CENTER,
        )
        return true
    })
}

const MainPanel = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Loan: {
    screen: LoanScreen,
  },
  Investment: {
    screen: InvestmentScreen,
  },
  Discovery: {
    screen: DiscoveryScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
}, {
  tabBarComponent:Footer,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
  tabBarPosition: 'bottom',
  swipeEnabled:false
});
export default MainPanel
