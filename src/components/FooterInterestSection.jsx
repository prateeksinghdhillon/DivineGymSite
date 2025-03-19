import React, {useState} from 'react'; 
import WaitlistModal from './WaitlistModal';

const FooterInterestSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  // WhatsApp redirect function
  const redirectToWhatsApp = () => {
    const phoneNumber = "918979988358";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    <div className="text-white">
      {/* Hero section with cyclist image */}
      <div className="relative rounded-3xl overflow-hidden mx-4 my-8">
        <div className="relative z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
          {/* Interested heading with button */}
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h2 className="text-yellow-200 text-4xl md:text-5xl font-bold">Ready to Elevate Your Performance?</h2>
            <a
              href="#waitlist"
              className="bg-yellow-200 text-gray-800 rounded-full py-2 px-5 inline-flex items-center justify-between w-48 group transition-all hover:shadow-lg"
            >
              <button
              onClick={openModal}
              className="flex items-center justify-between w-full transition-transform duration-300 ease-in-out">
                <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[-5px]">Join Us</span>
                <span className="transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]">→</span>
              </button>
              <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
            </a>
          </div>
          {/* That's just the start title */}
          <h3 className="text-4xl md:text-6xl font-bold mb-6">THAT'S JUST THE START.</h3>
          {/* Description text */}
          <p className="text-lg md:text-xl max-w-xl">
          Join a community of fitness enthusiasts and elite performers who trust Divine Fitness for expert training and long-term health.
          </p>
        </div>
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gray-900/50">
          <img
            src="/rider2.png"
            alt="Cyclist riding"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* Footer section */}
      <div className="px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
          {/* Left column - Copyright and social links */}
          <div className="mb-8 md:mb-0">
            <div className="mb-4">
              <p className="text-sm">© 2025</p>
              <p className="text-sm">Divine Fitness</p>
            </div>
            <div className="flex flex-col space-y-3 mt-4">
              <a href="https://www.instagram.com/divineunisexgym/" className="text-sm flex items-center hover:text-yellow-200 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                OUR INSTAGRAM
              </a>
              <a href="https://www.instagram.com/shalabh_chaudharyy18/" className="text-sm flex items-center hover:text-yellow-200 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Meet Shalabh
              </a>
            </div>
          </div>
          
          {/* Right column - Contact information */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-bold mb-2">Contact Us</h4>
            
            {/* Phone with WhatsApp */}
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.486-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.72 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
              </svg>
              <button 
                onClick={redirectToWhatsApp}
                className="hover:text-yellow-200 transition-colors"
              >
                +91 8979988358
              </button>
            </div>
            
            {/* Address */}
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {/* Divine Fitness Gym, 12/587/10, Free Ganj Rd, Ganga Nagar Colony, Hapur, Uttar Pradesh 245101 */}
              <div>
                <p className="text-sm">12/587/10, Free Ganj Rd</p>
                <p className="text-sm">Hapur, Uttar Pradesh 245101</p>
                <p className="text-sm">India</p>
              </div>
            </div>
            
            {/* Map link */}
            <a 
              href="https://maps.app.goo.gl/zhWHvByz99crR3qN6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-yellow-200 transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterInterestSection;