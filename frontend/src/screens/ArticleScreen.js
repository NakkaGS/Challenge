//App.js->Route->ProductScreen.js

import React, { useEffect } from "react";

//Router
import { Link, useParams, useNavigate } from "react-router-dom"; //Library React Router Dom

//Redux
import { useDispatch, useSelector } from 'react-redux'

//Actions
import { listArticleDetails } from '../actions/articleActions' //this is the reducer

//Bootstrap Components
import { Row, Col, Card } from "react-bootstrap"; //Library React Bootstrap

//Components
import Loader from '../components/Loader'
import Message from '../components/Message'

//it was necessary to add '?' every time that we want to get a attribute from the article

function ArticleScreen({ match }) {

  const dispatch = useDispatch()

  const articleDetails = useSelector(state => state.articleDetails)
  const {error, loading, article} = articleDetails 

  let { id } = useParams(match); //get the Product ID
  
  useEffect( () => {
    dispatch(listArticleDetails(id))

  }, [dispatch, id, match])

  return(
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :  
                    <div>
                        <Row>
                            <Col md={9}>
                                <Card className='me-5 ms-5 mt-2 mb-2'>
                                    {article?.image && <img src={article?.image} alt={article?.name} className="site-img"/>}
                                    <Card.Body>
                                        <Row>
                                            <Card.Title className='text-center card-title'><h2>{article?.title}</h2></Card.Title>
                                        </Row>
                                        <Row>
                                            <Col className='text-center'>
                                                <p>{article?.date} | {article?.writer} | {article?.comments} Comments</p>
                                            </Col>
                                        </Row>

                                        <Row>
                                            <Card.Text className='text-center'>
                                            {<div dangerouslySetInnerHTML={{__html: article?.text}}></div>}
                                            </Card.Text>
                                        </Row>

                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </div>
                
        }
    </div>
  )
};

export default ArticleScreen;
