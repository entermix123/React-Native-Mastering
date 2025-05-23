// import Libraries
import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Alert } from "react-native";
// import Login from "./screen/Login.js";
// import Signup from "./screen/Signup.js";

// components
const App = () => {

  // let newData = "Josh";                         /* Set props in the main element */  
  const [ user, setUser ] = useState("Joe");
  const [ data, setData ] = useState("Sam");
  const [ newData, SetnewData ] = useState("Divak")

  function updateName() {  
    setUser("Carlos");  
    setData("Peter");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{user}</Text>
      <Text style={styles.text}>{data}</Text>
      <Button title="Press Here" color="red" onPress={updateName}        /* mandatory prop is "title="title text" onPress is event handler */
      />
      <Propscomponent newData={newData} />
      <Button title="Change component data true props" color="gray" onPress={() => SetnewData('Pesho')}        /* mandatory prop is "title="title text" onPress is event handler */
      />
    </View>
  );
};


const Propscomponent = (props) => {
  return (
    <>
      <View style={styles.second}>
        <Text style={styles.text}> Second component </Text>
        <Text style={styles.text}> {props.newData}  </Text>        
      </View>
    </>
  );
};

//styling
const styles = StyleSheet.create({
  container: {
    color: "red",
    backgroundColor: "pink",
  },
  second: {
    color: "red",
    backgroundColor: "green",
    height: 100,
  },
  text: {
    fontWeight: "bold",
    color: "red",
  },
});

export default App;