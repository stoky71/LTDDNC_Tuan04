import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VsmartBlue from './src/components/VsmartBlue'
import FourColors from './src/components/FourColors'

const Stack = createNativeStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={VsmartBlue}/>
        {/* <Stack.Screen name="VsmartSilver" component={VsmartSilver} options={{title: 'Silver Vsmart'}}/>
        <Stack.Screen name="VsmartRed" component={VsmartRed} options={{title: 'Red Vsmart'}}/> */}
        <Stack.Screen name="FourColors" component={FourColors}/>
        {/* <Stack.Screen name="VsmartBlack" component={VsmartBlack} options={{title: 'Black Vsmart'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App  

