import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Cpu, Eye } from 'lucide-react';

const solutions = [
  {
    title: 'Advertising and Marketing Technology',
    description: 'Analyze behavioral data to uncover insights that improve audience targeting.',
    icon: Target,
  },
  {
    title: 'Application Delivery Controller',
    description: 'Centralized management and analytics for secure application services deployable across data centers and public, private and hybrid clouds.',
    icon: Shield,
  },
  {
    title: 'Management of Edge Computing',
    description: 'Middleware that manages apps deployed on the edge device. These apps monitor or analyse real-time data from network-connected things and then initiate an action.',
    icon: Cpu,
  },
  {
    title: 'Enterprise visibility and Risk management',
    description: 'Gather network data across the enterprise and analyse to provide device ownership visibility. Identify patterns to detect anomalous behaviour and identify risk.',
    icon: Eye,
  },
];

const Solutions = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to transform your business and drive growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <solution.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{solution.title}</h3>
              </div>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;