import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Executive Search",
    "Talent Acquisition",
    "Contract Staffing",
    "Campus Recruitment"
  ];

  const sectors = [
    "IT & Software",
    "Banking & Finance",
    "NBFC Sector",
    "Technical Support"
  ];

  return (
    <footer className="bg-gradient-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-3xl font-bold mb-6">MRPS Jobs</h3>
            <p className="text-white/85 leading-relaxed mb-6">
              Your premier recruitment partner specializing in IT, Banking, and NBFC sectors. 
              Empowering careers and enabling growth across India.
            </p>
            <div className="flex space-x-4">
              <a href="http://www.linkedin.com/in/yogesh-sharma-48b2225" target="_blank" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              {/* <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a> */}
              {/* <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              {services.map((service) => (
                <li key={service} className="hover:text-white transition-colors">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1 text-white/80" />
                <p className="text-white/80">
                  New Delhi, India<br />
                  Bangalore Office
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-white/80" />
                <a href="tel:+9811424596" className="text-white/80 hover:text-white transition-colors">
                  +91 98 1142 4596
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-white/80" />
                <a href="mailto:info@mrpsjobs.com" className="text-white/80 hover:text-white transition-colors">
                  info@mrpsjobs.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-center md:text-left">
              © 2025 MRPS Jobs. All Rights Reserved.
            </p>
            <p className="text-white/70 text-center md:text-right font-medium">
              Empowering Careers. Enabling Growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
