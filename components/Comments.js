import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit, faHeart, faMoneyBill, faStopwatch, faTimesCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TextInput, Button } from 'react-native-paper';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'

const Comment = ({ comment, userLogged, idItinerary, deleteCommentAction, updateCommentAction }) => {
    const [visible, setVisible] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')

    const editComment = () => {
        setVisible(!visible)
        setUpdatedComment(comment.comment)
    }
    const commentUpdate = async () => {
        if (updatedComment === '') {
            Alert.alert(
                "Comment Empty",
                `you can’t send an empty comment`
            )
        }
        updateCommentAction(updatedComment, comment._id, idItinerary, userLogged.token)
        setVisible(!visible)
    }
    const deleteComment = () => {
        Alert.alert(
            "Delete Comment",
            `Are you sure you want to delete this comment?`,
            [
                {text: 'YES', onPress: () => {
                    deleteCommentAction(comment._id, idItinerary, userLogged.token)
                }},
                {text: 'NO'}
            ]
        )
        
    }
    return (
        <View style={{ flexDirection: 'row', margin: 10 }}>
            <View style={{ marginRight: 10 }}>
                <Image source={{ uri: comment.userPicture }} style={{ width: 50, height: 50, borderRadius: 20 }} />
            </View>
            <View style={{ backgroundColor: '#F6F6F6', borderRadius: 20, padding: 10 }}>
                {visible ?
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <View>
                            <TextInput style={{width: 200}} onChangeText={(e) => setUpdatedComment(e)} value={updatedComment} />
                            <Button mode="contained" color="#E7B61B" onPress={commentUpdate} >Update</Button>
                        </View>
                        <View >
                            <FontAwesomeIcon icon={faTimesCircle} style={{color:'red'}} onPress={() => setVisible(!visible)} size={30} />
                        </View>
                    </View>
                    : <View >
                        <Text style={{ color: '#00d4c5',fontSize:20 }}>{comment.firstName}</Text>
                        <Text style={{ fontSize:20 }}>{comment.comment}</Text>
                        {userLogged &&
                            userLogged.firstName === comment.firstName &&
                            <View style={{flexDirection:'row', marginTop:10}} >
                                <FontAwesomeIcon icon={faEdit} onPress={editComment} size={30} style={{marginRight:10}} />
                                <FontAwesomeIcon icon={faTrash} onPress={deleteComment} size={30} />
                            </View>
                        }
                    </View>
                }
            </View>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        cities: state.citiesReducer.allCities,
        itineraries: state.itinerariesReducer.intinerariesCity,
        userLogged: state.authReducer.userLogged
    }
}
const mapDispatchToProps = {
    deleteCommentAction: itinerariesActions.deleteComment,
    updateCommentAction: itinerariesActions.updateComment
}


export default connect(mapStateToProps, mapDispatchToProps)(Comment)