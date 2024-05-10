import React, { useState } from "react";
import Counter from "./Counter";
import Box from "./Box";

const App = () => {
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      isTrue: false,
    },
    {
      id: 2,
      question: "How do you create a React component?",
      answer:
        "You can create a React component by defining a JavaScript function or class that returns JSX (a syntax extension for JavaScript).",
      isTrue: true,
    },
    {
      id: 3,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your React components.",
      isTrue: false,
    },
    {
      id: 4,
      question: "What are props in React?",
      answer:
        "Props (short for properties) are a way to pass data from parent to child components in React.",
      isTrue: true,
    },
    {
      id: 5,
      question: "How do you handle state in React?",
      answer:
        "You can handle state in React by using the useState() hook (for functional components) or by defining a state property in a class component.",
      isTrue: true,
    },
  ];

  return (
    <div>
      <Counter />
       <h1 className="font-bold font-serif text-2xl mb-2">FAQ</h1>
      <div>
        {faqs.map((faq) => (
          <Box key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default App;
