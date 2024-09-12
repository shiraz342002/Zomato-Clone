import { Link } from 'react-router-dom';

const PlacesCard = ({ place, count, link }) => {
    return (
        <Link to={link} className="w-72 p-4 border border-gray-300 rounded-lg flex cursor-pointer m-2 text-gray-800 no-underline hover:shadow-lg">
            <div className="flex-grow flex flex-col justify-around">
                <div className="text-xl font-semibold">{place}</div>
                <div className="font-light">{count} Places</div>
            </div>
            <div className="flex items-center justify-center w-1/12">
                <img className="w-4 h-4 filter invert-40" src="/icons/right-arrow.png" alt="right arrow" />
            </div>
        </Link>
    );
}

export default PlacesCard;