
import { useState } from "react";
import { FaMapPin } from "react-icons/fa6";
import PlayerCard from "../components/playerCard";

export default function Globe(){
  const [hoveredPin, setHoveredPin] = useState(null);
 const pins = [
    { top: "38%", left: "20%", name: "Ayushi", age: 25, score: 120 },
    { top: "45%", left: "70%", name: "Rohit", age: 27, score: 90  },
    { top: "40%", left: "50%", name: "Sneha", age: 23, score: 105 },
    { top: "35%", left: "45%", name: "Sneha", age: 23, score: 105 },
    { top: "39%", left: "43%", name: "Sneha", age: 23, score: 105 },
    { top: "42%", left: "38%", name: "Sneha", age: 23, score: 105 },
    { top: "48%", left: "35%" , name: "Sneha", age: 23, score: 105},
    { top: "50%", left: "28%", name: "Sneha", age: 23, score: 105 },
    { top: "55%", left: "60%", name: "Sneha", age: 23, score: 105 },
    { top: "80%", left: "40%", name: "Sneha", age: 23, score: 105 },
    { top: "60%", left: "10%", name: "Sneha", age: 23, score: 105 },
  ];

return (
    <div
      style={{
        backgroundImage: `url("/planet.jpg")`,
        backgroundRepeat: "no-repeat",
        position: "relative",
        backgroundSize: "cover",
        borderRadius: "20px",
        height: "600px",
        width: "1200px",
      }}
    >
      {pins.map((pos, index) => (
        <div key={index}>
          <FaMapPin
            onMouseEnter={() => setHoveredPin(index)}
            onMouseLeave={() => setHoveredPin(null)}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              color: "red",
              fontSize: "1.5rem",
              transform: "translate(-50%, -100%)",
              cursor: "pointer",
            }}
          />
          {hoveredPin === index && (
            <div
              style={{
                position: "absolute",
                top: `calc(${pos.top} - 60px)`,
                left: `calc(${pos.left} + 30px)`,
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "10px",
                padding: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                zIndex: 10,
              }}
            >
              <PlayerCard player={pos} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}