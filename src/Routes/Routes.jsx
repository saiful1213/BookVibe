import BookDetail from "@/components/BookDetail/BookDetail";
import DashBoard from "@/pages/DashBoard/DashBoard";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import Home from "@/pages/Home/Home";
import ListedBooks from "@/pages/ListedBooks/listedBooks";
import Root from "@/Root/Root";
import { createBrowserRouter } from "react-router-dom";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/book/:bookId',
                loader: () => fetch(`/booksData.json`),
                element: <BookDetail></BookDetail>
            },
            {
                path: '/listedBooks',
                loader: () => fetch('/booksData.json'),
                element: <ListedBooks></ListedBooks>,
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            }
        ]
    }
])

export default Routes;