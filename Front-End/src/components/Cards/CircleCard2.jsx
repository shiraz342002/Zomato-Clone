const CircleCard2 = ({ imgSrc, name, time }) => {
    return (
      <div className="w-[150px] h-[150px] m-4 cursor-pointer">
        <div className="w-full h-full flex flex-col items-center">
          <div className="w-full h-[75%] rounded-full overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover rounded-full" src={imgSrc} alt="food image" />
          </div>
          <div className="w-full h-[25%] mt-2 text-center">
            <div className="text-lg font-normal text-gray-800">
              {name}
            </div>
            <div className="text-sm font-normal text-gray-500">
              {time} min
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CircleCard2;
  