import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Alert } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions'
import SelectPicker from 'react-native-form-select-picker';
import axios from 'axios';
const SignIn = (props) => {
    const [newUser, setNewUser] = useState({ firstName: '', lastName: '', email: '', password: '', userPicture: '', country: '' })
    const [errores, setErrores] = useState({ firstName: '', lastName: '', email: '', password: '', userPicture: '' })
    const readInput = (e, field) => {
        setNewUser({
            ...newUser,
            [field]: e
        })
    }

    const sendDataUser = async (e) => {
        e.preventDefault()
        if (Object.values(newUser).some(valor => valor === "")) {
            // setMensajeError({ success: true, mensaje: 'All fields are required' })
            Alert.alert('All field are required')
            return false;
        }
        setErrores({ firstName: '', lastName: '', email: '', password: '', userPicture: '' })
        let response = await props.createNewUser({ ...newUser, firstName: newUser.firstName.trim(), lastName: newUser.lastName.trim() })
        if (response) {
            console.log(response)
            if (!response.success) {
                response.details.map(error => {
                    return setErrores((erroresAnteriores) => {
                        return { ...erroresAnteriores, [error.context.label]: error.message }
                    })
                })
                return false
            }
        }
        props.navigation.navigate('home')
    }
  

    let image = { uri: 'https://i.imgur.com/y8uLWKU.jpg' }
    const countries =['Argentina', 'Brazil', 'Chile','China', 'Colombia','England','France','Germany','Italy', 'Japan','Mexico','Peru','Poland', 'United States Of America', 'Uruguay']
    return (
        <ScrollView>
            <ImageBackground source={image} style={{ width: '100%', minHeight: 840, justifyContent: 'center', alignItems: 'center' }}>

                <View style={{width: '90%', marginTop: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                    <View style={[globalStyles.allScreem,{ width: '90%' } ]}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 30, color: 'black', textAlign: 'center' }}>Mytinerary</Text>
                        </View>
                        <TextInput label="First Name" mode="outlined" value={newUser.firstName} onChangeText={(e) => readInput(e, 'firstName')} />
                        {errores.firstName !== '' ? (<Text style={globalStyles.messageError}>{errores.lastName}</Text>) : null}
                        <TextInput label="Last Name" mode="outlined" value={newUser.lastName} onChangeText={(e) => readInput(e, 'lastName')} />
                        {errores.lastName !== '' ? (<Text style={globalStyles.messageError}>{errores.lastName}</Text>) : null}
                        <TextInput label="Your Mail" mode="outlined" value={newUser.email} onChangeText={(e) => readInput(e, 'email')} />
                        {errores.email !== '' ? (<Text style={globalStyles.messageError}>{errores.lastName}</Text>) : null}
                        <TextInput label="Your Password" mode="outlined" secureTextEntry value={newUser.password} onChangeText={(e) => readInput(e, 'password')} />
                        {errores.password !== '' ? (<Text style={globalStyles.messageError}>{errores.lastName}</Text>) : null}
                        <TextInput label="Your Picture Profile" mode="outlined" value={newUser.userPicture} onChangeText={(e) => readInput(e, 'userPicture')} />
                        {errores.userPicture !== '' ? (<Text style={globalStyles.messageError}>{errores.lastName}</Text>) : null}
                        <View style={{ alignItems: 'center' }}>
                            <SelectPicker 
                            style={globalStyles.picker}
                             default='Choose a country' 
                             label='Choose a country' 
                             placeholder='Choose a country' 
                             doneButtonTextStyle={{textAlign:'center',color: '#1976D2',fontWeight: '600',fontSize:16}}
                             titleTextStyle={{textAlign:'center',color:'black',fontWeight:'bold',fontSize:18}}
                             onValueChange={(e) => readInput(e, 'country')}>
                                {countries ? countries.map((country, index) => {
                                    return (
                                        <SelectPicker.Item label={country} value={country} key={country} >{country}</SelectPicker.Item>
                                    )
                                }) : null}
                            </SelectPicker>
                        </View>
                    </View>
                    <Button style={globalStyles.botonesMedium} mode="contained" color="blue" onPress={sendDataUser} >Sign Up</Button>
                    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', width: '90%' }}>
                        <Text style={{ fontSize: 15, color: 'black', textAlign: 'center' }}>Do you have an account at Mytinerary?</Text>
                        <Button style={globalStyles.botonesMedium} color="blue" onPress={() => props.navigation.navigate('signIn')} >Sign In</Button>
                    </View>
                </View>

            </ImageBackground>
        </ScrollView>
    );
}

const mapDispatchToProps = {
    createNewUser: authActions.createNewUser
}

export default connect(null, mapDispatchToProps)(SignIn)