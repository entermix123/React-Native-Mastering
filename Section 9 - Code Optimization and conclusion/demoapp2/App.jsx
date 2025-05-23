import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Styles from "./style";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; /* set bottom navigation */
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"; /* set top navigation */
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Picker from "./screen/Picker";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen
                        name="Login"
                        component={Login}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="login"
                                    size={size}
                                    color="gray"
                                    /* size nomalize the icon size, the name must be available in the site of the library */
                                />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Signup"
                        component={Signup}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="account-plus"
                                    size={size}
                                    color="gray"
                                    /* size nomalize the icon size,  the name must be available in the site of the library */
                                />
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="Color-Picker"
                        component={Picker}
                        options={{
                            tabBarIcon: ({ color, size }) => (
                                <MaterialCommunityIcons
                                    name="palette"
                                    size={size}
                                    color="gray"
                                    /* size nomalize the icon size,  the name must be available in the site of the library */
                                />
                            ),
                        }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    );
};

// export
export default App;
