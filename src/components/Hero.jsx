
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Droplets, Leaf, BarChart } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          class="w-full h-full object-cover"
          alt="Modern transport truck on a highway at sunset"
          src="https://images.unsplash.com/photo-1602397619989-5c91486230c1" />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-16 lg:py-22">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Asajabco.Ltd: Driving <span className="text-orange-300">Progress</span>, Sustainably
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
              Your trusted partner for efficient transport of cargo, fuel, and agricultural produce. Pioneering research in climate change and sustainable development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#contact" className="bg-primary text-primary-foreground text-center hover:bg-primary/90 text-base shadow-xl font-bold px-4 py-4 h-fit rounded-2xl">Contact Us</a>
              <a href="#services" variant="outline" className="border-white text-center bg-white text-primary rounded-2xl font-bold shadow-xl hover:bg-orange-600 hover:text-white text-base px-4 py-4 h-fit lg:w-fit w-full flex">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center"
              >
                <div className="bg-white/20 p-2 rounded-full mr-2">
                  <Truck className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">Cargo & Transport Locally</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-center"
              >
                <div className="bg-white/20 p-2 rounded-full mr-2">
                  <Droplets className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">Fuel & Petroluem</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center"
              >
                <div className="bg-white/20 p-2 rounded-full mr-2">
                  <Leaf className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">Agriculture</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center"
              >
                <div className="bg-white/20 p-2 rounded-full mr-2">
                  <BarChart className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm font-medium">Research & Sustainable Development</span>
              </motion.div>
            </div>
          </motion.div>

          <div />
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-xl">
              <h3 className="text-white text-xl font-semibold mb-4">Quick Quote</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="" className="bg-gray-800 text-gray-300">Service Type</option>
                    <option value="cargo" className="bg-gray-800 text-white">Cargo Transport</option>
                    <option value="fuel" className="bg-gray-800 text-white">Fuel & Petroleum</option>
                    <option value="agri" className="bg-gray-800 text-white">Agricultural Produce</option>
                    <option value="research" className="bg-gray-800 text-white">Research Consultation</option>
                  </select>
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base py-3">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </motion.div> */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
