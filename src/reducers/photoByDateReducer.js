//Actions types
import { GET_PHOTO_BY_DATE } from '../constants/actionsTypes'

//Initial state
const initialState = {
  photoByDate: {}
}

//Funcion switch
export const photoByDateReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PHOTO_BY_DATE: {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}