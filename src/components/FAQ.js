import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What types of cleaning services do you offer?",
            answer: "We provide a variety of cleaning services, including residential cleaning, office cleaning, deep cleaning, and post-construction cleaning."
        },
        {
            question: "Are your cleaning products safe for pets and children?",
            answer: "Yes! We use eco-friendly and non-toxic cleaning products that are safe for both pets and children."
        },
        {
            question: "How do I schedule a cleaning appointment?",
            answer: "You can schedule an appointment through our website or by calling our customer service team. We’re happy to assist you!"
        },
        {
            question: "Do I need to be home during the cleaning?",
            answer: "No, you don’t need to be home. Many clients prefer to give us access while they’re away."
        },
        {
            question: "What happens if I’m not satisfied with the cleaning?",
            answer: "Your satisfaction is our priority! If you're not happy with the cleaning, please let us know within 24 hours, and we'll come back to fix it."
        },
        {
            question: "How do you screen your cleaning staff?",
            answer: "All our cleaners are thoroughly vetted with background checks and trained to meet our high standards."
        },
        {
            question: "Do you offer one-time cleanings or only recurring services?",
            answer: "We offer both! You can choose a one-time deep clean or set up a recurring cleaning schedule that fits your needs."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="app-center mx-auto p-6 bg-blue-100 rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Cleaning Service FAQs</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b last:border-0 border-blue-200">
                    <button
                        className="flex justify-between w-full p-4 text-left text-blue-800 hover:bg-blue-100 focus:outline-none rounded"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span>{faq.question}</span>
                        <span className="text-blue-500">{activeIndex === index ? '-' : '+'}</span>
                    </button>
                    {activeIndex === index && (
                        <p className="p-4 text-blue-700 bg-blue-50">{faq.answer}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
