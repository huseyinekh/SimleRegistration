import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import Color from "../constants/Color";
import { Ionicons } from "@expo/vector-icons";

import SubmitButton from "../components/SubmitButton";
import Input from "../components/TextInput";
import Container from "../components/Container";


const SignUpScreen = props => {
  const [password, setPassword] = useState();
  const [comfirmPassword, setComfirmPassword] = useState();
  const [email, setEmail] = useState();

  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passworIsValid, setPasswordIsValid] = useState(false);
  const [passworComfirmIsValid, setPasswordComfirmIsValid] = useState(false);

  const [formIsValid, setForumIsValid] = useState(false);

  //Form Validation
  //1
  const emailChangeHandler = text => {
    if (text.trim().length === 0) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }
    setEmail(text);
  };
  //2
  const passwordChangeHandler = text => {
    if (text.trim().length === 0) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
    setPassword(text);
  };
  //3
  const passwordComfirmHandler = text => {
    if (text.trim().length !== 0) {
      setComfirmPassword(text);
      if (password == text) {
        setPasswordComfirmIsValid(true);
      } else {
        setPasswordComfirmIsValid(false);
      }
    }
    setComfirmPassword(text);
  };

  //Focus input
  const [focusedEmail, setFoucsedEmail] = useState(true);
  const [focusedPassword, setFoucsedPassword] = useState(false);
  const [focusedComfirmPassword, SetCP] = useState(false);

  const focusHandler = (isFocus, target) => {
    const checkFocus = setFocus => {
      if (isFocus === true) {
        setFocus(true);
      } else {
        setFocus(false);
      }
    };

    switch (target) {
      case "email": //1
        checkFocus(setFoucsedEmail);
        break;
      case "password": //2
        checkFocus(setFoucsedPassword);
        break;
      case "ComfirmPassword": //3
        checkFocus(SetCP);
        break;
      default:
        break;
    }
  };

  //CHECKING forum Submit

  const FormSubmitHandler = () => {
    if (emailIsValid && passworIsValid && passworComfirmIsValid) {
      setForumIsValid(true);

      Alert.alert("Success", "Form validation successfull", [{ text: "Okay" }]);
    } else {
      Alert.alert("Validation Error", "form is not valid!", [{ text: "Okay" }]);
    }
  };
  //RENDER
  return (
    <ImageBackground
      keyboardShouldPersistTaps="handled"
      blurRadius={0.1}
      source={require("../assets/image/bg-dog.jpg")}
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
          <Text style={styles.login}>Sign Up</Text>
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
          returnKeyType="done"
          label={"Password"}
          value={password}
          onChangeText={passwordChangeHandler}
          style={styles.Input}
          secureTextEntry={true}
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

        <Input
          returnKeyType="done"
          label={"Comfirm password"}
          value={comfirmPassword}
          onChangeText={passwordComfirmHandler}
          style={styles.Input}
          secureTextEntry={true}
          input={{
            borderBottomColor: focusedComfirmPassword ? Color.white : Color.gray
          }}
          labelStyle={{
            color: focusedComfirmPassword ? Color.white : Color.gray
          }}
          onFocus={() => {
            focusHandler(true, "ComfirmPassword");
          }}
          onBlur={() => {
            focusHandler(false, "ComfirmPassword");
          }}
        />

        <SubmitButton
          onPress={FormSubmitHandler}
          title="Sign Up"
          style={styles.button}
        />
      </Container>

      <View style={styles.overlay}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  full: {
    width: "100%",
    height: "100%"
  },
  sviev: {
    height: 0,
    overflow: "hidden"
  },
  screen: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%"
  },
  button: {
    marginTop: "40%"
  },
  iconContainer: {
    marginHorizontal: 10,
    alignSelf: "flex-start",
    fontWeight: "bold",
    zIndex: 1
  },

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
    marginVertical: "10%"
  }
});
export default SignUpScreen;
