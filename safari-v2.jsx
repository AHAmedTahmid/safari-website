import React, { useState } from 'react';
import {
  Menu, X, Shield, Clock, Search, ChevronRight, CheckCircle2,
  LayoutDashboard, Hotel, Utensils, CreditCard, Users, Zap, Cloud,
  BarChart4, ArrowRight, Server, Play, CircleDollarSign
} from 'lucide-react';

export default function SafariWebsite() {
  const [activeTab, setActiveTab] = useState('pms');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const brandColor = '#6A760C';
  const brandDark = '#535c09';
  const brandLight = '#f2f4e8';

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md"
              style={{ backgroundColor: brandColor }}
            >
              S
            </div>
            <div className="leading-tight">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 block">SAFARI</span>
              <span className="text-[10px] tracking-wider uppercase font-bold" style={{ color: brandColor }}>
                Integrated Solutions
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
            <a href="#suite" className="hover:text-slate-900 transition flex items-center gap-1 group">
              Products
            </a>
            <a href="#usali" className="hover:text-slate-900 transition">USALI Compliance</a>
            <a href="#implementation" className="hover:text-slate-900 transition">Implementation</a>
            <a href="#company" className="hover:text-slate-900 transition">Company</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="text-sm font-semibold text-slate-600 hidden lg:block">Sales: +1 (800) 555-0199</div>
            <a
              href="#demo"
              className="px-5 py-2.5 rounded-lg text-white font-semibold text-sm transition shadow-sm hover:shadow"
              style={{ backgroundColor: brandColor }}
            >
              Request a Demo
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-slate-50 to-white pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left z-10">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-slate-200"
              style={{ backgroundColor: brandLight, color: brandColor }}
            >
              <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: brandColor }}></div>
              Unified Hospitality Enterprise Ecosystem
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Engineered to <br className="hidden lg:block"/>
              <span style={{ color: brandColor }}>Run, Automate & Scale</span> <br className="hidden lg:block"/>
              Your Business.
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Safari delivers market-leading POS, PMS, and CA-verified USALI ERP systems designed to eliminate silos, boost checkout speed, and unlock real-time executive intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a
                href="#demo"
                className="px-8 py-4 rounded-xl text-white font-bold text-base shadow-lg transition flex items-center justify-center gap-2"
                style={{ backgroundColor: brandColor, boxShadow: `0 10px 25px -5px ${brandColor}40` }}
              >
                Schedule a Live Demo <ArrowRight size={18} />
              </a>
              <a
                href="#suite"
                className="px-8 py-4 rounded-xl bg-white text-slate-700 font-bold text-base border border-slate-200 hover:bg-slate-50 transition flex items-center justify-center gap-2 shadow-sm"
              >
                <Play size={18} /> Explore Products
              </a>
            </div>

            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-1.5"><Shield size={16} /> 256-bit Security</div>
              <div className="flex items-center gap-1.5"><Cloud size={16} /> Cloud & Offline Ready</div>
              <div className="flex items-center gap-1.5"><Server size={16} /> 99.99% Uptime</div>
            </div>
          </div>

          {/* Hero Dashboard Composite - Oracle/IDS inspired */}
          <div className="w-full lg:w-1/2 relative lg:-mr-12">
            <div className="relative z-10 bg-white p-2 rounded-2xl shadow-2xl border border-slate-100">
              <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[4/3] flex flex-col text-white">

                {/* Mock Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">Safari Management Console</div>
                </div>

                {/* Mock Content */}
                <div className="flex-1 p-6 relative">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                      <div className="text-slate-400 text-xs mb-1">Total Net Revenue</div>
                      <div className="text-3xl font-bold font-mono">$1,248,500</div>
                      <div className="text-green-400 text-xs mt-2 flex items-center gap-1">↑ +14.2% vs last month</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                      <div className="text-slate-400 text-xs mb-1">PMS Occupancy</div>
                      <div className="text-3xl font-bold font-mono">89.4%</div>
                      <div className="text-green-400 text-xs mt-2 flex items-center gap-1">↑ 124 Rooms active</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-slate-400 pb-2 border-b border-slate-800">
                      <span>Recent Audits / USALI Ledger</span>
                      <span>Status</span>
                    </div>
                    {[
                      { l: 'F&B Outlet Sales Sync', s: 'Complete', c: 'text-green-400' },
                      { l: 'Housekeeping Dispatch', s: 'In Progress', c: 'text-yellow-400' },
                      { l: 'Rooms Revenue Posted', s: 'Complete', c: 'text-green-400' },
                    ].map((row, i) => (
                      <div key={i} className="flex justify-between text-sm items-center">
                        <span className="text-slate-200">{row.l}</span>
                        <span className={`text-xs font-mono ${row.c}`}>{row.s}</span>
                      </div>
                    ))}
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold" style={{ borderColor: brandColor, color: brandColor }}>
                      98%
                    </div>
                    <div>
                      <div className="font-bold text-sm">Guest Satisfaction</div>
                      <div className="text-xs text-slate-500">Live sentiment tracking</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Background decorative blob */}
            <div
              className="absolute -top-10 -right-10 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 pointer-events-none"
              style={{ backgroundColor: brandColor }}
            ></div>
          </div>

        </div>
      </section>

      {/* Brand Logos (Social Proof) */}
      <section className="py-10 border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 opacity-60 grayscale hover:grayscale-0 transition duration-500">
           <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 shrink-0">Trusted Infrastructure</h4>
           <div className="flex items-center justify-between w-full flex-wrap gap-8 font-semibold text-xl text-slate-500 font-serif">
             <span>MARITIME</span>
             <span>Continental</span>
             <span>CROWN HOTELS</span>
             <span>The Grand</span>
             <span>Apex Suites</span>
           </div>
        </div>
      </section>

      {/* Interactive Suite Showcase */}
      <section id="suite" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest" style={{ color: brandColor }}>The Safari Suite</h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">Tailored Systems for Modern Enterprises</p>
            <p className="text-lg text-slate-600">Deploy individual modules or unify your enterprise with our integrated suite.</p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-2 md:p-4">
            <div className="flex flex-col md:flex-row gap-6">

              {/* Sidebar Tabs */}
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                {[
                  { id: 'pms', n: 'Property Management (PMS)', i: Hotel, d: 'Interactive booking grids, guest folios & housekeeping.' },
                  { id: 'pos', n: 'Point of Sale (POS)', i: Utensils, d: 'High-speed F&B billing, KOTs, and offline resilience.' },
                  { id: 'erp', n: 'Enterprise Planning (ERP)', i: LayoutDashboard, d: 'Centralized accounting, procurement & HR management.' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveTab(s.id)}
                    className={`text-left p-5 rounded-xl transition duration-200 border-2 ${
                      activeTab === s.id
                      ? 'bg-white shadow-md'
                      : 'border-transparent hover:bg-slate-100'
                    }`}
                    style={activeTab === s.id ? { borderColor: brandColor } : {}}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${activeTab === s.id ? 'bg-slate-100' : 'bg-slate-200'}`}>
                        <s.i size={20} style={{ color: activeTab === s.id ? brandColor : '#64748b' }} />
                      </div>
                      <h3 className={`font-bold text-lg ${activeTab === s.id ? 'text-slate-900' : 'text-slate-600'}`}>{s.n}</h3>
                    </div>
                    <p className="text-sm text-slate-500 pl-[52px]">{s.d}</p>
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="w-full md:w-2/3 bg-white border border-slate-200 rounded-xl p-8 shadow-sm flex flex-col justify-between">

                {activeTab === 'pms' && (
                  <div className="animate-in fade-in duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Front Desk & Operations</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Safari PMS: Master Your Property</h3>
                        <p className="text-slate-600 leading-relaxed max-w-lg mb-6">
                          Intuitive room reservation tape, drag-and-drop booking modifications, and instant synchronization with OTA channels. Handles check-ins and split billing with unmatched speed.
                        </p>
                      </div>
                      <Hotel size={48} className="text-slate-100 hidden sm:block" />
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                      {['Drag-and-drop reservation tape', 'Express check-in / check-out', 'Direct OTA inventory sync', 'Live housekeeping dispatch', 'Corporate travel desk billing', 'Guest history & preferences'].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={16} style={{ color: brandColor }} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'pos' && (
                  <div className="animate-in fade-in duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Food, Beverage & Retail</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Safari POS: Ultra-Fast Checkouts</h3>
                        <p className="text-slate-600 leading-relaxed max-w-lg mb-6">
                          Built for fine dining, bars, and retail. Ultra-fast billing engine, KOT routing directly to kitchen displays, and an offline-first architecture that survives network outages.
                        </p>
                      </div>
                      <Utensils size={48} className="text-slate-100 hidden sm:block" />
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                      {['Sub-second receipt generation', 'Sub-second KOT routing', 'Offline-first network resilience', 'Automated ingredient depletion', 'Multi-currency handling', 'Total integration with PMS'].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={16} style={{ color: brandColor }} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === 'erp' && (
                  <div className="animate-in fade-in duration-300">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-slate-400">Back Office & HR</div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">Safari ERP: Total Executive Control</h3>
                        <p className="text-slate-600 leading-relaxed max-w-lg mb-6">
                          Large group and resort management made simple. Centralized supply chain workflow, multi-property inventory, and biometric HR scheduling.
                        </p>
                      </div>
                      <LayoutDashboard size={48} className="text-slate-100 hidden sm:block" />
                    </div>

                    <ul className="grid sm:grid-cols-2 gap-4 mb-8">
                      {['Vendor quotation & purchase workflows', 'Store issue & reorder alerts', 'Biometric attendance capture', 'Automated payroll engine', 'Executive KPI dashboards', 'Multi-property consolidation'].map((f, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <CheckCircle2 size={16} style={{ color: brandColor }} /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-slate-100">
                  <a href="#demo" className="text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all" style={{ color: brandColor }}>
                    Request a specialized demo for this module <ArrowRight size={16} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SAFARI / USALI SECTION */}
      <section id="usali" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none"
             style={{ background: `radial-gradient(circle, ${brandColor} 0%, transparent 70%)` }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs font-bold uppercase tracking-widest mb-6 border"
                style={{ backgroundColor: brandDark, color: brandLight, borderColor: brandColor }}
              >
                Financial Integrity
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
                Built to USALI Standards.<br/>Validated by CAs.
              </h2>

              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Most hospitality software treats accounting as an afterthought. Safari is built from the balance sheet up, mapping every transaction natively to the <strong className="text-white">Uniform System of Accounts for the Lodging Industry.</strong>
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 text-white font-bold mb-2">
                    <CircleDollarSign size={20} style={{ color: brandColor }} /> Audit-Ready
                  </div>
                  <p className="text-sm text-slate-400">Pre-mapped balance sheets and P&L by department for instant CA compliance.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-white font-bold mb-2">
                    <Shield size={20} style={{ color: brandColor }} /> Enterprise Security
                  </div>
                  <p className="text-sm text-slate-400">Granular role-based access control and end-to-end data encryption across ledgers.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl relative">
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg rotate-3">
                CA Certified Workflow
              </div>

              <div className="text-sm text-slate-400 font-mono mb-6">Standardized Departmental Ledger</div>

              <div className="space-y-4">
                {[
                  { n: '4000 Rooms Revenue', v: '$45,000.00' },
                  { n: '5000 F&B Revenue', v: '$18,250.00' },
                  { n: '6000 Telecom & Other', v: '$2,100.00' }
                ].map((l,i) => (
                   <div key={i} className="flex justify-between items-center p-3 bg-slate-900 rounded border border-slate-700">
                     <span className="text-slate-300 font-medium">{l.n}</span>
                     <span className="text-white font-mono font-bold">{l.v}</span>
                   </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700 flex justify-between items-center">
                <span className="text-slate-400 text-sm">Real-time Gross Operating Profit</span>
                <span className="text-2xl font-bold font-mono text-green-400">41.2%</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IMPLEMENTATION TIMELINE */}
      <section id="implementation" className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Fast-Track Deployment</h2>
            <p className="text-3xl font-extrabold text-slate-900">Live in 8 Days. Guaranteed.</p>
            <p className="text-slate-600 leading-relaxed">Unlike legacy systems that take months to deploy, our Go-Live framework ensures your property is fully operational with minimal disruption.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-4 relative">
            <div className="hidden md:block absolute top-6 left-0 w-full h-1 bg-slate-200 -z-0" />

            {[
              { d: 'Day 1-2', t: 'Discovery & Scope', p: 'Master Data Audit, Site Evaluation, and Hardware Infrastructure checks.' },
              { d: 'Day 3-5', t: 'Configuration', p: 'System Setup, USALI Chart Mapping, and Hardware Parsing.' },
              { d: 'Day 6-7', t: 'Staff Enablement', p: 'Dedicated training for Front-Desk, Kitchen, and Accounts teams.' },
              { d: 'Day 8+', t: 'Go-Live & Support', p: 'System Launch backed by our 24/7/365 Standby Engineering Desk.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 pt-4 px-2 text-center md:text-left">
                <div
                  className="w-4 h-4 rounded-full mx-auto md:mx-0 mb-6 border-4 border-white shadow ring-2"
                  style={{ backgroundColor: brandColor, ringColor: brandLight }}
                />
                <div className="font-mono text-sm font-bold mb-2" style={{ color: brandColor }}>{step.d}</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{step.t}</h4>
                <p className="text-sm text-slate-600">{step.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO LEAD FORM */}
      <section id="demo" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none"
                 style={{ backgroundImage: `radial-gradient(circle at 100% 100%, ${brandColor} 0%, transparent 60%)` }} />

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">

              <div className="text-white space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Transform Operations</span>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">Ready to see Safari in action?</h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Request a tailored walkthrough. Our technical specialists will demonstrate how Safari solves your specific workflow bottlenecks.
                </p>

                <div className="space-y-4 pt-6 text-sm text-slate-300 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-slate-800"><CheckCircle2 size={18} style={{ color: brandColor }} /></div>
                    Personalized dashboard tour based on your hotel size
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-slate-800"><CheckCircle2 size={18} style={{ color: brandColor }} /></div>
                    Current software migration assessment
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full bg-slate-800"><CheckCircle2 size={18} style={{ color: brandColor }} /></div>
                    Transparent setup and licensing quotation
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl">
                {!formSubmitted ? (
                  <form onSubmit={handleDemoSubmit} className="space-y-5">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Consultation</h3>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Work Name</label>
                      <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all" style={{ focusRingColor: brandColor }} placeholder="John Doe" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Work Email</label>
                        <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all" placeholder="name@hotel.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-600 mb-2">Property Size</label>
                        <select required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:bg-white transition-all">
                          <option>Under 50 Rooms</option>
                          <option>50 - 200 Rooms</option>
                          <option>200+ Rooms</option>
                          <option>Multi-Property / Chain</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg text-white font-bold text-base transition-all mt-4 hover:opacity-90 shadow-lg"
                      style={{ backgroundColor: brandColor }}
                    >
                      Request Live Showcase
                    </button>
                    <p className="text-center text-xs text-slate-500 font-medium">We typically respond within 2 hours during business operations.</p>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: brandLight, color: brandColor }}>
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                    <p className="text-slate-600 max-w-sm">
                      Thank you. Our engineering desk has received your request and will contact you shortly to lock in a time.
                    </p>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-extrabold text-lg text-slate-900">
              <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white text-sm">S</div>
              Safari Solutions
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Enterprise POS, PMS, and ERP software architectures engineered for total operational control.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#suite" className="hover:text-slate-900 transition">Point of Sale</a></li>
              <li><a href="#suite" className="hover:text-slate-900 transition">Property Management</a></li>
              <li><a href="#suite" className="hover:text-slate-900 transition">ERP & Accounting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#company" className="hover:text-slate-900 transition">About Us</a></li>
              <li><a href="#usali" className="hover:text-slate-900 transition">USALI Compliance</a></li>
              <li><a href="#demo" className="hover:text-slate-900 transition">Book a Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>HQ: support@safari.inc</li>
              <li>Sales: +1 (800) 555-0199</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 Safari Integrated Business Solutions. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600 transition">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}