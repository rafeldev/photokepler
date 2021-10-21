import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import appRedcuers from '../reducers'

export const emptyState = {
    dataUser: {}
}

const initialState = emptyState
const middleware = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    appRedcuers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  store.subscribe(store.getState())