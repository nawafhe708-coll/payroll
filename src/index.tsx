import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './' }))

// ─── HTML Layout ────────────────────────────────────────────────────────────
const layout = (title: string, content: string, activePage: string = '') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title} – QU Payroll Services Portal</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --qu-maroon: #8B1A2F;
      --qu-maroon-dark: #6B1223;
      --qu-maroon-light: #A52840;
      --qu-gold: #C4922A;
      --qu-gold-light: #DBA93C;
      --qu-gray: #F5F5F5;
      --qu-text: #2C2C2C;
    }
    * { scroll-behavior: smooth; }
    body { font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background: #F7F8FA; color: var(--qu-text); }
    
    /* Sidebar */
    .sidebar { background: linear-gradient(180deg, var(--qu-maroon-dark) 0%, var(--qu-maroon) 100%); }
    .sidebar-link { transition: all 0.2s ease; border-left: 3px solid transparent; }
    .sidebar-link:hover, .sidebar-link.active { background: rgba(255,255,255,0.12); border-left-color: var(--qu-gold); color: white; }
    .sidebar-link.active { background: rgba(255,255,255,0.18); }
    
    /* Cards */
    .card { background: white; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.2s, transform 0.2s; }
    .card:hover { box-shadow: 0 8px 24px rgba(139,26,47,0.12); transform: translateY(-2px); }
    
    /* Buttons */
    .btn-primary { background: linear-gradient(135deg, var(--qu-maroon), var(--qu-maroon-light)); color: white; transition: all 0.2s; }
    .btn-primary:hover { background: linear-gradient(135deg, var(--qu-maroon-dark), var(--qu-maroon)); box-shadow: 0 4px 12px rgba(139,26,47,0.35); transform: translateY(-1px); }
    .btn-gold { background: linear-gradient(135deg, var(--qu-gold), var(--qu-gold-light)); color: white; transition: all 0.2s; }
    .btn-gold:hover { box-shadow: 0 4px 12px rgba(196,146,42,0.35); transform: translateY(-1px); }
    .btn-outline { border: 2px solid var(--qu-maroon); color: var(--qu-maroon); transition: all 0.2s; }
    .btn-outline:hover { background: var(--qu-maroon); color: white; }

    /* Header */
    .topbar { background: linear-gradient(90deg, var(--qu-maroon-dark) 0%, var(--qu-maroon) 60%, var(--qu-maroon-light) 100%); }

    /* Search */
    .search-input:focus { box-shadow: 0 0 0 3px rgba(139,26,47,0.2); }

    /* Notification badge */
    .notif-badge { background: var(--qu-gold); }

    /* Breadcrumb */
    .breadcrumb-item + .breadcrumb-item::before { content: "/"; color: #9CA3AF; margin: 0 6px; }

    /* FAQ accordion */
    .faq-content { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
    .faq-content.open { max-height: 500px; }
    .faq-icon { transition: transform 0.3s ease; }
    .faq-item.open .faq-icon { transform: rotate(180deg); }

    /* Step line */
    .step-line::before { content: ''; position: absolute; left: 19px; top: 40px; bottom: -16px; width: 2px; background: linear-gradient(to bottom, #D1D5DB, transparent); }

    /* Announcement ticker */
    .ticker-wrap { overflow: hidden; }
    .ticker { animation: ticker 30s linear infinite; white-space: nowrap; }
    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }

    /* Mobile overlay */
    .sidebar-overlay { display: none; }
    @media (max-width: 768px) {
      .sidebar-desktop { transform: translateX(-100%); transition: transform 0.3s; position: fixed; z-index: 50; height: 100vh; }
      .sidebar-desktop.open { transform: translateX(0); }
      .sidebar-overlay.active { display: block; position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 40; }
      .main-content { margin-left: 0 !important; }
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #F1F1F1; }
    ::-webkit-scrollbar-thumb { background: #C4B5C0; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--qu-maroon); }

    /* Page transition */
    .page-content { animation: fadeIn 0.3s ease; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }

    /* Status badges */
    .badge-green { background: #D1FAE5; color: #065F46; }
    .badge-blue { background: #DBEAFE; color: #1E40AF; }
    .badge-amber { background: #FEF3C7; color: #92400E; }
    .badge-red { background: #FEE2E2; color: #991B1B; }

    /* Form card hover */
    .form-card { border-left: 4px solid var(--qu-gold); }

    /* Contact card */
    .contact-card { border-top: 3px solid var(--qu-maroon); }

    /* Print */
    @media print { .sidebar-desktop, .topbar { display: none; } .main-content { margin: 0 !important; } }
  </style>
</head>
<body>

<!-- Mobile Overlay -->
<div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<!-- Sidebar -->
<aside class="sidebar sidebar-desktop w-64 fixed top-0 left-0 h-full flex flex-col z-50 shadow-2xl" id="sidebar">
  <!-- Logo -->
  <div class="px-6 py-5 border-b border-white/10">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
        <i class="fas fa-university text-white text-lg"></i>
      </div>
      <div>
        <p class="text-white font-bold text-sm leading-tight">Qatar University</p>
        <p class="text-white/60 text-xs">Payroll Department</p>
      </div>
    </div>
  </div>

  <!-- Nav -->
  <nav class="flex-1 px-3 py-4 overflow-y-auto">
    <p class="text-white/40 text-xs uppercase tracking-widest px-3 mb-2 font-semibold">Main Menu</p>

    <a href="/" class="sidebar-link ${activePage === 'home' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1">
      <i class="fas fa-home w-5 text-center"></i> <span>Dashboard</span>
    </a>
    <a href="/procedures" class="sidebar-link ${activePage === 'procedures' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1">
      <i class="fas fa-list-check w-5 text-center"></i> <span>Procedures</span>
    </a>
    <a href="/forms" class="sidebar-link ${activePage === 'forms' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1">
      <i class="fas fa-file-alt w-5 text-center"></i> <span>Forms & Documents</span>
    </a>
    <a href="/faqs" class="sidebar-link ${activePage === 'faqs' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1">
      <i class="fas fa-circle-question w-5 text-center"></i> <span>FAQs</span>
    </a>
    <a href="/contact" class="sidebar-link ${activePage === 'contact' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1">
      <i class="fas fa-envelope w-5 text-center"></i> <span>Contact Us</span>
    </a>

    <div class="border-t border-white/10 mt-4 pt-4">
      <p class="text-white/40 text-xs uppercase tracking-widest px-3 mb-2 font-semibold">Employee</p>
      <a href="/login" class="sidebar-link ${activePage === 'login' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1">
        <i class="fas fa-user-circle w-5 text-center"></i> <span>Employee Login</span>
      </a>
    </div>
  </nav>

  <!-- Footer -->
  <div class="px-5 py-4 border-t border-white/10">
    <p class="text-white/40 text-xs text-center">© 2025 Qatar University</p>
    <p class="text-white/30 text-xs text-center">Human Resources Division</p>
  </div>
</aside>

<!-- Main Wrapper -->
<div class="main-content ml-0 md:ml-64 flex flex-col min-h-screen">

  <!-- Top Bar -->
  <header class="topbar sticky top-0 z-30 flex items-center gap-4 px-6 py-3 shadow-md">
    <!-- Mobile menu button -->
    <button onclick="toggleSidebar()" class="md:hidden text-white/80 hover:text-white p-1">
      <i class="fas fa-bars text-lg"></i>
    </button>

    <!-- Breadcrumbs -->
    <div class="hidden md:flex items-center text-white/70 text-sm breadcrumb">
      ${activePage !== 'home' ? `
      <a href="/" class="breadcrumb-item text-white/60 hover:text-white">Home</a>
      <span class="breadcrumb-item text-white/90 capitalize font-medium">${activePage.charAt(0).toUpperCase() + activePage.slice(1)}</span>
      ` : `<span class="text-white/90 font-medium">Payroll Services Portal</span>`}
    </div>

    <!-- Spacer -->
    <div class="flex-1"></div>

    <!-- Search Bar -->
    <div class="relative hidden sm:block">
      <input
        type="text"
        id="globalSearch"
        placeholder="Search procedures, forms, FAQs..."
        onkeyup="globalSearchFn(event)"
        class="search-input w-64 lg:w-80 bg-white/15 text-white placeholder-white/50 border border-white/20 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:bg-white/20 transition"
      />
      <i class="fas fa-search absolute right-3 top-2.5 text-white/50 text-sm"></i>
      <div id="searchDropdown" class="hidden absolute top-9 right-0 w-full bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-100"></div>
    </div>

    <!-- Notifications -->
    <div class="relative">
      <button onclick="toggleNotif()" class="relative text-white/80 hover:text-white p-2 transition">
        <i class="fas fa-bell text-lg"></i>
        <span class="notif-badge absolute top-1 right-1 w-2 h-2 rounded-full text-xs"></span>
      </button>
      <div id="notifPanel" class="hidden absolute right-0 top-10 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
        <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-semibold text-gray-800 text-sm">Announcements</h3>
          <span class="text-xs text-white px-2 py-0.5 rounded-full" style="background:var(--qu-maroon)">3 New</span>
        </div>
        <div class="divide-y divide-gray-50 max-h-72 overflow-y-auto">
          <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <p class="text-sm font-medium text-gray-800">April Salary Processing</p>
            <p class="text-xs text-gray-500 mt-0.5">Salary will be processed on April 28, 2025</p>
            <p class="text-xs text-gray-400 mt-1"><i class="fas fa-clock mr-1"></i>2 hours ago</p>
          </div>
          <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <p class="text-sm font-medium text-gray-800">New Overtime Policy</p>
            <p class="text-xs text-gray-500 mt-0.5">Updated calculation effective May 1, 2025</p>
            <p class="text-xs text-gray-400 mt-1"><i class="fas fa-clock mr-1"></i>1 day ago</p>
          </div>
          <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <p class="text-sm font-medium text-gray-800">Housing Allowance Form Updated</p>
            <p class="text-xs text-gray-500 mt-0.5">New form version available for download</p>
            <p class="text-xs text-gray-400 mt-1"><i class="fas fa-clock mr-1"></i>3 days ago</p>
          </div>
        </div>
        <div class="px-4 py-2 border-t border-gray-100 text-center">
          <a href="#" class="text-xs font-medium" style="color:var(--qu-maroon)">View All Announcements</a>
        </div>
      </div>
    </div>

    <!-- User Avatar -->
    <div class="flex items-center gap-2 cursor-pointer group">
      <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        <i class="fas fa-user text-white text-sm"></i>
      </div>
      <span class="hidden md:block text-white/80 text-sm group-hover:text-white transition">Staff Portal</span>
    </div>
  </header>

  <!-- Announcement Ticker -->
  <div class="py-1.5 px-6" style="background:var(--qu-gold)">
    <div class="ticker-wrap flex items-center gap-3">
      <span class="text-white font-semibold text-xs uppercase tracking-wide whitespace-nowrap">
        <i class="fas fa-bullhorn mr-1.5"></i> Latest:
      </span>
      <div class="ticker text-white text-xs">
        &nbsp;&nbsp;&nbsp;&nbsp; April 2025 salaries will be credited on 28 April 2025 &nbsp;|&nbsp;
        New overtime calculation policy effective from 1 May 2025 &nbsp;|&nbsp;
        Eid Al-Fitr advance payment requests deadline: 10 April 2025 &nbsp;|&nbsp;
        Housing allowance form has been updated – please download the latest version &nbsp;|&nbsp;
        Payroll office will be closed on 18 April for National Day &nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  </div>

  <!-- Page Content -->
  <main class="flex-1 p-6">
    <div class="page-content">
      ${content}
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-white border-t border-gray-100 px-6 py-4">
    <div class="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500">
      <div class="flex items-center gap-2">
        <i class="fas fa-university" style="color:var(--qu-maroon)"></i>
        <span>Qatar University – Human Resources & Payroll Department</span>
      </div>
      <div class="flex items-center gap-4">
        <span>📍 Main Campus, Doha, Qatar</span>
        <span>📞 +974 4403 4000</span>
        <span>✉️ payroll@qu.edu.qa</span>
      </div>
    </div>
  </footer>
</div>

<script>
  // Sidebar toggle (mobile)
  function toggleSidebar() {
    const sb = document.getElementById('sidebar');
    const ov = document.getElementById('sidebarOverlay');
    sb.classList.toggle('open');
    ov.classList.toggle('active');
  }

  // Notification panel
  function toggleNotif() {
    const p = document.getElementById('notifPanel');
    p.classList.toggle('hidden');
  }
  document.addEventListener('click', (e) => {
    const p = document.getElementById('notifPanel');
    if (!e.target.closest('#notifPanel') && !e.target.closest('[onclick="toggleNotif()"]')) {
      p?.classList.add('hidden');
    }
    const d = document.getElementById('searchDropdown');
    if (!e.target.closest('#globalSearch') && !e.target.closest('#searchDropdown')) {
      d?.classList.add('hidden');
    }
  });

  // Global search data
  const searchData = [
    { title: 'Allowance Procedure', desc: 'Step-by-step guide for allowance requests', url: '/procedures', icon: 'fa-list-check' },
    { title: 'Salary Adjustment', desc: 'How to request a salary adjustment', url: '/procedures', icon: 'fa-list-check' },
    { title: 'Housing Allowance Form', desc: 'Download the housing allowance request form', url: '/forms', icon: 'fa-file-alt' },
    { title: 'Salary Payment Dates', desc: 'FAQ about salary payment schedule', url: '/faqs', icon: 'fa-circle-question' },
    { title: 'Overtime Calculation', desc: 'FAQ about overtime pay calculation', url: '/faqs', icon: 'fa-circle-question' },
    { title: 'Payslip Access', desc: 'How to access your monthly payslip', url: '/faqs', icon: 'fa-circle-question' },
    { title: 'Payroll Inquiries Email', desc: 'Contact payroll team by email', url: '/contact', icon: 'fa-envelope' },
    { title: 'Deductions Request Form', desc: 'Form for deduction adjustments', url: '/forms', icon: 'fa-file-alt' },
    { title: 'Employee Data Update', desc: 'Procedure for updating employee records', url: '/procedures', icon: 'fa-list-check' },
    { title: 'Technical Support', desc: 'Contact IT/technical support for payroll system', url: '/contact', icon: 'fa-envelope' },
  ];

  function globalSearchFn(e) {
    const q = e.target.value.toLowerCase().trim();
    const dd = document.getElementById('searchDropdown');
    if (!q) { dd.classList.add('hidden'); return; }
    const res = searchData.filter(d => d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q));
    if (res.length === 0) {
      dd.innerHTML = '<div class="px-4 py-3 text-sm text-gray-500">No results found.</div>';
    } else {
      dd.innerHTML = res.map(r => \`
        <a href="\${r.url}" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style="background:var(--qu-maroon)">
            <i class="fas \${r.icon}"></i>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-800">\${r.title}</p>
            <p class="text-xs text-gray-500">\${r.desc}</p>
          </div>
        </a>
      \`).join('');
    }
    dd.classList.remove('hidden');
  }

  // FAQ accordion
  function toggleFaq(el) {
    const item = el.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-content').classList.remove('open');
    });
    if (!isOpen) {
      item.classList.add('open');
      content.classList.add('open');
    }
  }
</script>
</body>
</html>`

// ─── Homepage ────────────────────────────────────────────────────────────────
app.get('/', (c) => {
  const content = `
  <!-- Page Header -->
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Payroll Services Portal</h1>
    <p class="text-gray-500 mt-1 text-sm">Welcome to the official Qatar University Payroll Department digital portal.</p>
  </div>

  <!-- Stats Row -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    <div class="card p-5 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.1)">
        <i class="fas fa-users text-xl" style="color:var(--qu-maroon)"></i>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-800">2,400+</p>
        <p class="text-xs text-gray-500">Registered Employees</p>
      </div>
    </div>
    <div class="card p-5 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(196,146,42,0.1)">
        <i class="fas fa-file-check text-xl" style="color:var(--qu-gold)"></i>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-800">18</p>
        <p class="text-xs text-gray-500">Available Forms</p>
      </div>
    </div>
    <div class="card p-5 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(16,185,129,0.1)">
        <i class="fas fa-calendar-check text-xl text-emerald-500"></i>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-800">28 Apr</p>
        <p class="text-xs text-gray-500">Next Salary Date</p>
      </div>
    </div>
    <div class="card p-5 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(59,130,246,0.1)">
        <i class="fas fa-headset text-xl text-blue-500"></i>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-800">4 hrs</p>
        <p class="text-xs text-gray-500">Avg. Response Time</p>
      </div>
    </div>
  </div>

  <!-- About Banner -->
  <div class="card p-6 mb-6 relative overflow-hidden">
    <div class="absolute right-0 top-0 bottom-0 w-64 opacity-5 flex items-center justify-center">
      <i class="fas fa-university text-9xl" style="color:var(--qu-maroon)"></i>
    </div>
    <div class="relative z-10 max-w-2xl">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-8 h-0.5 rounded" style="background:var(--qu-gold)"></span>
        <span class="text-xs font-semibold uppercase tracking-widest" style="color:var(--qu-gold)">Welcome</span>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-2">Qatar University – Human Resources & Payroll Department</h2>
      <p class="text-gray-600 text-sm leading-relaxed">
        This portal provides Qatar University staff and employees with streamlined access to all payroll-related
        services, including procedures, downloadable forms, frequently asked questions, and direct contact channels.
        Our goal is to ensure transparent, efficient, and accessible payroll management for all university personnel.
      </p>
      <div class="flex flex-wrap gap-3 mt-4">
        <a href="/procedures" class="btn-primary px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <i class="fas fa-rocket"></i> Get Started
        </a>
        <a href="/contact" class="btn-outline px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <i class="fas fa-headset"></i> Contact Support
        </a>
      </div>
    </div>
  </div>

  <!-- Quick Access Sections -->
  <h2 class="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
    <i class="fas fa-th-large text-sm" style="color:var(--qu-maroon)"></i> Quick Access
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
    <a href="/procedures" class="card p-6 text-center group cursor-pointer">
      <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style="background:linear-gradient(135deg,var(--qu-maroon),var(--qu-maroon-light))">
        <i class="fas fa-list-check text-2xl text-white"></i>
      </div>
      <h3 class="font-bold text-gray-800 mb-1">Procedures</h3>
      <p class="text-xs text-gray-500 leading-relaxed">Step-by-step guides for payroll requests, allowances, and deductions</p>
      <span class="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full badge-red">5 Guides</span>
    </a>

    <a href="/forms" class="card p-6 text-center group cursor-pointer">
      <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style="background:linear-gradient(135deg,var(--qu-gold),var(--qu-gold-light))">
        <i class="fas fa-file-alt text-2xl text-white"></i>
      </div>
      <h3 class="font-bold text-gray-800 mb-1">Forms & Documents</h3>
      <p class="text-xs text-gray-500 leading-relaxed">Download official payroll forms, applications, and required documents</p>
      <span class="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full badge-amber">18 Forms</span>
    </a>

    <a href="/faqs" class="card p-6 text-center group cursor-pointer">
      <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style="background:linear-gradient(135deg,#3B82F6,#60A5FA)">
        <i class="fas fa-circle-question text-2xl text-white"></i>
      </div>
      <h3 class="font-bold text-gray-800 mb-1">FAQs</h3>
      <p class="text-xs text-gray-500 leading-relaxed">Answers to the most common payroll and salary-related questions</p>
      <span class="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full badge-blue">15 Questions</span>
    </a>

    <a href="/contact" class="card p-6 text-center group cursor-pointer">
      <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style="background:linear-gradient(135deg,#10B981,#34D399)">
        <i class="fas fa-envelope text-2xl text-white"></i>
      </div>
      <h3 class="font-bold text-gray-800 mb-1">Contact Us</h3>
      <p class="text-xs text-gray-500 leading-relaxed">Reach the right team for your payroll inquiries and support needs</p>
      <span class="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full badge-green">6 Departments</span>
    </a>
  </div>

  <!-- Two Column Row -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
    <!-- Recent Announcements -->
    <div class="card p-5 lg:col-span-2">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-800 flex items-center gap-2">
          <i class="fas fa-bullhorn text-sm" style="color:var(--qu-maroon)"></i> Recent Announcements
        </h3>
        <span class="text-xs" style="color:var(--qu-maroon)">View All →</span>
      </div>
      <div class="space-y-3">
        ${[
          { title: 'April 2025 Salary Processing Date', date: 'April 15, 2025', badge: 'badge-green', label: 'Salary', icon: 'fa-money-bill-wave' },
          { title: 'Eid Al-Fitr Advance Payment – Request Deadline', date: 'April 10, 2025', badge: 'badge-amber', label: 'Advance', icon: 'fa-star-and-crescent' },
          { title: 'Updated Housing Allowance Form (Rev. 3)', date: 'April 8, 2025', badge: 'badge-blue', label: 'Forms', icon: 'fa-file-alt' },
          { title: 'New Overtime Calculation Policy – Effective May 2025', date: 'April 5, 2025', badge: 'badge-red', label: 'Policy', icon: 'fa-file-contract' },
        ].map(a => `
        <div class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
            <i class="fas ${a.icon} text-sm" style="color:var(--qu-maroon)"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-800 truncate">${a.title}</p>
            <p class="text-xs text-gray-400 mt-0.5"><i class="fas fa-calendar mr-1"></i>${a.date}</p>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${a.badge} whitespace-nowrap">${a.label}</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- Quick Links & Calendar -->
    <div class="flex flex-col gap-5">
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-3">
          <i class="fas fa-calendar-alt text-sm" style="color:var(--qu-maroon)"></i> Payroll Calendar – Q2 2025
        </h3>
        <div class="space-y-2 text-sm">
          ${[
            { month: 'April', date: '28 Apr', done: false },
            { month: 'May', date: '28 May', done: false },
            { month: 'June', date: '26 Jun', done: false },
          ].map(m => `
          <div class="flex items-center justify-between py-2 border-b border-gray-50">
            <span class="text-gray-600 font-medium">${m.month} 2025</span>
            <span class="text-xs font-semibold px-3 py-1 rounded-full ${m.done ? 'badge-green' : 'badge-blue'}">${m.date}</span>
          </div>`).join('')}
        </div>
      </div>

      <div class="card p-5">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-3">
          <i class="fas fa-phone text-sm" style="color:var(--qu-maroon)"></i> Emergency Contact
        </h3>
        <div class="space-y-2 text-sm text-gray-600">
          <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
            <i class="fas fa-envelope text-xs" style="color:var(--qu-maroon)"></i>
            <span class="text-xs">payroll@qu.edu.qa</span>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
            <i class="fas fa-phone text-xs" style="color:var(--qu-maroon)"></i>
            <span class="text-xs">Ext. 4100 / 4101</span>
          </div>
          <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
            <i class="fas fa-clock text-xs" style="color:var(--qu-maroon)"></i>
            <span class="text-xs">Sun–Thu: 7:30 AM – 3:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
  return c.html(layout('Home', content, 'home'))
})

// ─── Procedures ──────────────────────────────────────────────────────────────
app.get('/procedures', (c) => {
  const procedures = [
    {
      id: 'allowances',
      icon: 'fa-hand-holding-dollar',
      color: 'var(--qu-maroon)',
      bg: 'rgba(139,26,47,0.08)',
      title: 'Allowances Request',
      badge: 'badge-red',
      badgeLabel: 'Allowances',
      desc: 'Follow the steps below to submit a new allowance request (housing, transportation, education, etc.)',
      steps: [
        { title: 'Download the Request Form', body: 'Visit the <a href="/forms" class="underline" style="color:var(--qu-maroon)">Forms & Documents</a> section and download the appropriate allowance request form.' },
        { title: 'Complete the Form', body: 'Fill in all required fields accurately. Ensure your employee ID, department, and allowance type are correctly stated.' },
        { title: 'Attach Supporting Documents', body: 'Attach all required supporting documents (e.g., lease agreement for housing allowance, school enrollment letter for education allowance).' },
        { title: 'Submit to Line Manager', body: 'Submit the completed form to your direct line manager for approval and signature.' },
        { title: 'Forward to HR Department', body: 'After manager approval, the form must be forwarded to the HR Department (Building A, Room 101) or emailed to allowances@qu.edu.qa.' },
        { title: 'Processing & Notification', body: 'Processing takes 5–7 working days. You will receive a confirmation email once the allowance is activated.' },
      ]
    },
    {
      id: 'deductions',
      icon: 'fa-circle-minus',
      color: 'var(--qu-gold)',
      bg: 'rgba(196,146,42,0.08)',
      title: 'Deductions Inquiry & Dispute',
      badge: 'badge-amber',
      badgeLabel: 'Deductions',
      desc: 'If you believe there is an incorrect deduction on your payslip, follow these steps to raise a dispute.',
      steps: [
        { title: 'Review Your Payslip', body: 'Log in to the Employee Self-Service portal and download your latest payslip. Identify the incorrect or unexpected deduction.' },
        { title: 'Gather Documentation', body: 'Collect any relevant documents that support your claim (e.g., leave approvals, loan repayment schedules, or prior correspondence).' },
        { title: 'Complete the Deduction Dispute Form', body: 'Download and complete the Deduction Dispute Form available in the <a href="/forms" class="underline" style="color:var(--qu-maroon)">Forms</a> section.' },
        { title: 'Submit to Payroll Team', body: 'Send the completed form and supporting documents to deductions@qu.edu.qa with the subject line: "Deduction Dispute – [Employee ID]".' },
        { title: 'Review & Response', body: 'The Payroll team will review and respond within 3–5 working days with the outcome and any corrections applied.' },
      ]
    },
    {
      id: 'salary-adjustment',
      icon: 'fa-sliders',
      color: '#3B82F6',
      bg: 'rgba(59,130,246,0.08)',
      title: 'Salary Adjustment Request',
      badge: 'badge-blue',
      badgeLabel: 'Salary',
      desc: 'Request a salary review or adjustment based on promotion, role change, or employment contract update.',
      steps: [
        { title: 'Obtain Approval from Head of Department', body: 'A salary adjustment must be initiated by the Head of Department or authorized supervisor. Obtain written approval via official memo or email.' },
        { title: 'Submit to HR Compensation Team', body: 'The Head of Department submits the adjustment request to the HR Compensation & Benefits team via hr.compensation@qu.edu.qa.' },
        { title: 'HR Review', body: 'The HR team reviews the request against the university\'s salary scale, role classification, and budgetary allocation.' },
        { title: 'Finance Department Approval', body: 'Once HR approves, the request is forwarded to the Finance Department for budgetary clearance.' },
        { title: 'Payroll Update', body: 'After all approvals, the Payroll team updates the salary in the system. The adjustment reflects in the next monthly payroll cycle.' },
        { title: 'Employee Notification', body: 'A formal notification letter is issued to the employee confirming the new salary effective date.' },
      ]
    },
    {
      id: 'data-update',
      icon: 'fa-user-edit',
      color: '#10B981',
      bg: 'rgba(16,185,129,0.08)',
      title: 'Employee Data Update',
      badge: 'badge-green',
      badgeLabel: 'Data',
      desc: 'Update personal or banking information such as bank account number, address, or contact details.',
      steps: [
        { title: 'Log In to Employee Self-Service', body: 'Access the Employee Self-Service portal at <span class="font-mono text-xs bg-gray-100 px-1 rounded">ess.qu.edu.qa</span> using your QU credentials.' },
        { title: 'Navigate to Personal Information', body: 'Go to My Profile > Personal Information and select the field you wish to update.' },
        { title: 'Submit Change Request', body: 'Enter the updated information and click "Submit Request". You will receive a reference number for tracking.' },
        { title: 'Verification by HR', body: 'For sensitive changes (bank account, national ID), HR may require original documents for verification.' },
        { title: 'Confirmation', body: 'Changes are confirmed within 2–3 working days via email notification from hr.records@qu.edu.qa.' },
      ]
    },
    {
      id: 'overtime',
      icon: 'fa-clock',
      color: '#8B5CF6',
      bg: 'rgba(139,92,246,0.08)',
      title: 'Overtime & Additional Compensation',
      badge: 'badge-blue',
      badgeLabel: 'Overtime',
      desc: 'Submit an overtime request or claim additional compensation for work performed beyond regular hours.',
      steps: [
        { title: 'Pre-Authorization Required', body: 'Overtime must be authorized in advance by your direct supervisor or Head of Department before being worked.' },
        { title: 'Record Overtime Hours', body: 'Log overtime hours in the attendance system. Ensure entries are submitted by the 20th of each month for the current cycle.' },
        { title: 'Supervisor Approval', body: 'Your supervisor must approve the overtime log within 2 working days of submission.' },
        { title: 'Payroll Processing', body: 'Approved overtime is automatically included in the next monthly salary calculation based on the approved rate.' },
        { title: 'Review Payslip', body: 'Verify overtime payment in your monthly payslip. For discrepancies, contact overtime@qu.edu.qa.' },
      ]
    },
  ]

  const content = `
  <div class="mb-6 flex items-center justify-between">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Payroll Procedures</h1>
      <p class="text-gray-500 mt-1 text-sm">Step-by-step guides for all payroll-related requests and processes.</p>
    </div>
    <a href="/forms" class="btn-gold px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-white">
      <i class="fas fa-file-alt"></i> Go to Forms
    </a>
  </div>

  <!-- Procedure Cards -->
  <div class="space-y-5">
    ${procedures.map(proc => `
    <div class="card overflow-hidden" id="${proc.id}">
      <!-- Header -->
      <div class="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition" onclick="this.nextElementSibling.classList.toggle('hidden')">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${proc.bg}">
            <i class="fas ${proc.icon} text-xl" style="color:${proc.color}"></i>
          </div>
          <div>
            <div class="flex items-center gap-2 mb-1">
              <h3 class="font-bold text-gray-800">${proc.title}</h3>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${proc.badge}">${proc.badgeLabel}</span>
            </div>
            <p class="text-sm text-gray-500">${proc.desc}</p>
          </div>
        </div>
        <i class="fas fa-chevron-down text-gray-400 ml-4 flex-shrink-0"></i>
      </div>

      <!-- Steps -->
      <div class="hidden px-6 pb-6 bg-gray-50/50 border-t border-gray-100">
        <div class="pt-5 space-y-4">
          ${proc.steps.map((step, i) => `
          <div class="relative step-line last:before:hidden flex items-start gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm z-10 shadow-sm" style="background:${proc.color}">
              ${i + 1}
            </div>
            <div class="flex-1 pt-1 pb-2">
              <h4 class="font-semibold text-gray-800 text-sm mb-1">${step.title}</h4>
              <p class="text-gray-600 text-sm leading-relaxed">${step.body}</p>
            </div>
          </div>`).join('')}
        </div>
        <div class="mt-5 pt-4 border-t border-gray-200 flex items-center gap-3">
          <a href="/forms" class="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <i class="fas fa-download"></i> Download Related Form
          </a>
          <a href="/contact" class="btn-outline px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <i class="fas fa-headset"></i> Need Help?
          </a>
        </div>
      </div>
    </div>`).join('')}
  </div>`

  return c.html(layout('Procedures', content, 'procedures'))
})

// ─── Forms ───────────────────────────────────────────────────────────────────
app.get('/forms', (c) => {
  const formCategories = [
    {
      category: 'Allowances',
      icon: 'fa-hand-holding-dollar',
      color: 'var(--qu-maroon)',
      forms: [
        { title: 'Housing Allowance Request Form', desc: 'For employees requesting housing allowance or updating accommodation type.', ref: 'PR-F-001', version: 'Rev. 3, 2025' },
        { title: 'Transportation Allowance Application', desc: 'Apply for or modify your monthly transportation allowance entitlement.', ref: 'PR-F-002', version: 'Rev. 2, 2024' },
        { title: 'Education Allowance Request Form', desc: 'Request education allowance for eligible dependents enrolled in accredited institutions.', ref: 'PR-F-003', version: 'Rev. 1, 2024' },
        { title: 'Furniture Allowance Application', desc: 'One-time furniture allowance for new or relocated employees.', ref: 'PR-F-004', version: 'Rev. 1, 2023' },
      ]
    },
    {
      category: 'Deductions & Loans',
      icon: 'fa-circle-minus',
      color: 'var(--qu-gold)',
      forms: [
        { title: 'Salary Deduction Dispute Form', desc: 'Raise a formal dispute regarding an incorrect or unexpected salary deduction.', ref: 'PR-F-010', version: 'Rev. 2, 2025' },
        { title: 'Salary Advance Request Form', desc: 'Apply for a salary advance. Repayment terms must be specified.', ref: 'PR-F-011', version: 'Rev. 3, 2024' },
        { title: 'Staff Loan Application', desc: 'Apply for an interest-free staff loan as per QU HR policy.', ref: 'PR-F-012', version: 'Rev. 1, 2024' },
        { title: 'Loan Repayment Schedule Request', desc: 'Request a revised repayment schedule for an existing loan.', ref: 'PR-F-013', version: 'Rev. 1, 2023' },
      ]
    },
    {
      category: 'Salary & Compensation',
      icon: 'fa-sliders',
      color: '#3B82F6',
      forms: [
        { title: 'Salary Review Request Form', desc: 'Formal request for salary review based on merit, promotion, or market adjustment.', ref: 'PR-F-020', version: 'Rev. 2, 2025' },
        { title: 'Grade Reclassification Form', desc: 'Request reclassification to a new job grade upon role change.', ref: 'PR-F-021', version: 'Rev. 1, 2024' },
        { title: 'Performance Bonus Nomination', desc: 'Supervisor-submitted form for nominating an employee for a performance-based bonus.', ref: 'PR-F-022', version: 'Rev. 1, 2024' },
      ]
    },
    {
      category: 'Employee Data & Records',
      icon: 'fa-user-edit',
      color: '#10B981',
      forms: [
        { title: 'Bank Account Update Form', desc: 'Update your salary payment bank account details. Requires bank confirmation letter.', ref: 'PR-F-030', version: 'Rev. 4, 2025' },
        { title: 'Personal Information Update Form', desc: 'Update national ID, passport, address, or emergency contact information.', ref: 'PR-F-031', version: 'Rev. 2, 2024' },
        { title: 'Family Status Change Notification', desc: 'Report changes in marital status, dependents, or beneficiary information.', ref: 'PR-F-032', version: 'Rev. 1, 2024' },
        { title: 'End of Service Calculation Request', desc: 'Request an official calculation of end-of-service benefits prior to resignation.', ref: 'PR-F-033', version: 'Rev. 2, 2025' },
      ]
    },
    {
      category: 'Overtime & Special Payments',
      icon: 'fa-clock',
      color: '#8B5CF6',
      forms: [
        { title: 'Overtime Claim Form', desc: 'Submit a claim for approved overtime hours not yet captured in the system.', ref: 'PR-F-040', version: 'Rev. 2, 2024' },
        { title: 'Retroactive Payment Request', desc: 'Request payment for a prior period due to system error or delayed processing.', ref: 'PR-F-041', version: 'Rev. 1, 2024' },
      ]
    },
  ]

  const content = `
  <div class="mb-6 flex items-center justify-between flex-wrap gap-3">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">Forms & Documents</h1>
      <p class="text-gray-500 mt-1 text-sm">Download official payroll and HR forms. Always use the latest version.</p>
    </div>
    <div class="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm text-amber-800">
      <i class="fas fa-triangle-exclamation"></i>
      <span>Always submit original signed forms to HR</span>
    </div>
  </div>

  <div class="space-y-8">
    ${formCategories.map(cat => `
    <div>
      <div class="flex items-center gap-3 mb-4">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(0,0,0,0.06)">
          <i class="fas ${cat.icon}" style="color:${cat.color}"></i>
        </div>
        <h2 class="text-lg font-bold text-gray-700">${cat.category}</h2>
        <span class="text-xs font-medium text-gray-400">(${cat.forms.length} forms)</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${cat.forms.map(form => `
        <div class="card form-card p-5 flex items-start gap-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="background:rgba(139,26,47,0.08)">
            <i class="fas fa-file-pdf text-lg" style="color:var(--qu-maroon)"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h4 class="font-semibold text-gray-800 text-sm mb-1">${form.title}</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-3">${form.desc}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2 text-xs text-gray-400">
                <span class="font-mono bg-gray-100 px-1.5 py-0.5 rounded">${form.ref}</span>
                <span>${form.version}</span>
              </div>
              <button onclick="alert('Downloading ${form.title}...')" class="btn-primary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <i class="fas fa-download"></i> Download
              </button>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>`).join('')}
  </div>

  <div class="card p-5 mt-6 flex items-start gap-4 bg-blue-50 border border-blue-100">
    <i class="fas fa-info-circle text-blue-500 text-xl mt-0.5 flex-shrink-0"></i>
    <div>
      <p class="font-semibold text-blue-800 text-sm">Need a form not listed here?</p>
      <p class="text-blue-700 text-xs mt-1">Contact the Payroll Department at <strong>payroll@qu.edu.qa</strong> or call ext. <strong>4100</strong> and we will provide the required form within one working day.</p>
    </div>
  </div>`

  return c.html(layout('Forms & Documents', content, 'forms'))
})

// ─── FAQs ────────────────────────────────────────────────────────────────────
app.get('/faqs', (c) => {
  const faqs = [
    {
      category: 'Salary & Payments',
      icon: 'fa-money-bill-wave',
      color: 'var(--qu-maroon)',
      items: [
        {
          q: 'When is the monthly salary paid?',
          a: 'Salaries are processed and credited to employee bank accounts on the <strong>28th of each month</strong>. If the 28th falls on a Friday or public holiday, salaries are credited on the preceding working day. For Ramadan, salaries are credited at least 5 working days before Eid Al-Fitr.'
        },
        {
          q: 'What is the cutoff date for payroll changes to reflect in the current month?',
          a: 'Any payroll changes (new allowances, adjustments, promotions) must be finalized and approved in the system by the <strong>15th of each month</strong> to be included in that month\'s payroll cycle. Changes submitted after the 15th will be reflected in the following month, with retroactive adjustments if applicable.'
        },
        {
          q: 'My salary was not credited on time. What should I do?',
          a: 'First, verify with your bank that there are no holds or issues on your account. If the salary is still not credited by the 29th, contact the Payroll team at <strong>payroll@qu.edu.qa</strong> with your employee ID, bank name, and account number. Emergency processing may be available in genuine cases.'
        },
        {
          q: 'How is my basic salary calculated?',
          a: 'Basic salary is determined by your job grade and step as defined in the Qatar University compensation structure. It is reviewed annually during the performance appraisal cycle. For the exact calculation formula applicable to your grade, contact the HR Compensation & Benefits team.'
        },
      ]
    },
    {
      category: 'Payslips & Access',
      icon: 'fa-file-invoice-dollar',
      color: 'var(--qu-gold)',
      items: [
        {
          q: 'How do I access my monthly payslip?',
          a: 'Payslips are accessible through the <strong>Employee Self-Service (ESS) portal</strong> at <span class="font-mono text-xs bg-gray-100 px-1 rounded">ess.qu.edu.qa</span>. Log in with your university credentials, go to "My Pay" > "Payslip", and select the relevant month. Payslips are available from the 1st of the following month.'
        },
        {
          q: 'I cannot access the ESS portal. Who should I contact?',
          a: 'Contact the IT Help Desk at <strong>ithelpdesk@qu.edu.qa</strong> or call extension <strong>4500</strong> for login and access issues. For payslip content-related questions, contact the Payroll team at payroll@qu.edu.qa.'
        },
        {
          q: 'Can I get a salary certificate for banking purposes?',
          a: 'Yes. Submit a <strong>Salary Certificate Request</strong> via the ESS portal under "My Documents" or email hr.records@qu.edu.qa. Standard salary certificates are issued within <strong>2–3 working days</strong>. Urgent requests (within 24 hours) can be arranged for bank-related emergencies.'
        },
      ]
    },
    {
      category: 'Allowances & Benefits',
      icon: 'fa-hand-holding-dollar',
      color: '#10B981',
      items: [
        {
          q: 'What allowances am I entitled to as a QU employee?',
          a: 'Entitlements depend on your employment contract and grade. Common allowances include: <strong>Housing Allowance</strong>, <strong>Transportation Allowance</strong>, <strong>Education Allowance</strong> (for eligible dependents), <strong>Annual Air Ticket Allowance</strong>, and <strong>Relocation Allowance</strong> for new international hires. Review your contract or contact HR for a full breakdown.'
        },
        {
          q: 'When will my newly approved allowance appear in my salary?',
          a: 'Once an allowance request is fully approved and processed in the system by the 15th of the month, it will appear in the same month\'s payroll. If processed after the 15th, it will appear in the following month along with retroactive payment for the missed period.'
        },
        {
          q: 'Are allowances subject to tax?',
          a: 'Qatar does not currently impose personal income tax. However, employees who are citizens of countries with worldwide taxation treaties should consult their home country\'s tax authority for guidance on declaring foreign income, including allowances.'
        },
      ]
    },
    {
      category: 'Overtime & Deductions',
      icon: 'fa-clock',
      color: '#8B5CF6',
      items: [
        {
          q: 'How is overtime pay calculated?',
          a: 'Overtime for non-managerial staff is calculated at <strong>1.5× the hourly basic salary rate</strong> for regular overtime and <strong>2× the rate</strong> for public holidays. The hourly rate = (Monthly Basic Salary × 12) ÷ (52 × 40 hours). Overtime requires pre-authorization from the Head of Department.'
        },
        {
          q: 'I noticed an unexpected deduction on my payslip. How do I dispute it?',
          a: 'Download the <strong>Deduction Dispute Form</strong> from the <a href="/forms" class="underline" style="color:var(--qu-maroon)">Forms</a> section, complete it with details of the disputed amount, and email it with your payslip copy to <strong>deductions@qu.edu.qa</strong>. The Payroll team will investigate and respond within 3–5 working days.'
        },
        {
          q: 'What deductions are automatically applied to my salary?',
          a: 'Standard deductions may include: <strong>Loan repayments</strong> (if applicable), <strong>Salary advances</strong>, <strong>Unauthorized absence deductions</strong>, and any <strong>overpayment recovery</strong>. All deductions are itemized on your monthly payslip for full transparency.'
        },
      ]
    },
    {
      category: 'End of Service',
      icon: 'fa-person-walking-arrow-right',
      color: '#EF4444',
      items: [
        {
          q: 'How is my end-of-service benefit calculated?',
          a: 'End-of-service gratuity is calculated based on your <strong>basic salary at the time of separation</strong> and <strong>total years of service</strong>. The standard formula follows Qatar Labour Law: 3 weeks\' basic salary per year for the first 5 years, and 4 weeks per year thereafter. For a formal calculation, submit a request to <strong>eos@qu.edu.qa</strong>.'
        },
        {
          q: 'When will I receive my final pay and gratuity?',
          a: 'Final salary and end-of-service entitlements are processed within <strong>30 days of the official last working day</strong>. Processing requires all clearances (IT, Library, Finance, etc.) to be completed. Delays in clearance will postpone the final payment timeline.'
        },
      ]
    },
  ]

  const content = `
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Frequently Asked Questions</h1>
    <p class="text-gray-500 mt-1 text-sm">Find answers to the most common payroll, salary, and HR-related questions.</p>
  </div>

  <div class="card p-4 mb-6 flex items-center gap-3 bg-maroon-50" style="background:rgba(139,26,47,0.04);border:1px solid rgba(139,26,47,0.1)">
    <i class="fas fa-lightbulb text-lg" style="color:var(--qu-gold)"></i>
    <p class="text-sm text-gray-700">Can't find your answer? <a href="/contact" class="font-semibold underline" style="color:var(--qu-maroon)">Contact the Payroll team</a> directly and we'll respond within 4 working hours.</p>
  </div>

  <div class="space-y-6">
    ${faqs.map(section => `
    <div>
      <div class="flex items-center gap-3 mb-3">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(0,0,0,0.05)">
          <i class="fas ${section.icon}" style="color:${section.color}"></i>
        </div>
        <h2 class="text-lg font-bold text-gray-700">${section.category}</h2>
      </div>
      <div class="space-y-2">
        ${section.items.map((item, i) => `
        <div class="faq-item card overflow-hidden">
          <button class="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition" onclick="toggleFaq(this)">
            <span class="font-medium text-gray-800 text-sm">${item.q}</span>
            <i class="fas fa-chevron-down faq-icon text-gray-400 flex-shrink-0 text-sm"></i>
          </button>
          <div class="faq-content px-5 pb-4">
            <div class="border-t border-gray-100 pt-3">
              <p class="text-sm text-gray-600 leading-relaxed">${item.a}</p>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>`).join('')}
  </div>`

  return c.html(layout('FAQs', content, 'faqs'))
})

// ─── Contact ─────────────────────────────────────────────────────────────────
app.get('/contact', (c) => {
  const contacts = [
    {
      dept: 'General Payroll Inquiries',
      icon: 'fa-building-columns',
      color: 'var(--qu-maroon)',
      email: 'payroll@qu.edu.qa',
      ext: '4100 / 4101',
      desc: 'For general salary questions, payment status, and payslip inquiries.',
      hours: 'Sun – Thu: 7:30 AM – 3:30 PM',
      response: '4 working hours',
    },
    {
      dept: 'Allowances & Benefits',
      icon: 'fa-hand-holding-dollar',
      color: 'var(--qu-gold)',
      email: 'allowances@qu.edu.qa',
      ext: '4102',
      desc: 'Housing, transportation, education, and other employee allowance requests.',
      hours: 'Sun – Thu: 8:00 AM – 3:00 PM',
      response: '1 working day',
    },
    {
      dept: 'Deductions & Disputes',
      icon: 'fa-circle-minus',
      color: '#EF4444',
      email: 'deductions@qu.edu.qa',
      ext: '4103',
      desc: 'For queries related to salary deductions, disputes, or repayment schedules.',
      hours: 'Sun – Thu: 8:00 AM – 3:00 PM',
      response: '3–5 working days',
    },
    {
      dept: 'HR Records & Certificates',
      icon: 'fa-file-shield',
      color: '#10B981',
      email: 'hr.records@qu.edu.qa',
      ext: '4110',
      desc: 'Salary certificates, employment letters, and personal record updates.',
      hours: 'Sun – Thu: 7:30 AM – 3:30 PM',
      response: '2–3 working days',
    },
    {
      dept: 'HR Compensation & Benefits',
      icon: 'fa-sliders',
      color: '#3B82F6',
      email: 'hr.compensation@qu.edu.qa',
      ext: '4115',
      desc: 'Salary adjustments, grading, promotions, and compensation structure queries.',
      hours: 'Sun – Thu: 8:00 AM – 2:30 PM',
      response: '2–5 working days',
    },
    {
      dept: 'Technical Support (ESS Portal)',
      icon: 'fa-laptop-code',
      color: '#8B5CF6',
      email: 'ithelpdesk@qu.edu.qa',
      ext: '4500',
      desc: 'Login issues, portal access problems, and system-related technical inquiries.',
      hours: 'Sun – Thu: 7:00 AM – 4:00 PM',
      response: '2–4 working hours',
    },
  ]

  const content = `
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">Contact Us</h1>
    <p class="text-gray-500 mt-1 text-sm">Reach the right team for your payroll and HR inquiries. We're here to help.</p>
  </div>

  <!-- Office Info Banner -->
  <div class="card p-5 mb-6 flex flex-wrap gap-6 items-center" style="background:linear-gradient(135deg,rgba(139,26,47,0.05),white);border-left:4px solid var(--qu-maroon)">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.1)">
        <i class="fas fa-map-marker-alt" style="color:var(--qu-maroon)"></i>
      </div>
      <div>
        <p class="text-xs text-gray-500">Location</p>
        <p class="text-sm font-semibold text-gray-800">Admin Building A, 1st Floor, Room 101</p>
        <p class="text-xs text-gray-500">Qatar University Main Campus, Doha</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.1)">
        <i class="fas fa-clock" style="color:var(--qu-maroon)"></i>
      </div>
      <div>
        <p class="text-xs text-gray-500">Office Hours</p>
        <p class="text-sm font-semibold text-gray-800">Sunday – Thursday</p>
        <p class="text-xs text-gray-500">7:30 AM – 3:30 PM (AST)</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.1)">
        <i class="fas fa-phone" style="color:var(--qu-maroon)"></i>
      </div>
      <div>
        <p class="text-xs text-gray-500">Main Switchboard</p>
        <p class="text-sm font-semibold text-gray-800">+974 4403 4000</p>
        <p class="text-xs text-gray-500">Press 1 for HR & Payroll</p>
      </div>
    </div>
  </div>

  <!-- Contact Cards Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
    ${contacts.map(ct => `
    <div class="card contact-card p-5 flex flex-col gap-3" style="border-top-color:${ct.color}">
      <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(0,0,0,0.05)">
          <i class="fas ${ct.icon} text-lg" style="color:${ct.color}"></i>
        </div>
        <h3 class="font-bold text-gray-800 text-sm leading-tight">${ct.dept}</h3>
      </div>
      <p class="text-xs text-gray-500 leading-relaxed">${ct.desc}</p>
      <div class="space-y-1.5 text-xs text-gray-600">
        <div class="flex items-center gap-2">
          <i class="fas fa-envelope w-4 text-center" style="color:${ct.color}"></i>
          <span>${ct.email}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-phone w-4 text-center" style="color:${ct.color}"></i>
          <span>Extension: ${ct.ext}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-clock w-4 text-center" style="color:${ct.color}"></i>
          <span>${ct.hours}</span>
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-reply w-4 text-center" style="color:${ct.color}"></i>
          <span>Response: <strong>${ct.response}</strong></span>
        </div>
      </div>
      <div class="pt-2 mt-auto">
        <a href="mailto:${ct.email}" class="btn-primary w-full py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2">
          <i class="fas fa-envelope"></i> Send Email
        </a>
      </div>
    </div>`).join('')}
  </div>

  <!-- Quick Contact Form -->
  <div class="card p-6">
    <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2">
      <i class="fas fa-paper-plane text-sm" style="color:var(--qu-maroon)"></i> Send a Quick Message
    </h2>
    <p class="text-sm text-gray-500 mb-5">Fill in the form below and the appropriate team will get back to you shortly.</p>
    <form onsubmit="submitContact(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1.5">Full Name <span class="text-red-500">*</span></label>
        <input type="text" required placeholder="Your full name" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition" style="focus:ring-color:var(--qu-maroon)"/>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1.5">Employee ID <span class="text-red-500">*</span></label>
        <input type="text" required placeholder="e.g. QU-12345" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1.5">Email Address <span class="text-red-500">*</span></label>
        <input type="email" required placeholder="your.email@qu.edu.qa" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
      </div>
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1.5">Subject / Department</label>
        <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition bg-white">
          <option value="">Select a department...</option>
          <option>General Payroll Inquiries</option>
          <option>Allowances & Benefits</option>
          <option>Deductions & Disputes</option>
          <option>HR Records & Certificates</option>
          <option>Compensation & Benefits</option>
          <option>Technical Support (ESS Portal)</option>
        </select>
      </div>
      <div class="md:col-span-2">
        <label class="block text-xs font-semibold text-gray-600 mb-1.5">Message <span class="text-red-500">*</span></label>
        <textarea required rows="4" placeholder="Describe your inquiry in detail..." class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition resize-none"></textarea>
      </div>
      <div class="md:col-span-2 flex items-center justify-between">
        <p class="text-xs text-gray-400"><i class="fas fa-lock mr-1"></i> Your message is handled securely and confidentially.</p>
        <button type="submit" class="btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
          <i class="fas fa-paper-plane"></i> Send Message
        </button>
      </div>
    </form>
  </div>

  <script>
    function submitContact(e) {
      e.preventDefault();
      const btn = e.target.querySelector('button[type=submit]');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
        btn.style.background = 'linear-gradient(135deg, #10B981, #34D399)';
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
          btn.style.background = '';
          btn.disabled = false;
          e.target.reset();
        }, 3000);
      }, 1800);
    }
  </script>`

  return c.html(layout('Contact Us', content, 'contact'))
})

// ─── Employee Login ───────────────────────────────────────────────────────────
app.get('/login', (c) => {
  const content = `
  <div class="min-h-screen flex items-center justify-center -mt-6 -mx-6 px-6 py-12" style="background:linear-gradient(135deg, rgba(139,26,47,0.04) 0%, white 100%)">
    <div class="w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg" style="background:linear-gradient(135deg,var(--qu-maroon-dark),var(--qu-maroon-light))">
          <i class="fas fa-university text-3xl text-white"></i>
        </div>
        <h1 class="text-2xl font-bold text-gray-800">Employee Portal Login</h1>
        <p class="text-gray-500 text-sm mt-1">Qatar University – Payroll Services</p>
      </div>

      <!-- Login Card -->
      <div class="card p-8">
        <form onsubmit="handleLogin(event)" class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">Employee ID / QU Username</label>
            <div class="relative">
              <i class="fas fa-user absolute left-3 top-3 text-gray-400 text-sm"></i>
              <input type="text" required placeholder="e.g. QU-12345 or jsmith" class="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5">Password</label>
            <div class="relative">
              <i class="fas fa-lock absolute left-3 top-3 text-gray-400 text-sm"></i>
              <input type="password" required placeholder="Enter your password" class="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs">
            <label class="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" class="rounded"/>
              <span>Remember me</span>
            </label>
            <a href="#" class="font-semibold" style="color:var(--qu-maroon)">Forgot Password?</a>
          </div>
          <button type="submit" class="btn-primary w-full py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mt-2">
            <i class="fas fa-sign-in-alt"></i> Sign In
          </button>
        </form>

        <div class="mt-6 pt-5 border-t border-gray-100 text-center space-y-2">
          <p class="text-xs text-gray-500">Use your Qatar University network credentials.</p>
          <p class="text-xs text-gray-500">For access issues, contact <a href="mailto:ithelpdesk@qu.edu.qa" class="underline" style="color:var(--qu-maroon)">ithelpdesk@qu.edu.qa</a></p>
        </div>
      </div>

      <!-- Info Cards -->
      <div class="grid grid-cols-2 gap-3 mt-5">
        <a href="/faqs" class="card p-3 text-center hover:bg-gray-50 transition">
          <i class="fas fa-circle-question text-lg mb-1" style="color:var(--qu-maroon)"></i>
          <p class="text-xs text-gray-600 font-medium">Browse FAQs</p>
        </a>
        <a href="/contact" class="card p-3 text-center hover:bg-gray-50 transition">
          <i class="fas fa-headset text-lg mb-1" style="color:var(--qu-maroon)"></i>
          <p class="text-xs text-gray-600 font-medium">Get Support</p>
        </a>
      </div>
    </div>
  </div>
  <script>
    function handleLogin(e) {
      e.preventDefault();
      const btn = e.target.querySelector('button[type=submit]');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> Welcome!';
        btn.style.background = 'linear-gradient(135deg, #10B981, #34D399)';
        setTimeout(() => { window.location.href = '/'; }, 1500);
      }, 2000);
    }
  </script>`

  return c.html(layout('Employee Login', content, 'login'))
})

// ─── 404 ─────────────────────────────────────────────────────────────────────
app.notFound((c) => {
  const content = `
  <div class="flex flex-col items-center justify-center text-center py-20">
    <div class="w-24 h-24 rounded-2xl flex items-center justify-center mb-6" style="background:rgba(139,26,47,0.08)">
      <i class="fas fa-triangle-exclamation text-4xl" style="color:var(--qu-maroon)"></i>
    </div>
    <h1 class="text-4xl font-bold text-gray-800 mb-3">404</h1>
    <p class="text-gray-500 mb-6">The page you are looking for could not be found.</p>
    <a href="/" class="btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
      <i class="fas fa-home"></i> Return to Dashboard
    </a>
  </div>`
  return c.html(layout('Not Found', content, ''), 404)
})

export default app
