import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'

const Comments = ({texto}) => {
    const [comment, setComment] = useState('')

    return (
        <View >
            <Text>{texto}</Text>
        </View>
    );
}

export default Comments;