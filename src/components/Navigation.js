import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Camacho Cleaning Service</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#services" className="hover:underline underline-white">
              Services
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
