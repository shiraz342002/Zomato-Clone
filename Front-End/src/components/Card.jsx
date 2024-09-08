import { Link } from 'react-router-dom';

const SmallCard = ({ imgSrc, text, link, additionalText }) => {
  return (
    <div className="w-[500px] mt-10 border border-gray-300 rounded-lg cursor-pointer m-3 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <Link to={link} className="block">
        <div className="w-full h-[50%] rounded-t-lg overflow-hidden">
          <img src={imgSrc} alt="card image" className="w-full h-[154px] object-cover" />
        </div>
        <div className="w-full h-[25%] mt-4 flex items-center px-4  rounded-b-lg">
          <div className="text-gray-800 text-xl font-semibold">
            {text}
          </div>
        </div>
      </Link>
      <div className="w-full h-[25%] flex items-center px-4 mb-5 rounded-b-lg">
        <div className="text-1xl text-gray-600">
          {additionalText}
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
