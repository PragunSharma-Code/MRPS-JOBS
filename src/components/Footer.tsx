import { motion } from "framer-motion";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Clients", href: "#clients" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">MRPS Jobs</h3>
            <p className="text-white/80 leading-relaxed">
              Your premier recruitment partner specializing in IT, Banking, and NBFC sectors. 
              Building careers and strengthening businesses across India.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Sectors</h4>
            <ul className="space-y-2 text-white/80">
              <li>IT & Software</li>
              <li>Banking & Finance</li>
              <li>NBFC Sector</li>
              <li>Technical Support</li>
              <li>Executive Leadership</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2025 MRPS Jobs. All Rights Reserved.
            </p>
            <p className="text-white/70 text-sm mt-4 md:mt-0">
              Empowering Careers. Enabling Growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
