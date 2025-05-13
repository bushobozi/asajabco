
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of gas services do you offer?",
    answer:
      "We offer a comprehensive range of gas services including residential gas supply, commercial gas solutions, industrial gas services, installation and maintenance of gas systems, gas equipment sales, and emergency gas delivery.",
  },
  {
    question: "How do I schedule a gas delivery?",
    answer:
      "You can schedule a gas delivery by calling our customer service line at 1-800-GAS-HELP, using our online booking system on our website, or through our mobile app. We offer flexible delivery schedules to meet your needs.",
  },
  {
    question: "Are your gas services available 24/7?",
    answer:
      "Yes, our emergency gas services are available 24/7. For regular deliveries and non-emergency services, we operate during standard business hours from Monday to Saturday, 8:00 AM to 6:00 PM.",
  },
  {
    question: "What safety measures do you implement?",
    answer:
      "Safety is our top priority. We adhere to strict industry standards and regulations, conduct regular safety inspections, provide safety training for all our staff, use high-quality equipment, and implement comprehensive safety protocols for all our operations.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "Yes, we offer various maintenance contracts tailored to residential, commercial, and industrial clients. These contracts include regular inspections, preventive maintenance, priority service, and discounted rates on repairs and parts.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We currently serve the metropolitan area and surrounding suburbs within a 50-mile radius. For specific information about service availability in your area, please contact our customer service team.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-orange-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our gas services. If you don't see your question here, feel free to contact us.
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-2xl font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600">
            Still have questions?{" "}
            <a
              href="#contact"
              className="text-orange-600 font-medium hover:text-orange-800 transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
