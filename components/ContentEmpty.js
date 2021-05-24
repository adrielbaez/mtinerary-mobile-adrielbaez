import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';


const ContentEmpty = ({texto}) => {

    return (
        <View style={{backgroundColor:'rgba(215, 214, 214, 0.733)', width:390, alignItems:'center', height:100, justifyContent:'center', marginBottom:15}}>
            <Text style={{fontSize:30}}>{texto}</Text>
        </View>
    );
}

export default ContentEmpty;