import Link from "next/link";

export default function Navbar(){
    return (
        <div className="bg-green-500 w-full flex justify-around">
            <Link href="/">Home</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/about-us">About Us</Link>
        </div>
    )
}