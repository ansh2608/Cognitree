import React from 'react';
import { motion } from 'framer-motion';
import { Database, Cloud, GitBranch, BarChart } from 'lucide-react';

const expertiseAreas = [
  {
    title: 'Big Data Analytics',
    technologies: ['Kafka', 'Spark', 'Elasticsearch'],
    icon: BarChart,
    description: 'Process and analyze large datasets to extract valuable insights.',
  },
  {
    title: 'SaaS Development',
    technologies: ['RabbitMQ', 'Netflix OSS'],
    icon: Cloud,
    description: 'Build scalable cloud-based software solutions.',
  },
  {
    title: 'DevOps',
    technologies: ['Chef', 'Consul', 'Kubernetes', 'Docker', 'Prometheus', 'Sensu'],
    icon: GitBranch,
    description: 'Streamline development and operations with modern tools and practices.',
  },
  {
    title: 'Cloud Services',
    technologies: ['AWS', 'Azure', 'GCE'],
    icon: Database,
    description: 'Leverage leading cloud platforms for optimal performance and scalability.',
  },
];

const Expertise = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technical expertise to power your digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <area.icon className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{area.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;