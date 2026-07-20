import React, { useState } from 'react';
import { 
  ResponsiveContainer, AreaChart, Area, BarChart, Bar, LineChart, Line, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';
import { Cpu, DollarSign, Activity, Sparkles, TrendingDown, ArrowUpRight, Grid } from 'lucide-react';
import MemoryLeakHeatmap from './MemoryLeakHeatmap';

// Sample dataset reflecting real client efficiency optimisation achievements
const latencyData = [
  { stage: 'Baseline (Pre-Audit)', p99: 240, p95: 160 },
  { stage: 'Static Analysis', p99: 180, p95: 110 },
  { stage: 'Enclave Isolates', p99: 110, p95: 70 },
  { stage: 'Go Queue Optimise', p99: 45, p95: 25 },
  { stage: 'XAVIRA Certified', p99: 1.8, p95: 0.9 }
];

const cloudCostData = [
  { month: 'Month 0 (Legacy)', spend: 32000 },
  { month: 'Month 1 (Audit)', spend: 31000 },
  { month: 'Month 2 (Refactor)', spend: 22000 },
  { month: 'Month 3 (IaC Pruning)', spend: 19500 },
  { month: 'Month 4 (Autoscale)', spend: 18200 },
  { month: 'Month 5 (Certified)', spend: 18500 }
];

const throughputData = [
  { client: 'Fintech Sovereign', before: 2500, after: 125000 },
  { client: 'Helix Biodata', before: 1800, after: 85000 },
  { client: 'Nexagrid UK', before: 4000, after: 180000 },
  { client: 'CyberOS Corp', before: 3000, after: 150000 },
  { client: 'Quantum Core', before: 1500, after: 95000 }
];

export default function EngineeringImpactDashboard() {
  const [activeTab, setActiveTab] = useState<'latency' | 'cost' | 'throughput' | 'heatmap'>('latency');

  return (
    <section id="engineering-impact-dashboard" className="py-24 lg:py-32 bg-transparent border-b border-[#0f1d3a] relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="font-mono text-[10px] tracking-widest text-pink-500 bg-pink-950/20 border border-pink-500/20 px-3.5 py-1.5 rounded uppercase font-bold glow-text-pink">
            [ REAL-WORLD METRICS & TELEMETRY ]
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-light text-white tracking-widest uppercase">
            ENGINEERING IMPACT
          </h2>
          <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Interactive telemetry visualizations detailing typical performance gains, cloud cost compression, and scale limits unlocked during XAVIRA architecture audits.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls and Highlights (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                // SELECT TELEMETRY STREAM
              </span>
              
              <div className="space-y-3">
                <button
                  id="tab-latency"
                  onClick={() => setActiveTab('latency')}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    activeTab === 'latency'
                      ? 'bg-[#030815]/90 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.05)]'
                      : 'bg-[#040c1e]/40 border-[#0f1d3a]/60 hover:border-cyan-500/20'
                  }`}
                >
                  <div className={`p-2 rounded ${activeTab === 'latency' ? 'bg-cyan-950/40 text-cyan-400' : 'bg-zinc-900 text-zinc-500'}`}>
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                      Latency Compression
                    </span>
                    <span className="block text-[11px] text-zinc-400 font-light">
                      P99 response time reduced from 240ms to 1.8ms.
                    </span>
                  </div>
                </button>

                <button
                  id="tab-cost"
                  onClick={() => setActiveTab('cost')}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    activeTab === 'cost'
                      ? 'bg-[#030815]/90 border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.05)]'
                      : 'bg-[#040c1e]/40 border-[#0f1d3a]/60 hover:border-pink-500/20'
                  }`}
                >
                  <div className={`p-2 rounded ${activeTab === 'cost' ? 'bg-pink-950/40 text-pink-500' : 'bg-zinc-900 text-zinc-500'}`}>
                    <DollarSign className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                      Cloud Cost Reduction
                    </span>
                    <span className="block text-[11px] text-zinc-400 font-light">
                      Up to 42% permanent drop in hosting & compute spend.
                    </span>
                  </div>
                </button>

                <button
                  id="tab-throughput"
                  onClick={() => setActiveTab('throughput')}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    activeTab === 'throughput'
                      ? 'bg-[#030815]/90 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.05)]'
                      : 'bg-[#040c1e]/40 border-[#0f1d3a]/60 hover:border-emerald-500/20'
                  }`}
                >
                  <div className={`p-2 rounded ${activeTab === 'throughput' ? 'bg-emerald-950/40 text-emerald-400' : 'bg-zinc-900 text-zinc-500'}`}>
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                      Throughput Scaling
                    </span>
                    <span className="block text-[11px] text-zinc-400 font-light">
                      Maximum concurrent connections sustained before timeout.
                    </span>
                  </div>
                </button>

                <button
                  id="tab-heatmap"
                  onClick={() => setActiveTab('heatmap')}
                  className={`w-full text-left p-5 rounded-lg border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                    activeTab === 'heatmap'
                      ? 'bg-[#030815]/90 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.05)]'
                      : 'bg-[#040c1e]/40 border-[#0f1d3a]/60 hover:border-cyan-500/20'
                  }`}
                >
                  <div className={`p-2 rounded ${activeTab === 'heatmap' ? 'bg-cyan-950/40 text-cyan-400' : 'bg-zinc-900 text-zinc-500'}`}>
                    <Grid className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block font-display text-xs font-bold text-white uppercase tracking-wider">
                      Memory Leak Heatmap
                    </span>
                    <span className="block text-[11px] text-zinc-400 font-light">
                      Real-time garbage compaction and leak detection telemetry.
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Quick Audit Stat Highlight */}
            <div className="bg-[#030815]/80 border border-[#0f1d3a]/60 p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                  Key Optimisation Highlight
                </span>
              </div>
              
              {activeTab === 'latency' && (
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-mono font-medium text-white">99.2%</span>
                    <span className="text-xs text-cyan-400 font-mono">LATENCY DROP</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal font-light">
                    Removing thread locks and moving compute to custom secure Go web enclave isolates resulted in ultra-low sub-2ms response cycles.
                  </p>
                </div>
              )}

              {activeTab === 'cost' && (
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-mono font-medium text-white">-$13.8K</span>
                    <span className="text-xs text-pink-500 font-mono">MONTHLY SAVINGS</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal font-light">
                    Refactoring database indexes and pruning unused cloud nodes scaled compute capacity while cutting resource drain immediately.
                  </p>
                </div>
              )}

              {activeTab === 'throughput' && (
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-mono font-medium text-white">50X</span>
                    <span className="text-xs text-emerald-400 font-mono">CAPACITY MULTIPLIER</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal font-light">
                    Redesigning asynchronous pipelines and state channels allows our audited stacks to hold under intense organic user spikes.
                  </p>
                </div>
              )}

              {activeTab === 'heatmap' && (
                <div className="space-y-2">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-mono font-medium text-white">ZERO GC</span>
                    <span className="text-xs text-cyan-400 font-mono">HEAP RECOVERY</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-normal font-light">
                    Dynamic memory sweeping and lock free resource reuse patches ensure zero-leak operations across memory sectors.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Visualization Board (Col 5-12) */}
          <div className="lg:col-span-8 bg-[#040c1e]/60 border border-[#0f1d3a]/60 backdrop-blur-md rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            
            {/* Telemetry Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0f1d3a]/60 pb-5 font-display">
              <div className="space-y-1">
                <h3 className="font-display text-lg font-black text-white tracking-widest uppercase">
                  {activeTab === 'latency' && 'P99 Latency Compression (ms)'}
                  {activeTab === 'cost' && 'Monthly Cloud Spend Compression ($)'}
                  {activeTab === 'throughput' && 'Peak Concurrent Ingress Capacity'}
                  {activeTab === 'heatmap' && 'Real-time Leak Heatmap & Garbage Compaction'}
                </h3>
                <span className="block font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
                  {activeTab === 'latency' && 'Continuous metrics captured during standard 5-day audit & patch phases.'}
                  {activeTab === 'cost' && 'MoM cloud ledger values following IaC pruning and core stack refactoring.'}
                  {activeTab === 'throughput' && 'Verified load-testing connections before thread-pool starvation.'}
                  {activeTab === 'heatmap' && 'Interactive leak monitor sweeping through 64 virtual isolated co-routine slots.'}
                </span>
              </div>
              
              <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>TELEMETRY STREAM: LIVE</span>
              </div>
            </div>

            {/* Recharts Canvas */}
            <div className="min-h-[320px] w-full bg-black/30 rounded-lg p-3 border border-zinc-900/60 relative flex items-center justify-center">
              
              {activeTab === 'heatmap' && (
                <MemoryLeakHeatmap />
              )}

              {activeTab === 'latency' && (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={latencyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="latencyGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="latency95Grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                    <XAxis 
                      dataKey="stage" 
                      stroke="#71717a" 
                      fontSize={9} 
                      fontFamily="JetBrains Mono, monospace" 
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#71717a" 
                      fontSize={9} 
                      fontFamily="JetBrains Mono, monospace" 
                      tickLine={false}
                      unit="ms"
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '6px' }}
                      labelStyle={{ color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 'bold' }}
                      itemStyle={{ color: '#06b6d4', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', paddingTop: '10px' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="p99" 
                      name="P99 Response Latency" 
                      stroke="#06b6d4" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#latencyGrad)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="p95" 
                      name="P95 Response Latency" 
                      stroke="#a855f7" 
                      strokeWidth={1.5}
                      fillOpacity={1} 
                      fill="url(#latency95Grad)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'cost' && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cloudCostData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                    <XAxis 
                      dataKey="month" 
                      stroke="#71717a" 
                      fontSize={9} 
                      fontFamily="JetBrains Mono, monospace" 
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#71717a" 
                      fontSize={9} 
                      fontFamily="JetBrains Mono, monospace" 
                      tickLine={false}
                      domain={[15000, 35000]}
                      tickFormatter={(v) => `$${v / 1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '6px' }}
                      labelStyle={{ color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 'bold' }}
                      itemStyle={{ color: '#ec4899', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', paddingTop: '10px' }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="spend" 
                      name="Monthly Infrastructure Cost ($)" 
                      stroke="#ec4899" 
                      strokeWidth={3}
                      activeDot={{ r: 8 }}
                      dot={{ r: 4, stroke: '#ec4899', strokeWidth: 2, fill: '#060608' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}

              {activeTab === 'throughput' && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={throughputData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#18181b" />
                    <XAxis 
                      dataKey="client" 
                      stroke="#71717a" 
                      fontSize={9} 
                      fontFamily="JetBrains Mono, monospace" 
                      tickLine={false}
                    />
                    <YAxis 
                      stroke="#71717a" 
                      fontSize={9} 
                      fontFamily="JetBrains Mono, monospace" 
                      tickLine={false}
                      tickFormatter={(v) => `${v / 1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#09090b', borderColor: '#27272a', borderRadius: '6px' }}
                      labelStyle={{ color: '#ffffff', fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', fontWeight: 'bold' }}
                      itemStyle={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px' }}
                    />
                    <Legend 
                      wrapperStyle={{ fontSize: '10px', fontFamily: 'JetBrains Mono, monospace', paddingTop: '10px' }}
                    />
                    <Bar 
                      dataKey="before" 
                      name="Concurrent Connections (Before Audit)" 
                      fill="#3f3f46" 
                      radius={[4, 4, 0, 0]}
                    />
                    <Bar 
                      dataKey="after" 
                      name="Concurrent Connections (With XAVIRA Stacks)" 
                      fill="#10b981" 
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}

            </div>

            {/* Explanatory footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-zinc-900 text-xs text-zinc-500 font-mono">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-emerald-400" />
                <span>Audited clients consistently unlock higher throughput and drop overall operating costs.</span>
              </div>
              <span className="text-[10px] text-zinc-600 tracking-wider">
                *AVERAGED INDEPENDENT PRODUCTION TELEMETRY
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
