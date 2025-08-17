import React from 'react';
import HomePage from "./components/HomePage"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HomePage />
    </div>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        🚀 Tailwind is working!
      </h1>
    </div>
  );
}

export default App;
