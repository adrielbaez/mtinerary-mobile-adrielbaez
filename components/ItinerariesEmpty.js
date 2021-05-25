import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';


const ItinerariesEmpty = ({ texto, imagen, city }) => {
    let image = { uri: imagen }
    let cityName = city ? city : null
    return (
        <ImageBackground source={image} style={{ width: '100%', alignItems: 'center', height: 400, justifyContent: 'center', marginBottom: 15 }}>
            <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)',borderRadius:40}}>
                <Text style={{ fontSize: 30, padding: 30, color:'white', fontWeight:'bold' }}>{texto + ' '+(cityName && cityName)}</Text>
            </View>
        </ImageBackground>
    );
}

export default ItinerariesEmpty;