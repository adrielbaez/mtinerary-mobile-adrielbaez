import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'
import CardItinerary from '../components/CardItinerary';
import ItinerariesEmpty from '../components/ItinerariesEmpty';
const Itineraries = (props) => {
    const [city, setCity] = useState({})
    const [view, setView] = useState({show: false, textBtn: 'View More'})
    useEffect(() => {
        let cityDetails = props.cities.find(city => city._id === props.route.params.idCity)
        setCity(cityDetails)
        props.loadItineraries(props.route.params.idCity, null)
    }, [])

    return (
        <ScrollView>
            <ImageBackground source={{ uri: city.src }} style={{ height: 300 }}>
                <Text style={{ textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 40, padding: 10, fontSize: 45, fontWeight: 'bold', color: 'white' }}>{city.city}</Text>
            </ImageBackground>
            <Text style={{ marginTop: 20, fontSize: 20, color: 'black', textAlign: 'center' }}>Take a small break for coffee and enjoy</Text>
            {/* nombre itinerario */}
            {props.itineraries.length === 0
                ? <ItinerariesEmpty imagen={'https://i.imgur.com/PyTLbLP.jpg'} texto="We don't have itineraries for" city={city.city}/>
                : props.itineraries.map(itinerary => {
                    return (<CardItinerary key={itinerary._id} itinerary={itinerary} idCity={props.route.params.idCity}/>)
                })

            }
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    cardItinerary: {
        alignItems: 'center',
        backgroundColor: '#90ee90',
        marginTop: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    authorPic: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 5
    },
    activities: {
        width: 200,
        height: 200,
    },
    boton: {
        textAlign: 'center',
        backgroundColor: '#01ee90',
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 10,
        padding: 10,
    }
})
const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.allCities,
        itineraries: state.itinerariesReducer.intinerariesCity
    }
}
const mapDispatchToProps = {
    loadItineraries: itinerariesActions.loadItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)