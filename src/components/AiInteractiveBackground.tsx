import React from 'react';

export default function AiInteractiveBackground() {
  return (
    <div 
      id="ambient-background-system" 
      className="fixed inset-0 w-full h-full -z-50 bg-[#02040a] overflow-hidden select-none pointer-events-none"
    >
      {/* 1. Base Grid Layer with perspective/fade */}
      <div 
        className="absolute inset-0 w-full h-full enterprise-grid opacity-15"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)'
        }}
      />

      {/* 2. Soft, organic floating gradient blobs */}
      <div className="absolute inset-0 w-full h-full filter blur-[140px] opacity-25">
        {/* Blue Orb top-left */}
        <div 
          className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/30 -top-24 -left-20 animate-drift-slow"
          style={{ animationDelay: '0s' }}
        />
        {/* Cyan Orb center-right */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 top-1/4 -right-32 animate-drift-slow"
          style={{ animationDuration: '35s', animationDelay: '-5s' }}
        />
        {/* Violet/Indigo Orb bottom-left */}
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-indigo-500/15 bottom-12 left-10 animate-drift-slow"
          style={{ animationDuration: '45s', animationDelay: '-12s' }}
        />
      </div>

      {/* 3. Subtle radial vignette overlay to keep text hyper-legible */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, rgba(2, 4, 10, 0.7) 100%)'
        }}
      />

      {/* 4. Global Subtle Grain/Noise Overlay */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-[9999] opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
}


