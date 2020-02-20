import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './screens/SingInScreen'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import Navigation from './navigaton/Navigation'
export default function App() {

  const LoadFont= async()=>{
    await Font.loadAsync({
      'akronim':require('./assets/Fonts/Akronim-Regular.ttf'),
      'sriracha':require('./assets/Fonts/Sriracha-Regular.ttf'),
         Akronim:require('./assets/Fonts/Akronim-Regular.ttf'),
         Sriracha:require('./assets/Fonts/Sriracha-Regular.ttf')
    })
    setIsFontLoaded(true)
  }

  const [isFontloaded,setIsFontLoaded]=useState(false)
   useEffect( () =>  {
      LoadFont()
  })
  if(!isFontloaded){
    return  <AppLoading />
  }
  return (
   
   <Navigation/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
