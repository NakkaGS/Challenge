import React from 'react'

import { Link } from "react-router-dom"; //Library React Router Dom

//Boostrap Components
import { Card, ListGroup } from 'react-bootstrap'

function Categories({ Articles }) {
  return (
    <div>
        <Card className='mt-2 mb-3 ms-5' bg='light' style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Categories</Card.Title>

            </Card.Body>
            <ListGroup bg='light' className="list-group-flush">

              <Link to={`/article/category/General`}>
                <ListGroup.Item>General</ListGroup.Item>
              </Link>

              <Link to={`/article/category/Magento`}>
                <ListGroup.Item>Magento</ListGroup.Item>
              </Link>

              <Link to={`/article/category/DevOps`}>
                <ListGroup.Item>DevOps</ListGroup.Item>
              </Link>

            </ListGroup>

        </Card>
    </div>
  )
}

export default Categories