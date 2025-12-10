
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Icons from "./Icons";
import ProblemsSection from "./ProblemsSection";
import ProcessFlow from "./ProcessFlow";
import BenefitsSection from "./BenefitsSection";
import RisksSection from "./RisksSection";
import SectionTitle from "./SectionTitle";
import SolutionSection from "./SolutionSection";

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
