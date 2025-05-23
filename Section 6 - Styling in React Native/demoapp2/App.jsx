// import Libraries
import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Alert } from "react-native";
import Styles from "./style";
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
    <View style={Styles.container}>
      <Text style={Styles.text}>{user}</Text>
      <Text style={Styles.text}>{data}</Text>
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
      <View style={[Styles.second, { backgroundColor: "hotpaink" }]}>
        <Text style={Styles.text}> Second component </Text>
        <Text style={[Styles.text, { fontSize: 50, color: "gray"}]}> {props.newData}  </Text>        
      </View>
    </>
  );
};


export default App;