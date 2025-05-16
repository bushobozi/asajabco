import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { About, Contact, FAQ, Loader, Portofolio, Services, Testimonials } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Simulate loading time (e.g., fetching assets or data)
    const timeout = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-orange-600 z-50 origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portofolio />
        <Testimonials />
        <Contact />
        <FAQ />
        <CTA />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
