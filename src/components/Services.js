// import React from 'react';
// import Cleaning6 from "../assests/Cleaning6.png"

// const services = [
//     {
//         title: "Residential Cleaning",
//         description: "Comprehensive cleaning for your home, including dusting, vacuuming, and sanitizing all areas."
//     },
//     {
//         title: "Office Cleaning",
//         description: "Regular cleaning services for offices, ensuring a tidy and professional environment."
//     },
//     {
//         title: "Deep Cleaning",
//         description: "A thorough clean that reaches every corner of your home, perfect for spring cleaning or special occasions."
//     },
//     {
//         title: "Move-In/Move-Out Cleaning",
//         description: "Detailed cleaning for homes before you move in or after you move out, ensuring a fresh start."
//     },
//     {
//         title: "Post-Construction Cleaning",
//         description: "Specialized cleaning to remove dust and debris after construction or renovation projects."
//     },
//     {
//         title: "Carpet Cleaning",
//         description: "Professional carpet cleaning to remove stains, dirt, and allergens for a healthier home."
//     }
// ];

// const Services = () => {
//     return (
//       <div className="app-center bg-secondary rounded-lg shadow-md mb-6 grid grid-cols-2">
//         <img src={Cleaning6} className='scale-90 rounded-3xl border border-primary' />
//       <ul className="space-y-2 text-center pr-8">
//       <h2 className="text-2xl font-bold text-accent text-center pt-[20%] ">Our Services</h2>
//           {services.map((service, index) => (
//               <li key={index} className="border border-primary  rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
//                   <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
//                   <p className="text-black">{service.description}</p>
//               </li>
//           ))}
//       </ul>
//   </div>
//     );
// };

// export default Services;

import React from 'react';
import Cleaning6 from "../assests/Cleaning6.png"

const services = [
    {
        title: "Residential Cleaning",
        description: "Comprehensive cleaning for your home, including dusting, vacuuming, and sanitizing all areas."
    },
    {
        title: "Office Cleaning",
        description: "Regular cleaning services for offices, ensuring a tidy and professional environment."
    },
    {
        title: "Deep Cleaning",
        description: "A thorough clean that reaches every corner of your home, perfect for spring cleaning or special occasions."
    },
    {
        title: "Move-In/Move-Out Cleaning",
        description: "Detailed cleaning for homes before you move in or after you move out, ensuring a fresh start."
    },
    {
        title: "Post-Construction Cleaning",
        description: "Specialized cleaning to remove dust and debris after construction or renovation projects."
    },
    {
        title: "Carpet Cleaning",
        description: "Professional carpet cleaning to remove stains, dirt, and allergens for a healthier home."
    }
];

const Services = () => {
    return (
      <div className="app-center bg-secondary rounded-lg shadow-md mb-6 p-4 md:p-6 grid grid-cols-1 md:grid-cols-2">
        <img src={Cleaning6} alt="Cleaning Services" className='scale-90 rounded-3xl border border-primary mb-4 md:mb-0 md:mr-4' />
        <ul className="space-y-4 text-center">
          <h2 className="text-2xl font-bold text-accent mb-4">Our Services</h2>
          {services.map((service, index) => (
              <li key={index} className="border border-primary rounded-lg p-3 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-primary">{service.title}</h3>
                  <p className="text-black">{service.description}</p>
              </li>
          ))}
        </ul>
      </div>
    );
};

export default Services;
