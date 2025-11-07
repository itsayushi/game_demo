

export default function PlayerCard({ player }) {
  return (
    <div className="p-3 sm:p-4 shadow-lg flex flex-col sm:w-[180px] md:w-[200px] transition-transform duration-300 hover:scale-105">
      <div className="w-12 h-12 rounded-full overflow-hidden mb-2 ">
        <img src="/profilePhoto.jpeg" style={{height: "140px", width: "130px"}} alt="Player" />
      </div>
      <div className="">
      <div className="">Ayushi singh</div>
       <div className="">Software developer</div>
       <div className="">India</div>
      </div>
     
    </div>
  );
}