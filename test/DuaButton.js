"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const DuaButton = ({ dua }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleDuaClick = (duaId) => {
    const params = new URLSearchParams(searchParams);
    params.set("dua", duaId);
    router.replace(`?${params.toString()}`);
  };

  return (
    <button className="block" onClick={() => handleDuaClick(dua.id)}>
      {dua.dua_name_en}
    </button>
  );
};

export default DuaButton;
