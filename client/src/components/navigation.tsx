import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home", color: "hover:text-[var(--african-red)]" },
    { href: "#about", label: "About", color: "hover:text-[var(--golden-yellow)]" },
    { href: "#music", label: "Music", color: "hover:text-[var(--rich-green)]" },
    { href: "#videos", label: "Videos", color: "hover:text-[var(--royal-purple)]" },
    { href: "#tour", label: "Tour", color: "hover:text-[var(--african-red)]" },
    { href: "#gallery", label: "Gallery", color: "hover:text-[var(--golden-yellow)]" },
    { href: "#contact", label: "Contact", color: "hover:text-[var(--rich-green)]" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--deep-charcoal)]/95 backdrop-blur-sm border-b border-[var(--african-red)]/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 hero-gradient rounded-full"></div>
            <span className="font-bold text-xl text-[var(--off-white)] font-sans">Kwame Asante</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`text-[var(--off-white)] transition-colors duration-300 ${item.color}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-[var(--off-white)]">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[var(--deep-charcoal)] border-l border-[var(--african-red)]/20">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`text-[var(--off-white)] text-left py-2 transition-colors duration-300 ${item.color}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
