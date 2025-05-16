
import React from "react";
import { motion } from "framer-motion";
import { Truck, Droplets, Leaf, Globe, Zap, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Cargo Transportation",
    description: "Transportation of petroleum products. Transportation of cargo(locally). Transport of agricultural products both durable and perishables.",
    delay: 0.1,
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Petroleum sales and distribution (fuel service stations)",
    description: "Operate fuel stations. Sale and distribute gas cylinders. Distribution of petroleum products.",
    delay: 0.2,
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: "Agricultural Produce & Perishables",
    description: "Temperature-controlled and timely delivery of agricultural produce and perishables.",
    delay: 0.3,
  },
  // {
  //   icon: <Package className="h-10 w-10 text-primary" />,
  //   title: "Specialized Haulage",
  //   description: "Custom solutions for oversized, heavy, or delicate cargo requiring special handling.",
  //   delay: 0.4,
  // },
  // {
  //   icon: <Zap className="h-10 w-10 text-primary" />,
  //   title: "Logistics & Supply Chain",
  //   description: "Comprehensive logistics planning and supply chain management solutions.",
  //   delay: 0.5,
  // },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "Environmental Protection and Research",
    description: "Climate change shapes environment and human activities causing significant environmental disruption. Asajab Co. Ltd is to invest resources in environment related research geared at sustainable development.",
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Comprehensive <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Asajab Co. Ltd  offers a diverse range of transport and research services tailored to meet your unique needs with efficiency and a commitment to sustainability.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="service-card bg-card rounded-xl p-6 shadow-sm border border-border"
            >
              <div className="p-3 rounded-lg inline-block mb-4 bg-primary/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
              {/* <Button variant="link" className="text-primary p-0 hover:text-primary/80">
                Learn More &rarr;
              </Button> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
