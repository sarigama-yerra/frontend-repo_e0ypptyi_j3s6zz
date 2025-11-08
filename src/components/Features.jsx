import React from 'react';
import { Shield, Gamepad2, Package, Gem } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Crush‑proof Armor',
    desc: 'Engineered shell that keeps your Joy‑Cons protected in any backpack or travel setup.'
  },
  {
    icon: Gamepad2,
    title: 'Joy‑Con First',
    desc: 'Purpose‑built channels that secure your Joy‑Cons and prevent drift‑inducing pressure.'
  },
  {
    icon: Package,
    title: 'Holds Your Games',
    desc: 'Dedicated slots for cartridges and cables—organized, compact, ready to go.'
  },
  {
    icon: Gem,
    title: 'Kickstarter Exclusive',
    desc: 'Only 100 units available for the first drop. Be one of the first to own The DM.'
  }
];

const Features = () => {
  return (
    <section className="bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <h2 className="text-center text-3xl font-semibold md:text-4xl">Why The DM?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          Designed with input from speed‑runners, commuters, and collectors—this is the last Switch case you’ll ever need.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Icon className="h-6 w-6 text-fuchsia-300" />
              <h3 className="mt-3 text-lg font-medium">{title}</h3>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
