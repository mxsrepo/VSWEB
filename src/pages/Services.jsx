import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  HardHat, 
  Zap, 
  Layout, 
  ClipboardCheck, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Home,
  Factory,
  Hotel
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Project Management & Consultancy',
    desc: 'End-to-end project oversight from feasibility studies to final handover. We ensure your project stays on track, within budget, and meets the highest quality standards.',
    icon: ClipboardCheck,
    features: ['Cost Control', 'Timeline Management', 'Quality Assurance', 'Risk Mitigation'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Civil Works Execution',
    desc: 'Comprehensive construction services for residential, commercial, and industrial sectors. Our turnkey solutions cover everything from foundation to finishing.',
    icon: Building2,
    features: ['Residential Complexes', 'Commercial Hubs', 'Industrial Plants', 'Turnkey Execution'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'MEP Services',
    desc: 'Expert design, installation, and maintenance of Mechanical, Electrical, and Plumbing systems. We provide integrated solutions for optimal building performance.',
    icon: Zap,
    features: ['Electrical Systems', 'HVAC Solutions', 'Plumbing & Firefighting', 'AMC Services'],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecb?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Design & Engineering',
    desc: 'Innovative architectural and structural design services. We combine aesthetic vision with engineering precision to create functional and sustainable spaces.',
    icon: Layout,
    features: ['Architectural Planning', 'Structural Analysis', 'Interior Design', 'BIM Modeling'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
  }
];

export const Services = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Expertise</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Engineering <span className="text-cyan-500">Excellence</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            We provide a comprehensive suite of engineering and construction services, delivered with precision and a commitment to excellence.
          </p>
        </motion.div>

        <div className="space-y-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-8">
                  <service.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">{service.title}</h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-medium">
                  {service.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
                  <Link to="/contact">Learn More <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="aspect-video rounded-[3rem] overflow-hidden shadow-2xl border border-white/60 dark:border-slate-800/40">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl hidden lg:flex">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sectors Section */}
        <div className="mt-40 text-center">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Sectors We Serve</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-20">Delivering Solutions Across Industries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Residential', icon: Home, desc: 'Luxury apartments, villas, and housing complexes.' },
              { title: 'Commercial', icon: Hotel, desc: 'Office buildings, retail spaces, and hospitality.' },
              { title: 'Industrial', icon: Factory, desc: 'Manufacturing plants, warehouses, and factories.' },
            ].map((sector, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-12 rounded-[3rem] border border-white/60 dark:border-slate-800/40 shadow-xl"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <sector.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{sector.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {sector.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
