// import Libraries
import React from "react";
import {Text, StyleSheet, View } from "react-native";

// components
const Login = () => {
  return (
    <>

        <Text style={styles.text}> Login Form </Text>

    </>
  );
};

//styling
const styles = StyleSheet.create({
  text: {
    // felx: 1,
    color: "green",
    // backgroundColor: "gray",
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Login;