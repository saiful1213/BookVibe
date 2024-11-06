import { useLoaderData, useParams } from "react-router-dom";
import { Button } from "../ui/button";
import { getFromLocalStorage, SaveToLocalStorage } from "@/utils/readList";
import { saveToLocalStorage } from "@/utils/wishList";

const BookDetail = () => {
    const { bookId } = useParams();
    const books = useLoaderData();

    const currentBook = books.find(book => book.bookId === Number(bookId));
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = currentBook;

    const handleMarkAsRead = () => {
        const savedBooks = getFromLocalStorage();
        const isExist = savedBooks.find(savedBookId => savedBookId === bookId);
        if (isExist) {
            return alert('book already exist')
        }

        SaveToLocalStorage(bookId);
        alert('book add to read list successfully!!');
    }

    const handleWishList = () => {
        saveToLocalStorage(bookId);
    }

    return (
        <div className="flex flex-col md:flex-row items-center gap-12 my-16">
            <div className="w-1/2 p-10 bg-[#1313130d]">
                <img src={image} className="h-[564px] w-full object-cover" />
            </div>
            <div className="w-1/2">
                <h1 className='text-4xl font-title font-bold mb-4'>{bookName}</h1>
                <p className="text-[#131313cc] font-medium text-xl mb-6">{author}</p>
                <div className="py-4 border-t border-b border-[#13131326] mb-6">
                    <p className="text-[#131313cc] font-medium text-xl">{category}</p>
                </div>
                <p className="text-[#131313b3] mb-6"><span className="text-[#131313] font-bold">Review:</span> {review}</p>
                <div className="flex items-center gap-6 border-b pb-6 mb-6">
                    <p className="text-[#131313] font-bold">Tag</p>
                    {
                        tags.map((tag, i) => <Button key={i} variant="outline" className="text-[#23BE0A] font-medium">#{tag}</Button>)
                    }
                </div>
                <div className="flex items-center mb-3">
                    <p className="text-[#131313b3] w-1/3">Number of Pages:</p>
                    <p className="text-[#131313] font-semibold">{totalPages}</p>
                </div>
                <div className="flex items-center mb-3">
                    <p className="text-[#131313b3] w-1/3">Publisher:</p>
                    <p className="text-[#131313] font-semibold">{publisher}</p>
                </div>
                <div className="flex items-center mb-3">
                    <p className="text-[#131313b3] w-1/3">Year of Publishing:</p>
                    <p className="text-[#131313] font-semibold">{yearOfPublishing}</p>
                </div>
                <div className="flex items-center mb-3">
                    <p className="text-[#131313b3] w-1/3">Rating:</p>
                    <p className="text-[#131313] font-semibold">{rating}</p>
                </div>
                <div className="flex gap-6 mt-8">
                    <Button variant="outline" onClick={handleMarkAsRead}>Mark As Read</Button>
                    <Button onClick={handleWishList} className="bg-[#50B1C9]">Add to Wishlist</Button>
                </div>
            </div>
        </div>
    )
}

export default BookDetail;