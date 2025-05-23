// import Libraries
import React from "react";
import {Text, View, Button } from "react-native";

// components
const Login = (props) => {
  return (
    <>
      <View>
        <Text> Login Screen </Text>
        <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        />
      </View>
    </>
  );
};

export default Login;