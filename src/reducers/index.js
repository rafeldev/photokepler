import { combineReducers } from "redux";

//Reducers
import { photoOfDayReducer } from "./photoOfDayReducer";
import { photoByDateReducer } from "./photoByDateReducer";
import { loadingReducer } from "./loadingReducer";


//appReducer
const appReducer = combineReducers({
    photoOfDay: photoOfDayReducer,
    photoByDate: photoByDateReducer,
    loading: loadingReducer
})


export default appReducer