
import React from 'react';
import Card from './Card';
import SectionTitle from './SectionTitle';
import { AssetIcon, LeaseIcon, MoneyFlowIcon, ShariahIcon, SolutionIcon } from './icons/Icons';

const SolutionSection: React.FC = () => {
  return (
    <Card className="bg-gradient-to-br from-[#005F40] to-[#008080] text-white">
        <div className="bg-white/10 rounded-xl p-6 h-full">
            <SectionTitle title="Proposed Sukuk Al-Ijarah Solution" icon={<SolutionIcon className="text-yellow-300"/>} />
            <div className="space-y-4 text-slate-100">
                <div>
                    <h4 className="font-semibold text-yellow-300">Core Structure</h4>
                    <ul className="list-disc list-inside mt-2 space-y-2 text-sm">
                        <li>SPV purchases AMI smart meters and related digital infrastructure.</li>
                        <li>Government / DISCOs lease AMI via Ijarah and make periodic rental payments.</li>
                        <li>Sukuk holders receive Shariah-compliant rental income backed by tangible assets.</li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 p-3 bg-white/10 rounded-lg">
                    <ShariahIcon className="w-8 h-8 text-yellow-300"/>
                    <p className="font-medium text-sm">Clear, transparent, asset-linked Shariah-compliant structure</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-white/10 rounded-lg">
                        <p className="font-semibold text-yellow-300">Tenor</p>
                        <p>10 years</p>
                    </div>
                    <div className="p-3 bg-white/10 rounded-lg">
                        <p className="font-semibold text-yellow-300">Underlying Asset</p>
                        <p>AMI meter hardware + digital modules</p>
                    </div>
                </div>
            </div>
        </div>
    </Card>
  );
};

export default SolutionSection;
