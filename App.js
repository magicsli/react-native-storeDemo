/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'; //顶部
import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '@/page/login'; // 登录
import Scroll from '@/page/scorll'; // 滚动列表测试页面
import Register from '@/page/register'; // 注册页面

// import Index from "./IndexTest";

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.mianView}>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login"  component={Login}  options={{ title: "登录" }} />
            <Stack.Screen name="Register" component={Register} options={{title: "注册"}} />
            <Stack.Screen name="Scroll" component={Scroll} options={{title: "测试列表页"}} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mianView: {
    flex: 1,
  }
})

export default App;
