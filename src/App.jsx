import React, { useRef, useState } from 'react';
import Hero from './components/Hero';
import CaptureForm from './components/CaptureForm';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const formRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleCTAClick = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const submitLead = async (payload) => {
    // In a real app, send to your backend here.
    // await fetch(`${import.meta.env.VITE_BACKEND_URL}/leads`, { method: 'POST', body: JSON.stringify(payload) })
    await new Promise((r) => setTimeout(r, 800));
    console.log('Lead captured:', payload);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero onCTAClick={handleCTAClick} />

      <section ref={formRef} className="bg-gradient-to-b from-black via-[#030712] to-black py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:px-10 lg:px-12">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Be first in line for The DM</h2>
            <p className="mt-3 max-w-md text-white/70">
              We’re opening a limited run of just 100 units exclusively on Kickstarter. Drop your info to
              reserve your spot and get early‑bird pricing when we launch.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• First name, last name, and email to start</li>
              <li>• Then your phone number to lock the reservation</li>
              <li>• No spam—only launch updates</li>
            </ul>
          </div>

          {!submitted ? (
            <CaptureForm onSubmit={submitLead} />
          ) : (
            <div className="w-full max-w-xl rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 text-white">
              <h3 className="text-2xl font-semibold">You’re on the list!</h3>
              <p className="mt-2 text-white/80">
                Thanks for reserving your spot. We’ll notify you the moment the Kickstarter goes live with
                early‑bird access and exclusive updates.
              </p>
              <div className="mt-4 text-sm text-white/60">Tip: Share this with a friend—once the 100 are gone, they’re gone.</div>
            </div>
          )}
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
}

export default App;
