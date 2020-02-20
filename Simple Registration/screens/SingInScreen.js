import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Color from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";

import SubmitButton from "../components/SubmitButton";
import Input from "../components/TextInput";
import Container from "../components/Container";

const SignInScreen = props => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passworIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setForumIsValid] = useState(false);

  const emailChangeHandler = text => {
    if (text.trim().length === 0) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
    setEmail(text);
  };
  const passwordChangeHandler = text => {
    if (text.trim().length === 0) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
    setPassword(text);
  };

  const [focusedEmail, setFoucsedEmail] = useState(true);
  const [focusedPassword, setFoucsedPassword] = useState(false);

  const focusHandler = (isFocus, target) => {
    const checkFocus = setFocus => {
      if (isFocus == true) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };
    switch (target) {
      case "email":
        checkFocus(setFoucsedEmail);
        break;
      case "password":
        checkFocus(setFoucsedPassword);
      default:
        break;
    }
  };

  const FormSubmitHandler = () => {
    if (emailIsValid && passworIsValid) {
      setForumIsValid(true);
      Alert.alert("Success", "Form validation successfull", [{ text: "Okay" }]);
    } else {
      Alert.alert("Validation Error", "form is not valid!", [{ text: "Okay" }]);
    }
  };
  return (
    <ImageBackground
      keyboardShouldPersistTaps="handled"
      blurRadius={0.1}
      source={require("../assets/image/bg1.jpg")}
      style={styles.screen}
    >
      <View style={styles.iconContainer}>
        <Ionicons
          onPress={() => {
            props.navigation.goBack();
          }}
          size={23}
          color={"darkgray"}
          name="md-arrow-round-back"
        />
      </View>
      <Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <Text style={styles.login}>Log In</Text>
        </TouchableWithoutFeedback>
        <Input
          autoFocus={true}
          input={{
            borderBottomColor: focusedEmail ? Color.white : Color.gray
          }}
          labelStyle={{ color: focusedEmail ? Color.white : Color.gray }}
          label={"Email"}
          value={email}
          onChangeText={emailChangeHandler}
          returnKeyType="done"
          onSubmitEditing={() => {}}
          onFocus={() => {
            focusHandler(true, "email");
          }}
          onBlur={() => {
            focusHandler(false, "email");
          }}
        />
        <Input
          returnKeyType="send"
          label={"Password"}
          value={password}
          onChangeText={passwordChangeHandler}
          style={styles.Input}
          secureTextEntry={true}
          returnKeyType='done'
          input={{
            borderBottomColor: focusedPassword ? Color.white : Color.gray
          }}
          labelStyle={{ color: focusedPassword ? Color.white : Color.gray }}
          onFocus={() => {
            focusHandler(true, "password");
          }}
          onBlur={() => {
            focusHandler(false, "password");
          }}
        />

        <SubmitButton
          onPress={FormSubmitHandler}
          title="Sign In"
          style={styles.button}
        />
      </Container>

      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  sview: {
    width: "100%",
    height: "100%"
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  button: {
    marginTop: "50%"
  },
  iconContainer: {
    marginHorizontal: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
    zIndex: 1
  },
  label: {},
  Input: {
    marginVertical: 20,
    borderBottomColor: "red"
  },

  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
    backgroundColor: "black"
  },
  login: {
    fontFamily: "Akronim",
    fontWeight: "500",
    color: Color.white,
    fontSize: 30,
    marginVertical: "15%"
  }
});
export default SignInScreen;
