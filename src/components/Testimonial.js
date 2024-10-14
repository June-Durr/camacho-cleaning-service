import React from 'react';

const testimonials = [
  {
    name: "Jane Doe",
    text: "Camacho Cleaning Service transformed my home! Their attention to detail is unmatched.",
    rating: 5, // Optional rating
  },
  {
    name: "John Smith",
    text: "Professional and reliable! I highly recommend them for any cleaning needs.",
    rating: 4,
  },
  {
    name: "Emily Johnson",
    text: "Great service! The team was friendly and did an excellent job.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    text: "My office has never looked cleaner. Will definitely use their services again!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <div className="app-center mx-auto p-6 bg-blue-100 rounded-lg shadow-md m-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">What Our Customers Say</h2>
      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="border border-blue-200 rounded-lg p-4 bg-white shadow-sm">
            <p className="text-gray-700 italic">"{testimonial.text}"</p>
            <p className="mt-2 font-semibold text-blue-800">- {testimonial.name}</p>
            {testimonial.rating && (
              <div className="mt-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">★</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
