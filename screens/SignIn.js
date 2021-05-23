import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView,Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
const SignIn = (props) => {
    
    const [userLogin, setUserLogin]= useState({email:'', password: ''})
    const readInput = (e, field)=>{
        setUserLogin({
            ...userLogin,
            [field]: e
        })
    }
    const sendDataUser = async (e)=>{
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
    console.log(props.userLogged);
    return (
        <View style={{justifyContent:'center', alignItems:'center', height:'100%'}}>
            <Text>{props.userLogged ?props.userLogged.firstName :null}</Text>
            <View style={[globalStyles.allScreem, { width: '90%' }]}>
                <TextInput label="Your Mail" mode="outlined" value={userLogin.email} onChangeText={(e)=> readInput(e, 'email')}/>
                <TextInput label="Your Password"  mode="outlined" value={userLogin.password} onChangeText={(e)=> readInput(e, 'password')}/>
            </View>
            <Button style={globalStyles.botonesMedium} mode="contained" color="blue" onPress={sendDataUser} >Sign In</Button>
        </View>
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