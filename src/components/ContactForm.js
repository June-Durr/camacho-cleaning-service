import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send("service_vajb0vs", "template_ofttagj", formData, "UIhgArm96zCcvmZXQ")
      .then((response) => {
        console.log("Success!", response.status, response.text);
        // Optionally reset the form here
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4 bg-gray-100 rounded shadow-md">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border border-gray-300 p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border border-gray-300 p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="border border-gray-300 p-2 rounded"
        rows="4"
      />
      <button type="submit" className="bg-accent text-black rounded-full px-4 py-2 hover:bg-yellow-300 w-64 mx-auto">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
