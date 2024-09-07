import Link from "next/link";
import { navigationLinks } from "../../app/lib/navigation-links";
import MobileNavigation from "./mobile-navigation";

export default function Navigation() {

    const desktopMenuList = navigationLinks.map((menuItem) =>
        <Link key={menuItem.display} href={menuItem.link} className="py-4 px-2 text-blue-300 no-underline hover:text-green-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">
            {menuItem.display}
        </Link>
    );

    return (
        <>
            <nav className="fixed md:absolute w-full right-0 top-0 z-30 bg-gray-900 md:bg-transparent">
                <div className="container mx-auto p-3">
                    <div className="flex justify-between">

                        {/* Logo */}
                        <div className="flex space-x-7">
                            <div className="m-auto">
                                <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                                    <span className="logo-full-name bg-clip-text text-transparent bg-gradient-to-r from-green-600 via-pink-800 to-purple-700 py-1">Tyler Latshaw</span>
                                </a>
                            </div>
                        </div>

                        {/* Navbar items */}
                        <div className="desktop-only flex items-center space-x-3">
                            {desktopMenuList}
                        </div>

                        <MobileNavigation />

                    </div>
                </div>
            </nav>

        </>
    );
}