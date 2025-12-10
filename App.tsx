import React from 'react';
import Header from './Header';
import ProcessFlow from './ProcessFlow';
import ProblemsSection from './ProblemsSection';
import SolutionSection from './SolutionSection';
import BenefitsSection from './BenefitsSection';
import RisksSection from './RisksSection';
import Footer from './Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <main className="w-full max-w-5xl bg-white shadow-2xl rounded-2xl overflow-hidden text-slate-800">
        <Header />
        <div className="p-6 md:p-10 space-y-10">
          <ProcessFlow />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <ProblemsSection />
              <SolutionSection />
            </div>
            <div className="space-y-6">
              <BenefitsSection />
              <RisksSection />
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
