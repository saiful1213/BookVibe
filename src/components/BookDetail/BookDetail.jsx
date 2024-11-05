import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const currentBook = books.find(book => book.bookId === Number(bookId));
    const { bookId: id, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = currentBook;

    return (
        <div>
            <h1 className='text-2xl font-bold'>BookDetail </h1>
        </div>
    )
}

export default BookDetail;