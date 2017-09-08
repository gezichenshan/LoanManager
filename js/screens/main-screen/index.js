import React, { Component } from 'react'
import { AppRegistry, View, Text, Button, TouchableOpacity,} from 'react-native'
import { TabNavigator } from 'react-navigation'

import HomeScreen from '../home-screen/'
import LoanScreen from '../loan-screen/'
import InvestmentScreen from '../investment-screen/'
import DiscoveryScreen from '../discovery-screen/'
import ProfileScreen from '../profile-screen/'

import Footer from '../../components/footer/'

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
