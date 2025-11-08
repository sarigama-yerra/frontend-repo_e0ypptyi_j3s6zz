import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Sparkles } from 'lucide-react';

const Hero = ({ onCTAClick }) => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cVzHR3fQnWrlrLT7/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignettes that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-20 pb-24 md:px-10 lg:px-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          Limited to the first 100 backers
        </span>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Meet <span className="bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">The DM</span>
          <br />
          The ultimate, crush‑proof Nintendo Switch case.
        </h1>
        <p className="max-w-2xl text-lg text-white/80 md:text-xl">
          A functional work of art that protects your Joy‑Cons unlike anything else. Custom‑made, stylish, and available exclusively through Kickstarter.
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
            <Shield className="h-4 w-4 text-emerald-300" /> Crush‑proof precision shell
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
            <Rocket className="h-4 w-4 text-sky-300" /> Kickstarter‑only drop
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
            <Sparkles className="h-4 w-4 text-pink-300" /> Holds games, looks incredible
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-indigo-600 px-5 py-3 text-base font-medium text-white shadow-lg shadow-fuchsia-600/30 hover:from-fuchsia-500 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-400/60"
          >
            Reserve my spot
            <Rocket className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
