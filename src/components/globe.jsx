
import { useState } from "react";
import { FaMapPin } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import PlayerCard from "../components/playerCard";

export default function Globe() {
  const [hoveredPin, setHoveredPin] = useState(null);

  const pins = [
    { top: "38%", left: "20%", name: "Ayushi" },
    { top: "45%", left: "70%", name: "Rohit", age: 27, score: 90 },
    { top: "40%", left: "50%", name: "Sneha", age: 23, score: 105 },
    { top: "35%", left: "45%", name: "Sneha", age: 23, score: 105 },
    { top: "42%", left: "38%", name: "Sneha", age: 23, score: 105 },
    { top: "50%", left: "28%", name: "Sneha", age: 23, score: 105 },
    { top: "55%", left: "60%", name: "Sneha", age: 23, score: 105 },
    { top: "60%", left: "10%", name: "Sneha", age: 23, score: 105 },
  ];

  return (
    <div className="relative bg-[url('/planet.jpg')] bg-no-repeat bg-cover rounded-2xl w-[1200px] h-[600px] mx-auto">
      {pins.map((pos, index) => (
        <div key={index}>
          <FaMapPin
            onMouseEnter={() => setHoveredPin(index)}
            onMouseLeave={() => setHoveredPin(null)}
            className="absolute text-red-500 cursor-pointer z-20 text-base -translate-x-1/2 -translate-y-full"
            style={{
              top: pos.top,
              left: pos.left,
            }}
          />
          <AnimatePresence>
            {hoveredPin === index && (
              <motion.div
                className="absolute bg-[#202020] rounded-md p-2 text-left text-white shadow-lg"
                style={{
                  top: `calc(${pos.top} - 235px)`,
                  left: `calc(${pos.left} - 125px)`,
                }}
                initial={{ opacity: 0, scale: 0.5, y: 20, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: -8 }}
                exit={{ opacity: 0, scale: 0.5, y: 20, rotate: -8 }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 15,
                }}
              >
                <PlayerCard player={pos} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
