import { Button } from "@/components/ui/button";
import ErrorImg from "/errorImg.jpg"
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="border rounded-xl p-4 w-3/4 flex items-center gap-6">
                <img src={ErrorImg} className="w-full" />
                <div>
                    <h1 className='text-4xl font-bold mb-6'>Page Not Found!!</h1>
                    <Link to={'/'}>
                        <Button variant='destructive' size='lg' className="flex justify-center text-center">Go Home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage;