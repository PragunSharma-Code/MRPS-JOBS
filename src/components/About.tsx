import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Award, TrendingUp, Building2, Globe } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Mission-Driven Excellence",
      description: "We are committed to connecting exceptional talent with outstanding opportunities, creating lasting value for both candidates and clients through strategic recruitment solutions."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "Building enduring partnerships through unwavering dedication, personalized service, and a deep understanding of your unique organizational needs and culture."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Delivering premium recruitment solutions with proven results, rigorous screening processes, and a track record that speaks to our commitment to excellence."
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented Vision",
      description: "Empowering careers while strengthening business success through strategic talent placement that drives organizational growth and individual professional development."
    },
    {
      icon: Building2,
      title: "Industry Expertise",
      description: "Specialized knowledge in IT, Banking, and NBFC sectors, enabling us to understand nuanced requirements and deliver candidates who truly fit your organizational vision."
    },
    {
      icon: Globe,
      title: "Pan-India Presence",
      description: "Strategic operations across major Indian cities, providing localized expertise with national reach to serve diverse markets and talent pools effectively."
    }
  ];

  return (
    <section id="about" className="py-32 bg-gradient-subtle relative overflow-hidden" ref={ref}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">About Us</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Where Expertise Meets Excellence
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A legacy of trust, innovation, and unmatched recruitment excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card p-10 rounded-3xl shadow-elegant border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Your Premier Recruitment Partner
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
              <p>
                MRPS Jobs is a professionally managed recruitment and staffing consultancy that has 
                firmly established itself as a distinguished and trusted name in the talent acquisition 
                industry. With our headquarters strategically located in New Delhi and expanded operations 
                in Bangalore, we have positioned ourselves to serve organizations across India with 
                unparalleled dedication and expertise.
              </p>
              <p>
                Our specialization spans the dynamic and ever-evolving sectors of Information Technology, 
                Banking, and Non-Banking Financial Companies (NBFCs). Through years of focused experience, 
                we have developed deep industry insights that enable us to understand the intricate 
                requirements of these sectors, allowing us to deliver talent solutions that perfectly 
                align with organizational objectives and cultural values.
              </p>
              <p>
                We maintain an extensive and meticulously curated database of skilled professionals, 
                ranging from entry-level talent to C-suite executives, ensuring we can meet diverse 
                organizational needs with remarkable efficiency. Our proven track record of successful 
                placements demonstrates our ability to match the right talent with the right opportunity, 
                creating value that extends far beyond the initial hire.
              </p>
              <p>
                What truly sets MRPS Jobs apart is our commitment to building lasting relationships. 
                We don't just fill positions; we forge strategic partnerships with our clients, taking 
                the time to understand their unique challenges, growth trajectories, and talent requirements. 
                This client-centric approach, combined with our candidate-focused methodology, ensures that 
                every placement we make contributes to mutual success and long-term satisfaction.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass-card p-10 rounded-3xl shadow-elegant border border-white/20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              Our Vision & Commitment
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
              <p>
                MRPS Jobs envisions a future where every organization has access to the exceptional 
                talent needed to drive innovation and growth, and where every professional finds 
                opportunities that align with their skills, aspirations, and career goals. We are 
                deeply committed to being the bridge that connects these two vital needs, creating 
                ecosystems of success that benefit individuals, organizations, and the broader economy.
              </p>
              <p>
                Our operational excellence is rooted in our ability to significantly reduce time-to-hire 
                while maintaining the highest standards of candidate quality. We understand that in 
                today's fast-paced business environment, speed and quality are not mutually exclusive—they 
                are essential partners. Through our streamlined processes, advanced recruitment technologies, 
                and expert team, we deliver both with consistency and reliability.
              </p>
              <p>
                The consistent recognition we receive from our clients speaks volumes about the caliber 
                of professionals we place. Organizations repeatedly acknowledge the exceptional performance, 
                cultural fit, and long-term value of our recruits, reinforcing our position as a trusted 
                partner in their growth journey. These testimonials and recommendations are not just 
                accolades—they are the foundation upon which we continue to build our reputation.
              </p>
              <p>
                At MRPS Jobs, we believe that recruitment is more than a transaction; it's a transformation. 
                Every placement we make has the potential to change careers, strengthen teams, and propel 
                organizations toward their strategic goals. This responsibility drives our unwavering 
                commitment to excellence in everything we do, from initial candidate sourcing to final 
                placement and beyond.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="glass-card p-8 rounded-2xl shadow-card-shadow hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border border-white/20 group"
              >
                <div className="mb-6 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-glow">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-primary mb-4">{value.title}</h4>
                <p className="text-foreground/75 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
