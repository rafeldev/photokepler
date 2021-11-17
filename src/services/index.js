import axios from 'axios'

//Actions
import { photoByDateActions } from '../actions/photoByDateActions';
import { photoOfDayActions } from '../actions/photoOfDayActions';
import { setLoading } from '../actions/loadingActions';


//Constants
import { URL_API, API_KEY } from '../constants/apis';


//Services
export const getPhotoOfDay = () => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios.get(`${URL_API}=${API_KEY}`)
            .then(function (response) {
                const { data } = response;
                dispatch(photoOfDayActions(data))
            })
            .catch(function (error) {
                //dispatch
            })
            .finally(function () {
                //alwas executed
                dispatch(setLoading(false));
            })
    }
}

export const getPhotoByDate = (date) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios.get(`${URL_API}=${API_KEY}&date=${date}`)
            .then(function (response) {
                const { data } = response;
                dispatch(photoByDateActions(data))
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {
                //always executed
                dispatch(setLoading(false));
            })
    }
}