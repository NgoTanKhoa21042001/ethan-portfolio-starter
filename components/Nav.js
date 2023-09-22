// icons
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
export const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter();
  // nhấn vào chuyển trang
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center fixed xl:right-[2%] mt-auto h-max bottom-0 z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 xl:h-max py-8 bg-white/10 backdrop-blur-sm h-[40px] text-xl md:h-[80px] md:text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            className={`${
              link.path === pathname && "text-accent"
            } relative group hover:text-accent transition-all duration-300`}
            key={index}
            href={link.path}
          >
            {/* tooltip */}

            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none font-semibold capitalize text-black">
                  {link.name}
                </div>
              </div>
            </div>

            {/* icon */}
            {link.icon}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
