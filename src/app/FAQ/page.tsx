// src/components/FAQ.tsx
"use client";

import { useState } from "react";

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      question: "How do I place an order?",
      answer:
        "You can place an order by adding products to your cart and proceeding to checkout. Follow the steps to enter your shipping and payment details.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit cards, debit cards, PayPal, and other popular payment methods.",
    },
    {
      question: "Is my payment information secure?",
      answer:
        "Yes, we use industry-standard encryption to ensure your payment information is secure.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping usually takes 3-5 business days within the US. International shipping may take longer.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries. Shipping costs and delivery times vary depending on the destination.",
    },
    {
      question: "Can I cancel or modify my order?",
      answer:
        "You can cancel or modify your order within 24 hours of placing it. After that, the order may have already been processed for shipping.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. Items must be unused and in their original packaging to be eligible for a return.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order is shipped, you will receive a tracking number via email. You can use this number to track your order on our website.",
    },
    {
      question: "Do you offer discounts or promotions?",
      answer:
        "Yes, we regularly offer discounts and promotions. Sign up for our newsletter to stay updated on the latest deals.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact our customer support team via email at support@example.com or by calling +1 (800) 123-4567.",
    },
  ];

  // State to manage open/close FAQ
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Toggle FAQ
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-white bg-teal-700 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              className="w-full text-left p-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 rounded-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;