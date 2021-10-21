//Actions types

//Initial state
const initialState = {
    data: []
}

//Funcion switch
export const photoOfDayReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
      case ' GET_PLANTAS': {
        return { ...state, ...payload }
      }
  
      case ' SET_CURRENT_DATA': {
        return { ...state, currentData: payload }
      }
      
      case 'RESET_PLANTAS': {
        return { ...initialState }
      }
      default:
        return state
    }
  }