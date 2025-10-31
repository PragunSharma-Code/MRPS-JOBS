import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Search, Briefcase, Users, GraduationCap } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Strategic recruitment of senior leadership and C-suite professionals who drive organizational success and transformation.",
      features: ["Leadership Assessment", "Confidential Searches", "Industry Expertise"]
    },
    {
      icon: Briefcase,
      title: "Talent Acquisition",
      description: "Comprehensive recruitment solutions for mid to senior-level professionals across IT, Banking, and NBFC sectors.",
      features: ["Tailored Sourcing", "Skill Matching", "Fast Turnaround"]
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description: "Flexible staffing solutions providing skilled professionals for project-based, temporary, and contract positions.",
      features: ["On-Demand Talent", "Flexible Terms", "Quality Assurance"]
    },
    {
      icon: GraduationCap,
      title: "Campus Recruitment",
      description: "Strategic campus hiring programs connecting organizations with fresh talent and emerging professionals.",
      features: ["University Partnerships", "Graduate Programs", "Entry-Level Hiring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive recruitment solutions tailored to your organizational needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-white border-border group">
                <div className="mb-6 w-16 h-16 bg-primary-lighter rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
