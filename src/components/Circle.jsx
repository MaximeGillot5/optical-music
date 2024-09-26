import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import "../App.css";
import music from '../assets/music/LEVEL4.wav'

const Circle = () => {
  const [isAnimating, setIsAnimating] = useState(false); // Suivre l'état de l'animation
  const animationRef = useRef(null); // Référence pour l'animation GSAP
  const audioRef = useRef(null); // Référence pour la musique

  const toggleAnimation = () => {
    if (!audioRef.current.played.length) {
      audioRef.current.play();
    }

    if (isAnimating) {
      animationRef.current?.kill(); 
      gsap.to(".animated-circle", {
        y: 0, 
        borderColor: "#f87171",
        duration: 1,
        ease: "power2.out"
      });
    } else {
      animationRef.current = gsap.to(".animated-circle", {
        y: -40,
        borderColor: ["#f87171", "#8A2BE2", "#FF69B4", "#9400D3", "#FF00FF"], // Changement de couleurs
        ease: "sine.inOut",
        duration: 1,
        stagger: { each: 0.05, from: "end", repeat: -1, yoyo: true }
      });
    }
    setIsAnimating(!isAnimating); // Alterner l'état de l'animation
  };

  return (
    <section
      className="bottom-28 w-96 h-96 relative grid place-items-center cursor-pointer"
      onClick={toggleAnimation} 
    >
        
      <audio ref={audioRef} src={music} preload="auto" />
      
      <div className="animated-circle rounded-full absolute w-full h-full border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[100%] h-[100%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[95%] h-[95%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[90%] h-[90%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[85%] h-[85%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[80%] h-[80%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[75%] h-[75%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[70%] h-[70%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[65%] h-[65%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[60%] h-[60%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[55%] h-[55%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[50%] h-[50%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[45%] h-[45%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[40%] h-[40%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[35%] h-[35%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[30%] h-[30%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[25%] h-[25%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[20%] h-[20%] border border-neutral-600"></div>
      <div className="animated-circle rounded-full absolute w-[15%] h-[15%] border border-neutral-600"></div>
    </section>
  );
};

export default Circle;
