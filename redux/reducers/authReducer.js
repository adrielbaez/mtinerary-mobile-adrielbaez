import AsyncStorage from '@react-native-async-storage/async-storage';
const initialState = {
    userLogged: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOG':
            // console.log(action.payload, 'hola');
            // if (action.payload) {
            //     const guardarDatos = async () => {
            //         try {
            //           await AsyncStorage.setItem('userLogged', JSON.stringify({ firstName: action.payload.firstName, idUser: action.payload.idUser, userPicture: action.payload.userPicture }));
            //           await AsyncStorage.setItem('token', action.payload.token);
            //         } catch (error) {
            //           console.log(error);
            //         }
            //       }
            //       guardarDatos()
            // }
            return {
                ...state,
                userLogged: action.payload
            }
        case 'LOGOUT_USER':
            // localStorage.clear()
            return {
                ...state,
                userLogged: null
            }
        default:
            return state;
    }
}
export default authReducer


