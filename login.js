import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
import { UserContext } from "./App";
const Login = (props) => {
  const [phonenumber, onChangeNumber] = React.useState(null);
  const [otp, onChangeOtp] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={phonenumber}
        placeholder="phone number"
        keyboardType="numeric"
      />
      <Button
        title="Get OTP"
        color="#00000"
        onPress={() => callingApi(phonenumber)}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeOtp}
        value={otp}
        placeholder="one-time password"
        keyboardType="numeric"
      />
      <Button
        title="Login"
        color="#00000"
        onPress={() =>
          callingApi2(
            phonenumber,
            otp,
            props.setUserLoggedIn,
            props.setUsersName
          )
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;

const callingApi = (phonenumber) => {
  fetch("https://dev.stedi.me/twofactorlogin/" + phonenumber, {
    method: "POST",
    headers: {
      Accept: "application/json", // what i expect from the server
      "Content-Type": "application/text", // what i am sending
    },
  });
};

const callingApi2 = async (phonenumber, otp, setUserLoggedIn, setUsersName) => {
  const response = await fetch("https://dev.stedi.me/twofactorlogin", {
    method: "POST",
    headers: {
      Accept: "application/text",
      "Content-Type": "application/text",
    },
    body: JSON.stringify({
      phoneNumber: phonenumber,
      oneTimePassword: otp,
    }),
  });
  const token = await response.text();

  console.log("token", token);
  const response2 = await fetch("https://dev.stedi.me/validate/" + token, {
    method: "GET",
    headers: {
      Accept: "application/text",
      "Content-Type": "application/text",
    },
  });
  const email = await response2.text();

  console.log("email", email);

  const statuscode = response.status;
  if (statuscode != 200) {
    Alert.alert("Invalid Login");
  } else {
    setUserLoggedIn(true);
    setUsersName(email);
  }
};
