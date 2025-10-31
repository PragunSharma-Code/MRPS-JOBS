import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.7, 0.95]);
  const navbarBlur = useTransform(scrollY, [0, 100], [10, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Hot Jobs", href: "#hotjobs" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      style={{
        opacity: navbarOpacity,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-card border-b border-white/20 shadow-lg"
          : "glass-dark"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? "bg-gradient-primary bg-clip-text text-transparent" : "text-white text-shadow"
            }`}>
              <img src='./logo.png' alt="LOGO" width='250' height='250' />
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                onClick={() => scrollToSection(link.href)}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-primary hover:opacity-90 transition-all hover:scale-105 shadow-glow"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-card border-t border-white/20"
        >
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-gradient-primary"
            >
              Get in Touch
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
