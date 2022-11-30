import { 
    ARTICLE_LIST_REQUEST,
    ARTICLE_LIST_SUCCESS,
    ARTICLE_LIST_FAIL,
    
    ARTICLE_DETAILS_REQUEST,
    ARTICLE_DETAILS_SUCCESS,
    ARTICLE_DETAILS_FAIL,

    ARTICLE_CREATE_REQUEST,
    ARTICLE_CREATE_SUCCESS,
    ARTICLE_CREATE_FAIL,
    ARTICLE_CREATE_RESET,

} from '../constants/articleConstants' //it is like enum in C

export const articleListReducer = (state = { articles:[]}, action ) => {
    switch(action.type){
        case ARTICLE_LIST_REQUEST: //it set the state loading to true and clear all the articles
            return {loading:true, articles: []}
        
        case ARTICLE_LIST_SUCCESS: //if the connection is OK, it gets all the article and reset the loading 
            return {loading: false, articles: action.payload}

        case ARTICLE_LIST_FAIL: //is there is a error, it calls this case
            return {loading: false, error: action.payload}
        
        default:
            return state;
    }
}

//////////////////////////////////////////////

export const articleDetailsReducer = (state = { article: {} }, action) => {
    switch(action.type){
        case ARTICLE_DETAILS_REQUEST:
            return { loading: true, ...state, article: [] } //"...state"can only make copies of the original values, and then they can modify the copies.
        
        case ARTICLE_DETAILS_SUCCESS:
            return { loading: false, article: action.payload }

        case ARTICLE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state;
    }
}

//////////////////////////////////////////////

export const articleCreateReducer = (state = {}, action) => {
    switch(action.type){
        case ARTICLE_CREATE_REQUEST:
            return { loading: true}

        case ARTICLE_CREATE_SUCCESS:
            return { loading: false, success: true, article: action.payload }

        case ARTICLE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case ARTICLE_CREATE_RESET:
            return {}

        default:
            return state;
    }       
}
