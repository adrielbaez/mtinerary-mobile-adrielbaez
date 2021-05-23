import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'
import { faHeart, faMoneyBill, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button,TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
import { add } from 'react-native-reanimated';
import Comments from './Comments';
const Itineraries = (props) => {
    const [view, setView] = useState({ show: false, textBtn: 'View More' })
    const [activities, setActivities] = useState([])
    const [liked, setLiked] = useState('')
    const [comment, setComment] = useState('')
    const { itinerary } = props

    useEffect(() => {
        if (props.userLogged) {
            setLiked(props.userLogged.idUser)
        }
    }, [])
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
    const addLike = () => {
        props.like(itinerary._id, props.userLogged.token)
    }
    const dislikes = () => {
        props.dislike(itinerary._id, props.userLogged.token)
    }
    const sendComment = async () => {
        if (comment === '') {
            Alert.alert('no puede mandar comentarios vacios')
            return false
        }
        await props.addComment(comment, props.userLogged.token, itinerary._id)
        setComment('')
    }
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
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>Price:{new Array(itinerary.price).fill(0).map((elemento, index) => <FontAwesomeIcon key={index + 1} icon={faMoneyBill} style={styles.icon} />)}</Text>
                    <Text>Duration: {new Array(itinerary.duration).fill(0).map((elemento, index) => <FontAwesomeIcon key={index + 2} icon={faStopwatch} style={styles.icon} />)}</Text>
                </View>



                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>

                    {itinerary.usersLiked.includes(liked)
                        ? <FontAwesomeIcon icon={faHeart} style={styles.icon2} onPress={props.userLogged ? dislikes : null} />
                        : <FontAwesomeIcon icon={faHeart} onPress={props.userLogged ? addLike : () => Alert.alert('no podes likear')} />
                    }
                    <Text>{itinerary.usersLiked.length}</Text>
                </View>





                {/* hast */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    {itinerary.hashtags.map(hashtag => {
                        return <Text key={hashtag}>{hashtag}</Text>
                    })}
                </View>
                {view.show &&
                    <View>
                        <View>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 40, padding: 10 }}>Activities</Text>
                            <View>
                                {activities.length === 0
                                    ? <ActivityIndicator size="large" color="black" />
                                    : activities.map(activity => {
                                        return (
                                            <ImageBackground key={activity.title} source={{ uri: activity.image }} style={styles.imgActivity}>
                                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 40, padding: 10 }}>{activity.title}</Text>
                                            </ImageBackground>
                                        )
                                    })
                                }

                            </View>
                        </View>
                        <View>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 40, padding: 10 }}>Comments</Text>
                            <View >
                                <View >
                                    {itinerary.comments.length === 0
                                        ? <Text>no hay comment</Text>
                                        : itinerary.comments.map((comment, index) => {
                                            return <Comments key={index} comment={comment} userLogged={props.userLogged} idItinerary={itinerary._id} idCity={props.idCity} />
                                        })                                      
                                    }
                                </View>
                                    <TextInput placeholder={!props.userLogged ? "You need to be logged to comment!" : "Write a comment..."} value={comment} disabled={!props.userLogged && true} onChangeText={(e) => setComment(e)} />
                                    <Button mode="contained" color="blue" onPress={sendComment}>send</Button>
                            </View>
                        </View>
                    </View>
                }
                <Button style={globalStyles.botonesMedium} mode="contained" color="blue" onPress={changeStateBtn}>{view.textBtn}</Button>

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
        marginTop: 15
    },
    icon: {
        color: 'green',
    },
    icon2: {
        color: 'red',
    }
})
const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.allCities,
        itineraries: state.itinerariesReducer.intinerariesCity,
        userLogged: state.authReducer.userLogged
    }
}
const mapDispatchToProps = {
    loadItineraries: itinerariesActions.loadItineraries,
    loadActivities: itinerariesActions.loadActivities,
    like: itinerariesActions.like,
    dislike: itinerariesActions.dislike,
    addComment: itinerariesActions.addComment,
}


export default connect(mapStateToProps, mapDispatchToProps)(Itineraries)