import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";
const Login = (props) => {
  const [phonenumber, onChangeNumber] = React.useState(null);
  const [otp, onChangeOtp] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={(phonenumber) => onChangeNumber(phonenumber)}
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
        onChangeText={(otp) => onChangeOtp(otp)}
        value={otp}
        placeholder="one-time password"
        keyboardType="numeric"
      />
      <Button
        title="Login"
        color="#00000"
        onPress={() => callingApi2(phonenumber, otp, props.setUserLoggedIn)}
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
  fetch('https://dev.stedi.me/twofactorlogin/'+phonenumber, {
    method: 'POST',
      headers: {
        Accept: 'application/json',
          'Content-Type': 'application/text'
  },
  });
}

const callingApi2 = (phonenumber, otp, setUserLoggedIn) => {
  setUserLoggedIn(true);
  fetch('https://dev.stedi.me/twofactorlogin', {
    method: 'POST',
      headers: {
       Accept: 'application/json',
        'Content-Type': 'application/text'
    },
      body: JSON.stringify({
        phoneNumber: phonenumber,
        oneTimePassword: otp
      })
    });
  }

