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
      description: "M. R. SERVICES is a professionally managed manpower consultancy firm introduced as an esteemed organisation in the manpower solution industry. The firm is set up with the assistance of the most experienced and dedicated team of professionals. This team invests in its service to maintain a competitive edge and has invested in elaborate infrastructure, including state-of-the-art technology for communication and database access, facilitating personal contact on a global scale."
    },
    {
      icon: Users,
      title: "Client-Centric Approach",
      description: "The company welcomes clients to M. R. SERVICES, which is poised to take a significant role in searching for suitable enthusiastic, energetic, and talented persons for their organisation. The firm's core value proposition is to minimize the client's 'head-ache' for searching or recruiting a person , and clients can rely on them with confidence. M. R. SERVICES works in partnership with their clients to provide first-class solutions for their manpower requirements. This enables the firm's consultants to identify suitable candidates quickly in response to client requirements."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "The company's team of professionals has adequate experience in identifying and short-listing potential candidates as per specific client requirements. M. R. SERVICES states they are able to source for the best candidates for a client's company. This focus on quality candidates means that there will be an increased profitability from shorter training time, a lower attrition rate, and an enhanced productivity for the client. The unique and complex method to assess and select candidates is done by expert professionals, which M. R. SERVICES claims makes it apart from other manpower consultants."
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented Vision",
      description: "M. R. SERVICES is described as a deep-rooted fast-growing company in India. Every day, the firm tries to proactively expand its local, regional, and global database using the Internet, strategic alliances, a network of sub-vendors, job fairs, specialist magazines, and referrals. After identifying a dire need for quality training and continuing education through in-depth market research, the research was translated into concrete action. This diversification has not just added synergy to its existing business portfolio but has greatly enhanced its credibility and success in the market. The company has been able to expand its scale of operations and accelerate its speed of response."
    },
    {
      icon: Building2,
      title: "Industry Expertise",
      description: "The company's fields of expertise began last decade , starting with providing consultation in recruiting and supplying human resources to the foreign and local employment market. While this remains a major stronghold , the firm is now also engaged in several related activities. These include providing consultation in Recruitment and Contract Supply of Personnel, Career Guidance Services, and Admission guidance for higher Education in India and abroad. The firm has 16 consultants engaged full-time who professionally \"head hunt\" candidates across various industries."
    },
    {
      icon: Globe,
      title: "Pan-India Presence",
      description: "The headquarters of M. R. Services is located in New Delhi, INDIA. The company's 16 full-time consultants \"head hunt\" candidates all across the country through various contacts. M. R. SERVICES also states that it has the wide network in India besides overseas offices."
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
              A Partnership in Manpower Solutions
            </h3>
            <div className="space-y-6 text-foreground/85 leading-relaxed text-lg">
              <p>
                M. R. SERVICES is a professionally managed manpower consultancy firm and an esteemed organisation in the manpower solution industry. We are poised for taking a more significant role in searching for suitable enthusiastic, energetic, and talented persons for your organisation. In fact, we minimize your 'head-ache' for searching or recruiting a person for your organization , and you can rely on us with confidence.
              </p>
              <p>
                M. R. SERVICES works in partnership with their clients to provide first-class solutions for their manpower requirements. The firm is set up with the assistance of the most experienced and dedicated team of professionals who have the adequate experience in identifying and short-listing the potential candidates as per specific client requirements.
              </p>
              <p>
                This professional approach leads to tangible benefits for your company. We are able to source for the best candidates for your company. This means that there will be an increased profitability from shorter training time, a lower attrition rate, and an enhanced productivity.
              </p>
              <p>
                What sets M. R. SERVICES apart from other manpower consultants is the unique and complex method used to assess and select candidates, which is done by expert professionals at the firm.
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
                M. R. SERVICES is a deep-rooted, fast-growing company in India. We are committed to investing in Service in order to maintain this competitive edge. As part of this commitment, M. R. SERVICES has invested in elaborate infrastructure, including state-of-the-art technology for communication and database access, facilitating personal contact on a global scale. This has enabled the company to expand its scale of operations and also accelerate the speed of response.
              </p>
              <p>
                Our vision for growth includes proactive expansion. Every day, M. R. SERVICES is trying to proactively expand its local, regional, and global database using:

                The Internet

                Strategic alliances

                A network of sub-vendors

                Job fairs

                Specialist magazines

                Referrals
              </p>
              <p>
                This commitment to expansion enables our consultants to identify suitable candidates quickly in response to your requirements.
              </p>
              <p>
                Furthermore, our fields of expertise, which began last decade with recruiting and supplying human resources, have expanded. After in-depth research identified a dire need for quality training and continuing education , this research was translated into concrete action. M. R. SERVICES is now engaged in several related activities, such as providing consultation in Recruitment and Contract Supply of Personnel, Career Guidance Services, and Admission guidance for higher Education in India and abroad. This diversification has added not just synergy to its existing business portfolio but has greatly enhanced its credibility and success in the market.
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
