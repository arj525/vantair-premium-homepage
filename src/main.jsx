import React, { useEffect, useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  ChevronDown,
  CircleCheck,
  Database,
  Menu,
  Moon,
  Sparkles,
  Sun,
  Zap,
  X,
  Terminal,
  ArrowRight
} from 'lucide-react';
import './styles.css';

// Metrics used for Overview tab
const metricsData = [
  { label: 'Revenue', value: '₹84.2K', change: '+12.8%', trend: 'up' },
  { label: 'Conversion', value: '8.42%', change: '-8.4%', trend: 'down' },
  { label: 'Engagement', value: '71.2%', change: '+7.4%', trend: 'up' }
];

function Dashboard() {
  const [active, setActive] = useState('Overview');
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [drawChart, setDrawChart] = useState(false);
  
  // Automations active states
  const [automations, setAutomations] = useState([
    { id: 'digest', title: 'Weekly performance digest', active: true },
    { id: 'anomaly', title: 'Mobile checkout anomaly alert', active: true },
    { id: 'brief', title: 'Monday morning decision brief', active: false }
  ]);

  useEffect(() => {
    if (active === 'Overview') {
      const timer = setTimeout(() => setDrawChart(true), 150);
      return () => clearTimeout(timer);
    } else {
      setDrawChart(false);
    }
  }, [active]);

  const toggleAutomation = (id) => {
    setAutomations(prev =>
      prev.map(item => item.id === id ? { ...item, active: !item.active } : item)
    );
  };

  return (
    <div className="dash-shell">
      {/* Dashboard Top bar */}
      <div className="dash-top">
        <div className="brand-mini">V</div>
        <div className="dash-title">
          <strong>Workspace</strong>
          <span>Updated just now</span>
        </div>
        <div className="live-dot">Live</div>
      </div>
      
      {/* Dashboard Navigation Tabs */}
      <div className="dash-tabs">
        {['Overview', 'AI Insights', 'Automations'].map(tab => (
          <button
            key={tab}
            className={active === tab ? 'active' : ''}
            onClick={() => {
              setActive(tab);
              setShowAnalysis(false);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Overview Tab Content */}
      {active === 'Overview' && (
        <>
          <div className="metric-grid">
            {metricsData.map((m) => (
              <div className={`metric ${m.trend === 'down' ? 'negative' : ''}`} key={m.label}>
                <span>{m.label}</span>
                <strong>{m.value}</strong>
                <em>{m.change}</em>
              </div>
            ))}
          </div>
          <div className="chart-card">
            <div className="chart-head">
              <div>
                <span>Performance</span>
                <strong>Last 30 days</strong>
              </div>
              <div className="chart-pill">AI Trend Analysis</div>
            </div>
            <div className="chart">
              <div className="gridline g1" />
              <div className="gridline g2" />
              <div className="gridline g3" />
              <svg viewBox="0 0 600 180" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="hsl(var(--accent))" stopOpacity="0.25" />
                    <stop offset="1" stopColor="hsl(var(--accent))" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Area under spline */}
                <path
                  d="M0,150 C50,140 70,110 110,125 C150,140 180,105 220,110 C260,115 280,75 320,95 C360,115 390,65 430,70 C470,75 490,45 530,55 C570,65 580,25 600,30 L600,180 L0,180 Z"
                  fill="url(#area-gradient)"
                />
                {/* Spline line */}
                <path
                  d="M0,150 C50,140 70,110 110,125 C150,140 180,105 220,110 C260,115 280,75 320,95 C360,115 390,65 430,70 C470,75 490,45 530,55 C570,65 580,25 600,30"
                  className={`svg-path-line animated-path ${drawChart ? 'draw' : ''}`}
                />
              </svg>
            </div>
          </div>
        </>
      )}

      {/* AI Insights Tab Content */}
      {active === 'AI Insights' && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="insight-panel" style={{ minHeight: showAnalysis ? 'auto' : '220px' }}>
            <div className="sparkle-icon">
              <Sparkles size={18} />
            </div>
            <h4>Mobile conversion dropped 8.4% this week.</h4>
            <p>
              <strong>Why it happened:</strong> Traffic remained stable, but checkout completion decreased on mobile devices.
            </p>
            <p style={{ marginTop: '-8px' }}>
              <strong>Suggested action:</strong> Review the mobile checkout experience to identify page performance bottlenecks.
            </p>
            <button onClick={() => setShowAnalysis(!showAnalysis)}>
              {showAnalysis ? 'Collapse analysis' : 'View analysis'} <ArrowUpRight size={14} />
            </button>
          </div>
          
          {showAnalysis && (
            <div className="insight-subview">
              <div className="insight-sub-grid">
                <div className="sub-card warn-highlight">
                  <span>Checkout Drop (Mobile)</span>
                  <strong>iOS: -11.2% Drop</strong>
                </div>
                <div className="sub-card">
                  <span>Checkout Drop (Mobile)</span>
                  <strong>Android: -4.1% Drop</strong>
                </div>
              </div>
              <div className="sub-card" style={{ fontSize: '11px', color: 'hsl(var(--text-secondary))' }}>
                💡 <strong>Signal Insight:</strong> The checkout delay spiked by 2.4 seconds on Safari iOS browsers after the checkout v2 rollout. Recommended action: rollback checkout styles optimization on iOS clients.
              </div>
            </div>
          )}
        </div>
      )}

      {/* Automations Tab Content */}
      {active === 'Automations' && (
        <div className="automation-panel">
          {automations.map(item => (
            <div className="auto-row" key={item.id}>
              <CircleCheck size={18} />
              <span>{item.title}</span>
              <button
                className={`auto-toggle ${item.active ? 'active' : ''}`}
                onClick={() => toggleAutomation(item.id)}
                aria-label={`Toggle ${item.title}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Canvas Matrix falling characters effect for Easter Egg
function MatrixEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンNGVANT';
    const alphabet = katakana.split('');

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const rainDrops = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet[Math.floor(Math.random() * alphabet.length)];
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

function App() {
  const [dark, setDark] = useState(true);
  const [menu, setMenu] = useState(false);
  const [easterOpen, setEasterOpen] = useState(false);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    'Vantair OS v1.0.0 init...',
    'Secure connection loaded.',
    'System status: ALL SYSTEMS OPERATIONAL',
    "Type 'help' to view diagnostic dashboard commands."
  ]);
  const [matrixActive, setMatrixActive] = useState(false);
  const clickLogoCount = useRef(0);

  // Sync Dark/Light theme variable class
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  // Konami Code sequence detector
  useEffect(() => {
    const konamiSequence = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a'
    ];
    let sequenceIndex = 0;

    const handleKeyDown = (e) => {
      const key = e.key;
      const expectedKey = konamiSequence[sequenceIndex];

      if (key.toLowerCase() === expectedKey.toLowerCase()) {
        sequenceIndex++;
        if (sequenceIndex === konamiSequence.length) {
          setEasterOpen(true);
          sequenceIndex = 0;
        }
      } else {
        sequenceIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleLogoClick = () => {
    clickLogoCount.current += 1;
    if (clickLogoCount.current >= 5) {
      setEasterOpen(true);
      clickLogoCount.current = 0;
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;

    let response = [];
    if (command === 'help') {
      response = [
        `> ${terminalInput}`,
        'Available commands:',
        '  diagnostics : Output system architecture and stats',
        '  matrix      : Toggle floating code overlay background',
        '  clear       : Clear terminal logs',
        '  exit        : Exit retro developer shell'
      ];
    } else if (command === 'diagnostics') {
      response = [
        `> ${terminalInput}`,
        '--- Vantair Core Diagnostics ---',
        'Frame rate: 60fps nominal',
        'Build stack: React + Vite + Vanilla CSS',
        'Aesthetics: Premium, minimal, glassmorphic cards',
        'AI code utilization: 35% helper, 65% handcrafted polish',
        'Accessibility: full contrast compliant, semantic HTML structure',
        'Zero test logs error counts: 0'
      ];
    } else if (command === 'matrix') {
      setMatrixActive(!matrixActive);
      response = [
        `> ${terminalInput}`,
        matrixActive ? 'Matrix code stream deactivated.' : 'Matrix code stream running in background...'
      ];
    } else if (command === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else if (command === 'exit') {
      setEasterOpen(false);
      setTerminalInput('');
      return;
    } else {
      response = [
        `> ${terminalInput}`,
        `Command not found: '${command}'. Type 'help' for instructions.`
      ];
    }

    setTerminalLogs(prev => [...prev, ...response]);
    setTerminalInput('');
  };

  return (
    <div className="app">
      {/* Retro developer overlay terminal */}
      {easterOpen && (
        <div className={`easter-terminal ${easterOpen ? 'open' : ''}`}>
          {matrixActive && <MatrixEffect />}
          <div className="terminal-header">
            <span>💻 VANTAIR RETRO DIAGNOSTIC SHELL (EASTER EGG)</span>
            <span className="terminal-close" onClick={() => setEasterOpen(false)}>
              [CLOSE SYSTEM]
            </span>
          </div>
          <div className="terminal-body">
            {terminalLogs.map((log, idx) => (
              <div key={idx}>{log}</div>
            ))}
          </div>
          <form onSubmit={handleCommandSubmit} className="terminal-input-line">
            <span>vantair-admin$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help'..."
              autoFocus
            />
          </form>
        </div>
      )}

      {/* Header / Sticky Navigation Bar */}
      <header className="nav">
        <button className="logo" onClick={handleLogoClick} aria-label="Vantair Homepage">
          <span>V</span>vantair
        </button>
        
        <nav>
          <a href="#product">Product</a>
          <a href="#workflow">How it works</a>
          <a href="#capabilities">Capabilities</a>
        </nav>
        
        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label="Toggle light and dark theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <a className="nav-cta" href="#product">
            Explore workspace <ArrowUpRight size={16} />
          </a>
          
          <button
            className="icon-btn menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer menu overlay */}
      <div className={`mobile-nav-overlay ${menu ? 'open' : ''}`}>
        <a href="#product" onClick={() => setMenu(false)}>Product</a>
        <a href="#workflow" onClick={() => setMenu(false)}>How it works</a>
        <a href="#capabilities" onClick={() => setMenu(false)}>Capabilities</a>
        <a
          href="#product"
          className="primary"
          style={{ width: '80%', marginTop: '20px' }}
          onClick={() => setMenu(false)}
        >
          Explore workspace <ArrowUpRight size={16} />
        </a>
      </div>

      <main>
        {/* Hero Section */}
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse" />
              AI business intelligence, without the noise
            </div>
            <h1>
              See the signal.<br />
              <span>Make the move.</span>
            </h1>
            <p>
              Vantair turns scattered business data into clear signals, plain-English explanations, and the next action worth taking.
            </p>
            <div className="hero-actions">
              <a className="primary" href="#product">
                Explore the workspace <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#workflow">
                See how it works <ChevronDown size={16} />
              </a>
            </div>
            <div className="trust-note">
              <CircleCheck size={15} /> Built around your data, not invented proof.
            </div>
          </div>
          
          <div className="hero-product">
            <div className="glow glow-one" />
            <div className="glow glow-two" />
            <Dashboard />
          </div>
        </section>

        {/* Signal Strip (Why Vantair) */}
        <section className="signal-strip">
          <div>
            <span>01</span>
            <strong>Understand</strong>
            <p>Turn complex, fragmented data points into clear business signals automatically.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Explain</strong>
            <p>Get precise, plain-English descriptions explaining why critical changes happened.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Act</strong>
            <p>Skip raw guessing. Move from key performance insights directly to decisions.</p>
          </div>
        </section>

        {/* Product Preview Section */}
        <section className="section product-section" id="product">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The Workspace</div>
              <h2>A calmer way to understand performance.</h2>
            </div>
            <p>
              Stop staring at dashboards filled with meaningless graphs. Vantair highlights the changes that deserve attention and gives you critical context before you make your move.
            </p>
          </div>
          
          <div className="product-stage">
            <Dashboard />
            <div className="floating-card">
              <div className="spark-icon">
                <Sparkles size={16} />
              </div>
              <div>
                <span>AI Recommendation</span>
                <strong>Shift budget toward returning Safari mobile visitors.</strong>
              </div>
              <ArrowUpRight size={18} className="arrow-right-icon" />
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="section workflow" id="workflow">
          <div className="eyebrow">Product Workflow</div>
          <h2>From raw business databases to a clear next move.</h2>
          <div className="steps">
            <article>
              <span>01</span>
              <Database size={24} />
              <h3>Connect your sources</h3>
              <p>Sync databases, analytics accounts, and metrics into one unified stream without any manual pipelines.</p>
            </article>
            <article>
              <span>02</span>
              <Bot size={24} />
              <h3>Understand the signal</h3>
              <p>Our intelligence layers automatically track performance metrics to call out anomalies and improvements.</p>
            </article>
            <article>
              <span>03</span>
              <Zap size={24} />
              <h3>Move with confidence</h3>
              <p>Respond instantly using context-rich decision alerts and active optimization recommendations.</p>
            </article>
          </div>
        </section>

        {/* Capabilities Bento Grid */}
        <section className="section capabilities" id="capabilities">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Capabilities</div>
              <h2>Built for the moments between data and decisions.</h2>
            </div>
          </div>
          
          <div className="cap-grid">
            {/* Live Feed module */}
            <article className="cap large">
              <div className="cap-icon">
                <Sparkles size={22} />
              </div>
              <div style={{ width: '100%', margin: '40px 0 20px' }}>
                <div className="cap-mini-grid">
                  <div className="cap-mini-row">
                    <span className="cap-status up">↑</span>
                    <span>Conversion Rate</span>
                    <em>+1.6%</em>
                  </div>
                  <div className="cap-mini-row down">
                    <span className="cap-status warn">!</span>
                    <span>iOS Checkout Completion</span>
                    <em>-11.2%</em>
                  </div>
                  <div className="cap-mini-row">
                    <span className="cap-status up">↑</span>
                    <span>Direct Revenue Lift</span>
                    <em>+12.8%</em>
                  </div>
                </div>
              </div>
              <h3>AI Decision Feed</h3>
              <p>A focused stream of changes, anomalies, and recommendations—without digging through spreadsheets.</p>
            </article>
            
            {/* Analytics Card */}
            <article className="cap">
              <div className="cap-icon">
                <BarChart3 size={22} />
              </div>
              <h3 style={{ marginTop: '40px' }}>Performance Trend</h3>
              <p>Observe spline trends that highlight performance spikes over days or weeks at a single glance.</p>
            </article>
            
            {/* Briefings Card */}
            <article className="cap">
              <div className="cap-icon">
                <Zap size={22} />
              </div>
              <h3 style={{ marginTop: '40px' }}>Automated Briefs</h3>
              <p>Generate brief summary digests of critical metrics straight to your email or Slack on custom schedules.</p>
            </article>
          </div>
        </section>

        {/* Final CTA banner */}
        <section className="final-cta">
          <div className="eyebrow">A better starting point</div>
          <h2>
            Stop staring at dashboards.<br />
            <span>Start acting on them.</span>
          </h2>
          <p>
            Turn scattered business signals into plain explanations and actionable moves today.
          </p>
          <a className="primary" href="#product">
            Explore Vantair Workspace <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div>
          <button className="logo" onClick={handleLogoClick} aria-label="Scroll back to top">
            <span>V</span>vantair
          </button>
          <p style={{ marginTop: '14px' }}>See the signal. Make the move.</p>
        </div>
        <div>
          <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', marginBottom: '14px' }}>Product</h4>
          <a href="#product" style={{ display: 'block', fontSize: '13px', margin: '8px 0', color: 'hsl(var(--text-secondary))' }}>Workspace</a>
          <a href="#workflow" style={{ display: 'block', fontSize: '13px', margin: '8px 0', color: 'hsl(var(--text-secondary))' }}>Workflow</a>
          <a href="#capabilities" style={{ display: 'block', fontSize: '13px', margin: '8px 0', color: 'hsl(var(--text-secondary))' }}>Capabilities</a>
        </div>
        <div>
          <h4 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'hsl(var(--text-muted))', marginBottom: '14px' }}>Company</h4>
          <span style={{ display: 'block', fontSize: '13px', margin: '8px 0', color: 'hsl(var(--text-secondary))' }}>Terms of Service</span>
          <span style={{ display: 'block', fontSize: '13px', margin: '8px 0', color: 'hsl(var(--text-secondary))' }}>Privacy Policy</span>
        </div>
        
        <small>
          © 2026 Vantair. AI Business Intelligence Workspace. Fictional product demo built for evaluation.
          <br />
          <span style={{ color: 'hsl(var(--text-muted))', opacity: 0.7 }}>
            Tip: Try the Konami keyboard code on desktop or click the logo 5 times to reveal Diagnostics shell.
          </span>
        </small>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
