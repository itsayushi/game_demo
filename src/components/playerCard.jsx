
import { FaGlobe } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



export default function PlayerCard({ player }) {
  return (
    <div className="flex flex-col">
      <div className="w-full h-full overflow-hidden mb-2 rounded-md">
         <div className="absolute left-[-18px] top-1/3 -translate-y-1/2 bg-[rgba(46,46,46,0.8)]  text-gray w-8 h-8 rounded-full flex items-center justify-center transition">
          <IoIosArrowBack />

          </div>
           <img src="/profilePhoto.jpeg" style={{height: "140px", width: "140px"}} alt="Player" />
           <div className="absolute right-[-18px] top-1/3 -translate-y-1/2 bg-[rgba(46,46,46,0.8)]  text-gray w-8 h-8 rounded-full flex items-center justify-center transition">
            <IoIosArrowForward />


           </div>
      </div>
      <div className="">
      <div className="font-bold">Ayushi singh</div>
       <div className="text-sm">Basketball Player</div>
       <div className="flex items-center gap-2 pt-1">
  <FaGlobe className="text-lg" />
  <span className="pb-[1px] text-sm">India</span>
</div>

      </div>
     
    </div>
  );
}