
import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { OperationalRiskIcon, PaymentRiskIcon, RegulatoryRiskIcon, PerformanceRiskIcon, AssetRiskIcon, GovernanceRiskIcon, WarningIcon } from './icons/Icons';

const risks = [
  { icon: <OperationalRiskIcon />, title: "Operational Risk", text: "Delays in meter rollout or technical malfunctions." },
  { icon: <PaymentRiskIcon />, title: "Payment Risk", text: "DISCOs’ weak financial positions affecting rental payments." },
  { icon: <RegulatoryRiskIcon />, title: "Regulatory Risk", text: "Possible changes in energy policy or tariff structures." },
  { icon: <PerformanceRiskIcon />, title: "Performance Risk", text: "Efficiency savings may not meet projected targets." },
  { icon: <AssetRiskIcon />, title: "Asset Risk", text: "Maintenance, wear-and-tear, or unexpected faults." },
  { icon: <GovernanceRiskIcon />, title: "Political/Governance Risk", text: "Shifts in government priorities or sector reforms." },
];

const RisksSection: React.FC = () => {
  return (
    <Card className="bg-slate-50">
      <SectionTitle title="Risks & Challenges" icon={<WarningIcon className="text-red-500" />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 pt-2">
        {risks.map((risk, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg shadow-sm">
            <div className="w-10 h-10 text-red-600 flex-shrink-0 mt-1">{risk.icon}</div>
            <div>
              <h5 className="font-semibold text-sm text-slate-800">{risk.title}</h5>
              <p className="text-xs text-slate-600">{risk.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RisksSection;
