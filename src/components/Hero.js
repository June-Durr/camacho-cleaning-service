import React from "react";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Camacho Cleaning Service
        </h1>
        <p className="text-xl mb-6">
          We provide professional cleaning services for homes and businesses.
          Let us make your space shine!
        </p>
        {/* <a
          href="#contact"
          className="bg-white text-blue-600 py-2 px-4 rounded hover:bg-gray-200 transition"
        >
          Get a Free Quote
        </a> */}
      </div>
    </section>
  );
};

export default Hero;
