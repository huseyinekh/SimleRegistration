import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from "react-native";
import Color from "../constants/Color";

const RegisterButton = props => {
  let ButtonCmp =
    Platform.OS === "android" ? TouchableOpacity : TouchableNativeFeedback;
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      {...props}
    >
      <Text style={styles.title}> {props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {},
  title: {
    fontSize: 20,
    color: Color.white,
    borderColor: Color.white,
    fontFamily: "Sriracha",
    zIndex: 1,
    borderWidth: 1.5,
    minWidth: "20%",
    maxWidth: 120,
    borderRadius: 80,
    textAlign: "center",
    paddingHorizontal:10,
    paddingVertical:4
    ,marginHorizontal:15,
    marginVertical:5
  }
});

export default RegisterButton;
