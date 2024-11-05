import { Input } from "@/components/ui/input"

const Footer = () => {
    return (
        <div className="bg-[#06091A]">
            <div className="max-w-6xl mx-auto">
                <div className="pb-[72px] px-4 md:px-2 grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-48 pt-24">
                    <div>
                        <h3 className="text-[#FFF] text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-[#ffffff99]">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3 className="text-[#FFF] text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="text-[#ffffff99] list-inside cursor-pointer">
                            <li className="hover:underline">Home</li>
                            <li className="hover:underline">Services</li>
                            <li className="hover:underline">About</li>
                            <li className="hover:underline">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-[#FFF] text-lg font-semibold mb-4">Subscribe</h3>
                        <p className="text-[#ffffff99] mb-5">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex w-full max-w-sm items-center ">
                            <Input type="email" placeholder="Enter your email" className="py-[23px] px-7 -mr-1" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-8 border-t-2 border-[#ffffff26]">
                <p className="text-[#ffffff99] text-center">@2025 Your Company All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;