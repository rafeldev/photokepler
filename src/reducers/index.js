import { combineReducers } from "redux";

//Reducers
import { photoOfDayReducer } from "./photoOfDayReducer";


//appReducer
const appReducer = combineReducers({
    photoOfDay: photoOfDayReducer
})


export default appReducer