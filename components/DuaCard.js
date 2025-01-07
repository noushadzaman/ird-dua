import DuaLogo from "@/public/dua-logo.png";
import Image from "next/image";
import DuaCardBtns from "./DuaCardBtns";

const DuaCard = ({ dua, i }) => {
  console.log(dua);

  return (
    <section
      id={`dua-card-${dua.id}`}
      style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
      className="px-[30px] py-[15px] rounded-[10px] bg-white space-y-[28px]"
    >
      {/* content */}

      <div className="flex gap-[10px] items-center text-[#1FA45B] font-[600] leading-[25px]">
        <Image width={35} height={35} src={DuaLogo} alt="Logo" />
        <p>
          {dua.id}. {dua.dua_name_en}
        </p>
      </div>

      <p className="font-[400] leading-[24px] text-[#393939]">{dua.top_en}</p>

      {dua?.dua_arabic ? (
        <p className="text-right text-[#393939] leading-[71px] font-[400] text-[24px]">
          {dua.dua_arabic}
        </p>
      ) : null}

      <div className="space-y-[10px] leading-[25px]">
        {dua?.transliteration_en ? (
          <p className="italic">
            <span className="font-[600] not-italic">Transliteration: </span>
            {dua.transliteration_en}
          </p>
        ) : null}
        {dua?.translation_en ? (
          <p>
            <span className="font-[600]">Translation: </span>
            {dua.translation_en}
          </p>
        ) : null}
        {dua?.bottom_en ? <p>{dua.bottom_en}</p> : null}
      </div>

      {dua?.refference_en ? (
        <div className="leading-[24px]">
          <p className="font-[600] text-[#1FA45B]">Reference:</p>
          <p className="font-[500] text-[#393939]">{dua.refference_en}</p>
        </div>
      ) : null}
      {/*  */}
      <DuaCardBtns dua={dua} />
    </section>
  );
};

export default DuaCard;
