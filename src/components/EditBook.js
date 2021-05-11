import BookForm from "./BookForm";
import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import BooksContext from "../context/BooksContext";

const EditBook = ({history}) => {
    const {books, setBooks} = useContext(BooksContext);

    const {id} = useParams();
    const bookToEdit = books.find((book) => book.id === id);

    const handleOnSubmit = (book) => {
        const filtredBooks = books.filter((book) => book.id !== id);
        setBooks([book, ...filtredBooks]);
        history.push('/');
    };
    return (
        <div>
            <BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit}/>
        </div>
    )
};
export default EditBook;
