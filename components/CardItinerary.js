import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'
import { faCalendarTimes, faHourglass, faMoneyBill, faStopwatch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
const Itineraries = (props) => {
    const [view, setView] = useState({ show: false, textBtn: 'View More' })
    const [activities, setActivities] = useState([])
    const { itinerary } = props

    const changeStateBtn = async () => {
        if (view.show) {
            setView({
                show: !view.show,
                textBtn: 'View More'
            })
            return false
        }
        let respuesta = await props.loadActivities(itinerary._id)
        setActivities(respuesta)
        setView({
            show: !view.show,
            textBtn: 'View Less'
        })
    }
    console.log(activities);
    return (
        <ScrollView>
           
            <View key={itinerary._id} style={styles.cardItinerary}>
                <Text style={{ fontSize: 25, textAlign: 'center' }}>{itinerary.title}</Text>
                {/* nombre y pic del autor */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: itinerary.authorPicture }} style={styles.authorPic}></Image>
                    <Text style={{ fontSize: 20 }}>{itinerary.authorName}</Text>
                </View>
                {/* precio y hora*/}
                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                    <Text>Price:{new Array(itinerary.price).fill(0).map((elemento, index) =>  <FontAwesomeIcon key={index} icon={ faMoneyBill } style={styles.icon}/>)}</Text>
                    <Text>Duration: {new Array(itinerary.duration).fill(0).map((elemento, index) =>  <FontAwesomeIcon key={index} icon={ faStopwatch } style={styles.icon}/>)}</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text>{itinerary.usersLiked.length}</Text>
                </View>
                {/* hast */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom:20 }}>
                    {itinerary.hashtags.map(hashtag => {
                        return <Text>{hashtag}</Text>
                    })}
                </View>
                {view.show &&
                    <View>
                        <Text style={{color: 'white',textAlign: 'center', fontSize:25,  backgroundColor: 'rgba(0, 0, 0, 0.2)',borderRadius:40,padding: 10}}>Activities</Text>
                        <View>
                            {activities.length === 0
                                ? <ActivityIndicator size="large" color="black" />
                                : activities.map(activity => {
                                    return (
                                        <ImageBackground source={{ uri: activity.image }} style={styles.imgActivity}>
                                            <Text style={{color: 'white',textAlign: 'center', fontSize:20,  backgroundColor: 'rgba(0, 0, 0, 0.2)',borderRadius:40,padding: 10}}>{activity.title}</Text>
                                        </ImageBackground>
                                    )
                                })
                            }

                        </View>
                    </View>
                }
                <View style={styles.boton}>
                    <Text onPress={changeStateBtn}>{view.textBtn}</Text>
                </View>
            </View>
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
    },
    imgActivity: {
        width: 350,
        height: 250,
        justifyContent: 'flex-end',
        marginTop:15
    },
    icon:{
        color:'green',
    }
})
const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.allCities,
        itineraries: state.itinerariesReducer.intinerariesCity
    }
}
const mapDispatchToProps = {
    loadItineraries: itinerariesActions.loadItineraries,
    loadActivities: itinerariesActions.loadActivities
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)