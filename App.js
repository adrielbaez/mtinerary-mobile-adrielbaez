import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <>
    <StatusBar/>
      {/* <Welcome/> */}
      <Home/>
    </>
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
