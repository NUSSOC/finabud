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
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
  AnotherButton,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

function WelcomeButton() {
  var randomAlerts = 
  ["Are you bored? Find a friend to hang out with now!",
   "Click 'Match now' to begin!",
   "Remember to indicate your preferences for best results!",
   "There's plenty of people here waiting to meet you!",
   "You can flag a user if he/she makes you feel uncomfortable.",
   "Reach out to us if you face any issues!",
   "Always be courteous to others!",
   "Being proactive is the first step to making close friends!",
   "Sign in using your NUS-NET email address!",
   "Thank you for using our app!",
   "We hope you can find some new friends here! =)"];

  var min = 0;
  var max = randomAlerts.length - 1;

  return (
  <Button 
   title="Click for a random piece of advice!"
   color="#841584"
   accessibilityLabel = "Learn more about this application"
   onPress={() => Alert.alert(randomAlerts[Math.floor(Math.random() * (max - min + 1)) + min])}
/>);
}






const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <>

    <WelcomeButton />
    
    <AnotherButton />

    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One is here">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits. Hmm? 
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


export default App;
