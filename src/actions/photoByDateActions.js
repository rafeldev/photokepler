//Actions types
import { GET_PHOTO_BY_DATE } from '../constants/actionsTypes'

export const photoByDateActions = (payload) => {
    return {
        type: GET_PHOTO_BY_DATE,
        payload
    }
}