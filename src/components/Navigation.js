// import React from "react";
// import { useState } from "react";
// import ContactForm from "./ContactForm";
// import Logo from "../assests/Logo.png"

// const Navigation = () => {
//   const [isFormOpen, setIsFormOpen] = useState(false);

//   const handleButtonClick = () => {
//     setIsFormOpen(true);
//   };

//   const scrollToSection = (event, id) => {
//     event.preventDefault(); // Prevent default anchor behavior
//     const targetSection = document.querySelector(id);
//     if (targetSection) {
//       targetSection.scrollIntoView({
//         behavior: 'smooth', // Smooth scrolling
//         block: 'start' // Align the top of the section with the top of the viewport
//       });
//     }
//   };

//   return (
//     <nav className="bg-white text-lg text-black  px-10 shadow-lg rounded-xl">
//       <div className="container mx-auto flex justify-between items-center">
//         <img src={Logo} className="h-24" />
//         <div className="flex-1">
//         <ul className="flex justify-around items-center">
//         <li>
//             <a
//               href="#home"
//               className="hover:underline"
//               onClick={(e) => scrollToSection(e, '#home')}
//             >
//               Home
//             </a>
//           </li>
//           <li>
//             <a
//               href="#aboutus"
//               className="hover:underline"
//               onClick={(e) => scrollToSection(e, '#aboutus')}
//             >
//               About Us
//             </a>
//           </li>
//           <li>
//             <a
//               href="#services"
//               className="hover:underline underline-white"
//               onClick={(e) => scrollToSection(e, '#services')}
//             >
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href="#faq"
//               className="hover:underline"
//               onClick={(e) => scrollToSection(e, '#faq')}
//             >
//               FAQ
//             </a>
//           </li>
//         </ul>
//         </div>
//         <button
//   className="bg-accent text-black rounded-full px-4 py-2 hover:bg-yellow-300"
//   onClick={handleButtonClick}
// >
//   Get a Free Quote
// </button>
//       </div>
//       {isFormOpen && <ContactForm />}
//     </nav>
//   );
// };

// export default Navigation;

import React, { useState } from "react";
import ContactForm from "./ContactForm";
import Logo from "../assests/Logo.png"

const Navigation = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleButtonClick = () => {
    setIsFormOpen(true);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const targetSection = document.querySelector(id);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="bg-white text-lg text-black px-4 sm:px-10 shadow-lg rounded-xl">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <img src={Logo} alt="Logo" className="h-16 sm:h-24" />

        <div className="flex-1 mt-4 sm:mt-0">
          <ul className="flex flex-col sm:flex-row justify-around items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <li>
              <a
                href="#home"
                className="hover:underline"
                onClick={(e) => scrollToSection(e, '#home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#aboutus"
                className="hover:underline"
                onClick={(e) => scrollToSection(e, '#aboutus')}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:underline"
                onClick={(e) => scrollToSection(e, '#services')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:underline"
                onClick={(e) => scrollToSection(e, '#faq')}
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        <button
          className="bg-accent text-black rounded-full px-4 py-2 hover:bg-yellow-300"
          onClick={handleButtonClick}
        >
          Get a Free Quote
        </button>
      </div>
      {isFormOpen && <ContactForm />}
    </nav>
  );
};

export default Navigation;
