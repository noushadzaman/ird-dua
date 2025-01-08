import {
  BOOK,
  BULB,
  CHAT,
  HOME,
  MARK,
  MENU,
  RUQYAH,
  LOGO,
  LOGO2,
} from "@/utils";
import Image from "next/image";

const Sidebar = () => {
  const links = [HOME, MENU, BULB, MARK, RUQYAH, CHAT, BOOK];

  return (
    <ul
      style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
      className="max-xl:absolute max-xl:bottom-0 flex xl:h-[92vh] justify-between max-xl:w-full xl:flex-col xl:gap-[27px] items-center bg-white max-xl:rounded-t-[45px] xl:rounded-[24px] py-[31px] px-[14px] xl:ml-[40px] xl:my-auto max-xl:shadow-3xl-up xl:shadow-0 shrink-0 z-50"
    >
      <Image
        width={350}
        height={350}
        className="size-[80px] cursor-pointer max-xl:hidden"
        src={LOGO}
        alt="logo"
      />
      {links.map((item, i) => (
        <li
          className="size-[38px] rounded-full xl:bg-[#E8F0F5] max-xl:bg-[#f6f6f6] flex items-center justify-center cursor-pointer"
          key={i}
        >
          <Image
            width={350}
            height={350}
            className="size-[20px]"
            src={item}
            alt="logo"
          />
        </li>
      ))}
      <Image
        width={350}
        height={350}
        className="w-[80px] cursor-pointer max-xl:hidden"
        src={LOGO2}
        alt="logo"
      />
    </ul>
  );
};

export default Sidebar;
