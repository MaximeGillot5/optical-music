import React from "react";
import optique1 from "../assets/images/souviens.jpg";
import optique2 from "../assets/images/magenta.jpg";
import optique3 from "../assets/images/homicide.jpg";
import optique4 from "../assets/images/mix.jpg";

const Navbar = () => {
  return (
    <nav className="mb-20">
      <div
        className="bg-white flex flex-col items-start gap-4 overflow-hidden rounded-md p-6 shadow-sm shadow-[#00000050]"
      >
        <span
          className="text-center font-mono text-base font-black uppercase text-neutral-600"
        >
          - select your optical vibe -
        </span>
        <div className="flex items-center gap-4">
          {/* Optical 1 */}
          <div className="relative flex h-[50px] w-[50px] items-center justify-center">
            <input
              type="radio"
              id="radio1"
              name="optical"
              value="optique1"
              className="peer z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div
              className="absolute h-full w-full rounded-full bg-gray-300 p-4 shadow-sm shadow-[#00000050] ring-black duration-300 peer-checked:scale-110 peer-checked:ring-2"
            ></div>
            <div
              className="absolute -z-10 h-full w-full scale-0 rounded-full bg-blue-200 duration-500 peer-checked:scale-[500%]"
            ></div>
            <img
              src={optique1}
              alt="Optique 1"
              className="absolute h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Optical 2 */}
          <div className="relative flex h-[50px] w-[50px] items-center justify-center">
            <input
              type="radio"
              id="radio2"
              name="optical"
              value="optique2"
              className="peer z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div
              className="absolute h-full w-full rounded-full bg-blue-100 p-2 shadow-sm shadow-[#00000050] ring-blue-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"
            ></div>
            <img
              src={optique2}
              alt="Optique 2"
              className="absolute h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Optical 3 */}
          <div className="relative flex h-[50px] w-[50px] items-center justify-center">
            <input
              type="radio"
              id="radio3"
              name="optical"
              value="optique3"
              className="peer z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div
              className="absolute h-full w-full rounded-full bg-pink-100 p-2 shadow-sm shadow-[#00000050] ring-pink-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"
            ></div>
            <img
              src={optique3}
              alt="Optique 3"
              className="absolute h-full w-full rounded-full object-cover"
            />
          </div>

          {/* Optical 4 */}
          <div className="relative flex h-[50px] w-[50px] items-center justify-center">
            <input
              type="radio"
              id="radio4"
              name="optical"
              value="optique4"
              className="peer z-10 h-full w-full cursor-pointer opacity-0"
            />
            <div
              className="absolute h-full w-full rounded-full bg-purple-100 p-2 shadow-sm shadow-[#00000050] ring-purple-400 duration-300 peer-checked:scale-110 peer-checked:ring-2"
            ></div>
            <img
              src={optique4}
              alt="Optique 4"
              className="absolute h-full w-full rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
