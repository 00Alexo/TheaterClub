import { useState } from 'react';
import { Menu, X} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-2xl">Spotlight Theater Club</Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-yellow-300 transition-colors">About Us</a>
            <a href="#events" className="hover:text-yellow-300 transition-colors">Events</a>
            <a href="#gallery" className="hover:text-yellow-300 transition-colors">Gallery</a>
            <a href="#join" className="hover:text-yellow-300 transition-colors">Join Us</a>
            <a href="#faq" className="hover:text-yellow-300 transition-colors">FAQ</a>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-purple-800 px-4 py-2">
            <div className="flex flex-col space-y-3">
              <a href="#about" className="text-white py-2 hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#events" className="text-white py-2 hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Events</a>
              <a href="#gallery" className="text-white py-2 hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
              <a href="#join" className="text-white py-2 hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>Join Us</a>
              <a href="#faq" className="text-white py-2 hover:text-yellow-300" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
            </div>
          </div>
        )}
      </nav>
  );
}