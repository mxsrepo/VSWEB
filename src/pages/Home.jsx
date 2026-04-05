import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe3D } from '../components/Globe3D';
import { Button } from '../components/ui/button';
import { StatsCounter } from '../components/StatsCounter';
import { ArrowRight, CheckCircle2, Cpu, HardHat, Globe as GlobeIcon, Award, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-slate-50/50 dark:bg-slate-950">
        <div className="hero-gradient" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-10 border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <Zap className="w-4 h-4 fill-cyan-500 text-cyan-500" />
                Global Engineering Excellence
              </motion.div>
              
              <h1 className="text-6xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.05]">
                VS <span className="text-cyan-500">ENGINEERING</span> <br />
                <span className="text-slate-400 dark:text-slate-600">& SOLUTIONS</span>
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl leading-relaxed font-medium">
                A multidisciplinary engineering powerhouse providing end-to-end solutions across Civil, Architectural, MEP, and IT domains. We bridge the gap between complex engineering and skilled execution.
              </p>

              <div className="flex flex-wrap gap-6">
                <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg shadow-2xl shadow-cyan-500/30 group transition-all duration-500">
                  <Link to="/projects">
                    View Portfolio <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-16 px-10 rounded-2xl border-2 border-slate-200 dark:border-slate-800 font-bold text-lg hover:bg-white dark:hover:bg-slate-900 transition-all shadow-sm">
                  <Link to="/services">Our Expertise</Link>
                </Button>
              </div>

              <div className="mt-16 flex items-center gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Client" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-bold text-slate-900 dark:text-white">Trusted by 500+ Clients</div>
                  <div className="text-slate-500 dark:text-slate-400">Across 15+ Countries</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <Globe3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <StatsCounter value="500" label="Projects Completed" suffix="+" />
            <StatsCounter value="1200" label="Expert Workforce" suffix="+" />
            <StatsCounter value="25" label="Years Experience" suffix="+" />
            <StatsCounter value="15" label="Global Locations" suffix="+" />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-slate-50/50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: HardHat, title: 'Engineering', desc: 'Civil, Structural & MEP execution with precision.', color: 'bg-blue-500' },
                  { icon: Cpu, title: 'Technology', desc: 'Enterprise IT & Cloud infrastructure solutions.', color: 'bg-cyan-500' },
                  { icon: GlobeIcon, title: 'Manpower', desc: 'Global talent supply for specialized sectors.', color: 'bg-indigo-500' },
                  { icon: Award, title: 'Consultancy', desc: 'Strategic project management & advisory.', color: 'bg-amber-500' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -12 }}
                    className="glass-card p-10 rounded-[2.5rem] border border-white/60 dark:border-slate-800/40 shadow-xl group transition-all duration-500"
                  >
                    <div className={`w-16 h-16 ${item.color}/10 rounded-2xl flex items-center justify-center mb-8 group-hover:${item.color} transition-colors duration-500`}>
                      <item.icon className={`w-8 h-8 text-cyan-600 group-hover:text-white transition-colors duration-500`} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:pl-12">
              <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Mission</span>
              <h2 className="text-5xl lg:text-6xl font-bold mb-10 leading-tight text-slate-900 dark:text-white">
                Integrated Solutions for a <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">Connected World</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
                We don't just build structures; we build the systems that power them and the teams that sustain them. Our unique 360-degree approach ensures that every project is technically sound, technologically advanced, and expertly staffed.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  'End-to-End Project Lifecycle Management',
                  'Global Talent Acquisition & Deployment',
                  'Advanced Digital Infrastructure Integration',
                  'Sustainable Engineering Practices'
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-bold">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                    </div>
                    {text}
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="h-14 px-8 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all">
                <Link to="/about">Learn Our Legacy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-white dark:bg-slate-900 overflow-hidden relative curved-section mx-4 md:mx-8 lg:mx-12 my-20">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Our Edge</span>
            <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-8">Why Industry Leaders <br /> <span className="text-cyan-500">Choose VS</span></h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
              We combine decades of engineering heritage with cutting-edge technology and a global talent network to deliver unparalleled value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                title: 'Unmatched Expertise', 
                desc: 'Over 25 years of experience in executing complex civil, structural, and MEP projects across the globe.',
                icon: Award
              },
              { 
                title: 'Global Network', 
                desc: 'A robust supply chain and manpower network spanning 15+ countries, ensuring rapid deployment.',
                icon: GlobeIcon
              },
              { 
                title: 'Tech-Driven', 
                desc: 'Integrating AI, IoT, and advanced project management tools to ensure efficiency and transparency.',
                icon: Cpu
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 curved-card bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-cyan-500 group-hover:text-white transition-all">
                  <item.icon className="w-8 h-8 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-32 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Portfolio</span>
              <h2 className="text-5xl font-bold text-slate-900 dark:text-white leading-tight">Landmark Achievements <br /> Across the <span className="text-cyan-500">Globe</span></h2>
            </div>
            <Button asChild variant="ghost" className="text-cyan-500 font-bold hover:bg-cyan-50 transition-all">
              <Link to="/projects" className="flex items-center gap-2">View All Projects <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { id: 'delhi-airport', title: 'Delhi Int. Airport', cat: 'Aviation', img: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80' },
              { id: 'aramco-road', title: 'ARAMCO Infrastructure', cat: 'Industrial', img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80' },
              { id: 'waraba-center', title: 'Waraba Center Dubai', cat: 'Mixed-Use', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80' },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="group relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="px-4 py-1.5 bg-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
                    {project.cat}
                  </span>
                  <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                  <Link to="/projects" className="flex items-center gap-2 text-cyan-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    Explore Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[120px] rounded-full translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-10 leading-tight">
                Empowering the <br /> <span className="text-cyan-500">Global Workforce</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium">
                Our manpower solutions have successfully deployed over 10,000+ skilled professionals across 3 continents, driving growth in the Middle East, Europe, and Asia.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">10K+</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Personnel Deployed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">Compliance Rate</div>
                </div>
              </div>
              <Button asChild size="lg" className="mt-16 h-16 px-10 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-lg">
                <Link to="/manpower">Partner with Us</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" alt="Global Team" className="w-full h-full object-cover opacity-60" />
              </div>
              <div className="absolute -bottom-10 -left-10 glass-card p-10 rounded-3xl border border-white/10 shadow-2xl dark">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-cyan-500 rounded-2xl flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">ISO Certified</div>
                    <div className="text-slate-400 font-medium">Quality Management Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
