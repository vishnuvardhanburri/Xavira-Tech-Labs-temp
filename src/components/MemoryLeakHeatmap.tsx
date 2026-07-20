import React, { useState, useEffect } from 'react';
import { Play, CheckCircle2, ShieldAlert, Zap, RotateCw } from 'lucide-react';

interface MemoryBlock {
  id: number;
  status: 'clean' | 'leak' | 'lock' | 'optimised';
  load: number; // percentage 0-100
}

export default function MemoryLeakHeatmap() {
  const [blocks, setBlocks] = useState<MemoryBlock[]>([]);
  const [isRunningPatch, setIsRunningPatch] = useState(false);
  const [leakRate, setLeakRate] = useState(4.8); // MB/s
  const [leakedPointers, setLeakedPointers] = useState(142);
  const [heapUtilization, setHeapUtilization] = useState(78.4);
  const [sweepIndex, setSweepIndex] = useState(-1);

  // Initialize blocks
  const resetGrid = (simulateLeak = true) => {
    const newBlocks: MemoryBlock[] = Array.from({ length: 64 }, (_, i) => {
      // Create some initial leakage pattern
      let status: 'clean' | 'leak' | 'lock' | 'optimised' = 'clean';
      let load = Math.floor(Math.random() * 20) + 15;

      if (simulateLeak) {
        if (i % 7 === 0 || i % 11 === 0) {
          status = 'leak';
          load = Math.floor(Math.random() * 30) + 70;
        } else if (i % 5 === 0) {
          status = 'lock';
          load = Math.floor(Math.random() * 25) + 55;
        }
      }

      return { id: i, status, load };
    });
    setBlocks(newBlocks);
    if (simulateLeak) {
      setLeakRate(4.8);
      setLeakedPointers(142);
      setHeapUtilization(78.4);
    } else {
      setLeakRate(0.0);
      setLeakedPointers(0);
      setHeapUtilization(18.2);
    }
    setSweepIndex(-1);
  };

  useEffect(() => {
    resetGrid(true);
  }, []);

  // Run dynamic values fluctuation in idle mode
  useEffect(() => {
    if (isRunningPatch) return;

    const timer = setInterval(() => {
      // Slightly fluctuate heap utilization and pointers if leaks exist
      if (leakedPointers > 0) {
        setHeapUtilization(prev => Math.min(95, +(prev + (Math.random() * 0.4 - 0.1)).toFixed(1)));
        setLeakedPointers(prev => prev + (Math.random() > 0.7 ? 1 : 0));
        
        // Randomly degrade a clean block
        setBlocks(prev => {
          const next = [...prev];
          const cleanIndices = next.map((b, idx) => b.status === 'clean' ? idx : -1).filter(idx => idx !== -1);
          if (cleanIndices.length > 0 && Math.random() > 0.85) {
            const targetIdx = cleanIndices[Math.floor(Math.random() * cleanIndices.length)];
            next[targetIdx] = {
              ...next[targetIdx],
              status: Math.random() > 0.5 ? 'leak' : 'lock',
              load: Math.floor(Math.random() * 40) + 60
            };
          }
          return next;
        });
      } else {
        // Flatline efficient state
        setHeapUtilization(prev => Math.max(17.5, +(prev + (Math.random() * 0.2 - 0.1)).toFixed(1)));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunningPatch, leakedPointers]);

  // Handle patch animation row by row
  const handleRunPatch = () => {
    if (isRunningPatch) return;
    setIsRunningPatch(true);
    setSweepIndex(0);

    let currentRow = 0;
    const totalRows = 8;

    const interval = setInterval(() => {
      setSweepIndex(currentRow);

      setBlocks(prev => {
        const next = [...prev];
        // Patch all blocks in this row (row is 8 blocks wide)
        for (let col = 0; col < 8; col++) {
          const blockIdx = currentRow * 8 + col;
          if (next[blockIdx]) {
            next[blockIdx] = {
              ...next[blockIdx],
              status: 'optimised',
              load: Math.floor(Math.random() * 10) + 8 // high compression
            };
          }
        }
        return next;
      });

      // Gradually reduce metrics
      const progress = (currentRow + 1) / totalRows;
      setHeapUtilization(prev => +(78.4 - progress * 60.2).toFixed(1));
      setLeakedPointers(prev => Math.max(0, Math.floor(142 - progress * 142)));
      setLeakRate(prev => +(4.8 - progress * 4.8).toFixed(1));

      currentRow++;
      if (currentRow >= totalRows) {
        clearInterval(interval);
        setTimeout(() => {
          setIsRunningPatch(false);
          setSweepIndex(-1);
          setLeakRate(0.0);
          setLeakedPointers(0);
          setHeapUtilization(18.2);
        }, 300);
      }
    }, 400);
  };

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-stretch select-none font-sans">
      
      {/* Grid Canvas Panel */}
      <div className="flex-1 bg-black/40 border border-zinc-900 rounded-lg p-5 flex flex-col justify-between relative overflow-hidden">
        {/* Row sweep indicator line */}
        {sweepIndex !== -1 && (
          <div 
            className="absolute left-0 right-0 h-[2px] bg-cyan-400 glow-cyan animate-pulse transition-all duration-300"
            style={{ top: `${(sweepIndex / 8) * 100 + 6}%` }}
          />
        )}

        <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
              HEAP PAGE SECTOR MATRIX (64 ISOLATES)
            </span>
          </div>
          <span className="font-mono text-[9px] text-zinc-500">
            {isRunningPatch ? 'SWEEPING & COMPACTING...' : 'MONITORING'}
          </span>
        </div>

        {/* 8x8 Grid */}
        <div className="grid grid-cols-8 gap-1.5 aspect-square max-w-[260px] mx-auto w-full">
          {blocks.map((block) => {
            let bgClass = 'bg-zinc-900/60 border-zinc-950';
            let glowClass = '';

            if (block.status === 'leak') {
              bgClass = 'bg-red-950/40 border-red-500/30 text-red-400';
              glowClass = 'shadow-[inset_0_0_8px_rgba(239,68,68,0.25)]';
            } else if (block.status === 'lock') {
              bgClass = 'bg-amber-950/40 border-amber-500/30 text-amber-400';
              glowClass = 'shadow-[inset_0_0_8px_rgba(245,158,11,0.25)]';
            } else if (block.status === 'optimised') {
              bgClass = 'bg-cyan-950/40 border-cyan-500/30 text-cyan-400';
              glowClass = 'shadow-[inset_0_0_8px_rgba(6,182,212,0.3)]';
            } else {
              // clean normal usage
              bgClass = 'bg-zinc-950 border-zinc-900 text-zinc-500';
            }

            return (
              <div
                key={block.id}
                className={`border rounded-sm transition-all duration-500 flex flex-col items-center justify-center relative group ${bgClass} ${glowClass}`}
                title={`Sector #${block.id} | Load: ${block.load}% | State: ${block.status.toUpperCase()}`}
              >
                {/* Dynamic mini block content */}
                <span className="font-mono text-[7px] font-bold">
                  {block.status === 'leak' ? 'L' : block.status === 'lock' ? 'X' : block.status === 'optimised' ? '◈' : ''}
                </span>
                
                {/* Micro tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1.5 opacity-0 group-hover:opacity-100 pointer-events-none bg-zinc-950 border border-zinc-800 text-[8px] font-mono p-1 rounded z-20 whitespace-nowrap transition-opacity text-white">
                  Sec #{block.id}: {block.load}% Load ({block.status})
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-4 font-mono text-[9px] text-zinc-400 mt-4 pt-3 border-t border-zinc-900">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 border border-zinc-900 bg-zinc-950 rounded-sm" />
            <span>Idle</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 border border-red-500/30 bg-red-950/40 rounded-sm" />
            <span>Leak (Red)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 border border-amber-500/30 bg-amber-950/40 rounded-sm" />
            <span>Contention</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 border border-cyan-500/30 bg-cyan-950/40 rounded-sm" />
            <span>Optimised</span>
          </div>
        </div>
      </div>

      {/* Control Metrics Panel */}
      <div className="w-full md:w-[220px] shrink-0 bg-black/40 border border-zinc-900 rounded-lg p-5 flex flex-col justify-between">
        <div className="space-y-4">
          <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
            // METRIC DETECTORS
          </span>

          <div className="space-y-3 font-mono">
            <div>
              <span className="block text-[9px] text-zinc-500 uppercase">HEAP CAPACITY</span>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-bold text-white">{heapUtilization}%</span>
                <span className="text-[10px] text-zinc-400">of 128MB Limit</span>
              </div>
              <div className="w-full bg-zinc-950 h-1 rounded overflow-hidden border border-zinc-900 mt-1">
                <div 
                  className={`h-full transition-all duration-300 ${heapUtilization > 70 ? 'bg-red-500' : heapUtilization > 40 ? 'bg-amber-500' : 'bg-cyan-500'}`}
                  style={{ width: `${heapUtilization}%` }}
                />
              </div>
            </div>

            <div>
              <span className="block text-[9px] text-zinc-500 uppercase">LEAKED POINTERS</span>
              <span className={`text-lg font-bold block ${leakedPointers > 0 ? 'text-red-400 animate-pulse' : 'text-zinc-300'}`}>
                {leakedPointers}
              </span>
            </div>

            <div>
              <span className="block text-[9px] text-zinc-500 uppercase">LEAK DRIFT RATE</span>
              <span className={`text-lg font-bold block ${leakRate > 0 ? 'text-amber-400' : 'text-cyan-400'}`}>
                +{leakRate} MB/sec
              </span>
            </div>

            <div>
              <span className="block text-[9px] text-zinc-500 uppercase">LOCK-FREE GUARANTEE</span>
              <span className={`text-[10px] font-semibold flex items-center gap-1 mt-1 ${leakedPointers > 0 ? 'text-amber-500 bg-amber-950/10 border border-amber-500/20 px-1.5 py-0.5 rounded w-fit' : 'text-cyan-400 bg-cyan-950/10 border border-cyan-500/20 px-1.5 py-0.5 rounded w-fit'}`}>
                {leakedPointers > 0 ? (
                  <>
                    <ShieldAlert className="w-3 h-3 text-amber-500 shrink-0" />
                    <span>THREAD RISK [HIGH]</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>SECURE CO-ROUTINES</span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Action button inside metrics panel */}
        <div className="space-y-2 pt-4 border-t border-zinc-900">
          <button
            onClick={handleRunPatch}
            disabled={isRunningPatch || leakedPointers === 0}
            className="w-full bg-[#040c1e] hover:bg-[#061533] border border-[#0f1d3a] hover:border-cyan-500/30 text-white rounded py-2 px-3 font-mono text-[9px] font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 disabled:opacity-40 cursor-pointer"
          >
            {isRunningPatch ? (
              <>
                <RotateCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>COMPACTING...</span>
              </>
            ) : (
              <>
                <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                <span>RUN REFACT_PATCH</span>
              </>
            )}
          </button>

          <button
            onClick={() => resetGrid(true)}
            disabled={isRunningPatch}
            className="w-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 text-zinc-400 hover:text-white rounded py-1.5 px-3 font-mono text-[9px] tracking-widest uppercase transition-all cursor-pointer disabled:opacity-40"
          >
            SIMULATE LEAK
          </button>
        </div>

      </div>

    </div>
  );
}
