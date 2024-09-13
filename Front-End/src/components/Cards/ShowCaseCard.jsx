import { Link } from 'react-router-dom';
import upArrowIcon from '../../assets/icons/up-arrow-icon.png';
import maxSAfety from '../../assets/icons/maxsafty.png';
import star from '../../assets/icons/star.png';

const ShowCaseCard = (props) => {
    const { link2, promoted, time, offB, proExtraB, off, proExtra, name, rating, imgSrc } = props;
    let link = "/" + "hyderabad/paradise/order";

    return (
        <Link to={link} className="block w-full sm:w-[300px] h-auto min-h-[300px] max-h-[450px] m-2 p-3 rounded-lg cursor-pointer no-underline hover:outline hover:outline-4 hover:bg-white hover:shadow-lg">
            <div className="flex flex-col h-full">
                <div className="relative w-full h-3/5">
                    {promoted && (
                        <div className="absolute top-2 left-2 px-2 py-1 bg-white bg-opacity-20 text-white text-xs font-medium rounded-md">
                            Promoted
                        </div>
                    )}
                    <img className="w-full h-full min-h-[250px] object-cover rounded-lg" src={imgSrc} alt="food" />
                    {offB && (
                        <div className="absolute bottom-5 left-0 px-2 py-1 bg-blue-500 text-white font-bold text-sm rounded-r-lg">
                            {off}% OFF
                        </div>
                    )}
                    {proExtraB && (
                        <div className="absolute bottom-5 left-0 px-2 py-1 bg-red-500 text-white font-bold text-sm rounded-r-lg">
                            Pro extra {proExtra}% OFF
                        </div>
                    )}
                    <div className="absolute bottom-5 right-5 px-2 py-1 bg-gray-300 text-gray-800 font-semibold text-xs rounded-md">
                        {time} min
                    </div>
                </div>
                <div className="mt-3">
                    <div className="flex justify-between mb-2">
                        <div className="text-lg font-semibold text-gray-800">{name}</div>
                        <div className="flex items-center bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-lg">
                            {rating}
                            <img className="w-3 h-3 ml-1" src={star} alt="rating star" />
                        </div>
                    </div>
                    <div className="flex justify-between text-gray-600">
                        <div>South Indian</div>
                        <div>₹<span className="font-semibold">350</span> for <span>One</span></div>
                    </div>
                </div>
                <div className="border-t mt-2 pt-2">
                    <div className="flex items-start justify-start">
                        <div className="ml-2 text-sm font-medium text-gray-400">Sri Ganganagar Locality, Sri Ganganagar</div>
                    </div>
                    <div className="flex items-center mt-2">
                        <img className="w-5 h-5" src={upArrowIcon} alt="up arrow" />
                        <div className="ml-2 text-sm font-medium text-gray-600">9000+ orders placed from here recently</div>
                        <img className="w-10 h-5 ml-auto" src={maxSAfety} alt="max safety" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ShowCaseCard;
