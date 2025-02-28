import React, { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className=" text-white py-12 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Newsletter heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-0">
            SUBSCRIBE TO OUR NEWSLETTER.
          </h2>

          {/* Newsletter form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.address"
              className="bg-transparent border border-gray-500 rounded-md px-4 py-3 w-full sm:w-64 md:w-80 focus:outline-none focus:border-gray-300"
              required
            />
            <button
              type="submit"
              className="bg-yellow-200 text-gray-800 rounded-full px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-[-10px]">
                <span>Sign me up</span>
                <span className="ml-1 transition-all duration-300 ease-in-out group-hover:translate-x-[20px]">→</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;