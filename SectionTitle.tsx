
import React from 'react';

interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-3 mb-4">
      {icon}
      <h3 className="text-xl font-semibold text-slate-700 uppercase tracking-wider">{title}</h3>
    </div>
  );
};

export default SectionTitle;
