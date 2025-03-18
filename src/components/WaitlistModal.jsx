import React, { useState, useEffect } from 'react';

const WaitlistModal = ({ isOpen, onClose, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScWV6esxXTf0LK_OdF6tlab3tv-jw2fsV2JcQ9AZZ-yA0zd3w/formResponse";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("entry.303078323", email);
    formData.append("entry.949428823", firstName);
    formData.append("entry.1282667690", phoneNo);
    try {
      fetch(googleFormURL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });
      alert("Submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setEmail("");
      setFirstName("");
      setPhoneNo("");
      onClose();
    }
  };

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscKey);

    // Prevent scrolling on body when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // If modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white rounded-3xl max-w-md w-full p-8 shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Modal content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">SIGN UP FOR WAITLIST</h2>

          <p className="text-gray-700 mb-6">
            Join our waitlist to get early access to Divine Fitness. We'll reach out to you as soon as new spots open up!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="firstName" className="block text-gray-700 mb-2">
                First name<span className="text-red-500">*</span>
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Jane"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="phoneNo" className="block text-gray-700 mb-2">
                Phone number<span className="text-red-500">*</span>
              </label>
              <input
                id="phoneNo"
                type="number"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Phone number"
                required
                className="w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-4 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              {isSubmitting ? 'Submitting...' : 'Join waitlist'}
              {!isSubmitting && (
                <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;