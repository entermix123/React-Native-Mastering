// import Libraries
import React from "react";
import {Text, View, Button } from "react-native";

// components
const Signup = (props) => {
  return (
    <>
      <View>
        <Text> Signup Screen </Text>
        <Button title="Navigate to Login" onPress={() => props.navigation.navigate("Login") }
        />
      </View>
    </>
  );
};

export default Signup;