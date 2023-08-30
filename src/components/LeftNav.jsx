import React, { useContext } from "react";
import { categories } from "../utils/constants";
import { Context } from "../context/contextAPI";
import { useNavigate } from "react-router-dom";

const LeftNav = () => {
  const { mobileMenu, setSelectedCategory } = useContext(Context);

  const navigate = useNavigate();

  const clickHandler = (name, type) => {
    switch (type) {
      case "category":
        return setSelectedCategory(name);
      case "menu":
        return false;
      default:
        break;
    }
  };

  return (
    <>
      <div
        className={`h-full w-[240px] translate-x-[-240px] pt-3 px-3
        absolute dark:bg-[#0F0F0F] md:relative z-10 md:translate-x-0 transition-all ${
          mobileMenu ? "translate-x-[0px]" : ""
        } `}
      >
        {categories.map((item) => {
          return (
            <React.Fragment key={item.name}>
              <div
                className="flex items-center gap-5 text-white
            hover:bg-[#303030]/[0.6] px-3 py-2 mb-2 rounded-[10px] cursor-pointer"
                onClick={() => {
                  clickHandler(item.name, item.type);
                  navigate("/");
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className=" text-base">
                  {item.type === "home" ? "Home" : item.name}
                </div>
              </div>
              {item.divider ? <hr className="my-5 border-white/[0.2]" /> : null}
            </React.Fragment>
          );
        })}
        <hr className="my-5 border-white/[0.2]" />
      </div>
    </>
  );
};

export default LeftNav;
