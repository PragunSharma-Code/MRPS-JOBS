import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to connecting exceptional talent with outstanding opportunities"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building lasting partnerships through dedication and excellence"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Delivering premium recruitment solutions with proven results"
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "Empowering careers while strengthening business success"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About MRPS Jobs
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Where Expertise Meets Excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              Your Premier Recruitment Partner
            </h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              MRPS Jobs is a professionally managed recruitment and staffing consultancy 
              that has established itself as a trusted name in the talent acquisition industry. 
              Headquartered in New Delhi with operations in Bangalore, we specialize in providing 
              comprehensive human resource solutions to leading organizations across India.
            </p>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Our expertise spans the IT, Banking, and NBFC sectors, where we maintain an 
              extensive database of skilled professionals ready to meet your organizational needs. 
              With a proven track record of successful placements, we pride ourselves on 
              understanding both client requirements and candidate aspirations.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We deliver experienced professionals at all levels across various functional areas, 
              significantly reducing time-to-hire while ensuring quality matches. Our clients 
              consistently recognize the exceptional performance of our recruits, reinforcing 
              our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-card-shadow hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <value.icon className="w-10 h-10 text-accent mb-4" />
                <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
