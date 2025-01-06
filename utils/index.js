import DUA_IMPORTANCE from "@/public/icon/dua-imp.png";
import ZIKR from "@/public/icon/zikr.png";
import PRAY_Hand from "@/public/icon/praying-ico.png";
import PRAY_TIME from "@/public/icon/pray-hand.png";
import DAY_NIGHT from "@/public/icon/day-night-ico.png";
import SLEEP from "@/public/icon/sleep-ico.png";
import CLOTH from "@/public/icon/cloth.png";
import HOME_ICON from "@/public/icon/home.png";
import TOILET from "@/public/icon/toilet.png";
import AZAN from "@/public/icon/azan.png";
import BOOK from "@/public/sidebar/book.png";
import BULB from "@/public/sidebar/bulb.png";
import CHAT from "@/public/sidebar/chat.png";
import HOME from "@/public/sidebar/home.png";
import MARK from "@/public/sidebar/mark.png";
import MENU from "@/public/sidebar/menu.png";
import RUQYAH from "@/public/sidebar/ruqyah.png";
import LOGO from "@/public/sidebar/logo.png";
import LOGO2 from "@/public/sidebar/logo-2.png";

export { BOOK, BULB, CHAT, HOME, MARK, MENU, RUQYAH, LOGO, LOGO2 };

export const findCatLogo = (icon) => {
  switch (icon) {
    case "duar_gurutto":
      return DUA_IMPORTANCE;
    case "zikirer_fozilot":
      return ZIKR;
    case "dua_kobuler_somoy":
      return PRAY_Hand;
    case "jader_dua_kobul_hoy":
      return DUA_IMPORTANCE;
    case "poshak":
      return CLOTH;
    case "sokal_sondha":
      return DAY_NIGHT;
    case "ghum":
      return SLEEP;
    case "bari":
      return HOME_ICON;
    case "toilet":
      return TOILET;
    case "azan_ikamot":
      return AZAN;

    default:
      return PRAY_TIME;
  }
};

console.log(findCatLogo("zikirer_fozilot"));
