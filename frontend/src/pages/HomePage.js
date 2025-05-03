import { useState } from 'react';
import {ChevronDown, ChevronUp, Mail, MapPin, Phone } from 'lucide-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// Import your images here
import teatru from '../assets/theater.png'; 
import MemberReviews from '../components/MemberReviews';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  // Placeholder images for gallery
  const galleryImages = [
    { id: 1, src: teatru, alt: "Theater Performance 1", category: "performances" },
    { id: 2, src: teatru, alt: "Rehearsal Session", category: "rehearsals" },
    { id: 3, src: teatru, alt: "Theater Performance 2", category: "performances" },
    { id: 4, src: teatru, alt: "Behind the Scenes", category: "backstage" },
    { id: 5, src: teatru, alt: "Cast Meeting", category: "rehearsals" },
    { id: 6, src: teatru, alt: "Theater Performance 3", category: "performances" },
  ];

  // Upcoming events
  const events = [
    {
      id: 1,
      title: "Summer Shakespeare",
      date: "June 15-17, 2025",
      location: "Campus Amphitheater",
      description: "Our annual Shakespeare production under the stars. This year featuring 'A Midsummer Night's Dream'."
    },
    {
      id: 2,
      title: "Open Auditions",
      date: "May 20, 2025",
      location: "Theater Arts Building, Room 103",
      description: "Seeking actors for our fall production. All experience levels welcome!"
    },
    {
      id: 3,
      title: "Improv Workshop",
      date: "May 25, 2025",
      location: "Student Center",
      description: "Learn the basics of improvisation in this fun, interactive workshop."
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: "Do I need prior experience to join?",
      answer: "Not at all! We welcome members of all experience levels. Whether you're a seasoned performer or completely new to theater, we have opportunities for everyone."
    },
    {
      question: "How often does the club meet?",
      answer: "We typically meet twice a week for rehearsals when preparing for a show, with additional technical and dress rehearsals closer to performance dates. We also hold monthly general meetings and social events."
    },
    {
      question: "Can I help behind the scenes instead of acting?",
      answer: "Absolutely! We need people for set design, costume creation, lighting, sound, stage management, and more. Theater is a collaborative art with roles for everyone."
    },
    {
      question: "How do I audition for shows?",
      answer: "We announce auditions through our email list, social media, and this website. Auditions typically involve reading from the script and sometimes performing a short monologue of your choice."
    }
  ];

  // Filter gallery images based on active tab
  const filteredImages = activeTab === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  // State for show more functionality on mobile
  const [showAllImages, setShowAllImages] = useState(false);

  // Images to display based on viewport and show more state
  const displayedImages = showAllImages ? filteredImages : filteredImages.slice(0, 1);

  // Toggle FAQ expansion
  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Bringing Stories to Life</h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">Join our passionate community of student performers creating unforgettable theatrical experiences</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#join" className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-6 rounded-lg transition-colors">Join Our Club</a>
            <a href="#events" className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 font-bold py-3 px-6 rounded-lg transition-colors">Upcoming Shows</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">About Our Theater Club</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 max-h-[400px] max-w-[600px]">
                <MemberReviews/>
            </div>
            <div className="md:w-1/2 space-y-4">
              <p className="text-lg">We are a vibrant community of student performers, directors, writers, and designers united by our passion for theatrical arts. Founded in 2015, our club has grown from a small group of enthusiasts to a thriving creative collective.</p>
              <p className="text-lg">Our mission is to provide opportunities for students to explore and develop their theatrical talents while creating engaging performances for our campus and local community.</p>
              <p className="text-lg">Whether you're interested in acting, directing, writing, set design, costume creation, or technical production, there's a place for you in our club. We welcome all levels of experience and backgrounds!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Upcoming Events</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="bg-purple-900 text-white py-4 px-6">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center text-gray-700">
                    <span className="font-semibold mr-2">Date:</span> {event.date}
                  </div>
                  <div className="flex items-start text-gray-700">
                    <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600">{event.description}</p>
                  <a href="#" className="inline-block bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-2 px-4 rounded transition-colors">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Our Gallery</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto mb-8"></div>
            
            {/* Category filter buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'all' ? 'bg-purple-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('performances')}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'performances' ? 'bg-purple-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Performances
              </button>
              <button 
                onClick={() => setActiveTab('rehearsals')}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'rehearsals' ? 'bg-purple-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Rehearsals
              </button>
              <button 
                onClick={() => setActiveTab('backstage')}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === 'backstage' ? 'bg-purple-900 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
              >
                Backstage
              </button>
            </div>
          </div>
          
          {/* Mobile View - Show only 1 image with Show More button */}
          <div className="sm:hidden">
            <div className="grid grid-cols-1 gap-6">
              {displayedImages.map((image) => (
                <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                  <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
                </div>
              ))}
            </div>
            
            {/* Show More button - only visible if there are more images to show */}
            {filteredImages.length > 1 && (
              <div className="mt-6 text-center">
                <button 
                  onClick={() => setShowAllImages(!showAllImages)}
                  className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-full transition-colors"
                >
                  {showAllImages ? "Show Less" : "Show More"}
                </button>
              </div>
            )}
          </div>

          {/* Desktop/Tablet View - Show all images */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div key={image.id} className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-105">
                <img src={image.src} alt={image.alt} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-4 text-left font-semibold text-purple-900 hover:bg-gray-50"
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedFaq === index && (
                  <div className="p-4 pt-0 text-gray-600 border-t border-gray-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join/Contact Section */}
      <section id="join" className="py-16 bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Club</h2>
            <div className="h-1 w-24 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail size={20} className="mr-3" />
                  <span>theatreclubexample@university.edu</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={20} className="mr-3" />
                  <span>Arts Building, Room 204, University Campus</span>
                </div>
                <div className="flex items-center">
                  <Phone size={20} className="mr-3" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Meeting Times</h4>
                <p>General meetings: Wednesdays at 6:00 PM</p>
                <p>Rehearsals: Schedule varies by production</p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded text-gray-800" 
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded text-gray-800" 
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="interests" className="block mb-1">Interests</label>
                  <select id="interests" className="w-full p-3 rounded text-gray-800">
                    <option value="">Select your interest</option>
                    <option value="acting">Acting</option>
                    <option value="directing">Directing</option>
                    <option value="writing">Playwriting</option>
                    <option value="tech">Technical Production</option>
                    <option value="design">Set/Costume Design</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full p-3 rounded text-gray-800" 
                    placeholder="Tell us about yourself and why you're interested in joining"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-6 rounded transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Spotlight Theater Club</h3>
              <p className="text-gray-400">Creating unforgettable theatrical experiences since 2015</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Spotlight Theater Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}