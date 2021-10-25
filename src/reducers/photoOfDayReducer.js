//Actions types
import { GET_PHOTO_OF_DAY } from '../constants/actionsTypes'

//Initial state
const initialState = {
  photoOfDay: {}
}

//Funcion switch
export const photoOfDayReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_PHOTO_OF_DAY: {
      return { ...state, ...payload }
    }
    default:
      return state
  }
}