import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger
}
    from "../ui/sheet";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <nav className="flex justify-between py-5 px-2 max-w-6xl mx-auto items-center">
            {/* nav start */}
            <h1 className="order-2 md:order-1 text-3xl font-bold">Book Vibe</h1>
            {/* nav center */}
            {/* large device */}
            <div className="hidden md:order-2 md:flex">
                <NavLinks isSmallDevie={false}></NavLinks>
            </div>
            {/* small device */}
            <div className="order-1 md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline"><Menu /></Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <SheetHeader>
                            <SheetTitle className="text-2xl font-bold">
                                Logo
                            </SheetTitle>
                            <SheetDescription>
                                description
                            </SheetDescription>
                            <NavLinks isSmallDevie={true}></NavLinks>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            {/* nav end */}
            <div className="order-3 gap-3 flex">
                <Button className="bg-[#23BE0A]">Sign In</Button>
                <Button className="bg-[#59C6D2]">Sign Up</Button>
            </div>
        </nav>
    )
}

export default Navbar;