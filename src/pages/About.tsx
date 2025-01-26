import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Target } from 'lucide-react';

const founders = [
  {
    name: 'Girish Karthik Ramasamy',
    role: 'Founder',
    image: 'Girish Karthik Ramasamy.jpeg',
  },
  {
    name: 'Srinath C',
    role: 'Founder',
    image: 'Srinath C.jpeg',
  },
];

const About = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Cognitree</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building innovative solutions for the digital age
          </p>
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="object-cover w-full h-64"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{founder.name}</h3>
                  <p className="text-blue-600">{founder.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded by Girish and Srinath, Cognitree has grown into a leading technology
              solutions provider, serving both startups and Fortune 500 companies.
            </p>
            <p className="text-gray-600">
              Our mission is to empower businesses with cutting-edge technology solutions
              that drive growth and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Our Team</h3>
              <p className="text-gray-600">Expert professionals dedicated to your success</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Serving clients worldwide with innovative solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg col-span-2">
              <Target className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600">Leading the future of technology innovation</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-blue-600 text-white rounded-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6">Let's discuss how we can help you achieve your goals.</p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;