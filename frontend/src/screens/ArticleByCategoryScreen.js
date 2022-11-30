import React, {useEffect} from 'react'

//Router
import { useParams } from "react-router-dom"; //Library React Router Dom

//Redux
import { useDispatch, useSelector } from 'react-redux' 
//useSelector - allows us to used certain parts of the state/reducer

//Actions
import { listArticles } from '../actions/articleActions'

//Boostrap Components
import { Row, Col, Card, ListGroup } from 'react-bootstrap'

//Components
import Article from '../components/Article'
import Categories from '../components/Categories'

export default function ArticleByCategoryScreen({ match }){

    const dispatch = useDispatch()
  
    const articleList = useSelector(state => state.articleList)
    const {error, loading, articles} = articleList 

    useEffect(() => {
        dispatch(listArticles())
    }, [dispatch])

    let { category } = useParams(match); //get the Product ID
    console.log(category)

    return(
    <div>
        <Row>

            <Col md={9}>
                {articles?.length && (articles.map(article => {

                    if(article.category.search(`${category}`)){
                        return ( 
                            <div key={article._id}>
                                <Article article={article} />
                            </div>
                        )
                    } 
                    }))}
            </Col>

            <Col md={3}>
                <Categories/>
            </Col>
            
        </Row>
    </div>
    )
}