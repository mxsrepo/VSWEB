import React from 'react';
import { motion } from 'framer-motion';
import { TECH_SERVICES } from '../lib/app-params';
import { Cpu, Cloud, Shield, Code, Database, Network, ArrowRight, CheckCircle2, Terminal, Brain } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const iconMap = {
  'Cloud Infrastructure': Cloud,
  'Cybersecurity': Shield,
  'Custom Software': Terminal,
  'Data Analytics': Database,
  'AI & ML': Brain,
  'IoT Solutions': Network
};

export const Technology = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Digital Transformation</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Enterprise <span className="text-cyan-500">IT Solutions</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            We integrate cutting-edge technology into traditional engineering workflows, enabling smarter infrastructure and data-driven decision making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          {TECH_SERVICES.map((service, i) => {
            const Icon = iconMap[service.title] || Cpu;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-12 rounded-[3rem] border border-white/60 dark:border-slate-800/40 shadow-xl group hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-20 h-20 bg-cyan-500/10 rounded-3xl flex items-center justify-center mb-10 group-hover:bg-cyan-500 transition-colors duration-500">
                  <Icon className="w-10 h-10 text-cyan-600 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
                  {service.description}
                </p>
                <div className="space-y-4">
                  {['Enterprise Scalability', '24/7 Support', 'Security First'].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-slate-500 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Innovation Section */}
        <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 p-16 lg:p-24">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/10 blur-[120px] rounded-full translate-x-1/3" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-10 leading-tight">
                Bridging Engineering <br /> with <span className="text-cyan-500">Intelligence</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed">
                Our IT division specializes in developing custom software for industrial automation, BIM integration, and real-time site monitoring systems. We help engineering firms transition into the digital era with minimal friction.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button size="lg" className="h-16 px-10 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
                  Request a Demo
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-white/20 text-white hover:bg-white/10 font-bold">
                  Technical Whitepaper
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Uptime', val: '99.9%' },
                { label: 'Data Security', val: 'AES-256' },
                { label: 'Deployment', val: 'Global' },
                { label: 'Integration', val: 'API-First' },
              ].map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm text-center">
                  <div className="text-3xl font-bold text-white mb-2">{item.val}</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
