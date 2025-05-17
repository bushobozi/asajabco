import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
    // {
    //     title: 'Fuel Service Stations',
    //     description: 'Operate and manage fuel stations.',
    //     image: '/images/poster.jpg',
    //     span: 'col-span-1',
    // },
    {
        title: 'Fuel Service Stations',
        description: 'Operate fuel stations. Sale and distribution of petroleum products.',
        image: '/images/station2.jpg',
        span: 'col-span-1',
    },
    {
        title: 'Fuel Transportation',
        description: 'Delivery and transportation of fuel across Uganda.',
        image: '/images/truck.jpg',
        span: 'col-span-1',
    },
    {
        title: 'Cargo Transportation',
        description: 'Delivery and transportation of heavy goods across Uganda.',
        image: '/images/truck4.jpg',
        span: 'col-span-1',
    },
    {
        title: 'Cargo Transportation',
        description: 'Efficient delivery of goods across Uganda.',
        // description: 'Innovative research for eco-friendly and sustainable practices. Environmental Protection',
        image: '/images/truck7.jpg',
        span: 'col-span-1',
    },
    {
        title: 'Agricultural Produce',
        description: 'Sourcing and distributing fresh produce from Ugandan farms.',
        image: '/images/farmer.png',
        span: 'col-span-1',
    },
    // {
    //     title: ' ',
    //     description: ' ',
    //     image: '/images/truck7.jpg',
    //     span: 'col-span-1',
    // },
];

const Portofolio = () => {
    return (
        <section id="portfolio" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Our Company <span className="text-primary">Portofolio</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Asabaj Co. Ltd is committed to transforming Uganda’s economy through reliable logistics, sustainable agriculture, and environmental innovation.
                        </p>
                    </motion.div>
                </div> */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-6 auto-rows-[500px]">
                        {portfolioItems.map((item, index) => (
                            <div
                                key={index}
                                className={`relative rounded-xl overflow-hidden shadow-lg group ${item.span} bg-white`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className=" w-[100%] h-[100%] lg:w-[100%] lg:h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/25 bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 group-hover:bg-opacity-70">
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    <p className="text-sm text-gray-200">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
export default Portofolio