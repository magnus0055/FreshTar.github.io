import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill } from "react-icons/fa";
import { BsCodeSlash } from "react-icons/bs";
import { IoIosBook, IoMdSchool } from "react-icons/io";
import {  BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { GiStairsGoal } from "react-icons/gi";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";



const routes = [
  {
    path: "/",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/coding",
    name: "Coding",
    icon: <BsCodeSlash />,
  },
  {
    path: "/messages",
    name: "Academics",
    icon: <IoIosBook />,
  },
  {
    path: "/analytics",
    name: "Campus",
    icon: <IoMdSchool />,
  },
  {
    path: "/file-manager",
    name: "Semester Goals",
    icon: <GiStairsGoal />,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "1st Semester ",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/2fa",
        name: "2nd Semester",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/billing",
        name: "3rd Semester",
        icon: <FaMoneyBill />,
      },
      {
        path: "/settings/4th Smester",
        name: "4th Semester",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/order",
    name: "Other",
    icon: <BsCartCheck />,
  },
  {
    path: "/settings",
    name: "Other",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "other ",
        icon: <BsCodeSlash />,
      },
      {
        path: "/settings/2fa",
        name: "other",
        icon: <FaLock />,
      },
      {
        path: "/settings/billing",
        name: "other",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/saved",
    name: "Other",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  FresHtar
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
