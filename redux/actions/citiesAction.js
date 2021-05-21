import axios from 'axios'

const citiesActions = {
    loadCities: (history) => {
        return async (dispatch, getState) => {
            //codigo asincrono
            try {
                let response = await axios.get('https://mytinerary-adriel.herokuapp.com/api/cities')
                dispatch({type: 'LOAD_CITIES', payload: response.data.respuesta})
            } catch (error) {
                console.log(error)               
            }
        }
    },
    searchCities: (valueInput) => {
        return (dispatch) => {
            dispatch({ type: 'SEARCH_CITIES', payload: valueInput })
        }
    }
}
export default citiesActions