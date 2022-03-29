import React, { useContext } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { UserContext } from "./App";

function AppName() {
  const {usersName} = useContext(UserContext);
  return (
    (<View style={styles.appName}></View>),
    (<Text> Welcome! {usersName}</Text>)
  );
}

export default AppName;

const styles = StyleSheet.create({
  appName: {
    paddingLeft: 20,
  },
  text: {
    color: "white",
    fontWeight: "600",
    fontSize: 30,
  },
});
