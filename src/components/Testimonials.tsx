import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Their innovative solutions and top-notch support blew our expectations out of the water! Our business has never been more efficient.",
    company: "Rustguard",
    role: "Technology Partner",
  },
  {
    quote: "The team at Westwater Consulting helped our company scale with ease, thanks to their advanced strategies and unwavering commitment.",
    company: "Contribly",
    role: "Growth Client",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

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
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-muted-foreground text-lg"
          >
            See what our partners have to say about working with us
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.company}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50, rotateY: index === 0 ? -10 : 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="relative"
            >
              <div className="h-full p-8 rounded-2xl glass">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/40 mb-4" />

                {/* Quote Text */}
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Company Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-display font-bold text-primary text-lg">
                      {testimonial.company[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.company}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
