import React from "react";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from "./screens/HomeScreen";
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from "./screens/MapScreen";
import tw from "tailwind-react-native-classnames";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
        <NavigationContainer>
          <SafeAreaProvider>
            {/* <KeyboardAvoidingView
              style={{flex: 1}}
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              enabled
              keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
            > */}
              <Stack.Navigator>
                <Stack.Screen
                  name="HomeScreen"
                  component={HomeScreen}
                  options={{
                    headerShown: false,
                  }}
                />

                <Stack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{
                    headerShown: false,
                  }}
                />

              </Stack.Navigator>
            {/* </KeyboardAvoidingView> */}
          </SafeAreaProvider>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
