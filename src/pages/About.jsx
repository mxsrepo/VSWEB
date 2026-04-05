import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, History, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">About <span className="text-cyan-500">VS Engineering</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            A legacy of precision engineering and global manpower solutions. We build the infrastructure that powers the future.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl border border-white/60 dark:border-slate-800/40">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Corporate" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 glass-card p-12 rounded-[3rem] border border-white/60 shadow-2xl max-w-xs hidden md:block">
              <div className="text-5xl font-bold text-cyan-500 mb-2">15+</div>
              <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Years of Engineering Excellence</div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-10 leading-tight text-slate-900 dark:text-white">
              Building Trust Through <span className="text-cyan-500">Technical Mastery</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium">
              Founded on the principles of integrity and innovation, VS Engineering & Overseas Manpower Solutions has grown from a local consultancy to a global multidisciplinary firm.
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-500 mb-12 leading-relaxed">
              Our journey began with a simple mission: to provide end-to-end engineering solutions that simplify complex construction challenges. Today, we stand as a trusted partner for major infrastructure projects across the Middle East, Europe, and Asia.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: 'Global Offices', val: '05' },
                { label: 'Projects Completed', val: '250+' },
                { label: 'Expert Engineers', val: '120+' },
                { label: 'Client Retention', val: '98%' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.val}</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-16 rounded-[4rem] border border-white/60 dark:border-slate-800/40 shadow-xl bg-slate-900 text-white"
          >
            <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center mb-10">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              To deliver high-quality engineering and manpower solutions that exceed client expectations through innovation, safety, and sustainable practices.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ y: -10 }}
            className="glass-card p-16 rounded-[4rem] border border-white/60 dark:border-slate-800/40 shadow-xl"
          >
            <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-10">
              <Award className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium">
              To be the global leader in integrated engineering services, recognized for our technical expertise and commitment to building a better world.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-40">
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Values</span>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-20">What Drives Us Every Day</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Integrity', desc: 'We maintain the highest ethical standards in all our dealings.' },
              { title: 'Innovation', desc: 'We embrace new technologies to solve complex challenges.' },
              { title: 'Safety', desc: 'The well-being of our people and projects is our top priority.' },
              { title: 'Quality', desc: 'We never compromise on the standards of our deliverables.' },
              { title: 'Collaboration', desc: 'We work as one team with our clients and partners.' },
              { title: 'Sustainability', desc: 'We build with the future of the planet in mind.' },
            ].map((value, i) => (
              <div key={i} className="flex gap-6 text-left">
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{value.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-[4rem] bg-cyan-500 p-16 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <h2 className="text-4xl lg:text-6xl font-bold mb-10 relative z-10">Ready to start your project?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto relative z-10">
            Let's discuss how our engineering expertise can bring your vision to life.
          </p>
          <Button asChild size="lg" className="h-16 px-12 rounded-2xl bg-white text-cyan-500 hover:bg-slate-100 font-bold text-lg relative z-10">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 w-6 h-6" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
