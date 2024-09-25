import { useRef, useState } from "react";
import Circle from "../components/Circle";
import Navbar from "../components/Navbar";

const Home = () => {

  return (
    <main className="bg-black h-screen grid place-items-center text-white">
        <Navbar />
        <Circle />
    </main>
  );
};

export default Home;