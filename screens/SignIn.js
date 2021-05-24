import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
const SignIn = (props) => {

    const [userLogin, setUserLogin] = useState({ email: '', password: '' })
    const readInput = (e, field) => {
        setUserLogin({
            ...userLogin,
            [field]: e
        })
    }
    const sendDataUser = async (e) => {
        e.preventDefault()
        if (Object.values(userLogin).some(valor => valor === "")) {
            // setMensajeError({ success: true, mensaje: 'All fields are required' })
            Alert.alert('All field are required')
            return false;
        }
        let response = await props.iniciarSesion(userLogin)
        if (response) {
            if (!response.success) {
                setMensajeError({ success: true, mensaje: response.error })
                return false
            }
        }
        Alert.alert('Hi' + 'welcome to MyTinerary! 🌎🌞')
        props.navigation.navigate('home')
    }
    let image = { uri: 'https://i.imgur.com/2Xcbrak.jpg' }
    // console.log(props.userLogged);
    return (
        <ImageBackground source={{ uri: 'https://i.imgur.com/2Xcbrak.jpg' }} resizeMode="cover" style={[globalStyles.signIn]} >
            <View style={[globalStyles.boxWithShadow, { justifyContent: 'center', alignItems: 'center' }]}>

                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '90%' }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 30, color: 'black', textAlign: 'center' }}>Mytinerary</Text>
                    </View>
                    <View style={[globalStyles.allScreem, { width: '90%', marginBottom:20 }]}>
                        <TextInput keyboardType="email-address" label="Your Mail" mode="outlined" value={userLogin.email} onChangeText={(e) => readInput(e, 'email')} />
                        <TextInput keyboardType="email-address" label="Your Password" mode="outlined" secureTextEntry value={userLogin.password} onChangeText={(e) => readInput(e, 'password')} />
                    </View>
                    <Button style={globalStyles.botonesMedium} mode="contained" color="blue" onPress={sendDataUser} >Sign In</Button>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '90%' }}>
                        <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>Don’t you have an account at Mytinerary?</Text>
                        <Button style={globalStyles.botonesMedium} color="blue" onPress={() => props.navigation.navigate('signUp')} >Create Account</Button>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}
const mapStateToProps = (state) => {
    return {
        userLogged: state.authReducer.userLogged
    }
}

const mapDispatchToProps = {
    iniciarSesion: authActions.iniciarSesion
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)