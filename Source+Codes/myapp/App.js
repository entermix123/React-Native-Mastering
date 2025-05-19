import React from "react";
import { Text, View, Button } from "react-native";
import Styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Login from "./screen/Login";
import Signup from "./screen/Signup";
import Picker from "./screen/Picker";

const Tab = createBottomTabNavigator();

// const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <>
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: () => <Button title="left" />,
              headerRight: () => <Button title="Right" />,

              title: "Users",
              headerStyle: {
                backgroundColor: "yellow",
              },
              headerTintColor: "gray",
              headerTitleStyle: {
                fontSize: 30,
              },
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              title: "Singup Users",
              headerStyle: {
                backgroundColor: "green",
              },
              headerTintColor: "red",
              headerTitleStyle: {
                fontSize: 20,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="login" size={35} color="gray" />
              ),
            }}
          />
          <Tab.Screen
            name="Signup"
            component={Signup}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="lock-open" size={35} color="gray" />
              ),
            }}
          />
          <Tab.Screen
            name="Color-picker"
            component={Picker}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="colorize" size={35} color="gray" />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
