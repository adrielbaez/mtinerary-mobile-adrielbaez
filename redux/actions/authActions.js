import axios from 'axios'

const authActions = {
    createNewUser: (newUser) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/user/signup', newUser)
                if (response.data.googleUser) {
                    return response.data
                }
                if (!response.data.success) {
                    return response.data.errores
                }
                dispatch({
                    type: 'USER_LOG',
                    payload: response.data.success ? response.data.respuesta : null
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    iniciarSesion: (user) => {
        return async (dispatch, getState) => {
            try {
                let response = await axios.post('https://mytinerary-adriel.herokuapp.com/api/user/signin', user)
                if (!response.data.success) {
                    return response.data
                }
                dispatch({
                    type: 'USER_LOG',
                    payload: response.data.success ? response.data.respuesta : null
                })
            } catch (error) {
                console.log(error);
            }
        }
    },
    cerrarSesion: (history) => {
        return (dispatch, getState) => {
            alert('chau')
            dispatch({ type: 'LOGOUT_USER' })

        }
    },
    iniciarSesionLS: (userLS) => {
        return async (dispatch, getState) => {
            try {
                const response = await axios.get('https://mytinerary-adriel.herokuapp.com/api/user/logingLS', {
                    headers: {
                        'Authorization': 'Bearer ' + userLS.token
                    }
                })
                dispatch({
                    type: 'USER_LOG', payload: {
                        ...response.data.respuesta,
                        token: userLS.token
                    }
                })
            } catch (error) {
                console.log(error);
            }

        }
    }
}

export default authActions