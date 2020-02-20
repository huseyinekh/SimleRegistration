import React from 'react'
import {createStackNavigator}from   'react-navigation-stack'
import { createAppContainer} from 'react-navigation'
import SigninScreen from '../screens/SingInScreen'
import  SingUpScreen from '../screens/SignUpScreen'
import  MainScreen from '../screens/mainScreen'
import SigUpScreen from '../screens/SignUpScreen'

const SimpleNavigation=createStackNavigator({
    Main:MainScreen,
    SignIn:SigninScreen,
    SignUp:SigUpScreen
},{
    defaultNavigationOptions:{
        headerTitleStyle:{
            backgroundColor:'transparent'
        },
       headerShown:false
    }
})

export default createAppContainer(SimpleNavigation)


