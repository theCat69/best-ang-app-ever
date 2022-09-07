export type AppState = {
    books: Book[];
}

export type Book = {
    id: number;
    title: string;
    author: string;
    year: number;
    synopsis: string;
    picture: string;
}