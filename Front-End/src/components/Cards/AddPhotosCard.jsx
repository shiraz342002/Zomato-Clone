import { useState } from 'react';
import cameraIcon from '/icons/photo-camera.png';
import UploadPhotosModal from '../../../../Modals/UploadPhotosModal/UploadPhotos';

const AddPhotosCard = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div
        className="w-full h-full bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
        onClick={() => setModal(true)}
      >
        <div className="w-full h-full flex items-center justify-center bg-gray-900 rounded-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className="bg-gray-600 p-2 rounded-full">
              <img src={cameraIcon} className="filter invert" alt="Camera Icon" />
            </div>
            <span className="text-white text-lg mt-2">Add Photos</span>
          </div>
        </div>
      </div>
      {modal && <UploadPhotosModal setModal={setModal} />}
    </>
  );
};

export default AddPhotosCard;
