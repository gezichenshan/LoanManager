import React, { Component } from 'react'
import { AppRegistry, View, Platform, Text, StatusBar } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MainScreen from './screens/main-screen/'
import LoanDetailScreen from './screens/loan-detail-screen/'
import LoanSpacialTopicScreen from './screens/loan-special-topic-screen/'
import InvestmentColumnsScreen from './screens/investment-columns-screen/'
import InvestmentChargeArticleScreen from './screens/investment-charge-article-screen/'
import DiscoveryCreditCardScreen from './screens/discovery-credit-card-screen/'
import DiscoveryCreditCardApplyScreen from './screens/discovery-credit-card-apply-screen/'
import DiscoveryArticleScreen from './screens/discovery-article-screen/'
import ProfileAccountSettingScreen from './screens/profile-account-setting-screen/'
import ProfileAccountInfoScreen from './screens/profile-account-info-screen/'
import ProfileBankCardScreen from './screens/profile-bank-card-screen/'
import ProfileWithdrawScreen from './screens/profile-withdraw-screen/'
import ProfileVipUpgradeScreen from './screens/profile-vip-upgrade-screen/'

import LoginBtn from './components/login-button'

const AppContent = StackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: ({navigation}) => ({
            headerRight:<LoginBtn navigation={navigation}/>,
            headerStyle:{backgroundColor:'#4054b2'},
            headerTintColor:'#fff',
        }),
    },
    LoanDetail:{
        screen: LoanDetailScreen,
    },
    LoanSpacialTopic:{
        screen: LoanSpacialTopicScreen,
    },
    InvestmentColumns:{
        screen: InvestmentColumnsScreen,
    },
    InvestmentChargeArticle:{
        screen: InvestmentChargeArticleScreen
    },
    DiscoveryCreditCard:{
        screen: DiscoveryCreditCardScreen
    },
    DiscoveryCreditCardApply:{
        screen: DiscoveryCreditCardApplyScreen
    },
    DiscoveryArticle:{
        screen :DiscoveryArticleScreen
    },
    ProfileAccountSetting:{
        screen: ProfileAccountSettingScreen
    },
    ProfileAccountInfo:{
        screen: ProfileAccountInfoScreen
    },
    ProfileBankCard:{
        screen: ProfileBankCardScreen
    },
    ProfileWithdraw:{
        screen: ProfileWithdrawScreen
    },
    ProfileVipUpgrade:{
        screen: ProfileVipUpgradeScreen
    }
},{
    initialRouteName:'Main'
})

const App = () => 
    <View style={{flex: 1}}>
        <AppContent />
    </View>

AppRegistry.registerComponent('LoanManager', () => App);