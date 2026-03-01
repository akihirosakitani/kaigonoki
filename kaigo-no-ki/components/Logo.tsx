import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 font-bold text-orange-600 ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center bg-orange-50 rounded-full overflow-hidden shrink-0 shadow-sm border border-orange-100">
        <svg viewBox="0 0 100 100" className="w-7 h-7">
          {/* Left person (Supporting) */}
          <circle cx="35" cy="35" r="14" fill="#f97316" />
          <path d="M15 85 C15 55, 25 50, 45 50 C50 50, 55 55, 55 85" fill="#f97316" />
          {/* Right person (Being supported / leaning) */}
          <circle cx="65" cy="45" r="12" fill="#14b8a6" />
          <path d="M50 85 C50 65, 55 60, 65 60 C75 60, 85 70, 85 85" fill="#14b8a6" />
          {/* Arm connecting/supporting */}
          <path d="M45 60 Q 55 55 65 70" stroke="#f97316" strokeWidth="8" strokeLinecap="round" fill="none"/>
        </svg>
      </div>
      <span className="text-xl tracking-tight">介護の「キ」</span>
    </div>
  );
};