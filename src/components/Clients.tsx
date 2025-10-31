import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const clients = [
    "HCL Technologies",
    "Hans Hyundai",
    "Daikin Industries",
    "NIIT Limited",
    "Ansal Properties",
    "Max Healthcare",
    "Panacea Biotec",
    "Shipping Corporation",
    "Deloitte",
    "SAIC Motor",
    "Omnie Solutions",
    "Galaxy Surfactants",
  ];

  return (
    <section id="clients" className="py-24 bg-primary-lighter/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Trusted By Industry Leaders
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've built lasting partnerships with prominent organizations across multiple sectors
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="bg-white p-8 rounded-lg shadow-card-shadow hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
            >
              <p className="text-primary font-semibold text-center">{client}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-card-shadow max-w-4xl mx-auto">
            <p className="text-lg text-foreground/80 italic leading-relaxed">
              "Our clients consistently acknowledge the exceptional performance and quality 
              of candidates we provide. This recognition reinforces our commitment to 
              delivering outstanding recruitment solutions."
            </p>
            <p className="text-primary font-semibold mt-4">— MRPS Jobs Team</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
