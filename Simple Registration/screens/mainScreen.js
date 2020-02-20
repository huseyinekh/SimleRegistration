import React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

import Container from "../components/Container";
import RegisterButton from "../components/RegisterButton";
import Color from "../constants/Color";

const MainScreen =props => {
  return (
    <ImageBackground
      source={require("../assets/image/MainPage.jpg")}
      style={styles.screen}
    >
      
      <Container style={styles.container}>
        <RegisterButton  onPress={()=>{props.navigation.navigate("SignIn")}} title="Sign In" />
        <Text style={styles.text}>or</Text>
        <RegisterButton  onPress={()=>{props.navigation.navigate("SignUp")}} title="Sign Up" />
      </Container>
      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  text:{
    fontSize:20,
    color:Color.gray,
    fontFamily:'Sriracha'
  },
  container:{
    height:"30%",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center"
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    backgroundColor: "black"
  }
});
