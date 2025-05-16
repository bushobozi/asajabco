
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ategeka Joshua",
    role: "MD. Atero (u)ltd and Atero foods",
    image: "woman-homeowner",
    content:
      "Asajab company has been our service provider as regards fresh foods and temperature controlled items from fields to air port for export and other heavy duty transportation efficiently and timely delivery of our goods.",
    rating: 5,
  },
  {
    name: "Sarah Birungi",
    role: "Home-owener",
    image: "woman-homeowner",
    content:
      "Asajab Co. Ltd has been providing gas for my home for over 5 years now. Their service is always prompt, and their staff is knowledgeable and friendly. I highly recommend them for their good services provided.",
    rating: 5,
  },
  // {
  //   name: "Michael Ocen",
  //   role: "Restaurant Owner",
  //   image: "man-restaurant-owner",
  //   content:
  //     "As a restaurant owner, reliable gas supply is crucial for my business. Asajab Co. Ltd has never let me down. Their commercial gas service is excellent, and their emergency response is impressively fast.",
  //   rating: 5,
  // },
  // {
  //   name: "Ahumuza Robert Williams",
  //   role: "Factory Manager",
  //   image: "man-factory-manager",
  //   content:
  //     "We've been using Asajab Co. Ltd's industrial gas solutions for our manufacturing plant. Their team helped us optimize our gas usage, resulting in significant cost savings without compromising on quality.",
  //   rating: 4,
  // },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-orange-600">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card bg-orange-600 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                {/* <div className="mr-4">
                  <img
                    className="h-14 w-14 rounded-full object-cover"
                    alt={`${testimonial.name} portrait`}
                    src="https://cdn.pixabay.com/photo/2021/04/08/13/12/woman-6161635_640.jpg" />
                </div> */}
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white">{testimonial.role}</p>
                </div>
              </div>
              {/* <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-100"
                      }`}
                  />
                ))}
              </div> */}
              <p className="text-gray-100">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
