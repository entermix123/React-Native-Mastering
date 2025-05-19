import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
//components

const Signup = (props) => {
  return (
    <>
      <View>
        <Text style={styles.text}>Signup Screen</Text>
        <Button
          title="Navigate to Login"
          onPress={() => props.navigation.navigate("Login")}
        ></Button>
      </View>
    </>
  );
};

//styling
const styles = StyleSheet.create({
  text: {
    color: "hotpink",
  },
});
export default Signup;
