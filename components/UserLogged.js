import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground,Image, ScrollView, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
const UserLogged = ({userPicture}) => {
    const image={uri: userPicture}
    return (
        <View style={globalStyles.contenedorUser}>
            <Image style={globalStyles.imgUser} source={image}></Image>
        </View>
    );
}

export default UserLogged;