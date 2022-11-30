import React from 'react'

import { Link } from 'react-router-dom'

//Boostrap Components
import { Row, Col, Card, Image } from 'react-bootstrap'

function Article({ article }) {
  return (
    <div>
        <Card className='me-5 ms-5 mt-2 mb-2'>
            <Link to={`/article/${article?._id}`}>
                {article?.image && <img src={article?.image} alt={article?.name} className="site-img"/>}
            </Link>  

            <Card.Body>
                <Row>
                    <Link to={`/article/${article?._id}`}>
                        <Card.Title className='text-center card-title'><h2>{article?.title}</h2></Card.Title>
                    </Link>  
                </Row>
                <Row>
                    <Col className='text-center'>
                        <p>{article?.date} | {article?.writer} | {article?.comments} Comments</p>
                    </Col>
                </Row>

                <Row>
                    <Card.Text className='text-center'>
                    {article?.text.substring(0, 200)}...
                    {/* <div dangerouslySetInnerHTML={{__html: article?.text.substring(0, 200)}}></div> */}
                    </Card.Text>
                </Row>
                <Row>
                    <Link to={`/article/${article?._id}`}>
                        <p className="text-end">More...</p>  
                    </Link>                        
                </Row>

            </Card.Body>
        </Card>
    </div>
  )
}

export default Article