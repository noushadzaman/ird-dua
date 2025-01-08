"use client";

import { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { LuHandHelping } from "react-icons/lu";
import { IoMdDownload } from "react-icons/io";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";
import { FaCopyright } from "react-icons/fa6";
import { SiFiles } from "react-icons/si";

export const menuItems = [
  {
    icon: <LuHandHelping />,
    text: "Support Us",
    link: "/support-us",
  },
  {
    icon: <IoMdDownload />,
    text: "Download Dua App",
    link: "/download-dua-app",
  },
  {
    icon: <MdOutlinePrivacyTip />,
    text: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    icon: <BsFillPatchCheckFill />,
    text: "Thanks & Credits",
    link: "/thanks-credits",
  },
  {
    icon: <MdError />,
    text: "About Us",
    link: "/about-us",
  },
  {
    icon: <FaCopyright />,
    text: "Copyright Warning",
    link: "/copyright-warning",
  },
  {
    icon: <SiFiles />,
    text: "Our Other Projects",
    link: "/other-projects",
  },
];

const NavDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <FaSortDown
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-500 cursor-pointer shadow-xl"
      />
      {isOpen ? (
        <div className="flex flex-col items-end absolute top-10 -left-[260px]">
          <div className="bg-white size-[20px] rotate-45 mr-6"></div>
          <div className="bg-white pt-10 pb-7 rounded-[14px] shadow-xl space-y-3 pr-20 pl-7 -mt-[10px]">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className="flex gap-3 items-center text-[18px] font-[400] text-[#1FA45B]"
              >
                {item.icon}
                <p className="text-[14px] text-gray-600 text-nowrap">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavDropDown;
