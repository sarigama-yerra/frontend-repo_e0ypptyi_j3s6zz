import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Z9BMpz-LA54Dlbrj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.10),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-20 pb-24 md:px-10 lg:px-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs backdrop-blur">
          <Cpu className="h-3.5 w-3.5 text-blue-300" />
          Limited to the first 100 backers
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Meet <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">The DM</span>
          <br />
          The ultimate gaming accessory for your nintendo switch.
        </h1>
        <p className="max-w-2xl text-lg text-white/80 md:text-xl">
          It’s more than just a case - it’s a functional work of art with unrivaled joycon protection featuring STS Technology. Custom made, a limited run of 100 available exclusively through kickstarter.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
            <Shield className="h-4 w-4 text-blue-300" /> Crush‑proof precision shell
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
            <Rocket className="h-4 w-4 text-blue-300" /> Kickstarter‑only drop
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
            <Sparkles className="h-4 w-4 text-blue-300" /> Holds games, looks incredible
          </div>
        </div>

        <div className="mt-4">
          <motion.button
            onClick={onCTAClick}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-base font-medium text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400/60"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(59,130,246,0.0), 0 0 0 0 rgba(34,211,238,0.0)',
                '0 0 30px 6px rgba(59,130,246,0.25), 0 0 60px 12px rgba(34,211,238,0.15)',
                '0 0 0 0 rgba(59,130,246,0.0), 0 0 0 0 rgba(34,211,238,0.0)'
              ]
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <span className="relative z-10">Reserve my spot</span>
            <Rocket className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            {/* animated sheen */}
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition duration-700 group-hover:translate-x-[120%] group-hover:opacity-100" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
