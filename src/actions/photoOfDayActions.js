//Actions types
import { GET_PHOTO_OF_DAY } from '../constants/actionsTypes'

export const photoOfDayActions = (payload) => {
    return {
        type: GET_PHOTO_OF_DAY,
        payload
    }
}