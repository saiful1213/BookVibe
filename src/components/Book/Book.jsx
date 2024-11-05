import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Star } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";


const Book = ({ book }) => {
    const { bookId, bookName, author, image, rating, category, tags } = book;

    return (
        <Link to={`/book/${bookId}`}>
            <Card>
                <CardHeader>
                    <div className="bg-[#F3F3F3] py-8">
                        <img src={image} alt={bookName} className="rounded-2xl w-full h-[166px] object-cover" />
                    </div>
                    <div className="flex justify-between !mb-4">
                        {
                            tags.map((tag, idx) => <Button variant="outline" className="text-[#23BE0A]" key={idx}>{tag}</Button>)
                        }
                    </div>
                    <CardTitle className="font-title">{bookName}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>{author}</p>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-dashed border-[#13131326] pt-5 text-[#131313cc] font-medium">
                    <p>{category}</p>
                    <div className="flex items-center gap-2">
                        <p>{rating}</p>
                        <span className="cursor-pointer"><Star /></span>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default Book;
