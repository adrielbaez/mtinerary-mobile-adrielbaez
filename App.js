import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './navigation/Drawer';
import { applyMiddleware, createStore } from 'redux';
import mainReducer from './redux/reducers/mainReducer'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const myStore = createStore(mainReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={myStore}>
      <PaperProvider>
        <NavigationContainer>
          <Drawer />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
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
