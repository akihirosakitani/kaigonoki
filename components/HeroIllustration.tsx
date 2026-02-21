import React from 'react';

export const HeroIllustration: React.FC = () => {
  return (
    <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff7ed" />
          <stop offset="100%" stopColor="#ffedd5" />
        </linearGradient>
        <linearGradient id="bridge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="10" stdDeviation="15" floodOpacity="0.05" />
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="800" height="600" fill="url(#bg-grad)" />
      
      {/* Abstract Web Media Elements (Nodes, Data, Articles) */}
      <circle cx="150" cy="150" r="100" fill="#fdba74" opacity="0.3" />
      <circle cx="650" cy="450" r="140" fill="#5eead4" opacity="0.3" />
      <circle cx="650" cy="120" r="70" fill="#93c5fd" opacity="0.3" />

      {/* Floating Web Articles / UI Cards */}
      <g transform="translate(80, 150)" filter="url(#shadow)">
        <rect width="180" height="110" rx="12" fill="#ffffff" opacity="0.95"/>
        <rect x="24" y="24" width="132" height="12" rx="6" fill="#f1f5f9" />
        <rect x="24" y="50" width="80" height="8" rx="4" fill="#e2e8f0" />
        <rect x="24" y="70" width="100" height="8" rx="4" fill="#e2e8f0" />
      </g>
      
      <g transform="translate(560, 180)" filter="url(#shadow)">
        <rect width="150" height="130" rx="12" fill="#ffffff" opacity="0.95"/>
        <circle cx="75" cy="55" r="24" fill="#14b8a6" opacity="0.15" />
        <rect x="35" y="95" width="80" height="8" rx="4" fill="#e2e8f0" />
      </g>

      <g transform="translate(120, 380)" filter="url(#shadow)">
        <rect width="120" height="80" rx="12" fill="#ffffff" opacity="0.9"/>
        <rect x="20" y="20" width="80" height="8" rx="4" fill="#e2e8f0" />
        <rect x="20" y="40" width="60" height="8" rx="4" fill="#e2e8f0" />
      </g>

      {/* The Bridge (架け橋) */}
      <path d="M -50 480 Q 400 320 850 480 L 850 650 L -50 650 Z" fill="#ffffff" opacity="0.6" />
      <path d="M 50 480 Q 400 360 750 480" fill="none" stroke="url(#bridge-grad)" strokeWidth="20" strokeLinecap="round" />
      
      {/* Bridge Pillars */}
      <rect x="240" y="430" width="16" height="170" fill="#fdba74" rx="8" />
      <rect x="540" y="430" width="16" height="170" fill="#5eead4" rx="8" />

      {/* People Connecting on the Bridge */}
      {/* Person 1 (Care Worker - Orange) */}
      <g transform="translate(310, 330)">
        <circle cx="25" cy="25" r="18" fill="#f97316" />
        <path d="M 0 90 C 0 55 12 45 25 45 C 38 45 50 55 50 90" fill="#f97316" />
      </g>
      
      {/* Person 2 (Family/User - Teal) */}
      <g transform="translate(440, 335)">
        <circle cx="22" cy="26" r="16" fill="#14b8a6" />
        <path d="M 4 85 C 4 55 14 48 22 48 C 30 48 40 55 40 85" fill="#14b8a6" />
      </g>
      
      {/* Handshake / Connection */}
      <path d="M 350 390 Q 400 375 450 395" fill="none" stroke="#f97316" strokeWidth="10" strokeLinecap="round" />
      
      {/* Floating Hearts / Empathy symbols */}
      <g transform="translate(385, 260) scale(1.2)">
        <path d="M 10 30 C 10 30 -10 10 10 -10 C 30 10 10 30 10 30 Z" fill="#f43f5e" opacity="0.8" />
      </g>
      <g transform="translate(450, 210) scale(0.8)">
        <path d="M 10 30 C 10 30 -10 10 10 -10 C 30 10 10 30 10 30 Z" fill="#f43f5e" opacity="0.5" />
      </g>
    </svg>
  );
};
