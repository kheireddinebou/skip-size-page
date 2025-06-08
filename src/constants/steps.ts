import { FaRegCalendar, FaRegTrashCan } from "react-icons/fa6";
import { FiMapPin } from "react-icons/fi";
import { MdOutlinePayment, MdOutlineShield } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";

export const stepOptions = [
  { title: "Postcode", icon: FiMapPin },
  { title: "Waste Type", icon: FaRegTrashCan },
  { title: "Select Skip", icon: RiTruckLine },
  { title: "Permit Check", icon: MdOutlineShield },
  { title: "Choose Date", icon: FaRegCalendar },
  { title: "Payment", icon: MdOutlinePayment },
];
