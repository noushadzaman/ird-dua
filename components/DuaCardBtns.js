"use client";

import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { FiShare2 } from "react-icons/fi";
import { LuOctagonAlert } from "react-icons/lu";
import { toast } from "sonner";

const DuaCardBtns = ({ dua }) => {
  const [bookMarks, setBookMarks] = useState([]);
  const exist = bookMarks.find((item) => item === dua.dua_id);

  const handleCopyClick = () => {
    var textToCopy = `${dua.bottom_en ? dua.bottom_en : ""}\n${dua.top_en}\n${
      dua.refference_en
    }\nCopied from IRD Dua`;
    navigator.clipboard.writeText(textToCopy);
    toast("Copied!");
  };

  const handleBookMarkClick = () => {
    if (exist) {
      const newBookMarks = bookMarks.filter((item) => item !== dua.dua_id);
      setBookMarks(newBookMarks);
    } else {
      setBookMarks([...bookMarks, dua.dua_id]);
    }
  };

  const comingFeatures = () => {
    toast("Feature coming soon.");
  };

  return (
    <div className="flex gap-[39px] text-[#868686] pb-[10px] justify-end">
      <LuCopy
        onClick={handleCopyClick}
        className="size-[20px] cursor-pointer"
      />
      {exist ? (
        <FaBookmark
          exist
          fill={"#1FA45B"}
          onClick={handleBookMarkClick}
          className="size-[20px] cursor-pointer"
        />
      ) : (
        <FaRegBookmark
          exist
          onClick={handleBookMarkClick}
          className="size-[20px] cursor-pointer"
        />
      )}
      <FaRegLightbulb
        onClick={comingFeatures}
        className="size-[20px] cursor-pointer"
      />
      <FiShare2
        onClick={comingFeatures}
        className="size-[20px] cursor-pointer"
      />
      <LuOctagonAlert
        onClick={comingFeatures}
        className="size-[20px] cursor-pointer"
      />
    </div>
  );
};

export default DuaCardBtns;