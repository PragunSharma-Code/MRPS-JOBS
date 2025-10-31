import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Search, Briefcase, Users, GraduationCap, CheckCircle2 } from "lucide-react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Search,
      title: "Executive Search",
      description: "Our executive search practice is designed for organizations seeking transformational leadership. We specialize in identifying and attracting senior-level professionals, C-suite executives, and board members who possess the strategic vision, industry expertise, and leadership capabilities to drive organizational excellence. Through a confidential, consultative approach, we partner with you to understand your unique leadership requirements, organizational culture, and strategic objectives. Our rigorous assessment process ensures that we present candidates who not only meet technical qualifications but also align with your values and long-term vision.",
      features: [
        "Confidential search and discreet candidate engagement",
        "Comprehensive leadership assessment and profiling",
        "Deep industry expertise across IT, Banking, and NBFC sectors",
        "Strategic succession planning consultation",
        "Cultural fit evaluation and onboarding support"
      ]
    },
    {
      icon: Briefcase,
      title: "Talent Acquisition",
      description: "Our comprehensive talent acquisition services deliver end-to-end recruitment solutions for mid to senior-level professionals across specialized industries. We leverage our extensive network, advanced sourcing methodologies, and deep market intelligence to identify and engage passive candidates who may not be actively job searching but represent exceptional talent. Our consultative approach ensures we understand not just the job requirements, but the broader context of your team dynamics, growth plans, and organizational culture, enabling us to deliver candidates who will thrive in your environment and contribute meaningfully from day one.",
      features: [
        "Tailored sourcing strategies for specialized roles",
        "Advanced skill matching and competency assessment",
        "Fast turnaround without compromising quality",
        "Market intelligence and salary benchmarking",
        "Candidate experience optimization throughout the process"
      ]
    },
    {
      icon: Users,
      title: "Contract Staffing",
      description: "In today's dynamic business environment, flexibility is paramount. Our contract staffing solutions provide organizations with access to skilled professionals for project-based assignments, seasonal demands, or specialized initiatives without the long-term commitment of permanent hiring. We maintain a ready pool of pre-vetted professionals across various disciplines, enabling rapid deployment while ensuring quality and reliability. Whether you need technical specialists for a system implementation, financial experts for audit season, or additional bandwidth for a strategic project, our contract staffing solutions deliver the talent you need, when you need it.",
      features: [
        "On-demand talent for immediate deployment",
        "Flexible engagement models (short-term, long-term, project-based)",
        "Pre-screened and verified professional pool",
        "Quality assurance and performance monitoring",
        "Contract-to-permanent conversion options"
      ]
    },
    {
      icon: GraduationCap,
      title: "Campus Recruitment",
      description: "Building tomorrow's workforce starts with identifying and nurturing emerging talent today. Our campus recruitment programs connect forward-thinking organizations with the brightest minds from leading educational institutions. We have established strong relationships with premier universities and technical institutes, enabling us to source fresh graduates with the right academic foundation, learning agility, and cultural fit. Our campus hiring solutions go beyond simple recruitment—we help design comprehensive graduate programs, assessment centers, and onboarding strategies that ensure your new hires are set up for success from day one.",
      features: [
        "Strategic partnerships with top-tier universities and institutes",
        "Customized graduate recruitment programs and assessments",
        "Entry-level and management trainee hiring solutions",
        "Campus branding and employer positioning strategies",
        "Graduate onboarding and development program consultation"
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Our Services</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Comprehensive Recruitment Solutions
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Tailored talent acquisition strategies designed to meet your unique organizational 
            needs and drive sustainable growth through exceptional human capital
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <Card className="glass-card p-10 h-full hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 border border-white/30 group">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-glow">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-8 leading-relaxed text-lg">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary text-lg mb-4">Key Features:</h4>
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 + idx * 0.05 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/75 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
