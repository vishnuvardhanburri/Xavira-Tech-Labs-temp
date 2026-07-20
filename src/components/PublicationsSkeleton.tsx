import React from 'react';

export default function PublicationsSkeleton() {
  return (
    <div className="space-y-16 animate-pulse select-none">
      {/* SECTION A SKELETON: Research & Blueprints */}
      <div className="space-y-8">
        <div className="border-b border-zinc-900 pb-3.5 flex items-center justify-between">
          {/* Section Heading skeleton */}
          <div className="h-6 bg-zinc-800/80 rounded-md w-48" />
          {/* Small status light */}
          <div className="h-2 w-12 bg-zinc-900/80 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`research-${i}`}
              className="bg-[#030712]/40 border border-zinc-900/80 rounded-lg p-6 space-y-4 flex flex-col justify-between h-[230px] relative overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px]">
                  {/* Category tag */}
                  <div className="h-5 w-24 bg-zinc-900/90 border border-zinc-800/50 rounded-full" />
                  {/* Read time */}
                  <div className="h-3 w-12 bg-zinc-900/60 rounded" />
                </div>
                {/* Title */}
                <div className="space-y-2 pt-1">
                  <div className="h-5 bg-zinc-800/80 rounded-md w-full" />
                  <div className="h-5 bg-zinc-800/80 rounded-md w-2/3" />
                </div>
                {/* Summary */}
                <div className="space-y-1.5 pt-1">
                  <div className="h-3 bg-zinc-900/75 rounded w-full" />
                  <div className="h-3 bg-zinc-900/75 rounded w-11/12" />
                  <div className="h-3 bg-zinc-900/70 rounded w-4/5" />
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="border-t border-zinc-900/60 pt-3 flex items-center justify-between text-xs">
                {/* Download stats */}
                <div className="h-3 bg-zinc-900/60 rounded w-20" />
                {/* Action arrow */}
                <div className="h-3.5 bg-zinc-900/80 rounded w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION B SKELETON: Executive Advisory Notes */}
      <div className="space-y-8 pt-8">
        <div className="border-b border-zinc-900 pb-3.5 flex items-center justify-between">
          {/* Section Heading skeleton */}
          <div className="h-6 bg-zinc-800/80 rounded-md w-64" />
          <div className="h-2 w-12 bg-zinc-900/80 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={`insights-${i}`}
              className="bg-[#030712]/40 border border-zinc-900/80 rounded-lg p-6 space-y-4 flex flex-col justify-between h-[230px] relative overflow-hidden"
              style={{ animationDelay: `${(i + 3) * 100}ms` }}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[10px]">
                  {/* Category tag */}
                  <div className="h-5 w-24 bg-zinc-900/90 border border-zinc-800/50 rounded-full" />
                  {/* Read time */}
                  <div className="h-3 w-12 bg-zinc-900/60 rounded" />
                </div>
                {/* Title */}
                <div className="space-y-2 pt-1">
                  <div className="h-5 bg-zinc-800/80 rounded-md w-full" />
                  <div className="h-5 bg-zinc-800/80 rounded-md w-3/4" />
                </div>
                {/* Summary */}
                <div className="space-y-1.5 pt-1">
                  <div className="h-3 bg-zinc-900/75 rounded w-full" />
                  <div className="h-3 bg-zinc-900/75 rounded w-11/12" />
                  <div className="h-3 bg-zinc-900/70 rounded w-5/6" />
                </div>
              </div>
              
              {/* Bottom Row */}
              <div className="border-t border-zinc-900/60 pt-3 flex items-center justify-between text-xs">
                {/* Author stats */}
                <div className="h-3 bg-zinc-900/60 rounded w-24" />
                {/* Action link */}
                <div className="h-3.5 bg-zinc-900/80 rounded w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
