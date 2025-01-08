import { HiLanguage } from "react-icons/hi2";
import { ImDrawer } from "react-icons/im";
import { PiSquaresFour } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";

const SettingsBar = () => {
  return (
    <div
      style={{ boxShadow: "0 0 0 0.5px #E2E2E2" }}
      className="bg-white rounded-[32px] pt-[35px] px-[20px] w-[300px] xl:mr-[24px] 2xl:mr-[40px]"
    >
      <h2 className="text-[#393939] text-[20px] font-[700] text-center pb-[25px]">
        Settings
      </h2>

      <div className="text-[14px] h-[75vh]">
        <Accordion type="single" collapsible className="space-y-[15px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="size-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full">
                <HiLanguage size={20} />
              </div>
              <p>Language Settings</p>
            </AccordionTrigger>
            <AccordionContent
              style={{
                boxShadow: "0 0 0 0.5px #E2E2E2",
              }}
              className="py-[28px] px-[15px] flex items-center justify-center gap-3"
            >
              <button className="w-full py-[10px] border border-gray-300 rounded-md">
                English
              </button>
              <button className="w-full py-[10px] border border-transparent rounded-md bg-[#1FA45B] text-white">
                বাংলা
              </button>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="size-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full">
                <ImDrawer size={20} />
              </div>
              <p>General Settings</p>
            </AccordionTrigger>
            <AccordionContent
              style={{
                boxShadow: "0 0 0 0.5px #E2E2E2",
              }}
              className="py-[28px] px-[15px]"
            >
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="size-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full">
                <PiSquaresFour size={20} />
              </div>
              <p>Appearance Settings</p>
            </AccordionTrigger>
            <AccordionContent
              style={{
                boxShadow: "0 0 0 0.5px #E2E2E2",
              }}
              className="py-[28px] px-[15px]"
            >
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="size-[38px] bg-[#E8F0F5] flex items-center justify-center rounded-full">
                <PiSquaresFour size={20} />
              </div>
              <p>Appearance Settings</p>
            </AccordionTrigger>
            <AccordionContent
              style={{
                boxShadow: "0 0 0 0.5px #E2E2E2",
              }}
              className="flex items-center justify-between py-[28px] px-[15px]"
            >
              <p>Night Mode</p>
              <Switch />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default SettingsBar;
