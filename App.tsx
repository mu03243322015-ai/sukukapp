
import React from 'react';
import Header from './components/Header';
import ProcessFlow from './components/ProcessFlow';
import ProblemsSection from './components/ProblemsSection';
import SolutionSection from './components/SolutionSection';
import BenefitsSection from './components/BenefitsSection';
import RisksSection from './components/RisksSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden text-slate-800">
        <Header />
        <div className="p-6 md:p-10 space-y-10">
          <ProcessFlow />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ProblemsSection />
            <SolutionSection />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <BenefitsSection />
            <RisksSection />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
