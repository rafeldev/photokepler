import axios from 'axios'
import { photoOfDayActions } from '../actions/photoOfDayActions';

//Actions


//Constants
import { URL_API, API_KEY } from '../constants/apis';


//Services
export const getPhotoOfDay = () => {
    return (dispatch) => {
        //loading
        axios.get(`${URL_API}=${API_KEY}`)
            .then(function(response) {
                const { data } = response;
                dispatch(photoOfDayActions(data))
            })
            .catch(function(error){
                //dispatch
            })
            .finally(function(){
                //alwas executed
            })
    }
}