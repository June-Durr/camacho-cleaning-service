import React from 'react';
import Cleaning3 from '../assests/Cleaning3.png'
import Cleaning4 from '../assests/Cleaning4.jpg'
import Cleaning5 from '../assests/Cleaning5.jpg'

//witdh and hieght bug only changes size somewhere after and before size 20
const Service = () => {
  return (
    <section className="services-section bg-gray-100 pt-8 font-family: Poppins">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-bold mb-4">Our Services</h2>
        <p className="text-primary font-bold text-2xl mb-8">
          We Are Offering The Best <br />Clean Services For You
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <img src={Cleaning3} alt="House Cleaning" className="w-21 h-21"  />
            </div>
            <h3 className="text-xl font-semibold mb-2">House Cleaning</h3>
            <p className="text-gray-600">
              Thorough cleaning of all rooms, including kitchens, bathrooms, bedrooms, and living areas.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <img src={Cleaning4} alt="Office Cleaning" className="w-21 h-21" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office Cleaning</h3>
            <p className="text-gray-600">
              Maintain a clean and professional workspace with our comprehensive office cleaning services.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-center mb-4">
              <img src={Cleaning5} alt="Commercial Cleaning" className="w-21 h-21" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Commercial Cleaning</h3>
            <p className="text-gray-600">
              Customized cleaning solutions for businesses of all sizes, from retail stores to industrial facilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;