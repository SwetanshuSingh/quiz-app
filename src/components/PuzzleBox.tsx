"use client";
import { useState, useEffect } from "react";
import { Puzzle } from "lucide-react";

type Icon = {
  x: number;
  y: number;
  size: number;
  rotation: number;
  duration: number;
  delay: number;
};

const RandomPuzzleIcons = () => {
  const [icons, setIcons] = useState<Icon[]>([]);

  useEffect(() => {
    const generateIcons = () => {
      const newIcons = [];
      const numIcons = 80;

      for (let i = 0; i < numIcons; i++) {
        newIcons.push({
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 24,
          rotation: Math.random() * 360,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * -30,
        });
      }

      setIcons(newIcons);
    };

    generateIcons();
  }, []);

  return (
    <div className="w-full h-[400px] md:w-[600px] md:h-[700px] bg-[#181716] rounded-xl relative overflow-hidden">
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute bg-[#E7E7E4] w-fit p-4 rounded-xl"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `rotate(${icon.rotation}deg)`,
            animation: `float-${index} ${icon.duration}s infinite linear`,
            animationDelay: `${icon.delay}s`,
          }}
        >
          <Puzzle size={icon.size} className="text-black opacity-80" />
          <style jsx>{`
            @keyframes float-${index} {
              0% {
                transform: translate(0, 0) rotate(${icon.rotation}deg);
              }
              25% {
                transform: translate(50px, 50px)
                  rotate(${icon.rotation + 90}deg);
              }
              50% {
                transform: translate(0, 100px) rotate(${icon.rotation + 180}deg);
              }
              75% {
                transform: translate(-50px, 50px)
                  rotate(${icon.rotation + 270}deg);
              }
              100% {
                transform: translate(0, 0) rotate(${icon.rotation + 360}deg);
              }
            }
          `}</style>
        </div>
      ))}
    </div>
  );
};

export default RandomPuzzleIcons;
