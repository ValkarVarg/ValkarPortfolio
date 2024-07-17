import React from 'react';
import MikeImage from '../assets/Mike.jpg'; // Assuming this is your image path

function Home() {
  return (
    <div className="bg-licorice min-h-screen font-sans text-cream flex flex-col items-center justify-center">
      <h1 className="font-bold text-3xl mb-4">Mike Williams</h1>
      <img
        src={MikeImage}
        alt="Mike Williams"
        className="w-40 h-auto rounded-full"
      />
      <p className="mt-4">Full-Stack Developer / Project Manager</p>
    </div>
  );
}

export default Home;
