import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import { LuOctagonAlert } from "react-icons/lu";

const DuaCardBtns = ({ dua }) => {
  return (
    <div className="flex gap-[39px] text-[#868686] pb-[10px] justify-end">
      <LuCopy className="size-[20px] cursor-pointer" />
      <FaRegBookmark className="size-[20px] cursor-pointer" />
      <FaBookmark className="size-[20px] cursor-pointer" />
      <FaRegLightbulb className="size-[20px] cursor-pointer" />
      <FaLightbulb className="size-[20px] cursor-pointer" />
      <FiShare2 className="size-[20px] cursor-pointer" />
      <LuOctagonAlert className="size-[20px] cursor-pointer" />
    </div>
  );
};

export default DuaCardBtns;
