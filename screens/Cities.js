import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesAction'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import axios from 'axios';
const Cities = (props) => {
    useEffect(() => {
        props.loadCities()
    }, [])

    return (
        <ScrollView>
            <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Cities</Text>
            <TextInput style={styles.input} placeholder="Searh Cities" keyboardType="name-phone-pad" onChangeText={(e) => props.searchCities(e)} />
            {props.loading
                ? <Text>cargando....</Text>
                : props.newCities.length === 0
                    ? <Text>no hay Cities</Text>
                    : props.newCities.map(city => {
                        return (
                            <View key={city._id} style={[styles.card, { alignItems: 'center' }]}>
                                <View>
                                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{city.city} - {city.country}</Text>
                                </View>
                                <Image source={{ uri: city.src }} style={styles.imageCity}></Image>
                                <View style={{ width: '95%' }}>
                                    <Text style={{ textAlign: 'justify', fontSize: 15 }}>{city.description}</Text>
                                </View>
                                <View style={styles.boton}>
                                    <Text onPress={() => props.navigation.navigate('itineraries', { idCity: city._id })}>Itinerarios {city.city}</Text>
                                </View>
                            </View>
                        )
                    })
            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    boton: {
        textAlign: 'center',
        backgroundColor: '#90ee90',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        marginBottom: 30,
        padding: 10,
    },
    card: {
        width: '100%',
        marginBottom: 10
    },
    imageCity: {
        width: '95%',
        height: 200,
    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: 'blue',
        textAlign: 'center'

    }
})

const mapStateToProps = state => {
    return {
        newCities: state.citiesReducer.newCitiesCurrent,
        allCities: state.citiesReducer.allCities,
        loading: state.citiesReducer.loading
    }
}
const mapDispatchToProps = {
    loadCities: citiesActions.loadCities,
    searchCities: citiesActions.searchCities
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)