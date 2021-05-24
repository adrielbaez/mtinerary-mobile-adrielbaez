import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesAction'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph,TextInput } from 'react-native-paper';
import axios from 'axios';
const Cities = (props) => {
    useEffect(() => {
        props.loadCities()
    }, [])

    return (
        <ScrollView>
            {/* <Text style={{ fontSize: 40, fontWeight: 'bold', textAlign: 'center' }}>Cities</Text> */}
            <View style={{margin:10}}>
            <TextInput mode="flat" selectionColor="black" underlineColor="#0BC6C3" style={styles.input}  placeholder="Searh Cities" keyboardType="name-phone-pad" onChangeText={(e) => props.searchCities(e)} />
            </View>
            {props.loading
                ? <ActivityIndicator size="large" color="black" />
                : props.newCities.length === 0
                    ? <Text>no hay Cities</Text>
                    : props.newCities.map(city => {
                        return (
                                <Card key={city._id} style={{backgroundColor:'#0BC6C3', margin:10}}>
                                    <Card.Content>
                                        <Title style={{ fontSize: 25, color: 'white', textAlign: 'center', marginBottom:10, marginTop:10 }}>{city.city} - {city.country}</Title>
                                        <Card.Cover source={{ uri: city.src }} />
                                        <Paragraph  style={{ fontSize: 15, color: 'white', textAlign: 'center', marginBottom:10, marginTop:10 }}>{city.description}</Paragraph>
                                        <Button mode="contained" color="#E7B61B" dark={true} onPress={() => props.navigation.navigate('itineraries', { idCity: city._id })}>Itineraries {city.city}</Button>
                                    </Card.Content>
                                </Card>
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
        textAlign: 'center',
        borderColor:'#0BC6C3',
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