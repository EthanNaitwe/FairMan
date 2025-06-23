import { FaSpotify, FaInstagram, FaTiktok, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--deep-charcoal)] border-t border-[var(--off-white)]/10 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 hero-gradient rounded-full"></div>
                <span className="font-bold text-2xl text-[var(--off-white)]">Fair Man</span>
              </div>
              <p className="text-[var(--off-white)]/60 mb-6 max-w-md">
                Bridging tradition with tomorrow's sound. From the heart of Uganda to the world stage, crafting rhythms that celebrate African heritage.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-[var(--off-white)]/60 hover:text-[var(--african-red)] transition-colors text-xl">
                  <FaSpotify />
                </a>
                <a href="#" className="text-[var(--off-white)]/60 hover:text-[var(--golden-yellow)] transition-colors text-xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-[var(--off-white)]/60 hover:text-[var(--rich-green)] transition-colors text-xl">
                  <FaTiktok />
                </a>
                <a href="#" className="text-[var(--off-white)]/60 hover:text-[var(--royal-purple)] transition-colors text-xl">
                  <FaYoutube />
                </a>
                <a href="#" className="text-[var(--off-white)]/60 hover:text-[var(--african-red)] transition-colors text-xl">
                  <FaFacebook />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--off-white)] mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[var(--off-white)]/60">
                <li>
                  <button 
                    onClick={() => handleNavClick("#about")}
                    className="hover:text-[var(--african-red)] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("#music")}
                    className="hover:text-[var(--golden-yellow)] transition-colors"
                  >
                    Music
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("#tour")}
                    className="hover:text-[var(--rich-green)] transition-colors"
                  >
                    Tour Dates
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("#gallery")}
                    className="hover:text-[var(--royal-purple)] transition-colors"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavClick("#contact")}
                    className="hover:text-[var(--african-red)] transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[var(--off-white)] mb-4">Business</h4>
              <ul className="space-y-2 text-[var(--off-white)]/60">
                <li><a href="#" className="hover:text-[var(--golden-yellow)] transition-colors">Booking</a></li>
                <li><a href="#" className="hover:text-[var(--rich-green)] transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-[var(--royal-purple)] transition-colors">Collaborations</a></li>
                <li><a href="#" className="hover:text-[var(--african-red)] transition-colors">Licensing</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[var(--off-white)]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--off-white)]/60 text-sm mb-4 md:mb-0">
              © 2024 Fair Man. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-[var(--off-white)]/60">
              <a href="#" className="hover:text-[var(--african-red)] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[var(--golden-yellow)] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[var(--rich-green)] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
