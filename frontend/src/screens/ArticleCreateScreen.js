//App.js->Route->RegisterScreen.js

import React, { useState, useEffect } from "react";

//Router
import { Link, useNavigate, useLocation } from "react-router-dom";

//Redux
import { useDispatch, useSelector } from "react-redux";
//useSelector - allows us to used certain parts of the state/reducer

//Actions
import { createArticle } from "../actions/articleActions";

//Bootstrap Components
import { Form, Button, Row, Col } from "react-bootstrap";

//Components
import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";

//Contants
import { ARTICLE_CREATE_RESET } from "../constants/articleConstants";

function ArticleCreateScreen() {

  //Initial State Empty (initializing fields)
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [comments, setComments] = useState('')
  const [text, setText] = useState('')
  const [writer, setWriter] = useState('')
  const [date, setDate] = useState('')

  const dispatch = useDispatch();

  const articleCreate = useSelector(state => state.articleCreate)
  const { loading: loadingCreate, error: errorCreate, success: successCreate } = articleCreate

  let history = useNavigate(); //for V6 it is useNavigate, NOT useHistory

  useEffect(() => {
    if (successCreate) {
        dispatch({ type: ARTICLE_CREATE_RESET })
        history('/')
    }
    }, [dispatch, successCreate]);

  //when the button is pressed, it executes this line
  const submitHandler = (e) => {
    e.preventDefault();
    const article = {
      title: title,
      category: category,
      comments: comments,
      text: text,
      writer: writer,
      date: date,
    };
    
    dispatch(createArticle(article));
  };

  return (
    <FormContainer>
      <h1>Create Article</h1>

      {loadingCreate ? 
        <Loader/> 
        : errorCreate 
            ? <Message variant='danger'>{errorCreate}</Message>
            : (
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="comments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Enter Comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="writer">
                    <Form.Label>Writer</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Writer Name"
                        value={writer}
                        onChange={(e) => setWriter(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="text">
                    <Form.Label>Text</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Enter Text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></Form.Control>
                    </Form.Group>

                    <Button type="submit" variant="primary">
                    Create Article
                    </Button>

                </Form>
            )}

    </FormContainer>
  );
}

export default ArticleCreateScreen;
