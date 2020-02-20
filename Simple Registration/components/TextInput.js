import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Color from "../constants/Color";

const Input = props => {
  return (
    <View style={{ ...styles.inputContainer, ...props.style }}>
      <Text style={{ ...styles.label, ...props.labelStyle }}>
        {props.label}
      </Text>
      <TextInput
     
        {...props}
        style={{ ...styles.input, ...props.input }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    alignItems: "center"
  },
  input: {
    width: "100%",
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
    color: "white",
    fontSize: 20,
    fontFamily: "Sriracha"
  },
  label: {
    fontSize: 15,
    color: Color.gray,
    alignSelf: "flex-start",
    fontFamily: "sriracha"
  }
});
export default Input;
