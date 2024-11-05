import { Button } from "../ui/button";
import bannerImg from "/bannerImg.png";

const Banner = () => {
    return (
        <div className="flex items-center justify-between bg-[#1313130d] rounded-3xl px-28 py-20 my-10">
            <div>
                <h1 className='text-5xl font-bold font-title mb-12'>Books to freshen up your bookshelf </h1>
                <Button variant="outline" className="bg-[#23BE0A] text-white font-bold">View The List</Button>
            </div>
            <div>
                <img src={bannerImg} className="" />
            </div>
        </div>
    )
}

export default Banner;