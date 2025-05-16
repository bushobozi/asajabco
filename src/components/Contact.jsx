
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Info } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-none">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in <span className="text-orange-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600">
              Have questions or need assistance? Our team is here to help. Contact us through any of the channels below.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Find Us Today</h3>
              <div className="bg-white rounded-xl overflow-hidden shadow-md h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7475116103706!2d32.58441921534762!3d0.3413541997554286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbba84e9ede3d%3A0x8c4a55f05dad9f33!2sTHETA%20Uganda!5e0!3m2!1sen!2sug!4v1747151161872!5m2!1sen!2sug"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-0 mb-8 border border-border">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="text-gray-600">
                      Kampala Offices: Theata Building 1st Floor Room 01, Mawanda Road
                      <br />
                      Asajab service stations, Plot 36 kagadi Market Street, P.O Box 91 kagadi - Uganda
                      <br />
                      Fort Portal Offices: C/O Mogas Kitumba-Kampala-Fort Portal Road
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="text-gray-600">
                      <a href="tel:+256772856840">0(+256) 772 856 840</a>
                      <br />
                      <a href="tel:+256702683660">0(+256) 702 683 660</a>
                      <br />
                      <a href="tel:+256786443766">0(+256) 786 443 766</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-gray-600">
                      <a href="mailto:asajabco.ug01@gmail.com">
                        asajabco.ug01@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Info className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">TIN (Tax Idenfication Number)</h4>
                    <p className="text-gray-600">
                      1010092927
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 3:00 PM
                      <br />
                      Sunday: Closed (Emergency Services Available)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
