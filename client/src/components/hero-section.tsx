import { Button } from "@/components/ui/button";
import { Play, Calendar, ChevronDown } from "lucide-react";
import { FaSpotify, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function HeroSection() {
  const handlePlayNow = () => {
    // Implement audio playback functionality
    console.log("Play latest track");
  };

  const handleTourDates = () => {
    const element = document.querySelector("#tour");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--deep-charcoal)]/90 via-[var(--african-red)]/30 to-[var(--deep-charcoal)]/90" />
      
      {/* African Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 african-pattern" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          <span className="text-gradient">FAIR</span>
          {/* <br /> */}
          <span className="text-[var(--off-white)]">MAN</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light text-[var(--off-white)]/90">
          Bridging Tradition with Tomorrow's Sound
        </p>
        
        <p className="text-lg md:text-xl mb-10 text-[var(--off-white)]/80 max-w-2xl mx-auto">
          From the heart of Uganda to the world stage, crafting rhythms that celebrate African heritage while pushing musical boundaries.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handlePlayNow}
            className="bg-[var(--african-red)] hover:bg-[var(--african-red)]/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Play className="mr-2 h-4 w-4" />
            Listen Now
          </Button>
          
          <Button
            onClick={handleTourDates}
            variant="outline"
            className="border-2 border-[var(--golden-yellow)] text-[var(--golden-yellow)] hover:bg-[var(--golden-yellow)] hover:text-[var(--deep-charcoal)] px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <Calendar className="mr-2 h-4 w-4" />
            Tour Dates
          </Button>
        </div>
        
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-10">
          <a
            href="#"
            className="text-[var(--off-white)]/60 hover:text-[var(--african-red)] transition-colors duration-300 text-2xl"
          >
            <FaSpotify />
          </a>
          <a
            href="#"
            className="text-[var(--off-white)]/60 hover:text-[var(--golden-yellow)] transition-colors duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-[var(--off-white)]/60 hover:text-[var(--rich-green)] transition-colors duration-300 text-2xl"
          >
            <FaTiktok />
          </a>
          <a
            href="#"
            className="text-[var(--off-white)]/60 hover:text-[var(--royal-purple)] transition-colors duration-300 text-2xl"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[var(--off-white)]/60 h-8 w-8" />
      </div>
    </section>
  );
}
