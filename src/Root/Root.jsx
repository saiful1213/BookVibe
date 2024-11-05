import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <div className="max-w-6xl mx-auto">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Root;