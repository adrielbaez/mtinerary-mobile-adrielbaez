import axios from 'axios'


const itinerariesActions = {
    loadItineraries: (idCity, history) => {
        return (dispatch) => {
            axios.get(`https://mytinerary-adriel.herokuapp.com/api/city/itineraries/${idCity}`)
                .then(response => dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta }))
                .catch(error => {
                   console.log(error);
                })
        }
    },
    loadActivities: (idItinerary) => {
        return async (dispatch) => {
            try {
                const respuesta = await axios.get(`https://mytinerary-adriel.herokuapp.com/api/activities/itinerary/${idItinerary}`)
                if (respuesta.data.success) {
                    return respuesta.data.respuesta
                }
            } catch (error) {
                console.log(error);
            }
        }
    },
    loadLikes: (idItinerary, userToken) => {

        return async (dispatch, getState) => {
            try {
                const response = await axios.put(`https://mytinerary-adriel.herokuapp.com/api/likes/${idItinerary}`, {}, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })
                if (response) {
                    return response.data.respuesta.likes
                }

            } catch (error) {
                console.log(error);
            }
        }
    },
    like: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/likes', { id, token }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                dispatch({ type: 'LIKE_ITINERARY', payload: response.data.respuesta })
            } catch (error) {
                console.log(error);
            }
        }
    },

    dislike: (id, token) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/dislike', { token, id }, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                })
                dispatch({ type: 'LIKE_ITINERARY', payload: response.data.respuesta })
            } catch (error) {
                console.log(error);
            }
        }
    },
    addComment: (comment, token, idItinerary) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/comments', {comment, token, idItinerary} , {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'COMMENT', payload: response.data.respuesta})
          }catch(error){
            console.log(error);
          }
        }
      },
      updateComment: (comment, idComment, idItinerary, token) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.put('https://mytinerary-adriel.herokuapp.com/api/comments/update', {comment, idComment, idItinerary, token}, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            dispatch({type: 'COMMENT', payload: response.data.respuesta})
          }
          catch(error){
            console.log(error);
          }
        }
      },
    
      deleteComment: (idComment, idItinerary, token) => {
        return async (dispatch, getState) => {
          try {
            const response = await axios.put('https://mytinerary-adriel.herokuapp.com/api/comments', {idComment, idItinerary, token}, {
              headers: {
                Authorization: 'Bearer '+ token
              }
            })
            dispatch({type: 'COMMENT', payload: response.data.respuesta})
          }
          catch(error){
            console.log(error);
          }
        }
      },
    saveCommentDB: (comment, idItinerary, userToken) => {
        return async (dispatch) => {
            try {
                const response = await axios.post(`https://mytinerary-adriel.herokuapp.com/api/comments/itinerary/${idItinerary}`, comment, {
                    headers: { 'Authorization': 'Bearer ' + userToken }
                })

                dispatch({ type: 'FETCH_ITINERARIES', payload: response.data.respuesta })


            } catch (error) {
                console.log(error);
            }
        }
    }
    
}

export default itinerariesActions
