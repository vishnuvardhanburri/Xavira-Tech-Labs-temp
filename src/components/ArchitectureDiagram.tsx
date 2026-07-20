import React, { useState } from 'react';
import { Shield, Database, Cpu, Share2, AlertCircle, CheckCircle, Info, FileDown } from 'lucide-react';
import { jsPDF } from 'jspdf';

interface DiagramLayer {
  id: string;
  name: string;
  icon: React.ReactNode;
  riskTitle: string;
  risks: string[];
  remediationTitle: string;
  remediations: string[];
  performanceMetric: string;
  systemStatus: 'Vulnerable' | 'Optimised';
}

export default function ArchitectureDiagram() {
  const [activeLayer, setActiveLayer] = useState<string>('gateway');
  const [isExporting, setIsExporting] = useState(false);

  const layers: Record<string, DiagramLayer> = {
    gateway: {
      id: 'gateway',
      name: '01 / Perimeter Ingress Gateway',
      icon: <Shield className="w-5 h-5 text-cyan-400" />,
      riskTitle: 'Typical System Risks Identified:',
      risks: [
        'Lack of API rate limiting leading to easy denial of service.',
        'Unsafe prompt gateways exposing generative pipelines to injection.',
        'Improper SSL configuration & non-hardened CORS structures.'
      ],
      remediationTitle: 'XAVIRA Hardened Ingress Architecture:',
      remediations: [
        'Stateless security proxies filtering prompt vectors under 2ms.',
        'Distributed token-bucket rate limiting at edge endpoints.',
        'Automated static security analysis (SAST) blocking unvetted releases.'
      ],
      performanceMetric: 'Edge Latency: <1.8ms (P99)',
      systemStatus: 'Optimised'
    },
    broker: {
      id: 'broker',
      name: '02 / Distributed Message Bus (Kafka/Event)',
      icon: <Share2 className="w-5 h-5 text-cyan-400" />,
      riskTitle: 'Typical System Risks Identified:',
      risks: [
        'Unordered event processing causing double-payments in Ledger channels.',
        'No dead-letter-queues (DLQ) causing poison-pill message blockages.',
        'Unconfigured replication factors leading to catastrophic data loss during node failures.'
      ],
      remediationTitle: 'XAVIRA Event-Mesh Topology:',
      remediations: [
        'Strict transaction partitions and partition keys enforcing total ordering.',
        'Automated idempotent consumers ignoring duplicate delivery runs.',
        '3-Node replication profiles with guaranteed atomic write-ahead logs.'
      ],
      performanceMetric: 'Message Throughput: 120,000 req/sec',
      systemStatus: 'Optimised'
    },
    microservices: {
      id: 'microservices',
      name: '03 / Core Concurrency Engines (Rust/Go)',
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      riskTitle: 'Typical System Risks Identified:',
      risks: [
        'Memory leaks in unmanaged threads crashing processes under load.',
        'Blocking database calls locking event-loops in single-threaded runtimes.',
        'Lack of circuit breakers creating cascading failure blackouts.'
      ],
      remediationTitle: 'XAVIRA Concurrency Blueprint:',
      remediations: [
        'Clean asynchronous execution layers with strict timeouts.',
        'Pre-compiled strongly typed memory buffers preventing memory allocation overheads.',
        'Sovereign circuit-breaker design isolating thread pool boundaries.'
      ],
      performanceMetric: 'Thread Latency: Sub-millisecond',
      systemStatus: 'Optimised'
    },
    database: {
      id: 'database',
      name: '04 / State & Vector Registries',
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      riskTitle: 'Typical System Risks Identified:',
      risks: [
        'Unindexed relational queries causing CPU locks under enterprise scaling.',
        'Loose multi-tenant isolation schemas allowing cross-customer data leakage.',
        'Inefficient vector search indexing crashing server-side memory.'
      ],
      remediationTitle: 'XAVIRA Sovereign Storage Strategy:',
      remediations: [
        'Strict database row-level tenant security (RLS) enforcement.',
        'Sub-second analytical data warehouses (ClickHouse) for complex reports.',
        'Highly optimised HNSW index parameters for millisecond-speed vector retrieval.'
      ],
      performanceMetric: 'Query Resolution: <8ms (P95)',
      systemStatus: 'Optimised'
    }
  };

  const selected = layers[activeLayer];

  const handleExportPDF = () => {
    setIsExporting(true);
    setTimeout(() => {
      try {
        const doc = new jsPDF({
          orientation: 'portrait',
          unit: 'mm',
          format: 'a4'
        });

        const margin = 20;
        let yPosition = 25;

        const primaryColor = [2, 5, 16]; // #020510
        const accentColor = [6, 182, 212]; // #06b6d4
        const textColor = [50, 50, 50]; 
        const subTextColor = [100, 100, 100]; 
        const lightBg = [245, 247, 250]; 
        const successColor = [16, 185, 129]; 
        const dangerColor = [239, 68, 68]; 

        // Header Banner
        doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
        doc.rect(0, 0, 210, 40, 'F');

        // Title
        doc.setTextColor(255, 255, 255);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.text('XAVIRA ARCHITECTURAL BLUEPRINT', margin, 18);

        // Subtitle
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
        doc.text('SYSTEM HARDENING & REMEDIATION SPECIFICATION', margin, 24);

        // Date & Reference
        doc.setTextColor(150, 150, 150);
        doc.setFontSize(8);
        const dateStr = new Date().toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        doc.text(`DATE: ${dateStr}   |   REF: XAV-ARCH-SPEC-99`, margin, 31);

        yPosition = 52;

        // Intro text
        doc.setTextColor(textColor[0], textColor[1], textColor[2]);
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.text('Document Overview:', margin, yPosition);
        yPosition += 6;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        const introText = "This specification provides a formal mapping of architectural vulnerability analysis and corresponding hardened system designs implemented under the XAVIRA sovereign engineering model. It serves as an authoritative reference for systems scaling, threat boundary isolation, and performance latency mitigation.";
        const splitIntro = doc.splitTextToSize(introText, 210 - 2 * margin);
        doc.text(splitIntro, margin, yPosition);
        yPosition += splitIntro.length * 4.5 + 6;

        // Draw separator line
        doc.setDrawColor(230, 230, 230);
        doc.setLineWidth(0.5);
        doc.line(margin, yPosition, 210 - margin, yPosition);
        yPosition += 10;

        // Print all 4 layers
        Object.values(layers).forEach((layer) => {
          if (yPosition > 220) {
            doc.addPage();
            yPosition = 25;
          }

          // Layer header
          doc.setFillColor(lightBg[0], lightBg[1], lightBg[2]);
          doc.rect(margin, yPosition, 210 - 2 * margin, 8, 'F');
          
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(10);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text(layer.name.toUpperCase(), margin + 4, yPosition + 5.5);

          // Status Badge
          doc.setFillColor(successColor[0], successColor[1], successColor[2]);
          doc.rect(210 - margin - 25, yPosition + 1.5, 21, 5, 'F');
          doc.setTextColor(255, 255, 255);
          doc.setFontSize(7);
          doc.text('OPTIMISED', 210 - margin - 21.5, yPosition + 4.8);

          yPosition += 13;

          // Risks column
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.setTextColor(dangerColor[0], dangerColor[1], dangerColor[2]);
          doc.text('IDENTIFIED AUDIT RISKS & PENETRATION VECTORS:', margin + 2, yPosition);
          yPosition += 4.5;

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(textColor[0], textColor[1], textColor[2]);
          
          layer.risks.forEach((risk) => {
            const splitRisk = doc.splitTextToSize(`• ${risk}`, 170);
            doc.text(splitRisk, margin + 4, yPosition);
            yPosition += splitRisk.length * 4;
          });

          yPosition += 3;

          // Remediations column
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8.5);
          doc.setTextColor(accentColor[0], accentColor[1], accentColor[2]);
          doc.text('XAVIRA REMEDIATION & COMPLIANCE SOLUTION:', margin + 2, yPosition);
          yPosition += 4.5;

          doc.setFont('helvetica', 'normal');
          doc.setFontSize(8);
          doc.setTextColor(textColor[0], textColor[1], textColor[2]);

          layer.remediations.forEach((rem) => {
            const splitRem = doc.splitTextToSize(`• ${rem}`, 170);
            doc.text(splitRem, margin + 4, yPosition);
            yPosition += splitRem.length * 4;
          });

          yPosition += 3;

          // Performance Benchmark
          doc.setFont('helvetica', 'bold');
          doc.setFontSize(8);
          doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
          doc.text(`VERIFIED PERFORMANCE BENCHMARK:  ${layer.performanceMetric.toUpperCase()}`, margin + 2, yPosition);
          yPosition += 8;

          // Divider
          doc.setDrawColor(240, 240, 240);
          doc.line(margin, yPosition, 210 - margin, yPosition);
          yPosition += 8;
        });

        // Footer on current page
        doc.setTextColor(subTextColor[0], subTextColor[1], subTextColor[2]);
        doc.setFontSize(7.5);
        doc.setFont('helvetica', 'italic');
        doc.text('CLASSIFICATION: STRICTLY CONFIDENTIAL - CLIENT INTERNAL USE ONLY', margin, 285);
        doc.text('XAVIRA Technologies Ltd. Sovereign Systems Engineering.', 210 - margin - 75, 285);

        doc.save('Xavira_Hardened_Systems_Architecture.pdf');
      } catch (err) {
        console.error("Failed to export PDF:", err);
      } finally {
        setIsExporting(false);
      }
    }, 800);
  };

  return (
    <div className="bg-[#0c0c11] border border-cyan-500/20 rounded-lg p-6 lg:p-8 font-sans glow-cyan">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Visual Interactive SVG Diagram */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-lg font-bold text-cyan-400 mb-2 tracking-wide flex items-center gap-2">
                <span className="inline-block w-2.5 h-2.5 bg-cyan-500 animate-ping rounded-full" />
                SYSTEM DIAGNOSTIC GRAPH
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-light">
                Toggle the core system modules to inspect vulnerabilities identified during security audits versus our hardened high-performance architectures.
              </p>
            </div>
            
            {/* Export PDF Button */}
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className={`font-mono text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-md border transition-all shrink-0 flex items-center gap-1.5 cursor-pointer font-bold ${
                isExporting
                  ? 'bg-zinc-900 border-zinc-800 text-zinc-500 cursor-not-allowed'
                  : 'bg-cyan-950/20 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-zinc-950 hover:border-cyan-400'
              }`}
            >
              <FileDown className={`w-3.5 h-3.5 ${isExporting ? 'animate-bounce' : ''}`} />
              <span>{isExporting ? 'Exporting...' : 'Export Blueprint PDF'}</span>
            </button>
          </div>

          {/* SVG Diagram container */}
          <div className="relative border border-zinc-800 bg-[#07070a] rounded-lg p-6 flex flex-col items-center justify-center space-y-4 overflow-hidden select-none min-h-[360px] cyber-grid">
            {/* Grid background effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,182,212,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(6,182,212,0.04)_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            {/* Ingress Gateway Node */}
            <button
              onClick={() => setActiveLayer('gateway')}
              className={`relative z-10 w-full max-w-sm flex items-center justify-between p-3.5 border rounded-md transition-all duration-200 ${
                activeLayer === 'gateway'
                  ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-bold glow-cyan shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:border-cyan-400/60 hover:text-cyan-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs tracking-wider uppercase">01 / Ingress Gateway</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 text-cyan-400 font-semibold bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">EDGE_GW</span>
            </button>

            {/* Connection line 1 */}
            <div className="w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-cyan-500 animate-pulse" />

            {/* Event Bus Node */}
            <button
              onClick={() => setActiveLayer('broker')}
              className={`relative z-10 w-full max-w-sm flex items-center justify-between p-3.5 border rounded-md transition-all duration-200 ${
                activeLayer === 'broker'
                  ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 font-bold glow-cyan shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:border-cyan-500/60 hover:text-cyan-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Share2 className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs tracking-wider uppercase">02 / Message Broker</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 text-cyan-400 font-semibold bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">EVENT_BUS</span>
            </button>

            {/* Connection line 2 */}
            <div className="w-[2px] h-6 bg-gradient-to-b from-cyan-500 to-cyan-400 animate-pulse" />

            {/* Core Compute Engines */}
            <button
              onClick={() => setActiveLayer('microservices')}
              className={`relative z-10 w-full max-w-sm flex items-center justify-between p-3.5 border rounded-md transition-all duration-200 ${
                activeLayer === 'microservices'
                  ? 'border-cyan-400 bg-cyan-950/40 text-cyan-300 font-bold glow-cyan shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:border-cyan-400/60 hover:text-cyan-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs tracking-wider uppercase">03 / Core Concurrency</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 text-cyan-400 font-semibold bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">RUST_GO</span>
            </button>

            {/* Connection line 3 */}
            <div className="w-[2px] h-6 bg-gradient-to-b from-cyan-400 to-cyan-500 animate-pulse" />

            {/* State Storage Node */}
            <button
              onClick={() => setActiveLayer('database')}
              className={`relative z-10 w-full max-w-sm flex items-center justify-between p-3.5 border rounded-md transition-all duration-200 ${
                activeLayer === 'database'
                  ? 'border-cyan-500 bg-cyan-950/40 text-cyan-300 font-bold glow-cyan shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                  : 'border-zinc-800 bg-zinc-950/80 text-zinc-400 hover:border-cyan-500/60 hover:text-cyan-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Database className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs tracking-wider uppercase">04 / Storage Registry</span>
              </div>
              <span className="text-[10px] font-mono opacity-80 text-cyan-400 font-semibold bg-cyan-950/30 px-2 py-0.5 rounded border border-cyan-500/20">POSTGRES_DB</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-zinc-500 px-2 font-mono">
            <Info className="w-4 h-4 shrink-0 text-cyan-400" />
            <span>[ONLINE] Interactive sandbox mapping live-audited architectural segments.</span>
          </div>
        </div>

        {/* Right Side: Deep-Dive Risk Details Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#111116] border border-zinc-800 rounded-lg p-5">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3.5">
              <div className="flex items-center gap-2.5">
                {selected.icon}
                <span className="font-display font-bold text-sm text-white">{selected.name}</span>
              </div>
              <span className="text-[10px] font-mono bg-cyan-600 text-zinc-950 border border-cyan-500/30 px-2.5 py-0.5 rounded uppercase tracking-wider font-semibold animate-pulse">
                {selected.systemStatus}
              </span>
            </div>

            {/* Sub-section: Typical Audit Risks */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-rose-500 font-bold uppercase flex items-center gap-1.5 tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" />
                {selected.riskTitle}
              </h4>
              <ul className="space-y-2 text-xs leading-relaxed text-zinc-400 font-light">
                {selected.risks.map((risk, index) => (
                  <li key={index} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-[1.5px] before:bg-rose-500">
                    {risk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sub-section: XAVIRA Solutions */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-cyan-400 font-bold uppercase flex items-center gap-1.5 tracking-wider">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                {selected.remediationTitle}
              </h4>
              <ul className="space-y-2 text-xs leading-relaxed text-zinc-200">
                {selected.remediations.map((rem, index) => (
                  <li key={index} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-[1.5px] before:bg-cyan-400 text-zinc-200 font-medium">
                    {rem}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Metric */}
          <div className="mt-6 pt-4 border-t border-zinc-850 flex items-center justify-between text-xs font-mono">
            <span className="text-zinc-500">Remediated Benchmark:</span>
            <span className="text-cyan-400 font-bold tracking-wider">{selected.performanceMetric}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
