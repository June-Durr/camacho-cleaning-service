import React, { useState } from 'react';

const LeadCaptureForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reportTypes, setReportTypes] = useState({
    propertyReport: true,
    miniPropertyReport: false,
    neighborhoodReport: true,
    marketActivityReport: false,
  });

  const handleReportTypeChange = (event) => {
    setReportTypes({
      ...reportTypes,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., send data to backend or email service)
    console.log('Form submitted:', { firstName, lastName, email, phone, reportTypes });
  };

  return (
    <div className="app-center bg-gray-100 p-6 rounded-lg shadow-md m-4"> {/* Light gray background and rounded corners */}
      <form onSubmit={handleSubmit} className="flex px-4"> {/* Use flexbox for layout */}
        {/* Left column */}
        <div className="w-1/2 pr-4"> {/* Take up half the width with right padding */}
 
        <h2 className="text-xl font-bold mb-4 text-primary">Open House</h2> {/* Heading with blue color */}
          <div className="mb-4">
            <label htmlFor="firstName" className="block text-primary font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName" className="block text-primary font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="firstName" className="block text-primary font-bold mb-2">
              E-mail
            </label>
            <input
              type="text"
              id="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-1/2 pl-4"> {/* Take up half the width with left padding */}
          <h2 className="text-xl font-bold mb-4 text-primary">Category</h2>
          <div className="mb-4">
            <label htmlFor="propertyReport" className="flex items-cente p-3">
              <input
                type="checkbox"
                id="propertyReport"
                name="propertyReport"
                className="mr-2"
                checked={reportTypes.propertyReport}
                onChange={handleReportTypeChange}
              />
              Carpet
            </label>
            <label htmlFor="propertyReport" className="flex items-center p-3">
              <input
                type="checkbox"
                id="propertyReport"
                name="propertyReport"
                className="mr-2"
                checked={reportTypes.propertyReport}
                onChange={handleReportTypeChange}
              />
              Waxing
            </label>
            <label htmlFor="propertyReport" className="flex items-center p-3">
              <input
                type="checkbox"
                id="propertyReport"
                name="propertyReport"
                className="mr-2"
                checked={reportTypes.propertyReport}
                onChange={handleReportTypeChange}
              />
              Commercial Cleaning
            </label>
            <label htmlFor="propertyReport" className="flex items-center p-3">
              <input
                type="checkbox"
                id="propertyReport"
                name="propertyReport"
                className="mr-2"
                checked={reportTypes.propertyReport}
                onChange={handleReportTypeChange}
              />
              Residential Cleaning
            </label>
          </div>
          <div className="flex justify-center mt-6"> {/* Center the button */}
          <button type="submit" className="bg-accent text-black rounded-full px-4 py-2 hover:bg-secondary hover:text-white w-64 mx-auto">
        Send Message
      </button>
          </div>
          <div>

  </div>
        </div>
      </form>
    </div>
    
  );
};

export default LeadCaptureForm;