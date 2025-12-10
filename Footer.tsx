
import React from 'react';
import { ShariahIcon, InfrastructureIcon, CleanEnergyIcon } from './icons/Icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 p-6 text-center">
      <div className="flex justify-center items-center gap-8 mb-4">
        <div className="flex flex-col items-center gap-2">
          <ShariahIcon className="w-8 h-8 text-yellow-300" />
          <span className="text-xs">Shariah Compliant</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <InfrastructureIcon className="w-8 h-8 text-teal-300" />
          <span className="text-xs">National Infrastructure</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <CleanEnergyIcon className="w-8 h-8 text-emerald-300" />
          <span className="text-xs">Clean Energy</span>
        </div>
      </div>
      <p className="font-semibold text-slate-200">Structured under Sukuk al-Ijarah</p>
      <p className="text-sm text-slate-400 mt-1">Empowering Pakistan’s energy future with ethical finance.</p>
    </footer>
  );
};

export default Footer;
