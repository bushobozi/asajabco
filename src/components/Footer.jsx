
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-8 rounded-t-3xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/images/logo.png" className="w-14 h-14" />
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-200">
              Asajab Co. Ltd
            </h3>
            <p className="text-gray-400 mb-6">
              Your trusted partner for efficient transport of cargo, fuel, and agricultural produce. Pioneering environmental research for sustainable development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-orange-400 transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Mail className="h-5 w-5 text-orange-400" />
                </div>
                <span className="text-gray-400">asajabco.ug01@gmail.com</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <Phone className="h-5 w-5 text-orange-400" />
                </div>
                <span className="text-gray-400">
                  <a href="tel:+256772856840">0(+256) 772 856 840</a>
                  <br />
                  <a href="tel:+256702683660">0(+256) 702 683 660</a>
                  <br />
                  <a href="tel:+256786443766">0(+256) 786 443 766</a>
                </span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1">
                  <MapPin className="h-5 w-5 text-orange-400" />
                </div>
                <span className="text-gray-400">
                  Kampala Offices: Theata Building 1st Floor Room 01, Mawanda Road
                  <br />
                  Kagadi Offices: Salsa Building, Kagadi-Hoima Road
                  <br />
                  Fort Portal Offices: C/0 Mogas Kitumba-Kla-F/P Road
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Asajabco.Ltd All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-orange-400 text-sm transition-colors">
                Cookie Policy
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
