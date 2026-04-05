import React from 'react';
import { motion } from 'framer-motion';
import { FAQS } from '../lib/app-params';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export const FAQ = () => {
  return (
    <div className="pt-32 pb-24 bg-slate-50/50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Support Center</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight">Frequently Asked <span className="text-cyan-500">Questions</span></h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Find answers to common questions about our engineering services, manpower solutions, and project management processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-10 lg:p-16 rounded-[4rem] border border-white/60 dark:border-slate-800/40 shadow-2xl mb-24"
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none">
                <AccordionTrigger className="text-left text-xl font-bold py-6 px-8 rounded-3xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <HelpCircle className="w-6 h-6 text-cyan-500 shrink-0" />
                    <span className="text-slate-900 dark:text-white group-data-[state=open]:text-cyan-500 transition-colors">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-12 pb-8 pt-2">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-cyan-500/10 rounded-3xl mb-8">
            <MessageCircle className="w-10 h-10 text-cyan-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Still have questions?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-xl mx-auto font-medium">
            If you couldn't find the answer you were looking for, please feel free to reach out to our support team.
          </p>
          <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-cyan-500 hover:bg-cyan-600 text-white font-bold">
            <Link to="/contact">Contact Support <ArrowRight className="ml-2 w-5 h-5" /></Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
