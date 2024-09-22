// import React from 'react';

// const WorldMap = ({ onPinClick }) => {
//   const pins = [
//     { id: 1, x: 300, y: 400, name: 'Page 1' },
//     { id: 2, x: 500, y: 200, name: 'Page 2' },
//     // Add more pins as necessary
//   ];

//   return (
//     // <div className="relative w-full h-full">
//     //   <img
//     //     src="/src/images/worldmap.png"
//     //     alt="World Map"
//     //     className="w-full h-full"
//     //   />
//       {pins.map((pin) => (
//         <div
//           key={pin.id}
//           className="absolute"
//           style={{ left: `${pin.x}px`, top: `${pin.y}px` }}
//         >
//           <button
//             onClick={() => onPinClick(pin)}
//             className="bg-red-500 w-4 h-4 rounded-full"
//             aria-label={`Pin for ${pin.name}`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default WorldMap;
