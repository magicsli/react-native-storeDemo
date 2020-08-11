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

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView  style={styles.mianView}>
        <View>
          <Text> 
              当前屏幕宽度为: {Dimensions.get('window').width}; {'\n'}
              dw: {Dimensions.get('window').height};{'\n'}
              当前屏幕分辨率为: {Dimensions.get('window').scale};{'\n'}
          </Text>

        
        </View>
      </SafeAreaView> 
    </>
  );
};

const styles = StyleSheet.create({
  mianView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    borderLeftColor: '#ccc',
    borderLeftWidth: 20,
    borderStyle: 'dashed',
    
  }
})

export default App;
