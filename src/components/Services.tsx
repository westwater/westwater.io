import { motion } from "framer-motion";
import { Target, TrendingUp, Headphones } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Bespoke IT Strategies",
    description: "We understand that one size doesn't fit all. Our tailored IT strategies are designed for maximum growth and sustainability.",
  },
  {
    icon: TrendingUp,
    title: "Unrivaled Business Growth",
    description: "Transform your business with cutting-edge solutions. Say goodbye to frustrating IT bottlenecks and hello to limitless potential.",
  },
  {
    icon: Headphones,
    title: "24/7 Reliable Support",
    description: "Trust in our impeccable track record and relentless dedication. Our around-the-clock support means you're never left in the lurch.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl md:text-5xl font-bold mb-4"
          >
            Experience <span className="text-gradient">Unmatched Expertise</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Our dedicated IT professionals are ready to tackle your most complex challenges
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-card border border-border/50 transition-all duration-300 hover:border-primary/30 hover:shadow-glow">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
