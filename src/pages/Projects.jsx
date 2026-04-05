import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../lib/app-params';
import { MapPin, ArrowUpRight, Calendar, Building2, HardHat, Plane, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const categoryIcons = {
  aviation: Plane,
  infrastructure: Globe,
  industrial: HardHat,
  'mixed-use': Building2
};

export const Projects = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Legacy</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Global <span className="text-cyan-500">Portfolio</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            A showcase of our landmark engineering achievements across continents, from high-security aviation hubs to complex industrial infrastructure networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => {
            const Icon = categoryIcons[project.category] || Building2;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-3xl transition-all duration-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 h-full">
                  <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent md:hidden" />
                    <div className="absolute top-6 left-6 z-20">
                      <div className="p-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-lg">
                        <Icon className="w-6 h-6 text-cyan-500" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:col-span-3 p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 group-hover:text-cyan-500 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-8 font-medium">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-slate-400" />
                        </div>
                        <div className="text-sm">
                          <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Status</div>
                          <div className="text-slate-900 dark:text-white font-bold">Completed</div>
                        </div>
                      </div>
                      <Button variant="ghost" className="text-cyan-500 font-bold group-hover:gap-4 transition-all p-0 h-auto hover:bg-transparent">
                        View Case Study <ArrowUpRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-16 rounded-[4rem] bg-slate-900 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/10 blur-[100px] rounded-full" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 leading-tight">Partner with a <span className="text-cyan-500">Global Leader</span> in Engineering</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our associations with industry giants like ARAMCO, L&T, and DMRC stand as a testament to our commitment to quality and technical excellence.
              </p>
              <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg">
                <Link to="/contact">Start a Collaboration</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Safety First', val: 'ISO 45001' },
                { label: 'Quality', val: 'ISO 9001' },
                { label: 'Environment', val: 'ISO 14001' },
                { label: 'Compliance', val: '100%' },
              ].map((stat, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-2">{stat.val}</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
