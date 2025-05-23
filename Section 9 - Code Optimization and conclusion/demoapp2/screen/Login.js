// import Libraries
import React, { useState } from "react";
import {Text, View, Button, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

// components
const Login = (props) => {

  const [ userName, setUsernme] = useState("");


  return (
    <>
      <View>
        <ScrollView                       /*added ScrollView*/ 
        >
        <Text> Login Screen </Text>
        {/* <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        /> */}
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsernme(text)}  /* This is the field hook gor writing text */
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}   /* This is the touch button */ >                     
          <Text>Click Here</Text>                            
        </TouchableOpacity>
        <Text>Your Username is: {userName}</Text>             


        <Text> Login Screen </Text>
        {/* <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        /> */}
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsernme(text)}  /* This is the field hook gor writing text */
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}   /* This is the touch button */ >                     
          <Text>Click Here</Text>                            
        </TouchableOpacity>
        <Text>Your Username is: {userName}</Text>             


        <Text> Login Screen </Text>
        {/* <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        /> */}
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsernme(text)}  /* This is the field hook gor writing text */
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}   /* This is the touch button */ >                     
          <Text>Click Here</Text>                            
        </TouchableOpacity>
        <Text>Your Username is: {userName}</Text>             


        <Text> Login Screen </Text>
        {/* <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        /> */}
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsernme(text)}  /* This is the field hook gor writing text */
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}   /* This is the touch button */ >                     
          <Text>Click Here</Text>                            
        </TouchableOpacity>
        <Text>Your Username is: {userName}</Text>             


        <Text> Login Screen </Text>
        {/* <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        /> */}
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsernme(text)}  /* This is the field hook gor writing text */
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}   /* This is the touch button */ >                     
          <Text>Click Here</Text>                            
        </TouchableOpacity>
        <Text>Your Username is: {userName}</Text>             


        <Text> Login Screen </Text>
        {/* <Button title="Navigate to Signup" onPress={() => props.navigation.navigate("Signup") }
        /> */}
        <TextInput style={styles.input} placeholder="Username" onChangeText={(text) => setUsernme(text)}  /* This is the field hook gor writing text */
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}   /* This is the touch button */ >                     
          <Text>Click Here</Text>                            
        </TouchableOpacity>
        <Text>Your Username is: {userName}</Text>    
        </ScrollView>         
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "red",
    borderWidth: 3,
    padding: 10,
    margin: 10,
    backgroundColor: "lightgray",
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15,
    marginLeft: 130,
  },
})

export default Login;