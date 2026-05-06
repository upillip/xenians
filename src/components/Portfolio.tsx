import { motion } from 'motion/react';
import { ArrowRight, Lock } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      category: "M&A Advisory",
      title: "Project Alpha",
      desc: "Mid-scale Hotel M&A Transaction in Seoul",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Hotel Management",
      title: "The Grand Vista",
      desc: "Premium Resort Turnaround & Operation Strategy",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Project Management",
      title: "Nexus Commercial Complex",
      desc: "Development Planning & Risk Management",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">
              Track Record
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-midnight font-bold">
              Portfolio
            </h2>
          </motion.div>
          
          <motion.a 
            href="#client-portal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 md:mt-0 flex items-center space-x-2 text-midnight font-bold group hover:text-gold transition-colors duration-200"
          >
            <Lock size={16} />
            <span className="tracking-widest uppercase text-sm border-b border-midnight group-hover:border-gold pb-1">View Full Private Records</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <div className="absolute inset-0 bg-midnight/20 group-hover:bg-transparent transition-colors duration-500 z-10 transition-all"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
              <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2 block">
                {project.category}
              </span>
              <h3 className="font-serif text-2xl text-midnight font-bold mb-2">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
