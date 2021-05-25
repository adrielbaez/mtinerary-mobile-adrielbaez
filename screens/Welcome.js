import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { Button} from 'react-native-paper';
const Welcome = (props) => {
    const image = { uri: 'https://i.imgur.com/CSbOBmJ.jpg' }
    const imageLogo = { uri: 'https://i.imgur.com/Dq3x1hl.png' }
    return ( 
        <>
            <ImageBackground source={image} style={styles.containertHero}>
                {/* <Image source={imageLogo} style={styles.logo}></Image> */}
                {/* <View style={styles.textContent}>
                    <Text style={styles.title}>MyTinerary</Text>
                    <Text style={{fontSize:20, color:'white', textAlign:'center'}}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
                </View> */}
                <Button style={styles.boton} mode="contained" color="#0BC6C3" onPress={()=> props.navigation.navigate('home')}>Get Started</Button>
            </ImageBackground>
        </>
     );
}
const styles = StyleSheet.create({
    containertHero: {
      height: '100%',
      alignItems:'center',
      justifyContent: 'space-around'
    },
    logo:{
        width: 300,
        height: 300,
    },
    boton:{
        width: 200,
        borderRadius: 50,
        marginTop: 350,
        padding:10
        // marginBottom: 50,
    },
    textContent:{
        width:'85%',
        alignItems:'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius:40,
        padding: 10
    },
    title:{
        fontSize: 60,
        color: 'white'
    }
})
export default Welcome;