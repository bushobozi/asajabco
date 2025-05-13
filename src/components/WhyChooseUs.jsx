
import React from "react";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Truck, 
  Users, 
  CreditCard,
  Headphones,
  Map
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Verified Vendors",
    description: "All vendors are thoroughly vetted to ensure quality and reliability",
    delay: 0.1,
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: "Secure Delivery",
    description: "Safe and reliable delivery across East Africa",
    delay: 0.2,
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Driven",
    description: "Supporting local businesses and artisans",
    delay: 0.3,
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Multiple secure payment options available",
    delay: 0.4,
  },
  {
    icon: <Headphones className="h-6 w-6" />,
    title: "24/7 Support",
    description: "Dedicated customer support team at your service",
    delay: 0.5,
  },
  {
    icon: <Map className="h-6 w-6" />,
    title: "Local Expertise",
    description: "Deep understanding of East African markets",
    delay: 0.6,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-green-600">AfriMarket</span>
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to providing the best marketplace experience for vendors and buyers across East Africa.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="feature-icon bg-green-100 text-green-600 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
