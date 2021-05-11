import React from 'react';
import {Button, Card} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Book = ({
                  id,
                  bookname,
                  author,
                  price,
                  quantity,
                  date,
                  handleRemoveBook
              }) => {
    const history = useHistory();
    return (
        <Card style={{width: '18rem'}} className="book">
            <Card.Body>
                <Card.Title className="book-title">{bookname}</Card.Title>
                <div className="book-details">
                    <div>Auteur: {author}</div>
                    <div>Quantité: {quantity} </div>
                    <div>Prix: {price} </div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Modifier</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveBook(id)}>
                    Supprimer
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Book;
