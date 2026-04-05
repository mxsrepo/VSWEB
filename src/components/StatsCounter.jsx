import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const StatsCounter = ({ value, label, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value.replace(/,/g, ''));
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl font-bold text-slate-900 dark:text-white mb-2 tracking-tighter">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm font-bold text-cyan-500 uppercase tracking-widest">{label}</div>
    </div>
  );
};
