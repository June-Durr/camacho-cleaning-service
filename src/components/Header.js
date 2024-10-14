// import React from "react";
// // import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// const Header = () => {
//   return (
//     <header className="bg-secondary text-white shadow-lg rounded-lg">
//       <div className="container flex justify-around mx items-center text-center ">
//         {/* Left side (Logo and potentially a tagline) */}
//           <h1 className=""><a>✉️ alberto.camachojr01@gmail.com</a></h1>
//         {/* Right side (Contact information or a call to action) */}
//         <div className="">
//           <p>
//           📞 Call for help:
//             <a href="tel:+15551234567" className="hover:underline">
//               (203) 536-0834
//             </a>
//             {/* Replace with your phone number */}
//           </p>
//           <p className="text-gray-400">Serving Stamford, CT</p>
//           {/* Add your service area */}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";

const Header = () => {
  return (
    <header className="bg-secondary text-white shadow-lg rounded-lg p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left side (Logo and potentially a tagline) */}
        <h1 className="text-lg font-bold">
          <a href="mailto:alberto.camachojr01@gmail.com">✉️ alberto.camachojr01@gmail.com</a>
        </h1>
        
        {/* Right side (Contact information or a call to action) */}
        <div className="mt-4 md:mt-0">
          <p className="text-sm">
            📞 Call for help: 
            <a href="tel:+15551234567" className="hover:underline ml-1">
              (203) 536-0834
            </a>
          </p>
          <p className="text-gray-400 text-xs">Serving Stamford, CT</p>
        </div>
      </div>
    </header>
  );
};

export default Header;