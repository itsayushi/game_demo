export default function PlayerCard({ player }) {
  return (
    <div className="p-3 sm:p-4 shadow-lg flex flex-col sm:w-[180px] md:w-[200px] transition-transform duration-300 hover:scale-105">
      <div className="w-full h-full overflow-hidden mb-2 rounded-md">
        <img src="/profilePhoto.jpeg" style={{height: "140px", width: "120px"}} alt="Player" />
      </div>
      <div className="">
      <div className="">Ayushi singh</div>
       <div className=""> Basketball</div>
       <div className="">India</div>
      </div>
     
    </div>
  );
}