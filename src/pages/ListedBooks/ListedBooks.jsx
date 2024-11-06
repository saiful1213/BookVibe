import { useLoaderData } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getFromLS } from "@/utils/readList";
import { useEffect, useState } from "react";
import Book from "@/components/Book/Book";
import { getFromLocalStorage } from "@/utils/wishList";

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const allBooks = useLoaderData();

    // read list book
    useEffect(() => {
        const readBookList = getFromLS();
        const readBookListInt = readBookList.map(id => parseInt(id));
        const readListBooks = allBooks.filter(book => readBookListInt.includes(book.bookId));

        setReadList(readListBooks);
    }, [])

    // wish list book
    useEffect(() => {
        const wishListStr = getFromLocalStorage();
        const wishListInt = wishListStr.map(id => Number(id));
        const wishListBooks = allBooks.filter(book => wishListInt.includes(book.bookId));

        setWishList(wishListBooks);
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center font-bold my-10'>Books</h1>

            <Tabs defaultValue="readList">
                <TabsList>
                    <TabsTrigger value="readList">Read Books</TabsTrigger>
                    <TabsTrigger value="wishList">Wishlist Books</TabsTrigger>
                </TabsList>
                <TabsContent value="readList" className="mt-10 mb-16">
                    <h1 className="text-3xl font-bold mb-3">Books I Read</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            readList.map(readBook => <Book key={readBook.bookId} book={readBook}></Book>)
                        }
                    </div>
                </TabsContent>
                <TabsContent value="wishList" className="mt-10 mb-16">
                    <h1 className="text-3xl font-bold mb-3">WishList Book</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            wishList.map(wishBook => <Book key={wishBook.bookId} book={wishBook}></Book>)
                        }
                    </div>
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default ListedBooks;