import React from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Map from '../components/Map';
import tw from 'tailwind-react-native-classnames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
    const Stack = createNativeStackNavigator();

    return (
        <KeyboardAvoidingView style={[tw`border-t border-gray-200 flex-shrink`, {flex: 1, justifyContent: "flex-end"}]} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>
        <View>
            <View style={tw`h-1/2`}>
                <Map />
            </View>

            <View style={tw`h-1/2`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="RideOptionsCard"
                        component={RideOptionsCard}
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({});
