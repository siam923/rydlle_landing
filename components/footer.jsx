import { Phone, Mail, Globe } from "lucide-react";

const FooterComponent = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div id="contact" className="w-full mx-auto px-4 py-10">
        <div className="text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-4">KEEP CONNECTED</h2>
            <div className="flex justify-center gap-4 items-center">
              <Phone color="white" size={24} />
              <span>+880 1762 884400</span>
            </div>
            <div className="flex justify-center gap-4 items-center my-2">
              <Mail color="white" size={24} />
              <span>rydlle@outlook.com</span>
            </div>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200">
            Get in Touch
          </button>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Rydlle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
