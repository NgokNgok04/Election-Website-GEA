// interface ImageCardProps {
//     src: string;
//     nama :string;
//     nim :string;
//     handleClick: () => void; // Assuming handleClick is a function with no arguments and no return value
//   }
  
//   const ImageCard: React.FC<ImageCardProps> = ({ src,nama,nim, handleClick }) => {
//     return (
//       <div onClick={handleClick} className="max-w-sm  flex-shrink bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:transition-transform hover:scale-105">
//         <a href="#">
//           <img className="rounded-t-lg flex-shrink" src={src} alt="" />
//         </a>
//         <div className="p-5 text-center">
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nama}</p>
//           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nim}</p>
//           <button className=" inline-flex items-center px-3 py-2 text-sm 
//           font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
//           focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
//         dark:focus:ring-blue-800" >
//             Piih
//           </button>
//         </div>
//       </div>
//     );
//   };
  
//   export default ImageCard;
  

// // components/ImageCard.tsx
// // import React from 'react';

// // interface ImageCardProps {
// //   src: string;
// //   nama: string;
// //   nim: string;
// //   handleClick: () => void;
// // }

// // const ImageCard: React.FC<ImageCardProps> = ({ src, nama, nim, handleClick }) => {
// //   return (
// //     <div className="flex flex-col items-center">
// //       <div className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
// //         <a href="#">
// //           <img className="rounded-t-lg w-full h-48 object-cover" src={src} alt="" />
// //         </a>
// //         <div className="p-5 text-center">
// //           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nama}</p>
// //           <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nim}</p>
// //           <button
// //             className="inline-flex items-center px-3 py-2 text-sm 
// //             font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 
// //             focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
// //             dark:focus:ring-blue-800"
// //             onClick={handleClick}
// //           >
// //             Click me
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ImageCard;

import React from 'react';

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
      className={`max-w-sm flex-shrink bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:transition-transform hover:scale-105 ${
        selected ? 'border-blue-500' : ''
      }`}
    >
      <a href="#">
        <img className="rounded-t-lg flex-shrink" src={src} alt="" />
      </a>
      <div className="p-5 text-center">
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nama}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{nim}</p>
        {selected ? (
          <div className="text-green-500 font-semibold mb-2">Selected</div>
        ) : (
          <div className="text-gray-500 mb-2">Not Selected</div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
