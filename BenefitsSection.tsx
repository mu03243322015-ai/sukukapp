
import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { LossReductionIcon, BillingIcon, RevenueIcon, StabilityIcon, CheckmarkIcon, ShariahIcon, TransparencyIcon, BenefitsIcon } from './icons/Icons';

const benefits = [
  { icon: <LossReductionIcon />, text: "Reduction in DISCO losses through real-time monitoring" },
  { icon: <BillingIcon />, text: "Enhanced billing accuracy with automated meter readings" },
  { icon: <RevenueIcon />, text: "Improved revenue recovery and financial stability" },
  { icon: <StabilityIcon />, text: "Contribution to decreasing Pakistan’s circular debt burden" },
  { icon: <CheckmarkIcon />, text: "Stable, asset-linked returns for Sukuk investors" },
  { icon: <ShariahIcon />, text: "Shariah-compliant financing aligned with the Ijarah model" },
  { icon: <TransparencyIcon />, text: "Improved transparency and data-driven decision-making" },
];

const BenefitsSection: React.FC = () => {
  return (
    <Card className="bg-slate-50">
      <SectionTitle title="Benefits" icon={<BenefitsIcon className="text-emerald-500" />} />
      <ul className="space-y-4 pt-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-4 p-3 bg-emerald-50 rounded-lg shadow-sm">
            <div className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1">{benefit.icon}</div>
            <p className="text-sm font-medium text-slate-700">{benefit.text}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default BenefitsSection;
