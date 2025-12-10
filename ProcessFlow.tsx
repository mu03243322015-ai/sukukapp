
import React from 'react';
import { InstitutionIcon, SmartMeterIcon, GovernmentIcon, PakistanMapIcon, MeterSwapIcon, EfficiencyIcon, ChevronRightIcon } from './icons/Icons';

const flowSteps = [
  { icon: <InstitutionIcon />, text: "Islamic Bank establishes an SPV" },
  { icon: <SmartMeterIcon />, text: "SPV purchases Automated Metering Infrastructure (AMI)" },
  { icon: <GovernmentIcon />, text: "SPV leases AMI to the Government of Pakistan under Ijarah" },
  { icon: <PakistanMapIcon />, text: "Government distributes AMI meters to DISCOs nationwide" },
  { icon: <MeterSwapIcon />, text: "AMI meters replace outdated electromechanical meters" },
  { icon: <EfficiencyIcon />, text: "Efficiency improves, reducing T&D losses" },
];

const ProcessFlow: React.FC = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {flowSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-xl shadow-md flex-grow h-full">
              <div className="flex-shrink-0 text-[#005F40] w-12 h-12 mb-3">{step.icon}</div>
              <p className="text-sm font-medium text-slate-600 flex-grow">{step.text}</p>
            </div>
            {index < flowSteps.length - 1 && (
              <div className="hidden xl:flex text-slate-300 w-12 h-12 mx-2">
                <ChevronRightIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessFlow;
