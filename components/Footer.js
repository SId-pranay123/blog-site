import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const FooterColumn = ({ links }) => (
  <div className="footer_coulmn ">
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href="/" key={link}>
          {" "}
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="flexCenter footer mt-14 mx-14">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex flex-wrap gap-24  text-gray">
          <FooterColumn links={footerLinks[0]} />
          <FooterColumn links={footerLinks[1]} />
          <FooterColumn links={footerLinks[2]} />
          <div className="flex-1 flex flex-col gap-4">
            <FooterColumn links={footerLinks[3]} />
            <div className="flex gap-2">
              <Link href="/">
                <Image
                  src="/facebook.svg"
                  width={20}
                  height={20}
                  alt="search"
                  className="fill-gray"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/instagram.svg"
                  width={20}
                  height={20}
                  alt="search"
                />
              </Link>
              <Link href="/">
                <Image src="/twitter.svg" width={20} height={20} alt="search" />
              </Link>
              <Link href="/">
                <Image src="/youtube.svg" width={20} height={20} alt="search" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p className="text-gray">
          <span>©Blog Media Group Ltd. 2012-2023. Privacy Policy. Terms of Use.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
