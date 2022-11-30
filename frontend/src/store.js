import { createStore , combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {    articleListReducer, 
            articleDetailsReducer, 
            articleCreateReducer, } from './reducers/articleReducers'

//every time that one of the items on the left is call (in the screen, component), it calls the reducer 
const reducer = combineReducers({
    articleList: articleListReducer,
    articleDetails: articleDetailsReducer,
    articleCreate: articleCreateReducer,

})

const store = createStore(reducer, 
    composeWithDevTools(applyMiddleware(thunk))) //createStore is not been used anymore

export default store