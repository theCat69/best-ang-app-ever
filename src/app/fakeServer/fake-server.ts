type Book = {
    id: number,
    title: string;
    author: string;
    year: number;
    picture: string;
    synopsis: string;
}

const books: Book[] = [
    {   
        id: 1,
        title: 'title1',
        author: 'author1',
        year: 2000,
        picture: 'https://edit.org/photos/images/cat/book-covers-big-2019101610.jpg-1300.jpg',
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore et nisi sit rem ad aliquam quod ratione, molestiae itaque nihil, blanditiis, iste repudiandae repellendus accusantium debitis. Nobis, odit vitae?'
    },
    {   
        id: 2,
        title: 'title2',
        author: 'author2',
        year: 2000,
        picture: 'https://st2.depositphotos.com/1055089/5923/v/950/depositphotos_59232215-stock-illustration-modern-vector-book-cover-template.jpg',
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore et nisi sit rem ad aliquam quod ratione, molestiae itaque nihil, blanditiis, iste repudiandae repellendus accusantium debitis. Nobis, odit vitae?'
    },
    {
        id: 3,
        title: 'title3',
        author: 'author3',
        year: 2000,
        picture: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/f1284291229191.5e2c46564f4ff.jpg',
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore et nisi sit rem ad aliquam quod ratione, molestiae itaque nihil, blanditiis, iste repudiandae repellendus accusantium debitis. Nobis, odit vitae?'
    },
    {
        id:4,
        title: 'title4',
        author: 'author4',
        year: 2000,
        picture: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1637018051',
        synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore et nisi sit rem ad aliquam quod ratione, molestiae itaque nihil, blanditiis, iste repudiandae repellendus accusantium debitis. Nobis, odit vitae?'
    }
]

export const fakeHttpGetBooks = () : string => JSON.stringify(books);
