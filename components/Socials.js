import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubFill,
  RiLinkedinFill,
  RiPinterestFill,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.youtube.com/channel/UCDXAAFHWJguGnLWsq9yIwoQ"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/khoatann214/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.facebook.com/khoa.tan.1654"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://github.com/NgoTanKhoa21042001"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubFill />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/khoa-ng%C3%B4-066544229/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href={"https://www.pinterest.com/KhoaNgo214/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiPinterestFill />
      </Link>
    </div>
  );
};

export default Socials;
