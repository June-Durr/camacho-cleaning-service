// import React from "react";
// import ML from "../assests/Mario and Luigi.png"

// const Hero = () => {
//   return (
//     <section className="flex relative ">
//       <div className="app-hero bg-gradient-to-r from-primary to-secondary rounded-xl text-left grid grid-cols-2">
//         <div className="flex flex-wrap text-white px-24">
//           <h1 className="text-lg font-bold m-4">
//           Camacho Cleaning Service
//           </h1>
//           <h2 className="text-4xl mb-6 whitespace-normal m-4">
//           We provide professional cleaning services for homes and businesses.
//           Let us make your space shine!
//           </h2>

//           <button className="bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-800 transition m-4">
//             Get a Free Quote
//           </button>
//           </div>
//           <div className="ml-auto">
//           <img src={ML} alt="mario and luigi" className="translate-y-1.5 mr-28 scale-110"/>
//           </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import ML from "../assests/Mario and Luigi.png";

const Hero = () => {
  return (
    <section className="flex relative">
      <div className="app-hero bg-gradient-to-r from-primary to-secondary rounded-xl text-left p-4 md:p-10 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col text-white">
          <h1 className="text-xl font-bold mb-2">
            Camacho Cleaning Service
          </h1>
          <h2 className="text-2xl md:text-4xl mb-4 whitespace-normal">
            We provide professional cleaning services for homes and businesses.
            Let us make your space shine!
          </h2>

          <button className="bg-yellow-500 py-2 px-4 rounded hover:bg-yellow-800 transition">
            Get a Free Quote
          </button>
        </div>
        <div className="flex justify-center items-center mt-4 md:mt-0">
          <img src={ML} alt="Mario and Luigi" className="w-3/4 md:w-auto translate-y-7 md:translate-y-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
