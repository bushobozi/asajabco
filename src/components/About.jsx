
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const benefits = [
    "8+ years of industry experience",
    "Certified and trained professionals",
    "24/7 emergency support",
    "Competitive pricing",
    "Eco-friendly practices",
    "State-of-the-art equipment",
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                className="w-full h-[600px] object-cover"
                alt="Gas company professionals"
                src="images/poster.jpg" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-600 rounded-lg p-6 shadow-lg hidden md:block">
              <div className="text-white">
                <p className="text-3xl font-bold">8+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-orange-600">Asajab Co. Ltd</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Since 2017, Asajab Co. Ltd has been a leading supplier of petroleum products, gas distribution and transport, serving residential, commercial, and industrial clients with unwavering commitment to safety, reliability, and customer satisfaction.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our team of certified professionals is dedicated to delivering exceptional service, utilizing cutting-edge technology and adhering to the highest industry standards to ensure that your petroleum needs are met efficiently and safely.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-orange-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="stats-gradient p-6 rounded-xl text-white grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-3xl font-bold">5000+</p>
                <p className="text-sm">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">100+</p>
                <p className="text-sm">Expert Staff</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm">Service Areas</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">24/7</p>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
