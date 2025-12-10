
import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { BrokenMeterIcon, LossIcon, TheftIcon, DataIcon, DebtIcon, DistressIcon, DigitalNeedIcon, WarningIcon } from './icons/Icons';

const problems = [
  { icon: <BrokenMeterIcon />, text: "Outdated electromechanical meters" },
  { icon: <LossIcon />, text: "High transmission & distribution losses" },
  { icon: <TheftIcon />, text: "Power theft & underbilling" },
  { icon: <DataIcon />, text: "Inefficient manual readings and slow data collection" },
  { icon: <DebtIcon />, text: "Circular debt pressures escalating annually" },
  { icon: <DistressIcon />, text: "Financially distressed DISCOs lacking modern equipment" },
];

const ProblemsSection: React.FC = () => {
  return (
    <Card className="bg-slate-50">
      <SectionTitle title="Problems We Aim to Solve" icon={<WarningIcon className="text-amber-500"/>} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-2">
        {problems.map((problem, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-14 h-14 text-amber-600 mb-2">{problem.icon}</div>
            <p className="text-xs sm:text-sm font-medium text-slate-600">{problem.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ProblemsSection;
