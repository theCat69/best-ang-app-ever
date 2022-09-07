import { BookEffects } from './books/books.effect';

export * from './store.type';
export * from './books/book.action';
export * from './books/book.reducer';
export * from './books/books.effect';

export const effects : any[] = [BookEffects];