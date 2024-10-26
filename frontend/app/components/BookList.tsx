"use client";

import { useGetBooksQuery } from "@/app/store/reducers/books/api/booksApi";

const BookList = () => {
    const {data} = useGetBooksQuery();
    console.log(data);

    return (
        <ul>
            {/*{books.map(book => (*/}
            {/*    <li key={book.id}>{book.title}</li>*/}
            {/*))}*/}
        </ul>
    );
};

export default BookList;