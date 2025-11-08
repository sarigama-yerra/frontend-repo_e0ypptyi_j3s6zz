import React, { useState } from 'react';

const StepIndicator = ({ step }) => {
  const steps = [1, 2];
  return (
    <div className="mb-4 flex items-center gap-2">
      {steps.map((s) => (
        <div
          key={s}
          className={`h-1.5 w-20 rounded-full ${step >= s ? 'bg-blue-500' : 'bg-white/20'}`}
        />
      ))}
    </div>
  );
};

const CaptureForm = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const nextFromStep1 = (e) => {
    e.preventDefault();
    setError('');
    if (!form.firstName || !form.email) {
      setError('Please provide your first name and email to continue.');
      return;
    }
    const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(form.email);
    if (!emailOk) {
      setError('Please enter a valid email address.');
      return;
    }
    setStep(2);
  };

  const submitAll = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.phone) {
      setError('Please add a phone number.');
      return;
    }

    try {
      setLoading(true);
      await onSubmit(form);
    } catch (err) {
      setError(err?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur">
      <StepIndicator step={step} />

      {step === 1 && (
        <form onSubmit={nextFromStep1} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-white/80">First name</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Alex"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-blue-500/30 placeholder:text-white/40 focus:ring-2"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">Last name (optional)</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Mercer"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-blue-500/30 placeholder:text-white/40 focus:ring-2"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-white/80">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="alex@example.com"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-blue-500/30 placeholder:text-white/40 focus:ring-2"
              required
            />
          </div>
          {error && <p className="text-sm text-rose-300">{error}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 font-medium hover:from-blue-500 hover:to-cyan-500"
          >
            Continue
          </button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={submitAll} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm text-white/80">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(555) 000-0000"
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 outline-none ring-blue-500/30 placeholder:text-white/40 focus:ring-2"
              required
            />
          </div>
          {error && <p className="text-sm text-rose-300">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 font-medium disabled:opacity-60"
          >
            {loading ? 'Submitting…' : 'Reserve my spot'}
          </button>
        </form>
      )}

      <p className="mt-3 text-center text-xs text-white/60">No spam. We’ll only message you about the Kickstarter launch.</p>
    </div>
  );
};

export default CaptureForm;
