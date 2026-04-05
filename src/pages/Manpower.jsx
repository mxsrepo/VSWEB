import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Briefcase, ShieldCheck, Plane, Search, FileCheck, UserCheck, Ship, ArrowRight, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const steps = [
  { icon: Search, title: 'Sourcing', desc: 'Extensive talent pool across India, Nepal, and Bangladesh.' },
  { icon: UserCheck, title: 'Screening', desc: 'Rigorous technical and behavioral assessment by experts.' },
  { icon: FileCheck, title: 'Compliance', desc: 'Visa processing, medical checks, and legal documentation.' },
  { icon: Plane, title: 'Deployment', desc: 'Smooth mobilization and on-site orientation support.' }
];

export const Manpower = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Global Talent Supply</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Overseas <span className="text-cyan-500">Manpower</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Bridging the gap between global demand and skilled talent. We specialize in large-scale recruitment for Engineering, Construction, and Oil & Gas sectors.
          </p>
        </motion.div>

        {/* Process Visualization */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Deployment Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="glass-card p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-800/40 shadow-xl text-center h-full group-hover:bg-cyan-500 transition-all duration-500">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-colors duration-500">
                    <step.icon className="w-8 h-8 text-cyan-600 group-hover:text-cyan-500 transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-white">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-white/80">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sectors Section */}
        <div className="mb-32 text-center">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Expertise</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-20">Sectors We Recruit For</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { title: 'Construction', icon: Building2 },
              { title: 'Oil & Gas', icon: Factory },
              { title: 'MEP Services', icon: Zap },
              { title: 'Hospitality', icon: Hotel },
              { title: 'Healthcare', icon: Shield },
            ].map((sector, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-800/40 shadow-xl"
              >
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <sector.icon className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{sector.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80" alt="Recruitment" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-3xl border border-white/60 shadow-2xl max-w-xs">
              <div className="text-4xl font-bold text-cyan-500 mb-2">10,000+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Candidates Deployed Globally</div>
            </div>
          </div>
          
          <div>
            <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Why Partner With Us</span>
            <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-slate-900 dark:text-white">
              Quality Talent, <span className="text-cyan-500">Compliant Delivery</span>
            </h2>
            <div className="space-y-8">
              {[
                { title: 'Global Reach', desc: 'Access to talent across South Asia and Southeast Asia.', icon: Globe },
                { title: 'Industry Expertise', desc: 'Specialized recruiters for Engineering and MEP sectors.', icon: Briefcase },
                { title: 'Ethical Recruitment', desc: 'Strict adherence to international labor laws and standards.', icon: ShieldCheck },
                { title: 'End-to-End Support', desc: 'From sourcing to on-site mobilization and beyond.', icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-12 h-16 px-10 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
              <Link to="/contact">Discuss Your Requirements</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
