import Image from "next/image";
import Link from "next/link";
import Authenticator from "./Authenticator";

const Navbar = () => {
  return (
    <nav className="flexAround navbar mb-14">
        <div className="flex items-center gap-2 ">
            <Link href='/'>
                MENU
            </Link>
            <div>
                /
            </div>
            <div>
                <Link href='/'> 
                    <Image 
                        src = "/search.svg"
                        width={16}
                        height={16}
                        alt = "search"
                    />
                </Link>
            </div>
        </div>
        <div className="">
            <Link href='/'> 
                <Image 
                    src = "/logo.svg"
                    width={115}
                    height={50}
                    alt = "Blog-site"
                />
            </Link>
        </div>
        <div className="flex flex-wrap text-base ">
            <div className="flexEnd gap-2">
                <Link href='/post-blog'>
                    CREATE 
                </Link>
                <div>
                    /
                </div>
                <Link href='/'>
                    NEWSLETTER
                </Link>
                <div>
                    /
                </div>
                <Link href='/'>
                    <Authenticator />
                    {/* SIGN IN */}
                </Link>

            </div>
        </div>
    </nav>
  );
};

export default Navbar;
