import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function clipboard(text: string) {
  window.navigator.clipboard.writeText(text).then(() => {
    toast(`${text} 복사완료`);
  });
}
