import React from 'react';
import Likebutton from './likebutton';
import { PiThumbsUp } from "react-icons/pi";
interface ImageCardProps {
  src: string;
  nama: string;
  nim: string;
  handleClick: () => void;
  selected: boolean;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, nama, nim, handleClick, selected }) => {
  return (
    <div
      onClick={handleClick}
      className="px-10 max-w-sm rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:transition-transform hover:scale-105"
    >
      <a href="#">
        <img className="rounded-t-xl flex-shrink" src={src} alt="" />
        <div className='flex flex-row bg-black py-2 px-2 rounded-b-xl'>
          <PiThumbsUp className="text-white border-2 rounded-full p-1 mr-3 ml-5" size={40}/>
          <p className='text-white align-middle font-GillSans text-3xl'>1</p>
        </div>
      </a>
    </div>
  );
};

export default ImageCard;
