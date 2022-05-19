/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';

import { useState, useEffect } from 'react'
import { supabase } from 'supabase-react/src/supabaseClient'
import Auth from 'supabase-react/src/Auth'
import Account from 'supabase-react/src/Account'



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
