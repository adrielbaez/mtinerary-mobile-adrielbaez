import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { connect } from 'react-redux';
import itinerariesActions from '../redux/actions/ItinerariesAction'

const Comment = ({ comment, userLogged, idItinerary,deleteCommentAction,updateCommentAction }) => {
    const [visible, setVisible] = useState(false)
    const [updatedComment, setUpdatedComment] = useState('')

    const editComment = () => {
        setVisible(!visible)
        setUpdatedComment(comment.comment)
    }
    const commentUpdate = async () => {
        if (updatedComment === '') {
            Alert.alert('comenta algo')
        }
                updateCommentAction(updatedComment, comment._id, idItinerary, userLogged.token)
                setVisible(!visible)  
    }
    const deleteComment = () => {
        deleteCommentAction(comment._id, idItinerary, userLogged.token)  
    }
    return (
        <View style={{flexDirection:'row', margin:10}}>
            <View style={{marginRight:10}}>
                <Image source={{uri: comment.userPicture}} style={{width:50, height:50, borderRadius:20}}/>
            </View>
            <View style={{backgroundColor:'#F6F6F6', borderRadius:20, padding:10}}>
            {visible ?
                <>
                    <View>
                        <TextInput onChangeText={(e) => setUpdatedComment(e)} value={updatedComment} />
                        <Button mode="contained" color="blue" onPress={commentUpdate} >editar</Button>                     
                    </View>
                    <View >
                        {/* <i className="fas fa-times-circle red icon-up" onClick={() => setVisible(!visible)}></i> */}
                    </View>
                </>
                : <View >
                    <Text style={{color:'#00d4c5'}}>{comment.firstName}</Text>
                    <Text>{comment.comment}</Text>
                    {userLogged &&
                        userLogged.firstName === comment.firstName &&
                        <View >
                           <Button mode="contained" color="blue" onPress={editComment} >editar</Button>
                           <Button mode="contained" color="blue" onPress={deleteComment} >borrar</Button>
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