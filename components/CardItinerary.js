import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'
import { faHeart, faMoneyBill, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Button, TextInput } from 'react-native-paper';
import globalStyles from '../styles/globalStyles'
import Comments from './Comments';
import ContentEmpty from '../components/ContentEmpty'
import Icon from 'react-native-vector-icons/Ionicons';
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
                <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold', textAlign: 'center' }}>{itinerary.title}</Text>
                {/* nombre y pic del autor */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={{ uri: itinerary.authorPicture }} style={styles.authorPic}></Image>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{itinerary.authorName}</Text>
                </View>
                {/* precio y hora*/}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '90%' }}>
                    <View style={{ width: '100%', margin: 10, flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Price:</Text>
                            {new Array(itinerary.price).fill(0).map((elemento, index) => <FontAwesomeIcon size={30} key={index + 1} icon={faMoneyBill} style={[styles.icon, { margin: 5 }]} />)}
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Duration:</Text>
                            {new Array(itinerary.duration).fill(0).map((elemento, index) => <FontAwesomeIcon size={30} key={index + 2} icon={faStopwatch} style={styles.iconReloj} />)}
                        </View>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', margin: 10 }}>

                        {itinerary.usersLiked.includes(liked)
                            ? <FontAwesomeIcon size={60} icon={faHeart} style={styles.icon2} onPress={props.userLogged ? dislikes : null} />
                            : <FontAwesomeIcon size={60} icon={faHeart} style={styles.icon3} onPress={props.userLogged ? addLike : () => Alert.alert('Likes', 'You have to be logged to like it')} />
                        }
                        <Text style={{ fontSize: 50 }}>{itinerary.usersLiked.length}</Text>
                    </View>
                </View>





                {/* hast */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    {itinerary.hashtags.map(hashtag => {
                        return <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 15 }} key={hashtag}>{hashtag}</Text>
                    })}
                </View>
                <View >
                    {view.show &&
                        <View>
                            <View>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 40, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 40, padding: 10 }}>Activities</Text>
                                <View style={{ alignItems: 'center' }}>
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
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 40, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderRadius: 40, padding: 10, marginTop: 20, marginBottom: 10 }}>Comments</Text>
                                <View >
                                    <View style={{ width: '80%' }}>
                                        {itinerary.comments.length === 0
                                            ? <ContentEmpty texto={'Not comments Yet'} />
                                            : itinerary.comments.map((comment, index) => {
                                                return <Comments key={index} comment={comment} userLogged={props.userLogged} idItinerary={itinerary._id} idCity={props.idCity} />
                                            })
                                        }
                                    </View>
                                    <View  >
                                        <TextInput placeholder={!props.userLogged ? "You need to be logged to comment!" : "Write a comment..."} value={comment} disabled={!props.userLogged && true} onChangeText={(e) => setComment(e)} />
                                        <Button mode="contained" color="#E7B61B" disabled={props.userLogged ? false : true} onPress={sendComment}>send</Button>
                                    </View>
                                </View>
                            </View>
                            <View style={{ alignItems: 'center', }}>
                            <Button style={globalStyles.botonesMedium} mode="contained" color="#E7B61B" onPress={changeStateBtn}>{view.textBtn}</Button>
                            </View>
                        </View>
                    }
                </View>
                    {!view.show && <Button style={globalStyles.botonesMedium} mode="contained" color="#E7B61B" onPress={changeStateBtn}>{view.textBtn}</Button>}
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    cardItinerary: {
        alignItems: 'center',
        backgroundColor: '#0BC6C3',
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
        width: 380,
        height: 250,
        justifyContent: 'flex-end',
        marginTop: 15
    },
    icon: {
        color: 'green',
    },
    icon2: {
        color: 'red',
    },
    icon3: {
        opacity: 0.7,
        marginRight: 8
    },
    iconReloj: {
        color: 'black'
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