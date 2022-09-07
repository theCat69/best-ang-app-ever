import { createAction, props } from "@ngrx/store";
import { Book } from '..';

export enum BookActions {
    ADD = '[Book] Add',
    REMOVE = '[Book] Remove',
    LOAD = '[Book] Load',
    PRELOAD = '[Book] Preload'
}

export const addBook = createAction(BookActions.ADD, props<Book>());
export const removeBook = createAction(BookActions.REMOVE, props<{id : number}>());
export const loadBooks = createAction(BookActions.LOAD, props<{books: Book[]}>());
export const preloadBooks = createAction(BookActions.PRELOAD);