// import Libraries
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Login from "./screen/Login";
import Signup from "./screen/Signup.js";

// var; types: Strings, Numbers, Boolean, Array, Object, Null
var a = 20;
a = 30;
// If we print a , 30 will be printed, a is overwrited
var a = 40
// If we print a , 40 will be printed, a is overwrited

// let; 
let b = 50;
b = 60;
// If we print b , 60 will be printed, a is overwrited
// let b = 60;  redeclaring b will respond as error, cannot redeclare let variable

// const; we can not overwrite and redeclate it, respond as error
const c = 100
// const is often used because mistakes like overwrite ot redeclate the same variable atomatically return error


// components
const App = () => {
  return (
    <>
        <View style={styles.text}>
          <Text style={styles.container}> Meta Brains </Text>
          <Login />
          <Signup />
          <View style={{ height: 16 }} />                 /* empty line */
          <Text style={styles.container}> {a} </Text>    
          <View style={{ height: 16 }} />                 /* empty line */
          <Text style={styles.container}> {b} </Text>       
          <View style={{ height: 16 }} />                 /* empty line */
          <Text style={styles.container}> {c} </Text>       
        </View>
    </>
  );
};

//styling
const styles = StyleSheet.create({
  text: {
    felx: 1,
    color: "red",
    backgroundColor: "pink",
    height: 900,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    felx: 1,
    color: "red",
  },
});

export default App;