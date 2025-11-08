
import { FaGlobe } from "react-icons/fa6";

export default function PlayerCard({ player }) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full overflow-hidden mb-2 rounded-md">
        <img src="/profilePhoto.jpeg" style={{height: "160px", width: "140px"}} alt="Player" />
      </div>
      <div className="">
      <div className="font-bold">Ayushi singh</div>
       <div className="text-sm">Basketball Player</div>
       <div className="flex items-center gap-2 pt-2">
  <FaGlobe className="text-lg" />
  <span className="pb-[2px]">India</span>
</div>

      </div>
     
    </div>
  );
}