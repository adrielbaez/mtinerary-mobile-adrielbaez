import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const CallToAction = () => {
    const image = { uri: 'https://i.imgur.com/TioarFw.png' }
    
    return (
        <>
            <View style={styles.container}>
                <View style={styles.containerText}>
                    <Text style={styles.textComplementary}>LOOKING FOR ITINERARIES?</Text>
                    <Text style={styles.textMain}>We Provide The Best Experience For You.</Text>
                    <Text style={styles.textComplementary}>With age, comes wisdom. With travel, comes understanding</Text>
                </View>
                <View style={styles.callToAction}>
                    <Image source={image} style={styles.imgCallToAction}></Image>
                </View>
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    container: {
        height: 550,
        marginTop:40,
        alignItems:'center',
    },
    containerText:{
        width: '80%',
    },
    callToAction:{
        width:100,
        height:100,
        marginTop: 10,
        alignItems:'center',
    },
    imgCallToAction:{
        width:250,
        height: 250,
        
    },
    textMain:{
        fontWeight:'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    textComplementary:{
        color: '#0094ef',
        fontSize: 20
    },
});
export default CallToAction;

