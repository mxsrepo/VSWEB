import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, PhoneCall, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Let's <span className="text-cyan-500">Connect</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Have a project in mind or need expert manpower? Reach out to our team of specialists today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Contact Information</h2>
              <div className="space-y-8">
                {[
                  { icon: PhoneCall, title: 'Call Us', detail: '+91 123 456 7890', sub: 'Mon-Sat, 9am-6pm' },
                  { icon: Mail, title: 'Email Us', detail: 'info@vsengineering.com', sub: '24/7 Online Support' },
                  { icon: MapPin, title: 'Visit Us', detail: '123 Business Hub, Sector 62', sub: 'Noida, UP, India' },
                  { icon: Globe, title: 'Global Presence', detail: 'Dubai, UAE | London, UK', sub: 'International Operations' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-cyan-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                      <p className="text-slate-900 dark:text-white font-bold">{item.detail}</p>
                      <p className="text-slate-500 text-sm font-medium">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full" />
              <h3 className="text-2xl font-bold mb-4 relative z-10">Emergency Support?</h3>
              <p className="text-slate-400 mb-8 relative z-10 font-medium">Our technical team is available for urgent site requirements and MEP emergencies.</p>
              <Button className="w-full h-14 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold relative z-10">
                Call Emergency Line
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-10 lg:p-16 rounded-[4rem] border border-white/60 dark:border-slate-800/40 shadow-2xl">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Send us a Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
                    <Input placeholder="John Doe" className="h-16 px-6 rounded-2xl border-slate-200 dark:border-slate-800 bg-white/50 focus:ring-cyan-500" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <Input placeholder="john@example.com" type="email" className="h-16 px-6 rounded-2xl border-slate-200 dark:border-slate-800 bg-white/50 focus:ring-cyan-500" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                    <Input placeholder="+91 000 000 0000" className="h-16 px-6 rounded-2xl border-slate-200 dark:border-slate-800 bg-white/50 focus:ring-cyan-500" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                    <Input placeholder="Project Inquiry" className="h-16 px-6 rounded-2xl border-slate-200 dark:border-slate-800 bg-white/50 focus:ring-cyan-500" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[200px] p-6 rounded-3xl border-slate-200 dark:border-slate-800 bg-white/50 focus:ring-cyan-500" />
                </div>
                <Button className="w-full h-16 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg shadow-xl shadow-cyan-500/20">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
