import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@mrpsjobs.com",
      link: "mailto:info@mrpsjobs.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 98 1142 4596",
      link: "tel:+919811424596",
      description: "Monday to Friday, 9 AM - 6 PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "New Delhi, India",
      link: null,
      description: "Pitampura office also available"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decorations */}
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
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Let's Start a Conversation
          </h2>
          <div className="w-32 h-1.5 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to transform your recruitment strategy or accelerate your career? Our team of
            experts is here to help you achieve your goals. Reach out today and discover how MRPS
            Jobs can make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="glass-card p-10 shadow-elegant border border-white/30">
              <h3 className="text-3xl font-bold text-primary mb-3">Send Us a Message</h3>
              <p className="text-foreground/70 mb-8 text-lg leading-relaxed">
                Fill out the form below and our team will respond to your inquiry within one business day.
                We're committed to providing prompt, professional service.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 glass-card border-white/30 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 glass-card border-white/30 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-14 glass-card border-white/30 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your recruitment needs or career aspirations..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="resize-none glass-card border-white/30 text-lg"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:opacity-90 h-14 text-lg transition-all hover:scale-105 shadow-glow group"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl shadow-elegant border border-white/30">
              <h3 className="text-2xl font-bold text-primary mb-6">Contact Information</h3>
              <p className="text-foreground/75 mb-8 leading-relaxed">
                Whether you're seeking exceptional talent or exploring career opportunities,
                our dedicated team is ready to assist you through any of these channels.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      className="bg-white/60 backdrop-blur-sm p-6 rounded-xl hover:shadow-card-shadow transition-all duration-300 hover:-translate-y-1 border border-white/40"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-primary mb-1">{info.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{info.description}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-foreground/80 hover:text-accent transition-colors font-medium"
                            >
                              {info.details}
                            </a>
                          ) : (
                            <p className="text-foreground/80 font-medium">{info.details}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="glass-card p-8 rounded-2xl shadow-elegant border border-white/30 bg-gradient-primary text-white"
            >
              {/* <p className="text-white/20 relative z-20">Know us Better!</p> */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8568.44213224496!2d77.13499261460557!3d28.6888231735934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1761904597977!5m2!1sen!2sin"
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
