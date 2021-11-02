import { combineReducers } from "redux";

//Reducers
import { photoOfDayReducer } from "./photoOfDayReducer";
import { photoByDateReducer } from "./photoByDateReducer";


//appReducer
const appReducer = combineReducers({
    photoOfDay: photoOfDayReducer,
    photoByDate: photoByDateReducer
})


export default appReducer