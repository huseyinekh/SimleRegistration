import React from "react";
import { View,  StyleSheet } from "react-native";

const Container = props => {
  return (
  
      <View   style={{...styles.container,...props.style}}>
        {props.children}
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: "90%",

    zIndex: 2,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  notBlurred: {
   width:'100%',
   height:'100%'
    
  },
});
export default Container;
