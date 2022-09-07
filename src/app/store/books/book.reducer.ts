import { createReducer, on } from "@ngrx/store";
import { addBook, Book, loadBooks, removeBook } from "..";

export const initialState: Book[] = [];

export const bookReducer = createReducer<Book[]>(
    initialState,
    on(addBook, (state: Book[], book: Book) => [...state, book]),
    on(removeBook, (state: Book[], idHolder: { id: number }) => state.filter(stateBook => stateBook.id !== idHolder.id)),
    on(loadBooks, (state: Book[], booksWrapper: { books: Book[] }) => booksWrapper.books)
);