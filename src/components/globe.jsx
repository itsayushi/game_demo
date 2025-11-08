import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayerCard from "../components/playerCard";

export default function Globe() {
  const [hoveredPin, setHoveredPin] = useState(null);

  const pins = [
    { top: "37%", left: "47%" },
    { top: "37%", left: "49%" },
    { top: "41%", left: "46%" },
    { top: "49%", left: "44%" },
    { top: "46%", left: "49%" },
    { top: "56%", left: "25%" },
  ];

  return (
    <div className="relative bg-[url('/globe.png')] bg-no-repeat bg-cover rounded-2xl w-[1200px] h-[600px] mx-auto">
      {pins.map((pos, index) => (
        <div key={index}>
         
          <div
            onMouseEnter={() => setHoveredPin(index)}
            onMouseLeave={() => setHoveredPin(null)}
            className="absolute cursor-pointer z-100"
            style={{
              top: pos.top,
              left: pos.left,
              width: "50px",  
              height: "50px",
              transform: "translate(-50%, -50%)",
            }}
          />

          <AnimatePresence>
            {hoveredPin === index && (
              <motion.div
                className="absolute bg-[rgba(46,46,46,0.8)] rounded-md p-2 text-left text-white shadow-lg"
                style={{
                  top: `calc(${pos.top} - 230px)`,
                  left: `calc(${pos.left} - 155px)`,
                }}
                initial={{ opacity: 0, scale: 0.5, x: 50,rotate: -4 }}
                animate={{ opacity: 1, scale: 1, x: 0,rotate: -4  }}
                exit={{ opacity: 0, scale: 0.5, x: -50, rotate: -4  }}
                transition={{
                  duration: 0.2, 
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


