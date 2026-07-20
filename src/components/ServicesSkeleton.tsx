import React from 'react';

interface ServicesSkeletonProps {
  count?: number;
}

export default function ServicesSkeleton({ count = 6 }: ServicesSkeletonProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-[#030712]/40 border border-zinc-900/80 rounded-lg p-6 space-y-6 animate-pulse select-none relative overflow-hidden"
          style={{
            animationDelay: `${index * 80}ms`,
            animationDuration: '1.6s'
          }}
        >
          {/* Top border ambient shimmer overlay */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-zinc-800/40 to-transparent animate-shimmer" />

          {/* Header Row */}
          <div className="flex items-center justify-between">
            {/* Category tag skeleton */}
            <div className="h-5 w-24 bg-zinc-900/80 border border-zinc-800/50 rounded-full" />
            {/* Action text skeleton */}
            <div className="h-3 w-16 bg-zinc-900/60 rounded" />
          </div>

          {/* Title & Tagline */}
          <div className="space-y-3">
            {/* Main title skeleton */}
            <div className="h-6 bg-zinc-800/70 rounded-md w-11/12" />
            {/* Double-line tagline skeleton */}
            <div className="space-y-2 pt-1">
              <div className="h-3.5 bg-zinc-900/80 rounded w-full" />
              <div className="h-3.5 bg-zinc-900/85 rounded w-5/6" />
            </div>
          </div>

          {/* Visual Divider */}
          <div className="border-t border-zinc-900/60 pt-4 space-y-3">
            {/* Problems Solved label */}
            <div className="h-3 bg-zinc-900/50 rounded w-1/3" />
            
            {/* Bullets skeletons */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <div className="h-3 bg-zinc-900/70 rounded w-3/4" />
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                <div className="h-3 bg-zinc-900/70 rounded w-2/3" />
              </div>
            </div>
          </div>

          {/* Bottom stats boxes skeleton */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-zinc-900/60">
            <div className="space-y-1">
              <div className="h-2 bg-zinc-900/40 rounded w-1/2" />
              <div className="h-4 bg-zinc-900/90 rounded w-3/4" />
            </div>
            <div className="space-y-1">
              <div className="h-2 bg-zinc-900/40 rounded w-1/2" />
              <div className="h-4 bg-zinc-900/90 rounded w-3/4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
