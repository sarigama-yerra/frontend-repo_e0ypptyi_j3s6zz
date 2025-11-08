import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-white/60 md:flex-row md:px-10 lg:px-12">
        <p>© {new Date().getFullYear()} The DM — a functional work of art for Nintendo Switch.</p>
        <p>Made for Kickstarter launch. Not affiliated with Nintendo.</p>
      </div>
    </footer>
  );
};

export default Footer;
