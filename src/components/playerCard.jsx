

export default function PlayerCard({ player }) {
  return (
    <div className="bg-[#1E1E1E] text-white rounded-xl p-3 sm:p-4 shadow-lg flex flex-col items-center w-[150px] sm:w-[180px] md:w-[200px] text-center transition-transform duration-300 hover:scale-105">
      <div className="w-12 h-12 rounded-full overflow-hidden mb-2 ">
        <img src="/profilePhoto.jpeg" style={{height: "140px", width: "130px"}} alt="Player" />
      </div>
      <div className="text-xs sm:text-sm leading-tight space-y-1">
                

      </div>
     
    </div>
  );
}