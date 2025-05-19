import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
const Login = (props) => {
  const [userName, setuserName] = useState("");

  return (
    <View>
      <ScrollView>
        <Text>Login Screen</Text>
        {/* <Button
        title="Navigate to signup"
        onPress={() => props.navigation.navigate("Signup")}
      ></Button> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setuserName(text)}
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => setuserName("")}>Click Here</Text>
        </TouchableOpacity>
        <Text>Your UserName is::{userName}</Text>

        <Text>Login Screen</Text>
        {/* <Button
        title="Navigate to signup"
        onPress={() => props.navigation.navigate("Signup")}
      ></Button> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setuserName(text)}
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => setuserName("")}>Click Here</Text>
        </TouchableOpacity>
        <Text>Your UserName is::{userName}</Text>
        <Text>Login Screen</Text>
        {/* <Button
        title="Navigate to signup"
        onPress={() => props.navigation.navigate("Signup")}
      ></Button> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setuserName(text)}
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => setuserName("")}>Click Here</Text>
        </TouchableOpacity>
        <Text>Your UserName is::{userName}</Text>
        <Text>Login Screen</Text>
        {/* <Button
        title="Navigate to signup"
        onPress={() => props.navigation.navigate("Signup")}
      ></Button> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setuserName(text)}
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => setuserName("")}>Click Here</Text>
        </TouchableOpacity>
        <Text>Your UserName is::{userName}</Text>
        <Text>Login Screen</Text>
        {/* <Button
        title="Navigate to signup"
        onPress={() => props.navigation.navigate("Signup")}
      ></Button> */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setuserName(text)}
        />
        <TextInput style={styles.input} placeholder="Password" />
        <TouchableOpacity style={styles.button}>
          <Text onPress={() => setuserName("")}>Click Here</Text>
        </TouchableOpacity>
        <Text>Your UserName is::{userName}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: "red",
    borderWidth: 5,
    padding: 10,
    margin: 10,
    backgroundColor: "gray",
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 12,
    marginLeft: 130,
  },
});
export default Login;
