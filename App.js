/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert,
  Platform
} from 'react-native';

import {
  FrontPage,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  return (
    <FrontPage />);
};


export default App;
