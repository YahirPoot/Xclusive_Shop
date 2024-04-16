// const ImageGallery = ({ imageUrls }) => {
const ImageCotizacion = () => {
  // Assuming imageUrls is a comma-separated string of image URLs
  // const urlArray = imageUrls.split(',');

  return (
    <div className="images grid grid-cols-7">
      <div className="all-images col-span-2 flex flex-col justify-center">

      </div>
      <div className="selected-image col-span-5">
        <img
          src="https://via.placeholder.com/600x400"
          className="h-[450px] w-auto object-cover object-top"
          alt="Selected Image"
        />
      </div>
    </div>
  );
};

export default ImageCotizacion;


// // const ImageGallery = ({ imageUrls }) => {
//   const ImageGallery = () => {
//     // Assuming imageUrls is a comma-separated string of image URLs
//     // const urlArray = imageUrls.split(',');
  
//     return (
//       <div className='images grid grid-cols-7'>
//         <div className='all-images flex flex-col col-span-2 justify-center'>
//           {/* Replace with example images */}
//           <div key={1} className='image relative rounded-lg'>
//             <img
//               className='w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover object-top border-[1px] border-purple-200'
//               src='https://via.placeholder.com/70x70'
//               alt='Image 1'
//             />
//           </div> 
//           <div key={2} className='image relative rounded-lg'>
//             <img
//               className='w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover object-top border-[1px] border-purple-200'
//               src='https://via.placeholder.com/70x70'
//               alt='Image 2'
//             />
//           </div>
//           <div key={3} className='image relative rounded-lg'>
//             <img
//               className='w-[70px] h-[70px] rounded-lg mb-3 p-1 object-cover object-top border-[1px] border-purple-200'
//               src='https://via.placeholder.com/70x70'
//               alt='Image 3'
//             />
//           </div>
//           {/* Add more image elements as needed */}
//         </div>
//         <div className='selected-image col-span-5'>
//           {/* Replace with a larger example image */}
//           <img
//             src='https://via.placeholder.com/600x400'
//             className='h-[600px] w-auto object-cover object-top'
//             alt='Selected Image'
//           />
//         </div>
//       </div>
//     );
//   };
  
//   export default ImageGallery;
  