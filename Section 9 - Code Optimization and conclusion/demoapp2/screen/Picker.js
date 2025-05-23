import React, { useState } from "react";
import { Text, View, Button, Alert } from "react-native";

const Picker = (props) => {

    const [boxColor, setboxColor] = useState("yellow");

    const randomColor = () => {                             // set random picker function
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red},${green},${blue})`;
    };

    const onPickColorPress = () => {                        // set on click button alert event
        const boxColor = randomColor();
        setboxColor(boxColor);
        Alert.alert("Random Color", randomColor());
    };

    return (
        <>
            <View>
                <Button
                    title="Color Picker"
                    onPress={() => {                        // set on click function in the button element
                        onPickColorPress();
                    }}
                />
                <View>
                    <Text
                        style={{
                            backgroundColor: boxColor,
                            width: 300,
                            height: 300,
                            marginTop: 50,
                            marginLeft: 60,
                            borderRadius: 50,
                        }}
                    ></Text>
                </View>
            </View>
        </>
    );
};

export default Picker;
