import axios from 'axios'

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

} from '../constants/articleConstants' //it is like enum in C


//it works like a state machine
//////////////////////////////////////////////
export const listArticles = () => async (dispatch) => { //it is a action
    try {
        dispatch({ type: ARTICLE_LIST_REQUEST })
            const { data } = await axios.get(`/api/articles/getallarticles`)
            //console.log(data)

        dispatch({
            type: ARTICLE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLE_LIST_FAIL,
            payload: error.response && error.response.data.detail //if there a detail it show the detail, otherwise it shows the message set in 
                ? error.response.data.detail 
                : error.message,
        })
    }
}

//////////////////////////////////////////////
export const listArticleDetails = (id) => async (dispatch) => { //it is a action
    //console.log(id)

    try {

        const config = {
            headers: { //It just worked like this for PUT. Axious is in x-www-form-urlencoded
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }

        dispatch({ type: ARTICLE_DETAILS_REQUEST })
            const { data } = await axios.post(
                '/api/articles/getarticlebyid', 
                { articleid: id },
                config
                )
                  

        dispatch({
            type: ARTICLE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

//////////////////////////////////////////////
export const listArticleByCategoryDetails = (category) => async (dispatch) => { //it is a action
    //console.log(id)

    try {

        const config = {
            headers: { //It just worked like this for PUT. Axious is in x-www-form-urlencoded
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }

        dispatch({ type: ARTICLE_DETAILS_REQUEST })
            const { data } = await axios.post(
                '/api/articles/getarticlebycategory', 
                { articlecategory: category },
                config
                )
                  

        dispatch({
            type: ARTICLE_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ARTICLE_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createArticle = (articleCreate) => async(dispatch, getState) => {
    try {
        dispatch({
            type: ARTICLE_CREATE_REQUEST,
        })
        //console.log(articleCreate)

        const config = {
            headers: { //It just worked like this for PUT. Axious is in x-www-form-urlencoded
                "Content-Type": "application/x-www-form-urlencoded",
            }
        }

        //in the backend, there is a url (API) that it gets the data from the user
        const { data } = await axios.post(
            `/api/articles/create/`,
            { article: articleCreate }, //post needs to send something
            config
        )

        dispatch({
            type: ARTICLE_CREATE_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: ARTICLE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}