import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    "SCICOM InfoTech",
    "DMI Innovation",
    "SS&C Globeop",
    "Kale Consultants",
    "U-To Solutions",
    "Tumlare Software",
    "ACT21",
    "4iSoft",
    "CBSL",
    "Mckinsey",
    "HCL Technologies",
    "Krista Software",
    "Cygnus Ujala",
    "DCB Bank",
    "Kohtak Mahindra Bank",
    "Svakarma",
    "STCI",
    "Astun Technologies",
    "Cirrius Technologies",
    "Ansal Group",
  ];

  return (
    <section id="clients" className="py-32 bg-gradient-subtle relative overflow-hidden" ref={ref}>
      {/* Decorative background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Clients</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Trusted By Industry Leaders
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We've forged lasting partnerships with prominent organizations across IT, Banking, 
            and NBFC sectors, consistently delivering talent that drives their success
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass-card p-12 rounded-3xl shadow-elegant border border-white/30 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-card-shadow hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 flex items-center justify-center group border border-white/40"
              >
                <p className="text-primary font-bold text-center group-hover:scale-105 transition-transform duration-300">
                  {client}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-12 rounded-3xl shadow-elegant border border-white/30 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-foreground/90 italic leading-relaxed mb-6 text-center">
                "Our clients consistently recognize and acknowledge the exceptional performance, 
                cultural alignment, and long-term value of the professionals we place within their 
                organizations. These testimonials and ongoing partnerships reinforce our unwavering 
                commitment to delivering recruitment solutions that exceed expectations and create 
                lasting impact."
              </p>
              <div className="text-center">
                <p className="text-primary font-bold text-lg">MRPS Jobs Leadership Team</p>
                <p className="text-muted-foreground">Committed to Your Success</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-10 rounded-2xl shadow-card-shadow max-w-4xl mx-auto border border-white/30">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Why Leading Organizations Choose MRPS Jobs
            </h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Our client portfolio spans Fortune 500 companies, innovative startups, and established 
              industry leaders who trust us to deliver talent that transforms their businesses. We don't 
              just meet expectations—we consistently exceed them through our deep industry expertise, 
              rigorous quality standards, and genuine commitment to long-term partnership success.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
