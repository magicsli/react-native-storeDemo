/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Dimensions,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from '@/page/index'
import Scroll from '@/page/scorll'

const Stack = createStackNavigator();



const App: () => React$Node = () => {
  return (
    <View style={styles.mianView}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.mianView}>
          <Stack.Navigator initialRouteName="Index">
            <Stack.Screen name="Index" component={Index} />
            <Stack.Screen name="Scroll" component={Scroll} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  mianView: {
    flex: 1,
  }
})

export default App;
