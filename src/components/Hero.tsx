import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional recruitment services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/90 to-accent/85"></div>
        
        {/* Floating blur orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Sparkles className="w-6 h-6 text-white" />
              <span className="text-white/90 font-medium tracking-wide uppercase text-sm">
                Premier Recruitment Solutions
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Empowering Careers.
              <br />
              <span className="text-white/95">Enabling Growth.</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-white/95 mb-4 leading-relaxed max-w-3xl text-shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              MRPS Jobs stands as your trusted recruitment partner, specializing in connecting 
              exceptional talent with industry-leading organizations across IT, Banking, and NBFC sectors.
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl text-shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We deliver comprehensive human resource solutions that transform businesses and 
              accelerate careers, backed by decades of expertise and an unwavering commitment 
              to excellence in every placement we make.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={scrollToContact}
                className="glass-card hover:glass text-primary hover:text-white border border-white/30 text-lg px-10 py-7 shadow-glow group transition-all hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToAbout}
                className="border-2 border-white/80 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary text-lg px-10 py-7 transition-all hover:scale-105"
              >
                Discover Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-white/10"
        >
          <motion.div className="w-1.5 h-2 bg-white/90 rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
