import React, { useState } from 'react';
import { Mail, Phone, MapPin, Building, Send, Check, Shield } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    title: '',
    company: '',
    email: '',
    phone: '',
    region: 'United Kingdom',
    companySize: '50-200',
    bottleneck: 'High Scalability & Latency Limits',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // scroll to confirmation top
    }, 100);
  };

  return (
    <div className="bg-[#0b0b10] border border-zinc-850 rounded-lg overflow-hidden font-sans text-white shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left column: Contact Info (Cyber Mecha Terminal Style) */}
        <div className="lg:col-span-5 bg-zinc-950/40 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-zinc-850 flex flex-col justify-between space-y-12">
          <div className="space-y-6">
            <span className="text-[10px] font-mono tracking-wider text-cyan-400 bg-cyan-950/20 border border-cyan-500/20 px-2.5 py-1 rounded uppercase font-bold glow-text-cyan">
              [CORPORATE INGRESS]
            </span>
            <h3 className="font-display text-2xl font-light text-white uppercase tracking-wider">// Initiate Engagement</h3>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              For high-growth SaaS, fintech, cybersecurity, and enterprise platforms seeking an independent Engineering Intelligence Audit or a sovereign long-term engineering partner.
            </p>
          </div>

          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium uppercase font-mono text-xs tracking-wider">[LONDON HEADQUARTERS]</strong>
                <span className="text-zinc-400 text-xs font-mono">85 Great Portland St, Marylebone, W1W 7LT</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium uppercase font-mono text-xs tracking-wider">[NEW YORK OFFICE]</strong>
                <span className="text-zinc-400 text-xs font-mono">405 Lexington Ave, Chrysler Building, NY 10174</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white font-medium uppercase font-mono text-xs tracking-wider">[DIRECT COGNITIVE MAILBOX]</strong>
                <a href="mailto:vishnuvardhanburri19@gmail.com?subject=XAVIRA%20Acquisition%20Inquiry" className="text-cyan-400 underline font-bold text-xs hover:text-cyan-300 font-mono transition-colors">
                  vishnuvardhanburri19@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-850 text-xs text-zinc-500 flex items-center gap-2 font-mono">
            <Shield className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Encrypted transmission feed. ISO 27001 SLA-bound protocols.</span>
          </div>
        </div>

        {/* Right column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 p-8 lg:p-10 bg-[#0b0b10]">
          {submitted ? (
            <div className="py-16 text-center space-y-6">
              <div className="w-12 h-12 bg-cyan-600 text-zinc-950 rounded-full flex items-center justify-center mx-auto shadow-md glow-cyan animate-pulse">
                <Check className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-xl font-bold text-white uppercase tracking-wider">[INQUIRY SECURED]</h4>
                <p className="text-sm text-zinc-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you for contacting XAVIRA Technologies. Our Principal Engagement Director will review your platform parameters and contact you at <span className="text-cyan-400 font-bold">{formData.email}</span> within 4 business hours to organize a secure scoping call.
                </p>
              </div>
              <div className="pt-4 text-[10px] font-mono text-zinc-500">
                Sovereign Reference Token: <span className="text-cyan-400 font-bold">XAV-INQ-2026-B81</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-zinc-400">[YOUR FULL NAME]</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                    placeholder="Dr. Alistair Vance"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-zinc-400">[CORPORATE TITLE]</label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                    placeholder="CTO / VP of Engineering"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-zinc-400">[COMPANY NAME]</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                    placeholder="LedgerFlow Inc"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-zinc-400">[CORPORATE EMAIL ADDRESS]</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                    placeholder="leadership@ledgerflow.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-zinc-400">[OPERATIONAL REGION]</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                  >
                    <option value="EMEA">EMEA (London GMT / CET)</option>
                    <option value="Americas">Americas (New York EST / PST)</option>
                    <option value="Asia-Pacific">Asia-Pacific (Singapore SGT / AEST)</option>
                    <option value="Other Global Region">Other Global Region</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase text-zinc-400">[CORPORATE SCALE]</label>
                  <select
                    value={formData.companySize}
                    onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                  >
                    <option value="20-50">20-50 Employees</option>
                    <option value="50-200">50-200 Employees</option>
                    <option value="200-500">200-500 Employees</option>
                    <option value="500+">500+ Employees</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-zinc-400">[PRIMARY SYSTEM VULNERABILITY CONCERNS]</label>
                <select
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded px-3.5 py-2.5 outline-none transition-all font-mono"
                >
                  <option value="High Scalability & Latency Limits">High Scalability & Latency Limits (P99 spikes)</option>
                  <option value="Security Penetration & Auditing Prep">Security Penetration & Auditing Prep (SOC2/HIPAA)</option>
                  <option value="Complex Backend Refactoring & Architecture">Complex Backend Refactoring & Architecture (Rails to Rust/Go)</option>
                  <option value="Cloud Infrastructure Optimization & Terraform">Cloud Infrastructure Optimization & Terraform Setup</option>
                  <option value="AI Pipelines & LLM Ingest Infrastructure">AI Pipelines & LLM Ingest Infrastructure Setup</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase text-zinc-400">[BRIEF ARCHITECTURAL DESCRIPTION]</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-cyan-500 text-white text-sm rounded p-3 outline-none transition-all leading-relaxed font-mono"
                  placeholder="Outline your tech stack, databases, specific server bottlenecks, or current deployment frequency targets..."
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-zinc-950 text-xs font-mono font-bold uppercase tracking-wider rounded transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-sm glow-cyan"
                >
                  Transmit Inquiry <Send className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
