import { createReducer, on } from '@ngrx/store';
import { Book } from './book';
import { retrievedBookList } from './book.action';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
    initialState,
    on(retrievedBookList, (state, { books }) => books)
);