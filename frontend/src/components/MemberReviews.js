import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function MemberReviews() {
  const reviews = [
    {
      id: 1,
      name: "Sophie Johnson",
      role: "Theater Enthusiast",
      rating: 5,
      text: "The production of 'Hamlet' was absolutely breathtaking. The set design and performances were world-class. I've been to many theaters across the country, but this one consistently delivers exceptional experiences.",
      image: "/api/placeholder/80/80"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Drama Critic",
      rating: 4,
      text: "I was thoroughly impressed by the innovative direction in 'A Streetcar Named Desire'. The actors brought new dimensions to these classic characters, and the intimate venue created an immersive atmosphere that drew me in completely.",
      image: "/api/placeholder/80/80"
    },
    {
      id: 3,
      name: "Ava Rodriguez",
      role: "Membership Holder",
      rating: 5,
      text: "My family and I have been season ticket holders for three years now, and the quality of productions continues to exceed our expectations. The theater's commitment to diversity in storytelling is particularly commendable.",
      image: "/api/placeholder/80/80"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Local Patron",
      rating: 5,
      text: "From the moment you walk in, the staff makes you feel welcome. The recent musical production was spectacular - beautiful choreography, powerful vocals, and an orchestra that brought the whole experience to life.",
      image: "/api/placeholder/80/80"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 5000); // Change slide every 5 seconds
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, reviews.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={16} 
        className={i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
      />
    ));
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-gray-50 rounded-lg shadow-lg overflow-hidden" style={{ maxWidth: '600px', maxHeight: '400px' }}>
      <div className="px-4 py-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-3">What Our Members Say</h2>
        
        <div className="relative">
          {/* Main review card */}
          <div 
            className="transition-opacity duration-500 bg-white rounded-lg shadow-md p-4 flex justify-center items-center"
            style={{ height: '280px', overflowY: 'auto' }}
          >
            <div className="flex flex-row gap-3 items-start pl-2 pr-2">
              <div className="flex-1">
                <div className="flex items-center mb-1">
                  {renderStars(reviews[currentIndex].rating)}
                </div>
                
                <div className="relative">
                  <Quote size={16} className="absolute -top-1 -left-2 text-gray-200 opacity-50" />
                  <p className="text-gray-700 italic text-md mb-3 relative z-10 pl-1">
                    {reviews[currentIndex].text}
                  </p>
                </div>
                
                <div className="flex flex-row items-center gap-2">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                        <img 
                            src={reviews[currentIndex].image} 
                            alt={reviews[currentIndex].name}
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                    <div className='mt-2'>
                        <p className="font-bold text-gray-800 text-sm">{reviews[currentIndex].name}</p>
                        <p className="text-gray-500 text-xs">{reviews[currentIndex].role}</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft size={16} />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight size={16} />
          </button>
        </div>
        
        {/* Indicators */}
        <div className="flex justify-center gap-1 mt-3">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}