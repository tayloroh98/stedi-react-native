import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const Login = () => {
  const [phonenumber, onChangeNumber] = React.useState("Useless Text");
  const [otp, onChangeOtp] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeNumber={onChangeNumber}
        value={phonenumber}
      />
      <TextInput
        style={styles.input}
        onChangeNumber={onChangeOtp}
        value={otp}
        placeholder="one-time password"
        keyboardType="numeric"
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


fetch('https://dev.stedi.me/twofactorlogin/'+phonenumber, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/text'
  },
  });


