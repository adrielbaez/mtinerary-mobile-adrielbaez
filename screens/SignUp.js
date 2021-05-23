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
    const [countries, setCountries] = useState([]);
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
    useEffect(() => {
        fetchCountries()
    }, [])
    const fetchCountries = async () => {
        const response = await axios('https://restcountries.eu/rest/v2/all');
        setCountries(response.data)
    }

    return (
        <ScrollView>
            <View style={{marginTop:10, justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <View style={[globalStyles.allScreem, { width: '90%' }]}>
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
                        <SelectPicker default='Choose a country' label='Choose a country' placeholder='Choose a country' onValueChange={(e) => readInput(e, 'country')}>
                            {countries ? countries.map((country, index) => {
                                return (
                                    <SelectPicker.Item label={country.name} value={country.name} key={country.name} >{country.name}</SelectPicker.Item>
                                )
                            }) : null}
                        </SelectPicker>
                    </View>
                </View>
                <Button style={globalStyles.botonesMedium} mode="contained" color="blue" onPress={sendDataUser} >Sign Up</Button>
            </View>
        </ScrollView>
    );
}

const mapDispatchToProps = {
    createNewUser: authActions.createNewUser
}

export default connect(null, mapDispatchToProps)(SignIn)