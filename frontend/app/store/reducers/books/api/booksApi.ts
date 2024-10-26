import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Book } from "@/app/types/book.type";

const baseQuery = fetchBaseQuery({
    baseUrl: `http://localhost:8080/api/books`,
    prepareHeaders: (Headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            Headers.set('Authorization', `Bearer ${token}`);
        }
        return Headers;
    }
});

const booksApi = createApi({
    reducerPath: 'booksApi',
    baseQuery,
    tagTypes: ['Book'],
    endpoints: (builder) => ({
        getBooks: builder.query<Book[], void>({
            query: (args) => {
                return {
                    url: '',
                    method: 'GET',
                }
            }
        }),
        getBook: builder.query<Book, number>({
            query: (id) => id
        }),
        addBook: builder.mutation<Book, Book>({
            query: (book) => ({
                url: '',
                method: 'POST',
                body: book
            })
        }),
        updateBook: builder.mutation<Book, Book>({
            query: (book) => ({
                url: '',
                method: 'PUT',
                body: book
            })
        }),
        deleteBook: builder.mutation<void, number>({
            query: (id) => ({
                url: id.toString(),
                method: 'DELETE'
            })
        })
    })
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = booksApi;

export default booksApi;