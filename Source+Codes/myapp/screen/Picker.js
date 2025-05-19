import React, { useState } from "react";
import { Text, StyleSheet, View, Button, Alert } from "react-native";
//components

const Picker = (props) => {
  const [boxColor, setboxColor] = useState("yellow");
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  const onPickColorPress = () => {
    const newColor = randomColor();
    setboxColor(newColor);
    Alert.alert("Random Color", randomColor());
  };
  return (
    <>
      <View>
        <Button
          title="Color Picker"
          onPress={() => {
            onPickColorPress();
          }}
        />
        <View>
          <Text
            style={{
              backgroundColor: boxColor,
              width: 300,
              height: 300,
              marginTop: 20,
              marginLeft: 60,
              borderRadius: 50,
            }}
          ></Text>
        </View>
      </View>
    </>
  );
};

//styling

export default Picker;
