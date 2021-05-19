import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import CallToAction from './CallToAction';

const Home = () => {
  const image = { uri: 'https://i.imgur.com/iJW5VBr.jpg' }
  return (
    <>
        <View style={styles.containertHero}>
        <ImageBackground source={image} style={styles.imgPortada}>
          <View style={styles.contentHero}>
            <View style={styles.textHeroContainer}>
              <Text style={[styles.textHero, styles.headingHero]}>MyTinerary</Text>
              <Text style={styles.textHero}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
            </View>
          </View>
        </ImageBackground>
        </View>
        <CallToAction />
    </>

  );
}

const styles = StyleSheet.create({
  containertHero: {
    height: 350,
  },
  imgPortada: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentHero: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.205)',
    alignItems: 'center',
    borderRadius: 400

  },
  textHeroContainer:{
    width:'70%'
  },
  headingHero:{
    fontSize: 40
  },
  textHero: {
    color: 'white'
  }
});
export default Home;

