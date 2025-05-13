
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="cta-gradient rounded-2xl overflow-hidden">
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <img
                className="w-full h-full object-cover"
                alt="African marketplace pattern"
                src="https://images.unsplash.com/photo-1602397619989-5c91486230c1" />
            </div>

            <div className="relative z-10 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Partnering With Us?
                </h2>
                <p className="text-lg text-green-100 mb-8">
                  Join us today for a successful venture with our trusted team now
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#services">
                    <Button className="bg-white text-gray-950 hover:bg-green-50 text-base px-6 py-4 rounded-2xl shadow-2xl h-auto">
                      Our Services
                    </Button></a>
                  <a href="#contact">
                    <Button variant="outline" className="border-white text-primary hover:bg-white/10 text-base px-6 py-4 rounded-2xl shadow-2xl h-auto">
                      Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
