import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CallToAction from './components/CallToAction';
import Home from './components/Home';

export default function App() {
  return (
    <>
    <StatusBar/>
    <ScrollView>
      <Home />
    </ScrollView>
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
