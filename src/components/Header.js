import React from "react";

const Header = () => {
  return (
    <header className="bg-brown-300 text-red p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side (Logo and potentially a tagline) */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Camacho Cleaning Services Logo"
            className="h-10 mr-3"
          />{" "}
          {/* Add your logo image */}
          <h1 className="text-3xl font-bold">Camacho Cleaning Services</h1>
        </div>

        {/* Right side (Contact information or a call to action) */}
        <div className="text-right">
          <p className="text-lg">
            Call Us:{" "}
            <a href="tel:+15551234567" className="hover:underline">
              (555) 123-4567
            </a>{" "}
            {/* Replace with your phone number */}
          </p>
          <p className="text-gray-700">Serving [Your Service Area]</p>{" "}
          {/* Add your service area */}
        </div>
      </div>
    </header>
  );
};

export default Header;
