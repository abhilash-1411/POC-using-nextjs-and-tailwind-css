import React from "react";
import MainHeader from "./MainHeader";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import Link from "next/link";
import { FaAngleRight, FaCheck,FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall} from "react-icons/fi";
import { SiHelpscout } from "react-icons/si";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-200 w-screen  min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-60 p-60s">
          <ul>
            <li
              className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800
        rounded-xl p-4"
            >
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>
            <li
              className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800
        rounded-xl p-4"
            >
              <GrProjects className="mr-2" />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>
            <li
              className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800
        rounded-xl p-4"
            >
              <FaCheck className="mr-2" />
              <h3 className="flex-1">Singule</h3>
              <FaAngleRight />
            </li>

            <li
              className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800
        rounded-xl p-4"
            >
              <FaCheckDouble className="mr-2" />
              <h3 className="flex-1">Complex</h3>
              <FaAngleRight />
            </li>
            <li
              className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800
        rounded-xl p-4"
            >
              <SiHelpscout className="mr-2" />
              <Link href="/about-us">About us</Link>
            </li>
            <li
              className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800
        rounded-xl p-4"
            >
              <FiPhoneCall className="mr-2" />
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1"> {children}</main>
      </div>
      <hr />
    </div>
  );
};

export default MainLayout;
