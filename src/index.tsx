import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()
app.use('/static/*', serveStatic({ root: './' }))

// ─────────────────────────────────────────────────────────────────────────────
//  TRANSLATIONS
// ─────────────────────────────────────────────────────────────────────────────
const T = {
  en: {
    dir: 'ltr', lang: 'en',
    fontBody: "'Segoe UI', system-ui, -apple-system, sans-serif",
    fontAr: "'Segoe UI', system-ui, sans-serif",

    portalTitle: 'Payroll Services Portal',
    portalSubtitle: 'Qatar University – Human Resources Division',
    toggleLang: 'عربي',
    toggleLangLabel: 'التبديل إلى العربية',

    // Nav
    navDashboard: 'Dashboard',
    navProcedures: 'Procedures',
    navForms: 'Forms & Documents',
    navFaqs: 'FAQs',
    navContact: 'Contact Us',
    navEOS: 'End of Service',
    navPromotions: 'Promotions',
    navMissions: 'Official Missions',
    navEmailTemplates: 'Email Templates',
    navScholarship: 'Scholarship Program',
    navScholarshipRules: 'Scholarship Rules',
    navScholarshipProcedures: 'Scholarship Procedures',
    navScholarshipTracking: 'Scholar Tracking',
    navApprovals: 'Approvals',
    navPayrollDept: 'Payroll Department',
    navLogin: 'Employee Login',
    
    // ── SCHOLARSHIP ──
    schTitle: 'Scholarship Program Management',
    schSubtitle: 'Complete management system for employee scholarship tracking and payments',
    schDashboard: 'Dashboard',
    schRules: 'Rules & Policies',
    schProcedures: 'Application Procedures',
    schTracking: 'Scholar Tracking',
    schApply: 'Apply for Scholarship',
    
    // Dashboard
    schKpi1: 'Active Scholars',
    schKpi2: 'Pending Applications',
    schKpi3: 'Total Budget (QAR)',
    schKpi4: 'This Month Payments',
    
    // Rules
    schRulesTitle: 'Scholarship Rules & Policies',
    schRulesSubtitle: 'Eligibility criteria, conditions, and regulations for the QU scholarship program',
    schRule1Title: 'Eligibility Requirements',
    schRule1Desc: 'Must be a permanent full-time employee with minimum 3 years of service',
    schRule2Title: 'Coverage Amount',
    schRule2Desc: 'Full tuition + QAR 5,000 monthly stipend for living expenses',
    schRule3Title: 'Service Commitment',
    schRule3Desc: 'Must serve QU for 2 years after graduation for each year of scholarship',
    schRule4Title: 'Academic Requirements',
    schRule4Desc: 'Maintain minimum CGPA of 3.0 throughout the program',
    
    // Procedures
    schProcTitle: 'Scholarship Application Procedures',
    schProcSubtitle: 'Step-by-step guide to apply for the Qatar University scholarship program',
    schStep1: 'Submit Application',
    schStep1Desc: 'Complete the scholarship application form with all required documents',
    schStep2: 'Department Review',
    schStep2Desc: 'Your department head reviews and approves the application',
    schStep3: 'HR Approval',
    schStep3Desc: 'Human Resources verifies eligibility and service requirements',
    schStep4: 'Payroll Setup',
    schStep4Desc: 'Payroll department sets up monthly stipend payments',
    
    // Tracking
    schTrackTitle: 'Scholar Tracking & Payments',
    schTrackSubtitle: 'Monitor all active scholars, payment schedules, and academic progress',
    schColName: 'Scholar Name',
    schColEmpId: 'Emp ID',
    schColProgram: 'Program',
    schColUniversity: 'University',
    schColStartDate: 'Start Date',
    schColStipend: 'Monthly Stipend',
    schColMarital: 'Marital Status',
    schColChildren: 'Children',
    schColStatus: 'Status',
    schColActions: 'Actions',
    schStatusActive: 'Active',
    schStatusPending: 'Pending',
    schStatusCompleted: 'Completed',
    schStatusSuspended: 'Suspended',
    schBtnViewDetails: 'View Details',
    schBtnPayments: 'Payment History',
    schBtnDocuments: 'Documents',
    
    // Application Form
    schFormTitle: 'Scholarship Application Form',
    schFormSubtitle: 'Complete all sections to submit your scholarship request',
    schFormPersonal: 'Personal Information',
    schFormProgram: 'Program Details',
    schFormDocuments: 'Required Documents',
    schFormName: 'Full Name',
    schFormEmpId: 'Employee ID',
    schFormDept: 'Department',
    schFormProgramType: 'Program Type',
    schFormMasters: 'Master\'s Degree',
    schFormPhD: 'PhD',
    schFormCertificate: 'Professional Certificate',
    schFormMajor: 'Major/Field of Study',
    schFormUniversity: 'University Name',
    schFormCountry: 'Country',
    schFormDuration: 'Program Duration (years)',
    schFormStartDate: 'Expected Start Date',
    schFormTuition: 'Estimated Annual Tuition (QAR)',
    schFormUploadLetter: 'Upload Acceptance Letter',
    schFormUploadTranscript: 'Upload Latest Transcript',
    schFormUploadCV: 'Upload CV',
    schFormJustification: 'Justification & Career Goals',
    schFormSubmit: 'Submit Application',
    schFormCancel: 'Cancel',
    navMainMenu: 'Main Menu',
    navEmployee: 'Employee',
    navDepartment: 'Payroll Department',
    navCopyright: '© 2025 Qatar University',
    navHR: 'Human Resources Division',

    // Topbar
    searchPlaceholder: 'Search procedures, forms, FAQs...',
    announcements: 'Announcements',
    announcementsNew: 'New',
    latest: 'Latest:',
    viewAll: 'View All Announcements',

    // Notifications
    notif1Title: 'April Salary Processing',
    notif1Body: 'Salary will be processed on April 28, 2025',
    notif2Title: 'New Overtime Policy',
    notif2Body: 'Updated calculation effective May 1, 2025',
    notif3Title: 'Housing Allowance Form Updated',
    notif3Body: 'New form version available for download',
    hoursAgo: '2 hours ago',
    dayAgo: '1 day ago',
    daysAgo: '3 days ago',
    staffPortal: 'Staff Portal',

    // Ticker
    ticker: 'April 2025 salaries will be credited on 28 April 2025 &nbsp;|&nbsp; New overtime calculation policy effective from 1 May 2025 &nbsp;|&nbsp; Eid Al-Fitr advance payment requests deadline: 10 April 2025 &nbsp;|&nbsp; Housing allowance form has been updated – please download the latest version &nbsp;|&nbsp; Payroll office will be closed on 18 April for National Day',

    // Footer
    footerDept: 'Qatar University – Human Resources & Payroll Department',
    footerLocation: 'Main Campus, Doha, Qatar',

    // ── HOME ──
    homeTitle: 'Payroll Services Portal',
    homeSubtitle: 'Welcome to the official Qatar University Payroll Department digital portal.',
    stat1Value: '2,400+', stat1Label: 'Registered Employees',
    stat2Value: '18',     stat2Label: 'Available Forms',
    stat3Value: '28 Apr', stat3Label: 'Next Salary Date',
    stat4Value: '2,400+', stat4Label: 'Total Employees',
    welcomeTag: 'Welcome',
    welcomeTitle: 'Qatar University – Human Resources & Payroll Department',
    welcomeBody: 'This portal provides Qatar University staff and employees with streamlined access to all payroll-related services, including procedures, downloadable forms, frequently asked questions, and direct contact channels. Our goal is to ensure transparent, efficient, and accessible payroll management for all university personnel.',
    btnGetStarted: 'Get Started',
    btnContactSupport: 'Contact Support',
    quickAccess: 'Quick Access',
    qa1Title: 'Procedures', qa1Desc: 'Step-by-step guides for payroll requests, allowances, and deductions', qa1Badge: '6 Guides',
    qa2Title: 'Forms & Documents', qa2Desc: 'Download official payroll forms, applications, and required documents', qa2Badge: '18 Forms',
    qa3Title: 'FAQs', qa3Desc: 'Answers to the most common payroll and salary-related questions', qa3Badge: '15 Questions',
    qa4Title: 'Contact Us', qa4Desc: 'Reach the right team for your payroll inquiries and support needs', qa4Badge: '6 Departments',
    recentAnnouncements: 'Recent Announcements',
    ann1: 'April 2025 Salary Processing Date', ann1Date: 'April 15, 2025', ann1Badge: 'Salary',
    ann2: 'Eid Al-Fitr Advance Payment – Request Deadline', ann2Date: 'April 10, 2025', ann2Badge: 'Advance',
    ann3: 'Updated Housing Allowance Form (Rev. 3)', ann3Date: 'April 8, 2025', ann3Badge: 'Forms',
    ann4: 'New Overtime Calculation Policy – Effective May 2025', ann4Date: 'April 5, 2025', ann4Badge: 'Policy',
    payrollCalendar: 'Payroll Calendar – Q2 2025',
    calMonth1: 'April 2025', calDate1: '28 Apr',
    calMonth2: 'May 2025',   calDate2: '28 May',
    calMonth3: 'June 2025',  calDate3: '26 Jun',
    emergencyContact: 'Emergency Contact',
    contactExt: 'Ext. 4100 / 4101',
    contactHours: 'Sun–Thu: 7:30 AM – 3:30 PM',
    viewAllArrow: 'View All →',

    // ── PROCEDURES ──
    procTitle: 'Payroll Procedures',
    procSubtitle: 'Step-by-step guides for all payroll-related requests and processes.',
    procGoForms: 'Go to Forms',
    procDownload: 'Download Related Form',
    procHelp: 'Need Help?',
    procViewAllowances: 'View Full Allowances Guide',
    procedures: [
      {
        id: 'all-allowances', icon: 'fa-coins', color: 'var(--qu-maroon)', bg: 'rgba(139,26,47,0.06)',
        title: 'Comprehensive Allowances Guide – Qatar Civil HR Law 2025', badge: 'badge-red', badgeLabel: 'New 2025',
        desc: 'All allowances and entitlements for Qatar University employees based on Law No. 25 of 2025 and Council of Ministers Resolution No. 34 of 2025. Starting with the Social Allowance.',
        isAllowanceGuide: true,
        steps: [
          {
            title: '① Social Allowance – الأولوية القصوى',
            body: `<div class="space-y-3">
              <div class="p-3 rounded-xl" style="background:rgba(139,26,47,0.06);border-left:4px solid #8B1A2F">
                <p class="font-bold text-gray-800 text-sm mb-1">📌 Social Allowance <span class="text-xs font-mono px-2 py-0.5 rounded text-white ml-2" style="background:#8B1A2F">Art. 19 – CoM Res. 34/2025</span></p>
                <p class="text-xs text-gray-600 mb-2">Monthly allowance for <strong>Qatari employees only</strong>, based on marital status and grade.</p>
                <div class="grid grid-cols-2 gap-1.5 text-xs">
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Grade 7+ Married/Children</span><br/><strong class="text-red-700">QR 6,400/mo</strong></div>
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Grade 7+ Single</span><br/><strong class="text-gray-700">QR 4,000/mo</strong></div>
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Other Grades Married</span><br/><strong class="text-red-700">QR 4,000/mo</strong></div>
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Other Grades Single</span><br/><strong class="text-gray-700">QR 2,560/mo</strong></div>
                  <div class="bg-white rounded-lg p-2 col-span-2 border"><span class="text-gray-500">Divorced custodial mother</span><br/><strong class="text-red-700">Married rate applies</strong></div>
                </div>
                <p class="text-xs text-gray-500 mt-2 italic">✅ Included in total salary & end-of-service gratuity.</p>
              </div>
            </div>`
          },
          {
            title: '② Housing Allowance',
            body: `<div class="p-3 rounded-xl" style="background:rgba(196,146,42,0.06);border-left:4px solid #C4922A">
              <p class="font-bold text-gray-800 text-sm mb-1">🏠 Housing Allowance <span class="text-xs font-mono px-2 py-0.5 rounded text-white ml-2" style="background:#C4922A">Art. 20 – CoM Res. 34/2025</span></p>
              <p class="text-xs text-gray-600 mb-2">Monthly allowance for <strong>Qatari & Non-Qatari</strong> employees (as per contract). Not granted if government accommodation is provided.</p>
              <div class="grid grid-cols-2 gap-1.5 text-xs">
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Grade 1+ Married</span><br/><strong class="text-yellow-700">QR 6,000/mo</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Grade 1+ Single</span><br/><strong class="text-gray-700">QR 3,500/mo</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Grades 2–7 Married</span><br/><strong class="text-yellow-700">QR 4,000/mo</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Grades 2–7 Single</span><br/><strong class="text-gray-700">QR 2,500/mo</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Other Grades Married</span><br/><strong class="text-yellow-700">QR 3,000/mo</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Other Grades Single</span><br/><strong class="text-gray-700">QR 1,500/mo</strong></div>
              </div>
            </div>`
          },
          {
            title: '③ Transportation Allowance',
            body: `<div class="p-3 rounded-xl" style="background:rgba(59,130,246,0.06);border-left:4px solid #3B82F6">
              <p class="font-bold text-gray-800 text-sm mb-1">🚗 Transportation Allowance <span class="text-xs font-mono px-2 py-0.5 rounded text-white ml-2" style="background:#3B82F6">Art. 26 / ER Art. 34</span></p>
              <p class="text-xs text-gray-600 mb-2">Monthly commuting allowance. Private car usage supplement available if job requires personal vehicle.</p>
              <div class="grid grid-cols-2 gap-1.5 text-xs">
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Simple private car use</span><br/><strong class="text-blue-700">QR 1,000/mo</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Moderate private car use</span><br/><strong class="text-blue-700">QR 1,500/mo</strong></div>
                <div class="bg-white rounded-lg p-2 col-span-2 border"><span class="text-gray-500">High private car use</span><br/><strong class="text-blue-700">QR 2,000/mo</strong></div>
              </div>
            </div>`
          },
          {
            title: '④ Overtime Allowance',
            body: `<div class="p-3 rounded-xl" style="background:rgba(16,185,129,0.06);border-left:4px solid #10B981">
              <p class="font-bold text-gray-800 text-sm mb-1">⏰ Overtime Allowance <span class="text-xs font-mono px-2 py-0.5 rounded text-white ml-2" style="background:#10B981">Art. 32 – CoM Res. 34/2025</span></p>
              <p class="text-xs text-gray-600 mb-2">Requires official assignment order. Monthly caps apply.</p>
              <div class="grid grid-cols-2 gap-1.5 text-xs">
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Regular days rate</span><br/><strong class="text-green-700">1.25× hourly rate</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Holidays/weekends rate</span><br/><strong class="text-green-700">1.5× hourly rate</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Qatari monthly cap</span><br/><strong class="text-green-700">40% / max QR 10,000</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">Non-Qatari monthly cap</span><br/><strong class="text-gray-700">20% / max QR 5,000</strong></div>
              </div>
            </div>`
          },
          {
            title: '⑤ Performance & Other Incentives (New 2025)',
            body: `<div class="space-y-2">
              <div class="p-3 rounded-xl" style="background:rgba(245,158,11,0.06);border-left:4px solid #F59E0B">
                <p class="font-bold text-gray-800 text-xs mb-1">🏆 Annual Performance Incentive (Qataris only) – Art. 35 bis/1</p>
                <div class="grid grid-cols-2 gap-1 text-xs mt-1">
                  <div class="bg-white rounded p-1.5 border"><span class="text-gray-500">Exceptional</span><br/><strong class="text-amber-700">2 months' basic salary</strong></div>
                  <div class="bg-white rounded p-1.5 border"><span class="text-gray-500">Exceeds Expectations</span><br/><strong class="text-gray-700">1 month's basic salary</strong></div>
                </div>
              </div>
              <div class="p-3 rounded-xl" style="background:rgba(236,72,153,0.06);border-left:4px solid #EC4899">
                <p class="font-bold text-gray-800 text-xs mb-1">💍 Annual Marriage Incentive (Qatari couple) – Art. 19 bis</p>
                <p class="text-xs text-gray-700"><strong class="text-pink-700">QR 12,000/year</strong> per spouse (both must be Qatari government employees)</p>
              </div>
              <div class="p-3 rounded-xl" style="background:rgba(8,145,178,0.06);border-left:4px solid #0891B2">
                <p class="font-bold text-gray-800 text-xs mb-1">🛡️ Attraction & Retention Allowance (Qataris in critical roles) – Art. 26 bis</p>
                <p class="text-xs text-gray-700"><strong class="text-cyan-700">5%</strong> of basic salary (up to 10% with CoM approval)</p>
              </div>
            </div>`
          },
        ]
      },
      {
        id: 'allowances', icon: 'fa-hand-holding-dollar', color: 'var(--qu-maroon)', bg: 'rgba(139,26,47,0.08)',
        title: 'Allowances Request', badge: 'badge-red', badgeLabel: 'Allowances',
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
        id: 'deductions', icon: 'fa-circle-minus', color: 'var(--qu-gold)', bg: 'rgba(196,146,42,0.08)',
        title: 'Deductions Inquiry & Dispute', badge: 'badge-amber', badgeLabel: 'Deductions',
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
        id: 'data-update', icon: 'fa-user-edit', color: '#10B981', bg: 'rgba(16,185,129,0.08)',
        title: 'Employee Data Update', badge: 'badge-green', badgeLabel: 'Data',
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
        id: 'overtime', icon: 'fa-clock', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)',
        title: 'Overtime & Additional Compensation', badge: 'badge-blue', badgeLabel: 'Overtime',
        desc: 'Submit an overtime request or claim additional compensation for work performed beyond regular hours.',
        steps: [
          { title: 'Pre-Authorization Required', body: 'Overtime must be authorized in advance by your direct supervisor or Head of Department before being worked.' },
          { title: 'Record Overtime Hours', body: 'Log overtime hours in the attendance system. Ensure entries are submitted by the 20th of each month for the current cycle.' },
          { title: 'Supervisor Approval', body: 'Your supervisor must approve the overtime log within 2 working days of submission.' },
          { title: 'Payroll Processing', body: 'Approved overtime is automatically included in the next monthly salary calculation based on the approved rate.' },
          { title: 'Review Payslip', body: 'Verify overtime payment in your monthly payslip. For discrepancies, contact overtime@qu.edu.qa.' },
        ]
      },
    ],

    // ── FORMS ──
    formsTitle: 'Forms & Documents',
    formsSubtitle: 'Download official payroll and HR forms. Always use the latest version.',
    formsWarning: 'Always submit original signed forms to HR',
    formsCount: 'forms',
    btnDownload: 'Download',
    formsNeedMore: 'Need a form not listed here?',
    formsNeedMoreBody: 'Contact the Payroll Department at <strong>payroll@qu.edu.qa</strong> or call ext. <strong>4100</strong> and we will provide the required form within one working day.',
    formCategories: [
      { category: 'Allowances', icon: 'fa-hand-holding-dollar', color: 'var(--qu-maroon)', forms: [
        { title: 'Housing Allowance Request Form', desc: 'For employees requesting housing allowance or updating accommodation type.', ref: 'PR-F-001', version: 'Rev. 3, 2025' },
        { title: 'Transportation Allowance Application', desc: 'Apply for or modify your monthly transportation allowance entitlement.', ref: 'PR-F-002', version: 'Rev. 2, 2024' },
        { title: 'Education Allowance Request Form', desc: 'Request education allowance for eligible dependents enrolled in accredited institutions.', ref: 'PR-F-003', version: 'Rev. 1, 2024' },
        { title: 'Furniture Allowance Application', desc: 'One-time furniture allowance for new or relocated employees.', ref: 'PR-F-004', version: 'Rev. 1, 2023' },
      ]},
      { category: 'Deductions & Loans', icon: 'fa-circle-minus', color: 'var(--qu-gold)', forms: [
        { title: 'Salary Deduction Dispute Form', desc: 'Raise a formal dispute regarding an incorrect or unexpected salary deduction.', ref: 'PR-F-010', version: 'Rev. 2, 2025', file: '' },
        { title: 'Salary Advance Request Form', desc: 'Apply for a salary advance. Repayment terms must be specified.', ref: 'PR-F-011', version: 'Rev. 3, 2024', file: '' },
        { title: 'Staff Loan Application', desc: 'Apply for an interest-free staff loan as per QU HR policy.', ref: 'PR-F-012', version: 'Rev. 1, 2024', file: '' },
        { title: 'Loan Repayment Schedule Request', desc: 'Request a revised repayment schedule for an existing loan. Attach the Tuition Waiver Request Form (HR-17) if applicable.', ref: 'PR-F-013', version: 'Rev. 1, 2023', file: '/static/HR-17-Tuition-Waiver-Request-Form.pdf', attachment: { label: 'HR-17 – Tuition Waiver Request Form', file: '/static/HR-17-Tuition-Waiver-Request-Form.pdf' } },
      ]},
      { category: 'Salary & Compensation', icon: 'fa-sliders', color: '#3B82F6', forms: [
        { title: 'Salary Review Request Form', desc: 'Formal request for salary review based on merit, promotion, or market adjustment.', ref: 'PR-F-020', version: 'Rev. 2, 2025' },
        { title: 'Grade Reclassification Form', desc: 'Request reclassification to a new job grade upon role change.', ref: 'PR-F-021', version: 'Rev. 1, 2024' },
        { title: 'Performance Bonus Nomination', desc: 'Supervisor-submitted form for nominating an employee for a performance-based bonus.', ref: 'PR-F-022', version: 'Rev. 1, 2024' },
      ]},
      { category: 'Employee Data & Records', icon: 'fa-user-edit', color: '#10B981', forms: [
        { title: 'Bank Account Update Form', desc: 'Update your salary payment bank account details. Requires bank confirmation letter.', ref: 'PR-F-030', version: 'Rev. 4, 2025' },
        { title: 'Personal Information Update Form', desc: 'Update national ID, passport, address, or emergency contact information.', ref: 'PR-F-031', version: 'Rev. 2, 2024' },
        { title: 'Family Status Change Notification', desc: 'Report changes in marital status, dependents, or beneficiary information.', ref: 'PR-F-032', version: 'Rev. 1, 2024' },
        { title: 'End of Service Calculation Request', desc: 'Request an official calculation of end-of-service benefits prior to resignation.', ref: 'PR-F-033', version: 'Rev. 2, 2025' },
      ]},
      { category: 'Overtime & Special Payments', icon: 'fa-clock', color: '#8B5CF6', forms: [
        { title: 'Overtime Claim Form', desc: 'Submit a claim for approved overtime hours not yet captured in the system.', ref: 'PR-F-040', version: 'Rev. 2, 2024' },
        { title: 'Retroactive Payment Request', desc: 'Request payment for a prior period due to system error or delayed processing.', ref: 'PR-F-041', version: 'Rev. 1, 2024' },
      ]},
    ],

    // ── FAQs ──
    faqsTitle: 'Frequently Asked Questions',
    faqsSubtitle: "Find answers to the most common payroll, salary, and HR-related questions.",
    faqsTip: "Can't find your answer?",
    faqsTipLink: 'Contact the Payroll team',
    faqsTipBody: 'directly and we\'ll respond within 4 working hours.',
    faqSections: [
      { category: 'Salary & Payments', icon: 'fa-money-bill-wave', color: 'var(--qu-maroon)', items: [
        { q: 'When is the monthly salary paid?', a: 'Salaries are processed and credited to employee bank accounts on the <strong>28th of each month</strong>. If the 28th falls on a Friday or public holiday, salaries are credited on the preceding working day. For Ramadan, salaries are credited at least 5 working days before Eid Al-Fitr.' },
        { q: 'What is the cutoff date for payroll changes to reflect in the current month?', a: 'Any payroll changes (new allowances, adjustments, promotions) must be finalized and approved in the system by the <strong>15th of each month</strong> to be included in that month\'s payroll cycle. Changes submitted after the 15th will be reflected in the following month, with retroactive adjustments if applicable.' },
        { q: 'My salary was not credited on time. What should I do?', a: 'First, verify with your bank that there are no holds or issues on your account. If the salary is still not credited by the 29th, contact the Payroll team at <strong>payroll@qu.edu.qa</strong> with your employee ID, bank name, and account number.' },
        { q: 'How is my basic salary calculated?', a: 'Basic salary is determined by your job grade and step as defined in the Qatar University compensation structure. It is reviewed annually during the performance appraisal cycle.' },
      ]},
      { category: 'Payslips & Access', icon: 'fa-file-invoice-dollar', color: 'var(--qu-gold)', items: [
        { q: 'How do I access my monthly payslip?', a: 'Payslips are accessible through the <strong>Employee Self-Service (ESS) portal</strong> at <span class="font-mono text-xs bg-gray-100 px-1 rounded">ess.qu.edu.qa</span>. Log in with your university credentials, go to "My Pay" > "Payslip", and select the relevant month.' },
        { q: 'I cannot access the ESS portal. Who should I contact?', a: 'Contact the IT Help Desk at <strong>ithelpdesk@qu.edu.qa</strong> or call extension <strong>4500</strong> for login and access issues.' },
        { q: 'Can I get a salary certificate for banking purposes?', a: 'Yes. Submit a <strong>Salary Certificate Request</strong> via the ESS portal under "My Documents" or email hr.records@qu.edu.qa. Standard salary certificates are issued within <strong>2–3 working days</strong>.' },
      ]},
      { category: 'Allowances & Benefits', icon: 'fa-hand-holding-dollar', color: '#10B981', items: [
        { q: 'What allowances am I entitled to as a QU employee?', a: 'Entitlements depend on your employment contract and grade. Common allowances include: <strong>Housing Allowance</strong>, <strong>Transportation Allowance</strong>, <strong>Education Allowance</strong>, <strong>Annual Air Ticket Allowance</strong>, and <strong>Relocation Allowance</strong>.' },
        { q: 'When will my newly approved allowance appear in my salary?', a: 'Once an allowance request is fully approved and processed by the 15th of the month, it will appear in the same month\'s payroll. If processed after the 15th, it will appear in the following month along with retroactive payment.' },
        { q: 'Are allowances subject to tax?', a: 'Qatar does not currently impose personal income tax. However, employees who are citizens of countries with worldwide taxation treaties should consult their home country\'s tax authority.' },
      ]},
      { category: 'Overtime & Deductions', icon: 'fa-clock', color: '#8B5CF6', items: [
        { q: 'How is overtime pay calculated?', a: 'Overtime for non-managerial staff is calculated at <strong>1.5× the hourly basic salary rate</strong> for regular overtime and <strong>2× the rate</strong> for public holidays. The hourly rate = (Monthly Basic Salary × 12) ÷ (52 × 40 hours).' },
        { q: 'I noticed an unexpected deduction on my payslip. How do I dispute it?', a: 'Download the <strong>Deduction Dispute Form</strong> from the <a href="/forms" class="underline" style="color:var(--qu-maroon)">Forms</a> section, complete it, and email it with your payslip copy to <strong>deductions@qu.edu.qa</strong>.' },
        { q: 'What deductions are automatically applied to my salary?', a: 'Standard deductions may include: <strong>Loan repayments</strong>, <strong>Salary advances</strong>, <strong>Unauthorized absence deductions</strong>, and any <strong>overpayment recovery</strong>. All deductions are itemized on your monthly payslip.' },
      ]},
      { category: 'End of Service', icon: 'fa-person-walking-arrow-right', color: '#EF4444', items: [
        { q: 'How is my end-of-service benefit calculated?', a: 'End-of-service gratuity is calculated based on your <strong>basic salary at the time of separation</strong> and <strong>total years of service</strong>. The standard formula follows Qatar Labour Law: 3 weeks\' basic salary per year for the first 5 years, and 4 weeks per year thereafter.' },
        { q: 'When will I receive my final pay and gratuity?', a: 'Final salary and end-of-service entitlements are processed within <strong>30 days of the official last working day</strong>. Processing requires all clearances (IT, Library, Finance, etc.) to be completed.' },
      ]},
    ],

    // ── CONTACT ──
    contactTitle: 'Contact Us',
    contactSubtitle: "Reach the right team for your payroll and HR inquiries. We're here to help.",
    contactLocation: 'Location', contactLocationVal: 'Admin Building A, 1st Floor, Room 101', contactLocationSub: 'Qatar University Main Campus, Doha',
    contactHoursLabel: 'Office Hours', contactHoursVal: 'Sunday – Thursday', contactHoursSub: '7:30 AM – 3:30 PM (AST)',
    contactPhone: 'Main Switchboard', contactPhoneVal: '+974 4403 4000', contactPhoneSub: 'Press 1 for HR & Payroll',
    contactExtLabel: 'Extension:', contactResponseLabel: 'Response:',
    btnSendEmail: 'Send Email',
    contactDepts: [
      { dept: 'General Payroll Inquiries', icon: 'fa-building-columns', color: 'var(--qu-maroon)', email: 'payroll@qu.edu.qa', ext: '4100 / 4101', desc: 'For general salary questions, payment status, and payslip inquiries.', hours: 'Sun – Thu: 7:30 AM – 3:30 PM', response: '4 working hours' },
      { dept: 'Allowances & Benefits', icon: 'fa-hand-holding-dollar', color: 'var(--qu-gold)', email: 'allowances@qu.edu.qa', ext: '4102', desc: 'Housing, transportation, education, and other employee allowance requests.', hours: 'Sun – Thu: 8:00 AM – 3:00 PM', response: '1 working day' },
      { dept: 'Deductions & Disputes', icon: 'fa-circle-minus', color: '#EF4444', email: 'deductions@qu.edu.qa', ext: '4103', desc: 'For queries related to salary deductions, disputes, or repayment schedules.', hours: 'Sun – Thu: 8:00 AM – 3:00 PM', response: '3–5 working days' },
      { dept: 'HR Records & Certificates', icon: 'fa-file-shield', color: '#10B981', email: 'hr.records@qu.edu.qa', ext: '4110', desc: 'Salary certificates, employment letters, and personal record updates.', hours: 'Sun – Thu: 7:30 AM – 3:30 PM', response: '2–3 working days' },
      { dept: 'HR Compensation & Benefits', icon: 'fa-sliders', color: '#3B82F6', email: 'hr.compensation@qu.edu.qa', ext: '4115', desc: 'Salary adjustments, grading, promotions, and compensation structure queries.', hours: 'Sun – Thu: 8:00 AM – 2:30 PM', response: '2–5 working days' },
      { dept: 'Technical Support (ESS Portal)', icon: 'fa-laptop-code', color: '#8B5CF6', email: 'ithelpdesk@qu.edu.qa', ext: '4500', desc: 'Login issues, portal access problems, and system-related technical inquiries.', hours: 'Sun – Thu: 7:00 AM – 4:00 PM', response: '2–4 working hours' },
    ],
    contactFormTitle: 'Send a Quick Message',
    contactFormSubtitle: "Fill in the form below and the appropriate team will get back to you shortly.",
    cfName: 'Full Name', cfNamePh: 'Your full name',
    cfEmpId: 'Employee ID', cfEmpIdPh: 'e.g. QU-12345',
    cfEmail: 'Email Address', cfEmailPh: 'your.email@qu.edu.qa',
    cfSubject: 'Subject / Department', cfSubjectPh: 'Select a department...',
    cfMsg: 'Message', cfMsgPh: 'Describe your inquiry in detail...',
    cfPrivacy: 'Your message is handled securely and confidentially.',
    cfSubmit: 'Send Message', cfSending: 'Sending...', cfSent: 'Message Sent!',
    required: 'Required',

    // ── LOGIN ──
    loginTitle: 'Employee Portal Login',
    loginSubtitle: 'Qatar University – Payroll Services',
    loginUsername: 'Employee ID / QU Username', loginUsernamePh: 'e.g. QU-12345 or jsmith',
    loginPassword: 'Password', loginPasswordPh: 'Enter your password',
    loginRemember: 'Remember me',
    loginForgot: 'Forgot Password?',
    loginBtn: 'Sign In', loginBtnLoading: 'Signing In...', loginBtnDone: 'Welcome!',
    loginNote1: 'Use your Qatar University network credentials.',
    loginNote2: 'For access issues, contact',
    loginFaq: 'Browse FAQs',
    loginSupport: 'Get Support',

    // 404
    notFoundMsg: 'The page you are looking for could not be found.',
    btnReturnHome: 'Return to Dashboard',
  },

  ar: {
    dir: 'rtl', lang: 'ar',
    fontBody: "'Cairo', 'Tajawal', 'Segoe UI', system-ui, sans-serif",
    fontAr: "'Cairo', 'Tajawal', system-ui, sans-serif",

    portalTitle: 'بوابة خدمات الرواتب',
    portalSubtitle: 'جامعة قطر – إدارة الموارد البشرية',
    toggleLang: 'English',
    toggleLangLabel: 'Switch to English',

    navDashboard: 'الرئيسية',
    navProcedures: 'الإجراءات',
    navForms: 'النماذج والوثائق',
    navFaqs: 'الأسئلة الشائعة',
    navContact: 'تواصل معنا',
    navEOS: 'نهاية الخدمة',
    navPromotions: 'الترقيات الإدارية',
    navMissions: 'المهام الرسمية والعلمية',
    navScholarship: 'برنامج الابتعاث',
    navScholarshipRules: 'قوانين وشروط الابتعاث',
    navScholarshipProcedures: 'إجراءات التقديم',
    navScholarshipTracking: 'متابعة المبتعثين',
    navEmailTemplates: 'أرشيف قوالب الإيميل',
    navApprovals: 'الموافقات والاعتمادات',
    navPayrollDept: 'قسم الرواتب',
    navLogin: 'دخول الموظف',
    
    // ── الابتعاث ──
    schTitle: 'إدارة برنامج الابتعاث',
    schSubtitle: 'نظام متكامل لإدارة ومتابعة المبتعثين والمدفوعات',
    schDashboard: 'لوحة المعلومات',
    schRules: 'القوانين والشروط',
    schProcedures: 'إجراءات التقديم',
    schTracking: 'متابعة المبتعثين',
    schApply: 'تقديم طلب ابتعاث',
    
    // لوحة المعلومات
    schKpi1: 'المبتعثون النشطون',
    schKpi2: 'الطلبات المعلقة',
    schKpi3: 'إجمالي الميزانية (ريال)',
    schKpi4: 'مدفوعات هذا الشهر',
    
    // القوانين
    schRulesTitle: 'قوانين وشروط برنامج الابتعاث',
    schRulesSubtitle: 'معايير الأهلية والشروط واللوائح الخاصة ببرنامج الابتعاث بجامعة قطر',
    schRule1Title: 'متطلبات الأهلية',
    schRule1Desc: 'يجب أن يكون الموظف دائماً بدوام كامل مع خدمة لا تقل عن 3 سنوات',
    schRule2Title: 'قيمة التغطية',
    schRule2Desc: 'الرسوم الدراسية كاملة + مكافأة شهرية 5,000 ريال لمصاريف المعيشة',
    schRule3Title: 'التزام الخدمة',
    schRule3Desc: 'يلتزم المبتعث بخدمة الجامعة لمدة سنتين بعد التخرج عن كل سنة ابتعاث',
    schRule4Title: 'المتطلبات الأكاديمية',
    schRule4Desc: 'الحفاظ على معدل تراكمي لا يقل عن 3.0 طوال فترة الدراسة',
    
    // الإجراءات
    schProcTitle: 'إجراءات التقديم على برنامج الابتعاث',
    schProcSubtitle: 'دليل شامل خطوة بخطوة للتقديم على برنامج الابتعاث بجامعة قطر',
    schStep1: 'تقديم الطلب',
    schStep1Desc: 'تعبئة نموذج طلب الابتعاث مع إرفاق جميع المستندات المطلوبة',
    schStep2: 'مراجعة القسم',
    schStep2Desc: 'مراجعة واعتماد رئيس القسم للطلب',
    schStep3: 'اعتماد الموارد البشرية',
    schStep3Desc: 'التحقق من أهلية الموظف ومتطلبات الخدمة',
    schStep4: 'إعداد المدفوعات',
    schStep4Desc: 'إعداد قسم الرواتب للمكافأة الشهرية والمستحقات',
    
    // متابعة المبتعثين
    schTrackTitle: 'متابعة المبتعثين والمدفوعات',
    schTrackSubtitle: 'متابعة جميع المبتعثين النشطين، جداول المدفوعات، والتقدم الأكاديمي',
    schColName: 'اسم المبتعث',
    schColEmpId: 'الرقم الوظيفي',
    schColProgram: 'البرنامج',
    schColUniversity: 'الجامعة',
    schColStartDate: 'تاريخ البدء',
    schColStipend: 'المكافأة الشهرية',
    schColMarital: 'الحالة الاجتماعية',
    schColChildren: 'عدد الأبناء',
    schColStatus: 'الحالة',
    schColActions: 'الإجراءات',
    schStatusActive: 'نشط',
    schStatusPending: 'معلق',
    schStatusCompleted: 'مكتمل',
    schStatusSuspended: 'موقوف',
    schBtnViewDetails: 'عرض التفاصيل',
    schBtnPayments: 'سجل المدفوعات',
    schBtnDocuments: 'المستندات',
    
    // نموذج التقديم
    schFormTitle: 'نموذج طلب الابتعاث',
    schFormSubtitle: 'يرجى تعبئة جميع الحقول المطلوبة لتقديم طلب الابتعاث',
    schFormPersonal: 'البيانات الشخصية',
    schFormProgram: 'تفاصيل البرنامج',
    schFormDocuments: 'المستندات المطلوبة',
    schFormName: 'الاسم الكامل',
    schFormEmpId: 'الرقم الوظيفي',
    schFormDept: 'القسم',
    schFormProgramType: 'نوع البرنامج',
    schFormMasters: 'ماجستير',
    schFormPhD: 'دكتوراه',
    schFormCertificate: 'شهادة مهنية',
    schFormMajor: 'التخصص',
    schFormUniversity: 'اسم الجامعة',
    schFormCountry: 'الدولة',
    schFormDuration: 'مدة البرنامج (سنوات)',
    schFormStartDate: 'تاريخ البدء المتوقع',
    schFormTuition: 'الرسوم الدراسية السنوية المقدرة (ريال)',
    schFormUploadLetter: 'رفع خطاب القبول',
    schFormUploadTranscript: 'رفع آخر كشف درجات',
    schFormUploadCV: 'رفع السيرة الذاتية',
    schFormJustification: 'المبررات والأهداف المهنية',
    schFormSubmit: 'تقديم الطلب',
    schFormCancel: 'إلغاء',
    navMainMenu: 'القائمة الرئيسية',
    navEmployee: 'الموظف',
    navDepartment: 'قسم الرواتب',
    navCopyright: '© 2025 جامعة قطر',
    navHR: 'إدارة الموارد البشرية',

    searchPlaceholder: 'ابحث عن إجراءات، نماذج، أسئلة...',
    announcements: 'الإعلانات',
    announcementsNew: 'جديد',
    latest: 'آخر الأخبار:',
    viewAll: 'عرض جميع الإعلانات',

    notif1Title: 'صرف راتب أبريل',
    notif1Body: 'سيتم صرف الراتب بتاريخ 28 أبريل 2025',
    notif2Title: 'سياسة العمل الإضافي الجديدة',
    notif2Body: 'يسري تطبيق طريقة الحساب المحدّثة من 1 مايو 2025',
    notif3Title: 'تحديث نموذج بدل السكن',
    notif3Body: 'الإصدار الجديد من النموذج متاح للتحميل الآن',
    hoursAgo: 'منذ ساعتين',
    dayAgo: 'منذ يوم واحد',
    daysAgo: 'منذ 3 أيام',
    staffPortal: 'بوابة الموظفين',

    ticker: 'سيتم إيداع رواتب أبريل 2025 بتاريخ 28 أبريل 2025 &nbsp;|&nbsp; سياسة حساب العمل الإضافي المحدّثة تسري من 1 مايو 2025 &nbsp;|&nbsp; الموعد النهائي لطلبات سلفة عيد الفطر: 10 أبريل 2025 &nbsp;|&nbsp; تم تحديث نموذج بدل السكن – يرجى تحميل الإصدار الأحدث &nbsp;|&nbsp; مكتب الرواتب مغلق يوم 18 أبريل بمناسبة اليوم الوطني',

    footerDept: 'جامعة قطر – الموارد البشرية وقسم الرواتب',
    footerLocation: 'الحرم الجامعي الرئيسي، الدوحة، قطر',

    // HOME
    homeTitle: 'بوابة خدمات الرواتب',
    homeSubtitle: 'مرحباً بكم في البوابة الرقمية الرسمية لقسم الرواتب بجامعة قطر.',
    stat1Value: '+2,400', stat1Label: 'موظف مسجَّل',
    stat2Value: '18',     stat2Label: 'نموذج متاح',
    stat3Value: '28 أبر', stat3Label: 'تاريخ الراتب القادم',
    stat4Value: '+2,400', stat4Label: 'إجمالي الموظفين',
    welcomeTag: 'أهلاً وسهلاً',
    welcomeTitle: 'جامعة قطر – الموارد البشرية وقسم الرواتب',
    welcomeBody: 'تتيح هذه البوابة لموظفي جامعة قطر الوصول السلس إلى جميع خدمات الرواتب، بما في ذلك الإجراءات والنماذج القابلة للتحميل والأسئلة الشائعة وقنوات التواصل المباشر. هدفنا توفير إدارة مرتبات شفافة وفعّالة وميسّرة لجميع منسوبي الجامعة.',
    btnGetStarted: 'ابدأ الآن',
    btnContactSupport: 'تواصل مع الدعم',
    quickAccess: 'وصول سريع',
    qa1Title: 'الإجراءات', qa1Desc: 'أدلة خطوة بخطوة لطلبات الرواتب والبدلات والاستقطاعات', qa1Badge: '6 أدلة',
    qa2Title: 'النماذج والوثائق', qa2Desc: 'تحميل نماذج الرواتب والطلبات والوثائق الرسمية', qa2Badge: '18 نموذجاً',
    qa3Title: 'الأسئلة الشائعة', qa3Desc: 'إجابات على أكثر الأسئلة شيوعاً حول الرواتب والمستحقات', qa3Badge: '15 سؤالاً',
    qa4Title: 'تواصل معنا', qa4Desc: 'تواصل مع الفريق المختص لأي استفسار يخص راتبك أو بدلاتك', qa4Badge: '6 أقسام',
    recentAnnouncements: 'أحدث الإعلانات',
    ann1: 'موعد صرف رواتب أبريل 2025', ann1Date: '15 أبريل 2025', ann1Badge: 'راتب',
    ann2: 'سلفة عيد الفطر – الموعد النهائي للطلبات', ann2Date: '10 أبريل 2025', ann2Badge: 'سلفة',
    ann3: 'تحديث نموذج بدل السكن (المراجعة 3)', ann3Date: '8 أبريل 2025', ann3Badge: 'نماذج',
    ann4: 'سياسة حساب العمل الإضافي الجديدة – تسري من مايو 2025', ann4Date: '5 أبريل 2025', ann4Badge: 'سياسة',
    payrollCalendar: 'تقويم الرواتب – الربع الثاني 2025',
    calMonth1: 'أبريل 2025', calDate1: '28 أبر',
    calMonth2: 'مايو 2025',  calDate2: '28 مايو',
    calMonth3: 'يونيو 2025', calDate3: '26 يونيو',
    emergencyContact: 'تواصل طارئ',
    contactExt: 'داخلي 4100 / 4101',
    contactHours: 'الأحد–الخميس: 7:30 ص – 3:30 م',
    viewAllArrow: 'عرض الكل →',

    // PROCEDURES
    procTitle: 'إجراءات الرواتب',
    procSubtitle: 'أدلة تفصيلية خطوة بخطوة لجميع طلبات الرواتب والمعاملات.',
    procGoForms: 'الذهاب للنماذج',
    procDownload: 'تحميل النموذج المرتبط',
    procHelp: 'هل تحتاج مساعدة؟',
    procViewAllowances: 'عرض دليل البدلات الكامل',
    procedures: [
      {
        id: 'all-allowances', icon: 'fa-coins', color: 'var(--qu-maroon)', bg: 'rgba(139,26,47,0.06)',
        title: 'دليل البدلات الشامل – لائحة الموارد البشرية القطرية 2025', badge: 'badge-red', badgeLabel: 'مستجد 2025',
        desc: 'جميع البدلات والمستحقات لموظفي جامعة قطر وفق القانون رقم (25) لسنة 2025 وقرار مجلس الوزراء رقم (34) لسنة 2025، تبدأ بالعلاوة الاجتماعية.',
        isAllowanceGuide: true,
        steps: [
          {
            title: '① العلاوة الاجتماعية – الأولوية القصوى',
            body: `<div class="space-y-3">
              <div class="p-3 rounded-xl" style="background:rgba(139,26,47,0.06);border-right:4px solid #8B1A2F">
                <p class="font-bold text-gray-800 text-sm mb-1">📌 العلاوة الاجتماعية <span class="text-xs font-mono px-2 py-0.5 rounded text-white mr-2" style="background:#8B1A2F">المادة 19 – قرار م.و. 34/2025</span></p>
                <p class="text-xs text-gray-600 mb-2">علاوة شهرية مخصصة للموظف <strong>القطري فقط</strong>، تتفاوت بحسب الدرجة الوظيفية والحالة الاجتماعية.</p>
                <div class="grid grid-cols-2 gap-1.5 text-xs">
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجة 7 فأعلى – متزوج/يعول</span><br/><strong class="text-red-700">6,400 ريال/شهر</strong></div>
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجة 7 فأعلى – أعزب</span><br/><strong class="text-gray-700">4,000 ريال/شهر</strong></div>
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجات الأخرى – متزوج</span><br/><strong class="text-red-700">4,000 ريال/شهر</strong></div>
                  <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجات الأخرى – أعزب</span><br/><strong class="text-gray-700">2,560 ريال/شهر</strong></div>
                  <div class="bg-white rounded-lg p-2 col-span-2 border"><span class="text-gray-500">المطلقة الحاضنة لأولادها</span><br/><strong class="text-red-700">تُمنح بفئة المتزوج</strong></div>
                </div>
                <div class="mt-2 p-2 rounded-lg text-xs text-gray-600" style="background:rgba(139,26,47,0.08)">
                  <p class="font-semibold mb-1">📋 الشروط الرئيسية:</p>
                  <ul class="list-disc list-inside space-y-0.5">
                    <li>يجب أن يكون الموظف قطري الجنسية</li>
                    <li>المتزوج: عقد زواج ساري – من يعول أولاده: وثائق رسمية</li>
                    <li>المطلقة الحاضنة: حكم حضانة صادر من المحكمة</li>
                    <li>الزوجان القطريان الموظفان: <strong>كلاهما يستحق فئة متزوج</strong> بصرف النظر عن عمل الآخر</li>
                    <li>تُوقف العلاوة خلال الإجازة بدون راتب</li>
                  </ul>
                </div>
                <p class="text-xs text-gray-500 mt-2 italic">✅ تُعدّ جزءاً من الراتب الإجمالي وتدخل في احتساب مكافأة نهاية الخدمة.</p>
              </div>
            </div>`
          },
          {
            title: '② بدل السكن',
            body: `<div class="p-3 rounded-xl" style="background:rgba(196,146,42,0.06);border-right:4px solid #C4922A">
              <p class="font-bold text-gray-800 text-sm mb-1">🏠 بدل السكن <span class="text-xs font-mono px-2 py-0.5 rounded text-white mr-2" style="background:#C4922A">المادة 20 – قرار م.و. 34/2025</span></p>
              <p class="text-xs text-gray-600 mb-2">بدل شهري للقطريين وغير القطريين (وفق العقد). لا يُمنح إذا وُفِّر سكن حكومي عيني.</p>
              <div class="grid grid-cols-2 gap-1.5 text-xs">
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجة الأولى فأعلى – متزوج</span><br/><strong class="text-yellow-700">6,000 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجة الأولى فأعلى – أعزب</span><br/><strong class="text-gray-700">3,500 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجات 2–7 – متزوج</span><br/><strong class="text-yellow-700">4,000 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجات 2–7 – أعزب</span><br/><strong class="text-gray-700">2,500 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجات الأخرى – متزوج</span><br/><strong class="text-yellow-700">3,000 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">الدرجات الأخرى – أعزب</span><br/><strong class="text-gray-700">1,500 ريال/شهر</strong></div>
              </div>
            </div>`
          },
          {
            title: '③ بدل التنقل',
            body: `<div class="p-3 rounded-xl" style="background:rgba(59,130,246,0.06);border-right:4px solid #3B82F6">
              <p class="font-bold text-gray-800 text-sm mb-1">🚗 بدل التنقل <span class="text-xs font-mono px-2 py-0.5 rounded text-white mr-2" style="background:#3B82F6">م.26 / ل.ت. م.34</span></p>
              <p class="text-xs text-gray-600 mb-2">بدل شهري لتغطية تكاليف التنقل. يُضاف بدل استخدام السيارة الخاصة إذا اقتضت طبيعة العمل ذلك.</p>
              <div class="grid grid-cols-2 gap-1.5 text-xs">
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">استخدام بسيط للسيارة</span><br/><strong class="text-blue-700">1,000 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">استخدام متوسط للسيارة</span><br/><strong class="text-blue-700">1,500 ريال/شهر</strong></div>
                <div class="bg-white rounded-lg p-2 col-span-2 border"><span class="text-gray-500">استخدام مرتفع للسيارة</span><br/><strong class="text-blue-700">2,000 ريال/شهر</strong></div>
              </div>
            </div>`
          },
          {
            title: '④ بدل العمل الإضافي',
            body: `<div class="p-3 rounded-xl" style="background:rgba(16,185,129,0.06);border-right:4px solid #10B981">
              <p class="font-bold text-gray-800 text-sm mb-1">⏰ بدل العمل الإضافي <span class="text-xs font-mono px-2 py-0.5 rounded text-white mr-2" style="background:#10B981">المادة 32 – قرار م.و. 34/2025</span></p>
              <p class="text-xs text-gray-600 mb-2">يستلزم قرار تكليف رسمي. حدود شهرية مقررة.</p>
              <div class="grid grid-cols-2 gap-1.5 text-xs">
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">أيام عادية</span><br/><strong class="text-green-700">1.25 × الأجر الساعي</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">عطل ومناسبات رسمية</span><br/><strong class="text-green-700">1.5 × الأجر الساعي</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">سقف القطري</span><br/><strong class="text-green-700">40%، حد أقصى 10,000</strong></div>
                <div class="bg-white rounded-lg p-2 border"><span class="text-gray-500">سقف غير القطري</span><br/><strong class="text-gray-700">20%، حد أقصى 5,000</strong></div>
              </div>
            </div>`
          },
          {
            title: '⑤ الحوافز والمستحدثات 2025',
            body: `<div class="space-y-2">
              <div class="p-3 rounded-xl" style="background:rgba(245,158,11,0.06);border-right:4px solid #F59E0B">
                <p class="font-bold text-gray-800 text-xs mb-1">🏆 حافز الأداء السنوي (القطريون) – م.35 مكرر/1</p>
                <div class="grid grid-cols-2 gap-1 text-xs mt-1">
                  <div class="bg-white rounded p-1.5 border"><span class="text-gray-500">استثنائي</span><br/><strong class="text-amber-700">راتبان أساسيان</strong></div>
                  <div class="bg-white rounded p-1.5 border"><span class="text-gray-500">يتجاوز التوقعات</span><br/><strong class="text-gray-700">راتب أساسي واحد</strong></div>
                </div>
              </div>
              <div class="p-3 rounded-xl" style="background:rgba(236,72,153,0.06);border-right:4px solid #EC4899">
                <p class="font-bold text-gray-800 text-xs mb-1">💍 حافز الزواج السنوي (الزوجان القطريان) – م.19 مكرر</p>
                <p class="text-xs text-gray-700"><strong class="text-pink-700">12,000 ريال/سنة</strong> لكلٍّ من الزوج والزوجة (كلاهما موظفان حكوميان)</p>
              </div>
              <div class="p-3 rounded-xl" style="background:rgba(8,145,178,0.06);border-right:4px solid #0891B2">
                <p class="font-bold text-gray-800 text-xs mb-1">🛡️ بدل الاستقطاب والاحتفاظ (القطريون في الوظائف الحرجة) – م.26 مكرر</p>
                <p class="text-xs text-gray-700"><strong class="text-cyan-700">5%</strong> من الراتب الأساسي (تصل إلى 10% بموافقة مجلس الوزراء)</p>
              </div>
              <div class="p-3 rounded-xl" style="background:rgba(99,102,241,0.06);border-right:4px solid #6366F1">
                <p class="font-bold text-gray-800 text-xs mb-1">📊 حافز الأداء الإشرافي (القادة القطريون) – م.35 مكرر</p>
                <p class="text-xs text-gray-700">يتراوح بين <strong class="text-indigo-700">30,000 ريال</strong> (رئيس قسم) و<strong class="text-indigo-700">120,000 ريال</strong> (وكيل وزارة مساعد) سنوياً</p>
              </div>
            </div>`
          },
        ]
      },
      {
        id: 'allowances', icon: 'fa-hand-holding-dollar', color: 'var(--qu-maroon)', bg: 'rgba(139,26,47,0.08)',
        title: 'طلب بدل', badge: 'badge-red', badgeLabel: 'البدلات',
        desc: 'اتبع الخطوات التالية لتقديم طلب بدل جديد (سكن، مواصلات، تعليم، إلخ)',
        steps: [
          { title: 'تحميل نموذج الطلب', body: 'توجّه إلى قسم <a href="/forms" class="underline" style="color:var(--qu-maroon)">النماذج والوثائق</a> وقم بتحميل نموذج طلب البدل المناسب.' },
          { title: 'استيفاء النموذج', body: 'أدخل جميع البيانات المطلوبة بدقة. تأكد من صحة رقم الموظف والقسم ونوع البدل المطلوب.' },
          { title: 'إرفاق المستندات المؤيدة', body: 'أرفق جميع المستندات المطلوبة (مثل: عقد الإيجار لبدل السكن، أو رسالة القيد لبدل التعليم).' },
          { title: 'تقديم الطلب للمشرف المباشر', body: 'قدّم النموذج المكتمل لمشرفك المباشر للاطلاع والموافقة والتوقيع.' },
          { title: 'إحالة الطلب لإدارة الموارد البشرية', body: 'بعد موافقة المشرف، يُرسَل النموذج إلى إدارة الموارد البشرية (مبنى أ، غرفة 101) أو عبر البريد: allowances@qu.edu.qa.' },
          { title: 'المعالجة والإشعار', body: 'تستغرق المعالجة من 5 إلى 7 أيام عمل. ستتلقى بريداً إلكترونياً تأكيدياً فور تفعيل البدل.' },
        ]
      },
      {
        id: 'deductions', icon: 'fa-circle-minus', color: 'var(--qu-gold)', bg: 'rgba(196,146,42,0.08)',
        title: 'استفسار وتظلم في الاستقطاعات', badge: 'badge-amber', badgeLabel: 'الاستقطاعات',
        desc: 'إذا اعتقدت أن هناك استقطاعاً خاطئاً في راتبك، اتبع هذه الخطوات لرفع تظلم.',
        steps: [
          { title: 'مراجعة قسيمة الراتب', body: 'سجّل دخولك إلى بوابة الخدمة الذاتية وقم بتحميل آخر قسيمة راتب لك. حدّد الاستقطاع الخاطئ أو غير المتوقع.' },
          { title: 'تجميع المستندات المؤيدة', body: 'اجمع أي مستندات ذات صلة تدعم ادعاءك (مثل: موافقات الإجازة، جداول سداد القروض، أو المراسلات السابقة).' },
          { title: 'استيفاء نموذج تظلم الاستقطاع', body: 'حمّل وأكمل نموذج تظلم الاستقطاع المتاح في قسم <a href="/forms" class="underline" style="color:var(--qu-maroon)">النماذج</a>.' },
          { title: 'إرسال الطلب لفريق الرواتب', body: 'أرسل النموذج المكتمل والمستندات إلى deductions@qu.edu.qa مع الإشارة في موضوع الرسالة: "تظلم استقطاع – [رقم الموظف]".' },
          { title: 'المراجعة والرد', body: 'سيراجع فريق الرواتب طلبك ويردّ في غضون 3 إلى 5 أيام عمل مع نتيجة الفحص وأي تصحيحات مطلوبة.' },
        ]
      },

      {
        id: 'data-update', icon: 'fa-user-edit', color: '#10B981', bg: 'rgba(16,185,129,0.08)',
        title: 'تحديث بيانات الموظف', badge: 'badge-green', badgeLabel: 'البيانات',
        desc: 'تحديث البيانات الشخصية أو المصرفية كرقم الحساب البنكي أو العنوان أو بيانات التواصل.',
        steps: [
          { title: 'تسجيل الدخول إلى بوابة الخدمة الذاتية', body: 'ادخل على بوابة الخدمة الذاتية عبر <span class="font-mono text-xs bg-gray-100 px-1 rounded">ess.qu.edu.qa</span> باستخدام بيانات اعتماد جامعة قطر.' },
          { title: 'الانتقال إلى المعلومات الشخصية', body: 'توجّه إلى "ملفي الشخصي" > "المعلومات الشخصية" واختر الحقل الذي تريد تحديثه.' },
          { title: 'تقديم طلب التغيير', body: 'أدخل المعلومات المحدّثة وانقر على "إرسال الطلب". ستتلقى رقم مرجعي لمتابعة الطلب.' },
          { title: 'التحقق من قِبل الموارد البشرية', body: 'في حالة التغييرات الحساسة (الحساب البنكي، الهوية الوطنية)، قد تطلب الموارد البشرية المستندات الأصلية للتحقق.' },
          { title: 'التأكيد', body: 'يتم تأكيد التغييرات في غضون 2 إلى 3 أيام عمل عبر إشعار بريد إلكتروني من hr.records@qu.edu.qa.' },
        ]
      },
      {
        id: 'overtime', icon: 'fa-clock', color: '#8B5CF6', bg: 'rgba(139,92,246,0.08)',
        title: 'العمل الإضافي والتعويضات الإضافية', badge: 'badge-blue', badgeLabel: 'إضافي',
        desc: 'تقديم طلب عمل إضافي أو المطالبة بتعويض إضافي عن العمل خارج أوقات الدوام الرسمي.',
        steps: [
          { title: 'الحصول على إذن مسبق', body: 'يجب الحصول على إذن مسبق من مشرفك المباشر أو رئيس القسم قبل البدء في أي عمل إضافي.' },
          { title: 'تسجيل ساعات العمل الإضافي', body: 'سجّل ساعات العمل الإضافي في نظام الحضور والانصراف. تأكد من إدخال البيانات قبل اليوم العشرين من كل شهر.' },
          { title: 'اعتماد المشرف', body: 'يجب أن يوافق مشرفك على سجل العمل الإضافي في غضون يومي عمل من تاريخ التقديم.' },
          { title: 'المعالجة في كشف الرواتب', body: 'يُدرج العمل الإضافي المعتمد تلقائياً في احتساب الراتب الشهري التالي وفق المعدل المعتمد.' },
          { title: 'مراجعة قسيمة الراتب', body: 'تحقق من مبلغ العمل الإضافي في قسيمة راتبك الشهرية. لأي فروقات، تواصل مع overtime@qu.edu.qa.' },
        ]
      },
    ],

    // FORMS
    formsTitle: 'النماذج والوثائق',
    formsSubtitle: 'تحميل نماذج الرواتب والموارد البشرية الرسمية. استخدم دائماً الإصدار الأحدث.',
    formsWarning: 'يُرجى دائماً تقديم النماذج الأصلية الموقّعة إلى الموارد البشرية',
    formsCount: 'نماذج',
    btnDownload: 'تحميل',
    formsNeedMore: 'لا تجد النموذج المطلوب؟',
    formsNeedMoreBody: 'تواصل مع قسم الرواتب على <strong>payroll@qu.edu.qa</strong> أو اتصل على داخلي <strong>4100</strong> وسنوفّر لك النموذج المطلوب خلال يوم عمل واحد.',
    formCategories: [
      { category: 'البدلات', icon: 'fa-hand-holding-dollar', color: 'var(--qu-maroon)', forms: [
        { title: 'نموذج طلب بدل السكن', desc: 'للموظفين الراغبين في الحصول على بدل السكن أو تحديث نوع السكن.', ref: 'PR-F-001', version: 'المراجعة 3، 2025' },
        { title: 'طلب بدل المواصلات', desc: 'طلب الحصول على بدل المواصلات الشهري أو تعديله.', ref: 'PR-F-002', version: 'المراجعة 2، 2024' },
        { title: 'نموذج طلب بدل التعليم', desc: 'طلب بدل التعليم للمعالين المقيّدين في مؤسسات معتمدة.', ref: 'PR-F-003', version: 'المراجعة 1، 2024' },
        { title: 'طلب بدل الأثاث', desc: 'بدل أثاث لمرة واحدة للموظفين الجدد أو المنقولين.', ref: 'PR-F-004', version: 'المراجعة 1، 2023' },
      ]},
      { category: 'الاستقطاعات والقروض', icon: 'fa-circle-minus', color: 'var(--qu-gold)', forms: [
        { title: 'نموذج تظلم استقطاع الراتب', desc: 'رفع اعتراض رسمي على استقطاع خاطئ أو غير متوقع من الراتب.', ref: 'PR-F-010', version: 'المراجعة 2، 2025', file: '' },
        { title: 'نموذج طلب سلفة الراتب', desc: 'طلب سلفة من الراتب مع تحديد شروط السداد.', ref: 'PR-F-011', version: 'المراجعة 3، 2024', file: '' },
        { title: 'طلب قرض الموظفين', desc: 'طلب قرض بدون فوائد وفق سياسة الموارد البشرية بجامعة قطر.', ref: 'PR-F-012', version: 'المراجعة 1، 2024', file: '' },
        { title: 'طلب جدول سداد القرض', desc: 'طلب تعديل جدول سداد قرض قائم. يُرفق نموذج طلب الإعفاء من الرسوم الدراسية (HR-17) عند الانطباق.', ref: 'PR-F-013', version: 'المراجعة 1، 2023', file: '/static/HR-17-Tuition-Waiver-Request-Form.pdf', attachment: { label: 'HR-17 – نموذج طلب الإعفاء من رسوم الدراسة', file: '/static/HR-17-Tuition-Waiver-Request-Form.pdf' } },
      ]},
      { category: 'الراتب والتعويضات', icon: 'fa-sliders', color: '#3B82F6', forms: [
        { title: 'نموذج طلب مراجعة الراتب', desc: 'طلب رسمي لمراجعة الراتب بناءً على الكفاءة أو الترقية أو التعديل السوقي.', ref: 'PR-F-020', version: 'المراجعة 2، 2025' },
        { title: 'نموذج إعادة تصنيف الدرجة الوظيفية', desc: 'طلب إعادة تصنيف لدرجة وظيفية جديدة عند تغيير الدور الوظيفي.', ref: 'PR-F-021', version: 'المراجعة 1، 2024' },
        { title: 'ترشيح لمكافأة الأداء', desc: 'نموذج يقدمه المشرف لترشيح موظف للحصول على مكافأة أداء.', ref: 'PR-F-022', version: 'المراجعة 1، 2024' },
      ]},
      { category: 'بيانات الموظف والسجلات', icon: 'fa-user-edit', color: '#10B981', forms: [
        { title: 'نموذج تحديث الحساب البنكي', desc: 'تحديث بيانات الحساب البنكي لصرف الراتب. يستلزم خطاب تأكيد من البنك.', ref: 'PR-F-030', version: 'المراجعة 4، 2025' },
        { title: 'نموذج تحديث المعلومات الشخصية', desc: 'تحديث الهوية الوطنية أو جواز السفر أو العنوان أو جهة الاتصال الطارئة.', ref: 'PR-F-031', version: 'المراجعة 2، 2024' },
        { title: 'إشعار تغيير الحالة الأسرية', desc: 'الإبلاغ عن تغييرات في الحالة الاجتماعية أو المعالين أو المستفيدين.', ref: 'PR-F-032', version: 'المراجعة 1، 2024' },
        { title: 'طلب احتساب مكافأة نهاية الخدمة', desc: 'طلب احتساب رسمي لمكافأة نهاية الخدمة قبل تقديم الاستقالة.', ref: 'PR-F-033', version: 'المراجعة 2، 2025' },
      ]},
      { category: 'العمل الإضافي والمدفوعات الخاصة', icon: 'fa-clock', color: '#8B5CF6', forms: [
        { title: 'نموذج مطالبة بالعمل الإضافي', desc: 'تقديم مطالبة بساعات العمل الإضافي المعتمدة التي لم تُسجَّل في النظام بعد.', ref: 'PR-F-040', version: 'المراجعة 2، 2024' },
        { title: 'طلب دفعة استرجاعية', desc: 'طلب سداد لفترة سابقة بسبب خطأ في النظام أو تأخر في المعالجة.', ref: 'PR-F-041', version: 'المراجعة 1، 2024' },
      ]},
    ],

    // FAQs
    faqsTitle: 'الأسئلة الشائعة',
    faqsSubtitle: 'اعثر على إجابات لأكثر الأسئلة شيوعاً حول الرواتب والمستحقات والموارد البشرية.',
    faqsTip: 'لم تجد إجابتك؟',
    faqsTipLink: 'تواصل مع فريق الرواتب',
    faqsTipBody: 'مباشرةً وسنردّ عليك خلال 4 ساعات عمل.',
    faqSections: [
      { category: 'الراتب والمدفوعات', icon: 'fa-money-bill-wave', color: 'var(--qu-maroon)', items: [
        { q: 'متى يُصرف الراتب الشهري؟', a: 'تُعالَج الرواتب وتُضاف إلى حسابات الموظفين البنكية في <strong>اليوم الثامن والعشرين من كل شهر</strong>. إذا صادف هذا اليوم الجمعة أو يوماً رسمياً، يُصرف الراتب في يوم العمل السابق. وفي رمضان، يُصرف الراتب قبل عيد الفطر بخمسة أيام عمل على الأقل.' },
        { q: 'ما هو الموعد النهائي لتطبيق تغييرات الراتب في الشهر الجاري؟', a: 'يجب اعتماد جميع تغييرات الراتب (بدلات جديدة، تعديلات، ترقيات) وإدخالها في النظام بحلول <strong>الخامس عشر من كل شهر</strong> حتى تُحتسب في دورة الرواتب لذلك الشهر. التغييرات المقدَّمة بعد الخامس عشر تُطبَّق في الشهر التالي مع استحقاق استرجاعي إن لزم.' },
        { q: 'لم يُودَع راتبي في الموعد المحدد. ماذا أفعل؟', a: 'أولاً، تحقق مع بنكك من عدم وجود أي تعليق على حسابك. إذا لم يُودَع الراتب بحلول اليوم التاسع والعشرين، تواصل مع فريق الرواتب على <strong>payroll@qu.edu.qa</strong> مع ذكر رقم موظفك واسم البنك ورقم الحساب.' },
        { q: 'كيف يُحتسب راتبي الأساسي؟', a: 'يُحدَّد الراتب الأساسي وفق الدرجة الوظيفية ومستوى التدرج المعرَّف في هيكل التعويضات بجامعة قطر، ويُراجَع سنوياً خلال دورة تقييم الأداء.' },
      ]},
      { category: 'قسائم الراتب والوصول', icon: 'fa-file-invoice-dollar', color: 'var(--qu-gold)', items: [
        { q: 'كيف أطّلع على قسيمة راتبي الشهرية؟', a: 'تتاح قسائم الراتب عبر <strong>بوابة الخدمة الذاتية للموظف (ESS)</strong> على <span class="font-mono text-xs bg-gray-100 px-1 rounded">ess.qu.edu.qa</span>. سجّل دخولك ببيانات الجامعة، ثم انتقل إلى "مستحقاتي" > "قسيمة الراتب" واختر الشهر المطلوب.' },
        { q: 'لا أستطيع الدخول إلى بوابة الخدمة الذاتية. بمن أتصل؟', a: 'تواصل مع مكتب دعم تقنية المعلومات على <strong>ithelpdesk@qu.edu.qa</strong> أو اتصل على داخلي <strong>4500</strong> لمشاكل تسجيل الدخول والوصول.' },
        { q: 'هل يمكنني الحصول على شهادة راتب لأغراض بنكية؟', a: 'نعم. قدّم <strong>طلب شهادة راتب</strong> عبر بوابة الخدمة الذاتية تحت "وثائقي"، أو أرسل طلبك إلى hr.records@qu.edu.qa. تُصدر شهادات الراتب المعيارية خلال <strong>يومَي إلى ثلاثة أيام عمل</strong>.' },
      ]},
      { category: 'البدلات والمزايا', icon: 'fa-hand-holding-dollar', color: '#10B981', items: [
        { q: 'ما البدلات التي يستحقها موظف جامعة قطر؟', a: 'تتوقف المستحقات على عقد التوظيف والدرجة الوظيفية. وتشمل البدلات الشائعة: <strong>بدل السكن</strong> و<strong>بدل المواصلات</strong> و<strong>بدل التعليم</strong> و<strong>بدل تذكرة السفر السنوية</strong> و<strong>بدل الانتقال</strong> للموظفين الدوليين الجدد.' },
        { q: 'متى يظهر البدل المعتمد حديثاً في راتبي؟', a: 'إذا اعتُمد طلب البدل وأُدخل في النظام قبل الخامس عشر من الشهر، يظهر في رواتب نفس الشهر. أما إذا أُدخل بعد الخامس عشر، يظهر في الشهر التالي مع مبلغ استرجاعي عن الفترة الفائتة.' },
        { q: 'هل تخضع البدلات للضريبة؟', a: 'لا تفرض قطر حالياً ضريبة دخل شخصية. غير أن الموظفين من الدول التي لديها اتفاقيات ضريبة دخل عالمية يُنصحون بمراجعة الجهات الضريبية في بلدانهم.' },
      ]},
      { category: 'العمل الإضافي والاستقطاعات', icon: 'fa-clock', color: '#8B5CF6', items: [
        { q: 'كيف يُحتسب أجر العمل الإضافي؟', a: 'يُحتسب العمل الإضافي للموظفين غير الإداريين بمعدل <strong>1.5 × الأجر الساعي للراتب الأساسي</strong> للعمل الإضافي الاعتيادي، و<strong>ضعف المعدل</strong> في أيام الإجازات الرسمية. المعدل الساعي = (الراتب الأساسي الشهري × 12) ÷ (52 × 40 ساعة).' },
        { q: 'لاحظت استقطاعاً غير متوقع في راتبي. كيف أتظلم؟', a: 'حمّل <strong>نموذج تظلم الاستقطاع</strong> من قسم <a href="/forms" class="underline" style="color:var(--qu-maroon)">النماذج</a>، أكمله، وأرسله مع نسخة من قسيمة راتبك إلى <strong>deductions@qu.edu.qa</strong>.' },
        { q: 'ما الاستقطاعات التي تُطبَّق تلقائياً على راتبي؟', a: 'قد تشمل الاستقطاعات المعيارية: <strong>أقساط القروض</strong> و<strong>استرداد السلف</strong> و<strong>استقطاعات الغياب غير المبرر</strong> وأي <strong>استرداد لمبالغ مدفوعة بالزيادة</strong>. جميع الاستقطاعات مُفصَّلة في قسيمة راتبك الشهرية.' },
      ]},
      { category: 'نهاية الخدمة', icon: 'fa-person-walking-arrow-right', color: '#EF4444', items: [
        { q: 'كيف تُحتسب مكافأة نهاية خدمتي؟', a: 'تُحتسب مكافأة نهاية الخدمة بناءً على <strong>الراتب الأساسي عند إنهاء الخدمة</strong> و<strong>إجمالي سنوات العمل</strong>. تُطبَّق الصيغة القياسية وفق قانون العمل القطري: 3 أسابيع من الراتب الأساسي عن كل سنة للسنوات الخمس الأولى، و4 أسابيع عن كل سنة بعدها.' },
        { q: 'متى أستلم راتبي الأخير ومكافأة نهاية الخدمة؟', a: 'تُعالَج مستحقات الراتب الأخير ونهاية الخدمة في غضون <strong>30 يوماً من آخر يوم عمل رسمي</strong>. تستلزم المعالجة إتمام جميع إجراءات التسليم (تقنية المعلومات، المكتبة، الشؤون المالية، إلخ).' },
      ]},
    ],

    // CONTACT
    contactTitle: 'تواصل معنا',
    contactSubtitle: 'تواصل مع الفريق المختص لأي استفسار يخص الرواتب والموارد البشرية. نحن هنا لمساعدتك.',
    contactLocation: 'الموقع', contactLocationVal: 'مبنى الإدارة أ، الطابق الأول، غرفة 101', contactLocationSub: 'الحرم الجامعي الرئيسي لجامعة قطر، الدوحة',
    contactHoursLabel: 'ساعات الدوام', contactHoursVal: 'الأحد – الخميس', contactHoursSub: '7:30 صباحاً – 3:30 مساءً (بتوقيت الخليج)',
    contactPhone: 'الهاتف الرئيسي', contactPhoneVal: '+974 4403 4000', contactPhoneSub: 'اضغط 1 للموارد البشرية والرواتب',
    contactExtLabel: 'داخلي:',
    contactResponseLabel: 'وقت الرد:',
    btnSendEmail: 'إرسال بريد إلكتروني',
    contactDepts: [
      { dept: 'استفسارات الرواتب العامة', icon: 'fa-building-columns', color: 'var(--qu-maroon)', email: 'payroll@qu.edu.qa', ext: '4100 / 4101', desc: 'لأسئلة الراتب العامة وحالة الدفع واستفسارات قسيمة الراتب.', hours: 'أحد–خميس: 7:30 ص – 3:30 م', response: '4 ساعات عمل' },
      { dept: 'البدلات والمزايا', icon: 'fa-hand-holding-dollar', color: 'var(--qu-gold)', email: 'allowances@qu.edu.qa', ext: '4102', desc: 'السكن والمواصلات والتعليم وطلبات بدلات الموظفين الأخرى.', hours: 'أحد–خميس: 8:00 ص – 3:00 م', response: 'يوم عمل واحد' },
      { dept: 'الاستقطاعات والتظلمات', icon: 'fa-circle-minus', color: '#EF4444', email: 'deductions@qu.edu.qa', ext: '4103', desc: 'لاستفسارات استقطاعات الراتب والتظلمات وجداول السداد.', hours: 'أحد–خميس: 8:00 ص – 3:00 م', response: '3–5 أيام عمل' },
      { dept: 'سجلات الموارد البشرية والشهادات', icon: 'fa-file-shield', color: '#10B981', email: 'hr.records@qu.edu.qa', ext: '4110', desc: 'شهادات الراتب وخطابات العمل وتحديث السجلات الشخصية.', hours: 'أحد–خميس: 7:30 ص – 3:30 م', response: '2–3 أيام عمل' },
      { dept: 'التعويضات والمزايا', icon: 'fa-sliders', color: '#3B82F6', email: 'hr.compensation@qu.edu.qa', ext: '4115', desc: 'تعديلات الراتب والتدرج الوظيفي والترقيات واستفسارات هيكل التعويضات.', hours: 'أحد–خميس: 8:00 ص – 2:30 م', response: '2–5 أيام عمل' },
      { dept: 'الدعم التقني (بوابة الخدمة الذاتية)', icon: 'fa-laptop-code', color: '#8B5CF6', email: 'ithelpdesk@qu.edu.qa', ext: '4500', desc: 'مشاكل تسجيل الدخول وصعوبات الوصول للبوابة والاستفسارات التقنية.', hours: 'أحد–خميس: 7:00 ص – 4:00 م', response: '2–4 ساعات عمل' },
    ],
    contactFormTitle: 'أرسل رسالة سريعة',
    contactFormSubtitle: 'أكمل النموذج أدناه وسيتواصل معك الفريق المختص في أقرب وقت.',
    cfName: 'الاسم الكامل', cfNamePh: 'اسمك الكامل',
    cfEmpId: 'رقم الموظف', cfEmpIdPh: 'مثال: QU-12345',
    cfEmail: 'البريد الإلكتروني', cfEmailPh: 'بريدك@qu.edu.qa',
    cfSubject: 'الموضوع / القسم', cfSubjectPh: 'اختر القسم المعني...',
    cfMsg: 'الرسالة', cfMsgPh: 'اكتب استفسارك بالتفصيل...',
    cfPrivacy: 'رسالتك تُعالَج بسرية تامة وأمان.',
    cfSubmit: 'إرسال الرسالة', cfSending: 'جارٍ الإرسال...', cfSent: 'تم الإرسال!',
    required: 'مطلوب',

    // LOGIN
    loginTitle: 'تسجيل دخول الموظف',
    loginSubtitle: 'جامعة قطر – خدمات الرواتب',
    loginUsername: 'رقم الموظف / اسم المستخدم', loginUsernamePh: 'مثال: QU-12345 أو jsmith',
    loginPassword: 'كلمة المرور', loginPasswordPh: 'أدخل كلمة مرورك',
    loginRemember: 'تذكّرني',
    loginForgot: 'نسيت كلمة المرور؟',
    loginBtn: 'تسجيل الدخول', loginBtnLoading: 'جارٍ الدخول...', loginBtnDone: 'مرحباً بك!',
    loginNote1: 'استخدم بيانات اعتماد شبكة جامعة قطر.',
    loginNote2: 'لمشاكل الوصول، تواصل مع',
    loginFaq: 'تصفح الأسئلة الشائعة',
    loginSupport: 'طلب الدعم',

    // 404
    notFoundMsg: 'الصفحة التي تبحث عنها غير موجودة.',
    btnReturnHome: 'العودة إلى الرئيسية',
  }
}

type Lang = 'en' | 'ar'

// ─────────────────────────────────────────────────────────────────────────────
//  LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
const layout = (title: string, content: string, activePage: string, lang: Lang) => {
  const t = T[lang]
  const isRTL = lang === 'ar'
  const otherLang: Lang = lang === 'en' ? 'ar' : 'en'
  const sidebarSide = isRTL ? 'right' : 'left'
  const mainMargin = isRTL ? 'md:mr-64' : 'md:ml-64'
  const borderActive = isRTL ? 'border-right' : 'border-left'

  return `<!DOCTYPE html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title} – ${t.portalTitle}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root {
      --qu-maroon: #8B1A2F;
      --qu-maroon-dark: #6B1223;
      --qu-maroon-light: #A52840;
      --qu-gold: #C4922A;
      --qu-gold-light: #DBA93C;
      --font-body: ${t.fontBody};
    }
    * { scroll-behavior: smooth; box-sizing: border-box; }
    body {
      font-family: var(--font-body);
      background: #F7F8FA;
      color: #2C2C2C;
      direction: ${t.dir};
    }
    /* Arabic specific sizing */
    ${isRTL ? `
    body { font-size: 15px; line-height: 1.8; }
    h1, h2, h3, h4 { font-family: 'Cairo', sans-serif; font-weight: 700; }
    p, span, a, label, button { font-family: 'Tajawal', sans-serif; }
    input, textarea, select { font-family: 'Tajawal', sans-serif; text-align: right; }
    ` : `
    body { font-size: 14px; line-height: 1.6; }
    `}

    /* Sidebar */
    .sidebar {
      background: linear-gradient(180deg, var(--qu-maroon-dark) 0%, var(--qu-maroon) 100%);
      ${sidebarSide}: 0; top: 0;
      position: fixed; height: 100vh; width: 256px; z-index: 50;
    }
    .sidebar-link {
      transition: all 0.2s ease;
      border-${sidebarSide}: 3px solid transparent;
    }
    .sidebar-link:hover,
    .sidebar-link.active {
      background: rgba(255,255,255,0.12);
      border-${sidebarSide}-color: var(--qu-gold);
      color: white;
    }
    .sidebar-link.active { background: rgba(255,255,255,0.18); }

    /* Cards */
    .card {
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.06);
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .card:hover { box-shadow: 0 8px 24px rgba(139,26,47,0.12); transform: translateY(-2px); }

    /* Buttons */
    .btn-primary { background: linear-gradient(135deg, var(--qu-maroon), var(--qu-maroon-light)); color: white; transition: all 0.2s; }
    .btn-primary:hover { background: linear-gradient(135deg, var(--qu-maroon-dark), var(--qu-maroon)); box-shadow: 0 4px 12px rgba(139,26,47,0.35); transform: translateY(-1px); }
    .btn-gold { background: linear-gradient(135deg, var(--qu-gold), var(--qu-gold-light)); color: white; transition: all 0.2s; }
    .btn-gold:hover { box-shadow: 0 4px 12px rgba(196,146,42,0.35); transform: translateY(-1px); }
    .btn-outline { border: 2px solid var(--qu-maroon); color: var(--qu-maroon); transition: all 0.2s; }
    .btn-outline:hover { background: var(--qu-maroon); color: white; }

    /* Topbar */
    .topbar { background: linear-gradient(${isRTL ? '270deg' : '90deg'}, var(--qu-maroon-dark) 0%, var(--qu-maroon) 60%, var(--qu-maroon-light) 100%); }

    /* Search */
    .search-input:focus { box-shadow: 0 0 0 3px rgba(139,26,47,0.2); outline: none; }

    /* Notification badge */
    .notif-badge { background: var(--qu-gold); }

    /* Breadcrumb */
    .breadcrumb-item + .breadcrumb-item::before {
      content: "${isRTL ? '\\\\' : '/'}";
      color: #9CA3AF; margin: 0 6px;
    }

    /* FAQ accordion */
    .faq-content { max-height: 0; overflow: hidden; transition: max-height 0.35s ease; }
    .faq-content.open { max-height: 600px; }
    .faq-icon { transition: transform 0.3s ease; }
    .faq-item.open .faq-icon { transform: rotate(180deg); }

    /* Step connector line */
    .step-line::before {
      content: '';
      position: absolute;
      ${isRTL ? 'right' : 'left'}: 19px;
      top: 40px; bottom: -16px;
      width: 2px;
      background: linear-gradient(to bottom, #D1D5DB, transparent);
    }

    /* Announcement ticker */
    .ticker-wrap { overflow: hidden; }
    .ticker {
      animation: ticker ${isRTL ? '30s linear infinite reverse' : '30s linear infinite'};
      white-space: nowrap; display: inline-block;
    }
    @keyframes ticker { 0% { transform: translateX(100%); } 100% { transform: translateX(-100%); } }

    /* Mobile sidebar */
    .sidebar-overlay { display: none; }
    @media (max-width: 768px) {
      .sidebar {
        transform: translateX(${isRTL ? '100%' : '-100%'});
        transition: transform 0.3s;
      }
      .sidebar.open { transform: translateX(0); }
      .sidebar-overlay.active {
        display: block; position: fixed;
        inset: 0; background: rgba(0,0,0,0.5); z-index: 40;
      }
      .main-content { margin-${sidebarSide}: 0 !important; }
    }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #F1F1F1; }
    ::-webkit-scrollbar-thumb { background: #C4B5C0; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--qu-maroon); }

    /* Page transition */
    .page-content { animation: fadeIn 0.3s ease; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }

    /* Status badges */
    .badge-green { background:#D1FAE5; color:#065F46; }
    .badge-blue  { background:#DBEAFE; color:#1E40AF; }
    .badge-amber { background:#FEF3C7; color:#92400E; }
    .badge-red   { background:#FEE2E2; color:#991B1B; }

    /* Form card accent */
    .form-card { border-${isRTL ? 'right' : 'left'}: 4px solid var(--qu-gold); }

    /* Contact card top accent */
    .contact-card { border-top: 3px solid var(--qu-maroon); }

    /* Language toggle button */
    .lang-btn {
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.3);
      color: white;
      border-radius: 20px;
      padding: 4px 14px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
      transition: all 0.2s;
      letter-spacing: 0.5px;
      font-family: ${isRTL ? "'Tajawal'" : "'Segoe UI'"}, sans-serif;
    }
    .lang-btn:hover {
      background: rgba(255,255,255,0.28);
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    }
    .lang-indicator {
      display: inline-flex; align-items: center; gap: 5px;
    }
    .lang-dot { width:8px; height:8px; border-radius:50%; background:var(--qu-gold); display:inline-block; }

    /* RTL icon flipping for directional icons */
    ${isRTL ? `
    .fa-arrow-right::before { content: "\\f060"; }
    .fa-chevron-right::before { content: "\\f053"; }
    ` : ''}

    @media print {
      .sidebar, .topbar { display:none; }
      .main-content { margin:0 !important; }
    }
  </style>
</head>
<body>

<!-- Mobile Overlay -->
<div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>

<!-- ── SIDEBAR ── -->
<aside class="sidebar flex flex-col shadow-2xl" id="sidebar">
  <!-- Logo -->
  <div class="px-6 py-5 border-b border-white/10">
    <div class="flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
      <div class="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
        <i class="fas fa-university text-white text-lg"></i>
      </div>
      <div class="${isRTL ? 'text-right' : ''}">
        <p class="text-white font-bold text-sm leading-tight">${isRTL ? 'جامعة قطر' : 'Qatar University'}</p>
        <p class="text-white/60 text-xs">${t.navDepartment}</p>
      </div>
    </div>
  </div>

  <!-- Nav Links -->
  <nav class="flex-1 px-3 py-4 overflow-y-auto">
    <p class="text-white/40 text-xs uppercase tracking-widest px-3 mb-2 font-semibold ${isRTL ? 'text-right' : ''}">${t.navMainMenu}</p>

    ${[
      { href: '/', icon: 'fa-home', label: t.navDashboard, page: 'home' },
      { href: '/procedures', icon: 'fa-list-check', label: t.navProcedures, page: 'procedures' },
      { href: '/forms', icon: 'fa-file-alt', label: t.navForms, page: 'forms' },
      { href: '/faqs', icon: 'fa-circle-question', label: t.navFaqs, page: 'faqs' },
      { href: '/contact', icon: 'fa-envelope', label: t.navContact, page: 'contact' },
      { href: '/end-of-service', icon: 'fa-person-walking-arrow-right', label: t.navEOS, page: 'eos' },
      { href: '/promotions', icon: 'fa-ranking-star', label: t.navPromotions, page: 'promotions' },
      { href: '/missions', icon: 'fa-plane-departure', label: t.navMissions, page: 'missions' },
      { href: '/email-templates', icon: 'fa-envelope-open-text', label: t.navEmailTemplates, page: 'email-templates' },
      { href: '/scholarship', icon: 'fa-graduation-cap', label: t.navScholarship, page: 'scholarship' },
      { href: '/sla', icon: 'fa-chart-gantt', label: isRTL ? 'إدارة طلبات SLA' : 'SLA Management', page: 'sla' },
      { href: '/approvals', icon: 'fa-stamp', label: t.navApprovals, page: 'approvals' },
      { href: '/payroll-dept', icon: 'fa-building-columns', label: t.navPayrollDept, page: 'payroll-dept' },
      { href: '/admin/news', icon: 'fa-newspaper', label: isRTL ? 'إدارة الأخبار' : 'News Manager', page: 'admin-news' },
    ].map(item => `
    <a href="${item.href}?lang=${lang}" class="sidebar-link ${activePage === item.page ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1 ${isRTL ? 'flex-row-reverse' : ''}">
      <i class="fas ${item.icon} w-5 text-center flex-shrink-0"></i>
      <span>${item.label}</span>
    </a>`).join('')}

    <div class="border-t border-white/10 mt-4 pt-4">
      <p class="text-white/40 text-xs uppercase tracking-widest px-3 mb-2 font-semibold ${isRTL ? 'text-right' : ''}">${t.navEmployee}</p>
      <a href="/login?lang=${lang}" class="sidebar-link ${activePage === 'login' ? 'active' : ''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm ${isRTL ? 'flex-row-reverse' : ''}">
        <i class="fas fa-user-circle w-5 text-center flex-shrink-0"></i>
        <span>${t.navLogin}</span>
      </a>
    </div>
  </nav>

  <!-- Sidebar Footer -->
  <div class="px-5 py-4 border-t border-white/10 text-center">
    <p class="text-white/40 text-xs">${t.navCopyright}</p>
    <p class="text-white/30 text-xs">${t.navHR}</p>
  </div>
</aside>

<!-- ── MAIN WRAPPER ── -->
<div class="main-content ${mainMargin} flex flex-col min-h-screen">

  <!-- ── TOP BAR ── -->
  <header class="topbar sticky top-0 z-30 flex items-center gap-3 px-4 md:px-6 py-3 shadow-md">
    <!-- Mobile menu toggle -->
    <button onclick="toggleSidebar()" class="md:hidden text-white/80 hover:text-white p-1 flex-shrink-0">
      <i class="fas fa-bars text-lg"></i>
    </button>

    <!-- Breadcrumbs -->
    <div class="hidden md:flex items-center text-white/70 text-sm breadcrumb ${isRTL ? 'flex-row-reverse' : ''}">
      ${activePage !== 'home' ? `
        <a href="/?lang=${lang}" class="breadcrumb-item text-white/60 hover:text-white">${t.navDashboard}</a>
        <span class="breadcrumb-item text-white/90 font-medium">${
          activePage === 'procedures' ? t.navProcedures :
          activePage === 'forms'      ? t.navForms :
          activePage === 'faqs'       ? t.navFaqs :
          activePage === 'contact'    ? t.navContact :
          activePage === 'email-templates' ? t.navEmailTemplates :
          activePage === 'promotions'     ? t.navPromotions :
          activePage === 'missions'       ? t.navMissions :
          activePage === 'eos'            ? t.navEOS :
          activePage === 'sla'            ? (lang === 'ar' ? 'إدارة طلبات SLA' : 'SLA Management') :
          activePage === 'login'      ? t.navLogin : activePage
        }</span>
      ` : `<span class="text-white/90 font-medium">${t.portalTitle}</span>`}
    </div>

    <div class="flex-1"></div>

    <!-- Search Bar -->
    <div class="relative hidden sm:block">
      <input
        type="text"
        id="globalSearch"
        placeholder="${t.searchPlaceholder}"
        onkeyup="globalSearchFn(event)"
        dir="${t.dir}"
        class="search-input w-56 lg:w-72 bg-white/15 text-white placeholder-white/50 border border-white/20 rounded-full px-4 py-1.5 text-sm transition"
      />
      <i class="fas fa-search absolute ${isRTL ? 'left-3' : 'right-3'} top-2.5 text-white/50 text-sm pointer-events-none"></i>
      <div id="searchDropdown" class="hidden absolute top-9 ${isRTL ? 'left-0' : 'right-0'} w-full bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-100"></div>
    </div>

    <!-- Notifications -->
    <div class="relative flex-shrink-0">
      <button onclick="toggleNotif()" class="relative text-white/80 hover:text-white p-2 transition">
        <i class="fas fa-bell text-lg"></i>
        <span class="notif-badge absolute top-1 ${isRTL ? 'left-1' : 'right-1'} w-2 h-2 rounded-full"></span>
      </button>
      <div id="notifPanel" class="hidden absolute ${isRTL ? 'left-0' : 'right-0'} top-10 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50" dir="${t.dir}">
        <div class="px-4 py-3 border-b border-gray-100 flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}">
          <h3 class="font-semibold text-gray-800 text-sm">${t.announcements}</h3>
          <span class="text-xs text-white px-2 py-0.5 rounded-full" style="background:var(--qu-maroon)">3 ${t.announcementsNew}</span>
        </div>
        <div class="divide-y divide-gray-50 max-h-72 overflow-y-auto">
          ${[
            { title: t.notif1Title, body: t.notif1Body, time: t.hoursAgo },
            { title: t.notif2Title, body: t.notif2Body, time: t.dayAgo },
            { title: t.notif3Title, body: t.notif3Body, time: t.daysAgo },
          ].map(n => `
          <div class="px-4 py-3 hover:bg-gray-50 cursor-pointer">
            <p class="text-sm font-medium text-gray-800 ${isRTL ? 'text-right' : ''}">${n.title}</p>
            <p class="text-xs text-gray-500 mt-0.5 ${isRTL ? 'text-right' : ''}">${n.body}</p>
            <p class="text-xs text-gray-400 mt-1 flex items-center gap-1 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
              <i class="fas fa-clock"></i> ${n.time}
            </p>
          </div>`).join('')}
        </div>
        <div class="px-4 py-2 border-t border-gray-100 text-center">
          <a href="#" class="text-xs font-medium" style="color:var(--qu-maroon)">${t.viewAll}</a>
        </div>
      </div>
    </div>

    <!-- Language Toggle -->
    <button onclick="switchLang()" class="lang-btn flex-shrink-0" title="${t.toggleLangLabel}">
      <span class="lang-indicator">
        <span class="lang-dot"></span>
        ${t.toggleLang}
      </span>
    </button>

    <!-- User -->
    <div class="hidden md:flex items-center gap-2 cursor-pointer group flex-shrink-0 ${isRTL ? 'flex-row-reverse' : ''}">
      <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
        <i class="fas fa-user text-white text-sm"></i>
      </div>
      <span class="text-white/80 text-sm group-hover:text-white transition">${t.staffPortal}</span>
    </div>
  </header>

  <!-- ── ANNOUNCEMENT TICKER ── -->
  <div class="py-1.5 px-6 overflow-hidden" style="background:var(--qu-gold)">
    <div class="flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
      <span class="text-white font-bold text-xs uppercase tracking-wide whitespace-nowrap flex-shrink-0">
        <i class="fas fa-bullhorn ${isRTL ? 'ml-1.5' : 'mr-1.5'}"></i>${t.latest}
      </span>
      <div class="overflow-hidden flex-1">
        <div class="ticker text-white text-xs" id="mainTicker">${t.ticker}</div>
      </div>
      <a href="/admin/news?lang=${lang}" title="${isRTL?'إدارة الأخبار':'Manage News'}"
        class="text-white/60 hover:text-white transition flex-shrink-0 ms-2"
        style="font-size:11px">
        <i class="fas fa-pen-to-square"></i>
      </a>
    </div>
  </div>
  <script>
  (function(){
    try{
      const saved = JSON.parse(localStorage.getItem('qu_news_ticker'));
      if(saved && saved.length){
        document.getElementById('mainTicker').innerHTML = saved.join(' &nbsp;|&nbsp; ');
      }
    }catch(e){}
  })();
  </script>

  <!-- ── PAGE CONTENT ── -->
  <main class="flex-1 p-4 md:p-6">
    <div class="page-content" dir="${t.dir}">
      ${content}
    </div>
  </main>

  <!-- ── FOOTER ── -->
  <footer class="bg-white border-t border-gray-100 px-6 py-4">
    <div class="flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-gray-500 ${isRTL ? 'md:flex-row-reverse' : ''}">
      <div class="flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}">
        <i class="fas fa-university" style="color:var(--qu-maroon)"></i>
        <span>${t.footerDept}</span>
      </div>
      <div class="flex items-center gap-4 text-xs flex-wrap justify-center">
        <span>📍 ${t.footerLocation}</span>
        <span>📞 +974 4403 4000</span>
        <span>✉️ payroll@qu.edu.qa</span>
      </div>
    </div>
  </footer>
</div>

<script>
  // ── Lang switch (preserves page) ──
  function switchLang() {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', '${otherLang}');
    window.location.href = url.toString();
  }

  // ── Sidebar toggle ──
  function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('active');
  }

  // ── Notification panel ──
  function toggleNotif() {
    document.getElementById('notifPanel').classList.toggle('hidden');
  }
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#notifPanel') && !e.target.closest('[onclick="toggleNotif()"]'))
      document.getElementById('notifPanel')?.classList.add('hidden');
    if (!e.target.closest('#globalSearch') && !e.target.closest('#searchDropdown'))
      document.getElementById('searchDropdown')?.classList.add('hidden');
  });

  // ── Global search ──
  const searchData = [
    { title: '${t.navProcedures}', desc: '${isRTL ? "أدلة خطوة بخطوة للبدلات والاستقطاعات" : "Step-by-step guides for allowances, deductions"}', url: '/procedures?lang=${lang}', icon: 'fa-list-check' },
    { title: '${t.navForms}', desc: '${isRTL ? "تحميل النماذج الرسمية" : "Download official payroll forms"}', url: '/forms?lang=${lang}', icon: 'fa-file-alt' },
    { title: '${t.navFaqs}', desc: '${isRTL ? "أسئلة شائعة عن الرواتب والمستحقات" : "FAQs about salary and payroll"}', url: '/faqs?lang=${lang}', icon: 'fa-circle-question' },
    { title: '${t.navContact}', desc: '${isRTL ? "بيانات التواصل مع الأقسام المختصة" : "Contact payroll and HR teams"}', url: '/contact?lang=${lang}', icon: 'fa-envelope' },
  ];
  function globalSearchFn(e) {
    const q = e.target.value.toLowerCase().trim();
    const dd = document.getElementById('searchDropdown');
    if (!q) { dd.classList.add('hidden'); return; }
    const res = searchData.filter(d => d.title.toLowerCase().includes(q) || d.desc.toLowerCase().includes(q));
    dd.innerHTML = res.length
      ? res.map(r => \`<a href="\${r.url}" class="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 ${isRTL ? 'flex-row-reverse' : ''}">
          <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style="background:var(--qu-maroon)"><i class="fas \${r.icon}"></i></div>
          <div class="${isRTL ? 'text-right' : ''}"><p class="text-sm font-medium text-gray-800">\${r.title}</p><p class="text-xs text-gray-500">\${r.desc}</p></div></a>\`).join('')
      : '<div class="px-4 py-3 text-sm text-gray-500 ${isRTL ? 'text-right' : ''}">${isRTL ? 'لا توجد نتائج.' : 'No results found.'}</div>';
    dd.classList.remove('hidden');
  }

  // ── FAQ accordion ──
  function toggleFaq(el) {
    const item = el.closest('.faq-item');
    const content = item.querySelector('.faq-content');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-content').classList.remove('open');
    });
    if (!isOpen) { item.classList.add('open'); content.classList.add('open'); }
  }
</script>

<!-- Back to Top Button (global) -->
<button id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" title="${isRTL ? 'العودة للأعلى' : 'Back to top'}"
  class="fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-50 w-11 h-11 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 opacity-0 pointer-events-none hover:scale-110"
  style="background:var(--qu-maroon)">
  <i class="fas fa-arrow-up text-sm"></i>
</button>
<script>
  const _btt = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      _btt.classList.remove('opacity-0','pointer-events-none');
      _btt.classList.add('opacity-100');
    } else {
      _btt.classList.add('opacity-0','pointer-events-none');
      _btt.classList.remove('opacity-100');
    }
  });
</script>
</body>
</html>`
}

// ─────────────────────────────────────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function getLang(c: any): Lang {
  return (c.req.query('lang') === 'ar' ? 'ar' : 'en') as Lang
}

// ─────────────────────────────────────────────────────────────────────────────
//  HOME
// ─────────────────────────────────────────────────────────────────────────────
app.get('/', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const content = `
  <div dir="${isRTL ? 'rtl' : 'ltr'}">
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-gray-800">${t.homeTitle}</h1>
    <p class="text-gray-500 mt-1 text-sm">${t.homeSubtitle}</p>
  </div>

  <!-- Stats -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    ${[
      { icon: 'fa-users', val: t.stat1Value, label: t.stat1Label, bg: 'rgba(139,26,47,0.1)', color: 'var(--qu-maroon)' },
      { icon: 'fa-file-check', val: t.stat2Value, label: t.stat2Label, bg: 'rgba(196,146,42,0.1)', color: 'var(--qu-gold)' },
      { icon: 'fa-calendar-check', val: t.stat3Value, label: t.stat3Label, bg: 'rgba(16,185,129,0.1)', color: '#10B981' },
      { icon: 'fa-headset', val: t.stat4Value, label: t.stat4Label, bg: 'rgba(59,130,246,0.1)', color: '#3B82F6' },
    ].map(s => `
    <div class="card p-5 flex items-center gap-4">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${s.bg}">
        <i class="fas ${s.icon} text-xl" style="color:${s.color}"></i>
      </div>
      <div>
        <p class="text-2xl font-bold text-gray-800">${s.val}</p>
        <p class="text-xs text-gray-500">${s.label}</p>
      </div>
    </div>`).join('')}
  </div>

  <!-- Welcome Banner -->
  <div class="card p-6 mb-6 relative overflow-hidden">
    <div class="absolute ${isRTL ? 'left-0' : 'right-0'} top-0 bottom-0 w-64 opacity-5 flex items-center justify-center pointer-events-none">
      <i class="fas fa-university text-9xl" style="color:var(--qu-maroon)"></i>
    </div>
    <div class="relative z-10 max-w-2xl">
      <div class="flex items-center gap-2 mb-3">
        <span class="w-8 h-0.5 rounded" style="background:var(--qu-gold)"></span>
        <span class="text-xs font-semibold uppercase tracking-widest" style="color:var(--qu-gold)">${t.welcomeTag}</span>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-2">${t.welcomeTitle}</h2>
      <p class="text-gray-600 text-sm leading-relaxed">${t.welcomeBody}</p>
      <div class="flex flex-wrap gap-3 mt-4">
        <a href="/procedures?lang=${lang}" class="btn-primary px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <i class="fas fa-rocket"></i> ${t.btnGetStarted}
        </a>
        <a href="/contact?lang=${lang}" class="btn-outline px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
          <i class="fas fa-headset"></i> ${t.btnContactSupport}
        </a>
      </div>
    </div>
  </div>

  <!-- Quick Access -->
  <h2 class="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2">
    <i class="fas fa-th-large text-sm" style="color:var(--qu-maroon)"></i> ${t.quickAccess}
  </h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
    ${[
      { href: '/procedures', icon: 'fa-list-check', grad: 'linear-gradient(135deg,var(--qu-maroon),var(--qu-maroon-light))', title: t.qa1Title, desc: t.qa1Desc, badge: t.qa1Badge, bc: 'badge-red' },
      { href: '/forms',      icon: 'fa-file-alt',   grad: 'linear-gradient(135deg,var(--qu-gold),var(--qu-gold-light))',       title: t.qa2Title, desc: t.qa2Desc, badge: t.qa2Badge, bc: 'badge-amber' },
      { href: '/faqs',       icon: 'fa-circle-question', grad: 'linear-gradient(135deg,#3B82F6,#60A5FA)',                    title: t.qa3Title, desc: t.qa3Desc, badge: t.qa3Badge, bc: 'badge-blue' },
      { href: '/contact',    icon: 'fa-envelope',   grad: 'linear-gradient(135deg,#10B981,#34D399)',                          title: t.qa4Title, desc: t.qa4Desc, badge: t.qa4Badge, bc: 'badge-green' },
    ].map(q => `
    <a href="${q.href}?lang=${lang}" class="card p-6 text-center group cursor-pointer">
      <div class="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style="background:${q.grad}">
        <i class="fas ${q.icon} text-2xl text-white"></i>
      </div>
      <h3 class="font-bold text-gray-800 mb-1">${q.title}</h3>
      <p class="text-xs text-gray-500 leading-relaxed">${q.desc}</p>
      <span class="inline-block mt-3 text-xs font-semibold px-3 py-1 rounded-full ${q.bc}">${q.badge}</span>
    </a>`).join('')}
  </div>

  <!-- Bottom Row -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-5">
    <!-- Announcements -->
    <div class="card p-5 lg:col-span-2">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-gray-800 flex items-center gap-2">
          <i class="fas fa-bullhorn text-sm" style="color:var(--qu-maroon)"></i> ${t.recentAnnouncements}
        </h3>
        <a href="/admin/news?lang=${lang}" class="text-xs font-semibold flex items-center gap-1 hover:opacity-80 transition" style="color:var(--qu-maroon)">
          <i class="fas fa-pen-to-square text-xs"></i>${isRTL?'تعديل الإعلانات':'Edit Announcements'}
        </a>
      </div>
      <div class="space-y-2" id="homeAnnList">
        ${[
          { title: t.ann1, date: t.ann1Date, badge: 'badge-green', icon: 'fa-money-bill-wave', label: t.ann1Badge },
          { title: t.ann2, date: t.ann2Date, badge: 'badge-amber', icon: 'fa-star-and-crescent', label: t.ann2Badge },
          { title: t.ann3, date: t.ann3Date, badge: 'badge-blue',  icon: 'fa-file-alt', label: t.ann3Badge },
          { title: t.ann4, date: t.ann4Date, badge: 'badge-red',   icon: 'fa-file-contract', label: t.ann4Badge },
        ].map(a => `
        <div class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
            <i class="fas ${a.icon} text-sm" style="color:var(--qu-maroon)"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-800">${a.title}</p>
            <p class="text-xs text-gray-400 mt-0.5"><i class="fas fa-calendar me-1"></i>${a.date}</p>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${a.badge} whitespace-nowrap flex-shrink-0">${a.label}</span>
        </div>`).join('')}
      </div>
      <script>
      (function(){
        const BADGE_BG_H = {'badge-green':'#ECFDF5','badge-amber':'#FFFBEB','badge-blue':'#EFF6FF','badge-red':'#FEF2F2','badge-purple':'#EDE9FE','badge-cyan':'#CFFAFE'};
        const BADGE_CL_H = {'badge-green':'#059669','badge-amber':'#D97706','badge-blue':'#2563EB','badge-red':'#DC2626','badge-purple':'#7C3AED','badge-cyan':'#0891B2'};
        try{
          const saved = JSON.parse(localStorage.getItem('qu_announcements'));
          if(saved && saved.length){
            const list = document.getElementById('homeAnnList');
            list.innerHTML = saved.map(a=>\`
              <div class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer">
                <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
                  <i class="fas \${a.icon} text-sm" style="color:var(--qu-maroon)"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-medium text-gray-800">\${a.title}</p>
                  <p class="text-xs text-gray-400 mt-0.5"><i class="fas fa-calendar me-1"></i>\${a.date}</p>
                </div>
                <span class="text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
                  style="background:\${BADGE_BG_H[a.bg]||'#EFF6FF'};color:\${BADGE_CL_H[a.bg]||'#2563EB'}">\${a.badge}</span>
              </div>\`).join('');
          }
        }catch(e){}
      })();
      </script>
    </div>

    <!-- Calendar + Contact -->
    <div class="flex flex-col gap-5">
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-3">
          <i class="fas fa-calendar-alt text-sm" style="color:var(--qu-maroon)"></i> ${t.payrollCalendar}
        </h3>
        <div class="space-y-2 text-sm">
          ${[
            { month: t.calMonth1, date: t.calDate1 },
            { month: t.calMonth2, date: t.calDate2 },
            { month: t.calMonth3, date: t.calDate3 },
          ].map(m => `
          <div class="flex items-center justify-between py-2 border-b border-gray-50">
            <span class="text-gray-600 font-medium">${m.month}</span>
            <span class="text-xs font-semibold px-3 py-1 rounded-full badge-blue">${m.date}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-3">
          <i class="fas fa-phone text-sm" style="color:var(--qu-maroon)"></i> ${t.emergencyContact}
        </h3>
        <div class="space-y-2 text-sm text-gray-600">
          ${[
            { icon: 'fa-envelope', text: 'payroll@qu.edu.qa' },
            { icon: 'fa-phone', text: t.contactExt },
            { icon: 'fa-clock', text: t.contactHours },
          ].map(e => `
          <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
            <i class="fas ${e.icon} text-xs flex-shrink-0" style="color:var(--qu-maroon)"></i>
            <span class="text-xs">${e.text}</span>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
  </div>`

  return c.html(layout(t.homeTitle, content, 'home', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  PROCEDURES
// ─────────────────────────────────────────────────────────────────────────────
app.get('/procedures', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const content = `
  <div dir="${isRTL ? 'rtl' : 'ltr'}">
  <div class="mb-6 flex items-center justify-between flex-wrap gap-3">
    <div>
      <h1 class="text-2xl font-bold text-gray-800">${t.procTitle}</h1>
      <p class="text-gray-500 mt-1 text-sm">${t.procSubtitle}</p>
    </div>
    <div class="flex items-center gap-3 flex-wrap">
      <a href="/allowances?lang=${lang}" class="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2" style="background:linear-gradient(135deg,var(--qu-maroon),var(--qu-maroon-light))">
        <i class="fas fa-coins"></i> ${t.procViewAllowances}
      </a>
      <a href="/forms?lang=${lang}" class="btn-gold px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-white">
        <i class="fas fa-file-alt"></i> ${t.procGoForms}
      </a>
    </div>
  </div>

  <div class="space-y-5">
    ${t.procedures.map(proc => `
    <div class="card overflow-hidden" id="${proc.id}">
      <div class="px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition" onclick="this.nextElementSibling.classList.toggle('hidden')">
        <div class="min-w-0">
          <div class="flex items-center gap-2 mb-0.5">
            <h3 class="font-bold text-gray-800">${proc.title}</h3>
            <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${proc.badge} whitespace-nowrap">${proc.badgeLabel}</span>
          </div>
          <p class="text-sm text-gray-500">${proc.desc}</p>
        </div>
        <i class="fas fa-chevron-down text-gray-400 flex-shrink-0"></i>
      </div>
      <div class="hidden px-6 pb-6 bg-gray-50/50 border-t border-gray-100">
        <div class="pt-5 space-y-4">
          ${proc.steps.map((step: any, i: number) => `
          <div class="relative step-line last:before:hidden flex items-start gap-4">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm z-10 shadow-sm" style="background:${proc.color}">
              ${isRTL ? (proc.steps.length - i) : (i + 1)}
            </div>
            <div class="flex-1 pt-1 pb-2">
              <h4 class="font-semibold text-gray-800 text-sm mb-1">${step.title}</h4>
              <p class="text-gray-600 text-sm leading-relaxed">${step.body}</p>
            </div>
          </div>`).join('')}
        </div>
        <div class="mt-5 pt-4 border-t border-gray-200 flex items-center gap-3 flex-wrap">
          <a href="/forms?lang=${lang}" class="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <i class="fas fa-download"></i> ${t.procDownload}
          </a>
          <a href="/contact?lang=${lang}" class="btn-outline px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <i class="fas fa-headset"></i> ${t.procHelp}
          </a>
        </div>
      </div>
    </div>`).join('')}
  </div>

  </div>`

  return c.html(layout(t.procTitle, content, 'procedures', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  ALLOWANCES – صفحة البدلات الشاملة
// ─────────────────────────────────────────────────────────────────────────────
app.get('/allowances', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  /* ─── بيانات البدلات ─────────────────────────────────────── */
  const allowancesData = {
    ar: {
      pageTitle: 'دليل البدلات الشامل',
      pageSubtitle: 'جميع البدلات المستحقة لموظفي الحكومة القطرية وفق قانون رقم (15) لسنة 2016 المعدَّل بالقانون رقم (25) لسنة 2025 وقرار مجلس الوزراء رقم (34) لسنة 2025',
      legalBannerTitle: 'المرجع القانوني',
      legalBannerBody: 'تستند جميع البدلات المدرجة في هذه الصفحة إلى <strong>قانون الموارد البشرية المدنية رقم (15) لسنة 2016</strong> وتعديلاته بموجب <strong>القانون رقم (25) لسنة 2025</strong> وقرار مجلس الوزراء رقم (34) لسنة 2025، الصادر بتاريخ 7 أكتوبر 2025 والنافذ بتاريخ 21 نوفمبر 2025.',
      noteNonQatari: '* يخضع الموظف غير القطري لشروط عقد التوظيف والحدود المنصوص عليها في اللائحة.',
      sectionLabel: 'المادة القانونية',
      whoLabel: 'الفئة المستحقة',
      condLabel: 'الشروط والضوابط',
      calcLabel: 'طريقة الاحتساب / المبالغ',
      formLabel: 'النموذج المطلوب',
      downloadBtn: 'تحميل النموذج',
      requestBtn: 'طلب البدل',
      backBtn: 'العودة للإجراءات',
      printBtn: 'طباعة الدليل',
      allowances: [
        {
          id: 'social',
          icon: 'fa-people-roof',
          color: '#8B1A2F',
          bg: 'rgba(139,26,47,0.08)',
          badge: 'badge-red',
          badgeLabel: 'أولوية عالية',
          title: 'العلاوة الاجتماعية',
          legalRef: 'المادة (19) – قرار مجلس الوزراء رقم (34) لسنة 2025',
          law: 'قرار م.و. 34/2025 – م.19',
          whoEligible: 'الموظف القطري فقط',
          description: 'علاوة شهرية تُمنح للموظف القطري تقديراً لالتزاماته الأسرية والاجتماعية، وتختلف قيمتها بحسب الدرجة الوظيفية والحالة الاجتماعية.',
          amounts: [
            { label: 'الدرجة السابعة فأعلى – متزوج أو يعول أولاده', value: '6,400 ريال / شهر', highlight: true },
            { label: 'الدرجة السابعة فأعلى – أعزب', value: '4,000 ريال / شهر', highlight: false },
            { label: 'الدرجات الأخرى (أقل من السابعة) – متزوج أو يعول', value: '4,000 ريال / شهر', highlight: true },
            { label: 'الدرجات الأخرى – أعزب', value: '2,560 ريال / شهر', highlight: false },
            { label: 'المطلقة الحاضنة لأولادها', value: 'تُمنح بفئة متزوج', highlight: true },
          ],
          conditions: [
            'يجب أن يكون الموظف قطري الجنسية.',
            'الموظف المتزوج: يُشترط وجود عقد زواج ساري.',
            'الموظف الذي يعول أولاده: يُثبت ذلك بوثائق رسمية (شهادة ميلاد، وثيقة حضانة).',
            'المطلقة الحاضنة: تقديم حكم الحضانة الصادر من المحكمة.',
            'في حالة الزوجين القطريين الموظفَيْن: يستحق كلٌّ منهما العلاوة الاجتماعية بفئة متزوج كاملةً، إذ لا يؤثر عمل أحدهما على استحقاق الآخر وفق العلاوة الاجتماعية.',
            'تُستقطع العلاوة عند تجاوز مدة الإجازة بدون راتب.',
          ],
          note: 'تُعدّ العلاوة الاجتماعية جزءاً من "الراتب الإجمالي" وتدخل في احتساب مكافأة نهاية الخدمة.',
          formRef: 'PR-F-001 – نموذج طلب / تحديث العلاوة الاجتماعية',
        },
        {
          id: 'housing',
          icon: 'fa-house-chimney',
          color: '#C4922A',
          bg: 'rgba(196,146,42,0.08)',
          badge: 'badge-amber',
          badgeLabel: 'القطريون وغير القطريين',
          title: 'بدل السكن',
          legalRef: 'المادة (20) – قرار مجلس الوزراء رقم (34) لسنة 2025',
          law: 'قرار م.و. 34/2025 – م.20',
          whoEligible: 'الموظف القطري + الموظف غير القطري (وفق العقد)',
          description: 'بدل شهري لتغطية تكاليف السكن، يختلف بحسب الدرجة الوظيفية والحالة الاجتماعية، ولا يُمنح إذا خُصِّص للموظف سكن حكومي عيني.',
          amounts: [
            { label: 'الدرجة الأولى فأعلى – متزوج أو يعول', value: '6,000 ريال / شهر', highlight: true },
            { label: 'الدرجة الأولى فأعلى – أعزب', value: '3,500 ريال / شهر', highlight: false },
            { label: 'من الدرجة السابعة إلى الثانية – متزوج أو يعول', value: '4,000 ريال / شهر', highlight: true },
            { label: 'من الدرجة السابعة إلى الثانية – أعزب', value: '2,500 ريال / شهر', highlight: false },
            { label: 'الدرجات الأخرى (أقل من السابعة) – متزوج أو يعول', value: '3,000 ريال / شهر', highlight: true },
            { label: 'الدرجات الأخرى – أعزب', value: '1,500 ريال / شهر', highlight: false },
            { label: 'الوظائف الحرفية والعمالية (غير القطريين)', value: '800 ريال / شهر', highlight: false },
            { label: 'المطلقة الحاضنة لأولادها', value: 'تُمنح بفئة متزوج', highlight: true },
          ],
          conditions: [
            'لا يُمنح البدل إذا خُصِّص للموظف أو لزوجه سكن حكومي عيني.',
            'في حالة الزوجين من موظفي الجهات الحكومية: يُمنح البدل بفئة متزوج للأعلى استحقاقاً، والآخر بفئة أعزب.',
            'إذا كان أحد الزوجين يعمل في جهة تمول موازنتها من الدولة (بأكثر من 50%) ويتقاضى بدل متزوج، يُمنح البدل للزوج الحكومي بفئة أعزب.',
            'في حالة تعدد الزوجات: تُمنح الزوجات الموظفات غير المستفيدات من السكن الحكومي بدل أعزب.',
            'الموظف غير القطري: يُمنح البدل وفق عقد التوظيف وبحدود هذه المادة.',
            'لا يحول انتفاع الموظف بأحكام قانون الإسكان عن صرف البدل المستحق.',
          ],
          note: 'بدل السكن جزء من "الراتب الإجمالي" ويدخل في احتساب مكافأة نهاية الخدمة وفق قانون العمل القطري.',
          formRef: 'PR-F-002 – نموذج طلب بدل السكن',
        },
        {
          id: 'transport',
          icon: 'fa-car-side',
          color: '#3B82F6',
          bg: 'rgba(59,130,246,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'جميع الموظفين',
          title: 'بدل التنقل',
          legalRef: 'المادة (26) – قانون رقم (25) لسنة 2025 + المادة (34) من اللائحة التنفيذية',
          law: 'ق. 25/2025 – م.26 / ل.ت. م.34',
          whoEligible: 'جميع الموظفين وفق التصنيف الوظيفي',
          description: 'بدل شهري لتغطية تكاليف التنقل من وإلى العمل. يُضاف إليه "بدل استخدام السيارة الخاصة" لمن تقتضي طبيعة عمله التنقل بسيارته الخاصة.',
          amounts: [
            { label: 'استخدام بسيط للسيارة الخاصة في العمل', value: '1,000 ريال / شهر', highlight: false },
            { label: 'استخدام متوسط للسيارة الخاصة في العمل', value: '1,500 ريال / شهر', highlight: false },
            { label: 'استخدام مرتفع للسيارة الخاصة في العمل', value: '2,000 ريال / شهر', highlight: true },
            { label: 'بدل التنقل الأساسي', value: 'يُحدَّد وفق جدول الدرجات', highlight: false },
          ],
          conditions: [
            'بدل استخدام السيارة الخاصة: يشترط أن تقتضي طبيعة العمل التنقل بالسيارة وألا تكون الجهة قد وفّرت سيارة رسمية.',
            'يُحدَّد مستوى الاستخدام (بسيط/متوسط/مرتفع) وفق طبيعة العمل والمهام الموكولة بقرار من الرئيس.',
            'لا يدخل بدل استخدام السيارة الخاصة في حساب الراتب الإجمالي المستحق عن مدد الإجازات.',
            'يُصرف بدل التنقل بصفة شهرية مع الراتب.',
          ],
          note: 'لا يُجمَع بين بدل التنقل الأساسي وبدل استخدام السيارة الخاصة إلا إذا نصّت اللائحة الداخلية على خلاف ذلك.',
          formRef: 'PR-F-003 – نموذج طلب بدل التنقل / السيارة الخاصة',
        },
        {
          id: 'representation',
          icon: 'fa-award',
          color: '#8B5CF6',
          bg: 'rgba(139,92,246,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'بحسب الدرجة والمهمة',
          title: 'بدل التمثيل',
          legalRef: 'المادة (26) – قانون رقم (25) لسنة 2025 + اللائحة التنفيذية',
          law: 'ق. 25/2025 – م.26 / ل.ت.',
          whoEligible: 'الموظفون المُوفَدون في مهام رسمية خارج الدولة',
          description: 'بدل يومي يُصرف للموظف خلال فترة المهمة الرسمية خارج قطر، ويختلف بحسب درجة الموظف وما إذا كان السكن مؤمَّناً أم لا.',
          amounts: [
            { label: 'موظف قطري – يومي (مع سكن مؤمَّن)', value: 'يُحدَّد وفق جدول الدرجات', highlight: false },
            { label: 'موظف غير قطري – حرفي/عمالي – يومي', value: '300 ريال / يوم', highlight: false },
            { label: 'موظف غير قطري – حرفي/عمالي – بدون سكن', value: '1,500 ريال / يوم', highlight: true },
            { label: 'تذاكر سفر – الدرجة الأولى فأعلى', value: 'درجة أولى', highlight: true },
            { label: 'تذاكر سفر – دون الدرجة الأولى', value: 'درجة رجال الأعمال / اقتصادية', highlight: false },
          ],
          conditions: [
            'يُشترط وجود قرار تكليف رسمي بالمهمة الخارجية.',
            'يُحدَّد البدل اليومي وفق جدول الدرجات والدولة المُوفَد إليها.',
            'في حالة عدم توفير السكن: يُرفع البدل اليومي وفق المعدلات المقررة.',
            'تُحدَّد فئة تذكرة السفر بحسب الدرجة الوظيفية.',
          ],
          note: 'لا يدخل بدل التمثيل في حساب مكافأة نهاية الخدمة.',
          formRef: 'PR-F-004 – نموذج طلب بدل التمثيل والمهمة الرسمية',
        },
        {
          id: 'nature',
          icon: 'fa-helmet-safety',
          color: '#EF4444',
          bg: 'rgba(239,68,68,0.08)',
          badge: 'badge-red',
          badgeLabel: 'وظائف محددة',
          title: 'بدل طبيعة العمل',
          legalRef: 'المادة (26) – ق. 25/2025 + قرار رئيس م.و. رقم (25) لسنة 2025 بضوابط بدل طبيعة العمل',
          law: 'ق. 25/2025 – م.26 / قرار رئيس م.و. 25/2025',
          whoEligible: 'الموظفون المثبَّتون في وظائف ذات طبيعة خاصة (أمن، صحة، ميدان...)',
          description: 'بدل شهري للوظائف التي تنطوي على مخاطر أو ظروف استثنائية كالعمل الميداني وأعمال الأمن والسلامة والرعاية الصحية وغيرها.',
          amounts: [
            { label: 'بدل طبيعة العمل (نسبة من الراتب الأساسي)', value: 'تُحدَّد وفق جدول المهن والوظائف', highlight: false },
            { label: 'بدل طبيعة عمل إضافي (للقطريين)', value: 'نسبة إضافية حسب الجدول المرفق', highlight: true },
            { label: 'الحد الأقصى المقرر للبدل', value: 'يُحدَّد وفق قرار رئيس م.و. 25/2025', highlight: false },
          ],
          conditions: [
            'أن تكون الوظيفة معتمدة ضمن تشكيلات ميزانية الجهة لمجال البدل.',
            'أن يكون الموظف مثبَّتاً على الوظيفة بصفة أصلية ويزاول عملها فعلاً وبصورة مستمرة.',
            'للأمن والسلامة: يشترط العمل الميداني بنظام الورديات وألا يكون للموظف سكن عيني في المبنى المحروس.',
            'لا يُجمَع البدل مع بدلات مماثلة إلا بنص صريح.',
            'يُوقف البدل خلال فترات الإجازة بدون راتب وإجازة المرافقة.',
            'يُراجَع استحقاق البدل سنوياً وفق نتائج التفتيش والرقابة.',
          ],
          note: 'يُحدَّد الجدول التفصيلي للوظائف المستحقة للبدل بقرار من رئيس مجلس الوزراء.',
          formRef: 'PR-F-005 – نموذج إثبات استحقاق بدل طبيعة العمل',
        },
        {
          id: 'overtime',
          icon: 'fa-clock-rotate-left',
          color: '#10B981',
          bg: 'rgba(16,185,129,0.08)',
          badge: 'badge-green',
          badgeLabel: 'بقرار تكليف',
          title: 'بدل العمل الإضافي',
          legalRef: 'المادة (32) – قرار مجلس الوزراء رقم (34) لسنة 2025',
          law: 'قرار م.و. 34/2025 – م.32',
          whoEligible: 'جميع الموظفين عند التكليف الرسمي',
          description: 'بدل مالي عن ساعات العمل الإضافية المكلَّف بها الموظف بقرار من الرئيس التنفيذي، محدَّد بسقف شهري للقطريين وغير القطريين.',
          amounts: [
            { label: 'معدل ساعة العمل الإضافية (أيام عادية)', value: 'ساعة ونصف × الأجر الساعي (1.25)', highlight: false },
            { label: 'معدل ساعة العمل الإضافية (عطل ومناسبات)', value: 'ساعة ونصف × الأجر الساعي (1.5)', highlight: true },
            { label: 'حد أقصى يومي – أيام العمل العادية', value: '3 ساعات / يوم', highlight: false },
            { label: 'حد أقصى يومي – عطل رسمية وأسبوعية', value: '8 ساعات / يوم', highlight: false },
            { label: 'سقف شهري للموظف القطري', value: '40% من الراتب بحد أقصى 10,000 ريال', highlight: true },
            { label: 'سقف شهري للموظف غير القطري', value: '20% من الراتب بحد أقصى 5,000 ريال', highlight: false },
            { label: 'بديل إجازة (بناءً على طلب الموظف)', value: 'يوم إجازة عن كل 7 ساعات (حد أقصى 15 يوم/سنة)', highlight: false },
          ],
          conditions: [
            'يستلزم قرار تكليف رسمي من الرئيس التنفيذي بناءً على اقتراح مدير الإدارة.',
            'لا يجوز تكليف أكثر من 10% من موظفي الجهة بالعمل الإضافي في آنٍ واحد (باستثناء الدرجة الثامنة فأدنى).',
            'لا تتجاوز مدة التكليف بالعمل الإضافي ستة أشهر خلال السنة الواحدة.',
            'إجازة البديل: يُلزَم الموظف بأخذها خلال السنة ذاتها أو ترحيلها للسنة التالية فقط.',
            'لا يُصرف البدل للموظف الذي اختار إجازة بديلاً عن المبلغ النقدي.',
          ],
          note: 'الأجر الساعي = (الراتب الأساسي الشهري × 12) ÷ (52 أسبوع × 40 ساعة).',
          formRef: 'PR-F-040 – نموذج مطالبة بدل العمل الإضافي',
        },
        {
          id: 'performance',
          icon: 'fa-trophy',
          color: '#F59E0B',
          bg: 'rgba(245,158,11,0.08)',
          badge: 'badge-amber',
          badgeLabel: 'للقطريين – حسب الأداء',
          title: 'حافز الأداء السنوي',
          legalRef: 'المادة (35 مكرراً/1) المُضافة – قرار مجلس الوزراء رقم (34) لسنة 2025',
          law: 'قرار م.و. 34/2025 – م.35 مكرر/1',
          whoEligible: 'الموظف القطري – بحسب تقييم الأداء السنوي',
          description: 'حافز سنوي مرتبط بمستوى الأداء الوظيفي المُقيَّم وفق نظام منحنى التوزيع الطبيعي المعتمد حديثاً في القانون 25/2025.',
          amounts: [
            { label: 'مستوى أداء استثنائي (Exceptional)', value: 'ما يعادل راتبَيْن أساسيَّيْن شهريَّيْن', highlight: true },
            { label: 'مستوى أداء يتجاوز التوقعات (Exceeds Expectations)', value: 'ما يعادل راتباً أساسياً شهرياً واحداً', highlight: false },
            { label: 'مستوى أداء يحقق التوقعات أو دون ذلك', value: 'لا يستحق الحافز', highlight: false },
          ],
          conditions: [
            'يخضع لتوفر الاعتماد المالي لدى الجهة الحكومية.',
            'الحد الأقصى للموظفين بتقييم "استثنائي": 20% من إجمالي موظفي الجهة.',
            'الحد الأقصى للموظفين بتقييم "يتجاوز التوقعات": 25% من إجمالي موظفي الجهة.',
            'لا يُصرف الحافز إذا تجاوزت مجموع إجازات الموظف 3 أشهر خلال السنة (باستثناء الدورية والعارضة).',
            'لا يسري على الجهات ذات أنظمة تقييم خاصة مغايرة.',
          ],
          note: 'يُعدّ هذا الحافز مستقلاً عن العلاوة الدورية ولا يُعوِّض عنها.',
          formRef: 'لا يتطلب نموذجاً – يُصرف تلقائياً بعد اعتماد تقييم الأداء',
        },
        {
          id: 'supervisory',
          icon: 'fa-sitemap',
          color: '#6366F1',
          bg: 'rgba(99,102,241,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'للقادة القطريين',
          title: 'حافز الأداء الإشرافي',
          legalRef: 'المادة (35 مكرراً) المُضافة – قرار مجلس الوزراء رقم (34) لسنة 2025',
          law: 'قرار م.و. 34/2025 – م.35 مكرر',
          whoEligible: 'الموظف القطري الذي يشغل وظيفة قيادية أو إشرافية',
          description: 'حافز أداء سنوي مخصص للمناصب الإشرافية والقيادية، مرتبط بمستوى الأداء ونوع المنصب.',
          amounts: [
            { label: 'وكيل وزارة مساعد – استثنائي', value: '120,000 ريال / سنة', highlight: true },
            { label: 'وكيل وزارة مساعد – يتجاوز التوقعات', value: '60,000 ريال / سنة', highlight: false },
            { label: 'مدير إدارة – استثنائي', value: '96,000 ريال / سنة', highlight: true },
            { label: 'مدير إدارة – يتجاوز التوقعات', value: '48,000 ريال / سنة', highlight: false },
            { label: 'مساعد مدير إدارة – استثنائي', value: '72,000 ريال / سنة', highlight: false },
            { label: 'مساعد مدير إدارة – يتجاوز التوقعات', value: '36,000 ريال / سنة', highlight: false },
            { label: 'رئيس قسم – استثنائي', value: '60,000 ريال / سنة', highlight: false },
            { label: 'رئيس قسم – يتجاوز التوقعات', value: '30,000 ريال / سنة', highlight: false },
          ],
          conditions: [
            'يشترط شغل الوظيفة القيادية/الإشرافية لمدة لا تقل عن 6 أشهر خلال السنة المستحق عنها الحافز.',
            'لا يُصرف الحافز إذا تجاوزت مجموع إجازات الموظف 3 أشهر (باستثناء الدورية والعارضة).',
            'خاضع لتوفر الاعتماد المالي بقرار من الرئيس التنفيذي.',
            'لا يسري على الجهات ذات أنظمة تقييم أداء خاصة مغايرة.',
          ],
          note: 'يُصرف هذا الحافز بشكل مستقل عن حافز الأداء الفردي ويمكن الجمع بينهما.',
          formRef: 'لا يتطلب نموذجاً – يُصرف بقرار من الرئيس التنفيذي',
        },
        {
          id: 'marriage',
          icon: 'fa-heart',
          color: '#EC4899',
          bg: 'rgba(236,72,153,0.08)',
          badge: 'badge-red',
          badgeLabel: 'للقطريين المتزوجين',
          title: 'حافز الزواج السنوي',
          legalRef: 'المادة (19 مكرراً) المُضافة – قرار مجلس الوزراء رقم (34) لسنة 2025',
          law: 'قرار م.و. 34/2025 – م.19 مكرر',
          whoEligible: 'الموظف القطري المتزوج من قطرية (الزوج والزوجة معاً)',
          description: 'حافز سنوي يُصرف في أول يناير من كل عام للموظفين القطريين المتزوجين من بعضهم، تشجيعاً على الزواج القطري.',
          amounts: [
            { label: 'حافز الزواج السنوي – لكل من الزوج والزوجة', value: '12,000 ريال / سنة (يُصرف للاثنين)', highlight: true },
          ],
          conditions: [
            'أن يكون كلا الزوجين قطريَّي الجنسية.',
            'أن يكون قد مضى على الزواج سنة كاملة على الأقل.',
            'يُصرف الحافز لكل من الزوج والزوجة إذا كانا موظفَيْن حكومييَّن.',
            'يُوقف صرف الحافز فور انتهاء رابطة الزواج (طلاق أو وفاة).',
            'يُشترط انقضاء سنة على الزواج قبل أول صرف.',
          ],
          note: 'مستجد بموجب قرار م.و. 34/2025 – لم يكن موجوداً في قانون 2016.',
          formRef: 'PR-F-006 – نموذج طلب حافز الزواج',
        },
        {
          id: 'retention',
          icon: 'fa-user-shield',
          color: '#0891B2',
          bg: 'rgba(8,145,178,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'وظائف مستهدفة',
          title: 'بدل الاستقطاب والاحتفاظ',
          legalRef: 'المادة (26 مكرراً) – قانون رقم (25) لسنة 2025',
          law: 'ق. 25/2025 – م.26 مكرر',
          whoEligible: 'الموظف القطري في الوظائف الحرجة والقيادية',
          description: 'بدل مستحدث لجذب واستبقاء الكفاءات القطرية في الوظائف الحرجة والقيادية، ويُحدَّد بنسبة مئوية من الراتب الأساسي.',
          amounts: [
            { label: 'نسبة بدل الاستقطاب والاحتفاظ (الأساسية)', value: '5% من الراتب الأساسي', highlight: false },
            { label: 'نسبة موسّعة (بموافقة مجلس الوزراء)', value: 'حتى 10% من إجمالي الموظفين', highlight: true },
          ],
          conditions: [
            'يخضع لموافقة ديوان الخدمة المدنية وتحديد الوظائف الحرجة المؤهلة.',
            'يُمنح للموظف القطري فقط في أدوار ذات أهمية استراتيجية.',
            'قابل للتوسيع حتى 10% من إجمالي موظفي الجهة بموافقة مجلس الوزراء.',
            'يُراجَع استحقاقه دورياً مع تقييم الأداء.',
          ],
          note: 'مستجد بموجب القانون 25/2025 ضمن إصلاحات التقطير وتحقيق رؤية قطر الوطنية 2030.',
          formRef: 'يُحدَّد بقرار من الجهة المختصة – لا يتطلب نموذجاً فردياً',
        },
        {
          id: 'periodic',
          icon: 'fa-chart-line',
          color: '#7C3AED',
          bg: 'rgba(124,58,237,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'للقطريين سنوياً',
          title: 'العلاوة الدورية (الزيادة السنوية)',
          legalRef: 'المادة (23) المعدَّلة – قانون رقم (25) لسنة 2025',
          law: 'ق. 25/2025 – م.23',
          whoEligible: 'الموظف القطري عند إتمام سنة من آخر علاوة دورية',
          description: 'زيادة سنوية في الراتب الأساسي مرتبطة بتقييم الأداء الوظيفي، تُصرف في أول يناير من كل عام وفق النسب المعتمدة.',
          amounts: [
            { label: 'مستوى أداء استثنائي – نسبة العلاوة', value: '150% من فئة العلاوة الدورية', highlight: true },
            { label: 'مستوى أداء يتجاوز التوقعات', value: '125% من فئة العلاوة الدورية', highlight: false },
            { label: 'مستوى أداء يحقق التوقعات', value: '100% من فئة العلاوة الدورية', highlight: false },
            { label: 'مستوى أداء دون التوقعات', value: '75% من فئة العلاوة الدورية', highlight: false },
            { label: 'مستوى أداء ضعيف', value: 'لا يستحق العلاوة', highlight: false },
            { label: 'فئة العلاوة الدورية', value: 'تُحدَّد وفق جدول الدرجات والرواتب رقم (1)', highlight: false },
          ],
          conditions: [
            'يستحق الموظف العلاوة بعد مضي سنة كاملة من تاريخ التعيين أو من تاريخ آخر علاوة.',
            'يشترط إتمام فترة الاختبار بنجاح.',
            'يُوحَّد موعد الصرف في أول يناير من كل عام (مستجد قانون 2025).',
            'لا يتجاوز الراتب الأساسي نهاية مربوط الدرجة.',
            'في حالة التعيين بعد أول يناير: تُحتسب العلاوة بنسبة المدة المنقضية من السنة.',
          ],
          note: 'هذا تعديل جوهري: قانون 2016 كان يعتمد تقييمات غير موحّدة. قانون 2025 ربط العلاوة الدورية رسمياً بنظام التقييم الكمّي الجديد.',
          formRef: 'لا يتطلب نموذجاً – تُحتسب تلقائياً بعد اعتماد التقييم السنوي',
        },
      ],
    },
    en: {
      pageTitle: 'Comprehensive Allowances Guide',
      pageSubtitle: 'All allowances entitled to Qatar Government employees under Law No. 15 of 2016 as amended by Law No. 25 of 2025 and Council of Ministers Resolution No. 34 of 2025',
      legalBannerTitle: 'Legal Reference',
      legalBannerBody: 'All allowances listed on this page are based on <strong>Civil Human Resources Law No. 15 of 2016</strong> and its amendments under <strong>Law No. 25 of 2025</strong> and Council of Ministers Resolution No. 34 of 2025, issued on 7 October 2025, effective 21 November 2025.',
      noteNonQatari: '* Non-Qatari employees are subject to their employment contract terms and the limits specified in the Executive Regulations.',
      sectionLabel: 'Legal Article',
      whoLabel: 'Eligible Category',
      condLabel: 'Conditions & Rules',
      calcLabel: 'Calculation / Amounts',
      formLabel: 'Required Form',
      downloadBtn: 'Download Form',
      requestBtn: 'Request Allowance',
      backBtn: 'Back to Procedures',
      printBtn: 'Print Guide',
      allowances: [
        {
          id: 'social',
          icon: 'fa-people-roof',
          color: '#8B1A2F',
          bg: 'rgba(139,26,47,0.08)',
          badge: 'badge-red',
          badgeLabel: 'High Priority',
          title: 'Social Allowance',
          legalRef: 'Article (19) – Council of Ministers Resolution No. 34 of 2025',
          law: 'CoM Res. 34/2025 – Art.19',
          whoEligible: 'Qatari employees only',
          description: 'A monthly allowance granted to Qatari employees in recognition of their family and social obligations. The amount varies by job grade and marital status.',
          amounts: [
            { label: 'Grade 7 and above – Married or supporting children', value: 'QR 6,400 / month', highlight: true },
            { label: 'Grade 7 and above – Single', value: 'QR 4,000 / month', highlight: false },
            { label: 'Other grades (below 7) – Married or supporting children', value: 'QR 4,000 / month', highlight: true },
            { label: 'Other grades – Single', value: 'QR 2,560 / month', highlight: false },
            { label: 'Divorced woman with custody of children', value: 'Granted at married rate', highlight: true },
          ],
          conditions: [
            'Employee must be Qatari national.',
            'Married employee: a valid marriage contract is required.',
            'Employee supporting children: must be evidenced by official documents (birth certificate, custody document).',
            'Divorced custodial mother: court custody order is required.',
            'If both spouses are Qatari government employees: each spouse is entitled to the Social Allowance at the full married rate independently — one spouse\'s employment does not reduce the other\'s Social Allowance entitlement.',
            'Allowance is suspended during unpaid leave periods.',
          ],
          note: 'The Social Allowance is part of the "Total Salary" and is included in the end-of-service gratuity calculation.',
          formRef: 'PR-F-001 – Social Allowance Request/Update Form',
        },
        {
          id: 'housing',
          icon: 'fa-house-chimney',
          color: '#C4922A',
          bg: 'rgba(196,146,42,0.08)',
          badge: 'badge-amber',
          badgeLabel: 'Qatari & Non-Qatari',
          title: 'Housing Allowance',
          legalRef: 'Article (20) – Council of Ministers Resolution No. 34 of 2025',
          law: 'CoM Res. 34/2025 – Art.20',
          whoEligible: 'Qatari employees + Non-Qatari employees (per contract)',
          description: 'A monthly allowance to cover housing costs, varying by job grade and marital status. Not granted if government accommodation is provided.',
          amounts: [
            { label: 'Grade 1 and above – Married or supporting children', value: 'QR 6,000 / month', highlight: true },
            { label: 'Grade 1 and above – Single', value: 'QR 3,500 / month', highlight: false },
            { label: 'Grades 2–7 – Married or supporting children', value: 'QR 4,000 / month', highlight: true },
            { label: 'Grades 2–7 – Single', value: 'QR 2,500 / month', highlight: false },
            { label: 'Other grades – Married or supporting children', value: 'QR 3,000 / month', highlight: false },
            { label: 'Other grades – Single', value: 'QR 1,500 / month', highlight: false },
            { label: 'Labour/Craft positions (non-Qatari)', value: 'QR 800 / month', highlight: false },
            { label: 'Divorced woman with custody', value: 'Granted at married rate', highlight: true },
          ],
          conditions: [
            'Not granted if the employee or their spouse has been allocated government housing.',
            'If both spouses work in government entities: higher rate goes to the higher earner, other gets single rate.',
            'If one spouse works in a state-funded entity (>50% state-owned) and receives married rate: government spouse gets single rate.',
            'In case of polygamy: non-benefiting wives receive single rate.',
            'Non-Qatari employees: per employment contract and within these limits.',
          ],
          note: 'Housing allowance is part of the "Total Salary" and is included in end-of-service gratuity calculations.',
          formRef: 'PR-F-002 – Housing Allowance Request Form',
        },
        {
          id: 'transport',
          icon: 'fa-car-side',
          color: '#3B82F6',
          bg: 'rgba(59,130,246,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'All Employees',
          title: 'Transportation Allowance',
          legalRef: 'Article (26) – Law No. 25 of 2025 + Article (34) of Executive Regulations',
          law: 'L. 25/2025 – Art.26 / ER Art.34',
          whoEligible: 'All employees per grade classification',
          description: 'Monthly allowance to cover commuting costs. Supplemented by a "Private Car Usage Allowance" if the nature of work requires using a personal vehicle.',
          amounts: [
            { label: 'Simple use of private car for work', value: 'QR 1,000 / month', highlight: false },
            { label: 'Moderate use of private car for work', value: 'QR 1,500 / month', highlight: false },
            { label: 'High use of private car for work', value: 'QR 2,000 / month', highlight: true },
            { label: 'Basic transportation allowance', value: 'Determined by grade scale', highlight: false },
          ],
          conditions: [
            'Private car allowance: work must require vehicle use and no government vehicle has been provided.',
            'Usage level (simple/moderate/high) determined by CEO based on role and assigned tasks.',
            'Private car allowance is NOT included in total salary for leave calculations.',
            'Paid monthly with salary.',
          ],
          note: 'Basic transport allowance and private car allowance cannot be combined unless internal policy states otherwise.',
          formRef: 'PR-F-003 – Transportation / Private Car Allowance Form',
        },
        {
          id: 'representation',
          icon: 'fa-award',
          color: '#8B5CF6',
          bg: 'rgba(139,92,246,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'By Grade & Mission',
          title: 'Representation Allowance',
          legalRef: 'Article (26) – Law No. 25 of 2025 + Executive Regulations',
          law: 'L. 25/2025 – Art.26 / ER',
          whoEligible: 'Employees on official missions outside Qatar',
          description: 'A daily allowance paid during official missions abroad, varying by grade and whether accommodation is provided.',
          amounts: [
            { label: 'Qatari employee – daily (with accommodation)', value: 'Per grade scale table', highlight: false },
            { label: 'Non-Qatari (labour/craft) – daily', value: 'QR 300 / day', highlight: false },
            { label: 'Non-Qatari (labour/craft) – without accommodation', value: 'QR 1,500 / day', highlight: true },
            { label: 'Air ticket – Grade 1 and above', value: 'First Class', highlight: true },
            { label: 'Air ticket – Below Grade 1', value: 'Business / Economy Class', highlight: false },
          ],
          conditions: [
            'Requires an official mission assignment order.',
            'Daily rate determined per grade scale and destination country.',
            'Accommodation not provided: elevated daily rate applies.',
            'Travel class determined by job grade.',
          ],
          note: 'Representation allowance is NOT included in end-of-service gratuity calculations.',
          formRef: 'PR-F-004 – Official Mission & Representation Allowance Form',
        },
        {
          id: 'nature',
          icon: 'fa-helmet-safety',
          color: '#EF4444',
          bg: 'rgba(239,68,68,0.08)',
          badge: 'badge-red',
          badgeLabel: 'Specific Positions',
          title: 'Nature of Work Allowance',
          legalRef: 'Article (26) – L. 25/2025 + PM Resolution No. 25 of 2025',
          law: 'L. 25/2025 – Art.26 / PM Res. 25/2025',
          whoEligible: 'Employees in positions with special working conditions (security, health, field work...)',
          description: 'Monthly allowance for positions with exceptional or hazardous working conditions such as field work, security, healthcare, and similar roles.',
          amounts: [
            { label: 'Nature of Work Allowance (% of basic salary)', value: 'Per profession/position schedule', highlight: false },
            { label: 'Supplementary Nature of Work Allowance (Qatari)', value: 'Additional % per attached schedule', highlight: true },
            { label: 'Maximum cap', value: 'Per PM Resolution 25/2025', highlight: false },
          ],
          conditions: [
            'The position must be approved in the entity\'s budget formation for this allowance.',
            'Employee must be permanently assigned to the position and actually performing its duties continuously.',
            'For security/safety roles: field shift work is required; employee must not have in-building accommodation.',
            'Cannot be combined with similar allowances unless explicitly stated.',
            'Suspended during unpaid leave and companionship leave.',
            'Eligibility reviewed annually per inspection results.',
          ],
          note: 'The detailed schedule of eligible positions is determined by a Prime Minister\'s resolution.',
          formRef: 'PR-F-005 – Nature of Work Allowance Eligibility Form',
        },
        {
          id: 'overtime',
          icon: 'fa-clock-rotate-left',
          color: '#10B981',
          bg: 'rgba(16,185,129,0.08)',
          badge: 'badge-green',
          badgeLabel: 'By Official Order',
          title: 'Overtime Allowance',
          legalRef: 'Article (32) – Council of Ministers Resolution No. 34 of 2025',
          law: 'CoM Res. 34/2025 – Art.32',
          whoEligible: 'All employees upon official overtime assignment',
          description: 'Financial compensation for overtime hours officially assigned by executive order, with monthly caps for Qatari and non-Qatari employees.',
          amounts: [
            { label: 'Overtime rate – Regular working days', value: '1.25× the hourly rate', highlight: false },
            { label: 'Overtime rate – Public holidays and weekends', value: '1.5× the hourly rate', highlight: true },
            { label: 'Daily cap – Regular working days', value: '3 hours / day', highlight: false },
            { label: 'Daily cap – Public holidays and weekends', value: '8 hours / day', highlight: false },
            { label: 'Monthly cap – Qatari employee', value: '40% of salary, max QR 10,000', highlight: true },
            { label: 'Monthly cap – Non-Qatari employee', value: '20% of salary, max QR 5,000', highlight: false },
            { label: 'Leave alternative (employee request)', value: '1 day per 7 hours (max 15 days/year)', highlight: false },
          ],
          conditions: [
            'Requires official assignment order from CEO based on department manager recommendation.',
            'No more than 10% of entity employees may be on overtime simultaneously (except Grade 8 and below).',
            'Overtime assignment period cannot exceed 6 months per year.',
            'Leave alternative: must be taken in the same year or carried forward one year only.',
            'Allowance not paid if employee opted for leave alternative.',
          ],
          note: 'Hourly rate = (Monthly Basic Salary × 12) ÷ (52 weeks × 40 hours).',
          formRef: 'PR-F-040 – Overtime Allowance Claim Form',
        },
        {
          id: 'performance',
          icon: 'fa-trophy',
          color: '#F59E0B',
          bg: 'rgba(245,158,11,0.08)',
          badge: 'badge-amber',
          badgeLabel: 'Qataris – Performance Based',
          title: 'Annual Performance Incentive',
          legalRef: 'Article (35 bis/1) Added – Council of Ministers Resolution No. 34 of 2025',
          law: 'CoM Res. 34/2025 – Art.35 bis/1',
          whoEligible: 'Qatari employees based on annual performance evaluation',
          description: 'Annual incentive tied to performance level evaluated under the new Normal Distribution Curve system introduced by Law No. 25 of 2025.',
          amounts: [
            { label: 'Exceptional performance level', value: '2 months\' basic salary', highlight: true },
            { label: 'Exceeds Expectations performance level', value: '1 month\'s basic salary', highlight: false },
            { label: 'Meets Expectations or below', value: 'Not entitled to incentive', highlight: false },
          ],
          conditions: [
            'Subject to availability of financial appropriations.',
            'Max 20% of employees may receive "Exceptional" rating.',
            'Max 25% of employees may receive "Exceeds Expectations" rating.',
            'Not granted if total leave exceeds 3 months (excluding annual and casual).',
            'Does not apply to entities with different performance evaluation systems.',
          ],
          note: 'This incentive is independent of the annual increment and does not substitute for it.',
          formRef: 'No form required – automatically processed after performance review approval',
        },
        {
          id: 'supervisory',
          icon: 'fa-sitemap',
          color: '#6366F1',
          bg: 'rgba(99,102,241,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'Qatari Leaders',
          title: 'Supervisory Performance Incentive',
          legalRef: 'Article (35 bis) Added – Council of Ministers Resolution No. 34 of 2025',
          law: 'CoM Res. 34/2025 – Art.35 bis',
          whoEligible: 'Qatari employees in leadership or supervisory positions',
          description: 'Annual performance incentive specific to supervisory and leadership positions, linked to performance level and position type.',
          amounts: [
            { label: 'Assistant Undersecretary – Exceptional', value: 'QR 120,000 / year', highlight: true },
            { label: 'Assistant Undersecretary – Exceeds Expectations', value: 'QR 60,000 / year', highlight: false },
            { label: 'Department Director – Exceptional', value: 'QR 96,000 / year', highlight: true },
            { label: 'Department Director – Exceeds Expectations', value: 'QR 48,000 / year', highlight: false },
            { label: 'Deputy Department Director – Exceptional', value: 'QR 72,000 / year', highlight: false },
            { label: 'Deputy Department Director – Exceeds Expectations', value: 'QR 36,000 / year', highlight: false },
            { label: 'Section Head – Exceptional', value: 'QR 60,000 / year', highlight: false },
            { label: 'Section Head – Exceeds Expectations', value: 'QR 30,000 / year', highlight: false },
          ],
          conditions: [
            'Must have held leadership/supervisory position for at least 6 months during the incentive year.',
            'Not granted if total leave exceeds 3 months (excluding annual and casual).',
            'Subject to financial appropriations and CEO decision.',
            'Does not apply to entities with different performance evaluation systems.',
          ],
          note: 'This incentive is separate from the individual performance incentive and both can be combined.',
          formRef: 'No form required – issued by CEO decision',
        },
        {
          id: 'marriage',
          icon: 'fa-heart',
          color: '#EC4899',
          bg: 'rgba(236,72,153,0.08)',
          badge: 'badge-red',
          badgeLabel: 'Married Qataris',
          title: 'Annual Marriage Incentive',
          legalRef: 'Article (19 bis) Added – Council of Ministers Resolution No. 34 of 2025',
          law: 'CoM Res. 34/2025 – Art.19 bis',
          whoEligible: 'Qatari employee married to a Qatari (both spouses)',
          description: 'Annual incentive paid on January 1st each year to Qatari government employees married to each other, encouraging Qatari-Qatari marriages.',
          amounts: [
            { label: 'Annual Marriage Incentive – per spouse (both receive it)', value: 'QR 12,000 / year', highlight: true },
          ],
          conditions: [
            'Both spouses must be Qatari nationals.',
            'At least one full year must have elapsed since the marriage.',
            'Both spouses receive the incentive if both are government employees.',
            'Incentive stops upon dissolution of marriage (divorce or death).',
            'First payment requires completion of one year of marriage.',
          ],
          note: 'New benefit introduced by CoM Res. 34/2025 – did not exist under the 2016 law.',
          formRef: 'PR-F-006 – Marriage Incentive Application Form',
        },
        {
          id: 'retention',
          icon: 'fa-user-shield',
          color: '#0891B2',
          bg: 'rgba(8,145,178,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'Targeted Positions',
          title: 'Attraction & Retention Allowance',
          legalRef: 'Article (26 bis) – Law No. 25 of 2025',
          law: 'L. 25/2025 – Art.26 bis',
          whoEligible: 'Qatari employees in critical and leadership roles',
          description: 'Newly introduced allowance to attract and retain Qatari talent in critical and leadership positions, set as a percentage of basic salary.',
          amounts: [
            { label: 'Attraction & Retention Allowance (standard rate)', value: '5% of basic salary', highlight: false },
            { label: 'Extended rate (with Council of Ministers approval)', value: 'Up to 10% of total employees', highlight: true },
          ],
          conditions: [
            'Subject to Civil Service Bureau approval and identification of eligible critical positions.',
            'Granted to Qatari employees only in strategically important roles.',
            'Expandable to 10% of entity employees with Council of Ministers approval.',
            'Reviewed periodically alongside performance evaluation.',
          ],
          note: 'New under Law 25/2025 as part of Qatarisation reforms and Qatar National Vision 2030.',
          formRef: 'Determined by entity – no individual form required',
        },
        {
          id: 'periodic',
          icon: 'fa-chart-line',
          color: '#7C3AED',
          bg: 'rgba(124,58,237,0.08)',
          badge: 'badge-blue',
          badgeLabel: 'Qataris – Annual',
          title: 'Periodic Increment (Annual Raise)',
          legalRef: 'Article (23) Amended – Law No. 25 of 2025',
          law: 'L. 25/2025 – Art.23',
          whoEligible: 'Qatari employees upon completion of one year since last increment',
          description: 'Annual increase in basic salary tied to performance evaluation, paid on January 1st each year per approved rates.',
          amounts: [
            { label: 'Exceptional performance – increment rate', value: '150% of increment scale value', highlight: true },
            { label: 'Exceeds Expectations', value: '125% of increment scale value', highlight: false },
            { label: 'Meets Expectations', value: '100% of increment scale value', highlight: false },
            { label: 'Below Expectations', value: '75% of increment scale value', highlight: false },
            { label: 'Weak performance', value: 'No increment', highlight: false },
            { label: 'Increment value', value: 'Defined per Salary Scale Table No. 1', highlight: false },
          ],
          conditions: [
            'Employee must have completed a full year from date of appointment or last increment.',
            'Successful completion of probationary period is required.',
            'Unified payment date: January 1st each year (new under 2025 law).',
            'Basic salary cannot exceed the top of the grade scale.',
            'If appointed after January 1st: increment calculated proportionally to months served.',
          ],
          note: 'Key reform: Law 2016 used inconsistent ratings. Law 2025 formally ties the annual increment to the new quantitative evaluation system.',
          formRef: 'No form required – automatically calculated after annual review approval',
        },
      ],
    }
  }

  const d = lang === 'ar' ? allowancesData.ar : allowancesData.en

  /* ─── HTML ─────────────────────────────────────────────────── */
  const content = `
  <div dir="${isRTL ? 'rtl' : 'ltr'}">
  <!-- Header -->
  <div class="mb-5 flex items-start justify-between flex-wrap gap-3">
    <div>
      <div class="flex items-center gap-2 mb-2">
        <a href="/procedures?lang=${lang}" class="text-xs font-medium hover:underline" style="color:var(--qu-maroon)">${d.backBtn}</a>
        <span class="text-gray-300">|</span>
        <span class="text-xs text-gray-400">${lang === 'ar' ? 'الإجراءات' : 'Procedures'} › ${d.pageTitle}</span>
      </div>
      <h1 class="text-2xl font-bold text-gray-800">${d.pageTitle}</h1>
      <p class="text-gray-500 mt-1 text-sm max-w-2xl">${d.pageSubtitle}</p>
    </div>
    <button onclick="window.print()" class="btn-outline px-4 py-2 rounded-lg text-sm font-medium flex-shrink-0">${d.printBtn}</button>
  </div>

  <!-- Legal Reference Banner -->
  <div class="card p-4 mb-6" style="background:linear-gradient(135deg,rgba(139,26,47,0.05),rgba(196,146,42,0.03));border-${isRTL ? 'right' : 'left'}:5px solid var(--qu-maroon)">
    <div>
      <p class="font-bold text-gray-800 text-sm mb-1">${d.legalBannerTitle}</p>
      <p class="text-gray-600 text-xs leading-relaxed">${d.legalBannerBody}</p>
      <p class="text-gray-400 text-xs mt-1.5">${d.noteNonQatari}</p>
    </div>
  </div>

  <!-- Quick Jump Nav -->
  <div class="card p-4 mb-6 overflow-x-auto">
    <div class="flex items-center gap-2 flex-nowrap">
      <span class="text-xs font-semibold text-gray-500 whitespace-nowrap flex-shrink-0 ${isRTL ? 'ml-2' : 'mr-2'}">${lang === 'ar' ? 'انتقل إلى:' : 'Jump to:'}</span>
      ${d.allowances.map(a => `
      <a href="#allow-${a.id}" class="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-full border transition hover:text-white whitespace-nowrap"
         style="border-color:${a.color};color:${a.color}" onmouseover="this.style.background='${a.color}'" onmouseout="this.style.background='transparent'">
${a.title}
      </a>`).join('')}
    </div>
  </div>

  <!-- Allowance Cards -->
  <div class="space-y-6">
    ${d.allowances.map((allow: any, idx: number) => `
    <div id="allow-${allow.id}" class="card overflow-hidden" style="border-top:4px solid ${allow.color}">

      <!-- Card Header -->
      <div class="px-6 py-5 flex items-start justify-between gap-4" style="background:${allow.bg}">
        <div>
          <div class="flex items-center gap-2 mb-1 flex-wrap">
            <h2 class="text-lg font-bold text-gray-800">${allow.title}</h2>
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${allow.badge}">${allow.badgeLabel}</span>
            <span class="text-xs font-mono px-2 py-0.5 rounded-lg text-white flex-shrink-0" style="background:${allow.color}">${allow.law}</span>
          </div>
          <p class="text-xs font-medium" style="color:${allow.color}">${allow.legalRef}</p>
        </div>
        <span class="text-2xl font-black text-gray-200 flex-shrink-0">${String(idx + 1).padStart(2, '0')}</span>
      </div>

      <!-- Card Body -->
      <div class="px-6 py-5">
        <!-- Description -->
        <div class="mb-5 p-3 rounded-xl" style="background:${allow.bg}">
          <p class="text-sm text-gray-700 leading-relaxed">${allow.description}</p>
        </div>

        <!-- Eligible Category -->
        <div class="mb-4 p-3 rounded-lg bg-gray-50">
          <div>
            <span class="text-xs font-bold text-gray-500 uppercase tracking-wide">${d.whoLabel}: </span>
            <span class="text-sm font-semibold text-gray-800">${allow.whoEligible}</span>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <!-- Amounts Table -->
          <div>
            <h4 class="text-sm font-bold text-gray-700 mb-3">${d.calcLabel}</h4>
            <div class="rounded-xl overflow-hidden border border-gray-100">
              ${allow.amounts.map((amt: any) => `
              <div class="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-50 last:border-0 ${amt.highlight ? '' : 'bg-white'}"
                   style="${amt.highlight ? `background:${allow.bg}` : ''}">
                <span class="text-xs text-gray-600">${amt.label}</span>
                <span class="text-xs font-bold whitespace-nowrap flex-shrink-0 px-2 py-1 rounded-lg ${amt.highlight ? 'text-white' : 'text-gray-700 bg-gray-100'}"
                      style="${amt.highlight ? `background:${allow.color}` : ''}">${amt.value}</span>
              </div>`).join('')}
            </div>
          </div>

          <!-- Conditions -->
          <div>
            <h4 class="text-sm font-bold text-gray-700 mb-3">${d.condLabel}</h4>
            <ul class="space-y-2">
              ${allow.conditions.map((cond: string) => `
              <li class="text-xs text-gray-600 leading-relaxed py-1 border-b border-gray-50 last:border-0">${cond}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Note -->
        ${allow.note ? `
        <div class="mt-4 p-3 rounded-xl" style="background:rgba(245,158,11,0.07);border:1px solid rgba(245,158,11,0.2)">
          <p class="text-xs text-gray-700 leading-relaxed">${allow.note}</p>
        </div>` : ''}

        <!-- Form & Actions -->
        <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-3">
          <div class="text-xs text-gray-500">
            <span>${d.formLabel}: <strong class="text-gray-700">${allow.formRef}</strong></span>
          </div>
          <div class="flex items-center gap-2">
            ${!allow.formRef.includes('لا يتطلب') && !allow.formRef.includes('No form') ? `
            <a href="/forms?lang=${lang}" class="btn-primary px-3 py-1.5 rounded-lg text-xs font-semibold">${d.downloadBtn}</a>` : ''}
            <a href="/contact?lang=${lang}" class="btn-outline px-3 py-1.5 rounded-lg text-xs font-semibold">${d.requestBtn}</a>
          </div>
        </div>
      </div>
    </div>`).join('')}
  </div>

  <!-- Bottom Actions -->
  <div class="card p-5 mt-6 flex items-center justify-between flex-wrap gap-4">
    <div>
      <div>
        <p class="font-bold text-gray-800 text-sm">${lang === 'ar' ? 'هل تحتاج مساعدة في البدلات؟' : 'Need help with allowances?'}</p>
        <p class="text-xs text-gray-500">${lang === 'ar' ? 'فريق الرواتب متاح للإجابة على استفساراتك' : 'The payroll team is available to answer your queries'}</p>
      </div>
    </div>
    <div class="flex items-center gap-3">
      <a href="/procedures?lang=${lang}" class="btn-outline px-4 py-2 rounded-lg text-sm font-medium">${d.backBtn}</a>
      <a href="/contact?lang=${lang}" class="btn-primary px-4 py-2 rounded-lg text-sm font-medium">${lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}</a>
    </div>
  </div>

  </div>
  `

  return c.html(layout(d.pageTitle, content, 'allowances', lang))
})


// ─────────────────────────────────────────────────────────────────────────────
//  EMAIL TEMPLATES  /email-templates
// ─────────────────────────────────────────────────────────────────────────────
app.get('/email-templates', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = isRTL ? 'أرشيف قوالب الإيميل' : 'Email Templates Archive'
  const pageSubtitle = isRTL
    ? 'احفظ، عدّل، انسخ، وأدر قوالب الإيميلات المتكررة بسهولة'
    : 'Save, edit, copy, and manage your recurring email templates with ease'

  const content = `
  <!-- Page Header -->
  <div class="mb-8">
    <div class="flex items-center gap-3 mb-2 ${isRTL ? 'flex-row-reverse' : ''}">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.1)">
        <i class="fas fa-envelope-open-text" style="color:var(--qu-maroon)"></i>
      </div>
      <div>
        <h1 class="text-2xl font-bold text-gray-800">${pageTitle}</h1>
        <p class="text-gray-500 text-sm">${pageSubtitle}</p>
      </div>
    </div>
  </div>

  <!-- Stats Bar -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" id="statsBar">
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
      <div class="text-2xl font-bold" style="color:var(--qu-maroon)" id="statTotal">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL ? 'إجمالي القوالب' : 'Total Templates'}</div>
    </div>
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
      <div class="text-2xl font-bold text-blue-600" id="statHR">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL ? 'موارد بشرية' : 'HR Templates'}</div>
    </div>
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
      <div class="text-2xl font-bold text-emerald-600" id="statPayroll">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL ? 'رواتب ومالية' : 'Payroll & Finance'}</div>
    </div>
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
      <div class="text-2xl font-bold text-amber-600" id="statGeneral">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL ? 'عامة ومتنوعة' : 'General'}</div>
    </div>
  </div>

  <!-- Toolbar: Search + Filter + Add -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mb-6">
    <div class="flex flex-wrap gap-3 items-center ${isRTL ? 'flex-row-reverse' : ''}">
      <!-- Search -->
      <div class="relative flex-1 min-w-48">
        <i class="fas fa-search absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
        <input id="searchInput" type="text" placeholder="${isRTL ? 'ابحث في القوالب...' : 'Search templates...'}"
          class="w-full border border-gray-200 rounded-lg py-2 ${isRTL ? 'pr-9 pl-3 text-right' : 'pl-9 pr-3'} text-sm focus:outline-none focus:ring-2 focus:ring-red-200"
          oninput="filterTemplates()">
      </div>
      <!-- Category Filter -->
      <select id="categoryFilter" onchange="filterTemplates()"
        class="border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${isRTL ? 'text-right' : ''}">
        <option value="all">${isRTL ? 'جميع الفئات' : 'All Categories'}</option>
        <option value="hr">${isRTL ? 'موارد بشرية' : 'Human Resources'}</option>
        <option value="payroll">${isRTL ? 'رواتب ومالية' : 'Payroll & Finance'}</option>
        <option value="general">${isRTL ? 'عامة' : 'General'}</option>
        <option value="academic">${isRTL ? 'أكاديمية' : 'Academic'}</option>
        <option value="admin">${isRTL ? 'إدارية' : 'Administrative'}</option>
      </select>
      <!-- Sort -->
      <select id="sortOrder" onchange="filterTemplates()"
        class="border border-gray-200 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${isRTL ? 'text-right' : ''}">
        <option value="newest">${isRTL ? 'الأحدث أولاً' : 'Newest First'}</option>
        <option value="oldest">${isRTL ? 'الأقدم أولاً' : 'Oldest First'}</option>
        <option value="az">${isRTL ? 'أ–ي' : 'A–Z'}</option>
        <option value="za">${isRTL ? 'ي–أ' : 'Z–A'}</option>
        <option value="used">${isRTL ? 'الأكثر استخداماً' : 'Most Used'}</option>
      </select>
      <!-- Add Button -->
      <button onclick="openAddModal()"
        class="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-sm hover:opacity-90 transition ${isRTL ? 'flex-row-reverse' : ''}"
        style="background:var(--qu-maroon)">
        <i class="fas fa-plus"></i>
        <span>${isRTL ? 'إضافة قالب جديد' : 'Add New Template'}</span>
      </button>
    </div>
  </div>

  <!-- Templates Grid -->
  <div id="templatesGrid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
    <!-- Cards rendered by JS -->
  </div>

  <!-- Empty State -->
  <div id="emptyState" class="hidden text-center py-20">
    <div class="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4" style="background:rgba(139,26,47,0.07)">
      <i class="fas fa-inbox text-3xl" style="color:var(--qu-maroon); opacity:0.5"></i>
    </div>
    <p class="text-gray-400 text-sm">${isRTL ? 'لا توجد قوالب مطابقة للبحث' : 'No templates match your search'}</p>
  </div>

  <!-- ── ADD / EDIT MODAL ── -->
  <div id="templateModal" class="fixed inset-0 z-50 flex items-center justify-center hidden" style="background:rgba(0,0,0,0.5)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 flex flex-col" style="max-height:90vh">
      <!-- Modal Header -->
      <div class="flex items-center justify-between p-5 border-b border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}">
        <h2 class="font-bold text-gray-800 text-lg" id="modalTitle">${isRTL ? 'إضافة قالب جديد' : 'Add New Template'}</h2>
        <button onclick="closeModal()" class="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <!-- Modal Body -->
      <div class="p-5 overflow-y-auto flex-1">
        <input type="hidden" id="editingId" value="">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1 ${isRTL ? 'text-right' : ''}">${isRTL ? 'عنوان القالب *' : 'Template Title *'}</label>
            <input id="modalTitle_" type="text" placeholder="${isRTL ? 'مثال: طلب إجازة سنوية' : 'e.g. Annual Leave Request'}"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${isRTL ? 'text-right' : ''}">
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1 ${isRTL ? 'text-right' : ''}">${isRTL ? 'الفئة *' : 'Category *'}</label>
            <select id="modalCategory" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${isRTL ? 'text-right' : ''}">
              <option value="hr">${isRTL ? 'موارد بشرية' : 'Human Resources'}</option>
              <option value="payroll">${isRTL ? 'رواتب ومالية' : 'Payroll & Finance'}</option>
              <option value="general">${isRTL ? 'عامة' : 'General'}</option>
              <option value="academic">${isRTL ? 'أكاديمية' : 'Academic'}</option>
              <option value="admin">${isRTL ? 'إدارية' : 'Administrative'}</option>
            </select>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-xs font-semibold text-gray-600 mb-1 ${isRTL ? 'text-right' : ''}">${isRTL ? 'سطر الموضوع' : 'Subject Line'}</label>
          <input id="modalSubject" type="text" placeholder="${isRTL ? 'موضوع الإيميل...' : 'Email subject...'}"
            class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${isRTL ? 'text-right' : ''}">
        </div>
        <div class="mb-4">
          <label class="block text-xs font-semibold text-gray-600 mb-1 ${isRTL ? 'text-right' : ''}">${isRTL ? 'نص الإيميل *' : 'Email Body *'}</label>
          <textarea id="modalBody" rows="10" placeholder="${isRTL ? 'اكتب نص الإيميل هنا...' : 'Write email body here...'}"
            class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 resize-y ${isRTL ? 'text-right' : ''}"
            style="font-family: ${isRTL ? "'Tajawal', 'Cairo', monospace" : "monospace"}"></textarea>
        </div>
        <div class="mb-2">
          <label class="block text-xs font-semibold text-gray-600 mb-1 ${isRTL ? 'text-right' : ''}">${isRTL ? 'الوسوم (مفصولة بفاصلة)' : 'Tags (comma-separated)'}</label>
          <input id="modalTags" type="text" placeholder="${isRTL ? 'مثال: إجازة، طلب، رسمي' : 'e.g. leave, request, formal'}"
            class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200 ${isRTL ? 'text-right' : ''}">
        </div>
      </div>
      <!-- Modal Footer -->
      <div class="flex gap-3 p-5 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}">
        <button onclick="saveTemplate()"
          class="flex-1 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition"
          style="background:var(--qu-maroon)">
          <i class="fas fa-save mr-1"></i>
          ${isRTL ? 'حفظ القالب' : 'Save Template'}
        </button>
        <button onclick="closeModal()"
          class="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition">
          ${isRTL ? 'إلغاء' : 'Cancel'}
        </button>
      </div>
    </div>
  </div>

  <!-- ── VIEW MODAL ── -->
  <div id="viewModal" class="fixed inset-0 z-50 flex items-center justify-center hidden" style="background:rgba(0,0,0,0.5)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 flex flex-col" style="max-height:90vh">
      <div class="flex items-center justify-between p-5 border-b border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}">
        <div class="${isRTL ? 'text-right' : ''}">
          <h2 class="font-bold text-gray-800 text-lg" id="viewTitle"></h2>
          <div class="flex gap-2 mt-1 ${isRTL ? 'flex-row-reverse' : ''}">
            <span id="viewCategoryBadge" class="text-xs px-2 py-0.5 rounded-full"></span>
            <span id="viewSubjectLine" class="text-xs text-gray-400"></span>
          </div>
        </div>
        <button onclick="closeViewModal()" class="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="p-5 overflow-y-auto flex-1">
        <pre id="viewBody" class="whitespace-pre-wrap text-sm text-gray-700 leading-relaxed p-4 rounded-xl" style="background:#f8f9fa; font-family: ${isRTL ? "'Tajawal','Cairo',sans-serif" : "monospace"}; ${isRTL ? 'text-align:right; direction:rtl' : ''}"></pre>
        <div id="viewTags" class="flex flex-wrap gap-2 mt-3 ${isRTL ? 'flex-row-reverse' : ''}"></div>
      </div>
      <div class="flex gap-3 p-5 border-t border-gray-100 ${isRTL ? 'flex-row-reverse' : ''}">
        <button onclick="copyFromView()"
          class="flex-1 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          style="background:#059669">
          <i class="fas fa-copy"></i>
          ${isRTL ? 'نسخ النص' : 'Copy Text'}
        </button>
        <button onclick="editFromView()"
          class="flex-1 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          style="background:var(--qu-maroon)">
          <i class="fas fa-pen"></i>
          ${isRTL ? 'تعديل' : 'Edit'}
        </button>
        <button onclick="closeViewModal()"
          class="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 transition">
          ${isRTL ? 'إغلاق' : 'Close'}
        </button>
      </div>
    </div>
  </div>

  <!-- Toast Notification -->
  <div id="toast" class="fixed bottom-6 ${isRTL ? 'left-6' : 'right-6'} z-[100] hidden">
    <div class="bg-gray-800 text-white text-sm px-5 py-3 rounded-xl shadow-xl flex items-center gap-2">
      <i class="fas fa-check-circle text-emerald-400"></i>
      <span id="toastMsg"></span>
    </div>
  </div>

  <script>
  // ── DATA STORE (localStorage) ──
  const STORAGE_KEY = 'qu_email_templates_v1';
  const IS_RTL = ${isRTL ? 'true' : 'false'};

  const LABELS = {
    confirmDelete: IS_RTL ? 'هل أنت متأكد من حذف هذا القالب؟' : 'Are you sure you want to delete this template?',
    copied:       IS_RTL ? 'تم نسخ النص بنجاح!' : 'Text copied to clipboard!',
    saved:        IS_RTL ? 'تم حفظ القالب بنجاح!' : 'Template saved successfully!',
    deleted:      IS_RTL ? 'تم حذف القالب.' : 'Template deleted.',
    editTitle:    IS_RTL ? 'تعديل القالب' : 'Edit Template',
    addTitle:     IS_RTL ? 'إضافة قالب جديد' : 'Add New Template',
    titleRequired: IS_RTL ? 'الرجاء إدخال عنوان القالب' : 'Please enter a template title',
    bodyRequired:  IS_RTL ? 'الرجاء إدخال نص الإيميل' : 'Please enter the email body',
    noResults:    IS_RTL ? 'لا توجد نتائج مطابقة' : 'No matching templates',
  };

  const CATEGORY_META = {
    hr:      { label: IS_RTL?'موارد بشرية':'Human Resources', color:'#3B82F6', bg:'#EFF6FF' },
    payroll: { label: IS_RTL?'رواتب ومالية':'Payroll & Finance', color:'#059669', bg:'#ECFDF5' },
    general: { label: IS_RTL?'عامة':'General', color:'#D97706', bg:'#FFFBEB' },
    academic:{ label: IS_RTL?'أكاديمية':'Academic', color:'#7C3AED', bg:'#F5F3FF' },
    admin:   { label: IS_RTL?'إدارية':'Administrative', color:'#DC2626', bg:'#FEF2F2' },
  };

  // ── DEFAULT SEED DATA ──
  const DEFAULT_TEMPLATES = [
    {
      id: 't1', title: IS_RTL?'طلب إجازة سنوية':'Annual Leave Request',
      category:'hr', subject: IS_RTL?'طلب إجازة سنوية – [اسم الموظف]':'Annual Leave Request – [Employee Name]',
      body: IS_RTL
        ? \`السيد/السيدة المحترم/ة،
المدير/ة المباشر/ة

تحية طيبة وبعد،

أتقدم إليكم بطلب الحصول على إجازة سنوية للفترة من [تاريخ البداية] إلى [تاريخ النهاية]، بما مجموعه [عدد الأيام] يوم عمل.

وذلك بسبب [سبب الإجازة]، وقد رتّبت الأمور بحيث لا يتأثر سير العمل خلال فترة غيابي.

أرجو الموافقة على طلبي.

مع فائق الاحترام والتقدير،
[الاسم الكامل]
[المسمى الوظيفي]
[رقم الموظف]
[التاريخ]\`
        : \`Dear [Manager Name],

I am writing to formally request annual leave from [Start Date] to [End Date], totaling [Number] working days.

The reason for this leave is [Reason]. I have made the necessary arrangements to ensure minimal disruption to ongoing work during my absence.

I kindly request your approval.

Best regards,
[Full Name]
[Job Title]
[Employee ID]
[Date]\`,
      tags: IS_RTL?['إجازة','طلب رسمي','موارد بشرية']:['leave','request','hr'],
      usageCount:12, createdAt: new Date(Date.now()-15*864e5).toISOString()
    },
    {
      id: 't2', title: IS_RTL?'استفسار عن الراتب':'Salary Inquiry',
      category:'payroll', subject: IS_RTL?'استفسار بشأن كشف الراتب – [الشهر/السنة]':'Salary Inquiry – [Month/Year]',
      body: IS_RTL
        ? \`إلى قسم الرواتب المحترم،

تحية طيبة وبعد،

أكتب إليكم للاستفسار عن تفاصيل راتب شهر [اسم الشهر] [السنة]، حيث لاحظت [وصف المشكلة أو الاستفسار].

بيانات الموظف:
- الاسم: [الاسم الكامل]
- رقم الموظف: [الرقم]
- القسم: [اسم القسم]

أرجو التكرم بالتحقق والرد في أقرب وقت ممكن.

مع الشكر والتقدير،
[الاسم]\`
        : \`Dear Payroll Department,

I am writing to inquire about the salary details for [Month] [Year]. I noticed [describe the issue or question].

Employee Details:
- Name: [Full Name]
- Employee ID: [ID Number]
- Department: [Department Name]

Please review and respond at your earliest convenience.

Regards,
[Name]\`,
      tags: IS_RTL?['رواتب','استفسار','مالية']:['salary','inquiry','payroll'],
      usageCount:8, createdAt: new Date(Date.now()-10*864e5).toISOString()
    },
    {
      id: 't3', title: IS_RTL?'طلب شهادة راتب':'Salary Certificate Request',
      category:'payroll', subject: IS_RTL?'طلب إصدار شهادة راتب':'Request for Salary Certificate',
      body: IS_RTL
        ? \`السادة قسم الموارد البشرية والرواتب المحترمون،

تحية طيبة وبعد،

أتقدم بطلب إصدار شهادة راتب معتمدة باللغة [العربية/الإنجليزية] للاستخدام في [الغرض: بنك/تأشيرة/سكن...].

بياناتي:
- الاسم: [الاسم الكامل]
- رقم الموظف: [الرقم]
- المسمى الوظيفي: [المسمى]
- القسم: [القسم]

وذلك في أقرب وقت ممكن إن أمكن.

شاكراً لكم حسن تعاونكم،
[الاسم]\`
        : \`Dear HR & Payroll Department,

I would like to request an official salary certificate in [Arabic/English] for the purpose of [Bank/Visa/Housing, etc.].

My details:
- Name: [Full Name]
- Employee ID: [ID]
- Job Title: [Title]
- Department: [Department]

Please issue the certificate at your earliest convenience.

Thank you,
[Name]\`,
      tags: IS_RTL?['شهادة راتب','طلب','وثيقة']:['certificate','salary','official'],
      usageCount:15, createdAt: new Date(Date.now()-5*864e5).toISOString()
    },
    {
      id: 't4', title: IS_RTL?'إشعار غياب':'Absence Notification',
      category:'hr', subject: IS_RTL?'إشعار غياب – [التاريخ]':'Absence Notification – [Date]',
      body: IS_RTL
        ? \`السيد/السيدة [اسم المدير المباشر]،

تحية طيبة،

أود إعلامكم بأنني لن أتمكن من الحضور إلى العمل اليوم [التاريخ] بسبب [سبب الغياب: مرض/ظرف طارئ...].

سأحرص على متابعة البريد الإلكتروني واستكمال المهام العاجلة عن بُعد قدر الإمكان.

مع الاعتذار وجزيل الشكر،
[الاسم]
[رقم الهاتف]\`
        : \`Dear [Manager Name],

I am writing to inform you that I will be unable to attend work today, [Date], due to [Reason: illness/emergency].

I will monitor my emails and handle urgent matters remotely as much as possible.

Apologies for the inconvenience,
[Name]
[Phone Number]\`,
      tags: IS_RTL?['غياب','إشعار','عاجل']:['absence','notification','urgent'],
      usageCount:6, createdAt: new Date(Date.now()-2*864e5).toISOString()
    },
    {
      id: 't5', title: IS_RTL?'طلب بدل السكن':'Housing Allowance Request',
      category:'payroll', subject: IS_RTL?'طلب صرف بدل السكن – نموذج PR-F-002':'Housing Allowance Request – PR-F-002',
      body: IS_RTL
        ? \`إلى قسم الرواتب المحترم،

تحية طيبة،

بالإشارة إلى سياسة بدلات السكن المعمول بها في جامعة قطر، أتقدم بطلب صرف بدل السكن وفق الشريحة المستحقة بناءً على درجتي الوظيفية [الدرجة] وحالتي الاجتماعية [أعزب/متزوج].

المستندات المرفقة:
□ عقد الزواج (إن وجد)
□ صورة الهوية القطرية
□ شهادة عدم الاستفادة من السكن الحكومي
□ نموذج PR-F-002 مكتمل

أرجو المعالجة وفق الإجراءات المعتمدة.

مع الشكر،
[الاسم الكامل]
[رقم الموظف]
[التاريخ]\`
        : \`Dear Payroll Department,

With reference to Qatar University's housing allowance policy, I am applying for the housing allowance based on my job grade [Grade] and marital status [Single/Married].

Attached Documents:
□ Marriage Certificate (if applicable)
□ Qatar ID Copy
□ No Government Housing Certificate
□ Completed Form PR-F-002

Please process in accordance with the approved procedures.

Regards,
[Full Name]
[Employee ID]
[Date]\`,
      tags: IS_RTL?['بدل السكن','طلب','نموذج']:['housing','allowance','form'],
      usageCount:9, createdAt: new Date(Date.now()-8*864e5).toISOString()
    },
    {
      id: 't6', title: IS_RTL?'تأكيد استلام الوثيقة':'Document Receipt Confirmation',
      category:'general', subject: IS_RTL?'تأكيد استلام [اسم الوثيقة]':'Confirmation of Receipt – [Document Name]',
      body: IS_RTL
        ? \`السيد/السيدة [الاسم]،

تحية طيبة،

نؤكد استلامنا لـ [وصف الوثيقة] المقدّمة بتاريخ [التاريخ]، وسيتم معالجة طلبكم خلال [المدة الزمنية].

سنتواصل معكم في حال الحاجة إلى أي معلومات إضافية.

مع التقدير،
[اسم الموظف المختص]
[القسم]
[جامعة قطر]\`
        : \`Dear [Name],

This email confirms receipt of your [Document Description] submitted on [Date]. Your request will be processed within [Timeframe].

We will contact you if any additional information is required.

Best regards,
[Staff Name]
[Department]
[Qatar University]\`,
      tags: IS_RTL?['تأكيد','استلام','رد رسمي']:['confirmation','receipt','official'],
      usageCount:20, createdAt: new Date(Date.now()-20*864e5).toISOString()
    },
  ];

  // ── LOAD TEMPLATES ──
  function loadTemplates() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_TEMPLATES));
      return DEFAULT_TEMPLATES;
    }
    return JSON.parse(saved);
  }

  function saveTemplates(templates) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(templates));
  }

  // ── STATE ──
  let allTemplates = loadTemplates();
  let currentViewId = null;

  // ── RENDER ──
  function getCategoryMeta(cat) {
    return CATEGORY_META[cat] || { label: cat, color:'#6B7280', bg:'#F9FAFB' };
  }

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString(IS_RTL ? 'ar-QA' : 'en-GB', { year:'numeric', month:'short', day:'numeric' });
  }

  function renderCard(tmpl) {
    const cat = getCategoryMeta(tmpl.category);
    const bodyPreview = tmpl.body.substring(0, 120).replace(/</g,'&lt;').replace(/>/g,'&gt;') + (tmpl.body.length > 120 ? '…' : '');
    const tagsHtml = (tmpl.tags||[]).map(tag => \`<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">#\${tag}</span>\`).join('');
    return \`
    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col overflow-hidden template-card" data-id="\${tmpl.id}">
      <!-- Card Top Bar -->
      <div class="h-1.5" style="background:\${cat.color}"></div>
      <!-- Card Body -->
      <div class="p-5 flex-1">
        <div class="flex items-start justify-between gap-2 mb-2 \${IS_RTL?'flex-row-reverse':''}">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full" style="color:\${cat.color};background:\${cat.bg}">\${cat.label}</span>
          <div class="flex gap-1 flex-shrink-0">
            <button onclick="copyTemplate('\${tmpl.id}')" class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-emerald-50 hover:text-emerald-600 transition" title="\${IS_RTL?'نسخ':'Copy'}">
              <i class="fas fa-copy"></i>
            </button>
            <button onclick="openEditModal('\${tmpl.id}')" class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-blue-50 hover:text-blue-600 transition" title="\${IS_RTL?'تعديل':'Edit'}">
              <i class="fas fa-pen"></i>
            </button>
            <button onclick="deleteTemplate('\${tmpl.id}')" class="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-gray-400 hover:bg-red-50 hover:text-red-600 transition" title="\${IS_RTL?'حذف':'Delete'}">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
        <h3 class="font-semibold text-gray-800 text-base mb-1 \${IS_RTL?'text-right':''}" style="line-height:1.4">\${tmpl.title}</h3>
        \${tmpl.subject ? \`<p class="text-xs text-gray-400 mb-2 \${IS_RTL?'text-right':''}"><i class="fas fa-at mr-1 opacity-60"></i>\${tmpl.subject}</p>\` : ''}
        <p class="text-sm text-gray-500 mb-3 leading-relaxed \${IS_RTL?'text-right':''}" style="white-space:pre-line">\${bodyPreview}</p>
        <div class="flex flex-wrap gap-1 mb-3 \${IS_RTL?'flex-row-reverse':''}">\${tagsHtml}</div>
      </div>
      <!-- Card Footer -->
      <div class="px-5 pb-4 flex items-center justify-between \${IS_RTL?'flex-row-reverse':''}">
        <span class="text-xs text-gray-400"><i class="fas fa-calendar-alt mr-1 opacity-50"></i>\${formatDate(tmpl.createdAt)}</span>
        <div class="flex items-center gap-3">
          <span class="text-xs text-gray-400"><i class="fas fa-copy mr-1 opacity-50"></i>\${tmpl.usageCount||0} \${IS_RTL?'مرة':'uses'}</span>
          <button onclick="openViewModal('\${tmpl.id}')"
            class="text-xs font-semibold px-3 py-1.5 rounded-lg hover:opacity-90 transition"
            style="background:var(--qu-maroon); color:white">
            \${IS_RTL?'عرض':'View'}
          </button>
        </div>
      </div>
    </div>\`;
  }

  function renderAll(list) {
    const grid = document.getElementById('templatesGrid');
    const empty = document.getElementById('emptyState');
    if (!list.length) {
      grid.innerHTML = '';
      empty.classList.remove('hidden');
    } else {
      empty.classList.add('hidden');
      grid.innerHTML = list.map(renderCard).join('');
    }
    updateStats();
  }

  function updateStats() {
    const all = allTemplates;
    document.getElementById('statTotal').textContent = all.length;
    document.getElementById('statHR').textContent = all.filter(t=>t.category==='hr').length;
    document.getElementById('statPayroll').textContent = all.filter(t=>t.category==='payroll').length;
    document.getElementById('statGeneral').textContent = all.filter(t=>['general','academic','admin'].includes(t.category)).length;
  }

  function filterTemplates() {
    const q = document.getElementById('searchInput').value.toLowerCase().trim();
    const cat = document.getElementById('categoryFilter').value;
    const sort = document.getElementById('sortOrder').value;
    let filtered = [...allTemplates];
    if (cat !== 'all') filtered = filtered.filter(t => t.category === cat);
    if (q) filtered = filtered.filter(t =>
      t.title.toLowerCase().includes(q) ||
      (t.subject||'').toLowerCase().includes(q) ||
      t.body.toLowerCase().includes(q) ||
      (t.tags||[]).some(tag => tag.toLowerCase().includes(q))
    );
    if (sort === 'newest') filtered.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt));
    else if (sort === 'oldest') filtered.sort((a,b)=>new Date(a.createdAt)-new Date(b.createdAt));
    else if (sort === 'az') filtered.sort((a,b)=>a.title.localeCompare(b.title));
    else if (sort === 'za') filtered.sort((a,b)=>b.title.localeCompare(a.title));
    else if (sort === 'used') filtered.sort((a,b)=>(b.usageCount||0)-(a.usageCount||0));
    renderAll(filtered);
  }

  // ── MODALS ──
  function openAddModal() {
    document.getElementById('editingId').value = '';
    document.getElementById('modalTitle').textContent = LABELS.addTitle;
    document.getElementById('modalTitle_').value = '';
    document.getElementById('modalCategory').value = 'hr';
    document.getElementById('modalSubject').value = '';
    document.getElementById('modalBody').value = '';
    document.getElementById('modalTags').value = '';
    document.getElementById('templateModal').classList.remove('hidden');
  }

  function openEditModal(id) {
    const tmpl = allTemplates.find(t=>t.id===id);
    if (!tmpl) return;
    document.getElementById('editingId').value = id;
    document.getElementById('modalTitle').textContent = LABELS.editTitle;
    document.getElementById('modalTitle_').value = tmpl.title;
    document.getElementById('modalCategory').value = tmpl.category;
    document.getElementById('modalSubject').value = tmpl.subject||'';
    document.getElementById('modalBody').value = tmpl.body;
    document.getElementById('modalTags').value = (tmpl.tags||[]).join(', ');
    document.getElementById('templateModal').classList.remove('hidden');
    document.getElementById('viewModal').classList.add('hidden');
  }

  function closeModal() {
    document.getElementById('templateModal').classList.add('hidden');
  }

  function saveTemplate() {
    const title = document.getElementById('modalTitle_').value.trim();
    const body = document.getElementById('modalBody').value.trim();
    if (!title) { showToast(LABELS.titleRequired, true); return; }
    if (!body)  { showToast(LABELS.bodyRequired, true);  return; }
    const id = document.getElementById('editingId').value;
    const tagsRaw = document.getElementById('modalTags').value;
    const tags = tagsRaw.split(',').map(s=>s.trim()).filter(Boolean);
    const category = document.getElementById('modalCategory').value;
    const subject = document.getElementById('modalSubject').value.trim();
    if (id) {
      const idx = allTemplates.findIndex(t=>t.id===id);
      if (idx !== -1) {
        allTemplates[idx] = { ...allTemplates[idx], title, category, subject, body, tags, updatedAt: new Date().toISOString() };
      }
    } else {
      const newId = 't' + Date.now();
      allTemplates.unshift({ id:newId, title, category, subject, body, tags, usageCount:0, createdAt: new Date().toISOString() });
    }
    saveTemplates(allTemplates);
    closeModal();
    filterTemplates();
    showToast(LABELS.saved);
  }

  function deleteTemplate(id) {
    if (!confirm(LABELS.confirmDelete)) return;
    allTemplates = allTemplates.filter(t=>t.id!==id);
    saveTemplates(allTemplates);
    filterTemplates();
    showToast(LABELS.deleted);
  }

  function copyTemplate(id) {
    const tmpl = allTemplates.find(t=>t.id===id);
    if (!tmpl) return;
    navigator.clipboard.writeText(tmpl.body).then(() => {
      tmpl.usageCount = (tmpl.usageCount||0)+1;
      saveTemplates(allTemplates);
      showToast(LABELS.copied);
    }).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = tmpl.body;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      tmpl.usageCount = (tmpl.usageCount||0)+1;
      saveTemplates(allTemplates);
      showToast(LABELS.copied);
    });
  }

  // ── VIEW MODAL ──
  function openViewModal(id) {
    const tmpl = allTemplates.find(t=>t.id===id);
    if (!tmpl) return;
    currentViewId = id;
    const cat = getCategoryMeta(tmpl.category);
    document.getElementById('viewTitle').textContent = tmpl.title;
    const badge = document.getElementById('viewCategoryBadge');
    badge.textContent = cat.label;
    badge.style.color = cat.color;
    badge.style.background = cat.bg;
    const subEl = document.getElementById('viewSubjectLine');
    subEl.textContent = tmpl.subject ? '📧 ' + tmpl.subject : '';
    document.getElementById('viewBody').textContent = tmpl.body;
    const tagsEl = document.getElementById('viewTags');
    tagsEl.innerHTML = (tmpl.tags||[]).map(tag=>\`<span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">#\${tag}</span>\`).join('');
    document.getElementById('viewModal').classList.remove('hidden');
  }

  function closeViewModal() {
    document.getElementById('viewModal').classList.add('hidden');
    currentViewId = null;
  }

  function copyFromView() {
    if (currentViewId) copyTemplate(currentViewId);
    closeViewModal();
  }

  function editFromView() {
    if (currentViewId) openEditModal(currentViewId);
  }

  // ── TOAST ──
  function showToast(msg, isError=false) {
    const el = document.getElementById('toast');
    const icon = el.querySelector('i');
    document.getElementById('toastMsg').textContent = msg;
    icon.className = isError ? 'fas fa-exclamation-circle text-red-400' : 'fas fa-check-circle text-emerald-400';
    el.classList.remove('hidden');
    setTimeout(()=>el.classList.add('hidden'), 3000);
  }

  // Click outside modals to close
  document.getElementById('templateModal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.getElementById('viewModal').addEventListener('click', function(e) {
    if (e.target === this) closeViewModal();
  });

  // ── INIT ──
  filterTemplates();
  </script>`

  return c.html(layout(pageTitle, content, 'email-templates', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  PROMOTIONS  /promotions
// ─────────────────────────────────────────────────────────────────────────────
app.get('/promotions', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const lbl = {
    title:        isRTL ? 'الترقيات الإدارية' : 'Administrative Promotions',
    subtitle:     isRTL ? 'متابعة الترقيات المتوقعة وشروطها وتغييرات الدرجة والراتب لموظفي جامعة قطر' : 'Track expected promotions, eligibility conditions, grade and salary changes for QU staff',
    kpi1:         isRTL ? 'إجمالي المرشحين' : 'Total Candidates',
    kpi2:         isRTL ? 'مستوفون للشروط' : 'Fully Eligible',
    kpi3:         isRTL ? 'قيد المتابعة' : 'Under Review',
    kpi4:         isRTL ? 'متوسط سنوات الخدمة' : 'Avg. Years of Service',
    filterGrade:  isRTL ? 'كل الدرجات' : 'All Grades',
    filterMonth:  isRTL ? 'كل الأشهر' : 'All Months',
    filterEdu:    isRTL ? 'كل المؤهلات' : 'All Qualifications',
    filterStatus: isRTL ? 'كل الحالات' : 'All Statuses',
    filterDept:   isRTL ? 'كل الأقسام' : 'All Departments',
    colName:      isRTL ? 'اسم الموظف' : 'Employee Name',
    colId:        isRTL ? 'الرقم الوظيفي' : 'Employee ID',
    colDept:      isRTL ? 'القسم' : 'Department',
    colGrade:     isRTL ? 'الدرجة الحالية' : 'Current Grade',
    colNewGrade:  isRTL ? 'الدرجة المتوقعة' : 'Expected Grade',
    colSalary:    isRTL ? 'الراتب الحالي' : 'Current Salary',
    colNewSalary: isRTL ? 'الراتب المتوقع' : 'Expected Salary',
    colIncrease:  isRTL ? 'الزيادة' : 'Increase',
    colMonth:     isRTL ? 'شهر الترقية' : 'Promotion Month',
    colEdu:       isRTL ? 'المؤهل العلمي' : 'Qualification',
    colEval:      isRTL ? 'التقييم' : 'Evaluation',
    colCourses:   isRTL ? 'الدورات' : 'Courses',
    colStatus:    isRTL ? 'الحالة' : 'Status',
    colYears:     isRTL ? 'سنوات الخدمة' : 'Years of Service',
    condTitle:    isRTL ? 'شروط الترقية' : 'Promotion Conditions',
    chartTitle:   isRTL ? 'الترقيات المتوقعة شهرياً' : 'Expected Promotions by Month',
    gradeTitle:   isRTL ? 'توزيع المرشحين حسب الدرجة' : 'Candidates by Grade',
    searchPlh:    isRTL ? 'ابحث باسم الموظف أو رقمه...' : 'Search by name or ID...',
    eligible:     isRTL ? 'مستوفٍ' : 'Eligible',
    partial:      isRTL ? 'جزئي' : 'Partial',
    pending:      isRTL ? 'قيد المراجعة' : 'Under Review',
    notEligible:  isRTL ? 'غير مستوفٍ' : 'Not Eligible',
    exportBtn:    isRTL ? 'تصدير' : 'Export',
    totalLabel:   isRTL ? 'إجمالي الموظفين:' : 'Total Employees:',
  }

  const content = `
  <div dir="${isRTL ? 'rtl' : 'ltr'}">

  <!-- Header -->
  <div class="mb-6 flex items-start justify-between flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
    <div class="${isRTL ? 'text-right' : ''}">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
        <i class="fas fa-arrow-trend-up" style="color:var(--qu-maroon)"></i> ${lbl.title}
      </h1>
      <p class="text-gray-500 mt-1 text-sm">${lbl.subtitle}</p>
    </div>
    <button onclick="openPromotionReport()" class="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-sm hover:opacity-90 transition-all" style="background:var(--qu-maroon)">
      <i class="fas fa-chart-bar"></i>
      ${isRTL ? 'إصدار التقارير' : 'Generate Report'}
    </button>
  </div>

  <!-- ══ PROMOTIONS REPORT MODAL ══ -->
  <div id="promotionReportModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 hidden" style="background:rgba(0,0,0,0.55)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" dir="${isRTL ? 'rtl' : 'ltr'}">
      <!-- Modal Header -->
      <div class="flex items-center justify-between px-6 py-4 rounded-t-2xl ${isRTL ? 'flex-row-reverse' : ''}" style="background:linear-gradient(135deg,var(--qu-maroon),#6b1222)">
        <div class="flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <i class="fas fa-chart-bar text-white text-lg"></i>
          </div>
          <div class="${isRTL ? 'text-right' : ''}">
            <h2 class="text-white font-bold text-lg">${isRTL ? 'تقرير الترقيات الإدارية' : 'Administrative Promotions Report'}</h2>
            <p class="text-white/70 text-xs">${isRTL ? 'جامعة قطر — قسم الرواتب' : 'Qatar University — Payroll Department'}</p>
          </div>
        </div>
        <button onclick="closePromotionReport()" class="text-white/80 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-6">

        <!-- Report Date & Info -->
        <div class="flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500 border-b pb-3 ${isRTL ? 'flex-row-reverse' : ''}">
          <span><i class="fas fa-calendar-alt mr-1"></i> <span id="prReportDate"></span></span>
          <span class="font-semibold text-gray-700">${isRTL ? 'السنة المالية: 2025' : 'Fiscal Year: 2025'}</span>
        </div>

        <!-- KPI Summary Cards -->
        <div>
          <h3 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}">
            <i class="fas fa-tachometer-alt" style="color:var(--qu-maroon)"></i>
            ${isRTL ? 'ملخص المؤشرات' : 'Key Indicators Summary'}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" id="prKpiCards"></div>
        </div>

        <!-- Department Breakdown -->
        <div>
          <h3 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}">
            <i class="fas fa-sitemap" style="color:var(--qu-maroon)"></i>
            ${isRTL ? 'توزيع المرشحين حسب القسم' : 'Candidates by Department'}
          </h3>
          <div class="overflow-x-auto rounded-xl border border-gray-100">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-xs text-gray-500 uppercase" style="background:#faf0f2">
                  <th class="px-4 py-2 ${isRTL ? 'text-right' : 'text-left'}">${isRTL ? 'القسم' : 'Department'}</th>
                  <th class="px-4 py-2 text-center">${isRTL ? 'المرشحون' : 'Candidates'}</th>
                  <th class="px-4 py-2 text-center">${isRTL ? 'مستوفون' : 'Eligible'}</th>
                  <th class="px-4 py-2 text-center">${isRTL ? 'قيد المراجعة' : 'Under Review'}</th>
                  <th class="px-4 py-2 text-center">${isRTL ? 'نسبة الأهلية' : 'Eligibility %'}</th>
                </tr>
              </thead>
              <tbody id="prDeptTable" class="divide-y divide-gray-50"></tbody>
            </table>
          </div>
        </div>

        <!-- Employees Table -->
        <div>
          <h3 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}">
            <i class="fas fa-users" style="color:var(--qu-maroon)"></i>
            ${isRTL ? 'قائمة المرشحين للترقية' : 'Promotion Candidates List'}
          </h3>
          <div class="overflow-x-auto rounded-xl border border-gray-100">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-xs text-gray-500 uppercase" style="background:#faf0f2">
                  <th class="px-3 py-2 ${isRTL ? 'text-right' : 'text-left'}">${isRTL ? 'الاسم' : 'Name'}</th>
                  <th class="px-3 py-2 ${isRTL ? 'text-right' : 'text-left'}">${isRTL ? 'القسم' : 'Dept'}</th>
                  <th class="px-3 py-2 text-center">${isRTL ? 'الدرجة' : 'Grade'}</th>
                  <th class="px-3 py-2 text-center">${isRTL ? 'السنوات' : 'Years'}</th>
                  <th class="px-3 py-2 text-center">${isRTL ? 'شهر الترقية' : 'Month'}</th>
                  <th class="px-3 py-2 text-center">${isRTL ? 'الحالة' : 'Status'}</th>
                </tr>
              </thead>
              <tbody id="prEmpTable" class="divide-y divide-gray-50"></tbody>
            </table>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 pt-2 flex-wrap ${isRTL ? 'flex-row-reverse' : ''}">
          <button onclick="printPromotionReport()" class="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-all" style="background:var(--qu-maroon)">
            <i class="fas fa-print"></i> ${isRTL ? 'طباعة التقرير' : 'Print Report'}
          </button>
          <button onclick="exportPromotionCSV()" class="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border-2 hover:bg-gray-50 transition-all" style="border-color:var(--qu-maroon);color:var(--qu-maroon)">
            <i class="fas fa-file-csv"></i> ${isRTL ? 'تصدير CSV' : 'Export CSV'}
          </button>
          <button onclick="closePromotionReport()" class="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all ${isRTL ? 'mr-auto' : 'ml-auto'}">
            ${isRTL ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- KPI Cards -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6" id="kpiBar">
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div class="text-2xl font-black" style="color:var(--qu-maroon)" id="kpiTotal">0</div>
      <div class="text-xs text-gray-500 mt-1">${lbl.kpi1}</div>
    </div>
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div class="text-2xl font-black text-emerald-600" id="kpiEligible">0</div>
      <div class="text-xs text-gray-500 mt-1">${lbl.kpi2}</div>
    </div>
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div class="text-2xl font-black text-amber-500" id="kpiReview">0</div>
      <div class="text-xs text-gray-500 mt-1">${lbl.kpi3}</div>
    </div>
    <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div class="text-2xl font-black text-blue-600" id="kpiAvgYears">0</div>
      <div class="text-xs text-gray-500 mt-1">${lbl.kpi4}</div>
    </div>
  </div>

  <!-- Charts Row -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
    <!-- Monthly Bar Chart -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 lg:col-span-2">
      <h3 class="font-bold text-gray-700 text-sm mb-4">${lbl.chartTitle}</h3>
      <div id="monthlyChart" class="flex items-end gap-2 h-40"></div>
    </div>
    <!-- Grade Donut -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
      <h3 class="font-bold text-gray-700 text-sm mb-4">${lbl.gradeTitle}</h3>
      <div id="gradeLegend" class="space-y-2"></div>
    </div>
  </div>

  <!-- Conditions Banner -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5 mb-6">
    <h3 class="font-bold text-gray-700 text-sm mb-3">${lbl.condTitle}</h3>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" id="condCards"></div>
  </div>

  <!-- Filters + Table -->
  <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
    <!-- Filter Bar -->
    <div class="flex flex-wrap gap-3 mb-5 items-center">
      <input id="searchEmp" type="text" placeholder="${lbl.searchPlh}"
        class="border border-gray-200 rounded-lg px-3 py-2 text-sm flex-1 min-w-44 focus:outline-none focus:ring-2 focus:ring-red-200"
        oninput="applyFilters()">
      <select id="fGrade" onchange="applyFilters()" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200">
        <option value="">${lbl.filterGrade}</option>
        <option value="2">${isRTL ? 'الدرجة الثانية' : 'Grade 2'}</option>
        <option value="3">${isRTL ? 'الدرجة الثالثة' : 'Grade 3'}</option>
        <option value="4">${isRTL ? 'الدرجة الرابعة' : 'Grade 4'}</option>
        <option value="5">${isRTL ? 'الدرجة الخامسة' : 'Grade 5'}</option>
        <option value="6">${isRTL ? 'الدرجة السادسة' : 'Grade 6'}</option>
        <option value="7">${isRTL ? 'الدرجة السابعة' : 'Grade 7'}</option>
      </select>
      <select id="fMonth" onchange="applyFilters()" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200">
        <option value="">${lbl.filterMonth}</option>
        ${['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'].map((m,i)=>`<option value="${i+1}">${isRTL ? m : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][i]}</option>`).join('')}
      </select>
      <select id="fEdu" onchange="applyFilters()" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200">
        <option value="">${lbl.filterEdu}</option>
        <option value="phd">${isRTL ? 'دكتوراه' : 'PhD'}</option>
        <option value="master">${isRTL ? 'ماجستير' : 'Master'}</option>
        <option value="bachelor">${isRTL ? 'بكالوريوس' : 'Bachelor'}</option>
        <option value="diploma">${isRTL ? 'دبلوم' : 'Diploma'}</option>
      </select>
      <select id="fStatus" onchange="applyFilters()" class="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-200">
        <option value="">${lbl.filterStatus}</option>
        <option value="eligible">${lbl.eligible}</option>
        <option value="partial">${lbl.partial}</option>
        <option value="review">${lbl.pending}</option>
        <option value="not">${lbl.notEligible}</option>
      </select>
    </div>

    <!-- Total count -->
    <div class="flex items-center justify-between mb-3">
      <span class="text-xs text-gray-400" id="totalCount"></span>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b border-gray-100 text-xs text-gray-500 font-semibold">
            <th class="py-3 px-3 text-start">${lbl.colName}</th>
            <th class="py-3 px-3 text-start">${lbl.colDept}</th>
            <th class="py-3 px-3 text-center">${lbl.colGrade}</th>
            <th class="py-3 px-3 text-center">${lbl.colNewGrade}</th>
            <th class="py-3 px-3 text-end">${lbl.colSalary}</th>
            <th class="py-3 px-3 text-end">${lbl.colNewSalary}</th>
            <th class="py-3 px-3 text-center">${lbl.colIncrease}</th>
            <th class="py-3 px-3 text-center">${lbl.colEval}</th>
            <th class="py-3 px-3 text-center">${lbl.colCourses}</th>
            <th class="py-3 px-3 text-center">${lbl.colMonth}</th>
            <th class="py-3 px-3 text-center">${lbl.colStatus}</th>
          </tr>
        </thead>
        <tbody id="empTable"></tbody>
      </table>
    </div>
    <div id="emptyState" class="hidden text-center py-12 text-gray-400 text-sm">${isRTL ? 'لا توجد نتائج مطابقة' : 'No matching results'}</div>
  </div>

  </div>

  <script>
  const IS_RTL = ${isRTL ? 'true' : 'false'};

  // ── LABELS ──
  const L = {
    eligible:    IS_RTL ? 'مستوفٍ'        : 'Eligible',
    partial:     IS_RTL ? 'جزئي'          : 'Partial',
    review:      IS_RTL ? 'قيد المراجعة'  : 'Under Review',
    not:         IS_RTL ? 'غير مستوفٍ'    : 'Not Eligible',
    grade:       IS_RTL ? 'الدرجة '       : 'Grade ',
    qr:          IS_RTL ? 'ريال'          : 'QR',
    total:       IS_RTL ? 'إجمالي الموظفين: ' : 'Total Employees: ',
    months:      IS_RTL
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    eduMap: {
      phd:      IS_RTL ? 'دكتوراه'    : 'PhD',
      master:   IS_RTL ? 'ماجستير'   : 'Master',
      bachelor: IS_RTL ? 'بكالوريوس' : 'Bachelor',
      diploma:  IS_RTL ? 'دبلوم'     : 'Diploma',
    },
    evalMap: {
      exceptional:  IS_RTL ? 'ممتاز'         : 'Exceptional',
      exceeds:      IS_RTL ? 'يتجاوز التوقعات': 'Exceeds Exp.',
      meets:        IS_RTL ? 'يحقق التوقعات' : 'Meets Exp.',
      below:        IS_RTL ? 'دون التوقعات'  : 'Below Exp.',
    },
    depts: IS_RTL
      ? ['الموارد البشرية','الشؤون المالية','تقنية المعلومات','الشؤون الأكاديمية','خدمات الطلاب','المرافق والخدمات','البحث العلمي','العلاقات العامة']
      : ['Human Resources','Finance','IT','Academic Affairs','Student Services','Facilities','Research','Public Relations'],
    condLabels: IS_RTL
      ? ['سنوات الخدمة','التقييم السنوي','الدورات التدريبية','المؤهل العلمي']
      : ['Years of Service','Annual Evaluation','Training Courses','Academic Qualification'],
    condDesc: IS_RTL
      ? ['3 سنوات على الأقل في الدرجة الحالية','تقييم لا يقل عن «يحقق التوقعات» لآخر سنتين','إتمام دورتين تدريبيتين معتمدتين على الأقل','مؤهل علمي مناسب للدرجة المطلوبة']
      : ['Min. 3 years in current grade','Rating of at least "Meets Expectations" for last 2 years','Completion of at least 2 approved training courses','Appropriate qualification for the target grade'],
    condIcons: ['📅','📊','🎓','🏅'],
  };

  // ── GRADE SALARY SCALE ──
  const SALARY_SCALE = { 2:8000, 3:10000, 4:13000, 5:16500, 6:21000, 7:27000, 8:35000 };

  // ── SEED DATA ──
  function genEmployees() {
    const names_ar = ['أحمد محمد العمري','فاطمة علي الكعبي','خالد سالم المنصوري','نورة عبدالله القحطاني','سعد ناصر الدوسري','منى يوسف الشمري','عبدالله راشد المهندي','هيفاء حسن العتيبي','محمد إبراهيم الزهراني','سارة عمر الحربي','علي عبدالعزيز الغامدي','ريم سلطان البلوي','يوسف طارق الرشيدي','لمياء صالح الأنصاري','ناصر فهد الجابري','دانة محمد السبيعي','عمر خليل الحمدان','شيخة عيسى المزروعي','طارق عادل البدر','حصة جاسم النعيمي'];
    const names_en = ['Ahmed Al-Omari','Fatima Al-Kaabi','Khalid Al-Mansouri','Noura Al-Qahtani','Saad Al-Dosari','Mona Al-Shammari','Abdullah Al-Muhannadi','Haifa Al-Otaibi','Mohammed Al-Zahrani','Sara Al-Harbi','Ali Al-Ghamdi','Reem Al-Balawi','Yousef Al-Rashidi','Lamia Al-Ansari','Nasser Al-Jabri','Dana Al-Subaie','Omar Al-Hamdan','Shaikha Al-Mazrouei','Tariq Al-Badr','Hessa Al-Nuaimi'];
    const names = IS_RTL ? names_ar : names_en;
    const depts = L.depts;
    const edus = ['phd','master','bachelor','diploma'];
    const evals = ['exceptional','exceeds','meets','below'];
    const statuses = ['eligible','eligible','eligible','partial','partial','review','review','not'];

    return names.map((name, i) => {
      const grade = [2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,4,3,5,6][i];
      const newGrade = grade + 1;
      const curSal = SALARY_SCALE[grade];
      const newSal = SALARY_SCALE[newGrade] || Math.round(curSal * 1.18);
      const evalKey = evals[i % evals.length];
      const courses = [3,2,1,4,2,3,1,2,3,2,4,1,2,3,2,1,3,2,4,2][i];
      const years = [4,5,3,7,4,6,3,5,8,4,3,6,5,4,7,3,5,4,6,5][i];
      const eduKey = edus[i % edus.length];
      const month = (i % 12) + 1;
      // determine status by conditions
      const yearsOk = years >= 3;
      const evalOk = ['exceptional','exceeds','meets'].includes(evalKey);
      const coursesOk = courses >= 2;
      let status = statuses[i % statuses.length];
      if (yearsOk && evalOk && coursesOk) status = 'eligible';
      else if (!yearsOk || !evalOk) status = 'not';
      else if (!coursesOk) status = 'partial';

      return { id: \`QU-\${(1000+i+1)}\`, name, dept: depts[i % depts.length], grade, newGrade, curSal, newSal,
               increase: newSal - curSal, edu: eduKey, eval: evalKey, courses, years, month, status };
    });
  }

  const ALL_EMP = genEmployees();
  let filtered = [...ALL_EMP];

  // ── STATUS BADGE ──
  function statusBadge(s) {
    const cfg = {
      eligible: 'background:#ECFDF5;color:#059669',
      partial:  'background:#FFFBEB;color:#D97706',
      review:   'background:#EFF6FF;color:#3B82F6',
      not:      'background:#FEF2F2;color:#DC2626',
    };
    return \`<span class="text-xs font-semibold px-2 py-0.5 rounded-full" style="\${cfg[s]||''}">\${L[s]||s}</span>\`;
  }

  function evalBadge(e) {
    const cfg = {
      exceptional: 'background:rgba(139,26,47,0.1);color:#8B1A2F',
      exceeds:     'background:#EFF6FF;color:#3B82F6',
      meets:       'background:#ECFDF5;color:#059669',
      below:       'background:#FEF2F2;color:#DC2626',
    };
    return \`<span class="text-xs px-2 py-0.5 rounded-full" style="\${cfg[e]||''}">\${L.evalMap[e]||e}</span>\`;
  }

  function fmt(n) { return n.toLocaleString() + ' ' + L.qr; }

  // ── RENDER TABLE ──
  function renderTable(data) {
    const tbody = document.getElementById('empTable');
    const empty = document.getElementById('emptyState');
    document.getElementById('totalCount').textContent = L.total + data.length;
    if (!data.length) { tbody.innerHTML=''; empty.classList.remove('hidden'); return; }
    empty.classList.add('hidden');
    tbody.innerHTML = data.map(e => \`
    <tr class="border-b border-gray-50 hover:bg-gray-50 transition">
      <td class="py-3 px-3">
        <div class="font-semibold text-gray-800 text-sm">\${e.name}</div>
        <div class="text-xs text-gray-400">\${e.id}</div>
      </td>
      <td class="py-3 px-3 text-xs text-gray-600">\${e.dept}</td>
      <td class="py-3 px-3 text-center">
        <span class="text-xs font-bold px-2 py-1 rounded-lg" style="background:rgba(139,26,47,0.08);color:var(--qu-maroon)">\${L.grade}\${e.grade}</span>
      </td>
      <td class="py-3 px-3 text-center">
        <span class="text-xs font-bold px-2 py-1 rounded-lg" style="background:#ECFDF5;color:#059669">\${L.grade}\${e.newGrade}</span>
      </td>
      <td class="py-3 px-3 text-end text-xs text-gray-600">\${fmt(e.curSal)}</td>
      <td class="py-3 px-3 text-end text-xs font-semibold text-gray-800">\${fmt(e.newSal)}</td>
      <td class="py-3 px-3 text-center">
        <span class="text-xs font-bold text-emerald-600">+\${fmt(e.increase)}</span>
      </td>
      <td class="py-3 px-3 text-center">\${evalBadge(e.eval)}</td>
      <td class="py-3 px-3 text-center">
        <span class="text-xs font-semibold \${e.courses >= 2 ? 'text-emerald-600' : 'text-red-500'}">\${e.courses} / 2</span>
      </td>
      <td class="py-3 px-3 text-center text-xs text-gray-600">\${L.months[e.month-1]}</td>
      <td class="py-3 px-3 text-center">\${statusBadge(e.status)}</td>
    </tr>\`).join('');
  }

  // ── FILTERS ──
  function applyFilters() {
    const q     = document.getElementById('searchEmp').value.toLowerCase();
    const grade = document.getElementById('fGrade').value;
    const month = document.getElementById('fMonth').value;
    const edu   = document.getElementById('fEdu').value;
    const stat  = document.getElementById('fStatus').value;
    filtered = ALL_EMP.filter(e =>
      (!q     || e.name.toLowerCase().includes(q) || e.id.toLowerCase().includes(q)) &&
      (!grade || e.grade == grade) &&
      (!month || e.month == month) &&
      (!edu   || e.edu === edu) &&
      (!stat  || e.status === stat)
    );
    renderTable(filtered);
    updateKPIs(filtered);
  }

  // ── KPIs ──
  function updateKPIs(data) {
    document.getElementById('kpiTotal').textContent    = data.length;
    document.getElementById('kpiEligible').textContent = data.filter(e=>e.status==='eligible').length;
    document.getElementById('kpiReview').textContent   = data.filter(e=>e.status==='review').length;
    const avg = data.length ? (data.reduce((s,e)=>s+e.years,0)/data.length).toFixed(1) : 0;
    document.getElementById('kpiAvgYears').textContent = avg;
  }

  // ── MONTHLY CHART ──
  function renderChart(data) {
    const counts = Array(12).fill(0);
    data.forEach(e => counts[e.month-1]++);
    const max = Math.max(...counts, 1);
    const container = document.getElementById('monthlyChart');
    container.innerHTML = counts.map((c,i) => \`
      <div class="flex flex-col items-center flex-1 gap-1">
        <span class="text-xs font-bold text-gray-600">\${c||''}</span>
        <div class="w-full rounded-t-md transition-all" style="height:\${Math.max((c/max)*130,2)}px;background:\${c===Math.max(...counts)?'var(--qu-maroon)':'rgba(139,26,47,0.25)'}"></div>
        <span class="text-xs text-gray-400" style="font-size:10px">\${L.months[i].substring(0,3)}</span>
      </div>\`).join('');
  }

  // ── GRADE LEGEND ──
  function renderGradeLegend(data) {
    const counts = {};
    data.forEach(e => { counts[e.grade] = (counts[e.grade]||0)+1; });
    const colors = ['#8B1A2F','#C4922A','#3B82F6','#10B981','#8B5CF6','#F59E0B'];
    const grades = Object.keys(counts).sort((a,b)=>a-b);
    const total = data.length || 1;
    document.getElementById('gradeLegend').innerHTML = grades.map((g,i) => {
      const pct = Math.round((counts[g]/total)*100);
      return \`
      <div>
        <div class="flex items-center justify-between text-xs mb-1">
          <span class="font-medium text-gray-700">\${L.grade}\${g}</span>
          <span class="text-gray-400">\${counts[g]} (\${pct}%)</span>
        </div>
        <div class="h-2 rounded-full bg-gray-100 overflow-hidden">
          <div class="h-full rounded-full transition-all" style="width:\${pct}%;background:\${colors[i%colors.length]}"></div>
        </div>
      </div>\`;
    }).join('');
  }

  // ── CONDITIONS CARDS ──
  function renderConditions() {
    document.getElementById('condCards').innerHTML = L.condLabels.map((lbl,i) => \`
    <div class="p-3 rounded-xl border border-gray-100 bg-gray-50">
      <div class="text-xl mb-2">\${L.condIcons[i]}</div>
      <div class="text-xs font-bold text-gray-700 mb-1">\${lbl}</div>
      <div class="text-xs text-gray-500 leading-relaxed">\${L.condDesc[i]}</div>
    </div>\`).join('');
  }

  // ── INIT ──
  renderTable(ALL_EMP);
  updateKPIs(ALL_EMP);
  renderChart(ALL_EMP);
  renderGradeLegend(ALL_EMP);
  renderConditions();

  // ══════════════════════════════════════════════════
  //  PROMOTIONS REPORT MODAL
  // ══════════════════════════════════════════════════
  const isRTL_PR = ${isRTL};

  function openPromotionReport() {
    // Set report date
    const now = new Date();
    const dateStr = now.toLocaleDateString(isRTL_PR ? 'ar-QA' : 'en-GB', { year:'numeric', month:'long', day:'numeric' });
    document.getElementById('prReportDate').textContent = dateStr;

    // KPI cards
    const total    = ALL_EMP.length;
    const eligible = ALL_EMP.filter(e => e.status === 'eligible').length;
    const review   = ALL_EMP.filter(e => e.status === 'review').length;
    const avgYrs   = total ? (ALL_EMP.reduce((s,e)=>s+e.years,0)/total).toFixed(1) : 0;
    const kpis = [
      { val: total,    label: isRTL_PR ? 'إجمالي المرشحين'     : 'Total Candidates',    color:'#8B1A2F', icon:'fa-users' },
      { val: eligible, label: isRTL_PR ? 'مستوفون للشروط'      : 'Fully Eligible',      color:'#10B981', icon:'fa-circle-check' },
      { val: review,   label: isRTL_PR ? 'قيد المراجعة'        : 'Under Review',        color:'#F59E0B', icon:'fa-clock' },
      { val: avgYrs,   label: isRTL_PR ? 'متوسط سنوات الخدمة'  : 'Avg. Service Years',  color:'#3B82F6', icon:'fa-calendar' },
    ];
    document.getElementById('prKpiCards').innerHTML = kpis.map(k => \`
      <div class="rounded-xl p-4 text-center border border-gray-100 bg-gray-50">
        <div class="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2" style="background:\${k.color}22">
          <i class="fas \${k.icon} text-sm" style="color:\${k.color}"></i>
        </div>
        <div class="text-2xl font-black" style="color:\${k.color}">\${k.val}</div>
        <div class="text-xs text-gray-500 mt-1 leading-tight">\${k.label}</div>
      </div>\`).join('');

    // Department breakdown
    const deptMap = {};
    ALL_EMP.forEach(e => {
      if (!deptMap[e.dept]) deptMap[e.dept] = { total:0, eligible:0, review:0 };
      deptMap[e.dept].total++;
      if (e.status === 'eligible') deptMap[e.dept].eligible++;
      if (e.status === 'review')   deptMap[e.dept].review++;
    });
    const depts = Object.keys(deptMap).sort();
    document.getElementById('prDeptTable').innerHTML = depts.map((d,i) => {
      const r = deptMap[d];
      const pct = Math.round((r.eligible / r.total) * 100);
      const bg  = i % 2 === 0 ? '#fff' : '#fafafa';
      return \`<tr style="background:\${bg}">
        <td class="px-4 py-2 font-medium text-gray-800">\${d}</td>
        <td class="px-4 py-2 text-center text-gray-600">\${r.total}</td>
        <td class="px-4 py-2 text-center font-semibold text-emerald-600">\${r.eligible}</td>
        <td class="px-4 py-2 text-center font-semibold text-amber-500">\${r.review}</td>
        <td class="px-4 py-2 text-center">
          <div class="flex items-center gap-2 justify-center">
            <div class="h-1.5 w-16 rounded-full bg-gray-200 overflow-hidden">
              <div class="h-full rounded-full" style="width:\${pct}%;background:#10B981"></div>
            </div>
            <span class="text-xs font-bold text-emerald-600">\${pct}%</span>
          </div>
        </td>
      </tr>\`;
    }).join('');

    // Status badge helper
    const statusBadge = (s) => {
      if (s === 'eligible')    return \`<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">\${isRTL_PR ? 'مستوفٍ' : 'Eligible'}</span>\`;
      if (s === 'review')      return \`<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">\${isRTL_PR ? 'مراجعة' : 'Review'}</span>\`;
      if (s === 'partial')     return \`<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">\${isRTL_PR ? 'جزئي' : 'Partial'}</span>\`;
      return \`<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">\${isRTL_PR ? 'غير مستوفٍ' : 'Not Eligible'}</span>\`;
    };
    const monthNames = isRTL_PR
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    document.getElementById('prEmpTable').innerHTML = ALL_EMP.map((e,i) => \`
      <tr style="background:\${i%2===0?'#fff':'#fafafa'}">
        <td class="px-3 py-2 font-medium text-gray-800">\${e.name}</td>
        <td class="px-3 py-2 text-gray-500 text-xs">\${e.dept}</td>
        <td class="px-3 py-2 text-center font-bold" style="color:var(--qu-maroon)">\${e.grade}</td>
        <td class="px-3 py-2 text-center text-gray-600">\${e.years}</td>
        <td class="px-3 py-2 text-center text-gray-600">\${monthNames[(e.month||1)-1]}</td>
        <td class="px-3 py-2 text-center">\${statusBadge(e.status)}</td>
      </tr>\`).join('');

    document.getElementById('promotionReportModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closePromotionReport() {
    document.getElementById('promotionReportModal').classList.add('hidden');
    document.body.style.overflow = '';
  }

  function printPromotionReport() {
    const reportContent = document.getElementById('promotionReportModal').querySelector('.bg-white').innerHTML;
    const dir = isRTL_PR ? 'rtl' : 'ltr';
    const title = isRTL_PR ? 'تقرير الترقيات الإدارية - جامعة قطر' : 'Promotions Report - Qatar University';
    const parts = [
      '<!DOCTYPE html><html dir="' + dir + '"><head><meta charset="UTF-8"><title>' + title + '</title>',
      '<link rel="stylesheet" href="https://cdn.tailwindcss.com/3.4.1/tailwind.min.css">',
      '<style>@media print{body{margin:0}button,a{display:none!important}}',
      'body{font-family:Segoe UI,Arial,sans-serif;background:#fff;padding:24px}',
      ':root{--qu-maroon:#8B1A2F}</style></head><body>',
      reportContent,
      '</body></html>'
    ];
    const blob = new Blob([parts.join('')], { type: 'text/html;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const printWin = window.open(url, '_blank', 'width=900,height=700');
    if (printWin) { setTimeout(() => { printWin.focus(); printWin.print(); URL.revokeObjectURL(url); }, 800); }
  }

  function exportPromotionCSV() {
    const headers = isRTL_PR
      ? ['الاسم','الرقم الوظيفي','القسم','الدرجة الحالية','الدرجة المتوقعة','الراتب الحالي','الراتب المتوقع','الزيادة','شهر الترقية','سنوات الخدمة','الحالة']
      : ['Name','ID','Department','Current Grade','Expected Grade','Current Salary','Expected Salary','Increase','Promotion Month','Years','Status'];
    const monthNames = isRTL_PR
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const rows = ALL_EMP.map(e => [
      e.name, e.id, e.dept, e.grade, e.newGrade || (e.grade+1),
      e.salary, e.newSalary || '', e.increase || '',
      monthNames[(e.month||1)-1], e.years, e.status
    ]);
    const csv = [headers, ...rows].map(r => r.map(v => \`"\${String(v||'').replace(/"/g,'""')}"\`).join(',')).join('\\n');
    const bom  = '\\uFEFF';
    const blob = new Blob([bom + csv], { type:'text/csv;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = isRTL_PR ? 'تقرير_الترقيات_2025.csv' : 'Promotions_Report_2025.csv';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  }

  // Close modal on backdrop click
  document.getElementById('promotionReportModal').addEventListener('click', function(e) {
    if (e.target === this) closePromotionReport();
  });
  </script>`

  return c.html(layout(lbl.title, content, 'promotions', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SCHOLARSHIP DASHBOARD  /scholarship
// ─────────────────────────────────────────────────────────────────────────────
app.get('/scholarship', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = t.schTitle

  const content = `
  <!-- KPI Cards -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <div class="bg-white rounded-lg shadow-md p-6 border-l-4" style="border-left-color: var(--qu-maroon)">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">${t.schKpi1}</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">21</p>
        </div>
        <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background: rgba(139,26,47,0.1)">
          <i class="fas fa-user-graduate text-xl" style="color: var(--qu-maroon)"></i>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">${t.schKpi2}</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">3</p>
        </div>
        <div class="w-12 h-12 rounded-full flex items-center justify-center bg-orange-50">
          <i class="fas fa-clock text-xl text-orange-600"></i>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">${t.schKpi3}</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">${isRTL ? '2.4 مليون' : '2.4M'}</p>
        </div>
        <div class="w-12 h-12 rounded-full flex items-center justify-center bg-green-50">
          <i class="fas fa-sack-dollar text-xl text-green-600"></i>
        </div>
      </div>
    </div>
    
    <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-gray-500">${t.schKpi4}</p>
          <p class="text-3xl font-bold text-gray-800 mt-2">${isRTL ? '120,000' : '120,000'}</p>
        </div>
        <div class="w-12 h-12 rounded-full flex items-center justify-center bg-blue-50">
          <i class="fas fa-money-bill-wave text-xl text-blue-600"></i>
        </div>
      </div>
    </div>
  </div>

  <!-- Quick Links -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <a href="/scholarship/rules?lang=${lang}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full flex items-center justify-center" style="background: rgba(139,26,47,0.1)">
          <i class="fas fa-gavel text-2xl" style="color: var(--qu-maroon)"></i>
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800">${t.schRules}</h3>
          <p class="text-sm text-gray-500 mt-1">${isRTL ? 'الشروط والمعايير' : 'Criteria & Conditions'}</p>
        </div>
      </div>
    </a>
    
    <a href="/scholarship/procedures?lang=${lang}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full flex items-center justify-center bg-orange-50">
          <i class="fas fa-list-check text-2xl text-orange-600"></i>
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800">${t.schProcedures}</h3>
          <p class="text-sm text-gray-500 mt-1">${isRTL ? 'خطوات التقديم' : 'Application Steps'}</p>
        </div>
      </div>
    </a>
    
    <a href="/scholarship/tracking?lang=${lang}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full flex items-center justify-center bg-green-50">
          <i class="fas fa-chart-line text-2xl text-green-600"></i>
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800">${t.schTracking}</h3>
          <p class="text-sm text-gray-500 mt-1">${isRTL ? 'متابعة المبتعثين' : 'Scholar Monitoring'}</p>
        </div>
      </div>
    </a>
    
    <a href="/scholarship/apply?lang=${lang}" class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow" style="background: linear-gradient(135deg, var(--qu-maroon), #a52a2a)">
      <div class="flex items-center gap-4">
        <div class="w-14 h-14 rounded-full flex items-center justify-center bg-white bg-opacity-20">
          <i class="fas fa-file-signature text-2xl text-white"></i>
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-white">${t.schApply}</h3>
          <p class="text-sm text-white text-opacity-90 mt-1">${isRTL ? 'للموظفين فقط' : 'Staff Only'}</p>
        </div>
      </div>
    </a>
  </div>

  <!-- Recent Activity -->
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-bold text-gray-800 mb-4">
      <i class="fas fa-history mr-2" style="color: var(--qu-maroon)"></i>
      ${isRTL ? 'النشاط الأخير' : 'Recent Activity'}
    </h2>
    <div class="space-y-4">
      <div class="flex items-start gap-4 pb-4 border-b">
        <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: rgba(139,26,47,0.1)">
          <i class="fas fa-user-plus" style="color: var(--qu-maroon)"></i>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-gray-800">${isRTL ? 'طلب ابتعاث جديد' : 'New Scholarship Application'}</p>
          <p class="text-sm text-gray-600">${isRTL ? 'أحمد محمد - دكتوراه في إدارة الأعمال' : 'Ahmad Mohammed - PhD in Business Administration'}</p>
          <p class="text-xs text-gray-400 mt-1">${isRTL ? 'منذ ساعتين' : '2 hours ago'}</p>
        </div>
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-orange-100 text-orange-700">${isRTL ? 'معلق' : 'Pending'}</span>
      </div>
      
      <div class="flex items-start gap-4 pb-4 border-b">
        <div class="w-10 h-10 rounded-full flex items-center justify-center bg-green-50">
          <i class="fas fa-check text-green-600"></i>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-gray-800">${isRTL ? 'تمت الموافقة على المدفوعات' : 'Payment Approved'}</p>
          <p class="text-sm text-gray-600">${isRTL ? 'مكافآت شهر أبريل - 24 مبتعث' : 'April Stipends - 24 Scholars'}</p>
          <p class="text-xs text-gray-400 mt-1">${isRTL ? 'منذ 5 ساعات' : '5 hours ago'}</p>
        </div>
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700">${isRTL ? 'معتمد' : 'Approved'}</span>
      </div>
      
      <div class="flex items-start gap-4">
        <div class="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
          <i class="fas fa-graduation-cap text-blue-600"></i>
        </div>
        <div class="flex-1">
          <p class="font-semibold text-gray-800">${isRTL ? 'إكمال البرنامج' : 'Program Completion'}</p>
          <p class="text-sm text-gray-600">${isRTL ? 'سارة علي - ماجستير في علوم الحاسب' : 'Sara Ali - Master\'s in Computer Science'}</p>
          <p class="text-xs text-gray-400 mt-1">${isRTL ? 'منذ يوم واحد' : '1 day ago'}</p>
        </div>
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-700">${isRTL ? 'مكتمل' : 'Completed'}</span>
      </div>
    </div>
  </div>
  `

  return c.html(layout(pageTitle, content, 'scholarship', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SCHOLARSHIP RULES  /scholarship/rules
// ─────────────────────────────────────────────────────────────────────────────
app.get('/scholarship/rules', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = t.schRulesTitle

  const content = `
  <div class="max-w-5xl mx-auto">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-8">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-16 h-16 rounded-full flex items-center justify-center" style="background: rgba(139,26,47,0.1)">
          <i class="fas fa-gavel text-3xl" style="color: var(--qu-maroon)"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-800">${t.schRulesTitle}</h1>
          <p class="text-gray-600 mt-2">${t.schRulesSubtitle}</p>
        </div>
      </div>
      
      <div class="flex gap-4 mt-6">
        <a href="/scholarship?lang=${lang}" class="btn-secondary">
          <i class="fas fa-arrow-${isRTL ? 'right' : 'left'} mr-2"></i>
          ${isRTL ? 'العودة للوحة المعلومات' : 'Back to Dashboard'}
        </a>
        <a href="/scholarship/apply?lang=${lang}" class="btn-primary">
          <i class="fas fa-file-signature mr-2"></i>
          ${t.schApply}
        </a>
      </div>
    </div>

    <!-- Rules Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <!-- Rule 1 -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style="background: rgba(139,26,47,0.1)">
            <i class="fas fa-user-check text-xl" style="color: var(--qu-maroon)"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">${t.schRule1Title}</h3>
            <p class="text-gray-600">${t.schRule1Desc}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'وظيفة دائمة بدوام كامل' : 'Permanent full-time position'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'خدمة لا تقل عن 3 سنوات' : 'Minimum 3 years of service'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'تقييم أداء ممتاز' : 'Excellent performance rating'}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Rule 2 -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-green-50">
            <i class="fas fa-money-bill-wave text-xl text-green-600"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">${t.schRule2Title}</h3>
            <p class="text-gray-600">${t.schRule2Desc}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'الرسوم الدراسية كاملة' : 'Full tuition fees'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'مكافأة شهرية 5,000 ريال' : 'QAR 5,000 monthly stipend'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'تأمين صحي شامل' : 'Comprehensive health insurance'}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Rule 3 -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-orange-50">
            <i class="fas fa-handshake text-xl text-orange-600"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">${t.schRule3Title}</h3>
            <p class="text-gray-600">${t.schRule3Desc}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'سنتان لكل سنة دراسية' : '2 years per year of study'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'عقد ملزم قانونياً' : 'Legally binding contract'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'غرامة في حال الإخلال' : 'Penalty for breach'}</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Rule 4 -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-blue-50">
            <i class="fas fa-chart-line text-xl text-blue-600"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">${t.schRule4Title}</h3>
            <p class="text-gray-600">${t.schRule4Desc}</p>
            <ul class="mt-4 space-y-2 text-sm text-gray-700">
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'معدل تراكمي 3.0 كحد أدنى' : 'Minimum CGPA 3.0'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'تقديم كشف درجات فصلي' : 'Submit semester transcripts'}</li>
              <li><i class="fas fa-check text-green-600 mr-2"></i>${isRTL ? 'إنذار في حال انخفاض المعدل' : 'Warning if GPA drops'}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-8">
      <div class="flex items-start gap-4">
        <i class="fas fa-info-circle text-2xl text-amber-600 mt-1"></i>
        <div>
          <h3 class="text-lg font-bold text-amber-900 mb-2">${isRTL ? 'معلومات إضافية' : 'Additional Information'}</h3>
          <ul class="space-y-2 text-amber-800">
            <li><i class="fas fa-circle text-xs mr-2"></i>${isRTL ? 'يجب الحصول على موافقة مدير القسم قبل التقديم' : 'Department head approval required before application'}</li>
            <li><i class="fas fa-circle text-xs mr-2"></i>${isRTL ? 'الأولوية للبرامج ذات الصلة بمجال عمل الموظف' : 'Priority for programs related to employee\'s work field'}</li>
            <li><i class="fas fa-circle text-xs mr-2"></i>${isRTL ? 'يمكن للموظف التقديم على برنامج بدوام جزئي مع الاحتفاظ بالوظيفة' : 'Part-time programs allowed while maintaining employment'}</li>
            <li><i class="fas fa-circle text-xs mr-2"></i>${isRTL ? 'المكافأة الشهرية قابلة للتعديل حسب موقع الدراسة' : 'Monthly stipend adjustable based on study location'}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div class="bg-white rounded-lg shadow-md p-6">
      <h3 class="text-lg font-bold text-gray-800 mb-4">
        <i class="fas fa-envelope mr-2" style="color: var(--qu-maroon)"></i>
        ${isRTL ? 'للاستفسار' : 'For Inquiries'}
      </h3>
      <p class="text-gray-600 mb-4">${isRTL ? 'لأي استفسار حول شروط وقوانين الابتعاث، يرجى التواصل مع:' : 'For any inquiries about scholarship rules and policies, please contact:'}</p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex items-center gap-3">
          <i class="fas fa-phone-alt text-gray-500"></i>
          <span class="text-gray-700">${isRTL ? 'داخلي: 4100' : 'Ext: 4100'}</span>
        </div>
        <div class="flex items-center gap-3">
          <i class="fas fa-envelope text-gray-500"></i>
          <span class="text-gray-700">scholarship@qu.edu.qa</span>
        </div>
      </div>
    </div>
  </div>
  `

  return c.html(layout(pageTitle, content, 'scholarship', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SCHOLARSHIP PROCEDURES  /scholarship/procedures
// ─────────────────────────────────────────────────────────────────────────────
app.get('/scholarship/procedures', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = t.schProcTitle

  const content = `
  <div class="max-w-5xl mx-auto">
    <!-- Header -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-8">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-16 h-16 rounded-full flex items-center justify-center bg-orange-50">
          <i class="fas fa-list-check text-3xl text-orange-600"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-800">${t.schProcTitle}</h1>
          <p class="text-gray-600 mt-2">${t.schProcSubtitle}</p>
        </div>
      </div>
      
      <div class="flex gap-4 mt-6">
        <a href="/scholarship?lang=${lang}" class="btn-secondary">
          <i class="fas fa-arrow-${isRTL ? 'right' : 'left'} mr-2"></i>
          ${isRTL ? 'العودة للوحة المعلومات' : 'Back to Dashboard'}
        </a>
        <a href="/scholarship/apply?lang=${lang}" class="btn-primary">
          <i class="fas fa-file-signature mr-2"></i>
          ${t.schApply}
        </a>
      </div>
    </div>

    <!-- Steps Timeline -->
    <div class="space-y-8 mb-8">
      <!-- Step 1 -->
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl" style="background: var(--qu-maroon)">
          1
        </div>
        <div class="flex-1 bg-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-3">${t.schStep1}</h3>
          <p class="text-gray-600 mb-4">${t.schStep1Desc}</p>
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-800 mb-3">${isRTL ? 'المستندات المطلوبة:' : 'Required Documents:'}</h4>
            <ul class="space-y-2 text-gray-700">
              <li><i class="fas fa-file-pdf text-red-600 mr-2"></i>${isRTL ? 'خطاب القبول الرسمي من الجامعة' : 'Official acceptance letter from university'}</li>
              <li><i class="fas fa-file-pdf text-red-600 mr-2"></i>${isRTL ? 'آخر كشف درجات أكاديمي' : 'Latest academic transcript'}</li>
              <li><i class="fas fa-file-pdf text-red-600 mr-2"></i>${isRTL ? 'السيرة الذاتية محدثة' : 'Updated CV/Resume'}</li>
              <li><i class="fas fa-file-pdf text-red-600 mr-2"></i>${isRTL ? 'خطة الدراسة والأهداف المهنية' : 'Study plan and career goals'}</li>
              <li><i class="fas fa-file-pdf text-red-600 mr-2"></i>${isRTL ? 'تفاصيل تكاليف البرنامج' : 'Program cost breakdown'}</li>
            </ul>
          </div>
          <div class="mt-4 flex items-center gap-4">
            <span class="px-4 py-2 rounded-lg text-sm font-semibold" style="background: rgba(139,26,47,0.1); color: var(--qu-maroon)">
              <i class="fas fa-clock mr-2"></i>${isRTL ? 'المدة: 2-3 أيام' : 'Duration: 2-3 days'}
            </span>
            <a href="/scholarship/apply?lang=${lang}" class="text-sm font-semibold" style="color: var(--qu-maroon)">
              ${isRTL ? 'ابدأ التقديم ←' : 'Start Application →'}
            </a>
          </div>
        </div>
      </div>

      <!-- Step 2 -->
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-orange-600">
          2
        </div>
        <div class="flex-1 bg-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-3">${t.schStep2}</h3>
          <p class="text-gray-600 mb-4">${t.schStep2Desc}</p>
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-800 mb-3">${isRTL ? 'معايير المراجعة:' : 'Review Criteria:'}</h4>
            <ul class="space-y-2 text-gray-700">
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'مدى ارتباط البرنامج بمجال العمل' : 'Program relevance to work field'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'تأثير الابتعاث على سير العمل' : 'Impact of scholarship on work operations'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'احتياجات القسم المستقبلية' : 'Department\'s future needs'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'أداء الموظف وتقييماته' : 'Employee performance and evaluations'}</li>
            </ul>
          </div>
          <div class="mt-4">
            <span class="px-4 py-2 rounded-lg text-sm font-semibold bg-orange-100 text-orange-700">
              <i class="fas fa-clock mr-2"></i>${isRTL ? 'المدة: 5-7 أيام' : 'Duration: 5-7 days'}
            </span>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-green-600">
          3
        </div>
        <div class="flex-1 bg-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-3">${t.schStep3}</h3>
          <p class="text-gray-600 mb-4">${t.schStep3Desc}</p>
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-800 mb-3">${isRTL ? 'التحقق من:' : 'Verification of:'}</h4>
            <ul class="space-y-2 text-gray-700">
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'مدة الخدمة (3 سنوات كحد أدنى)' : 'Service duration (minimum 3 years)'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'نوع العقد (دائم بدوام كامل)' : 'Contract type (permanent full-time)'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'السجل الوظيفي والانضباط' : 'Employment record and discipline'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'عدم وجود التزامات دراسية سابقة' : 'No previous unfinished study commitments'}</li>
            </ul>
          </div>
          <div class="mt-4">
            <span class="px-4 py-2 rounded-lg text-sm font-semibold bg-green-100 text-green-700">
              <i class="fas fa-clock mr-2"></i>${isRTL ? 'المدة: 3-5 أيام' : 'Duration: 3-5 days'}
            </span>
          </div>
        </div>
      </div>

      <!-- Step 4 -->
      <div class="relative flex items-start gap-6">
        <div class="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl bg-blue-600">
          4
        </div>
        <div class="flex-1 bg-white rounded-lg shadow-md p-6">
          <h3 class="text-2xl font-bold text-gray-800 mb-3">${t.schStep4}</h3>
          <p class="text-gray-600 mb-4">${t.schStep4Desc}</p>
          <div class="bg-gray-50 rounded-lg p-4">
            <h4 class="font-semibold text-gray-800 mb-3">${isRTL ? 'إعداد الترتيبات المالية:' : 'Financial Setup:'}</h4>
            <ul class="space-y-2 text-gray-700">
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'إنشاء ملف المبتعث في النظام' : 'Create scholar profile in system'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'إعداد المكافأة الشهرية (5,000 ريال)' : 'Setup monthly stipend (QAR 5,000)'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'ترتيب دفع الرسوم الدراسية' : 'Arrange tuition fee payments'}</li>
              <li><i class="fas fa-check-circle text-green-600 mr-2"></i>${isRTL ? 'توقيع عقد الالتزام بالخدمة' : 'Sign service commitment contract'}</li>
            </ul>
          </div>
          <div class="mt-4">
            <span class="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-100 text-blue-700">
              <i class="fas fa-clock mr-2"></i>${isRTL ? 'المدة: 7-10 أيام' : 'Duration: 7-10 days'}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Total Timeline -->
    <div class="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-lg">
      <div class="flex items-center gap-4">
        <i class="fas fa-calendar-check text-3xl text-green-600"></i>
        <div>
          <h3 class="text-xl font-bold text-gray-800">${isRTL ? 'إجمالي المدة المتوقعة' : 'Total Expected Duration'}</h3>
          <p class="text-gray-700 mt-1">${isRTL ? '17-25 يوم عمل من تقديم الطلب حتى الاعتماد النهائي' : '17-25 working days from submission to final approval'}</p>
        </div>
      </div>
    </div>
  </div>
  `

  return c.html(layout(pageTitle, content, 'scholarship', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SCHOLARSHIP TRACKING  /scholarship/tracking
// ─────────────────────────────────────────────────────────────────────────────
app.get('/scholarship/tracking', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = t.schTrackTitle

  const content = `
  <!-- Header -->
  <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
    <div>
      <h1 class="text-3xl font-bold text-gray-800">${t.schTrackTitle}</h1>
      <p class="text-gray-600 mt-1">${t.schTrackSubtitle}</p>
    </div>
    <div class="flex gap-3">
      <a href="/scholarship?lang=${lang}" class="btn-secondary">
        <i class="fas fa-arrow-${isRTL ? 'right' : 'left'} mr-2"></i>
        ${isRTL ? 'العودة' : 'Back'}
      </a>
      <button onclick="exportScholarData()" class="btn-secondary">
        <i class="fas fa-download mr-2"></i>
        ${isRTL ? 'تصدير' : 'Export'}
      </button>
    </div>
  </div>

  <!-- Filters -->
  <div class="bg-white rounded-lg shadow-md p-6 mb-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">${isRTL ? 'بحث' : 'Search'}</label>
        <input type="text" id="searchScholar" placeholder="${isRTL ? 'اسم المبتعث أو الرقم الوظيفي...' : 'Scholar name or ID...'}" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500">
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">${isRTL ? 'الحالة' : 'Status'}</label>
        <select id="filterStatus" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500">
          <option value="">${isRTL ? 'الكل' : 'All'}</option>
          <option value="active">${t.schStatusActive}</option>
          <option value="pending">${t.schStatusPending}</option>
          <option value="completed">${t.schStatusCompleted}</option>
          <option value="suspended">${t.schStatusSuspended}</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">${isRTL ? 'نوع البرنامج' : 'Program Type'}</label>
        <select id="filterProgram" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500">
          <option value="">${isRTL ? 'الكل' : 'All'}</option>
          <option value="masters">${t.schFormMasters}</option>
          <option value="phd">${t.schFormPhD}</option>
          <option value="certificate">${t.schFormCertificate}</option>
        </select>
      </div>
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">${isRTL ? 'الجامعة' : 'University'}</label>
        <select id="filterUniversity" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500">
          <option value="">${isRTL ? 'الكل' : 'All'}</option>
          <option value="qu">Qatar University</option>
          <option value="hbku">Hamad Bin Khalifa University</option>
          <option value="international">${isRTL ? 'جامعات دولية' : 'International Universities'}</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Scholars Table -->
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead class="bg-gray-50" style="background: rgba(139,26,47,0.05)">
          <tr>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColName}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColEmpId}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColProgram}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColUniversity}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColStartDate}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColStipend}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColMarital}</th>
            <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">${t.schColChildren}</th>
            <th class="px-6 py-3 text-${isRTL ? 'right' : 'left'} text-xs font-semibold text-gray-700 uppercase">${t.schColStatus}</th>
            <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">${isRTL ? 'الشيك ليست' : 'Checklist'}</th>
            <th class="px-6 py-3 text-center text-xs font-semibold text-gray-700 uppercase">${t.schColActions}</th>
          </tr>
        </thead>
        <tbody id="scholarsTableBody" class="divide-y divide-gray-200">
          <!-- Data loaded via JS -->
        </tbody>
      </table>
    </div>
  </div>

  <script>
  const isRTL = ${isRTL ? 'true' : 'false'};
  const SCHOLARS = [
    { id: 1, name: isRTL ? 'أحمد محمد علي' : 'Ahmad Mohammed Ali', empId: 'QU-2019-0245', program: 'PhD', programAr: 'دكتوراه', major: 'Business Administration', majorAr: 'إدارة الأعمال', university: 'Hamad Bin Khalifa University', startDate: '2023-09-01', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 3 },
    { id: 2, name: isRTL ? 'فاطمة أحمد' : 'Fatima Ahmed', empId: 'QU-2020-0189', program: 'Masters', programAr: 'ماجستير', major: 'Computer Science', majorAr: 'علوم الحاسب', university: 'Qatar University', startDate: '2024-01-15', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 1 },
    { id: 3, name: isRTL ? 'خالد حسن' : 'Khaled Hassan', empId: 'QU-2018-0312', program: 'PhD', programAr: 'دكتوراه', major: 'Engineering', majorAr: 'هندسة', university: 'Imperial College London', startDate: '2022-10-01', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 2 },
    { id: 4, name: isRTL ? 'مريم سالم' : 'Maryam Salem', empId: 'QU-2021-0098', program: 'Masters', programAr: 'ماجستير', major: 'Public Health', majorAr: 'الصحة العامة', university: 'Qatar University', startDate: '2024-02-01', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'أعزب' : 'Single', maritalStatusEn: 'Single', children: 0 },
    { id: 5, name: isRTL ? 'محمود عبدالله' : 'Mahmoud Abdullah', empId: 'QU-2017-0456', program: 'Certificate', programAr: 'شهادة مهنية', major: 'Project Management', majorAr: 'إدارة المشاريع', university: 'PMI', startDate: '2024-03-01', stipend: 3000, status: 'pending', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 4 },
    { id: 6, name: isRTL ? 'سارة علي' : 'Sara Ali', empId: 'QU-2019-0234', program: 'Masters', programAr: 'ماجستير', major: 'Data Science', majorAr: 'علم البيانات', university: 'Hamad Bin Khalifa University', startDate: '2023-01-15', stipend: 5000, status: 'completed', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 2 },
    { id: 7, name: isRTL ? 'يوسف إبراهيم' : 'Youssef Ibrahim', empId: 'QU-2020-0321', program: 'PhD', programAr: 'دكتوراه', major: 'Education', majorAr: 'التربية', university: 'University of Cambridge', startDate: '2023-10-01', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 1 },
    { id: 8, name: isRTL ? 'نورة سعيد' : 'Noura Saeed', empId: 'QU-2021-0145', program: 'Masters', programAr: 'ماجستير', major: 'International Relations', majorAr: 'العلاقات الدولية', university: 'Georgetown University Qatar', startDate: '2024-01-20', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'أعزب' : 'Single', maritalStatusEn: 'Single', children: 0 },
    { id: 9, name: isRTL ? 'عبدالرحمن خليفة' : 'Abdulrahman Khalifa', empId: 'QU-2019-0412', program: 'PhD', programAr: 'دكتوراه', major: 'Islamic Studies', majorAr: 'الدراسات الإسلامية', university: 'Qatar University', startDate: '2023-02-01', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 3 },
    { id: 10, name: isRTL ? 'هند راشد' : 'Hind Rashid', empId: 'QU-2022-0089', program: 'Masters', programAr: 'ماجستير', major: 'Environmental Science', majorAr: 'علوم البيئة', university: 'Hamad Bin Khalifa University', startDate: '2024-02-15', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 1 },
    { id: 11, name: isRTL ? 'طارق منصور' : 'Tariq Mansour', empId: 'QU-2018-0523', program: 'PhD', programAr: 'دكتوراه', major: 'Chemistry', majorAr: 'الكيمياء', university: 'Texas A&M University at Qatar', startDate: '2022-09-01', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 2 },
    { id: 12, name: isRTL ? 'ليلى جاسم' : 'Layla Jasim', empId: 'QU-2020-0267', program: 'Masters', programAr: 'ماجستير', major: 'Psychology', majorAr: 'علم النفس', university: 'Qatar University', startDate: '2023-09-15', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'أعزب' : 'Single', maritalStatusEn: 'Single', children: 0 },
    { id: 13, name: isRTL ? 'سلطان المري' : 'Sultan Al-Marri', empId: 'QU-2019-0178', program: 'PhD', programAr: 'دكتوراه', major: 'Law', majorAr: 'القانون', university: 'University College London', startDate: '2023-01-10', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 4 },
    { id: 14, name: isRTL ? 'عائشة محمد' : 'Aisha Mohammed', empId: 'QU-2021-0234', program: 'Masters', programAr: 'ماجستير', major: 'Architecture', majorAr: 'الهندسة المعمارية', university: 'Qatar University', startDate: '2024-01-30', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 1 },
    { id: 15, name: isRTL ? 'حمد العلي' : 'Hamad Al-Ali', empId: 'QU-2020-0389', program: 'Certificate', programAr: 'شهادة مهنية', major: 'Data Analytics', majorAr: 'تحليل البيانات', university: 'MIT Professional Education', startDate: '2024-03-15', stipend: 3000, status: 'pending', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 3 },
    { id: 16, name: isRTL ? 'شيخة حمد' : 'Sheikha Hamad', empId: 'QU-2019-0445', program: 'PhD', programAr: 'دكتوراه', major: 'Finance', majorAr: 'المالية', university: 'London School of Economics', startDate: '2022-10-15', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 2 },
    { id: 17, name: isRTL ? 'راشد سعود' : 'Rashid Saud', empId: 'QU-2021-0156', program: 'Masters', programAr: 'ماجستير', major: 'Biomedical Engineering', majorAr: 'الهندسة الطبية الحيوية', university: 'Carnegie Mellon University Qatar', startDate: '2024-02-05', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'أعزب' : 'Single', maritalStatusEn: 'Single', children: 0 },
    { id: 18, name: isRTL ? 'منى خالد' : 'Mona Khaled', empId: 'QU-2020-0298', program: 'Masters', programAr: 'ماجستير', major: 'Media & Communication', majorAr: 'الإعلام والاتصال', university: 'Northwestern University Qatar', startDate: '2023-09-20', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 2 },
    { id: 19, name: isRTL ? 'فهد عبدالله' : 'Fahad Abdullah', empId: 'QU-2018-0367', program: 'PhD', programAr: 'دكتوراه', major: 'Physics', majorAr: 'الفيزياء', university: 'Oxford University', startDate: '2022-10-05', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 3 },
    { id: 20, name: isRTL ? 'جواهر سالم' : 'Jawaher Salem', empId: 'QU-2019-0501', program: 'Masters', programAr: 'ماجستير', major: 'Marketing', majorAr: 'التسويق', university: 'HEC Paris Qatar', startDate: '2023-09-25', stipend: 5000, status: 'completed', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 1 },
    { id: 21, name: isRTL ? 'ماجد العنزي' : 'Majed Al-Anzi', empId: 'QU-2021-0212', program: 'Certificate', programAr: 'شهادة مهنية', major: 'Cybersecurity', majorAr: 'الأمن السيبراني', university: 'SANS Institute', startDate: '2024-03-20', stipend: 3000, status: 'pending', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 2 },
    { id: 22, name: isRTL ? 'آمنة ناصر' : 'Amna Nasser', empId: 'QU-2020-0334', program: 'PhD', programAr: 'دكتوراه', major: 'Mathematics', majorAr: 'الرياضيات', university: 'Qatar University', startDate: '2023-02-10', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'أعزب' : 'Single', maritalStatusEn: 'Single', children: 0 },
    { id: 23, name: isRTL ? 'علي حسين' : 'Ali Hussein', empId: 'QU-2019-0289', program: 'Masters', programAr: 'ماجستير', major: 'Civil Engineering', majorAr: 'الهندسة المدنية', university: 'Texas A&M University at Qatar', startDate: '2023-09-05', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوج' : 'Married', maritalStatusEn: 'Married', children: 1 },
    { id: 24, name: isRTL ? 'لطيفة محمد' : 'Latifa Mohammed', empId: 'QU-2021-0167', program: 'Masters', programAr: 'ماجستير', major: 'Pharmacy', majorAr: 'الصيدلة', university: 'Qatar University', startDate: '2024-02-20', stipend: 5000, status: 'active', maritalStatus: isRTL ? 'متزوجة' : 'Married', maritalStatusEn: 'Married', children: 1 },
  ];

  let filteredScholars = [...SCHOLARS];

  function renderScholars() {
    const tbody = document.getElementById('scholarsTableBody');
    const search = document.getElementById('searchScholar').value.toLowerCase();
    const statusFilter = document.getElementById('filterStatus').value;
    const programFilter = document.getElementById('filterProgram').value;
    const uniFilter = document.getElementById('filterUniversity').value;

    filteredScholars = SCHOLARS.filter(s => {
      const matchSearch = !search || s.name.toLowerCase().includes(search) || s.empId.toLowerCase().includes(search);
      const matchStatus = !statusFilter || s.status === statusFilter;
      const matchProgram = !programFilter || s.program.toLowerCase() === programFilter;
      const matchUni = !uniFilter || 
        (uniFilter === 'qu' && s.university.includes('Qatar University')) ||
        (uniFilter === 'hbku' && s.university.includes('Hamad Bin Khalifa')) ||
        (uniFilter === 'international' && !s.university.includes('Qatar') && !s.university.includes('Hamad'));
      
      return matchSearch && matchStatus && matchProgram && matchUni;
    });

    const statusBadges = {
      active: { bg: 'bg-green-100', text: 'text-green-700', label: ${isRTL ? "'نشط'" : "'Active'"} },
      pending: { bg: 'bg-orange-100', text: 'text-orange-700', label: ${isRTL ? "'معلق'" : "'Pending'"} },
      completed: { bg: 'bg-blue-100', text: 'text-blue-700', label: ${isRTL ? "'مكتمل'" : "'Completed'"} },
      suspended: { bg: 'bg-red-100', text: 'text-red-700', label: ${isRTL ? "'موقوف'" : "'Suspended'"} }
    };

    tbody.innerHTML = filteredScholars.map(s => {
      const badge = statusBadges[s.status];
      const programLabel = ${isRTL ? 's.programAr' : 's.program'};
      const majorLabel = ${isRTL ? 's.majorAr' : 's.major'};
      
      return \`
        <tr class="hover:bg-gray-50">
          <td class="px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold" style="background: var(--qu-maroon)">
                \${s.name.charAt(0)}
              </div>
              <div>
                <p class="font-semibold text-gray-800">\${s.name}</p>
                <p class="text-sm text-gray-500">\${majorLabel}</p>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 text-gray-700">\${s.empId}</td>
          <td class="px-6 py-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold" style="background: rgba(139,26,47,0.1); color: var(--qu-maroon)">
              \${programLabel}
            </span>
          </td>
          <td class="px-6 py-4 text-gray-700">\${s.university}</td>
          <td class="px-6 py-4 text-gray-700">\${s.startDate}</td>
          <td class="px-6 py-4 text-gray-700">${isRTL ? '' : 'QAR '}\${s.stipend.toLocaleString()}${isRTL ? ' ريال' : ''}</td>
          <td class="px-6 py-4 text-gray-700">\${s.maritalStatus}</td>
          <td class="px-6 py-4 text-center">
            <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              \${s.children}
            </span>
          </td>
          <td class="px-6 py-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold \${badge.bg} \${badge.text}">
              \${badge.label}
            </span>
          </td>
          <td class="px-6 py-4 text-center" id="schChklCell_\${s.id}">
            <button onclick="openSchChecklist(\${s.id},'\${s.name}')"
              class="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl border-2 hover:shadow-md transition min-w-[64px] mx-auto sch-chkl-btn"
              data-schid="\${s.id}"
              style="border-color:#F59E0B33;background:#F59E0B11">
              <span class="text-xs font-bold sch-chkl-pct" style="color:#F59E0B">0%</span>
              <div class="w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full rounded-full transition-all sch-chkl-bar" style="width:0%;background:#F59E0B"></div>
              </div>
              <span class="text-xs text-gray-500 sch-chkl-count">0/${isRTL ? '١٠' : '10'}</span>
            </button>
          </td>
          <td class="px-6 py-4">
            <div class="flex items-center justify-center gap-2">
              <button onclick="viewScholar(\${s.id})" class="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm text-gray-700">
                <i class="fas fa-eye mr-1"></i>${isRTL ? 'عرض' : 'View'}
              </button>
              <button onclick="viewPayments(\${s.id})" class="px-3 py-1 bg-green-50 hover:bg-green-100 rounded-lg text-sm text-green-700">
                <i class="fas fa-money-bill mr-1"></i>${isRTL ? 'مدفوعات' : 'Payments'}
              </button>
            </div>
          </td>
        </tr>
      \`;
    }).join('');

    if (filteredScholars.length === 0) {
      tbody.innerHTML = \`
        <tr>
          <td colspan="9" class="px-6 py-16 text-center text-gray-500">
            <i class="fas fa-search text-4xl mb-4"></i>
            <p>${isRTL ? 'لا توجد نتائج' : 'No results found'}</p>
          </td>
        </tr>
      \`;
    }
  }

  // ─── SCHOLARSHIP CHECKLIST ─────────────────────────────────────────────────
  const SCH_STEPS = [
    { id:'req',   icon:'fa-file-alt',             color:'#8B1A2F', label: '${isRTL ? "تقديم الطلب وتوثيق المستندات" : "Application Submission & Documents"}',  desc: '${isRTL ? "خطاب القبول، كشف الدرجات، السيرة الذاتية، خطة الدراسة، بيان التكلفة" : "Acceptance letter, transcripts, CV, study plan, cost statement"}' },
    { id:'dept',  icon:'fa-users',                color:'#C4922A', label: '${isRTL ? "موافقة رئيس القسم" : "Department Head Approval"}',                         desc: '${isRTL ? "مراجعة ملاءمة البرنامج وتأثير الابتعاث على مهام الموظف" : "Review program suitability and impact on employee duties"}' },
    { id:'hr',    icon:'fa-id-badge',             color:'#3B82F6', label: '${isRTL ? "اعتماد الموارد البشرية" : "HR Department Approval"}',                       desc: '${isRTL ? "التحقق من مدة الخدمة ≥3 سنوات، نوع العقد، والسجل الوظيفي" : "Verify ≥3 years service, contract type, and employment record"}' },
    { id:'fin',   icon:'fa-calculator',           color:'#7C3AED', label: '${isRTL ? "إعداد ملف المدفوعات" : "Payment File Setup"}',                              desc: '${isRTL ? "إنشاء ملف مبتعث، تحديد المكافأة الشهرية، جدول دفع الرسوم" : "Create scholar file, set monthly stipend, tuition payment schedule"}' },
    { id:'cont',  icon:'fa-file-signature',       color:'#059669', label: '${isRTL ? "توقيع عقد الابتعاث" : "Scholarship Contract Signing"}',                     desc: '${isRTL ? "توقيع العقد وشروط الالتزام بالخدمة بعد العودة" : "Sign contract including post-study service commitment terms"}' },
    { id:'pay1',  icon:'fa-money-bill-wave',      color:'#0891B2', label: '${isRTL ? "صرف أول دفعة رسوم دراسية" : "First Tuition Fee Payment"}',                   desc: '${isRTL ? "تحويل رسوم الفصل الدراسي الأول مباشرة للجامعة" : "Transfer first semester fees directly to the university"}' },
    { id:'stip',  icon:'fa-wallet',               color:'#10B981', label: '${isRTL ? "تفعيل المكافأة الشهرية" : "Monthly Stipend Activation"}',                    desc: '${isRTL ? "تفعيل تحويل المكافأة الشهرية (5,000 ريال) إلى حساب المبتعث" : "Activate monthly stipend transfer (QAR 5,000) to scholar account"}' },
    { id:'ins',   icon:'fa-shield-heart',         color:'#EF4444', label: '${isRTL ? "تفعيل التأمين الصحي" : "Health Insurance Activation"}',                      desc: '${isRTL ? "تفعيل وثيقة التأمين الصحي طوال فترة الابتعاث" : "Activate health insurance policy for the scholarship duration"}' },
    { id:'rep',   icon:'fa-chart-line',           color:'#F59E0B', label: '${isRTL ? "متابعة التقارير الدورية" : "Periodic Progress Reports"}',                    desc: '${isRTL ? "استلام تقارير التقدم الأكاديمي كل فصل دراسي" : "Receive academic progress reports every semester"}' },
    { id:'done',  icon:'fa-graduation-cap',       color:'#6366F1', label: '${isRTL ? "إتمام الابتعاث والعودة" : "Scholarship Completion & Return"}',               desc: '${isRTL ? "التحقق من الشهادة، تفعيل التزام الخدمة، إغلاق ملف الابتعاث" : "Verify degree, activate service commitment, close scholarship file"}' },
  ];

  const SCH_CHKL_KEY = 'qu_sch_checklists';
  function getSchChecklists(){ try{return JSON.parse(localStorage.getItem(SCH_CHKL_KEY)||'{}')}catch{return{}} }
  function saveSchChecklists(d){ localStorage.setItem(SCH_CHKL_KEY,JSON.stringify(d)) }

  // ─── UPDATE CHECKLIST BUTTONS IN TABLE ─────────────────────────────────────
  function updateSchChklBtns(){
    const all = getSchChecklists();
    document.querySelectorAll('.sch-chkl-btn').forEach(btn=>{
      const id   = parseInt(btn.getAttribute('data-schid'));
      const data = all[id] || {};
      const done = SCH_STEPS.filter(s=>data[s.id]).length;
      const pct  = Math.round((done/SCH_STEPS.length)*100);
      const col  = pct===100?'#10B981':pct>50?'#3B82F6':'#F59E0B';
      btn.style.borderColor = col+'33';
      btn.style.background  = col+'11';
      btn.querySelector('.sch-chkl-pct').textContent  = pct+'%';
      btn.querySelector('.sch-chkl-pct').style.color  = col;
      btn.querySelector('.sch-chkl-bar').style.width   = pct+'%';
      btn.querySelector('.sch-chkl-bar').style.background = col;
      btn.querySelector('.sch-chkl-count').textContent = done+'/'+SCH_STEPS.length;
    });
  }

  let _currentSchId = null, _currentSchName = null;
  function openSchChecklist(id, name){
    _currentSchId = id;
    _currentSchName = name;
    const all = getSchChecklists();
    const data = all[id] || {};
    const done = SCH_STEPS.filter(s=>data[s.id]).length;
    const pct  = Math.round((done/SCH_STEPS.length)*100);
    document.getElementById('schModalTitle').textContent = name;
    document.getElementById('schModalEmpId').textContent = '${isRTL ? "رقم الموظف" : "Scholar ID"}: ' + (SCHOLARS.find(s=>s.id===id)||{}).empId;
    document.getElementById('schProgressBar').style.width  = pct+'%';
    document.getElementById('schProgressPct').textContent  = pct+'%';
    document.getElementById('schProgressText').textContent = done+' ${isRTL ? "من" : "of"} '+SCH_STEPS.length+' ${isRTL ? "مكتملة" : "completed"}';
    document.getElementById('schStepsList').innerHTML = SCH_STEPS.map((s,i)=>{
      const checked  = !!data[s.id];
      const dateStr  = data[s.id+'_date'] ? ('<span class="text-xs text-gray-400 ms-1">'+data[s.id+'_date']+'</span>') : '';
      return \`<div class="flex items-start gap-3 p-3 rounded-xl border transition \${checked?'border-green-200 bg-green-50':'border-gray-100 bg-white'} ${isRTL?'flex-row-reverse':''}" id="schStep_\${s.id}">
        <div class="flex-shrink-0 mt-0.5">
          <input type="checkbox" id="schChk_\${s.id}" \${checked?'checked':''} onchange="toggleSchStep('\${s.id}')"
            class="w-4 h-4 rounded accent-green-600 cursor-pointer"/>
        </div>
        <div class="flex-1 min-w-0 ${isRTL?'text-right':''}">
          <div class="flex items-center gap-2 flex-wrap ${isRTL?'flex-row-reverse justify-end':''}">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white flex-shrink-0" style="background:\${s.color}">\${i+1}</span>
            <i class="fas \${s.icon} text-sm" style="color:\${s.color}"></i>
            <span class="font-semibold text-sm text-gray-800">\${s.label}</span>
            \${checked?'<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700"><i class="fas fa-check me-1"></i>${isRTL ? "مكتمل" : "Done"}</span>':'<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">${isRTL ? "معلق" : "Pending"}</span>'}
            \${dateStr}
          </div>
          <p class="text-xs text-gray-500 mt-1">\${s.desc}</p>
        </div>
      </div>\`;
    }).join('');
    document.getElementById('schChecklistModal').classList.remove('hidden');
    document.body.style.overflow='hidden';
  }

  function toggleSchStep(stepId){
    const all = getSchChecklists();
    if(!all[_currentSchId]) all[_currentSchId]={};
    const was = !!all[_currentSchId][stepId];
    if(was){ delete all[_currentSchId][stepId]; delete all[_currentSchId][stepId+'_date']; }
    else { all[_currentSchId][stepId]=true; all[_currentSchId][stepId+'_date']=new Date().toLocaleDateString('${isRTL ? "ar-QA" : "en-GB"}'); }
    saveSchChecklists(all);
    const data = all[_currentSchId];
    const done = SCH_STEPS.filter(s=>data[s.id]).length;
    const pct  = Math.round((done/SCH_STEPS.length)*100);
    document.getElementById('schProgressBar').style.width  = pct+'%';
    document.getElementById('schProgressPct').textContent  = pct+'%';
    document.getElementById('schProgressText').textContent = done+' ${isRTL ? "من" : "of"} '+SCH_STEPS.length+' ${isRTL ? "مكتملة" : "completed"}';
    updateSchChklBtns();
    // reopen to refresh steps
    openSchChecklist(_currentSchId, _currentSchName);
  }

  function closeSchModal(){
    document.getElementById('schChecklistModal').classList.add('hidden');
    document.body.style.overflow='';
    updateSchChklBtns();
  }

  function resetSchChecklist(){
    if(!confirm('${isRTL ? "إعادة تعيين جميع خطوات الابتعاث؟" : "Reset all scholarship checklist steps?"}')) return;
    const all = getSchChecklists();
    all[_currentSchId]={};
    saveSchChecklists(all);
    openSchChecklist(_currentSchId, _currentSchName);
  }
  // ─── END SCHOLARSHIP CHECKLIST ─────────────────────────────────────────────

  function viewScholar(id) {
    const scholar = SCHOLARS.find(s => s.id === id);
    alert(\`${isRTL ? 'عرض تفاصيل المبتعث' : 'View Scholar Details'}: \${scholar.name}\`);
  }

  function viewPayments(id) {
    const scholar = SCHOLARS.find(s => s.id === id);
    alert(\`${isRTL ? 'عرض سجل المدفوعات' : 'View Payment History'}: \${scholar.name}\`);
  }

  function exportScholarData() {
    let csv = 'Name,Employee ID,Program,University,Start Date,Stipend,Status\\n';
    filteredScholars.forEach(s => {
      csv += \`\${s.name},\${s.empId},\${s.program},\${s.university},\${s.startDate},\${s.stipend},\${s.status}\\n\`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'scholars_' + new Date().toISOString().split('T')[0] + '.csv';
    a.click();
  }

  function renderAndUpdate(){
    renderScholars();
    setTimeout(updateSchChklBtns, 50);
  }

  // Event listeners
  document.getElementById('searchScholar').addEventListener('input', renderAndUpdate);
  document.getElementById('filterStatus').addEventListener('change', renderAndUpdate);
  document.getElementById('filterProgram').addEventListener('change', renderAndUpdate);
  document.getElementById('filterUniversity').addEventListener('change', renderAndUpdate);

  // Initial render
  renderScholars();
  setTimeout(updateSchChklBtns, 100);
  </script>

  <!-- SCHOLARSHIP CHECKLIST MODAL -->
  <div id="schChecklistModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.55)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" style="direction:${isRTL?'rtl':'ltr'}">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0 ${isRTL?'flex-row-reverse':''}">
        <div class="${isRTL?'text-right':''}">
          <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-graduation-cap text-lg" style="color:var(--qu-maroon)"></i>
            <h2 class="text-lg font-bold text-gray-800">${isRTL?'شيك ليست إجراءات الابتعاث':'Scholarship Procedures Checklist'}</h2>
          </div>
          <p class="text-xs text-gray-500 mt-0.5" id="schModalEmpId"></p>
          <p class="text-sm font-semibold text-gray-700 mt-0.5" id="schModalTitle"></p>
        </div>
        <button onclick="closeSchModal()" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition text-xl flex-shrink-0">&times;</button>
      </div>
      <!-- Progress -->
      <div class="px-6 py-4 border-b border-gray-100 flex-shrink-0">
        <div class="flex items-center justify-between mb-1.5 ${isRTL?'flex-row-reverse':''}">
          <span class="text-xs font-semibold text-gray-600">${isRTL?'نسبة إنجاز الإجراءات':'Procedures Progress'}</span>
          <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <span class="text-xs text-gray-500" id="schProgressText"></span>
            <span class="font-bold text-sm" style="color:var(--qu-maroon)" id="schProgressPct">0%</span>
          </div>
        </div>
        <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div id="schProgressBar" class="h-full rounded-full transition-all duration-500" style="width:0%;background:var(--qu-maroon)"></div>
        </div>
        <div class="mt-2 flex flex-wrap gap-4 text-xs text-gray-400 ${isRTL?'flex-row-reverse':''}">
          <span class="flex items-center gap-1 ${isRTL?'flex-row-reverse':''}"><i class="fas fa-info-circle"></i>${isRTL?'اضغط على مربع الاختيار لتحديث الحالة':'Click checkbox to update status'}</span>
          <span class="flex items-center gap-1 ${isRTL?'flex-row-reverse':''}"><i class="fas fa-save" style="color:#10B981"></i>${isRTL?'يُحفظ تلقائياً في المتصفح':'Auto-saved in browser'}</span>
        </div>
      </div>
      <!-- Steps -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-2" id="schStepsList"></div>
      <!-- Footer -->
      <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between flex-shrink-0 ${isRTL?'flex-row-reverse':''}">
        <button onclick="resetSchChecklist()" class="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 transition ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-rotate-left"></i> ${isRTL?'إعادة تعيين':'Reset All'}
        </button>
        <button onclick="closeSchModal()" class="btn-primary px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-check"></i> ${isRTL?'حفظ وإغلاق':'Save & Close'}
        </button>
      </div>
    </div>
  </div>
  `

  return c.html(layout(pageTitle, content, 'scholarship', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SCHOLARSHIP APPLICATION  /scholarship/apply
// ─────────────────────────────────────────────────────────────────────────────
app.get('/scholarship/apply', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = t.schFormTitle

  const content = `
  <!-- Header -->
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-8 mb-8">
      <div class="flex items-center gap-4 mb-4">
        <div class="w-16 h-16 rounded-full flex items-center justify-center" style="background: linear-gradient(135deg, var(--qu-maroon), #a52a2a)">
          <i class="fas fa-file-signature text-3xl text-white"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-gray-800">${t.schFormTitle}</h1>
          <p class="text-gray-600 mt-2">${t.schFormSubtitle}</p>
        </div>
      </div>
      
      <div class="flex flex-wrap gap-4 mt-6">
        <a href="/scholarship?lang=${lang}" class="btn-secondary">
          <i class="fas fa-arrow-${isRTL ? 'right' : 'left'} mr-2"></i>
          ${isRTL ? 'العودة' : 'Back'}
        </a>
        <a href="/scholarship/rules?lang=${lang}" class="text-sm font-semibold" style="color: var(--qu-maroon); padding: 0.5rem 1rem; display: inline-flex; align-items: center;">
          <i class="fas fa-gavel mr-2"></i>
          ${isRTL ? 'مراجعة الشروط' : 'Review Requirements'}
        </a>
        <button onclick="downloadScholarshipForm()" class="btn-secondary">
          <i class="fas fa-download mr-2"></i>
          ${isRTL ? 'تحميل نموذج الطلب (PDF)' : 'Download Application Form (PDF)'}
        </button>
      </div>
    </div>

    <!-- Application Form -->
    <form id="scholarshipForm" class="space-y-8">
      <!-- Personal Information -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center" style="background: rgba(139,26,47,0.1)">
            <i class="fas fa-user" style="color: var(--qu-maroon)"></i>
          </div>
          ${t.schFormPersonal}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormName} <span class="text-red-600">*</span></label>
            <input type="text" id="fullName" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="${isRTL ? 'أدخل الاسم الكامل' : 'Enter full name'}">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormEmpId} <span class="text-red-600">*</span></label>
            <input type="text" id="empId" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="QU-YYYY-XXXX">
          </div>
          
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormDept} <span class="text-red-600">*</span></label>
            <input type="text" id="department" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="${isRTL ? 'القسم الحالي' : 'Current department'}">
          </div>
        </div>
      </div>

      <!-- Program Details -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center bg-orange-50">
            <i class="fas fa-graduation-cap text-orange-600"></i>
          </div>
          ${t.schFormProgram}
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormProgramType} <span class="text-red-600">*</span></label>
            <select id="programType" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500">
              <option value="">${isRTL ? 'اختر نوع البرنامج' : 'Select program type'}</option>
              <option value="masters">${t.schFormMasters}</option>
              <option value="phd">${t.schFormPhD}</option>
              <option value="certificate">${t.schFormCertificate}</option>
            </select>
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormMajor} <span class="text-red-600">*</span></label>
            <input type="text" id="major" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="${isRTL ? 'مثال: إدارة الأعمال' : 'e.g., Business Administration'}">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormUniversity} <span class="text-red-600">*</span></label>
            <input type="text" id="university" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="${isRTL ? 'اسم الجامعة' : 'University name'}">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormCountry} <span class="text-red-600">*</span></label>
            <input type="text" id="country" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="${isRTL ? 'الدولة' : 'Country'}">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormDuration} <span class="text-red-600">*</span></label>
            <input type="number" id="duration" required min="0.5" max="10" step="0.5" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="2">
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormStartDate} <span class="text-red-600">*</span></label>
            <input type="date" id="startDate" required class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500">
          </div>
          
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-gray-700 mb-2">${t.schFormTuition} <span class="text-red-600">*</span></label>
            <input type="number" id="tuition" required min="0" step="1000" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="50000">
          </div>
        </div>
      </div>

      <!-- Documents -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center bg-blue-50">
            <i class="fas fa-paperclip text-blue-600"></i>
          </div>
          ${t.schFormDocuments}
        </h2>
        
        <div class="space-y-4">
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-maroon-500 transition-colors">
            <label class="flex flex-col items-center cursor-pointer">
              <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
              <span class="text-sm font-medium text-gray-700">${t.schFormUploadLetter}</span>
              <input type="file" id="acceptanceLetter" accept=".pdf" class="hidden">
              <span class="text-xs text-gray-500 mt-2">PDF ${isRTL ? 'فقط، حتى 5 ميجابايت' : 'only, up to 5MB'}</span>
            </label>
          </div>
          
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-maroon-500 transition-colors">
            <label class="flex flex-col items-center cursor-pointer">
              <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
              <span class="text-sm font-medium text-gray-700">${t.schFormUploadTranscript}</span>
              <input type="file" id="transcript" accept=".pdf" class="hidden">
              <span class="text-xs text-gray-500 mt-2">PDF ${isRTL ? 'فقط، حتى 5 ميجابايت' : 'only, up to 5MB'}</span>
            </label>
          </div>
          
          <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-maroon-500 transition-colors">
            <label class="flex flex-col items-center cursor-pointer">
              <i class="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-2"></i>
              <span class="text-sm font-medium text-gray-700">${t.schFormUploadCV}</span>
              <input type="file" id="cv" accept=".pdf" class="hidden">
              <span class="text-xs text-gray-500 mt-2">PDF ${isRTL ? 'فقط، حتى 5 ميجابايت' : 'only, up to 5MB'}</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Justification -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center bg-green-50">
            <i class="fas fa-pen text-green-600"></i>
          </div>
          ${t.schFormJustification}
        </h2>
        
        <textarea id="justification" required rows="6" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-maroon-500" placeholder="${isRTL ? 'اشرح كيف سيفيد هذا البرنامج الجامعة ومجال عملك...' : 'Explain how this program will benefit the university and your work field...'}"></textarea>
        <p class="text-sm text-gray-500 mt-2">${isRTL ? 'الحد الأدنى 200 حرف' : 'Minimum 200 characters'}</p>
      </div>

      <!-- Submit Buttons -->
      <div class="flex gap-4">
        <button type="submit" class="btn-primary flex-1">
          <i class="fas fa-paper-plane mr-2"></i>
          ${t.schFormSubmit}
        </button>
        <a href="/scholarship?lang=${lang}" class="btn-secondary">
          ${t.schFormCancel}
        </a>
      </div>
    </form>

    <!-- Info Box -->
    <div class="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mt-8">
      <div class="flex items-start gap-4">
        <i class="fas fa-info-circle text-2xl text-blue-600 mt-1"></i>
        <div>
          <h3 class="text-lg font-bold text-blue-900 mb-2">${isRTL ? 'ملاحظة هامة' : 'Important Note'}</h3>
          <ul class="space-y-2 text-blue-800 text-sm">
            <li><i class="fas fa-check mr-2"></i>${isRTL ? 'سيتم إرسال طلبك إلى قسم الرواتب للمراجعة' : 'Your application will be sent to payroll department for review'}</li>
            <li><i class="fas fa-check mr-2"></i>${isRTL ? 'ستتلقى إشعاراً بالبريد الإلكتروني عند تحديث حالة طلبك' : 'You will receive email notification when your application status is updated'}</li>
            <li><i class="fas fa-check mr-2"></i>${isRTL ? 'يمكنك متابعة حالة طلبك عبر بوابة الموظفين' : 'You can track your application status via staff portal'}</li>
            <li><i class="fas fa-check mr-2"></i>${isRTL ? 'متوسط مدة المعالجة: 17-25 يوم عمل' : 'Average processing time: 17-25 working days'}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <script>
  // Form submission
  document.getElementById('scholarshipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
      fullName: document.getElementById('fullName').value,
      empId: document.getElementById('empId').value,
      department: document.getElementById('department').value,
      programType: document.getElementById('programType').value,
      major: document.getElementById('major').value,
      university: document.getElementById('university').value,
      country: document.getElementById('country').value,
      duration: document.getElementById('duration').value,
      startDate: document.getElementById('startDate').value,
      tuition: document.getElementById('tuition').value,
      justification: document.getElementById('justification').value
    };
    
    // Validate justification length
    if (formData.justification.length < 200) {
      alert(${isRTL ? "'يجب أن تكون المبررات 200 حرف على الأقل'" : "'Justification must be at least 200 characters'"});
      return;
    }
    
    // Create SLA request
    const slaRequests = JSON.parse(localStorage.getItem('sla_requests') || '[]');
    const reqId = 'REQ-' + (3000 + slaRequests.length);
    
    const newRequest = {
      id: reqId,
      type: 'scholarship',
      typeLabel: ${isRTL ? "'طلب ابتعاث'" : "'Scholarship Application'"},
      empName: formData.fullName,
      empId: formData.empId,
      submittedAt: new Date().toISOString(),
      slaDate: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days
      status: 'open',
      priority: 'high',
      description: \`\${formData.programType} - \${formData.major} - \${formData.university}\`,
      details: formData,
      source: 'staff'
    };
    
    slaRequests.push(newRequest);
    localStorage.setItem('sla_requests', JSON.stringify(slaRequests));
    
    // Broadcast to SLA page
    if (typeof BroadcastChannel !== 'undefined') {
      const bc = new BroadcastChannel('sla_updates');
      bc.postMessage({ type: 'new_request', request: newRequest });
      bc.close();
    }
    
    // Show success message
    alert(${isRTL ? "'تم تقديم طلب الابتعاث بنجاح!\\n\\nرقم الطلب: '" : "'Scholarship application submitted successfully!\\n\\nRequest ID: '"} + reqId + ${isRTL ? "'\\n\\nيمكنك متابعة حالة الطلب عبر بوابة الموظفين.'" : "'\\n\\nYou can track your application via staff portal.'"});
    
    // Redirect to staff portal
    setTimeout(() => {
      window.location.href = '/staff-request?lang=${lang}';
    }, 1500);
  });
  
  // File upload preview
  ['acceptanceLetter', 'transcript', 'cv'].forEach(id => {
    document.getElementById(id).addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        if (file.size > 5 * 1024 * 1024) {
          alert(${isRTL ? "'حجم الملف يتجاوز 5 ميجابايت'" : "'File size exceeds 5MB'"});
          this.value = '';
          return;
        }
        const label = this.closest('label');
        const span = label.querySelector('span');
        span.innerHTML = \`<i class="fas fa-check-circle text-green-600 mr-2"></i>\${file.name}\`;
      }
    });
  });
  
  // Download scholarship application form
  function downloadScholarshipForm() {
    const isArabic = ${isRTL};
    const formContent = isArabic ? 
      \`نموذج طلب الابتعاث - جامعة قطر

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

القسم الأول: البيانات الشخصية
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

الاسم الكامل (بالعربية): ________________________________________________

الاسم الكامل (بالإنجليزية): _______________________________________________

الرقم الوظيفي: QU-____-______

القسم/الإدارة الحالية: __________________________________________________

الوظيفة الحالية: _______________________________________________________

تاريخ التعيين: ____/____/________

عدد سنوات الخدمة: _______

البريد الإلكتروني: _____________________________________________________

رقم الهاتف: ____________________________________________________________

العنوان: _______________________________________________________________


القسم الثاني: تفاصيل البرنامج الأكاديمي
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

نوع البرنامج: ☐ ماجستير  ☐ دكتوراه  ☐ شهادة مهنية

التخصص: _______________________________________________________________

اسم الجامعة: ___________________________________________________________

الدولة: ________________________________________________________________

مدة البرنامج (بالسنوات): ________________________________________________

تاريخ البدء المتوقع: ____/____/________

نوع الدراسة: ☐ بدوام كامل  ☐ بدوام جزئي  ☐ عن بعد


القسم الثالث: التكاليف المتوقعة
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

الرسوم الدراسية السنوية: ____________________________________________ ريال

تكاليف الكتب والمواد: _______________________________________________ ريال

تكاليف المعيشة المتوقعة (إن وُجدت): _________________________________ ريال

الإجمالي المتوقع: ____________________________________________________ ريال


القسم الرابع: المبررات والأهداف
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. أسباب اختيار هذا البرنامج والتخصص:
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

2. كيف سيفيد هذا البرنامج عملك في جامعة قطر؟
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

3. الأهداف المهنية بعد إكمال البرنامج:
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________


القسم الخامس: المستندات المرفقة
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ خطاب القبول الرسمي من الجامعة
☐ آخر كشف درجات أكاديمي
☐ السيرة الذاتية المحدثة
☐ خطة الدراسة والمقررات
☐ تفاصيل تكاليف البرنامج من الجامعة
☐ موافقة مدير القسم/الإدارة
☐ نسخة من الهوية الشخصية


القسم السادس: الإقرارات والتعهدات
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ أقر بأنني قرأت وفهمت شروط وقوانين برنامج الابتعاث بجامعة قطر

☐ أتعهد بالالتزام بخدمة الجامعة لمدة سنتين عن كل سنة دراسية بعد التخرج

☐ أتعهد بالحفاظ على معدل تراكمي لا يقل عن 3.0 طوال فترة الدراسة

☐ أتعهد بتقديم كشوف الدرجات الفصلية لقسم الموارد البشرية

☐ أفهم أنني سأكون مسؤولاً عن إعادة جميع التكاليف في حالة عدم إكمال البرنامج أو الإخلال بشروط الابتعاث


التوقيعات
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

توقيع الموظف: __________________    التاريخ: ____/____/________


موافقة مدير القسم: ______________    التاريخ: ____/____/________


اعتماد الموارد البشرية: __________    التاريخ: ____/____/________


اعتماد قسم الرواتب: _____________    التاريخ: ____/____/________


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
جامعة قطر - إدارة الموارد البشرية وقسم الرواتب
الهاتف: داخلي 4100 / 4101 | البريد الإلكتروني: scholarship@qu.edu.qa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\` 
    : 
      \`SCHOLARSHIP APPLICATION FORM - Qatar University

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1: PERSONAL INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Full Name (Arabic): ______________________________________________________

Full Name (English): _____________________________________________________

Employee ID: QU-____-______

Current Department/Division: ______________________________________________

Current Position: _________________________________________________________

Date of Appointment: ____/____/________

Years of Service: _______

Email Address: ___________________________________________________________

Phone Number: ____________________________________________________________

Address: _________________________________________________________________


SECTION 2: ACADEMIC PROGRAM DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Program Type: ☐ Master's Degree  ☐ PhD  ☐ Professional Certificate

Major/Field of Study: _____________________________________________________

University Name: __________________________________________________________

Country: __________________________________________________________________

Program Duration (years): _________________________________________________

Expected Start Date: ____/____/________

Study Mode: ☐ Full-time  ☐ Part-time  ☐ Distance Learning


SECTION 3: EXPECTED COSTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Annual Tuition Fees: _____________________________________________ QAR

Books & Materials: ________________________________________________ QAR

Living Expenses (if applicable): _________________________________ QAR

Total Expected Cost: ______________________________________________ QAR


SECTION 4: JUSTIFICATION & OBJECTIVES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Reasons for choosing this program and major:
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

2. How will this program benefit your work at Qatar University?
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________

3. Career goals after completing the program:
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________
__________________________________________________________________________


SECTION 5: ATTACHED DOCUMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ Official acceptance letter from university
☐ Latest academic transcript
☐ Updated CV/Resume
☐ Study plan and course list
☐ Program cost breakdown from university
☐ Department head approval
☐ Copy of personal ID


SECTION 6: DECLARATIONS & COMMITMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

☐ I have read and understood Qatar University's scholarship rules and policies

☐ I commit to serve the university for 2 years per year of study after graduation

☐ I commit to maintain a minimum CGPA of 3.0 throughout the program

☐ I commit to submit semester transcripts to Human Resources Department

☐ I understand that I will be responsible for repaying all costs in case of non-completion or breach of scholarship terms


SIGNATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Employee Signature: __________________    Date: ____/____/________


Department Head Approval: _____________    Date: ____/____/________


Human Resources Approval: _____________    Date: ____/____/________


Payroll Department Approval: __________    Date: ____/____/________


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Qatar University - Human Resources & Payroll Department
Phone: Ext. 4100 / 4101 | Email: scholarship@qu.edu.qa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\`;

    // Create and download the text file
    const blob = new Blob([formContent], { type: 'text/plain;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = isArabic ? 'نموذج_طلب_الابتعاث_جامعة_قطر.txt' : 'QU_Scholarship_Application_Form.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  </script>
  `

  return c.html(layout(pageTitle, content, 'scholarship', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  MISSIONS PUBLIC PAGE  /missions
// ─────────────────────────────────────────────────────────────────────────────
app.get('/missions', (c) => {
  const lang  = getLang(c)
  const t     = T[lang]
  const isRTL = lang === 'ar'
  const pageTitle = isRTL ? 'المهام الرسمية والعلمية' : 'Official & Academic Missions'

  const content = `
  <!-- ══ HEADER ══ -->
  <div class="mb-8">
    <h1 class="text-2xl font-bold mb-1" style="color:var(--qu-maroon)">
      <i class="fas fa-plane-departure ${isRTL?'ml-2':'mr-2'}"></i>${isRTL?'المهام الرسمية والعلمية':'Official & Academic Missions'}
    </h1>
    <p class="text-gray-500 text-sm">${isRTL?'تتبع الطلبات • الإجراءات • التكاليف • الربط مع قسم التدريب والتطوير':'Track Requests • Procedures • Costs • Linked with Training & Development'}</p>
  </div>

  <!-- ══ INFO CARDS ══ -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
    <div class="card p-5 flex gap-4 items-start form-card">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:#EFF6FF">
        <i class="fas fa-briefcase text-blue-700 text-lg"></i>
      </div>
      <div>
        <h3 class="font-bold text-gray-800 mb-1">${isRTL?'المهمة الرسمية':'Official Mission'}</h3>
        <p class="text-gray-500 text-xs leading-relaxed">${isRTL?'سفر رسمي بتكليف من الجامعة لأغراض إدارية أو تمثيلية، ويشمل بدل يومي وتذاكر سفر وإقامة على حساب الجامعة.':'Official travel assigned by the university for administrative or representative purposes, including daily allowance, flight tickets, and accommodation.'}</p>
      </div>
    </div>
    <div class="card p-5 flex gap-4 items-start form-card">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:#F0FDF4">
        <i class="fas fa-flask text-green-700 text-lg"></i>
      </div>
      <div>
        <h3 class="font-bold text-gray-800 mb-1">${isRTL?'المهمة العلمية':'Academic Mission'}</h3>
        <p class="text-gray-500 text-xs leading-relaxed">${isRTL?'مشاركة في مؤتمرات علمية أو تقديم أبحاث أكاديمية خارج الدولة، وتشمل رسوم التسجيل ونفقات السفر والإقامة.':'Participation in scientific conferences or presenting academic research abroad, covering registration fees, travel, and accommodation.'}</p>
      </div>
    </div>
    <div class="card p-5 flex gap-4 items-start form-card">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:#FFFBEB">
        <i class="fas fa-chalkboard-teacher text-yellow-700 text-lg"></i>
      </div>
      <div>
        <h3 class="font-bold text-gray-800 mb-1">${isRTL?'التدريب الخارجي':'External Training'}</h3>
        <p class="text-gray-500 text-xs leading-relaxed">${isRTL?'دورات تدريبية وورش عمل خارج الدولة بتنسيق من قسم التدريب والتطوير، وتُمنح وفق خطة التدريب السنوية المعتمدة.':'Training courses and workshops abroad coordinated by the Training & Development Dept., granted according to the approved annual training plan.'}</p>
      </div>
    </div>
  </div>

  <!-- ══ FINANCIAL ENTITLEMENTS ══ -->
  <div class="card p-6 mb-6">
    <h2 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
      <i class="fas fa-coins" style="color:var(--qu-gold)"></i>
      ${isRTL?'المستحقات المالية للمهام':'Financial Entitlements for Missions'}
    </h2>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b-2" style="border-color:var(--qu-maroon)">
            <th class="py-3 px-4 ${isRTL?'text-right':'text-left'} font-bold text-gray-700">${isRTL?'البند':'Item'}</th>
            <th class="py-3 px-4 text-center font-bold text-gray-700">${isRTL?'داخل الدولة':'Within Qatar'}</th>
            <th class="py-3 px-4 text-center font-bold text-gray-700">${isRTL?'خارج الدولة (خليج)':'GCC Countries'}</th>
            <th class="py-3 px-4 text-center font-bold text-gray-700">${isRTL?'خارج الدولة (دولي)':'International'}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr class="hover:bg-gray-50">
            <td class="py-3 px-4 font-semibold text-gray-700">${isRTL?'البدل اليومي':'Daily Allowance'}</td>
            <td class="py-3 px-4 text-center font-bold" style="color:var(--qu-maroon)">${isRTL?'200 ريال':'QR 200'}</td>
            <td class="py-3 px-4 text-center font-bold" style="color:var(--qu-maroon)">${isRTL?'600 ريال':'QR 600'}</td>
            <td class="py-3 px-4 text-center font-bold" style="color:var(--qu-maroon)">${isRTL?'800–1,500 ريال':'QR 800–1,500'}</td>
          </tr>
          <tr class="hover:bg-gray-50 bg-gray-50">
            <td class="py-3 px-4 font-semibold text-gray-700">${isRTL?'تذاكر السفر':'Flight Tickets'}</td>
            <td class="py-3 px-4 text-center text-gray-500">—</td>
            <td class="py-3 px-4 text-center text-green-700 font-bold">${isRTL?'درجة اقتصادية':'Economy Class'}</td>
            <td class="py-3 px-4 text-center text-green-700 font-bold">${isRTL?'حسب المسافة':'By Distance'}</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="py-3 px-4 font-semibold text-gray-700">${isRTL?'الإقامة / الفندق':'Accommodation'}</td>
            <td class="py-3 px-4 text-center text-gray-500">—</td>
            <td class="py-3 px-4 text-center font-bold" style="color:var(--qu-maroon)">${isRTL?'حتى 400 ريال/ليلة':'Up to QR 400/night'}</td>
            <td class="py-3 px-4 text-center font-bold" style="color:var(--qu-maroon)">${isRTL?'حتى 800 ريال/ليلة':'Up to QR 800/night'}</td>
          </tr>
          <tr class="hover:bg-gray-50 bg-gray-50">
            <td class="py-3 px-4 font-semibold text-gray-700">${isRTL?'رسوم المؤتمر / التسجيل':'Conference / Registration Fees'}</td>
            <td class="py-3 px-4 text-center text-gray-500">—</td>
            <td class="py-3 px-4 text-center text-green-700 font-bold">${isRTL?'كاملة (بعد اعتماد)':'Full (post-approval)'}</td>
            <td class="py-3 px-4 text-center text-green-700 font-bold">${isRTL?'كاملة (بعد اعتماد)':'Full (post-approval)'}</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="py-3 px-4 font-semibold text-gray-700">${isRTL?'مصاريف أخرى':'Other Expenses'}</td>
            <td class="py-3 px-4 text-center text-gray-500">—</td>
            <td class="py-3 px-4 text-center text-gray-600">${isRTL?'بإيصالات':'With receipts'}</td>
            <td class="py-3 px-4 text-center text-gray-600">${isRTL?'بإيصالات':'With receipts'}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-xs text-gray-400 mt-3 ${isRTL?'text-right':''}">
      <i class="fas fa-info-circle ${isRTL?'ml-1':'mr-1'}"></i>
      ${isRTL?'تخضع جميع المبالغ لسياسة الجامعة المعتمدة وقد تتغير وفق قرارات الإدارة العليا.':'All amounts are subject to the university\'s approved policy and may change per senior management decisions.'}
    </p>
  </div>

  <!-- ══ PROCEDURES ══ -->
  <div class="card p-6 mb-6">
    <h2 class="font-bold text-gray-800 mb-5 flex items-center gap-2">
      <i class="fas fa-list-ol" style="color:var(--qu-maroon)"></i>
      ${isRTL?'إجراءات طلب المهمة':'Mission Request Procedures'}
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- الخطوات -->
      <div class="space-y-4">
        ${[
          { n:'1', icon:'fa-file-alt',        ar:'تعبئة نموذج طلب المهمة',           en:'Fill the mission request form',                      ar2:'نموذج MIS-F-001 متاح في صفحة النماذج',              en2:'Form MIS-F-001 available on Forms page' },
          { n:'2', icon:'fa-user-check',      ar:'اعتماد المشرف المباشر',             en:'Direct supervisor approval',                          ar2:'توقيع المشرف على النموذج قبل الرفع',                en2:'Supervisor signature on form before submission' },
          { n:'3', icon:'fa-chalkboard-teacher', ar:'إحالة لقسم التدريب (إن كان تدريباً)', en:'Referral to Training Dept. (if training)',            ar2:'يراجع القسم الخطة التدريبية السنوية',               en2:'Dept. reviews the annual training plan' },
          { n:'4', icon:'fa-coins',           ar:'موافقة إدارة الرواتب على الميزانية', en:'Payroll dept. budget approval',                       ar2:'مراجعة التكاليف وإصدار الموافقة المالية',            en2:'Cost review and financial approval issued' },
          { n:'5', icon:'fa-plane',           ar:'تنفيذ المهمة',                      en:'Mission execution',                                   ar2:'يلتزم الموظف بتقديم تقرير نهائي بعد العودة',        en2:'Employee must submit final report upon return' },
          { n:'6', icon:'fa-receipt',         ar:'تسوية المصاريف',                    en:'Expense settlement',                                  ar2:'تقديم الإيصالات خلال 5 أيام عمل من تاريخ العودة',   en2:'Submit receipts within 5 working days of return' },
        ].map(s => `
        <div class="flex gap-3 items-start">
          <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-black" style="background:var(--qu-maroon)">${s.n}</div>
          <div>
            <p class="font-bold text-gray-800 text-sm"><i class="fas ${s.icon} ${isRTL?'ml-1':'mr-1'} text-gray-400"></i>${isRTL?s.ar:s.en}</p>
            <p class="text-xs text-gray-500 mt-0.5">${isRTL?s.ar2:s.en2}</p>
          </div>
        </div>`).join('')}
      </div>
      <!-- ملاحظات مهمة -->
      <div class="rounded-xl p-5 space-y-3" style="background:#FEF9E7;border:1px solid #F0C040">
        <h3 class="font-bold text-yellow-800 flex items-center gap-2">
          <i class="fas fa-exclamation-triangle"></i>${isRTL?'ملاحظات مهمة':'Important Notes'}
        </h3>
        ${[
          { ar:'يجب تقديم الطلب قبل 15 يوم عمل على الأقل من موعد السفر.', en:'Request must be submitted at least 15 working days before travel.' },
          { ar:'لا تُصرف أي مستحقات مالية بدون موافقة مسبقة من إدارة الرواتب.', en:'No financial entitlements are paid without prior Payroll dept. approval.' },
          { ar:'طلبات التدريب الخارجي تمر حصراً عبر قسم التدريب والتطوير.', en:'External training requests go exclusively through Training & Development.' },
          { ar:'في حال الإلغاء، يُبلَّغ مكتب الرواتب فوراً لاسترداد أي مدفوعات.', en:'In case of cancellation, Payroll office must be notified immediately.' },
          { ar:'يُلزم الموظف بتقديم تقرير مهمة خلال أسبوع من العودة.', en:'Employee must submit mission report within one week of return.' },
        ].map(n=>`<p class="text-yellow-900 text-xs flex gap-2"><i class="fas fa-circle-dot mt-0.5 flex-shrink-0" style="color:var(--qu-gold)"></i><span>${isRTL?n.ar:n.en}</span></p>`).join('')}
      </div>
    </div>
  </div>

  <!-- ══ LINK TO MANAGEMENT + TRAINING DEPT ══ -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
    <div class="card p-5" style="border-top:4px solid var(--qu-maroon)">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:var(--qu-maroon)">
          <i class="fas fa-table-list text-white" style="font-size:1rem"></i>
        </div>
        <div>
          <h3 class="font-bold text-gray-800">${isRTL?'إدارة المهام':'Missions Management'}</h3>
          <p class="text-xs text-gray-500">${isRTL?'تسجيل وتتبع المهام وإصدار التقارير':'Register, track missions and generate reports'}</p>
        </div>
      </div>
      <p class="text-gray-600 text-sm mb-4">${isRTL?'يمكنك من خلال هذه الصفحة إدارة جميع المهام الرسمية والعلمية وتتبع حالة الطلبات والتكاليف وإرسال الإشعارات للموظفين.':'Through this page you can manage all official and academic missions, track request status, costs, and send notifications to employees.'}</p>
      <button onclick="openNewMission()" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-primary">
        <i class="fas fa-plus-circle"></i>${isRTL?'إضافة مهمة جديدة':'Add New Mission'}
      </button>
    </div>
    <div class="card p-5" style="border-top:4px solid #064E3B">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:#064E3B">
          <i class="fas fa-chalkboard-teacher text-white" style="font-size:1rem"></i>
        </div>
        <div>
          <h3 class="font-bold text-gray-800">${isRTL?'قسم التدريب والتطوير':'Training & Development'}</h3>
          <p class="text-xs text-gray-500">${isRTL?'للمهام والدورات التدريبية الخارجية':'For external training missions & courses'}</p>
        </div>
      </div>
      <p class="text-gray-600 text-sm mb-4">${isRTL?'جميع طلبات التدريب الخارجي تُرفع أولاً لقسم التدريب والتطوير، ثم تُحال تلقائياً لإدارة الرواتب للاعتماد المالي.':'All external training requests are submitted first to Training & Development, then automatically referred to Payroll for financial approval.'}</p>
      <div class="flex gap-2 flex-wrap">
        <a href="mailto:training@qu.edu.qa" class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#064E3B">
          <i class="fas fa-envelope"></i>training@qu.edu.qa
        </a>
        <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-gray-700 bg-gray-100">
          <i class="fas fa-phone"></i>${isRTL?'داخلي 4300':'Ext. 4300'}
        </span>
      </div>
    </div>
  </div>

  <!-- ══ REQUIRED DOCUMENTS ══ -->
  <div class="card p-6 mb-6">
    <h2 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
      <i class="fas fa-folder-open" style="color:var(--qu-gold)"></i>
      ${isRTL?'المستندات المطلوبة':'Required Documents'}
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      ${[
        { icon:'fa-file-alt',       ar:'نموذج طلب المهمة MIS-F-001',          en:'Mission Request Form MIS-F-001' },
        { icon:'fa-signature',      ar:'توقيع المشرف المباشر والمدير',         en:'Direct supervisor & manager signature' },
        { icon:'fa-calendar-check', ar:'جدول المؤتمر أو برنامج التدريب',       en:'Conference schedule or training programme' },
        { icon:'fa-ticket-alt',     ar:'عروض أسعار التذاكر والفندق',          en:'Flight & hotel price quotations' },
        { icon:'fa-id-card',        ar:'صورة جواز السفر (سارية المفعول)',       en:'Valid passport copy' },
        { icon:'fa-receipt',        ar:'إيصالات المصاريف (بعد العودة)',         en:'Expense receipts (upon return)' },
      ].map(d=>`
      <div class="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
        <i class="fas ${d.icon} text-gray-400 w-5 text-center"></i>
        <span class="text-sm text-gray-700">${isRTL?d.ar:d.en}</span>
      </div>`).join('')}
    </div>
  </div>

  <!-- ══ CONTACT ══ -->
  <div class="card p-5" style="background:linear-gradient(135deg,#1e3a5f,#1a4a7a)">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div class="${isRTL?'text-right':''}">
        <h3 class="font-bold text-white mb-1">${isRTL?'مكتب الرواتب — المهام الرسمية':'Payroll Office — Official Missions'}</h3>
        <p class="text-white/70 text-sm">${isRTL?'للاستفسار عن طلبات المهام والمستحقات المالية':'For inquiries about mission requests and financial entitlements'}</p>
      </div>
      <div class="flex gap-3 flex-wrap">
        <a href="mailto:missions@qu.edu.qa" class="px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2" style="background:var(--qu-gold);color:white">
          <i class="fas fa-envelope"></i>missions@qu.edu.qa
        </a>
        <span class="px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2" style="background:rgba(255,255,255,.15)">
          <i class="fas fa-phone"></i>${isRTL?'داخلي 4200 / 4201':'Ext. 4200 / 4201'}
        </span>
      </div>
    </div>
  </div>

  <!-- ══ DIVIDER ══ -->
  <div class="my-8 flex items-center gap-4">
    <div class="flex-1 h-px" style="background:linear-gradient(90deg,var(--qu-maroon),transparent)"></div>
    <div class="px-4 py-2 rounded-xl text-sm font-bold text-white flex items-center gap-2" style="background:var(--qu-maroon)">
      <i class="fas fa-cogs"></i>${isRTL?'إدارة المهام — النظام الداخلي':'Missions Management — Internal System'}
    </div>
    <div class="flex-1 h-px" style="background:linear-gradient(270deg,var(--qu-maroon),transparent)"></div>
  </div>

  <!-- ══ MANAGEMENT HEADER ══ -->
  <div class="rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap mb-6"
       style="background:linear-gradient(135deg,#1e3a5f 0%,#1a4a7a 60%,#0f2d50 100%)">
    <div class="${isRTL?'text-right':''}">
      <p class="text-white/70 text-sm mb-1">
        <i class="fas fa-building ${isRTL?'ml-1':'mr-1'}"></i>
        ${isRTL?'إدارة الرواتب والموارد البشرية':'Payroll & HR Department'}
      </p>
      <h2 class="text-xl font-bold text-white">
        <i class="fas fa-table ${isRTL?'ml-2':'mr-2'}"></i>
        ${isRTL?'سجل وإدارة المهام':'Mission Records & Management'}
      </h2>
      <p class="text-white/60 text-sm mt-1">
        ${isRTL?'تتبع طلبات المهام • استخراج التقارير • إشعارات الموظفين':'Track Mission Requests • Generate Reports • Employee Notifications'}
      </p>
    </div>
    <div class="flex gap-3 flex-wrap">
      <button onclick="openNewMission()"
        class="px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition"
        style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3)">
        <i class="fas fa-plus-circle"></i>${isRTL?'مهمة جديدة':'New Mission'}
      </button>
      <button onclick="exportReport()"
        class="px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition"
        style="background:var(--qu-gold);color:white">
        <i class="fas fa-file-export"></i>${isRTL?'استخراج تقرير':'Export Report'}
      </button>
    </div>
  </div>

  <!-- ══ STATS CARDS ══ -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
    <div class="card p-4 text-center">
      <div class="text-3xl font-black" style="color:#1e3a5f" id="statTotal">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL?'إجمالي المهام':'Total Missions'}</div>
    </div>
    <div class="card p-4 text-center">
      <div class="text-3xl font-black text-yellow-600" id="statPending">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL?'قيد المراجعة':'Under Review'}</div>
    </div>
    <div class="card p-4 text-center">
      <div class="text-3xl font-black text-green-600" id="statApproved">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL?'معتمدة':'Approved'}</div>
    </div>
    <div class="card p-4 text-center">
      <div class="text-3xl font-black" style="color:var(--qu-gold)" id="statTotalCost">0</div>
      <div class="text-xs text-gray-500 mt-1">${isRTL?'إجمالي التكلفة (ريال)':'Total Cost (QAR)'}</div>
    </div>
  </div>

  <!-- ══ TRAINING DEPT INBOX ══ -->
  <div class="card p-0 overflow-hidden mb-6">
    <div class="px-5 py-4 flex items-center justify-between flex-wrap gap-3"
         style="background:linear-gradient(90deg,#064E3B,#065F46);border-radius:12px 12px 0 0">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(255,255,255,.15)">
          <i class="fas fa-chalkboard-teacher text-white"></i>
        </div>
        <div>
          <h3 class="font-bold text-white text-sm">${isRTL?'طلبات واردة من قسم التدريب والتطوير':'Requests from Training & Development Dept.'}</h3>
          <p class="text-green-200 text-xs">${isRTL?'المهام الواردة من إدارة التدريب بانتظار الاعتماد':'Training-originated missions awaiting payroll approval'}</p>
        </div>
      </div>
      <span class="text-xs font-bold px-3 py-1 rounded-full" style="background:rgba(255,255,255,.2);color:#fff" id="trainingBadge">0</span>
    </div>
    <div id="trainingInbox" class="divide-y divide-gray-100"></div>
    <div id="trainingEmpty" class="py-10 text-center text-gray-400 text-sm hidden">
      <i class="fas fa-inbox text-3xl mb-2 block opacity-30"></i>
      ${isRTL?'لا توجد طلبات واردة من قسم التدريب':'No incoming requests from Training Dept.'}
    </div>
  </div>

  <!-- ══ FILTERS + SEARCH ══ -->
  <div class="card p-4 mb-4">
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-3">
      <input id="srchInput" type="text" placeholder="${isRTL?'بحث بالاسم أو الرقم...':'Search by name or ID...'}"
        oninput="filterMissions()"
        class="col-span-1 sm:col-span-2 rounded-xl border border-gray-200 px-4 py-2 text-sm focus:outline-none focus:ring-2">
      <select id="filterType" onchange="filterMissions()"
        class="rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none">
        <option value="">${isRTL?'كل الأنواع':'All Types'}</option>
        <option value="official">${isRTL?'مهمة رسمية':'Official Mission'}</option>
        <option value="academic">${isRTL?'مهمة علمية':'Academic Mission'}</option>
        <option value="training">${isRTL?'تدريب خارجي':'External Training'}</option>
        <option value="conference">${isRTL?'مؤتمر / ورشة':'Conference / Workshop'}</option>
      </select>
      <select id="filterStatus" onchange="filterMissions()"
        class="rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none">
        <option value="">${isRTL?'كل الحالات':'All Statuses'}</option>
        <option value="pending">${isRTL?'قيد المراجعة':'Pending'}</option>
        <option value="approved">${isRTL?'معتمدة':'Approved'}</option>
        <option value="rejected">${isRTL?'مرفوضة':'Rejected'}</option>
        <option value="completed">${isRTL?'منتهية':'Completed'}</option>
      </select>
    </div>
  </div>

  <!-- ══ MISSIONS TABLE ══ -->
  <div class="card overflow-hidden mb-6">
    <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
      <h3 class="font-bold text-gray-800">${isRTL?'سجل المهام':'Missions Log'}</h3>
      <span class="text-xs text-gray-400" id="countLabel"></span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full text-sm">
        <thead>
          <tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'رقم المهمة':'Mission ID'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الموظف':'Employee'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'نوع المهمة':'Type'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الوجهة':'Destination'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'التاريخ':'Date'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'التكلفة (ريال)':'Cost (QAR)'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الحالة':'Status'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'إجراءات':'Actions'}</th>
          </tr>
        </thead>
        <tbody id="missionsBody"></tbody>
      </table>
    </div>
    <div id="missionsEmpty" class="py-16 text-center text-gray-400 hidden">
      <i class="fas fa-plane text-4xl mb-3 block opacity-20"></i>
      <p>${isRTL?'لا توجد مهام مسجلة':'No missions recorded'}</p>
      <button onclick="openNewMission()" class="mt-3 px-4 py-2 rounded-xl text-sm font-bold btn-primary text-white">${isRTL?'إضافة أول مهمة':'Add First Mission'}</button>
    </div>
  </div>

  <!-- ══ NEW MISSION MODAL ══ -->
  <div id="missionModal" class="fixed inset-0 z-50 hidden items-center justify-center p-4" style="background:rgba(0,0,0,.5)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto">
      <div class="p-5 border-b border-gray-100 flex items-center justify-between"
           style="background:linear-gradient(135deg,#1e3a5f,#1a4a7a);border-radius:16px 16px 0 0">
        <h3 class="font-bold text-white" id="modalTitle">${isRTL?'تسجيل مهمة جديدة':'Register New Mission'}</h3>
        <button onclick="closeModal()" class="text-white/70 hover:text-white text-xl"><i class="fas fa-times"></i></button>
      </div>
      <div class="p-6 space-y-4">
        <input type="hidden" id="editId">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'اسم الموظف *':'Employee Name *'}</label>
            <input id="fEmpName" type="text" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="${isRTL?'الاسم الكامل':'Full name'}">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'رقم الموظف *':'Employee ID *'}</label>
            <input id="fEmpId" type="text" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="QU-XXXX-XXXX">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'البريد الإلكتروني':'Email'}</label>
            <input id="fEmpEmail" type="email" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="employee@qu.edu.qa">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'القسم / الكلية':'Department / College'}</label>
            <input id="fDept" type="text" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="${isRTL?'مثال: كلية الهندسة':'e.g. College of Engineering'}">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'نوع المهمة *':'Mission Type *'}</label>
            <select id="fType" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="official">${isRTL?'مهمة رسمية':'Official Mission'}</option>
              <option value="academic">${isRTL?'مهمة علمية':'Academic Mission'}</option>
              <option value="training">${isRTL?'تدريب خارجي':'External Training'}</option>
              <option value="conference">${isRTL?'مؤتمر / ورشة':'Conference / Workshop'}</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'الوجهة / المدينة *':'Destination / City *'}</label>
            <input id="fDest" type="text" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="${isRTL?'مثال: دبي، الإمارات':'e.g. Dubai, UAE'}">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'تاريخ البداية *':'Start Date *'}</label>
            <input id="fDateFrom" type="date" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'تاريخ النهاية *':'End Date *'}</label>
            <input id="fDateTo" type="date" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
          </div>
        </div>
        <div class="rounded-xl p-4 space-y-3" style="background:#F0F7FF;border:1px solid #BFDBFE">
          <h4 class="font-bold text-blue-800 text-sm flex items-center gap-2">
            <i class="fas fa-coins"></i>${isRTL?'التكاليف المالية (ريال قطري)':'Financial Costs (QAR)'}
          </h4>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div>
              <label class="text-xs text-gray-600 block mb-1">${isRTL?'بدل يومي':'Daily Allowance'}</label>
              <input id="fDaily" type="number" min="0" oninput="calcTotal()" class="w-full border border-blue-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="0">
            </div>
            <div>
              <label class="text-xs text-gray-600 block mb-1">${isRTL?'تذاكر السفر':'Flight Tickets'}</label>
              <input id="fTickets" type="number" min="0" oninput="calcTotal()" class="w-full border border-blue-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="0">
            </div>
            <div>
              <label class="text-xs text-gray-600 block mb-1">${isRTL?'الإقامة / الفندق':'Accommodation'}</label>
              <input id="fHotel" type="number" min="0" oninput="calcTotal()" class="w-full border border-blue-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="0">
            </div>
            <div>
              <label class="text-xs text-gray-600 block mb-1">${isRTL?'رسوم التسجيل':'Registration Fees'}</label>
              <input id="fFees" type="number" min="0" oninput="calcTotal()" class="w-full border border-blue-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="0">
            </div>
            <div>
              <label class="text-xs text-gray-600 block mb-1">${isRTL?'مصاريف أخرى':'Other Expenses'}</label>
              <input id="fOther" type="number" min="0" oninput="calcTotal()" class="w-full border border-blue-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="0">
            </div>
            <div class="flex flex-col justify-end">
              <label class="text-xs font-bold text-blue-800 block mb-1">${isRTL?'الإجمالي':'Total'}</label>
              <div class="rounded-xl px-3 py-2 text-sm font-black text-blue-900" style="background:#DBEAFE" id="fTotal">0 ${isRTL?'ريال':'QAR'}</div>
            </div>
          </div>
        </div>
        <div>
          <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'الغرض من المهمة *':'Mission Purpose *'}</label>
          <textarea id="fPurpose" rows="3" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="${isRTL?'وصف موجز للمهمة والهدف منها...':'Brief description of the mission and its objective...'}"></textarea>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'المصدر':'Source'}</label>
            <select id="fSource" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="payroll">${isRTL?'إدارة الرواتب':'Payroll Dept.'}</option>
              <option value="training">${isRTL?'قسم التدريب والتطوير':'Training & Development'}</option>
              <option value="hr">${isRTL?'الموارد البشرية':'Human Resources'}</option>
              <option value="college">${isRTL?'الكلية / القسم':'College / Department'}</option>
            </select>
          </div>
          <div>
            <label class="text-xs font-bold text-gray-600 block mb-1">${isRTL?'الحالة':'Status'}</label>
            <select id="fStatus" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
              <option value="pending">${isRTL?'قيد المراجعة':'Pending'}</option>
              <option value="approved">${isRTL?'معتمدة':'Approved'}</option>
              <option value="rejected">${isRTL?'مرفوضة':'Rejected'}</option>
              <option value="completed">${isRTL?'منتهية':'Completed'}</option>
            </select>
          </div>
        </div>
        <div class="rounded-xl p-4 flex items-center gap-3" style="background:#FFFBEB;border:1px solid #FDE68A">
          <input type="checkbox" id="fSendEmail" class="w-4 h-4 accent-yellow-500">
          <div>
            <label for="fSendEmail" class="font-bold text-yellow-800 text-sm cursor-pointer">
              <i class="fas fa-envelope ${isRTL?'ml-1':'mr-1'}"></i>
              ${isRTL?'إرسال إيميل إشعار للموظف بتفاصيل المهمة والقيمة المالية':'Send email notification to employee with mission details & financial value'}
            </label>
            <p class="text-yellow-700 text-xs mt-0.5">${isRTL?'سيُرسل الإيميل على البريد المسجّل للموظف':'Email will be sent to the registered employee email'}</p>
          </div>
        </div>
      </div>
      <div class="px-6 pb-6 flex gap-3 justify-end">
        <button onclick="closeModal()" class="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 transition">${isRTL?'إلغاء':'Cancel'}</button>
        <button onclick="saveMission()" class="px-6 py-2.5 rounded-xl text-sm font-bold text-white btn-primary flex items-center gap-2">
          <i class="fas fa-save"></i>${isRTL?'حفظ المهمة':'Save Mission'}
        </button>
      </div>
    </div>
  </div>

  <!-- ══ EMAIL PREVIEW MODAL ══ -->
  <div id="emailModal" class="fixed inset-0 z-50 hidden items-center justify-center p-4" style="background:rgba(0,0,0,.6)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-screen overflow-y-auto">
      <div class="p-5 border-b border-gray-100 flex items-center justify-between"
           style="background:linear-gradient(135deg,#C4922A,#DBA93C);border-radius:16px 16px 0 0">
        <h3 class="font-bold text-white"><i class="fas fa-envelope ${isRTL?'ml-2':'mr-2'}"></i>${isRTL?'معاينة الإيميل':'Email Preview'}</h3>
        <button onclick="closeEmailModal()" class="text-white/70 hover:text-white text-xl"><i class="fas fa-times"></i></button>
      </div>
      <div class="p-6">
        <div id="emailPreviewBody" class="rounded-xl border border-gray-200 p-5 text-sm text-gray-700 space-y-3 bg-gray-50"></div>
        <div class="mt-4 flex gap-3 justify-end">
          <button onclick="closeEmailModal()" class="px-5 py-2.5 rounded-xl text-sm font-bold text-gray-600 bg-gray-100 hover:bg-gray-200">${isRTL?'إغلاق':'Close'}</button>
          <button onclick="confirmSendEmail()" class="px-6 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2" style="background:var(--qu-gold)">
            <i class="fas fa-paper-plane"></i>${isRTL?'تأكيد الإرسال':'Confirm Send'}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ REPORT MODAL ══ -->
  <div id="reportModal" class="fixed inset-0 z-50 hidden items-center justify-center p-4" style="background:rgba(0,0,0,.6)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-screen overflow-y-auto">
      <div class="p-5 border-b border-gray-100 flex items-center justify-between"
           style="background:linear-gradient(135deg,#1e3a5f,#1a4a7a);border-radius:16px 16px 0 0">
        <h3 class="font-bold text-white"><i class="fas fa-chart-bar ${isRTL?'ml-2':'mr-2'}"></i>${isRTL?'تقرير المهام':'Missions Report'}</h3>
        <button onclick="closeReportModal()" class="text-white/70 hover:text-white text-xl"><i class="fas fa-times"></i></button>
      </div>
      <div class="p-6 space-y-4">
        <div class="flex gap-3 flex-wrap">
          <select id="rptYear" onchange="buildReport()" class="rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none">
            <option value="">${isRTL?'كل السنوات':'All Years'}</option>
            <option value="2025">2025</option><option value="2024">2024</option><option value="2023">2023</option>
          </select>
          <select id="rptType" onchange="buildReport()" class="rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none">
            <option value="">${isRTL?'كل الأنواع':'All Types'}</option>
            <option value="official">${isRTL?'رسمية':'Official'}</option>
            <option value="academic">${isRTL?'علمية':'Academic'}</option>
            <option value="training">${isRTL?'تدريب':'Training'}</option>
            <option value="conference">${isRTL?'مؤتمرات':'Conferences'}</option>
          </select>
          <select id="rptSource" onchange="buildReport()" class="rounded-xl border border-gray-200 px-3 py-2 text-sm focus:outline-none">
            <option value="">${isRTL?'كل المصادر':'All Sources'}</option>
            <option value="training">${isRTL?'التدريب والتطوير':'Training & Dev.'}</option>
            <option value="payroll">${isRTL?'الرواتب':'Payroll'}</option>
            <option value="hr">${isRTL?'الموارد البشرية':'HR'}</option>
          </select>
          <button onclick="printReport()" class="px-4 py-2 rounded-xl text-sm font-bold text-white btn-primary flex items-center gap-2">
            <i class="fas fa-print"></i>${isRTL?'طباعة':'Print'}
          </button>
        </div>
        <div id="reportBody"></div>
      </div>
    </div>
  </div>

  <!-- ══ TOAST ══ -->
  <div id="msToast" class="fixed bottom-6 ${isRTL?'left-6':'right-6'} z-50 hidden px-5 py-3 rounded-xl text-white text-sm font-bold shadow-xl flex items-center gap-3" style="background:#1e3a5f">
    <i id="msToastIcon" class="fas fa-check-circle"></i>
    <span id="msToastMsg"></span>
  </div>

  <script>
  var IS_RTL_MS = ${isRTL};
  var MISSIONS_KEY = 'qu_missions_v1';

  function getMissions(){ try{return JSON.parse(localStorage.getItem(MISSIONS_KEY)||'[]')}catch(e){return[]} }
  function saveMissions(d){ localStorage.setItem(MISSIONS_KEY, JSON.stringify(d)) }
  function genId(){ return 'MS-'+Date.now().toString(36).toUpperCase(); }
  function fmtDate(iso){ if(!iso) return '-'; var d=new Date(iso); return d.toLocaleDateString(IS_RTL_MS?'ar-QA':'en-GB',{year:'numeric',month:'short',day:'2-digit'}); }
  function numDays(from,to){ if(!from||!to) return 0; return Math.max(0,Math.round((new Date(to)-new Date(from))/(1000*60*60*24))+1); }

  var typeLabel = {
    official: IS_RTL_MS?'\u0645\u0647\u0645\u0629 \u0631\u0633\u0645\u064a\u0629':'Official Mission',
    academic:  IS_RTL_MS?'\u0645\u0647\u0645\u0629 \u0639\u0644\u0645\u064a\u0629':'Academic Mission',
    training:  IS_RTL_MS?'\u062a\u062f\u0631\u064a\u0628 \u062e\u0627\u0631\u062c\u064a':'External Training',
    conference:IS_RTL_MS?'\u0645\u0624\u062a\u0645\u0631 / \u0648\u0631\u0634\u0629':'Conference / Workshop'
  };
  var typeBg = { official:'#EFF6FF', academic:'#F0FDF4', training:'#FFFBEB', conference:'#FDF4FF' };
  var typeColor = { official:'#1D4ED8', academic:'#15803D', training:'#D97706', conference:'#7C3AED' };
  var statusLabel = {
    pending:   IS_RTL_MS?'\u0642\u064a\u062f \u0627\u0644\u0645\u0631\u0627\u062c\u0639\u0629':'Pending',
    approved:  IS_RTL_MS?'\u0645\u0639\u062a\u0645\u062f\u0629':'Approved',
    rejected:  IS_RTL_MS?'\u0645\u0631\u0641\u0648\u0636\u0629':'Rejected',
    completed: IS_RTL_MS?'\u0645\u0646\u062a\u0647\u064a\u0629':'Completed'
  };
  var statusColor = { pending:'#D97706', approved:'#15803D', rejected:'#DC2626', completed:'#6B7280' };
  var statusBg    = { pending:'#FFFBEB', approved:'#F0FDF4', rejected:'#FEF2F2', completed:'#F9FAFB' };
  var sourceLabel = {
    payroll:  IS_RTL_MS?'\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0631\u0648\u0627\u062a\u0628':'Payroll Dept.',
    training: IS_RTL_MS?'\u0642\u0633\u0645 \u0627\u0644\u062a\u062f\u0631\u064a\u0628 \u0648\u0627\u0644\u062a\u0637\u0648\u064a\u0631':'Training & Dev.',
    hr:       IS_RTL_MS?'\u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629':'Human Resources',
    college:  IS_RTL_MS?'\u0627\u0644\u0643\u0644\u064a\u0629 / \u0627\u0644\u0642\u0633\u0645':'College / Dept.'
  };

  function updateStats(){
    var ms = getMissions();
    document.getElementById('statTotal').textContent    = ms.length;
    document.getElementById('statPending').textContent  = ms.filter(function(m){return m.status==='pending';}).length;
    document.getElementById('statApproved').textContent = ms.filter(function(m){return m.status==='approved';}).length;
    var totalCost = ms.reduce(function(s,m){ return s+(m.totalCost||0); },0);
    document.getElementById('statTotalCost').textContent = totalCost.toLocaleString();
  }

  function renderTrainingInbox(){
    var ms = getMissions().filter(function(m){ return m.source==='training'; });
    var badge = document.getElementById('trainingBadge');
    var inbox = document.getElementById('trainingInbox');
    var empty = document.getElementById('trainingEmpty');
    badge.textContent = ms.length;
    if(!ms.length){ inbox.innerHTML=''; empty.classList.remove('hidden'); return; }
    empty.classList.add('hidden');
    inbox.innerHTML = ms.map(function(m){
      return '<div class="px-5 py-4 flex items-center justify-between gap-3 flex-wrap hover:bg-green-50 transition">'
        +'<div class="flex items-center gap-3">'
        +'<div class="w-9 h-9 rounded-xl flex items-center justify-center text-white text-sm font-bold" style="background:#064E3B">'
        +m.empName.charAt(0)+'</div>'
        +'<div>'
        +'<p class="font-bold text-gray-800 text-sm">'+m.empName+'</p>'
        +'<p class="text-xs text-gray-500">'+m.empId+' \u2022 '+(typeLabel[m.type]||m.type)+' \u2022 '+m.dest+'</p>'
        +'<p class="text-xs text-green-700 font-bold mt-0.5"><i class="fas fa-coins mr-1"></i>'+(m.totalCost||0).toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR')+'</p>'
        +'</div></div>'
        +'<div class="flex items-center gap-2">'
        +'<span class="text-xs px-2 py-1 rounded-lg font-bold" style="background:'+statusBg[m.status]+';color:'+statusColor[m.status]+'">'+(statusLabel[m.status]||m.status)+'</span>'
        +'<button onclick="editMission(this.dataset.id)" data-id="'+m.id+'" class="px-3 py-1.5 rounded-lg text-xs font-bold text-white" style="background:#064E3B"><i class="fas fa-edit"></i></button>'
        +'<button onclick="sendEmailTo(this.dataset.id)" data-id="'+m.id+'" class="px-3 py-1.5 rounded-lg text-xs font-bold text-white" style="background:var(--qu-gold)"><i class="fas fa-envelope"></i></button>'
        +'</div>'
        +'</div>';
    }).join('');
  }

  function renderMissions(list){
    var tbody = document.getElementById('missionsBody');
    var empty = document.getElementById('missionsEmpty');
    if(!list){ list = getMissions(); }
    document.getElementById('countLabel').textContent = list.length + (IS_RTL_MS?' \u0645\u0647\u0645\u0629':' missions');
    if(!list.length){ tbody.innerHTML=''; empty.classList.remove('hidden'); return; }
    empty.classList.add('hidden');
    tbody.innerHTML = list.map(function(m){
      return '<tr class="border-b border-gray-50 hover:bg-gray-50 transition">'
        +'<td class="px-4 py-3 font-mono text-xs text-gray-500">'+m.id+'</td>'
        +'<td class="px-4 py-3">'
          +'<p class="font-bold text-gray-800 text-sm">'+m.empName+'</p>'
          +'<p class="text-xs text-gray-400">'+m.empId+'</p>'
          +(m.dept?'<p class="text-xs text-gray-400">'+m.dept+'</p>':'')
        +'</td>'
        +'<td class="px-4 py-3"><span class="text-xs px-2 py-1 rounded-lg font-bold" style="background:'+typeBg[m.type]+';color:'+typeColor[m.type]+'">'+(typeLabel[m.type]||m.type)+'</span><br><span class="text-xs text-gray-400 mt-0.5 block">'+(sourceLabel[m.source]||m.source)+'</span></td>'
        +'<td class="px-4 py-3 text-sm text-gray-700">'+m.dest+'</td>'
        +'<td class="px-4 py-3 text-xs text-gray-600">'+fmtDate(m.dateFrom)+'<br>'+fmtDate(m.dateTo)+'<br><span class="text-gray-400">'+numDays(m.dateFrom,m.dateTo)+' '+(IS_RTL_MS?'\u0623\u064a\u0627\u0645':'days')+'</span></td>'
        +'<td class="px-4 py-3 font-bold text-sm" style="color:#1e3a5f">'+(m.totalCost||0).toLocaleString()+'<br><span class="text-xs text-gray-400 font-normal">'+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR')+'</span></td>'
        +'<td class="px-4 py-3"><span class="text-xs px-2 py-1 rounded-lg font-bold" style="background:'+statusBg[m.status]+';color:'+statusColor[m.status]+'">'+(statusLabel[m.status]||m.status)+'</span></td>'
        +'<td class="px-4 py-3">'
          +'<div class="flex gap-1 flex-wrap">'
          +'<button onclick="editMission(this.dataset.id)" data-id="'+m.id+'" class="px-2 py-1.5 rounded-lg text-xs font-bold text-white" style="background:#1e3a5f"><i class="fas fa-edit"></i></button>'
          +'<button onclick="sendEmailTo(this.dataset.id)" data-id="'+m.id+'" class="px-2 py-1.5 rounded-lg text-xs font-bold text-white" style="background:var(--qu-gold)"><i class="fas fa-envelope"></i></button>'
          +'<button onclick="deleteMission(this.dataset.id)" data-id="'+m.id+'" class="px-2 py-1.5 rounded-lg text-xs font-bold text-white bg-red-500 hover:bg-red-600"><i class="fas fa-trash"></i></button>'
          +'</div>'
        +'</td>'
        +'</tr>';
    }).join('');
  }

  function filterMissions(){
    var q      = document.getElementById('srchInput').value.toLowerCase();
    var type   = document.getElementById('filterType').value;
    var status = document.getElementById('filterStatus').value;
    var list   = getMissions().filter(function(m){
      var matchQ      = !q      || m.empName.toLowerCase().includes(q) || m.empId.toLowerCase().includes(q) || m.dest.toLowerCase().includes(q);
      var matchType   = !type   || m.type===type;
      var matchStatus = !status || m.status===status;
      return matchQ && matchType && matchStatus;
    });
    renderMissions(list);
  }

  function calcTotal(){
    var d = parseFloat(document.getElementById('fDaily').value)||0;
    var t = parseFloat(document.getElementById('fTickets').value)||0;
    var h = parseFloat(document.getElementById('fHotel').value)||0;
    var f = parseFloat(document.getElementById('fFees').value)||0;
    var o = parseFloat(document.getElementById('fOther').value)||0;
    var total = d+t+h+f+o;
    document.getElementById('fTotal').textContent = total.toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR');
    return total;
  }

  function openNewMission(){
    document.getElementById('editId').value = '';
    document.getElementById('modalTitle').textContent = IS_RTL_MS?'\u062a\u0633\u062c\u064a\u0644 \u0645\u0647\u0645\u0629 \u062c\u062f\u064a\u062f\u0629':'Register New Mission';
    ['fEmpName','fEmpId','fEmpEmail','fDept','fDest','fPurpose'].forEach(function(id){ document.getElementById(id).value=''; });
    ['fDaily','fTickets','fHotel','fFees','fOther'].forEach(function(id){ document.getElementById(id).value=''; });
    document.getElementById('fType').value   = 'official';
    document.getElementById('fSource').value = 'payroll';
    document.getElementById('fStatus').value = 'pending';
    document.getElementById('fDateFrom').value = '';
    document.getElementById('fDateTo').value   = '';
    document.getElementById('fTotal').textContent = '0 '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR');
    document.getElementById('fSendEmail').checked = false;
    var m = document.getElementById('missionModal');
    m.classList.remove('hidden');
    m.style.display = 'flex';
  }
  function closeModal(){
    var m = document.getElementById('missionModal');
    m.classList.add('hidden');
    m.style.display = 'none';
  }

  function editMission(id){
    var ms = getMissions();
    var m  = ms.find(function(x){ return x.id===id; });
    if(!m) return;
    document.getElementById('editId').value     = m.id;
    document.getElementById('modalTitle').textContent = IS_RTL_MS?'\u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0645\u0647\u0645\u0629':'Edit Mission';
    document.getElementById('fEmpName').value   = m.empName||'';
    document.getElementById('fEmpId').value     = m.empId||'';
    document.getElementById('fEmpEmail').value  = m.empEmail||'';
    document.getElementById('fDept').value      = m.dept||'';
    document.getElementById('fType').value      = m.type||'official';
    document.getElementById('fDest').value      = m.dest||'';
    document.getElementById('fDateFrom').value  = m.dateFrom||'';
    document.getElementById('fDateTo').value    = m.dateTo||'';
    document.getElementById('fDaily').value     = m.daily||'';
    document.getElementById('fTickets').value   = m.tickets||'';
    document.getElementById('fHotel').value     = m.hotel||'';
    document.getElementById('fFees').value      = m.fees||'';
    document.getElementById('fOther').value     = m.otherCost||'';
    document.getElementById('fPurpose').value   = m.purpose||'';
    document.getElementById('fSource').value    = m.source||'payroll';
    document.getElementById('fStatus').value    = m.status||'pending';
    document.getElementById('fSendEmail').checked = false;
    calcTotal();
    var modal = document.getElementById('missionModal');
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }

  function saveMission(){
    var empName = document.getElementById('fEmpName').value.trim();
    var empId   = document.getElementById('fEmpId').value.trim();
    var dest    = document.getElementById('fDest').value.trim();
    var dateFrom= document.getElementById('fDateFrom').value;
    var dateTo  = document.getElementById('fDateTo').value;
    if(!empName||!empId||!dest||!dateFrom||!dateTo){
      showToast(IS_RTL_MS?'\u064a\u0631\u062c\u0649 \u062a\u0639\u0628\u0626\u0629 \u0627\u0644\u062d\u0642\u0648\u0644 \u0627\u0644\u0625\u0644\u0632\u0627\u0645\u064a\u0629':'Please fill required fields','error');
      return;
    }
    var total = calcTotal();
    var ms    = getMissions();
    var editId= document.getElementById('editId').value;
    var rec   = {
      id:        editId || genId(),
      empName:   empName,
      empId:     empId,
      empEmail:  document.getElementById('fEmpEmail').value.trim(),
      dept:      document.getElementById('fDept').value.trim(),
      type:      document.getElementById('fType').value,
      dest:      dest,
      dateFrom:  dateFrom,
      dateTo:    dateTo,
      daily:     parseFloat(document.getElementById('fDaily').value)||0,
      tickets:   parseFloat(document.getElementById('fTickets').value)||0,
      hotel:     parseFloat(document.getElementById('fHotel').value)||0,
      fees:      parseFloat(document.getElementById('fFees').value)||0,
      otherCost: parseFloat(document.getElementById('fOther').value)||0,
      totalCost: total,
      purpose:   document.getElementById('fPurpose').value.trim(),
      source:    document.getElementById('fSource').value,
      status:    document.getElementById('fStatus').value,
      createdAt: editId ? (ms.find(function(x){return x.id===editId;})||{}).createdAt||new Date().toISOString() : new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    if(editId){
      var idx = ms.findIndex(function(x){return x.id===editId;});
      if(idx>-1) ms[idx]=rec; else ms.push(rec);
    } else {
      ms.unshift(rec);
    }
    saveMissions(ms);
    closeModal();
    renderAll();
    showToast(IS_RTL_MS?'\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0645\u0647\u0645\u0629 \u0628\u0646\u062c\u0627\u062d \u2713':'Mission saved successfully \u2713','success');
    if(document.getElementById('fSendEmail').checked){ sendEmailTo(rec.id); }
  }

  function deleteMission(id){
    if(!confirm(IS_RTL_MS?'\u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641 \u0647\u0630\u0647 \u0627\u0644\u0645\u0647\u0645\u0629\u061f':'Delete this mission?')) return;
    var ms = getMissions().filter(function(m){return m.id!==id;});
    saveMissions(ms);
    renderAll();
    showToast(IS_RTL_MS?'\u062a\u0645 \u062d\u0630\u0641 \u0627\u0644\u0645\u0647\u0645\u0629':'Mission deleted','error');
  }

  function sendEmailTo(id){
    var ms = getMissions();
    var m  = ms.find(function(x){return x.id===id;});
    if(!m) return;
    var days = numDays(m.dateFrom,m.dateTo);
    var body = document.getElementById('emailPreviewBody');
    body.innerHTML =
      '<div style="border-bottom:2px solid #1e3a5f;padding-bottom:12px;margin-bottom:12px">'
      +'<p style="font-weight:800;color:#1e3a5f;font-size:1rem">'+(IS_RTL_MS?'\u0625\u0634\u0639\u0627\u0631 \u0645\u0647\u0645\u0629 \u0631\u0633\u0645\u064a\u0629 / \u0639\u0644\u0645\u064a\u0629':'Official Mission Notification')+'</p>'
      +'<p style="color:#666;font-size:.85rem">'+new Date().toLocaleDateString(IS_RTL_MS?'ar-QA':'en-GB')+'</p>'
      +'</div>'
      +'<p>'+(IS_RTL_MS?'\u0627\u0644\u0633\u064a\u062f / \u0627\u0644\u0633\u064a\u062f\u0629 \u0627\u0644\u0641\u0627\u0636\u0644/\u0629:':'Dear')+'<strong> '+m.empName+'</strong></p>'
      +'<p>'+(IS_RTL_MS?'\u064a\u0633\u0631\u0651\u0646\u0627 \u0625\u0628\u0644\u0627\u063a\u0643\u0645 \u0628\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0645\u0647\u0645\u0629 \u0627\u0644\u0645\u0639\u062a\u0645\u062f\u0629 \u0639\u0644\u0649 \u0627\u0644\u0646\u062d\u0648 \u0627\u0644\u062a\u0627\u0644\u064a:':'Please find below the details of your approved mission:')+'</p>'
      +'<table style="width:100%;border-collapse:collapse;margin:12px 0;font-size:.85rem">'
      +'<tr style="background:#EFF6FF"><td style="padding:8px;font-weight:700;border:1px solid #ddd;width:40%">'+(IS_RTL_MS?'\u0631\u0642\u0645 \u0627\u0644\u0645\u0647\u0645\u0629':'Mission ID')+'</td><td style="padding:8px;border:1px solid #ddd">'+m.id+'</td></tr>'
      +'<tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u0646\u0648\u0639 \u0627\u0644\u0645\u0647\u0645\u0629':'Type')+'</td><td style="padding:8px;border:1px solid #ddd">'+(typeLabel[m.type]||m.type)+'</td></tr>'
      +'<tr style="background:#EFF6FF"><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u0627\u0644\u0648\u062c\u0647\u0629':'Destination')+'</td><td style="padding:8px;border:1px solid #ddd">'+m.dest+'</td></tr>'
      +'<tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0628\u062f\u0627\u064a\u0629':'Start Date')+'</td><td style="padding:8px;border:1px solid #ddd">'+fmtDate(m.dateFrom)+'</td></tr>'
      +'<tr style="background:#EFF6FF"><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0646\u0647\u0627\u064a\u0629':'End Date')+'</td><td style="padding:8px;border:1px solid #ddd">'+fmtDate(m.dateTo)+'</td></tr>'
      +'<tr><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u0639\u062f\u062f \u0627\u0644\u0623\u064a\u0627\u0645':'Duration')+'</td><td style="padding:8px;border:1px solid #ddd">'+days+' '+(IS_RTL_MS?'\u0623\u064a\u0627\u0645':'days')+'</td></tr>'
      +'<tr style="background:#FFFBEB"><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u0627\u0644\u0628\u062f\u0644 \u0627\u0644\u064a\u0648\u0645\u064a':'Daily Allowance')+'</td><td style="padding:8px;border:1px solid #ddd">'+(m.daily||0).toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR')+'</td></tr>'
      +'<tr style="background:#FFFBEB"><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u062a\u0630\u0627\u0643\u0631 \u0627\u0644\u0633\u0641\u0631':'Flight Tickets')+'</td><td style="padding:8px;border:1px solid #ddd">'+(m.tickets||0).toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR')+'</td></tr>'
      +'<tr style="background:#FFFBEB"><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u0627\u0644\u0625\u0642\u0627\u0645\u0629':'Accommodation')+'</td><td style="padding:8px;border:1px solid #ddd">'+(m.hotel||0).toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR')+'</td></tr>'
      +'<tr style="background:#FFFBEB"><td style="padding:8px;font-weight:700;border:1px solid #ddd">'+(IS_RTL_MS?'\u0631\u0633\u0648\u0645 \u0627\u0644\u062a\u0633\u062c\u064a\u0644':'Registration Fees')+'</td><td style="padding:8px;border:1px solid #ddd">'+(m.fees||0).toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644':'QAR')+'</td></tr>'
      +'<tr style="background:#FEF9C3;font-weight:800"><td style="padding:8px;font-weight:800;border:2px solid #C4922A;color:#92400E">'+(IS_RTL_MS?'\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0643\u0644\u064a':'TOTAL COST')+'</td><td style="padding:8px;border:2px solid #C4922A;color:#92400E;font-size:1.05rem">'+(m.totalCost||0).toLocaleString()+' '+(IS_RTL_MS?'\u0631\u064a\u0627\u0644 \u0642\u0637\u0631\u064a':'QAR')+'</td></tr>'
      +'</table>'
      +(m.purpose?'<p style="background:#F1F5F9;padding:10px;border-radius:8px;font-size:.85rem"><strong>'+(IS_RTL_MS?'\u0627\u0644\u063a\u0631\u0636:':'Purpose:')+'</strong> '+m.purpose+'</p>':'')
      +'<p style="margin-top:16px;color:#666;font-size:.82rem">'+(IS_RTL_MS?'\u0644\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631: \u0645\u0643\u062a\u0628 \u0627\u0644\u0631\u0648\u0627\u062a\u0628 \u2014 \u0627\u0644\u062f\u0627\u062e\u0644\u064a 4200 | payroll@qu.edu.qa':'For inquiries: Payroll Office \u2014 Ext. 4200 | payroll@qu.edu.qa')+'</p>';

    document.getElementById('_pendingEmailId').value = id;
    var em = document.getElementById('emailModal');
    em.classList.remove('hidden');
    em.style.display = 'flex';
  }
  function closeEmailModal(){
    var em = document.getElementById('emailModal');
    em.classList.add('hidden');
    em.style.display = 'none';
  }
  function confirmSendEmail(){
    closeEmailModal();
    showToast(IS_RTL_MS?'\u2709\ufe0f \u062a\u0645 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0625\u064a\u0645\u064a\u0644 \u0644\u0644\u0645\u0648\u0638\u0641 \u0628\u0646\u062c\u0627\u062d':'\u2709\ufe0f Email sent to employee successfully','success');
  }

  function exportReport(){
    var r = document.getElementById('reportModal');
    r.classList.remove('hidden');
    r.style.display = 'flex';
    buildReport();
  }
  function closeReportModal(){
    var r = document.getElementById('reportModal');
    r.classList.add('hidden');
    r.style.display = 'none';
  }
  function buildReport(){
    var year   = document.getElementById('rptYear').value;
    var type   = document.getElementById('rptType').value;
    var source = document.getElementById('rptSource').value;
    var ms = getMissions().filter(function(m){
      var y = m.dateFrom ? m.dateFrom.slice(0,4) : '';
      return (!year||y===year) && (!type||m.type===type) && (!source||m.source===source);
    });
    var totalCost = ms.reduce(function(s,m){return s+(m.totalCost||0);},0);
    var byStatus={};
    ms.forEach(function(m){ byStatus[m.status]=(byStatus[m.status]||0)+1; });
    var body = document.getElementById('reportBody');
    body.innerHTML =
      '<div class="grid grid-cols-3 gap-4 mb-4">'
      +'<div class="card p-4 text-center"><div class="text-2xl font-black" style="color:#1e3a5f">'+ms.length+'</div><div class="text-xs text-gray-500">'+(IS_RTL_MS?'\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u0645\u0647\u0627\u0645':'Total Missions')+'</div></div>'
      +'<div class="card p-4 text-center"><div class="text-2xl font-black text-green-600">'+(byStatus.approved||0)+'</div><div class="text-xs text-gray-500">'+(IS_RTL_MS?'\u0645\u0639\u062a\u0645\u062f\u0629':'Approved')+'</div></div>'
      +'<div class="card p-4 text-center"><div class="text-2xl font-black" style="color:var(--qu-gold)">'+totalCost.toLocaleString()+'</div><div class="text-xs text-gray-500">'+(IS_RTL_MS?'\u0625\u062c\u0645\u0627\u0644\u064a \u0627\u0644\u062a\u0643\u0644\u0641\u0629 (\u0631\u064a\u0627\u0644)':'Total Cost (QAR)')+'</div></div>'
      +'</div>'
      +'<div class="overflow-x-auto rounded-xl border border-gray-100"><table class="w-full text-xs">'
      +'<thead><tr class="bg-gray-50 border-b">'
      +'<th class="px-3 py-2 text-'+(IS_RTL_MS?'right':'left')+' font-bold text-gray-500">'+(IS_RTL_MS?'\u0627\u0644\u0645\u0648\u0638\u0641':'Employee')+'</th>'
      +'<th class="px-3 py-2 text-'+(IS_RTL_MS?'right':'left')+' font-bold text-gray-500">'+(IS_RTL_MS?'\u0627\u0644\u0646\u0648\u0639':'Type')+'</th>'
      +'<th class="px-3 py-2 text-'+(IS_RTL_MS?'right':'left')+' font-bold text-gray-500">'+(IS_RTL_MS?'\u0627\u0644\u0648\u062c\u0647\u0629':'Dest.')+'</th>'
      +'<th class="px-3 py-2 text-'+(IS_RTL_MS?'right':'left')+' font-bold text-gray-500">'+(IS_RTL_MS?'\u0627\u0644\u0645\u062f\u0629':'Days')+'</th>'
      +'<th class="px-3 py-2 text-'+(IS_RTL_MS?'right':'left')+' font-bold text-gray-500">'+(IS_RTL_MS?'\u0627\u0644\u062a\u0643\u0644\u0641\u0629':'Cost')+'</th>'
      +'<th class="px-3 py-2 text-'+(IS_RTL_MS?'right':'left')+' font-bold text-gray-500">'+(IS_RTL_MS?'\u0627\u0644\u062d\u0627\u0644\u0629':'Status')+'</th>'
      +'</tr></thead><tbody>'
      +ms.map(function(m){
        return '<tr class="border-b hover:bg-gray-50">'
          +'<td class="px-3 py-2"><p class="font-bold">'+m.empName+'</p><p class="text-gray-400">'+m.empId+'</p></td>'
          +'<td class="px-3 py-2"><span class="px-2 py-0.5 rounded-lg font-bold" style="background:'+typeBg[m.type]+';color:'+typeColor[m.type]+'">'+(typeLabel[m.type]||m.type)+'</span></td>'
          +'<td class="px-3 py-2">'+m.dest+'</td>'
          +'<td class="px-3 py-2">'+numDays(m.dateFrom,m.dateTo)+' '+(IS_RTL_MS?'\u0623\u064a\u0627\u0645':'d')+'</td>'
          +'<td class="px-3 py-2 font-bold">'+(m.totalCost||0).toLocaleString()+'</td>'
          +'<td class="px-3 py-2"><span class="px-2 py-0.5 rounded-lg font-bold" style="background:'+statusBg[m.status]+';color:'+statusColor[m.status]+'">'+(statusLabel[m.status]||m.status)+'</span></td>'
          +'</tr>';
      }).join('')
      +'</tbody></table></div>';
  }
  function printReport(){
    var content = document.getElementById('reportBody').innerHTML;
    var w = window.open('','_blank');
    w.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>'+(IS_RTL_MS?'\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0645\u0647\u0627\u0645':'Missions Report')+'</title>'
      +'<style>body{font-family:Arial,sans-serif;padding:20px;direction:'+(IS_RTL_MS?'rtl':'ltr')+'}table{width:100%;border-collapse:collapse}th,td{border:1px solid #ddd;padding:8px;text-align:'+(IS_RTL_MS?'right':'left')+'}th{background:#f0f0f0}@media print{button{display:none}}</style>'
      +'</head><body><h2>'+(IS_RTL_MS?'\u062a\u0642\u0631\u064a\u0631 \u0627\u0644\u0645\u0647\u0627\u0645 \u0627\u0644\u0631\u0633\u0645\u064a\u0629 \u0648\u0627\u0644\u0639\u0644\u0645\u064a\u0629':'Official & Academic Missions Report')+'</h2>'
      +'<p style="color:#666;font-size:.9rem">'+new Date().toLocaleDateString(IS_RTL_MS?'ar-QA':'en-GB')+'</p>'
      +content
      +'<script>window.print();<'+'/script></body></html>');
    w.document.close();
  }

  function showToast(msg, type){
    var t = document.getElementById('msToast');
    var i = document.getElementById('msToastIcon');
    var m = document.getElementById('msToastMsg');
    t.style.background = type==='error'?'#DC2626':type==='warning'?'#D97706':'#15803D';
    i.className = 'fas '+(type==='error'?'fa-times-circle':type==='warning'?'fa-exclamation-triangle':'fa-check-circle');
    m.textContent = msg;
    t.classList.remove('hidden');
    t.style.display = 'flex';
    setTimeout(function(){ t.classList.add('hidden'); t.style.display='none'; }, 3500);
  }

  function renderAll(){
    updateStats();
    renderTrainingInbox();
    filterMissions();
  }

  function seedDemo(){
    if(getMissions().length) return;
    var demos = [
      {id:'MS-A1B2C3',empName:IS_RTL_MS?'\u0623\u062d\u0645\u062f \u0645\u062d\u0645\u062f \u0627\u0644\u0646\u0639\u064a\u0645\u064a':'Ahmed Al-Naimi',empId:'QU-2019-0245',empEmail:'a.alnaimi@qu.edu.qa',dept:IS_RTL_MS?'\u0643\u0644\u064a\u0629 \u0627\u0644\u0647\u0646\u062f\u0633\u0629':'College of Engineering',type:'conference',dest:IS_RTL_MS?'\u062f\u0628\u064a\u060c \u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062a':'Dubai, UAE',dateFrom:'2025-03-10',dateTo:'2025-03-13',daily:800,tickets:1200,hotel:1800,fees:500,otherCost:200,totalCost:4500,purpose:IS_RTL_MS?'\u062d\u0636\u0648\u0631 \u0645\u0624\u062a\u0645\u0631 \u0627\u0644\u0647\u0646\u062f\u0633\u0629 \u0627\u0644\u062f\u0648\u0644\u064a':'Attending International Engineering Conference',source:'training',status:'approved',createdAt:'2025-02-15T10:00:00Z',updatedAt:'2025-02-20T10:00:00Z'},
      {id:'MS-D4E5F6',empName:IS_RTL_MS?'\u0641\u0627\u0637\u0645\u0629 \u0633\u0627\u0644\u0645 \u0627\u0644\u0642\u062d\u0637\u0627\u0646\u064a':'Fatima Al-Qahtani',empId:'QU-2020-0189',empEmail:'f.alqahtani@qu.edu.qa',dept:IS_RTL_MS?'\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629':'HR Department',type:'training',dest:IS_RTL_MS?'\u0644\u0646\u062f\u0646\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062a\u062d\u062f\u0629':'London, UK',dateFrom:'2025-04-05',dateTo:'2025-04-10',daily:1200,tickets:3500,hotel:4200,fees:800,otherCost:300,totalCost:10000,purpose:IS_RTL_MS?'\u062f\u0648\u0631\u0629 \u062a\u062f\u0631\u064a\u0628\u064a\u0629 \u0641\u064a \u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0648\u0627\u0631\u062f \u0627\u0644\u0628\u0634\u0631\u064a\u0629':'HR Management Training Course',source:'training',status:'pending',createdAt:'2025-03-01T09:00:00Z',updatedAt:'2025-03-01T09:00:00Z'},
      {id:'MS-G7H8I9',empName:IS_RTL_MS?'\u062e\u0627\u0644\u062f \u0639\u0628\u062f\u0627\u0644\u0644\u0647 \u0627\u0644\u062f\u0648\u0633\u0631\u064a':'Khaled Al-Dosari',empId:'QU-2018-0312',empEmail:'k.aldosari@qu.edu.qa',dept:IS_RTL_MS?'\u0643\u0644\u064a\u0629 \u0627\u0644\u0639\u0644\u0648\u0645':'College of Science',type:'academic',dest:IS_RTL_MS?'\u0628\u0627\u0631\u064a\u0633\u060c \u0641\u0631\u0646\u0633\u0627':'Paris, France',dateFrom:'2025-05-20',dateTo:'2025-05-25',daily:1500,tickets:4000,hotel:5000,fees:1200,otherCost:500,totalCost:12200,purpose:IS_RTL_MS?'\u062a\u0642\u062f\u064a\u0645 \u0628\u062d\u062b \u0639\u0644\u0645\u064a \u0641\u064a \u0645\u0624\u062a\u0645\u0631 \u0627\u0644\u0643\u064a\u0645\u064a\u0627\u0621 \u0627\u0644\u062f\u0648\u0644\u064a':'Presenting research paper at International Chemistry Conference',source:'college',status:'approved',createdAt:'2025-04-01T08:00:00Z',updatedAt:'2025-04-05T08:00:00Z'},
      {id:'MS-J1K2L3',empName:IS_RTL_MS?'\u0646\u0648\u0631\u0629 \u0631\u0627\u0634\u062f \u0627\u0644\u0645\u0631\u064a':'Noura Al-Marri',empId:'QU-2021-0098',empEmail:'n.almarri@qu.edu.qa',dept:IS_RTL_MS?'\u0625\u062f\u0627\u0631\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629':'Finance Department',type:'official',dest:IS_RTL_MS?'\u0627\u0644\u0631\u064a\u0627\u0636\u060c \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629 \u0627\u0644\u0633\u0639\u0648\u062f\u064a\u0629':'Riyadh, Saudi Arabia',dateFrom:'2025-06-08',dateTo:'2025-06-09',daily:600,tickets:900,hotel:700,fees:0,otherCost:100,totalCost:2300,purpose:IS_RTL_MS?'\u0627\u062c\u062a\u0645\u0627\u0639 \u0645\u0639 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0627\u0644\u0642\u0637\u0631\u064a\u0629':'Meeting with Ministry of Finance',source:'payroll',status:'pending',createdAt:'2025-05-10T11:00:00Z',updatedAt:'2025-05-10T11:00:00Z'},
    ];
    saveMissions(demos);
  }

  document.addEventListener('DOMContentLoaded', function(){
    seedDemo();
    renderAll();
    var h=document.createElement('input');
    h.type='hidden'; h.id='_pendingEmailId';
    document.body.appendChild(h);
  });
  </script>

  `

  return c.html(layout(pageTitle, content, 'missions', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  END OF SERVICE  /end-of-service
// ─────────────────────────────────────────────────────────────────────────────
app.get('/end-of-service', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const stats = {
    totalFormer: 342,
    pendingThisYear: 28,
    pendingNextYear: 41,
    adminFormer: 198, academicFormer: 144,
    qatariFormer: 89,  nonQatariFormer: 253,
    adminPending: 15,  academicPending: 13,
    qatariPending: 11, nonQatariPending: 17,
    avgGratuity: isRTL ? '48,600 ريال' : 'QR 48,600',
    totalPaid: isRTL ? '16.6 مليون ريال' : 'QR 16.6M',
    clearanceAvgDays: 18,
  }

  const pendingEmployees = [
    { id:'QU-1041', name: isRTL?'د. فاطمة المنصوري':'Dr. Fatima Al-Mansouri', dept: isRTL?'كلية الطب':'College of Medicine',    type:'academic', nat:'qatari',     expDate:'2025-06-30', years:12, basic: isRTL?'28,400 ريال':'QR 28,400', status:'active',   clearance: 65 },
    { id:'QU-2187', name: isRTL?'محمد عبدالله النعيمي':'Mohammed Al-Naimi',    dept: isRTL?'إدارة الموارد البشرية':'HR Department',       type:'admin',    nat:'qatari',     expDate:'2025-07-15', years: 8, basic: isRTL?'18,200 ريال':'QR 18,200', status:'active',   clearance: 80 },
    { id:'QU-3302', name: isRTL?'جون سميث':'John Smith',                        dept: isRTL?'كلية الهندسة':'College of Engineering',   type:'academic', nat:'nonqatari',  expDate:'2025-08-01', years:15, basic: isRTL?'32,000 ريال':'QR 32,000', status:'active',   clearance: 40 },
    { id:'QU-4455', name: isRTL?'سارة إبراهيم':'Sara Ibrahim',                  dept: isRTL?'إدارة المالية':'Finance Department',       type:'admin',    nat:'nonqatari',  expDate:'2025-08-20', years: 5, basic: isRTL?'14,800 ريال':'QR 14,800', status:'active',   clearance: 20 },
    { id:'QU-5578', name: isRTL?'د. خالد الكواري':'Dr. Khalid Al-Kawari',       dept: isRTL?'كلية العلوم':'College of Science',         type:'academic', nat:'qatari',     expDate:'2025-09-01', years:22, basic: isRTL?'35,500 ريال':'QR 35,500', status:'active',   clearance: 10 },
    { id:'QU-6610', name: isRTL?'ماريا خوسيه':'Maria Jose',                    dept: isRTL?'كلية الآداب':'College of Arts',            type:'academic', nat:'nonqatari',  expDate:'2025-09-15', years: 7, basic: isRTL?'22,100 ريال':'QR 22,100', status:'notice',   clearance:  5 },
    { id:'QU-7723', name: isRTL?'علي حسن القحطاني':'Ali Al-Qahtani',            dept: isRTL?'إدارة تقنية المعلومات':'IT Department',   type:'admin',    nat:'qatari',     expDate:'2025-10-01', years:11, basic: isRTL?'21,600 ريال':'QR 21,600', status:'notice',   clearance:  0 },
    { id:'QU-8841', name: isRTL?'تشن وي':'Chen Wei',                            dept: isRTL?'كلية الأعمال':'College of Business',      type:'academic', nat:'nonqatari',  expDate:'2025-10-30', years: 3, basic: isRTL?'19,900 ريال':'QR 19,900', status:'pending',  clearance:  0 },
  ]

  const clearanceDepts = isRTL ? [
    { dept:'الموارد البشرية',           icon:'fa-users',          color:'#8B1A2F', days:'1–2', action:'التحقق من سجل الإجازات وتسوية الرصيد', form:'HR-CL-01' },
    { dept:'الشؤون المالية',             icon:'fa-coins',          color:'#C4922A', days:'3–5', action:'تسوية السلف والقروض والمطالبات المالية', form:'FIN-CL-02' },
    { dept:'تقنية المعلومات',            icon:'fa-laptop',         color:'#3B82F6', days:'1',   action:'استرداد الأجهزة وإلغاء الحسابات والبريد', form:'IT-CL-03' },
    { dept:'المكتبة',                    icon:'fa-book',           color:'#10B981', days:'1',   action:'إعادة المواد المستعارة وتسوية الغرامات', form:'LIB-CL-04' },
    { dept:'إدارة المرافق والعقارات',    icon:'fa-building',       color:'#6366F1', days:'2–3', action:'تسليم المفاتيح وإخلاء السكن الجامعي', form:'FAC-CL-05' },
    { dept:'أمن وسلامة الحرم الجامعي',  icon:'fa-shield-halved',  color:'#EF4444', days:'1',   action:'تسليم بطاقة الهوية وتصاريح الدخول', form:'SEC-CL-06' },
    { dept:'العلاقات الأكاديمية (للأعضاء الأكاديميين)', icon:'fa-graduation-cap', color:'#7C3AED', days:'5–7', action:'تسليم الدرجات والمناهج وإغلاق الأبحاث', form:'AC-CL-07' },
    { dept:'إدارة البحث العلمي',         icon:'fa-microscope',     color:'#0891B2', days:'3–5', action:'إغلاق المنح والمشاريع البحثية الجارية', form:'RES-CL-08' },
    { dept:'إدارة الشؤون القانونية',     icon:'fa-scale-balanced', color:'#374151', days:'2',   action:'التحقق من غياب أي التزامات قانونية أو تعاقدية', form:'LEG-CL-09' },
    { dept:'قسم الرواتب',                icon:'fa-file-invoice-dollar', color:'#059669', days:'2–3', action:'احتساب وتسوية مستحقات نهاية الخدمة النهائية', form:'PAY-CL-10' },
  ] : [
    { dept:'Human Resources',            icon:'fa-users',          color:'#8B1A2F', days:'1–2', action:'Verify leave balance and settle outstanding leave', form:'HR-CL-01' },
    { dept:'Finance Department',         icon:'fa-coins',          color:'#C4922A', days:'3–5', action:'Settle advances, loans, and financial claims', form:'FIN-CL-02' },
    { dept:'Information Technology',     icon:'fa-laptop',         color:'#3B82F6', days:'1',   action:'Return devices and deactivate accounts & email', form:'IT-CL-03' },
    { dept:'Library',                    icon:'fa-book',           color:'#10B981', days:'1',   action:'Return borrowed materials and settle fines', form:'LIB-CL-04' },
    { dept:'Facilities & Real Estate',   icon:'fa-building',       color:'#6366F1', days:'2–3', action:'Return keys and vacate university accommodation', form:'FAC-CL-05' },
    { dept:'Campus Security & Safety',   icon:'fa-shield-halved',  color:'#EF4444', days:'1',   action:'Return ID card and all access passes', form:'SEC-CL-06' },
    { dept:'Academic Affairs (Academic staff only)', icon:'fa-graduation-cap', color:'#7C3AED', days:'5–7', action:'Submit grades, syllabi and close ongoing research', form:'AC-CL-07' },
    { dept:'Research Management',        icon:'fa-microscope',     color:'#0891B2', days:'3–5', action:'Close grants and active research projects', form:'RES-CL-08' },
    { dept:'Legal Affairs',              icon:'fa-scale-balanced', color:'#374151', days:'2',   action:'Confirm no outstanding legal or contractual obligations', form:'LEG-CL-09' },
    { dept:'Payroll Department',         icon:'fa-file-invoice-dollar', color:'#059669', days:'2–3', action:'Calculate and process final end-of-service entitlements', form:'PAY-CL-10' },
  ]

  const formerEmployees = [
    { id:'QU-0991', name: isRTL?'د. أحمد الشمري':'Dr. Ahmed Al-Shammari',    dept: isRTL?'كلية الطب':'College of Medicine',    type:'academic', nat:'qatari',    exitDate:'2025-03-31', years:18, gratuity: isRTL?'94,500 ريال':'QR 94,500', reason: isRTL?'تقاعد':'Retirement' },
    { id:'QU-1122', name: isRTL?'ليندا باركر':'Linda Parker',                 dept: isRTL?'كلية الآداب':'College of Arts',      type:'academic', nat:'nonqatari', exitDate:'2025-03-15', years: 6, gratuity: isRTL?'22,050 ريال':'QR 22,050', reason: isRTL?'انتهاء العقد':'Contract End' },
    { id:'QU-1345', name: isRTL?'يوسف العمادي':'Yousef Al-Imadi',             dept: isRTL?'إدارة المالية':'Finance Dept',        type:'admin',    nat:'qatari',    exitDate:'2025-02-28', years: 9, gratuity: isRTL?'38,700 ريال':'QR 38,700', reason: isRTL?'استقالة':'Resignation' },
    { id:'QU-1567', name: isRTL?'أنا مولر':'Anna Mueller',                    dept: isRTL?'كلية الهندسة':'College of Engineering',type:'academic',nat:'nonqatari',exitDate:'2025-02-14', years:11, gratuity: isRTL?'51,150 ريال':'QR 51,150', reason: isRTL?'انتهاء العقد':'Contract End' },
    { id:'QU-1789', name: isRTL?'نورة الدوسري':'Noura Al-Dosari',             dept: isRTL?'الموارد البشرية':'HR Dept',           type:'admin',    nat:'qatari',    exitDate:'2025-01-31', years: 4, gratuity: isRTL?'14,400 ريال':'QR 14,400', reason: isRTL?'استقالة':'Resignation' },
  ]

  const lbl = isRTL ? {
    title:'لوحة متابعة نهاية الخدمة', subtitle:'إدارة مستحقات نهاية الخدمة وإخلاء الطرف لموظفي جامعة قطر',
    tabDash:'لوحة البيانات', tabPending:'الموظفون المنتهية خدمتهم', tabFormer:'السجل التاريخي', tabClearance:'إجراءات إخلاء الطرف', tabCalc:'حاسبة المكافأة',
    statFormer:'إجمالي المنتهية خدمتهم', statPending:'متوقعون هذا العام', statNext:'متوقعون العام القادم', statAvg:'متوسط المكافأة', statTotal:'إجمالي المدفوع', statClear:'متوسط أيام إخلاء الطرف',
    catAdmin:'إداري', catAcademic:'أكاديمي', catQatari:'قطري', catNonQatari:'غير قطري',
    colId:'رقم الموظف', colName:'الاسم', colDept:'القسم', colType:'النوع', colNat:'الجنسية', colDate:'تاريخ الانتهاء', colYears:'سنوات الخدمة', colBasic:'الراتب الأساسي', colStatus:'الحالة', colClear:'إخلاء الطرف', colGratuity:'المكافأة', colReason:'سبب الإنهاء',
    statActive:'موظف', statNotice:'إشعار مقدم', statPendingS:'قيد المعالجة',
    clearTitle:'إجراءات إخلاء الطرف', clearSubtitle:'يجب على الموظف استيفاء إخلاء الطرف من الأقسام التالية بالتسلسل قبل صرف مستحقات نهاية الخدمة', clearDays:'أيام العمل المطلوبة', clearForm:'النموذج', clearAction:'الإجراء المطلوب',
    calcTitle:'حاسبة مكافأة نهاية الخدمة', calcBasic:'الراتب الأساسي الشهري (ريال)', calcYears:'سنوات الخدمة', calcType:'نوع التوظيف', calcNat:'الجنسية', calcReason:'سبب إنهاء الخدمة',
    calcAdminT:'إداري', calcAcademicT:'أكاديمي', calcQatariT:'قطري (قانون الخدمة المدنية)', calcNonQatariT:'غير قطري (قانون العمل)',
    calcResign:'استقالة', calcTerminate:'إنهاء من صاحب العمل', calcRetire:'تقاعد', calcContractEnd:'انتهاء العقد',
    calcBtn:'احسب المكافأة', calcResult:'نتيجة الاحتساب',
    calcGratuity:'مكافأة نهاية الخدمة', calcNotice:'بدل الإشعار المستحق', calcLeave:'رصيد الإجازة المتبقي (تقديري)', calcTotal:'الإجمالي التقديري',
    calcNote:'ملاحظة: هذه الحسبة تقديرية. المبلغ الفعلي يُحدَّد من قسم الرواتب بعد استيفاء إجراءات إخلاء الطرف وإقرار السجل الرسمي.',
    formerTitle:'سجل الموظفين السابقين', pendingTitle:'الموظفون المتوقع انتهاء خدمتهم',
    filterAll:'الكل', filterAdmin:'إداري', filterAcademic:'أكاديمي', filterQatari:'قطري', filterNonQ:'غير قطري',
    clearPct:'نسبة الإنجاز',
    policyTitle:'سياسة نهاية الخدمة', policyQatari:'الموظف القطري (قانون الموارد البشرية المدنية)', policyNonQ:'الموظف غير القطري (قانون العمل القطري)',
  } : {
    title:'End of Service Dashboard', subtitle:'Manage end-of-service entitlements and clearance procedures for QU employees',
    tabDash:'Dashboard', tabPending:'Upcoming Separations', tabFormer:'Historical Records', tabClearance:'Clearance Procedures', tabCalc:'Gratuity Calculator',
    statFormer:'Total Former Employees', statPending:'Expected This Year', statNext:'Expected Next Year', statAvg:'Average Gratuity', statTotal:'Total Paid Out', statClear:'Avg. Clearance Days',
    catAdmin:'Administrative', catAcademic:'Academic', catQatari:'Qatari', catNonQatari:'Non-Qatari',
    colId:'Employee ID', colName:'Name', colDept:'Department', colType:'Type', colNat:'Nationality', colDate:'Exit Date', colYears:'Years', colBasic:'Basic Salary', colStatus:'Status', colClear:'Clearance', colGratuity:'Gratuity', colReason:'Reason',
    statActive:'Active', statNotice:'Notice Given', statPendingS:'Processing',
    clearTitle:'Clearance Procedures', clearSubtitle:'Employee must complete clearance from all departments below in order before end-of-service payment is released', clearDays:'Working Days Required', clearForm:'Form', clearAction:'Required Action',
    calcTitle:'End-of-Service Gratuity Calculator', calcBasic:'Monthly Basic Salary (QAR)', calcYears:'Years of Service', calcType:'Employment Type', calcNat:'Nationality', calcReason:'Reason for Separation',
    calcAdminT:'Administrative', calcAcademicT:'Academic', calcQatariT:'Qatari (Civil Service Law)', calcNonQatariT:'Non-Qatari (Labour Law)',
    calcResign:'Resignation', calcTerminate:'Terminated by Employer', calcRetire:'Retirement', calcContractEnd:'Contract End',
    calcBtn:'Calculate Gratuity', calcResult:'Calculation Result',
    calcGratuity:'End-of-Service Gratuity', calcNotice:'Notice Period Entitlement', calcLeave:'Remaining Leave Balance (est.)', calcTotal:'Estimated Total',
    calcNote:'Note: This is an estimate. The actual amount is determined by the Payroll Department after completing all clearance procedures and confirming official records.',
    formerTitle:'Former Employees Record', pendingTitle:'Upcoming End-of-Service Employees',
    filterAll:'All', filterAdmin:'Admin', filterAcademic:'Academic', filterQatari:'Qatari', filterNonQ:'Non-Qatari',
    clearPct:'Completion',
    policyTitle:'End-of-Service Policy', policyQatari:'Qatari Employee (Civil HR Law)', policyNonQ:'Non-Qatari Employee (Qatar Labour Law)',
  }

  const statusColor = (s:string) => s==='active'?'badge-green':s==='notice'?'badge-amber':'badge-blue'
  const statusLabel = (s:string) => s==='active'? lbl.statActive : s==='notice'? lbl.statNotice : lbl.statPendingS
  const typeLabel   = (s:string) => s==='admin'? lbl.catAdmin : lbl.catAcademic
  const natLabel    = (s:string) => s==='qatari'? lbl.catQatari : lbl.catNonQatari

  const content = `
  <div class="mb-6 flex items-start justify-between flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
    <div class="${isRTL?'text-right':''}">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas fa-person-walking-arrow-right" style="color:var(--qu-maroon)"></i> ${lbl.title}
      </h1>
      <p class="text-gray-500 mt-1 text-sm">${lbl.subtitle}</p>
    </div>
    <div class="flex gap-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
      <button onclick="openEosReport()" class="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-semibold shadow-sm hover:opacity-90 transition-all" style="background:var(--qu-maroon)">
        <i class="fas fa-chart-bar"></i>
        ${isRTL?'إصدار التقارير':'Generate Report'}
      </button>
      <button onclick="window.print()" class="btn-outline px-3 py-2 rounded-lg text-sm flex items-center gap-2">
        <i class="fas fa-print"></i> ${isRTL?'طباعة':'Print'}
      </button>
      <a href="/forms?lang=${lang}" class="btn-gold px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-white">
        <i class="fas fa-file-alt"></i> ${isRTL?'النماذج':'Forms'}
      </a>
    </div>
  </div>

  <!-- ══ EOS REPORT MODAL ══ -->
  <div id="eosReportModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 hidden" style="background:rgba(0,0,0,0.55)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto" dir="${isRTL?'rtl':'ltr'}">
      <!-- Modal Header -->
      <div class="flex items-center justify-between px-6 py-4 rounded-t-2xl ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,var(--qu-maroon),#6b1222)">
        <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
          <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <i class="fas fa-person-walking-arrow-right text-white text-lg"></i>
          </div>
          <div class="${isRTL?'text-right':''}">
            <h2 class="text-white font-bold text-lg">${isRTL?'تقرير نهاية الخدمة':'End-of-Service Report'}</h2>
            <p class="text-white/70 text-xs">${isRTL?'جامعة قطر — قسم الرواتب':'Qatar University — Payroll Department'}</p>
          </div>
        </div>
        <button onclick="closeEosReport()" class="text-white/80 hover:text-white text-xl w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-all">✕</button>
      </div>

      <!-- Modal Body -->
      <div class="p-6 space-y-6">

        <!-- Report Date -->
        <div class="flex items-center justify-between flex-wrap gap-2 text-xs text-gray-500 border-b pb-3 ${isRTL?'flex-row-reverse':''}">
          <span><i class="fas fa-calendar-alt mr-1"></i> <span id="eosReportDate"></span></span>
          <span class="font-semibold text-gray-700">${isRTL?'السنة المالية: 2025':'Fiscal Year: 2025'}</span>
        </div>

        <!-- KPI Summary -->
        <div>
          <h3 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-tachometer-alt" style="color:var(--qu-maroon)"></i>
            ${isRTL?'ملخص الإحصائيات':'Statistics Summary'}
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            ${[
              { val: stats.totalFormer,      label: isRTL?'إجمالي المنتهية خدمتهم':'Total Former Employees', color:'#8B1A2F', icon:'fa-users' },
              { val: stats.pendingThisYear,  label: isRTL?'متوقعون هذا العام':'Expected This Year',        color:'#F59E0B', icon:'fa-hourglass-half' },
              { val: stats.pendingNextYear,  label: isRTL?'متوقعون العام القادم':'Expected Next Year',      color:'#3B82F6', icon:'fa-calendar-plus' },
              { val: stats.avgGratuity,      label: isRTL?'متوسط المكافأة':'Average Gratuity',             color:'#10B981', icon:'fa-coins' },
              { val: stats.totalPaid,        label: isRTL?'إجمالي المدفوع':'Total Paid Out',               color:'#6366F1', icon:'fa-file-invoice-dollar' },
              { val: stats.clearanceAvgDays+'d', label: isRTL?'متوسط أيام إخلاء الطرف':'Avg. Clearance Days', color:'#0891B2', icon:'fa-clipboard-check' },
            ].map(k=>`
              <div class="rounded-xl p-4 text-center border border-gray-100 bg-gray-50">
                <div class="w-9 h-9 rounded-full flex items-center justify-center mx-auto mb-2" style="background:${k.color}22">
                  <i class="fas ${k.icon} text-sm" style="color:${k.color}"></i>
                </div>
                <div class="text-lg font-black" style="color:${k.color}">${k.val}</div>
                <div class="text-xs text-gray-500 mt-1 leading-tight">${k.label}</div>
              </div>`).join('')}
          </div>
        </div>

        <!-- Category Breakdown -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- By Type -->
          <div class="border border-gray-100 rounded-xl p-4">
            <h4 class="font-bold text-gray-600 text-xs uppercase mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <i class="fas fa-briefcase" style="color:var(--qu-maroon)"></i>
              ${isRTL?'التوزيع حسب النوع':'By Employment Type'}
            </h4>
            <div class="space-y-2">
              ${[
                { label: isRTL?'إداري (منتهية)':'Admin (Former)',       val: stats.adminFormer,    color:'#8B1A2F' },
                { label: isRTL?'أكاديمي (منتهية)':'Academic (Former)',  val: stats.academicFormer, color:'#C4922A' },
                { label: isRTL?'إداري (متوقع)':'Admin (Pending)',        val: stats.adminPending,   color:'#F59E0B' },
                { label: isRTL?'أكاديمي (متوقع)':'Academic (Pending)',  val: stats.academicPending,color:'#3B82F6' },
              ].map(r=>{
                const max = Math.max(stats.adminFormer,stats.academicFormer,stats.adminPending,stats.academicPending,1);
                const pct = Math.round((r.val/max)*100);
                return `<div>
                  <div class="flex justify-between text-xs mb-1 ${isRTL?'flex-row-reverse':''}">
                    <span class="text-gray-600">${r.label}</span>
                    <span class="font-bold" style="color:${r.color}">${r.val}</span>
                  </div>
                  <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div class="h-full rounded-full" style="width:${pct}%;background:${r.color}"></div>
                  </div>
                </div>`;
              }).join('')}
            </div>
          </div>
          <!-- By Nationality -->
          <div class="border border-gray-100 rounded-xl p-4">
            <h4 class="font-bold text-gray-600 text-xs uppercase mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <i class="fas fa-flag" style="color:var(--qu-maroon)"></i>
              ${isRTL?'التوزيع حسب الجنسية':'By Nationality'}
            </h4>
            <div class="space-y-2">
              ${[
                { label: isRTL?'قطري (منتهية)':'Qatari (Former)',          val: stats.qatariFormer,    color:'#8B1A2F' },
                { label: isRTL?'غير قطري (منتهية)':'Non-Qatari (Former)',  val: stats.nonQatariFormer, color:'#C4922A' },
                { label: isRTL?'قطري (متوقع)':'Qatari (Pending)',           val: stats.qatariPending,   color:'#10B981' },
                { label: isRTL?'غير قطري (متوقع)':'Non-Qatari (Pending)',  val: stats.nonQatariPending,color:'#3B82F6' },
              ].map(r=>{
                const max = Math.max(stats.qatariFormer,stats.nonQatariFormer,stats.qatariPending,stats.nonQatariPending,1);
                const pct = Math.round((r.val/max)*100);
                return `<div>
                  <div class="flex justify-between text-xs mb-1 ${isRTL?'flex-row-reverse':''}">
                    <span class="text-gray-600">${r.label}</span>
                    <span class="font-bold" style="color:${r.color}">${r.val}</span>
                  </div>
                  <div class="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                    <div class="h-full rounded-full" style="width:${pct}%;background:${r.color}"></div>
                  </div>
                </div>`;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Pending Employees Table -->
        <div>
          <h3 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-hourglass-half" style="color:#F59E0B"></i>
            ${isRTL?'الموظفون المتوقع انتهاء خدمتهم':'Upcoming End-of-Service Employees'}
          </h3>
          <div class="overflow-x-auto rounded-xl border border-gray-100">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-xs text-gray-500 uppercase" style="background:#faf0f2">
                  <th class="px-3 py-2 ${isRTL?'text-right':'text-left'}">${isRTL?'الاسم':'Name'}</th>
                  <th class="px-3 py-2 ${isRTL?'text-right':'text-left'}">${isRTL?'القسم':'Department'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'تاريخ الانتهاء':'Exit Date'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'السنوات':'Years'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'الإنجاز':'Clearance'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'الحالة':'Status'}</th>
                </tr>
              </thead>
              <tbody>
                ${pendingEmployees.map((e,i)=>{
                  const bg = i%2===0?'#fff':'#fafafa';
                  const clrColor = e.clearance>=80?'#10B981':e.clearance>=40?'#F59E0B':'#EF4444';
                  const stBadge  = e.status==='active'
                    ? `<span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">${isRTL?'نشط':'Active'}</span>`
                    : e.status==='notice'
                    ? `<span class="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold">${isRTL?'إشعار':'Notice'}</span>`
                    : `<span class="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-semibold">${isRTL?'معالجة':'Processing'}</span>`;
                  return `<tr style="background:${bg}">
                    <td class="px-3 py-2 font-medium text-gray-800">${e.name}</td>
                    <td class="px-3 py-2 text-gray-500">${e.dept}</td>
                    <td class="px-3 py-2 text-center text-gray-600">${e.expDate}</td>
                    <td class="px-3 py-2 text-center font-bold" style="color:var(--qu-maroon)">${e.years}</td>
                    <td class="px-3 py-2 text-center">
                      <div class="flex items-center gap-1 justify-center">
                        <div class="h-1.5 w-12 rounded-full bg-gray-200 overflow-hidden">
                          <div class="h-full rounded-full" style="width:${e.clearance}%;background:${clrColor}"></div>
                        </div>
                        <span class="text-xs font-bold" style="color:${clrColor}">${e.clearance}%</span>
                      </div>
                    </td>
                    <td class="px-3 py-2 text-center">${stBadge}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Former Employees Table -->
        <div>
          <h3 class="font-bold text-gray-700 text-sm mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-users" style="color:#6366F1"></i>
            ${isRTL?'سجل الموظفين السابقين':'Former Employees Record'}
          </h3>
          <div class="overflow-x-auto rounded-xl border border-gray-100">
            <table class="w-full text-xs">
              <thead>
                <tr class="text-xs text-gray-500 uppercase" style="background:#faf0f2">
                  <th class="px-3 py-2 ${isRTL?'text-right':'text-left'}">${isRTL?'الاسم':'Name'}</th>
                  <th class="px-3 py-2 ${isRTL?'text-right':'text-left'}">${isRTL?'القسم':'Department'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'تاريخ الخروج':'Exit Date'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'السنوات':'Years'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'المكافأة':'Gratuity'}</th>
                  <th class="px-3 py-2 text-center">${isRTL?'السبب':'Reason'}</th>
                </tr>
              </thead>
              <tbody>
                ${formerEmployees.map((e,i)=>{
                  const bg = i%2===0?'#fff':'#fafafa';
                  return `<tr style="background:${bg}">
                    <td class="px-3 py-2 font-medium text-gray-800">${e.name}</td>
                    <td class="px-3 py-2 text-gray-500">${e.dept}</td>
                    <td class="px-3 py-2 text-center text-gray-600">${e.exitDate}</td>
                    <td class="px-3 py-2 text-center font-bold" style="color:var(--qu-maroon)">${e.years}</td>
                    <td class="px-3 py-2 text-center font-semibold text-emerald-600">${e.gratuity}</td>
                    <td class="px-3 py-2 text-center text-gray-500">${e.reason}</td>
                  </tr>`;
                }).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-3 pt-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
          <button onclick="printEosReport()" class="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-all" style="background:var(--qu-maroon)">
            <i class="fas fa-print"></i> ${isRTL?'طباعة التقرير':'Print Report'}
          </button>
          <button onclick="exportEosCSV()" class="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border-2 hover:bg-gray-50 transition-all" style="border-color:var(--qu-maroon);color:var(--qu-maroon)">
            <i class="fas fa-file-csv"></i> ${isRTL?'تصدير CSV':'Export CSV'}
          </button>
          <button onclick="closeEosReport()" class="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 transition-all ${isRTL?'mr-auto':'ml-auto'}">
            ${isRTL?'إغلاق':'Close'}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex gap-1 mb-6 border-b border-gray-200 overflow-x-auto flex-nowrap ${isRTL?'flex-row-reverse':''}">
    ${[
      {id:'dash',      icon:'fa-chart-pie',            label:lbl.tabDash},
      {id:'pending',   icon:'fa-hourglass-half',        label:lbl.tabPending},
      {id:'former',    icon:'fa-users',                 label:lbl.tabFormer},
      {id:'clearance', icon:'fa-clipboard-check',       label:lbl.tabClearance},
      {id:'calc',      icon:'fa-calculator',            label:lbl.tabCalc},
    ].map(tab=>`
    <button onclick="switchTab('${tab.id}')" id="tab-${tab.id}"
      class="eos-tab flex items-center gap-2 px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${isRTL?'flex-row-reverse':''}
             ${tab.id==='dash'?'border-[color:var(--qu-maroon)] text-gray-800':'border-transparent text-gray-500 hover:text-gray-700'}">
      <i class="fas ${tab.icon}"></i> ${tab.label}
    </button>`).join('')}
  </div>

  <div id="panel-dash" class="eos-panel">
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      ${[
        {icon:'fa-users-slash',          val:stats.totalFormer,           label:lbl.statFormer,   col:'var(--qu-maroon)', bg:'rgba(139,26,47,0.08)'},
        {icon:'fa-hourglass-half',       val:stats.pendingThisYear,       label:lbl.statPending,  col:'#F59E0B',          bg:'rgba(245,158,11,0.08)'},
        {icon:'fa-calendar-plus',        val:stats.pendingNextYear,       label:lbl.statNext,     col:'#3B82F6',          bg:'rgba(59,130,246,0.08)'},
        {icon:'fa-money-bill-wave',      val:stats.avgGratuity,           label:lbl.statAvg,      col:'#10B981',          bg:'rgba(16,185,129,0.08)'},
        {icon:'fa-vault',                val:stats.totalPaid,             label:lbl.statTotal,    col:'#7C3AED',          bg:'rgba(124,58,237,0.08)'},
        {icon:'fa-clock-rotate-left',    val:stats.clearanceAvgDays+' '+(isRTL?'يوم':'days'), label:lbl.statClear, col:'#0891B2', bg:'rgba(8,145,178,0.08)'},
      ].map(k=>`
      <div class="card p-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${k.bg}">
          <i class="fas ${k.icon} text-xl" style="color:${k.col}"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-xl font-black text-gray-800">${k.val}</p>
          <p class="text-xs text-gray-500 leading-tight">${k.label}</p>
        </div>
      </div>`).join('')}
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
      <div class="card p-5">
        <h3 class="font-bold text-gray-700 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-chart-pie text-sm" style="color:var(--qu-maroon)"></i>
          ${isRTL?'تصنيف الموظفين: إداري / أكاديمي':'Employee Type: Admin / Academic'}
        </h3>
        <div class="flex items-center justify-center gap-8 ${isRTL?'flex-row-reverse':''}">
          <div class="relative w-36 h-36">
            <canvas id="chartType" width="144" height="144"></canvas>
            <div class="absolute inset-0 flex items-center justify-center flex-col">
              <p class="text-2xl font-black text-gray-700">${stats.totalFormer}</p>
              <p class="text-xs text-gray-400">${isRTL?'إجمالي':'Total'}</p>
            </div>
          </div>
          <div class="space-y-2 ${isRTL?'text-right':''}">
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <div class="w-3 h-3 rounded-full flex-shrink-0" style="background:#8B1A2F"></div>
              <span class="text-sm text-gray-600">${lbl.catAdmin}</span>
              <span class="font-bold text-gray-800">${stats.adminFormer}</span>
              <span class="text-xs text-gray-400">(${Math.round(stats.adminFormer/stats.totalFormer*100)}%)</span>
            </div>
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <div class="w-3 h-3 rounded-full flex-shrink-0" style="background:#C4922A"></div>
              <span class="text-sm text-gray-600">${lbl.catAcademic}</span>
              <span class="font-bold text-gray-800">${stats.academicFormer}</span>
              <span class="text-xs text-gray-400">(${Math.round(stats.academicFormer/stats.totalFormer*100)}%)</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card p-5">
        <h3 class="font-bold text-gray-700 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-globe text-sm" style="color:#3B82F6"></i>
          ${isRTL?'تصنيف الموظفين: قطري / غير قطري':'Employee Nationality: Qatari / Non-Qatari'}
        </h3>
        <div class="flex items-center justify-center gap-8 ${isRTL?'flex-row-reverse':''}">
          <div class="relative w-36 h-36">
            <canvas id="chartNat" width="144" height="144"></canvas>
            <div class="absolute inset-0 flex items-center justify-center flex-col">
              <p class="text-2xl font-black text-gray-700">${stats.totalFormer}</p>
              <p class="text-xs text-gray-400">${isRTL?'إجمالي':'Total'}</p>
            </div>
          </div>
          <div class="space-y-2 ${isRTL?'text-right':''}">
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <div class="w-3 h-3 rounded-full flex-shrink-0" style="background:#7C3AED"></div>
              <span class="text-sm text-gray-600">${lbl.catQatari}</span>
              <span class="font-bold text-gray-800">${stats.qatariFormer}</span>
              <span class="text-xs text-gray-400">(${Math.round(stats.qatariFormer/stats.totalFormer*100)}%)</span>
            </div>
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <div class="w-3 h-3 rounded-full flex-shrink-0" style="background:#0891B2"></div>
              <span class="text-sm text-gray-600">${lbl.catNonQatari}</span>
              <span class="font-bold text-gray-800">${stats.nonQatariFormer}</span>
              <span class="text-xs text-gray-400">(${Math.round(stats.nonQatariFormer/stats.totalFormer*100)}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card p-5 mb-5">
      <h3 class="font-bold text-gray-700 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas fa-chart-bar text-sm" style="color:#3B82F6"></i>
        ${isRTL?'إنهاء الخدمة الشهري – 2024/2025':'Monthly Separations – 2024/2025'}
      </h3>
      <canvas id="chartBar" height="90"></canvas>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="card p-5" style="border-top:4px solid var(--qu-maroon)">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-star-and-crescent" style="color:var(--qu-maroon)"></i> ${lbl.policyQatari}
        </h4>
        <ul class="space-y-2 text-xs text-gray-600">
          ${(isRTL?['تُحتسب المكافأة على أساس الراتب الأساسي عند إنهاء الخدمة','أقل من 5 سنوات: 3 أسابيع راتب عن كل سنة','من 5 إلى 10 سنوات: 4 أسابيع راتب عن كل سنة','أكثر من 10 سنوات: شهر كامل عن كل سنة','التقاعد الاختياري عند بلوغ 55 سنة (قانون 25/2025)','الاستقالة: المكافأة كاملة بعد 5 سنوات','فترة إشعار: شهر عن كل سنة (حد أقصى 3 أشهر)']:['Gratuity based on basic salary at time of separation','Less than 5 years: 3 weeks\' pay per year','5–10 years: 4 weeks\' pay per year','More than 10 years: 1 full month per year','Optional retirement at age 55 (Law 25/2025)','Resignation: full gratuity after 5 years','Notice period: 1 month per year (max 3 months)']).map(p=>`<li class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}"><i class="fas fa-check-circle flex-shrink-0 mt-0.5" style="color:var(--qu-maroon)"></i><span class="${isRTL?'text-right':''}">${p}</span></li>`).join('')}
        </ul>
      </div>
      <div class="card p-5" style="border-top:4px solid #3B82F6">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-globe" style="color:#3B82F6"></i> ${lbl.policyNonQ}
        </h4>
        <ul class="space-y-2 text-xs text-gray-600">
          ${(isRTL?['تُحتسب المكافأة وفق قانون العمل القطري (المادة 54)','أقل من سنة: لا تستحق مكافأة','سنة إلى أقل من 5 سنوات: 3 أسابيع عن كل سنة','5 سنوات فأكثر: 3 أسابيع عن كل سنة إلى 5 سنوات، وشهر كامل عن كل سنة بعدها','الاستقالة قبل 5 سنوات: لا مكافأة','الإنهاء من صاحب العمل: كاملة بغض النظر عن المدة','فترة إشعار: شهر واحد (قابلة للتفاوض)']:['Gratuity under Qatar Labour Law (Article 54)','Less than 1 year: no gratuity entitlement','1 to less than 5 years: 3 weeks\' pay per year','5+ years: 3 weeks per year for first 5, 1 month per year thereafter','Resignation before 5 years: no gratuity','Termination by employer: full gratuity regardless of tenure','Notice period: 1 month (negotiable in contract)']).map(p=>`<li class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}"><i class="fas fa-check-circle flex-shrink-0 mt-0.5" style="color:#3B82F6"></i><span class="${isRTL?'text-right':''}">${p}</span></li>`).join('')}
        </ul>
      </div>
    </div>
  </div>

  <div id="panel-pending" class="eos-panel hidden">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
      <h2 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-hourglass-half" style="color:#F59E0B"></i> ${lbl.pendingTitle}
      </h2>
      <div class="flex gap-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
        ${['all','admin','academic','qatari','nonqatari'].map((f,i)=>`
        <button onclick="filterTable('pending','${f}')" id="pf-${f}"
          class="pf-btn text-xs px-3 py-1.5 rounded-full border font-semibold transition ${i===0?'text-white border-transparent':'border-gray-200 text-gray-500 hover:border-gray-400'}"
          style="${i===0?'background:var(--qu-maroon)':''}">
          ${[lbl.filterAll,lbl.filterAdmin,lbl.filterAcademic,lbl.filterQatari,lbl.filterNonQ][i]}
        </button>`).join('')}
      </div>
    </div>
    <div class="card overflow-x-auto">
      <table class="w-full text-sm" id="table-pending">
        <thead>
          <tr class="border-b border-gray-100 text-xs text-gray-500 uppercase">
            ${[lbl.colId,lbl.colName,lbl.colDept,lbl.colType,lbl.colNat,lbl.colDate,lbl.colYears,lbl.colBasic,lbl.colStatus,lbl.colClear].map(h=>`
            <th class="px-4 py-3 font-semibold ${isRTL?'text-right':'text-left'} whitespace-nowrap">${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${pendingEmployees.map(e=>`
          <tr class="border-b border-gray-50 hover:bg-gray-50 transition emp-row" data-type="${e.type}" data-nat="${e.nat}" data-empid="${e.id}">
            <td class="px-4 py-3 font-mono text-xs text-gray-500">${e.id}</td>
            <td class="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">${e.name}</td>
            <td class="px-4 py-3 text-gray-600 text-xs">${e.dept}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${e.type==='admin'?'badge-blue':'badge-amber'}">${typeLabel(e.type)}</span></td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${e.nat==='qatari'?'badge-red':'badge-green'}">${natLabel(e.nat)}</span></td>
            <td class="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">${e.expDate}</td>
            <td class="px-4 py-3 text-center font-bold text-gray-700">${e.years}</td>
            <td class="px-4 py-3 text-xs font-semibold text-gray-700 whitespace-nowrap">${e.basic}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${statusColor(e.status)}">${statusLabel(e.status)}</span></td>
            <td class="px-4 py-3 min-w-[140px]">
              <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
                <div class="flex-1 bg-gray-100 rounded-full h-2">
                  <div class="h-2 rounded-full transition-all prog-bar" style="width:${e.clearance}%;background:${e.clearance===100?'#10B981':e.clearance>50?'#3B82F6':'#F59E0B'}"></div>
                </div>
                <span class="text-xs font-bold text-gray-600 whitespace-nowrap prog-num">${e.clearance}%</span>
              </div>
            </td>
            <td class="px-4 py-3 text-center">
              <button onclick="openEOSChecklist('${e.id}','${e.name}',${e.clearance})" 
                class="px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                style="background:rgba(139,26,47,0.1);color:var(--qu-maroon)">
                <i class="fas fa-list-check"></i>
                ${isRTL ? 'الشيك ليست' : 'Checklist'}
              </button>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div id="panel-former" class="eos-panel hidden">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
      <h2 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-users" style="color:var(--qu-maroon)"></i> ${lbl.formerTitle}
      </h2>
      <div class="flex gap-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
        ${['all','admin','academic','qatari','nonqatari'].map((f,i)=>`
        <button onclick="filterTable('former','${f}')" id="ff-${f}"
          class="ff-btn text-xs px-3 py-1.5 rounded-full border font-semibold transition ${i===0?'text-white border-transparent':'border-gray-200 text-gray-500'}"
          style="${i===0?'background:var(--qu-maroon)':''}">
          ${[lbl.filterAll,lbl.filterAdmin,lbl.filterAcademic,lbl.filterQatari,lbl.filterNonQ][i]}
        </button>`).join('')}
      </div>
    </div>
    <div class="card overflow-x-auto">
      <table class="w-full text-sm" id="table-former">
        <thead>
          <tr class="border-b border-gray-100 text-xs text-gray-500 uppercase">
            ${[lbl.colId,lbl.colName,lbl.colDept,lbl.colType,lbl.colNat,lbl.colDate,lbl.colYears,lbl.colGratuity,lbl.colReason].map(h=>`
            <th class="px-4 py-3 font-semibold ${isRTL?'text-right':'text-left'} whitespace-nowrap">${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${formerEmployees.map(e=>`
          <tr class="border-b border-gray-50 hover:bg-gray-50 transition emp-row-f" data-type="${e.type}" data-nat="${e.nat}">
            <td class="px-4 py-3 font-mono text-xs text-gray-500">${e.id}</td>
            <td class="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">${e.name}</td>
            <td class="px-4 py-3 text-gray-600 text-xs">${e.dept}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${e.type==='admin'?'badge-blue':'badge-amber'}">${typeLabel(e.type)}</span></td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${e.nat==='qatari'?'badge-red':'badge-green'}">${natLabel(e.nat)}</span></td>
            <td class="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">${e.exitDate}</td>
            <td class="px-4 py-3 text-center font-bold text-gray-700">${e.years}</td>
            <td class="px-4 py-3 text-xs font-bold whitespace-nowrap" style="color:#059669">${e.gratuity}</td>
            <td class="px-4 py-3 text-xs text-gray-600">${e.reason}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div id="panel-clearance" class="eos-panel hidden">
    <div class="mb-4 ${isRTL?'text-right':''}">
      <h2 class="font-bold text-gray-800 mb-1 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas fa-clipboard-check" style="color:#059669"></i> ${lbl.clearTitle}
      </h2>
      <p class="text-sm text-gray-500">${lbl.clearSubtitle}</p>
    </div>
    <div class="space-y-3 mb-6">
      ${clearanceDepts.map((d,i)=>`
      <div class="card p-4 flex items-start gap-4 ${isRTL?'flex-row-reverse':''}">
        <div class="flex flex-col items-center flex-shrink-0">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shadow" style="background:${d.color}">${i+1}</div>
          ${i<clearanceDepts.length-1?`<div class="w-0.5 h-6 mt-1" style="background:${d.color}44"></div>`:''}
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between flex-wrap gap-2 ${isRTL?'flex-row-reverse':''}">
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <i class="fas ${d.icon} text-sm" style="color:${d.color}"></i>
              <h4 class="font-bold text-gray-800 text-sm">${d.dept}</h4>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0 ${isRTL?'flex-row-reverse':''}">
              <span class="text-xs text-gray-500 font-mono bg-gray-100 px-2 py-0.5 rounded">${d.form}</span>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full badge-blue whitespace-nowrap">
                <i class="fas fa-clock mr-1"></i>${d.days} ${lbl.clearDays.split(' ')[0]}
              </span>
            </div>
          </div>
          <p class="text-xs text-gray-500 mt-1 ${isRTL?'text-right':''}">${d.action}</p>
        </div>
      </div>`).join('')}
    </div>
    <div class="card p-4 flex items-center gap-4 ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,rgba(5,150,105,0.07),rgba(5,150,105,0.03));border:1px solid rgba(5,150,105,0.2)">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.12)">
        <i class="fas fa-check-double text-xl" style="color:#059669"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <p class="font-bold text-gray-800">${isRTL?'المدة الإجمالية لإخلاء الطرف: 14–22 يوم عمل':'Total Clearance Duration: 14–22 Working Days'}</p>
        <p class="text-xs text-gray-500">${isRTL?'يجب استيفاء جميع الأقسام قبل صرف مستحقات نهاية الخدمة النهائية':'All departments must be cleared before final end-of-service payment is released'}</p>
      </div>
    </div>
  </div>

  <div id="panel-calc" class="eos-panel hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card p-6">
        <h2 class="font-bold text-gray-800 mb-5 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-calculator" style="color:var(--qu-maroon)"></i> ${lbl.calcTitle}
        </h2>
        <div class="space-y-4">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${lbl.calcBasic}</label>
            <input type="number" id="calcBasic" placeholder="${isRTL?'مثال: 15000':'e.g. 15000'}" min="1000" max="200000"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--qu-maroon)]" dir="${t.dir}"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${lbl.calcYears}</label>
            <input type="number" id="calcYears" placeholder="${isRTL?'مثال: 7':'e.g. 7'}" min="0" max="50"
              class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[color:var(--qu-maroon)]" dir="${t.dir}"/>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${lbl.calcNat}</label>
            <select id="calcNat" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none" dir="${t.dir}">
              <option value="qatari">${lbl.calcQatariT}</option>
              <option value="nonqatari">${lbl.calcNonQatariT}</option>
            </select>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${lbl.calcReason}</label>
            <select id="calcReason" class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none" dir="${t.dir}">
              <option value="retire">${lbl.calcRetire}</option>
              <option value="contractend">${lbl.calcContractEnd}</option>
              <option value="terminate">${lbl.calcTerminate}</option>
              <option value="resign">${lbl.calcResign}</option>
            </select>
          </div>
          <button onclick="calculateGratuity()" class="btn-primary w-full py-2.5 rounded-lg font-semibold flex items-center justify-center gap-2">
            <i class="fas fa-calculator"></i> ${lbl.calcBtn}
          </button>
        </div>
      </div>
      <div class="card p-6 flex flex-col justify-center" id="calcResultPanel" style="background:linear-gradient(135deg,rgba(139,26,47,0.03),rgba(196,146,42,0.03))">
        <div id="calcPlaceholder" class="text-center text-gray-300 py-12">
          <i class="fas fa-calculator text-6xl mb-4 block"></i>
          <p class="text-sm">${isRTL?'أدخل البيانات لاحتساب المكافأة التقديرية':'Enter data to calculate estimated gratuity'}</p>
        </div>
        <div id="calcOutput" class="hidden">
          <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
            <i class="fas fa-file-invoice-dollar" style="color:var(--qu-maroon)"></i> ${lbl.calcResult}
          </h3>
          <div class="space-y-3" id="calcRows"></div>
          <div class="mt-4 p-3 rounded-xl" style="background:rgba(5,150,105,0.07);border:1px solid rgba(5,150,105,0.2)">
            <p class="text-xs text-gray-500 leading-relaxed ${isRTL?'text-right':''}">${lbl.calcNote}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <style>
    .eos-panel.hidden { display:none; }
    .eos-tab { user-select:none; }
  </style>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
  <script>
  function switchTab(id) {
    document.querySelectorAll('.eos-panel').forEach(p=>p.classList.add('hidden'));
    document.querySelectorAll('.eos-tab').forEach(b=>{
      b.classList.remove('border-[color:var(--qu-maroon)]','text-gray-800');
      b.classList.add('border-transparent','text-gray-500');
    });
    document.getElementById('panel-'+id).classList.remove('hidden');
    const tb=document.getElementById('tab-'+id);
    tb.classList.add('border-[color:var(--qu-maroon)]','text-gray-800');
    tb.classList.remove('border-transparent','text-gray-500');
    if(id==='dash') drawCharts();
  }
  function filterTable(tbl, filter) {
    const rows = document.querySelectorAll(tbl==='pending'?'.emp-row':'.emp-row-f');
    rows.forEach(r=>{
      const type=r.dataset.type, nat=r.dataset.nat;
      const show = filter==='all'||(filter==='admin'&&type==='admin')||(filter==='academic'&&type==='academic')||(filter==='qatari'&&nat==='qatari')||(filter==='nonqatari'&&nat==='nonqatari');
      r.style.display=show?'':'none';
    });
    const btns=document.querySelectorAll(tbl==='pending'?'.pf-btn':'.ff-btn');
    btns.forEach(b=>{
      const isActive=b.id.endsWith(filter);
      b.style.background=isActive?'var(--qu-maroon)':'';
      b.style.color=isActive?'white':'';
      b.style.borderColor=isActive?'transparent':'';
    });
  }
  let chartsDrawn=false;
  function drawCharts(){
    if(chartsDrawn)return; chartsDrawn=true;
    new Chart(document.getElementById('chartType'),{
      type:'doughnut',
      data:{labels:['${lbl.catAdmin}','${lbl.catAcademic}'],
            datasets:[{data:[${stats.adminFormer},${stats.academicFormer}],backgroundColor:['#8B1A2F','#C4922A'],borderWidth:3,borderColor:'white'}]},
      options:{cutout:'72%',plugins:{legend:{display:false}}}
    });
    new Chart(document.getElementById('chartNat'),{
      type:'doughnut',
      data:{labels:['${lbl.catQatari}','${lbl.catNonQatari}'],
            datasets:[{data:[${stats.qatariFormer},${stats.nonQatariFormer}],backgroundColor:['#7C3AED','#0891B2'],borderWidth:3,borderColor:'white'}]},
      options:{cutout:'72%',plugins:{legend:{display:false}}}
    });
    const months=${isRTL?"['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']":"['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']"};
    new Chart(document.getElementById('chartBar'),{
      type:'bar',
      data:{
        labels:months,
        datasets:[
          {label:'${lbl.catAdmin}',   data:[4,3,6,2,5,4,3,7,5,4,6,3], backgroundColor:'rgba(139,26,47,0.75)',  borderRadius:4},
          {label:'${lbl.catAcademic}',data:[3,2,5,4,3,6,2,5,4,3,5,4], backgroundColor:'rgba(196,146,42,0.75)', borderRadius:4},
        ]
      },
      options:{responsive:true,plugins:{legend:{position:'bottom'}},scales:{x:{grid:{display:false}},y:{beginAtZero:true,ticks:{stepSize:2}}}}
    });
  }
  setTimeout(drawCharts,300);
  function calculateGratuity(){
    const basic=parseFloat(document.getElementById('calcBasic').value)||0;
    const years=parseFloat(document.getElementById('calcYears').value)||0;
    const nat=document.getElementById('calcNat').value;
    const reason=document.getElementById('calcReason').value;
    if(!basic||!years){alert('${isRTL?"أدخل الراتب وسنوات الخدمة":"Please enter salary and years of service"}');return;}
    let gratuity=0;
    const weekRate=basic/4.33;
    const monthRate=basic;
    if(nat==='qatari'){
      if(years<5) gratuity=years*3*weekRate;
      else if(years<=10) gratuity=years*4*weekRate;
      else gratuity=years*monthRate;
    } else {
      if(years<1) gratuity=0;
      else if(years<=5) gratuity=years*3*weekRate;
      else gratuity=(5*3*weekRate)+((years-5)*monthRate);
    }
    if(reason==='resign'&&nat==='nonqatari'&&years<5) gratuity=0;
    const notice=reason==='resign'?Math.min(years,3)*monthRate:0;
    const leavEst=basic*1.5;
    const total=gratuity+notice+leavEst;
    const fmt=(n)=>new Intl.NumberFormat(${isRTL?"'ar-QA'":"'en-QA'"},{style:'currency',currency:'QAR',maximumFractionDigits:0}).format(n);
    document.getElementById('calcPlaceholder').classList.add('hidden');
    document.getElementById('calcOutput').classList.remove('hidden');
    document.getElementById('calcRows').innerHTML=\`
      <div class="flex justify-between items-center p-3 rounded-xl bg-white border border-gray-100 ${isRTL?'flex-row-reverse':''}">
        <span class="text-sm text-gray-600">${lbl.calcGratuity}</span>
        <span class="font-black text-lg" style="color:var(--qu-maroon)">\${fmt(gratuity)}</span>
      </div>
      \${notice>0?\`<div class="flex justify-between items-center p-3 rounded-xl bg-white border ${isRTL?'flex-row-reverse':''}">
        <span class="text-sm text-gray-600">${lbl.calcNotice}</span>
        <span class="font-bold text-base text-blue-600">\${fmt(notice)}</span>
      </div>\`:''}
      <div class="flex justify-between items-center p-3 rounded-xl bg-white border ${isRTL?'flex-row-reverse':''}">
        <span class="text-sm text-gray-600">${lbl.calcLeave}</span>
        <span class="font-bold text-base text-gray-700">\${fmt(leavEst)}</span>
      </div>
      <div class="flex justify-between items-center p-3 rounded-xl text-white font-bold ${isRTL?'flex-row-reverse':''}" style="background:var(--qu-maroon)">
        <span>${lbl.calcTotal}</span>
        <span class="text-xl">\${fmt(total)}</span>
      </div>
    \`;
  }

  // ─── EOS CHECKLIST MODAL ───────────────────────────────────────────────────
  const EOS_STEPS = ${JSON.stringify(isRTL ? [
    { id:'hr',    icon:'fa-users',                color:'#8B1A2F', dept:'الموارد البشرية',           action:'التحقق من سجل الإجازات وتسوية الرصيد',                     form:'HR-CL-01',  days:'1–2' },
    { id:'fin',   icon:'fa-coins',                color:'#C4922A', dept:'الشؤون المالية',             action:'تسوية السلف والقروض والمطالبات المالية',                    form:'FIN-CL-02', days:'3–5' },
    { id:'it',    icon:'fa-laptop',               color:'#3B82F6', dept:'تقنية المعلومات',            action:'استرداد الأجهزة وإلغاء الحسابات والبريد الإلكتروني',         form:'IT-CL-03',  days:'1'   },
    { id:'lib',   icon:'fa-book',                 color:'#10B981', dept:'المكتبة',                    action:'إعادة المواد المستعارة وتسوية الغرامات',                     form:'LIB-CL-04', days:'1'   },
    { id:'fac',   icon:'fa-building',             color:'#6366F1', dept:'إدارة المرافق والعقارات',    action:'تسليم المفاتيح وإخلاء السكن الجامعي',                        form:'FAC-CL-05', days:'2–3' },
    { id:'sec',   icon:'fa-shield-halved',         color:'#EF4444', dept:'أمن وسلامة الحرم الجامعي', action:'تسليم بطاقة الهوية وتصاريح الدخول',                          form:'SEC-CL-06', days:'1'   },
    { id:'acad',  icon:'fa-graduation-cap',        color:'#7C3AED', dept:'العلاقات الأكاديمية',       action:'تسليم الدرجات والمناهج وإغلاق الأبحاث',                     form:'AC-CL-07',  days:'5–7' },
    { id:'res',   icon:'fa-microscope',            color:'#0891B2', dept:'إدارة البحث العلمي',         action:'إغلاق المنح والمشاريع البحثية الجارية',                      form:'RES-CL-08', days:'3–5' },
    { id:'leg',   icon:'fa-scale-balanced',        color:'#374151', dept:'إدارة الشؤون القانونية',    action:'التحقق من غياب أي التزامات قانونية أو تعاقدية',             form:'LEG-CL-09', days:'2'   },
    { id:'pay',   icon:'fa-file-invoice-dollar',   color:'#059669', dept:'قسم الرواتب',               action:'احتساب وتسوية مستحقات نهاية الخدمة النهائية',               form:'PAY-CL-10', days:'2–3' },
  ] : [
    { id:'hr',    icon:'fa-users',                color:'#8B1A2F', dept:'Human Resources',           action:'Verify leave balance and settle outstanding leave',                  form:'HR-CL-01',  days:'1–2' },
    { id:'fin',   icon:'fa-coins',                color:'#C4922A', dept:'Finance Department',         action:'Settle advances, loans, and financial claims',                       form:'FIN-CL-02', days:'3–5' },
    { id:'it',    icon:'fa-laptop',               color:'#3B82F6', dept:'Information Technology',    action:'Return devices and deactivate accounts & email',                      form:'IT-CL-03',  days:'1'   },
    { id:'lib',   icon:'fa-book',                 color:'#10B981', dept:'Library',                   action:'Return borrowed materials and settle fines',                         form:'LIB-CL-04', days:'1'   },
    { id:'fac',   icon:'fa-building',             color:'#6366F1', dept:'Facilities & Real Estate',  action:'Return keys and vacate university accommodation',                    form:'FAC-CL-05', days:'2–3' },
    { id:'sec',   icon:'fa-shield-halved',         color:'#EF4444', dept:'Campus Security & Safety', action:'Return ID card and all access passes',                               form:'SEC-CL-06', days:'1'   },
    { id:'acad',  icon:'fa-graduation-cap',        color:'#7C3AED', dept:'Academic Affairs',          action:'Submit grades, syllabi and close ongoing research',                  form:'AC-CL-07',  days:'5–7' },
    { id:'res',   icon:'fa-microscope',            color:'#0891B2', dept:'Research Management',       action:'Close grants and active research projects',                          form:'RES-CL-08', days:'3–5' },
    { id:'leg',   icon:'fa-scale-balanced',        color:'#374151', dept:'Legal Affairs',             action:'Confirm no outstanding legal or contractual obligations',            form:'LEG-CL-09', days:'2'   },
    { id:'pay',   icon:'fa-file-invoice-dollar',   color:'#059669', dept:'Payroll Department',        action:'Calculate and process final end-of-service entitlements',            form:'PAY-CL-10', days:'2–3' },
  ])};

  const EOS_CHECKLIST_KEY = 'qu_eos_checklists';
  function getEOSChecklists(){ try{return JSON.parse(localStorage.getItem(EOS_CHECKLIST_KEY)||'{}')}catch{return{}} }
  function saveEOSChecklists(d){ localStorage.setItem(EOS_CHECKLIST_KEY,JSON.stringify(d)) }

  let _currentEmpId = null;
  function openEOSChecklist(empId, empName, clearancePct){
    _currentEmpId = empId;
    const all = getEOSChecklists();
    const data = all[empId] || {};
    const done = EOS_STEPS.filter(s=>data[s.id]).length;
    const pct  = Math.round((done/EOS_STEPS.length)*100);

    document.getElementById('eosModalTitle').textContent = empName;
    document.getElementById('eosModalSubtitle').textContent = '${isRTL ? "رقم الموظف" : "Employee ID"}: ' + empId;
    // progress bar
    document.getElementById('eosProgressBar').style.width = pct + '%';
    document.getElementById('eosProgressPct').textContent = pct + '%';
    document.getElementById('eosProgressText').textContent = done + ' ${isRTL ? "من" : "of"} ' + EOS_STEPS.length + ' ${isRTL ? "مكتمل" : "completed"}';
    // steps
    document.getElementById('eosStepsList').innerHTML = EOS_STEPS.map((s,i)=>{
      const checked = !!data[s.id];
      const dateStr = data[s.id+'_date'] ? ('<span class="text-xs text-gray-400 ms-1">'+data[s.id+'_date']+'</span>') : '';
      return \`<div class="flex items-start gap-3 p-3 rounded-xl border transition \${checked?'border-green-200 bg-green-50':'border-gray-100 bg-white'} ${isRTL?'flex-row-reverse':''}" id="eosStep_\${s.id}">
        <div class="flex-shrink-0 mt-0.5">
          <input type="checkbox" id="chk_\${s.id}" \${checked?'checked':''} onchange="toggleEOSStep('\${s.id}')"
            class="w-4 h-4 rounded accent-green-600 cursor-pointer"/>
        </div>
        <div class="flex-1 min-w-0 ${isRTL?'text-right':''}">
          <div class="flex items-center gap-2 flex-wrap ${isRTL?'flex-row-reverse justify-end':''}">
            <span class="inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold text-white flex-shrink-0" style="background:\${s.color}">\${i+1}</span>
            <i class="fas \${s.icon} text-sm" style="color:\${s.color}"></i>
            <span class="font-semibold text-sm text-gray-800">\${s.dept}</span>
            \${checked?'<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700"><i class="fas fa-check me-1"></i>${isRTL ? "مكتمل" : "Done"}</span>':'<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">${isRTL ? "معلق" : "Pending"}</span>'}
            \${dateStr}
          </div>
          <p class="text-xs text-gray-500 mt-1">\${s.action}</p>
          <div class="flex items-center gap-3 mt-1.5 flex-wrap ${isRTL?'flex-row-reverse justify-end':''}">
            <span class="text-xs font-mono bg-gray-100 px-2 py-0.5 rounded text-gray-500">\${s.form}</span>
            <span class="text-xs text-gray-400"><i class="fas fa-clock me-1"></i>\${s.days} ${isRTL ? "أيام" : "days"}</span>
          </div>
        </div>
      </div>\`;
    }).join('');
    document.getElementById('eosChecklistModal').classList.remove('hidden');
    document.body.style.overflow='hidden';
  }

  function toggleEOSStep(stepId){
    const all = getEOSChecklists();
    if(!all[_currentEmpId]) all[_currentEmpId]={};
    const wasChecked = !!all[_currentEmpId][stepId];
    if(wasChecked){
      delete all[_currentEmpId][stepId];
      delete all[_currentEmpId][stepId+'_date'];
    } else {
      all[_currentEmpId][stepId] = true;
      all[_currentEmpId][stepId+'_date'] = new Date().toLocaleDateString('${isRTL ? "ar-QA" : "en-GB"}');
    }
    saveEOSChecklists(all);
    // recalc progress
    const data = all[_currentEmpId];
    const done = EOS_STEPS.filter(s=>data[s.id]).length;
    const pct  = Math.round((done/EOS_STEPS.length)*100);
    document.getElementById('eosProgressBar').style.width = pct+'%';
    document.getElementById('eosProgressPct').textContent = pct+'%';
    document.getElementById('eosProgressText').textContent = done+' ${isRTL ? "من" : "of"} '+EOS_STEPS.length+' ${isRTL ? "مكتمل" : "completed"}';
    // update step row style
    const row = document.getElementById('eosStep_'+stepId);
    const chk = document.getElementById('chk_'+stepId);
    if(row){
      if(!wasChecked){
        row.className=row.className.replace('border-gray-100 bg-white','border-green-200 bg-green-50');
        row.innerHTML=row.innerHTML.replace('<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-500">${isRTL ? "معلق" : "Pending"}</span>','<span class="px-2 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700"><i class=\\"fas fa-check me-1\\"></i>${isRTL ? "مكتمل" : "Done"}</span>');
      }
    }
    // update progress bar color on table row
    const pBar = document.querySelector('[data-empid="'+_currentEmpId+'"] .prog-bar');
    if(pBar){ pBar.style.width=pct+'%'; pBar.style.background=pct===100?'#10B981':pct>50?'#3B82F6':'#F59E0B'; }
    const pNum = document.querySelector('[data-empid="'+_currentEmpId+'"] .prog-num');
    if(pNum) pNum.textContent=pct+'%';
  }

  function closeEOSModal(){
    document.getElementById('eosChecklistModal').classList.add('hidden');
    document.body.style.overflow='';
  }

  // reset all checklist steps for current employee
  function resetEOSChecklist(){
    if(!confirm('${isRTL ? "هل أنت متأكد من إعادة تعيين جميع خطوات الشيك ليست؟" : "Reset all checklist steps for this employee?"}')) return;
    const all = getEOSChecklists();
    all[_currentEmpId]={};
    saveEOSChecklists(all);
    openEOSChecklist(_currentEmpId, document.getElementById('eosModalTitle').textContent, 0);
  }

  // ══════════════════════════════════════════════════
  //  EOS REPORT MODAL
  // ══════════════════════════════════════════════════
  function openEosReport() {
    const now = new Date();
    const dateStr = now.toLocaleDateString(${isRTL} ? 'ar-QA' : 'en-GB', { year:'numeric', month:'long', day:'numeric' });
    document.getElementById('eosReportDate').textContent = dateStr;
    document.getElementById('eosReportModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeEosReport() {
    document.getElementById('eosReportModal').classList.add('hidden');
    document.body.style.overflow = '';
  }

  function printEosReport() {
    const reportContent = document.getElementById('eosReportModal').querySelector('.bg-white').innerHTML;
    const dir   = '${isRTL ? 'rtl' : 'ltr'}';
    const title = '${isRTL ? 'تقرير نهاية الخدمة - جامعة قطر' : 'End-of-Service Report - Qatar University'}';
    const parts = [
      '<!DOCTYPE html><html dir="' + dir + '"><head><meta charset="UTF-8"><title>' + title + '</title>',
      '<link rel="stylesheet" href="https://cdn.tailwindcss.com/3.4.1/tailwind.min.css">',
      '<style>@media print{body{margin:0}button,a{display:none!important}}',
      'body{font-family:Segoe UI,Arial,sans-serif;background:#fff;padding:24px}',
      ':root{--qu-maroon:#8B1A2F}</style></head><body>',
      reportContent,
      '</body></html>'
    ];
    const blob = new Blob([parts.join('')], { type: 'text/html;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const printWin = window.open(url, '_blank', 'width=900,height=700');
    if (printWin) { setTimeout(() => { printWin.focus(); printWin.print(); URL.revokeObjectURL(url); }, 800); }
  }

  function exportEosCSV() {
    const isAr = ${isRTL};
    // Pending employees CSV
    const pendingHeaders = isAr
      ? ['رقم الموظف','الاسم','القسم','النوع','الجنسية','تاريخ الانتهاء','سنوات الخدمة','الراتب الأساسي','الحالة','نسبة إخلاء الطرف']
      : ['ID','Name','Department','Type','Nationality','Exit Date','Years','Basic Salary','Status','Clearance %'];
    const pending = ${JSON.stringify(pendingEmployees)};
    const pendingRows = pending.map(e => [
      e.id, e.name, e.dept,
      e.type === 'admin' ? (isAr ? 'إداري' : 'Admin') : (isAr ? 'أكاديمي' : 'Academic'),
      e.nat === 'qatari' ? (isAr ? 'قطري' : 'Qatari') : (isAr ? 'غير قطري' : 'Non-Qatari'),
      e.expDate, e.years, e.basic,
      e.status === 'active' ? (isAr ? 'نشط' : 'Active') : e.status === 'notice' ? (isAr ? 'إشعار' : 'Notice') : (isAr ? 'معالجة' : 'Processing'),
      e.clearance + '%'
    ]);
    // Former employees CSV
    const formerHeaders = isAr
      ? ['رقم الموظف','الاسم','القسم','النوع','الجنسية','تاريخ الخروج','سنوات الخدمة','المكافأة','السبب']
      : ['ID','Name','Department','Type','Nationality','Exit Date','Years','Gratuity','Reason'];
    const former = ${JSON.stringify(formerEmployees)};
    const formerRows = former.map(e => [
      e.id, e.name, e.dept,
      e.type === 'admin' ? (isAr ? 'إداري' : 'Admin') : (isAr ? 'أكاديمي' : 'Academic'),
      e.nat === 'qatari' ? (isAr ? 'قطري' : 'Qatari') : (isAr ? 'غير قطري' : 'Non-Qatari'),
      e.exitDate, e.years, e.gratuity, e.reason
    ]);

    const toCSV = (headers, rows) =>
      [headers, ...rows].map(r => r.map(v => \`"\${String(v||'').replace(/"/g,'""')}"\`).join(',')).join('\\n');

    const bom = '\\uFEFF';
    const sep = isAr ? '\\n\\n\\n' : '\\n\\n\\n';
    const sectionPending = (isAr ? '# الموظفون المتوقع انتهاء خدمتهم' : '# Upcoming Separations');
    const sectionFormer  = (isAr ? '# سجل الموظفين السابقين'          : '# Former Employees Record');
    const csv = bom + sectionPending + '\\n' + toCSV(pendingHeaders, pendingRows)
              + '\\n\\n' + sectionFormer  + '\\n' + toCSV(formerHeaders, formerRows);

    const blob = new Blob([csv], { type:'text/csv;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = isAr ? 'تقرير_نهاية_الخدمة_2025.csv' : 'EOS_Report_2025.csv';
    document.body.appendChild(a); a.click();
    document.body.removeChild(a); URL.revokeObjectURL(url);
  }

  // Close EOS report modal on backdrop click
  document.getElementById('eosReportModal').addEventListener('click', function(e) {
    if (e.target === this) closeEosReport();
  });
  </script>

  <!-- EOS CHECKLIST MODAL -->
  <div id="eosChecklistModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.55)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col" style="direction:${isRTL?'rtl':'ltr'}">
      <!-- Header -->
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0 ${isRTL?'flex-row-reverse':''}">
        <div class="${isRTL?'text-right':''}">
          <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-list-check text-lg" style="color:var(--qu-maroon)"></i>
            <h2 class="text-lg font-bold text-gray-800">${isRTL?'شيك ليست إخلاء الطرف':'End-of-Service Checklist'}</h2>
          </div>
          <p class="text-xs text-gray-500 mt-0.5" id="eosModalSubtitle"></p>
          <p class="text-sm font-semibold text-gray-700 mt-0.5" id="eosModalTitle"></p>
        </div>
        <button onclick="closeEOSModal()" class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 text-gray-400 hover:text-gray-700 transition text-xl flex-shrink-0">&times;</button>
      </div>
      <!-- Progress -->
      <div class="px-6 py-4 border-b border-gray-100 flex-shrink-0">
        <div class="flex items-center justify-between mb-1.5 ${isRTL?'flex-row-reverse':''}">
          <span class="text-xs font-semibold text-gray-600">${isRTL?'نسبة الإنجاز':'Completion Progress'}</span>
          <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <span class="text-xs text-gray-500" id="eosProgressText"></span>
            <span class="font-bold text-sm" style="color:var(--qu-maroon)" id="eosProgressPct">0%</span>
          </div>
        </div>
        <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
          <div id="eosProgressBar" class="h-full rounded-full transition-all duration-500" style="width:0%;background:var(--qu-maroon)"></div>
        </div>
        <div class="mt-2 flex items-center gap-2 text-xs text-gray-400 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-info-circle"></i>
          <span>${isRTL?'اضغط على مربع الاختيار لتحديث حالة كل خطوة':'Click a checkbox to update each step status'}</span>
        </div>
      </div>
      <!-- Steps list scrollable -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-2" id="eosStepsList"></div>
      <!-- Footer actions -->
      <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between flex-shrink-0 ${isRTL?'flex-row-reverse':''}">
        <button onclick="resetEOSChecklist()" class="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 transition ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-rotate-left"></i> ${isRTL?'إعادة تعيين':'Reset All'}
        </button>
        <button onclick="closeEOSModal()" class="btn-primary px-5 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-check"></i> ${isRTL?'حفظ وإغلاق':'Save & Close'}
        </button>
      </div>
    </div>
  </div>
  `

  return c.html(layout(lbl.title, content, 'eos', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  FORMS  /forms
// ─────────────────────────────────────────────────────────────────────────────
app.get('/forms', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const content = `
  <div class="mb-6 flex items-center justify-between flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
    <div class="${isRTL ? 'text-right' : ''}">
      <h1 class="text-2xl font-bold text-gray-800">${t.formsTitle}</h1>
      <p class="text-gray-500 mt-1 text-sm">${t.formsSubtitle}</p>
    </div>
    <div class="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 text-sm text-amber-800 ${isRTL ? 'flex-row-reverse' : ''}">
      <i class="fas fa-triangle-exclamation flex-shrink-0"></i>
      <span>${t.formsWarning}</span>
    </div>
  </div>
  <div class="space-y-8">
    ${t.formCategories.map((cat: any) => `
    <div>
      <div class="flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(0,0,0,0.06)">
          <i class="fas ${cat.icon}" style="color:${cat.color}"></i>
        </div>
        <h2 class="text-lg font-bold text-gray-700">${cat.category}</h2>
        <span class="text-xs font-medium text-gray-400">(${cat.forms.length} ${t.formsCount})</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${cat.forms.map((form: any) => `
        <div class="card form-card p-5 flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
            <i class="fas fa-file-pdf text-lg" style="color:var(--qu-maroon)"></i>
          </div>
          <div class="flex-1 min-w-0 ${isRTL ? 'text-right' : ''}">
            <h4 class="font-semibold text-gray-800 text-sm mb-1">${form.title}</h4>
            <p class="text-xs text-gray-500 leading-relaxed mb-3">${form.desc}</p>
            ${form.attachment ? `
            <div class="mb-3 flex items-center gap-2 rounded-lg px-3 py-2 ${isRTL ? 'flex-row-reverse' : ''}" style="background:#FEF9EE;border:1px solid #F5C842">
              <i class="fas fa-paperclip text-xs" style="color:var(--qu-gold)"></i>
              <span class="text-xs font-medium text-yellow-800 flex-1 ${isRTL ? 'text-right' : ''}">${isRTL ? 'مرفق مطلوب:' : 'Required Attachment:'} <strong>${form.attachment.label}</strong></span>
              <a href="${form.attachment.file}" target="_blank" download class="text-xs font-semibold underline" style="color:var(--qu-maroon)">${isRTL ? 'تحميل' : 'Download'}</a>
            </div>` : ''}
            <div class="flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}">
              <div class="flex items-center gap-2 text-xs text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}">
                <span class="font-mono bg-gray-100 px-1.5 py-0.5 rounded">${form.ref}</span>
                <span>${form.version}</span>
              </div>
              ${form.file ? `
              <a href="${form.file}" target="_blank" download class="btn-primary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 no-underline">
                <i class="fas fa-download"></i> ${t.btnDownload}
              </a>` : `
              <button onclick="alert('${isRTL ? 'النموذج غير متاح رقمياً حالياً. تواصل مع قسم الرواتب.' : 'Form not available digitally. Contact Payroll.'}')" class="btn-primary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 opacity-60">
                <i class="fas fa-download"></i> ${t.btnDownload}
              </button>`}
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>`).join('')}
  </div>
  <div class="card p-5 mt-6 flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}" style="background:#EFF6FF;border:1px solid #BFDBFE">
    <i class="fas fa-info-circle text-blue-500 text-xl mt-0.5 flex-shrink-0"></i>
    <div class="${isRTL ? 'text-right' : ''}">
      <p class="font-semibold text-blue-800 text-sm">${t.formsNeedMore}</p>
      <p class="text-blue-700 text-xs mt-1">${t.formsNeedMoreBody}</p>
    </div>
  </div>`

  return c.html(layout(t.formsTitle, content, 'forms', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  FAQs  /faqs
// ─────────────────────────────────────────────────────────────────────────────
app.get('/faqs', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const content = `
  <div class="mb-6 ${isRTL ? 'text-right' : ''}">
    <h1 class="text-2xl font-bold text-gray-800">${t.faqsTitle}</h1>
    <p class="text-gray-500 mt-1 text-sm">${t.faqsSubtitle}</p>
  </div>
  <div class="card p-4 mb-6 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}" style="background:rgba(139,26,47,0.04);border:1px solid rgba(139,26,47,0.1)">
    <i class="fas fa-lightbulb text-lg flex-shrink-0" style="color:var(--qu-gold)"></i>
    <p class="text-sm text-gray-700 ${isRTL ? 'text-right' : ''}">
      ${t.faqsTip} <a href="/contact?lang=${lang}" class="font-semibold underline" style="color:var(--qu-maroon)">${t.faqsTipLink}</a> ${t.faqsTipBody}
    </p>
  </div>
  <div class="space-y-6">
    ${t.faqSections.map((section: any) => `
    <div>
      <div class="flex items-center gap-3 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(0,0,0,0.05)">
          <i class="fas ${section.icon}" style="color:${section.color}"></i>
        </div>
        <h2 class="text-lg font-bold text-gray-700">${section.category}</h2>
      </div>
      <div class="space-y-2">
        ${section.items.map((item: any) => `
        <div class="faq-item card overflow-hidden">
          <button class="w-full ${isRTL ? 'text-right' : 'text-left'} px-5 py-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition ${isRTL ? 'flex-row-reverse' : ''}" onclick="toggleFaq(this)">
            <span class="font-medium text-gray-800 text-sm">${item.q}</span>
            <i class="fas fa-chevron-down faq-icon text-gray-400 flex-shrink-0 text-sm"></i>
          </button>
          <div class="faq-content px-5 pb-4">
            <div class="border-t border-gray-100 pt-3">
              <p class="text-sm text-gray-600 leading-relaxed ${isRTL ? 'text-right' : ''}">${item.a}</p>
            </div>
          </div>
        </div>`).join('')}
      </div>
    </div>`).join('')}
  </div>`

  return c.html(layout(t.faqsTitle, content, 'faqs', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  CONTACT  /contact
// ─────────────────────────────────────────────────────────────────────────────
app.get('/contact', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const cfSubjectOptions = isRTL
    ? ['استفسارات الرواتب العامة','البدلات والمزايا','الاستقطاعات والتظلمات','سجلات الموارد البشرية','التعويضات والمزايا','الدعم التقني']
    : ['General Payroll Inquiries','Allowances & Benefits','Deductions & Disputes','HR Records & Certificates','Compensation & Benefits','Technical Support']

  const content = `
  <div class="mb-6 ${isRTL ? 'text-right' : ''}">
    <h1 class="text-2xl font-bold text-gray-800">${t.contactTitle}</h1>
    <p class="text-gray-500 mt-1 text-sm">${t.contactSubtitle}</p>
  </div>
  <div class="card p-5 mb-6 flex flex-wrap gap-6 items-center" style="background:linear-gradient(135deg,rgba(139,26,47,0.05),white);border-${isRTL ? 'right' : 'left'}:4px solid var(--qu-maroon)">
    ${[
      { icon: 'fa-map-marker-alt', label: t.contactLocation, val: t.contactLocationVal, sub: t.contactLocationSub },
      { icon: 'fa-clock', label: t.contactHoursLabel, val: t.contactHoursVal, sub: t.contactHoursSub },
      { icon: 'fa-phone', label: t.contactPhone, val: t.contactPhoneVal, sub: t.contactPhoneSub },
    ].map(info => `
    <div class="flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.1)">
        <i class="fas ${info.icon}" style="color:var(--qu-maroon)"></i>
      </div>
      <div class="${isRTL ? 'text-right' : ''}">
        <p class="text-xs text-gray-500">${info.label}</p>
        <p class="text-sm font-semibold text-gray-800">${info.val}</p>
        <p class="text-xs text-gray-500">${info.sub}</p>
      </div>
    </div>`).join('')}
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
    ${t.contactDepts.map((ct: any) => `
    <div class="card contact-card p-5 flex flex-col gap-3" style="border-top-color:${ct.color}">
      <div class="flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(0,0,0,0.05)">
          <i class="fas ${ct.icon} text-lg" style="color:${ct.color}"></i>
        </div>
        <h3 class="font-bold text-gray-800 text-sm leading-tight ${isRTL ? 'text-right' : ''}">${ct.dept}</h3>
      </div>
      <p class="text-xs text-gray-500 leading-relaxed ${isRTL ? 'text-right' : ''}">${ct.desc}</p>
      <div class="space-y-1.5 text-xs text-gray-600">
        ${[
          { icon: 'fa-envelope', text: ct.email },
          { icon: 'fa-phone',   text: `${t.contactExtLabel} ${ct.ext}` },
          { icon: 'fa-clock',   text: ct.hours },
          { icon: 'fa-reply',   text: `${t.contactResponseLabel} <strong>${ct.response}</strong>` },
        ].map(row => `
        <div class="flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}">
          <i class="fas ${row.icon} w-4 text-center flex-shrink-0" style="color:${ct.color}"></i>
          <span>${row.text}</span>
        </div>`).join('')}
      </div>
      <div class="pt-2 mt-auto">
        <a href="mailto:${ct.email}" class="btn-primary w-full py-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-2">
          <i class="fas fa-envelope"></i> ${t.btnSendEmail}
        </a>
      </div>
    </div>`).join('')}
  </div>
  <div class="card p-6">
    <h2 class="text-lg font-bold text-gray-800 mb-1 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
      <i class="fas fa-paper-plane text-sm" style="color:var(--qu-maroon)"></i> ${t.contactFormTitle}
    </h2>
    <p class="text-sm text-gray-500 mb-5 ${isRTL ? 'text-right' : ''}">${t.contactFormSubtitle}</p>
    <form onsubmit="submitContact(event)" class="grid grid-cols-1 md:grid-cols-2 gap-4" dir="${t.dir}">
      ${[
        { label: t.cfName, ph: t.cfNamePh, type: 'text' },
        { label: t.cfEmpId, ph: t.cfEmpIdPh, type: 'text' },
        { label: t.cfEmail, ph: t.cfEmailPh, type: 'email' },
      ].map(f => `
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL ? 'text-right' : ''}">${f.label} <span class="text-red-500">*</span></label>
        <input type="${f.type}" required placeholder="${f.ph}" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
      </div>`).join('')}
      <div>
        <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL ? 'text-right' : ''}">${t.cfSubject}</label>
        <select class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition bg-white">
          <option value="">${t.cfSubjectPh}</option>
          ${cfSubjectOptions.map((o: string) => `<option>${o}</option>`).join('')}
        </select>
      </div>
      <div class="md:col-span-2">
        <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL ? 'text-right' : ''}">${t.cfMsg} <span class="text-red-500">*</span></label>
        <textarea required rows="4" placeholder="${t.cfMsgPh}" class="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition resize-none"></textarea>
      </div>
      <div class="md:col-span-2 flex items-center justify-between flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
        <p class="text-xs text-gray-400 flex items-center gap-1 ${isRTL ? 'flex-row-reverse' : ''}">
          <i class="fas fa-lock"></i> ${t.cfPrivacy}
        </p>
        <button type="submit" id="cfSubmitBtn" class="btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
          <i class="fas fa-paper-plane"></i> ${t.cfSubmit}
        </button>
      </div>
    </form>
  </div>
  <script>
    function submitContact(e) {
      e.preventDefault();
      const btn = document.getElementById('cfSubmitBtn');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ${t.cfSending}';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> ${t.cfSent}';
        btn.style.background = 'linear-gradient(135deg,#10B981,#34D399)';
        setTimeout(() => {
          btn.innerHTML = '<i class="fas fa-paper-plane"></i> ${t.cfSubmit}';
          btn.style.background = '';
          btn.disabled = false;
          e.target.reset();
        }, 3000);
      }, 1800);
    }
  </script>`

  return c.html(layout(t.contactTitle, content, 'contact', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  LOGIN  /login
// ─────────────────────────────────────────────────────────────────────────────
app.get('/login', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const content = `
  <div class="min-h-[80vh] flex items-center justify-center py-10">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <div class="w-20 h-20 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg" style="background:linear-gradient(135deg,var(--qu-maroon-dark),var(--qu-maroon-light))">
          <i class="fas fa-university text-3xl text-white"></i>
        </div>
        <h1 class="text-2xl font-bold text-gray-800">${t.loginTitle}</h1>
        <p class="text-gray-500 text-sm mt-1">${t.loginSubtitle}</p>
      </div>
      <div class="card p-8">
        <form onsubmit="handleLogin(event)" class="space-y-4" dir="${t.dir}">
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL ? 'text-right' : ''}">${t.loginUsername}</label>
            <div class="relative">
              <i class="fas fa-user absolute ${isRTL ? 'right-3' : 'left-3'} top-3 text-gray-400 text-sm pointer-events-none"></i>
              <input type="text" required placeholder="${t.loginUsernamePh}"
                class="w-full border border-gray-200 rounded-lg ${isRTL ? 'pr-9 pl-3' : 'pl-9 pr-3'} py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
            </div>
          </div>
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-1.5 ${isRTL ? 'text-right' : ''}">${t.loginPassword}</label>
            <div class="relative">
              <i class="fas fa-lock absolute ${isRTL ? 'right-3' : 'left-3'} top-3 text-gray-400 text-sm pointer-events-none"></i>
              <input type="password" required placeholder="${t.loginPasswordPh}"
                class="w-full border border-gray-200 rounded-lg ${isRTL ? 'pr-9 pl-3' : 'pl-9 pr-3'} py-2.5 text-sm focus:outline-none focus:ring-2 transition"/>
            </div>
          </div>
          <div class="flex items-center justify-between text-xs ${isRTL ? 'flex-row-reverse' : ''}">
            <label class="flex items-center gap-2 text-gray-600 cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}">
              <input type="checkbox" class="rounded"/>
              <span>${t.loginRemember}</span>
            </label>
            <a href="#" class="font-semibold" style="color:var(--qu-maroon)">${t.loginForgot}</a>
          </div>
          <button type="submit" id="loginBtn" class="btn-primary w-full py-3 rounded-lg text-sm font-bold flex items-center justify-center gap-2 mt-2">
            <i class="fas fa-sign-in-alt"></i> ${t.loginBtn}
          </button>
        </form>
        <div class="mt-6 pt-5 border-t border-gray-100 text-center space-y-2">
          <p class="text-xs text-gray-500">${t.loginNote1}</p>
          <p class="text-xs text-gray-500">${t.loginNote2} <a href="mailto:ithelpdesk@qu.edu.qa" class="underline" style="color:var(--qu-maroon)">ithelpdesk@qu.edu.qa</a></p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-3 mt-5">
        <a href="/faqs?lang=${lang}" class="card p-3 text-center hover:bg-gray-50 transition">
          <i class="fas fa-circle-question text-lg mb-1" style="color:var(--qu-maroon)"></i>
          <p class="text-xs text-gray-600 font-medium">${t.loginFaq}</p>
        </a>
        <a href="/contact?lang=${lang}" class="card p-3 text-center hover:bg-gray-50 transition">
          <i class="fas fa-headset text-lg mb-1" style="color:var(--qu-maroon)"></i>
          <p class="text-xs text-gray-600 font-medium">${t.loginSupport}</p>
        </a>
      </div>
    </div>
  </div>
  <script>
    function handleLogin(e) {
      e.preventDefault();
      const btn = document.getElementById('loginBtn');
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ${t.loginBtnLoading}';
      btn.disabled = true;
      setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check"></i> ${t.loginBtnDone}';
        btn.style.background = 'linear-gradient(135deg,#10B981,#34D399)';
        setTimeout(() => { window.location.href = '/?lang=${lang}'; }, 1500);
      }, 2000);
    }
  </script>`

  return c.html(layout(t.loginTitle, content, 'login', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF PORTAL  –  /staff-login  /staff  /staff-forms  /staff-contact
//  بوابة الموظفين المبسّطة (نماذج + تواصل + رئيسية) مع تسجيل دخول
// ─────────────────────────────────────────────────────────────────────────────

// ── بيانات المستخدمين المسموح لهم (يوزرنيم : باسورد) ──
const STAFF_USERS: Record<string, string> = {
  'staff':    'qu2025',
  'employee': 'payroll@123',
  'qu-staff': 'qu@staff',
}

// ── Layout مبسّط للموظفين (بدون sidebar المعقد) ──
function staffLayout(title: string, content: string, activePage: string, lang: Lang): string {
  const t = T[lang]
  const isRTL = lang === 'ar'
  const otherLang: Lang = lang === 'en' ? 'ar' : 'en'

  const navItems = [
    { href: '/staff',            icon: 'fa-home',            label: isRTL ? 'الرئيسية' : 'Home',               page: 'home' },
    { href: '/staff-dashboard',  icon: 'fa-chart-line',      label: isRTL ? 'لوحة متابعتي' : 'My Dashboard',   page: 'dashboard' },
    { href: '/staff-forms',      icon: 'fa-file-alt',        label: isRTL ? 'النماذج والوثائق' : 'Forms & Documents', page: 'forms' },
    { href: '/staff-request',    icon: 'fa-concierge-bell',  label: isRTL ? 'طلب خدمة' : 'Request a Service',  page: 'request' },
    { href: '/staff-contact',    icon: 'fa-envelope',        label: isRTL ? 'تواصل معنا' : 'Contact Us',       page: 'contact' },
    { href: '/payroll-dept',     icon: 'fa-building-columns', label: isRTL ? 'قسم الرواتب' : 'Payroll Dept.',    page: 'payroll-dept' },
  ]

  return `<!DOCTYPE html>
<html lang="${t.lang}" dir="${t.dir}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${title} – ${isRTL ? 'بوابة خدمات الرواتب' : 'Payroll Services Portal'}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800&family=Tajawal:wght@300;400;500;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root { --qu-maroon:#8B1A2F; --qu-maroon-dark:#6B1223; --qu-maroon-light:#A52840; --qu-gold:#C4922A; }
    * { scroll-behavior:smooth; box-sizing:border-box; }
    body {
      font-family: ${isRTL ? "'Cairo','Tajawal',sans-serif" : "'Segoe UI',system-ui,sans-serif"};
      background:#F7F8FA; color:#2C2C2C; direction:${t.dir};
      ${isRTL ? 'font-size:15px;line-height:1.8;' : 'font-size:14px;line-height:1.6;'}
    }
    ${isRTL ? `h1,h2,h3,h4{font-family:'Cairo',sans-serif;font-weight:700;}
    p,span,a,label,button{font-family:'Tajawal',sans-serif;}
    input,textarea,select{font-family:'Tajawal',sans-serif;text-align:right;}` : ''}
    .topbar { background:linear-gradient(${isRTL?'270deg':'90deg'},var(--qu-maroon-dark) 0%,var(--qu-maroon) 60%,var(--qu-maroon-light) 100%); }
    .sidebar { background:linear-gradient(180deg,var(--qu-maroon-dark) 0%,var(--qu-maroon) 100%); ${isRTL?'right':'left'}:0; top:0; position:fixed; height:100vh; width:240px; z-index:50; }
    .sidebar-link { transition:all 0.2s; border-${isRTL?'right':'left'}:3px solid transparent; }
    .sidebar-link:hover,.sidebar-link.active { background:rgba(255,255,255,0.12); border-${isRTL?'right':'left'}-color:var(--qu-gold); color:white; }
    .sidebar-link.active { background:rgba(255,255,255,0.18); }
    .card { background:white; border-radius:12px; box-shadow:0 2px 8px rgba(0,0,0,0.06); transition:box-shadow 0.2s,transform 0.2s; }
    .card:hover { box-shadow:0 8px 24px rgba(139,26,47,0.12); transform:translateY(-2px); }
    .btn-primary { background:linear-gradient(135deg,var(--qu-maroon),var(--qu-maroon-light)); color:white; transition:all 0.2s; }
    .btn-primary:hover { background:linear-gradient(135deg,var(--qu-maroon-dark),var(--qu-maroon)); box-shadow:0 4px 12px rgba(139,26,47,0.35); transform:translateY(-1px); }
    .btn-gold { background:linear-gradient(135deg,var(--qu-gold),#DBA93C); color:white; transition:all 0.2s; }
    .form-card { border-${isRTL?'right':'left'}:4px solid var(--qu-gold); }
    .page-content { animation:fadeIn 0.3s ease; }
    @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
    ::-webkit-scrollbar{width:6px} ::-webkit-scrollbar-track{background:#F1F1F1} ::-webkit-scrollbar-thumb{background:#C4B5C0;border-radius:3px}
    .sidebar-overlay{display:none}
    @media(max-width:768px){
      .sidebar{transform:translateX(${isRTL?'100%':'-100%'});transition:transform 0.3s}
      .sidebar.open{transform:translateX(0)}
      .sidebar-overlay.active{display:block;position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:40}
      .main-wrap{margin-${isRTL?'right':'left'}:0!important}
    }
  </style>
</head>
<body>
<div class="sidebar-overlay" id="sOverlay" onclick="document.getElementById('sSidebar').classList.toggle('open');this.classList.toggle('active')"></div>

<!-- Sidebar -->
<aside class="sidebar flex flex-col shadow-2xl" id="sSidebar">
  <div class="px-5 py-4 border-b border-white/10">
    <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
      <div class="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
        <i class="fas fa-university text-white"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <p class="text-white font-bold text-sm">${isRTL?'جامعة قطر':'Qatar University'}</p>
        <p class="text-white/60 text-xs">${isRTL?'بوابة الموظفين':'Staff Portal'}</p>
      </div>
    </div>
  </div>
  <nav class="flex-1 px-3 py-4 overflow-y-auto">
    <p class="text-white/40 text-xs uppercase tracking-widest px-3 mb-2 font-semibold ${isRTL?'text-right':''}">${isRTL?'القائمة':'Menu'}</p>
    ${navItems.map(item => `
    <a href="${item.href}?lang=${lang}" class="sidebar-link ${activePage===item.page?'active':''} flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm mb-1 ${isRTL?'flex-row-reverse':''}">
      <i class="fas ${item.icon} w-5 text-center flex-shrink-0"></i>
      <span>${item.label}</span>
    </a>`).join('')}
    <div class="border-t border-white/10 mt-4 pt-4">
      <button onclick="staffLogout('${lang}')" class="sidebar-link w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 text-sm ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-sign-out-alt w-5 text-center flex-shrink-0"></i>
        <span>${isRTL?'تسجيل الخروج':'Logout'}</span>
      </button>
    </div>
  </nav>
  <div class="px-5 py-3 border-t border-white/10 text-center">
    <p class="text-white/40 text-xs">© 2025 ${isRTL?'جامعة قطر':'Qatar University'}</p>
  </div>
</aside>

<!-- Main -->
<div class="main-wrap ${isRTL?'md:mr-60':'md:ml-60'} flex flex-col min-h-screen">
  <!-- Topbar -->
  <header class="topbar sticky top-0 z-30 flex items-center gap-3 px-4 md:px-6 py-3 shadow-md">
    <button onclick="document.getElementById('sSidebar').classList.toggle('open');document.getElementById('sOverlay').classList.toggle('active')" class="md:hidden text-white/80 hover:text-white p-1">
      <i class="fas fa-bars text-lg"></i>
    </button>
    <div class="hidden md:flex items-center text-white/70 text-sm ${isRTL?'flex-row-reverse':''}">
      <span class="text-white/90 font-medium">${isRTL?'بوابة موظفي جامعة قطر':'QU Staff Portal'}</span>
    </div>
    <div class="flex-1"></div>
    <!-- User badge -->
    <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
      <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
        <i class="fas fa-user text-white text-sm"></i>
      </div>
      <span id="staffUserLabel" class="text-white/80 text-sm hidden md:block"></span>
    </div>
    <!-- Lang toggle -->
    <button onclick="(()=>{const u=new URL(window.location.href);u.searchParams.set('lang','${otherLang}');window.location.href=u.toString()})()" 
      class="text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/30 bg-white/10 hover:bg-white/20 transition flex-shrink-0">
      ${t.toggleLang}
    </button>
  </header>

  <main class="flex-1 p-4 md:p-6">
    <div class="page-content" dir="${t.dir}">
      ${content}
    </div>
  </main>

  <footer class="bg-white border-t border-gray-100 px-6 py-3 text-center text-xs text-gray-400">
    ${isRTL ? 'جامعة قطر – قسم الرواتب والموارد البشرية &nbsp;|&nbsp; payroll@qu.edu.qa &nbsp;|&nbsp; داخلي 4100' : 'Qatar University – Payroll & HR Department &nbsp;|&nbsp; payroll@qu.edu.qa &nbsp;|&nbsp; Ext. 4100'}
  </footer>
</div>

<!-- Back to top -->
<button id="s_btt" onclick="window.scrollTo({top:0,behavior:'smooth'})"
  class="fixed bottom-6 ${isRTL?'left-6':'right-6'} z-50 w-10 h-10 rounded-full shadow-lg flex items-center justify-center text-white opacity-0 pointer-events-none transition-all hover:scale-110"
  style="background:var(--qu-maroon)"><i class="fas fa-arrow-up text-sm"></i></button>

<script>
  // ── Auth guard ──
  (function(){
    const sess = localStorage.getItem('staffSession');
    if (!sess && !window.location.pathname.includes('staff-login')) {
      window.location.href = '/staff-login?lang=${lang}';
    } else if (sess) {
      try {
        const data = JSON.parse(sess);
        const el = document.getElementById('staffUserLabel');
        if (el) el.textContent = data.username || '';
      } catch(e) {}
    }
  })();
  function staffLogout(lang) {
    localStorage.removeItem('staffSession');
    window.location.href = '/staff-login?lang=' + lang;
  }
  // ── Back to top ──
  const _sbtt = document.getElementById('s_btt');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 250) { _sbtt.classList.remove('opacity-0','pointer-events-none'); _sbtt.classList.add('opacity-100'); }
    else { _sbtt.classList.add('opacity-0','pointer-events-none'); _sbtt.classList.remove('opacity-100'); }
  });
</script>
</body>
</html>`
}

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF LOGIN  /staff-login
// ─────────────────────────────────────────────────────────────────────────────
app.get('/staff-login', (c) => {
  const lang = getLang(c)
  const isRTL = lang === 'ar'
  const otherLang: Lang = lang === 'en' ? 'ar' : 'en'
  const err = c.req.query('error') === '1'

  return c.html(`<!DOCTYPE html>
<html lang="${lang}" dir="${isRTL?'rtl':'ltr'}">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${isRTL?'تسجيل الدخول – بوابة موظفي جامعة قطر':'Staff Login – QU Payroll Portal'}</title>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css"/>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    :root{--qu-maroon:#8B1A2F;--qu-gold:#C4922A}
    body{font-family:${isRTL?"'Cairo','Tajawal',sans-serif":"'Segoe UI',sans-serif"};background:linear-gradient(135deg,#6B1223 0%,#8B1A2F 50%,#A52840 100%);min-height:100vh;direction:${isRTL?'rtl':'ltr'}}
    .login-card{background:white;border-radius:20px;box-shadow:0 25px 60px rgba(0,0,0,0.3)}
    .input-field{border:2px solid #E5E7EB;border-radius:10px;padding:11px 14px;width:100%;font-size:14px;transition:border-color 0.2s;outline:none;${isRTL?'text-align:right;font-family:Tajawal,sans-serif':''}}
    .input-field:focus{border-color:#8B1A2F;box-shadow:0 0 0 3px rgba(139,26,47,0.12)}
    .btn-login{background:linear-gradient(135deg,#8B1A2F,#A52840);color:white;border:none;border-radius:10px;padding:12px 24px;width:100%;font-size:15px;font-weight:700;cursor:pointer;transition:all 0.2s;${isRTL?'font-family:Tajawal,sans-serif':''}}
    .btn-login:hover{background:linear-gradient(135deg,#6B1223,#8B1A2F);box-shadow:0 6px 20px rgba(139,26,47,0.4);transform:translateY(-1px)}
    .btn-login:disabled{opacity:0.7;cursor:not-allowed;transform:none}
    .error-msg{background:#FEE2E2;color:#991B1B;border-radius:8px;padding:10px 14px;font-size:13px;display:flex;align-items:center;gap:8px;${isRTL?'font-family:Tajawal,sans-serif':''}}
  </style>
</head>
<body class="flex items-center justify-center p-4">
  <div class="w-full max-w-md">
    <!-- Header -->
    <div class="text-center mb-8">
      <div class="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-4 shadow-lg">
        <i class="fas fa-university text-white text-3xl"></i>
      </div>
      <h1 class="text-white text-2xl font-bold">${isRTL?'جامعة قطر':'Qatar University'}</h1>
      <p class="text-white/70 text-sm mt-1">${isRTL?'بوابة خدمات الرواتب – للموظفين':'Payroll Services Portal – Staff Access'}</p>
    </div>

    <!-- Card -->
    <div class="login-card p-8">
      <div class="text-center mb-6">
        <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3" style="background:rgba(139,26,47,0.08)">
          <i class="fas fa-lock text-2xl" style="color:var(--qu-maroon)"></i>
        </div>
        <h2 class="text-xl font-bold text-gray-800">${isRTL?'تسجيل الدخول':'Sign In'}</h2>
        <p class="text-gray-400 text-sm mt-1">${isRTL?'أدخل بيانات الدخول الخاصة بك':'Enter your portal credentials'}</p>
      </div>

      ${err ? `<div class="error-msg mb-4"><i class="fas fa-exclamation-circle"></i>${isRTL?'اسم المستخدم أو كلمة المرور غير صحيحة.':'Incorrect username or password.'}</div>` : ''}

      <form id="loginForm" onsubmit="doLogin(event)">
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'رقم الموظف / اسم المستخدم':'Employee ID / Username'}</label>
          <div class="relative">
            <input type="text" id="uname" name="username" autocomplete="username"
              placeholder="${isRTL?'مثال: QU-12345 أو staff':'e.g. QU-12345 or staff'}"
              class="input-field ${isRTL?'pr-10':'pl-10'}" required/>
            <i class="fas fa-user absolute ${isRTL?'right-3':'left-3'} top-3.5 text-gray-400"></i>
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'كلمة المرور':'Password'}</label>
          <div class="relative">
            <input type="password" id="pwd" name="password" autocomplete="current-password"
              placeholder="${isRTL?'أدخل كلمة المرور':'Enter your password'}"
              class="input-field ${isRTL?'pr-10':'pl-10'}" required/>
            <i class="fas fa-lock absolute ${isRTL?'right-3':'left-3'} top-3.5 text-gray-400"></i>
            <button type="button" onclick="togglePwd()" class="absolute ${isRTL?'left-3':'right-3'} top-3 text-gray-400 hover:text-gray-600">
              <i class="fas fa-eye text-sm" id="eyeIcon"></i>
            </button>
          </div>
        </div>
        <button type="submit" id="loginBtn" class="btn-login">
          <i class="fas fa-sign-in-alt ${isRTL?'ml-2':'mr-2'}"></i>${isRTL?'دخول':'Sign In'}
        </button>
      </form>

      <div class="mt-5 p-3 rounded-lg text-xs text-gray-500 ${isRTL?'text-right':''}" style="background:#F9FAFB;border:1px solid #E5E7EB">
        <i class="fas fa-info-circle ${isRTL?'ml-1':'mr-1'}" style="color:var(--qu-maroon)"></i>
        ${isRTL
          ? 'هذه البوابة مخصصة لموظفي جامعة قطر. للمساعدة تواصل مع قسم الرواتب على <strong>payroll@qu.edu.qa</strong>'
          : 'This portal is for Qatar University staff. For assistance contact <strong>payroll@qu.edu.qa</strong>'}
      </div>
    </div>

    <!-- Lang toggle -->
    <div class="text-center mt-6">
      <a href="/staff-login?lang=${otherLang}" class="text-white/70 hover:text-white text-sm transition">
        <i class="fas fa-globe mr-1"></i>${lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية'}
      </a>
    </div>
  </div>

  <script>
    // Check if already logged in
    if (localStorage.getItem('staffSession')) {
      window.location.href = '/staff?lang=${lang}';
    }

    // Known users (client-side check for demo – in production use server-side auth)
    const USERS = ${JSON.stringify(STAFF_USERS)};

    function doLogin(e) {
      e.preventDefault();
      const btn = document.getElementById('loginBtn');
      const u = document.getElementById('uname').value.trim().toLowerCase();
      const p = document.getElementById('pwd').value;
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>${isRTL?'جاري التحقق...':'Verifying...'}';

      setTimeout(() => {
        if (USERS[u] && USERS[u] === p) {
          localStorage.setItem('staffSession', JSON.stringify({ username: u, loginAt: Date.now() }));
          window.location.href = '/staff?lang=${lang}';
        } else {
          window.location.href = '/staff-login?lang=${lang}&error=1';
        }
      }, 800);
    }

    function togglePwd() {
      const inp = document.getElementById('pwd');
      const icon = document.getElementById('eyeIcon');
      if (inp.type === 'password') { inp.type = 'text'; icon.className = 'fas fa-eye-slash text-sm'; }
      else { inp.type = 'password'; icon.className = 'fas fa-eye text-sm'; }
    }
  </script>
</body>
</html>`)
})

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF HOME  /staff
// ─────────────────────────────────────────────────────────────────────────────
app.get('/staff', (c) => {
  const lang  = getLang(c)
  const t     = T[lang]
  const isRTL = lang === 'ar'

  // ─── أحداث جامعة قطر الرسمية 2025 (التقويم الأكاديمي المعتمد) ────────────
  // المصدر: qu.edu.qa/ar/about/office-of-the-provost/office-of-academic-affairs/academic-calendar
  // الأنواع: university=حدث جامعي، salary=راتب، advance=سلفة، holiday=إجازة، event=فعالية
  const QU_EVENTS = [
    // ══ إجازات رسمية قطرية 2025 ══
    { date:'2025-01-01', type:'holiday', color:'#6B7280', icon:'fa-moon',             title: isRTL?'رأس السنة الميلادية':'New Year\'s Day', desc: isRTL?'إجازة رسمية':'Official Holiday' },
    { date:'2025-01-29', type:'holiday', color:'#6B7280', icon:'fa-star-and-crescent',title: isRTL?'المولد النبوي الشريف':'Prophet\'s Birthday', desc: isRTL?'إجازة رسمية':'Official Holiday' },
    { date:'2025-03-30', type:'holiday', color:'#D97706', icon:'fa-moon',             title: isRTL?'عيد الفطر المبارك – اليوم الأول':'Eid Al-Fitr – Day 1', desc: isRTL?'بداية إجازة عيد الفطر':'Eid Al-Fitr Break Starts' },
    { date:'2025-03-31', type:'holiday', color:'#D97706', icon:'fa-moon',             title: isRTL?'عيد الفطر المبارك – اليوم الثاني':'Eid Al-Fitr – Day 2', desc: isRTL?'إجازة عيد الفطر':'Eid Al-Fitr Holiday' },
    { date:'2025-04-01', type:'holiday', color:'#D97706', icon:'fa-moon',             title: isRTL?'عيد الفطر المبارك – اليوم الثالث':'Eid Al-Fitr – Day 3', desc: isRTL?'إجازة عيد الفطر':'Eid Al-Fitr Holiday' },
    { date:'2025-04-02', type:'holiday', color:'#D97706', icon:'fa-moon',             title: isRTL?'عيد الفطر المبارك – اليوم الرابع':'Eid Al-Fitr – Day 4', desc: isRTL?'إجازة عيد الفطر موسعة':'Extended Eid Break' },
    { date:'2025-06-06', type:'holiday', color:'#059669', icon:'fa-moon',             title: isRTL?'عيد الأضحى المبارك – اليوم الأول':'Eid Al-Adha – Day 1', desc: isRTL?'بداية إجازة عيد الأضحى':'Eid Al-Adha Break Starts' },
    { date:'2025-06-07', type:'holiday', color:'#059669', icon:'fa-moon',             title: isRTL?'عيد الأضحى المبارك – اليوم الثاني':'Eid Al-Adha – Day 2', desc: isRTL?'إجازة عيد الأضحى':'Eid Al-Adha Holiday' },
    { date:'2025-06-08', type:'holiday', color:'#059669', icon:'fa-moon',             title: isRTL?'عيد الأضحى المبارك – اليوم الثالث':'Eid Al-Adha – Day 3', desc: isRTL?'إجازة عيد الأضحى':'Eid Al-Adha Holiday' },
    { date:'2025-06-09', type:'holiday', color:'#059669', icon:'fa-moon',             title: isRTL?'عيد الأضحى المبارك – اليوم الرابع':'Eid Al-Adha – Day 4', desc: isRTL?'إجازة عيد الأضحى موسعة':'Extended Eid Break' },
    { date:'2025-06-26', type:'holiday', color:'#6B7280', icon:'fa-star-and-crescent',title: isRTL?'رأس السنة الهجرية 1447':'Islamic New Year 1447', desc: isRTL?'إجازة رسمية':'Official Holiday' },
    { date:'2025-12-18', type:'holiday', color:'#8B1A2F', icon:'fa-flag',             title: isRTL?'اليوم الوطني لدولة قطر':'Qatar National Day', desc: isRTL?'احتفال اليوم الوطني القطري':'Qatar National Day Celebration' },
    { date:'2025-12-19', type:'holiday', color:'#8B1A2F', icon:'fa-flag',             title: isRTL?'يوم الرياضة الوطني':'National Sport Day', desc: isRTL?'إجازة يوم الرياضة':'National Sport Day Holiday' },

    // ══ التقويم الأكاديمي لجامعة قطر 2025 ══
    // ── الفصل الثاني (ربيع 2025)
    { date:'2025-01-12', type:'university', color:'#7C3AED', icon:'fa-calendar-check', title: isRTL?'آخر يوم للتسجيل – الفصل الثاني':'Last Day to Register – Spring 2025', desc: isRTL?'الموعد النهائي لإضافة/حذف المواد':'Add/Drop Deadline' },
    { date:'2025-01-19', type:'university', color:'#7C3AED', icon:'fa-play-circle',    title: isRTL?'بداية الفصل الدراسي الثاني 2025':'Spring Semester 2025 Begins', desc: isRTL?'أول يوم دراسة للفصل الثاني':'First Day of Classes – Spring 2025' },
    { date:'2025-02-09', type:'university', color:'#7C3AED', icon:'fa-calendar-day',   title: isRTL?'آخر يوم للانسحاب بلا رسوم':'Last Day to Withdraw – No Penalty', desc: isRTL?'انسحاب بدون تسجيل W في السجل':'Withdrawal without W on transcript' },
    { date:'2025-03-16', type:'university', color:'#7C3AED', icon:'fa-calendar-minus', title: isRTL?'آخر يوم للانسحاب من المواد':'Last Day to Withdraw from Courses', desc: isRTL?'انسحاب مع تسجيل W في السجل الأكاديمي':'Withdrawal with W on academic record' },
    { date:'2025-03-01', type:'university', color:'#7C3AED', icon:'fa-folder-open',    title: isRTL?'فتح تسجيل الفصل الصيفي 2025':'Summer 2025 Registration Opens', desc: isRTL?'بدء تقديم طلبات التسجيل للصيف':'Summer semester registration starts' },
    { date:'2025-04-27', type:'university', color:'#7C3AED', icon:'fa-book-open',      title: isRTL?'بداية أسبوع المراجعة – الفصل الثاني':'Spring 2025 Study Week Begins', desc: isRTL?'أسبوع المراجعة النهائية':'Final Review Week' },
    { date:'2025-05-04', type:'university', color:'#7C3AED', icon:'fa-pencil-alt',     title: isRTL?'بداية الامتحانات النهائية – الفصل الثاني':'Spring 2025 Final Exams Begin', desc: isRTL?'فترة الامتحانات النهائية':'Final Examination Period' },
    { date:'2025-05-15', type:'university', color:'#7C3AED', icon:'fa-stop-circle',    title: isRTL?'نهاية الفصل الدراسي الثاني 2025':'Spring Semester 2025 Ends', desc: isRTL?'آخر يوم من الامتحانات النهائية':'Last Day of Final Exams' },
    { date:'2025-05-25', type:'university', color:'#C4922A', icon:'fa-graduation-cap', title: isRTL?'حفل تخرج جامعة قطر 2025':'Qatar University Graduation Ceremony 2025', desc: isRTL?'احتفال التخرج السنوي لدفعة 2025':'Annual Graduation for Class of 2025' },
    // ── الفصل الصيفي (صيف 2025)
    { date:'2025-05-25', type:'university', color:'#0891B2', icon:'fa-sun',            title: isRTL?'بداية الفصل الصيفي 2025':'Summer Semester 2025 Begins', desc: isRTL?'أول يوم للدراسة الصيفية':'First Day – Summer 2025' },
    { date:'2025-07-31', type:'university', color:'#0891B2', icon:'fa-stop-circle',    title: isRTL?'نهاية الفصل الصيفي 2025':'Summer Semester 2025 Ends', desc: isRTL?'آخر يوم امتحانات الفصل الصيفي':'Last Day of Summer Final Exams' },
    // ── الفصل الأول (خريف 2025–2026)
    { date:'2025-08-10', type:'university', color:'#7C3AED', icon:'fa-folder-open',    title: isRTL?'فتح تسجيل الفصل الأول 2025-2026':'Fall 2025–26 Registration Opens', desc: isRTL?'بدء تسجيل الفصل الخريفي':'Fall semester registration starts' },
    { date:'2025-08-24', type:'university', color:'#7C3AED', icon:'fa-play-circle',    title: isRTL?'بداية الفصل الأول 2025-2026':'Fall Semester 2025–2026 Begins', desc: isRTL?'أول يوم دراسة للفصل الأول':'First Day of Classes – Fall 2025' },
    { date:'2025-09-01', type:'university', color:'#7C3AED', icon:'fa-chalkboard-teacher', title: isRTL?'اجتماع هيئة التدريس والموظفين':'Faculty & Staff Assembly Meeting', desc: isRTL?'الاجتماع العام لأعضاء الهيئة التدريسية':'Annual Faculty Assembly' },
    { date:'2025-09-14', type:'university', color:'#7C3AED', icon:'fa-calendar-day',   title: isRTL?'آخر يوم للانسحاب بلا رسوم – الفصل الأول':'Last Day to Withdraw – No Penalty (Fall)', desc: isRTL?'الانسحاب بدون تأثير على المعدل':'Withdrawal without GPA impact' },
    { date:'2025-10-19', type:'university', color:'#7C3AED', icon:'fa-calendar-minus', title: isRTL?'آخر يوم للانسحاب من المواد – الفصل الأول':'Last Day to Withdraw (Fall 2025)', desc: isRTL?'انسحاب مع W في السجل الأكاديمي':'Withdrawal with W recorded' },
    { date:'2025-10-26', type:'university', color:'#7C3AED', icon:'fa-folder-open',    title: isRTL?'فتح تسجيل الفصل الثاني 2025-2026':'Spring 2026 Registration Opens', desc: isRTL?'بدء تسجيل الفصل الربيعي':'Spring semester registration starts' },
    { date:'2025-11-30', type:'university', color:'#7C3AED', icon:'fa-book-open',      title: isRTL?'بداية أسبوع المراجعة – الفصل الأول':'Fall 2025 Study Week Begins', desc: isRTL?'أسبوع المراجعة النهائية للفصل الأول':'Final Review Week – Fall 2025' },
    { date:'2025-12-07', type:'university', color:'#7C3AED', icon:'fa-pencil-alt',     title: isRTL?'بداية الامتحانات النهائية – الفصل الأول':'Fall 2025 Final Exams Begin', desc: isRTL?'فترة الامتحانات النهائية للفصل الأول':'Final Examination Period – Fall' },
    { date:'2025-12-20', type:'university', color:'#7C3AED', icon:'fa-stop-circle',    title: isRTL?'نهاية الفصل الأول 2025-2026':'Fall Semester 2025–2026 Ends', desc: isRTL?'نهاية الفصل الأول وبداية الإجازة الشتوية':'End of Fall Semester' },
    // ── فعاليات وأحداث جامعية
    { date:'2025-02-16', type:'event', color:'#DB2777', icon:'fa-trophy',              title: isRTL?'يوم القدرات الطلابية':'Student Talents Day', desc: isRTL?'احتفالية القدرات والإبداع الطلابي':'Annual Student Talents Celebration' },
    { date:'2025-03-10', type:'event', color:'#DB2777', icon:'fa-flask',               title: isRTL?'معرض القطر للبحث العلمي':'Qatar Research Exhibition', desc: isRTL?'معرض جامعة قطر للبحث والابتكار':'QU Research & Innovation Exhibition' },
    { date:'2025-04-06', type:'event', color:'#DB2777', icon:'fa-handshake',           title: isRTL?'يوم المجتمع والشراكات':'Community & Partnership Day', desc: isRTL?'فعالية الشراكة مع المجتمع والقطاع الخاص':'QU Community Partnership Event' },
    { date:'2025-10-05', type:'event', color:'#DB2777', icon:'fa-star',               title: isRTL?'يوم جامعة قطر المفتوح':'Qatar University Open Day', desc: isRTL?'اليوم المفتوح للطلاب الجدد والأسر':'Open Day for Prospective Students' },
    { date:'2025-11-12', type:'event', color:'#DB2777', icon:'fa-book',               title: isRTL?'معرض الكتاب الجامعي':'University Book Fair', desc: isRTL?'معرض الكتاب السنوي بجامعة قطر':'Annual University Book Fair' },

    // ══ مواعيد صرف الرواتب 2025 ══
    { date:'2025-01-28', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب يناير 2025':'January 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-02-27', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب فبراير 2025':'February 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-03-27', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب مارس 2025':'March 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-04-28', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب أبريل 2025':'April 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-05-27', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب مايو 2025':'May 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-06-26', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب يونيو 2025':'June 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-07-28', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب يوليو 2025':'July 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-08-27', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب أغسطس 2025':'August 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-09-28', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب سبتمبر 2025':'September 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-10-28', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب أكتوبر 2025':'October 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-11-27', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب نوفمبر 2025':'November 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },
    { date:'2025-12-25', type:'salary', color:'#8B1A2F', icon:'fa-money-bill-wave', title: isRTL?'صرف راتب ديسمبر 2025':'December 2025 Salary', desc: isRTL?'موعد إيداع الراتب الشهري':'Monthly Salary Deposit Date', amount: isRTL?'راتب كامل':'Full Salary' },

    // ══ مواعيد السلف والبدلات 2025 ══
    { date:'2025-03-20', type:'advance', color:'#D97706', icon:'fa-hand-holding-usd', title: isRTL?'آخر موعد لتقديم طلب سلفة عيد الفطر':'Eid Al-Fitr Advance – Request Deadline', desc: isRTL?'الموعد النهائي لتقديم طلب السلفة':'Advance Request Deadline' },
    { date:'2025-03-25', type:'advance', color:'#D97706', icon:'fa-hand-holding-usd', title: isRTL?'صرف سلفة عيد الفطر':'Eid Al-Fitr Advance Payment', desc: isRTL?'موعد إيداع سلفة عيد الفطر في الحساب':'Eid Al-Fitr advance deposited', amount: isRTL?'سلفة عيد':'Eid Advance' },
    { date:'2025-05-28', type:'advance', color:'#D97706', icon:'fa-hand-holding-usd', title: isRTL?'آخر موعد لتقديم طلب سلفة عيد الأضحى':'Eid Al-Adha Advance – Request Deadline', desc: isRTL?'الموعد النهائي لتقديم طلب السلفة':'Advance Request Deadline' },
    { date:'2025-06-04', type:'advance', color:'#D97706', icon:'fa-hand-holding-usd', title: isRTL?'صرف سلفة عيد الأضحى':'Eid Al-Adha Advance Payment', desc: isRTL?'موعد إيداع سلفة عيد الأضحى في الحساب':'Eid Al-Adha advance deposited', amount: isRTL?'سلفة عيد':'Eid Advance' },
    { date:'2025-12-10', type:'advance', color:'#D97706', icon:'fa-hand-holding-usd', title: isRTL?'آخر موعد لطلب سلفة اليوم الوطني':'National Day Advance – Request Deadline', desc: isRTL?'الموعد النهائي لطلب سلفة اليوم الوطني':'National Day advance request deadline' },
    { date:'2025-12-15', type:'advance', color:'#D97706', icon:'fa-hand-holding-usd', title: isRTL?'صرف سلفة اليوم الوطني':'National Day Advance Payment', desc: isRTL?'موعد صرف سلفة اليوم الوطني':'National Day advance deposited', amount: isRTL?'سلفة وطنية':'National Day Advance' },
  ]

  // إعلانات افتراضية – تُستبدل من localStorage
  const defaultAnn = isRTL ? [
    { icon:'fa-money-bill-wave', bg:'rgba(139,26,47,0.08)', iconColor:'var(--qu-maroon)', title:'موعد صرف رواتب أبريل 2025', date:'28 أبريل 2025', badge:'راتب', bs:'#FEE2E2', bc:'#991B1B' },
    { icon:'fa-star-and-crescent', bg:'rgba(196,146,42,0.08)', iconColor:'var(--qu-gold)', title:'سلفة عيد الفطر – الموعد النهائي', date:'10 أبريل 2025', badge:'سلفة', bs:'#FEF3C7', bc:'#92400E' },
    { icon:'fa-file-alt', bg:'rgba(16,185,129,0.08)', iconColor:'#10B981', title:'تحديث نموذج بدل السكن (المراجعة 3)', date:'8 أبريل 2025', badge:'نماذج', bs:'#D1FAE5', bc:'#065F46' },
    { icon:'fa-file-contract', bg:'rgba(220,38,38,0.08)', iconColor:'#DC2626', title:'سياسة حساب العمل الإضافي الجديدة – تسري من مايو 2025', date:'5 أبريل 2025', badge:'سياسة', bs:'#FEE2E2', bc:'#991B1B' },
  ] : [
    { icon:'fa-money-bill-wave', bg:'rgba(139,26,47,0.08)', iconColor:'var(--qu-maroon)', title:'April 2025 Salary Processing Date', date:'April 28, 2025', badge:'Salary', bs:'#FEE2E2', bc:'#991B1B' },
    { icon:'fa-star-and-crescent', bg:'rgba(196,146,42,0.08)', iconColor:'var(--qu-gold)', title:'Eid Al-Fitr Advance – Request Deadline', date:'April 10, 2025', badge:'Advance', bs:'#FEF3C7', bc:'#92400E' },
    { icon:'fa-file-alt', bg:'rgba(16,185,129,0.08)', iconColor:'#10B981', title:'Updated Housing Allowance Form (Rev. 3)', date:'April 8, 2025', badge:'Forms', bs:'#D1FAE5', bc:'#065F46' },
    { icon:'fa-file-contract', bg:'rgba(220,38,38,0.08)', iconColor:'#DC2626', title:'New Overtime Calculation Policy – Effective May 2025', date:'April 5, 2025', badge:'Policy', bs:'#FEE2E2', bc:'#991B1B' },
  ]

  // ─── بناء JSON string قبل template literal لتجنب Vite variable renaming ───
  const QU_EVENTS_JSON: string = JSON.stringify(QU_EVENTS)

  const content = `
  <style>
    a.sq-card{text-decoration:none}
    a.sq-card:hover .sq-icon{transform:scale(1.1)}
    .sq-icon{transition:transform 0.2s}
    .cal-row-current{background:linear-gradient(90deg,#FFFBEB,#FEF9E7);border-left:3px solid var(--qu-gold)}
    .ticker-staff{animation:ticker-st 28s linear infinite${isRTL?' reverse':''}}
    @keyframes ticker-st{0%{transform:translateX(100%)}100%{transform:translateX(-100%)}}
    .badge-dot{width:8px;height:8px;border-radius:50%;display:inline-block;margin-inline-end:5px}
    .ann-item:hover{background:#FAFAFA}


    /* ═══ اليوم الوطني القطري ═══ */
    @keyframes nd-shimmer{0%,100%{opacity:.55}50%{opacity:1}}
    @keyframes nd-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-8px) rotate(2deg)}}
    @keyframes nd-pulse-ring{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.55);opacity:0}}
    @keyframes nd-star-spin{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(180deg) scale(1.15)}100%{transform:rotate(360deg) scale(1)}}
    @keyframes nd-slide-in{0%{opacity:0;transform:translateY(-22px)}100%{opacity:1;transform:translateY(0)}}
    @keyframes nd-ticker{0%{transform:translateX(100%)}100%{transform:translateX(-110%)}}
    @keyframes nd-ticker-rtl{0%{transform:translateX(-100%)}100%{transform:translateX(110%)}}
    @keyframes confetti-fall{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(120px) rotate(720deg);opacity:0}}
    @keyframes nd-glow{0%,100%{box-shadow:0 0 18px rgba(139,26,47,.35),0 0 40px rgba(196,146,42,.2)}50%{box-shadow:0 0 32px rgba(139,26,47,.55),0 0 64px rgba(196,146,42,.4)}}

    #ndBanner{animation:nd-slide-in .6s ease both, nd-glow 3s ease-in-out infinite}
    .nd-flag-float{animation:nd-float 3.5s ease-in-out infinite}
    .nd-star{animation:nd-star-spin 6s linear infinite}
    .nd-shimmer{animation:nd-shimmer 2.5s ease-in-out infinite}
    .nd-ticker-wrap{overflow:hidden;white-space:nowrap}
    .nd-ticker-inner{display:inline-block;animation:${isRTL?'nd-ticker-rtl':'nd-ticker'} 18s linear infinite}
    .nd-confetti-wrap{position:absolute;inset:0;overflow:hidden;pointer-events:none;border-radius:inherit}
    .nd-confetti-piece{position:absolute;top:-8px;width:7px;height:7px;border-radius:1px;opacity:0;animation:confetti-fall linear infinite}
    .nd-pulse{position:absolute;inset:0;border-radius:inherit;border:2px solid rgba(196,146,42,.5);animation:nd-pulse-ring 2s ease-out infinite}
    .nd-badge{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(4px)}
  </style>

  <div dir="${isRTL?'rtl':'ltr'}" class="space-y-6">

    <!-- ══ NATIONAL DAY BANNER (18 Dec only) ══════════════════════════════ -->
    <div id="ndBanner" class="hidden relative rounded-2xl overflow-hidden"
         style="background:linear-gradient(135deg,#8B1A2F 0%,#5C0F1E 40%,#1a0a0e 100%);min-height:160px">

      <!-- confetti pieces -->
      <div class="nd-confetti-wrap" id="ndConfetti"></div>
      <!-- pulse ring -->
      <div class="nd-pulse"></div>

      <!-- الخط الذهبي السفلي -->
      <div class="absolute bottom-0 left-0 right-0 h-1.5"
           style="background:linear-gradient(90deg,transparent,#C4922A,#F0C040,#C4922A,transparent)"></div>

      <!-- محتوى البانر -->
      <div class="relative z-10 p-6 flex items-center gap-5 flex-wrap ${isRTL?'flex-row-reverse':''}">

        <!-- أيقونة العلم + تأثير -->
        <div class="relative flex-shrink-0">
          <div class="w-20 h-20 rounded-2xl flex items-center justify-center nd-flag-float"
               style="background:rgba(255,255,255,.1);border:2px solid rgba(255,255,255,.2)">
            <span class="text-5xl select-none">🇶🇦</span>
          </div>
          <div class="absolute -top-1 -${isRTL?'left':'right'}-1 w-5 h-5 rounded-full flex items-center justify-center"
               style="background:var(--qu-gold)">
            <i class="fas fa-star text-white nd-star" style="font-size:8px"></i>
          </div>
        </div>

        <!-- النص الرئيسي -->
        <div class="flex-1 min-w-0 ${isRTL?'text-right':''}">
          <div class="flex items-center gap-2 mb-1 flex-wrap ${isRTL?'flex-row-reverse justify-end':''}">
            <span class="nd-badge text-white text-xs font-bold px-3 py-1 rounded-full nd-shimmer">
              ${isRTL?'🎉 اليوم الوطني 2025':'🎉 National Day 2025'}
            </span>
            <span class="text-white/60 text-xs">${isRTL?'18 ديسمبر':'December 18'}</span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white leading-tight tracking-wide"
              style="text-shadow:0 2px 12px rgba(0,0,0,.5)">
            ${isRTL
              ? '🇶🇦 كل عام وقطر بخير'
              : '🇶🇦 Happy National Day Qatar'}
          </h2>
          <p class="text-white/75 text-sm mt-1.5 nd-shimmer" style="animation-delay:.4s">
            ${isRTL
              ? 'تهنئ إدارة الرواتب والموارد البشرية جميع الموظفين بمناسبة اليوم الوطني الخامس والخمسين'
              : 'HR & Payroll warmly congratulates all staff on Qatar\'s 55th National Day'}
          </p>
          <!-- شريط نص متحرك -->
          <div class="nd-ticker-wrap mt-3" style="max-width:480px">
            <span class="nd-ticker-inner text-xs font-semibold"
                  style="color:var(--qu-gold);letter-spacing:.5px">
              ${isRTL
                ? '★ مكتب الرواتب مغلق يوم 18 و19 ديسمبر بمناسبة اليوم الوطني &nbsp;★&nbsp; سيتم صرف سلفة اليوم الوطني في 15 ديسمبر &nbsp;★&nbsp; عيد وطن ومسيرة عز &nbsp;★'
                : '★ Payroll office closed Dec 18–19 for National Day &nbsp;★&nbsp; National Day advance credited Dec 15 &nbsp;★&nbsp; Proud to serve Qatar &nbsp;★'}
            </span>
          </div>
        </div>

        <!-- زر التقويم -->
        <div class="flex-shrink-0 flex flex-col items-center gap-2 ${isRTL?'items-end':'items-start'}">
          <button onclick="jumpToNationalDay()"
                  class="px-5 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition"
                  style="background:rgba(196,146,42,.85);border:1px solid rgba(255,255,255,.25)">
            <i class="fas fa-calendar-day"></i>
            ${isRTL?'عرض في التقويم':'View in Calendar'}
          </button>
          <span class="text-white/50 text-xs text-center">
            ${isRTL?'اليوم الوطني الـ 55':'55th National Day'}
          </span>
        </div>

      </div><!-- /content -->
    </div><!-- /ndBanner -->

    <script>
    (function(){
      /* ── هل اليوم 18 ديسمبر؟ ── */
      var now = new Date();
      var isNatDay = (now.getMonth()===11 && now.getDate()===18);
      if(!isNatDay) return;

      /* ── أظهر البانر ── */
      var banner = document.getElementById('ndBanner');
      banner.classList.remove('hidden');

      /* ── confetti ── */
      var wrap = document.getElementById('ndConfetti');
      var colors = ['#C4922A','#F0C040','#8B1A2F','#ffffff','#e8d5a0','#a0522d'];
      var shapes = ['◆','★','●','▲','■'];
      for(var i=0;i<28;i++){
        var el = document.createElement('span');
        el.className = 'nd-confetti-piece';
        el.textContent = shapes[i%shapes.length];
        el.style.left  = (Math.random()*100)+'%';
        el.style.color = colors[i%colors.length];
        el.style.fontSize = (8+Math.random()*7)+'px';
        el.style.animationDuration  = (3+Math.random()*5)+'s';
        el.style.animationDelay     = (Math.random()*6)+'s';
        wrap.appendChild(el);
      }
    })();

    /* ── اقفز لتاريخ 18 ديسمبر في التقويم ── */
    function jumpToNationalDay(){
      _fullCalYear  = 2025;
      _fullCalMonth = 11;
      openFullCal();
      setTimeout(function(){
        renderFullCal();
        setTimeout(function(){ openDayEvents('2025-12-18'); }, 350);
      }, 120);
    }
    </script>


    <!-- ══ WELCOME BANNER ══════════════════════════════════════════════════ -->
    <div class="rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap"
         style="background:linear-gradient(135deg,var(--qu-maroon) 0%,#6B0A22 100%)">
      <div class="${isRTL?'text-right':''}">
        <p class="text-white/70 text-sm mb-1">${isRTL?'مرحباً بك في':'Welcome to'}</p>
        <h1 class="text-2xl font-bold text-white">${isRTL?'بوابة موظفي جامعة قطر':'Qatar University Staff Portal'}</h1>
        <p class="text-white/60 text-sm mt-1">${isRTL?'خدمات الرواتب والبدلات والدعم الوظيفي':'Payroll, Allowances & HR Support Services'}</p>
      </div>
      <div class="flex gap-3 flex-wrap">
        <a href="/staff-request?lang=${lang}" class="px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition sq-card"
           style="background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.3)">
          <i class="fas fa-plus-circle"></i>${isRTL?'طلب خدمة جديد':'New Service Request'}
        </a>
        <a href="/staff-forms?lang=${lang}" class="px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 hover:opacity-90 transition sq-card"
           style="background:var(--qu-gold);color:white">
          <i class="fas fa-file-download"></i>${isRTL?'تحميل نموذج':'Download Form'}
        </a>
      </div>
    </div>

    <!-- ══ NEWS TICKER ═════════════════════════════════════════════════════ -->
    <div class="rounded-xl overflow-hidden" style="background:var(--qu-gold)">
      <div class="py-2 px-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <span class="text-white font-bold text-xs uppercase tracking-wide whitespace-nowrap flex-shrink-0">
          <i class="fas fa-bullhorn ${isRTL?'ml-1.5':'mr-1.5'}"></i>${isRTL?'آخر الأخبار:':'Latest News:'}
        </span>
        <div class="overflow-hidden flex-1">
          <div class="ticker-staff text-white text-xs whitespace-nowrap" id="staffTicker">
            ${isRTL
              ? 'سيتم إيداع رواتب مايو 2025 بتاريخ 27 مايو 2025 &nbsp;|&nbsp; سياسة العمل الإضافي الجديدة تسري من 1 مايو 2025 &nbsp;|&nbsp; تم تحديث نموذج بدل السكن – يرجى تحميل الإصدار الأحدث &nbsp;|&nbsp; مكتب الرواتب مفتوح الأحد–الخميس 7:30 ص – 3:30 م'
              : 'May 2025 salaries credited on May 27 &nbsp;|&nbsp; New overtime policy effective May 1, 2025 &nbsp;|&nbsp; Housing allowance form updated – download latest version &nbsp;|&nbsp; Payroll office open Sun–Thu 7:30 AM – 3:30 PM'}
          </div>
        </div>
      </div>
    </div>
    <script>
    (function(){
      try{
        const s=JSON.parse(localStorage.getItem('qu_news_ticker'));
        if(s&&s.length) document.getElementById('staffTicker').innerHTML=s.join(' &nbsp;|&nbsp; ');
      }catch(e){}
    })();
    </script>

    <!-- ══ STATS ══════════════════════════════════════════════════════════ -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      ${[
        { icon:'fa-file-alt',        color:'var(--qu-maroon)', bg:'rgba(139,26,47,0.08)', value:'18', label:isRTL?'نموذج متاح':'Forms Available' },
        { icon:'fa-concierge-bell',  color:'#7C3AED',          bg:'rgba(124,58,237,0.08)', value:'6',  label:isRTL?'أنواع خدمات':'Service Types' },
        { icon:'fa-envelope',        color:'#10B981',           bg:'rgba(16,185,129,0.08)', value:'6',  label:isRTL?'قسم للتواصل':'Departments' },
        { icon:'fa-clock',           color:'var(--qu-gold)',    bg:'rgba(196,146,42,0.08)', value:'1',  label:isRTL?'يوم معالجة SLA':'SLA Day' },
      ].map(s=>`
      <div class="card p-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${s.bg}">
          <i class="fas ${s.icon} text-lg" style="color:${s.color}"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-xl font-bold text-gray-800">${s.value}</p>
          <p class="text-xs text-gray-500 leading-tight">${s.label}</p>
        </div>
      </div>`).join('')}
    </div>

    <!-- ══ MAIN GRID (أخبار + تقويم) ════════════════════════════════════ -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <!-- ── آخر الأخبار والإعلانات ─────────────────────────────────── -->
      <div class="lg:col-span-2 card p-5">
        <div class="flex items-center justify-between mb-4">
          <h2 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <span class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(139,26,47,0.1)">
              <i class="fas fa-bullhorn text-sm" style="color:var(--qu-maroon)"></i>
            </span>
            ${isRTL?'آخر الأخبار والإعلانات':'Latest News & Announcements'}
          </h2>
          <span class="text-xs font-semibold px-2 py-1 rounded-full text-white" style="background:var(--qu-maroon)" id="staffAnnBadge">4</span>
        </div>
        <div class="divide-y divide-gray-50" id="staffAnnList">
          ${defaultAnn.map(a=>`
          <div class="ann-item flex items-center gap-3 py-3 px-2 rounded-xl transition cursor-pointer ${isRTL?'flex-row-reverse':''}">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${a.bg}">
              <i class="fas ${a.icon} text-sm" style="color:${a.iconColor}"></i>
            </div>
            <div class="flex-1 min-w-0 ${isRTL?'text-right':''}">
              <p class="text-sm font-semibold text-gray-800">${a.title}</p>
              <p class="text-xs text-gray-400 mt-0.5"><i class="fas fa-calendar-alt me-1"></i>${a.date}</p>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap"
              style="background:${a.bs};color:${a.bc}">${a.badge}</span>
          </div>`).join('')}
        </div>
      </div>

      <!-- ── التقويم المصغّر (الشهر الحالي) ───────────────────────── -->
      <div class="card p-4" id="miniCalCard">
        <div class="flex items-center justify-between mb-3">
          <button onclick="calPrev()" class="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition text-xs"><i class="fas fa-chevron-${isRTL?'right':'left'}"></i></button>
          <span class="text-sm font-bold text-gray-800" id="miniCalTitle"></span>
          <button onclick="calNext()" class="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition text-xs"><i class="fas fa-chevron-${isRTL?'left':'right'}"></i></button>
        </div>
        <div class="grid grid-cols-7 gap-0.5 mb-1" id="miniCalDayNames"></div>
        <div class="grid grid-cols-7 gap-0.5" id="miniCalGrid"></div>
        <div class="mt-2.5 pt-2.5 border-t border-gray-100 flex flex-wrap gap-1.5">
          <span class="text-xs flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:var(--qu-maroon)"></span>${isRTL?'راتب':'Salary'}</span>
          <span class="text-xs flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#D97706"></span>${isRTL?'سلفة/مهمة':'Advance'}</span>
          <span class="text-xs flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#7C3AED"></span>${isRTL?'جامعة':'Univ.'}</span>
          <span class="text-xs flex items-center gap-1"><span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#6B7280"></span>${isRTL?'إجازة':'Holiday'}</span>
        </div>
        <button onclick="openFullCal()" class="mt-2 w-full py-2 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-1.5 transition hover:opacity-90" style="background:linear-gradient(135deg,var(--qu-maroon),#6B0A22)">
          <i class="fas fa-expand-alt"></i>${isRTL?'عرض التقويم الكامل':'Full Calendar'}
        </button>
      </div>
    </div>

    <!-- ══ FULL CALENDAR SECTION ═══════════════════════════════════════════ -->
    <div id="fullCalSection" class="hidden">
      <div class="card p-5">
        <!-- Header -->
        <div class="flex items-center justify-between flex-wrap gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
          <div class="${isRTL?'text-right':''}">
            <h2 class="font-bold text-gray-800 text-lg flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <span class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.08)">
                <i class="fas fa-calendar-days text-base" style="color:var(--qu-maroon)"></i>
              </span>
              ${isRTL?'تقويم الأحداث والمواعيد':'Events & Appointments Calendar'}
            </h2>
            <p class="text-xs text-gray-400 mt-0.5 ${isRTL?'text-right':''}">${isRTL?'مواعيد الجامعة، الرواتب، طلباتي الشخصية':'University events, payroll dates & my requests'}</p>
          </div>
          <div class="flex items-center gap-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
            <!-- Filter Tabs -->
            <div class="flex rounded-xl overflow-hidden border border-gray-200 text-xs font-semibold" id="calFilterBtns">
              <button onclick="setCalFilter('all')" id="calF_all" class="px-3 py-1.5 transition bg-gray-800 text-white">${isRTL?'الكل':'All'}</button>
              <button onclick="setCalFilter('salary')" id="calF_salary" class="px-3 py-1.5 transition bg-white text-gray-600 hover:bg-gray-50 border-${isRTL?'r':'l'} border-gray-200">${isRTL?'رواتب':'Salary'}</button>
              <button onclick="setCalFilter('advance')" id="calF_advance" class="px-3 py-1.5 transition bg-white text-gray-600 hover:bg-gray-50 border-${isRTL?'r':'l'} border-gray-200">${isRTL?'سلف/مهام':'Advances'}</button>
              <button onclick="setCalFilter('university')" id="calF_university" class="px-3 py-1.5 transition bg-white text-gray-600 hover:bg-gray-50 border-${isRTL?'r':'l'} border-gray-200">${isRTL?'الجامعة':'University'}</button>
              <button onclick="setCalFilter('my')" id="calF_my" class="px-3 py-1.5 transition bg-white text-gray-600 hover:bg-gray-50 border-${isRTL?'r':'l'} border-gray-200">${isRTL?'طلباتي':'My Requests'}</button>
            </div>
            <!-- Nav -->
            <div class="flex items-center gap-1">
              <button onclick="fullCalPrev()" class="w-8 h-8 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 border border-gray-200 transition"><i class="fas fa-chevron-${isRTL?'right':'left'} text-xs"></i></button>
              <span class="text-sm font-bold text-gray-800 min-w-36 text-center" id="fullCalTitle"></span>
              <button onclick="fullCalNext()" class="w-8 h-8 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-100 border border-gray-200 transition"><i class="fas fa-chevron-${isRTL?'left':'right'} text-xs"></i></button>
            </div>
            <button onclick="goToToday()" class="px-3 py-1.5 rounded-xl text-xs font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 transition">${isRTL?'اليوم':'Today'}</button>
            <button onclick="closeFullCal()" class="w-8 h-8 rounded-xl flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"><i class="fas fa-compress-alt text-xs"></i></button>
          </div>
        </div>

        <!-- Day names row -->
        <div class="grid grid-cols-7 gap-1 mb-1" id="fullCalDayNames"></div>
        <!-- Calendar grid -->
        <div class="grid grid-cols-7 gap-1" id="fullCalGrid" style="min-height:340px"></div>

        <!-- Legend -->
        <div class="mt-3 pt-3 border-t border-gray-100 flex items-center flex-wrap gap-3 text-xs ${isRTL?'flex-row-reverse':''}">
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full" style="background:var(--qu-maroon)"></span>${isRTL?'صرف راتب':'Salary'}</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full" style="background:#D97706"></span>${isRTL?'سلفة / مهمة علمية':'Advance / Mission'}</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full" style="background:#7C3AED"></span>${isRTL?'حدث جامعي':'University Event'}</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full" style="background:#6B7280"></span>${isRTL?'إجازة رسمية':'Public Holiday'}</span>
          <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full" style="background:#0891B2"></span>${isRTL?'طلباتي':'My Requests'}</span>
        </div>
      </div>

      <!-- Upcoming Events List -->
      <div class="card p-5 mt-4">
        <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse text-right':''}">
          <i class="fas fa-list-ul text-sm" style="color:var(--qu-maroon)"></i>
          ${isRTL?'الأحداث القادمة (30 يوم)':'Upcoming Events (Next 30 Days)'}
        </h3>
        <div id="upcomingEventsList" class="space-y-2"></div>
      </div>
    </div>

    <!-- ══ EVENT DETAIL MODAL ════════════════════════════════════════════ -->
    <div id="eventModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm" dir="${isRTL?'rtl':'ltr'}">
        <div class="px-5 py-4 border-b border-gray-100 flex items-center justify-between ${isRTL?'flex-row-reverse':''}">
          <h3 class="font-bold text-gray-800 text-base" id="evModalTitle">${isRTL?'تفاصيل الحدث':'Event Details'}</h3>
          <button onclick="closeEventModal()" class="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition">×</button>
        </div>
        <div class="p-5 space-y-3" id="evModalBody"></div>
      </div>
    </div>

    <!-- ══ QUICK ACCESS CARDS ════════════════════════════════════════════ -->
    <div>
      <h2 class="font-bold text-gray-800 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-th-large text-sm" style="color:var(--qu-maroon)"></i>
        ${isRTL?'الخدمات المتاحة':'Available Services'}
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <a href="/staff-forms?lang=${lang}" class="card p-5 flex items-start gap-4 ${isRTL?'flex-row-reverse':''} group sq-card">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 sq-icon"
               style="background:linear-gradient(135deg,var(--qu-gold),#DBA93C)">
            <i class="fas fa-file-alt text-white text-lg"></i>
          </div>
          <div class="${isRTL?'text-right':''}">
            <h3 class="font-bold text-gray-800 group-hover:text-yellow-700 transition text-sm">${isRTL?'النماذج والوثائق':'Forms & Documents'}</h3>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${isRTL?'تحميل نماذج الرواتب والبدلات الرسمية':'Download official payroll & allowance forms'}</p>
            <span class="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold" style="background:#FEF3C7;color:#92400E">${isRTL?'18 نموذجاً':'18 Forms'}</span>
          </div>
        </a>
        <a href="/staff-contact?lang=${lang}" class="card p-5 flex items-start gap-4 ${isRTL?'flex-row-reverse':''} group sq-card">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 sq-icon"
               style="background:linear-gradient(135deg,#10B981,#34D399)">
            <i class="fas fa-envelope text-white text-lg"></i>
          </div>
          <div class="${isRTL?'text-right':''}">
            <h3 class="font-bold text-gray-800 group-hover:text-green-700 transition text-sm">${isRTL?'تواصل معنا':'Contact Us'}</h3>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${isRTL?'تواصل مع الأقسام المختصة للاستفسارات':'Reach the right team for inquiries'}</p>
            <span class="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold" style="background:#D1FAE5;color:#065F46">${isRTL?'6 أقسام':'6 Departments'}</span>
          </div>
        </a>
        <a href="/staff-request?lang=${lang}" class="card p-5 flex items-start gap-4 ${isRTL?'flex-row-reverse':''} group sq-card">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 sq-icon"
               style="background:linear-gradient(135deg,var(--qu-maroon),#6B0A22)">
            <i class="fas fa-concierge-bell text-white text-lg"></i>
          </div>
          <div class="${isRTL?'text-right':''}">
            <h3 class="font-bold text-gray-800 group-hover:text-red-700 transition text-sm">${isRTL?'طلب خدمة (SLA)':'Request a Service'}</h3>
            <p class="text-xs text-gray-500 mt-1 leading-relaxed">${isRTL?'قدّم طلب خدمة واحصل على فاتورة إلكترونية':'Submit a request & receive e-invoice'}</p>
            <span class="inline-block mt-2 text-xs px-2 py-0.5 rounded-full font-semibold" style="background:#FEE2E2;color:#991B1B">${isRTL?'6 خدمات':'6 Services'}</span>
          </div>
        </a>
      </div>
    </div>

    <!-- ══ DASHBOARD PROMO CARD ══════════════════════════════════════════ -->
    <a href="/staff-dashboard?lang=${lang}" class="card p-5 flex items-center gap-4 ${isRTL?'flex-row-reverse':''} sq-card"
       style="background:linear-gradient(135deg,#1E1B4B 0%,#312E81 100%);text-decoration:none">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 sq-icon" style="background:rgba(255,255,255,0.15)">
        <i class="fas fa-chart-line text-white text-lg"></i>
      </div>
      <div class="flex-1 ${isRTL?'text-right':''}">
        <h3 class="font-bold text-white text-sm">${isRTL?'لوحة متابعتي الشخصية':'My Personal Dashboard'}</h3>
        <p class="text-white/70 text-xs mt-1">${isRTL?'تتبع السلف والخصميات وحالة طلباتك بشكل مفصّل':'Track advances, deductions & request status in detail'}</p>
      </div>
      <div class="flex-shrink-0 flex flex-col items-center gap-1">
        <div class="w-8 h-8 rounded-full flex items-center justify-center" style="background:rgba(196,146,42,0.8)">
          <i class="fas fa-arrow-${isRTL?'left':'right'} text-white text-xs"></i>
        </div>
        <span class="text-white/60 text-xs">${isRTL?'عرض':'View'}</span>
      </div>
    </a>

    <!-- ══ EMERGENCY CONTACT ═════════════════════════════════════════════ -->
    <div class="card p-4 flex items-center gap-4 ${isRTL?'flex-row-reverse':''}" style="border-${isRTL?'right':'left'}:4px solid var(--qu-maroon)">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
        <i class="fas fa-headset text-xl" style="color:var(--qu-maroon)"></i>
      </div>
      <div class="flex-1 ${isRTL?'text-right':''}">
        <p class="font-bold text-gray-800 text-sm">${isRTL?'الدعم المباشر لقسم الرواتب':'Payroll Direct Support'}</p>
        <p class="text-gray-500 text-xs mt-0.5">
          <i class="fas fa-phone me-1" style="color:var(--qu-maroon)"></i>${isRTL?'داخلي 4100 / 4101':'Ext. 4100 / 4101'}
          &nbsp;·&nbsp;
          <i class="fas fa-envelope me-1" style="color:var(--qu-maroon)"></i>payroll@qu.edu.qa
        </p>
        <p class="text-gray-400 text-xs mt-0.5"><i class="fas fa-clock me-1"></i>${isRTL?'الأحد–الخميس: 7:30 ص – 3:30 م':'Sun–Thu: 7:30 AM – 3:30 PM'}</p>
      </div>
      <a href="mailto:payroll@qu.edu.qa" class="px-4 py-2 rounded-xl text-xs font-bold text-white hover:opacity-90 transition flex-shrink-0"
         style="background:var(--qu-maroon)">${isRTL?'راسلنا':'Email Us'}</a>
    </div>

  </div>

  <!-- ── تحميل الإعلانات من localStorage ───────────────────────────── -->
  <script>
  (function(){
    const BADGE_BG2={'badge-green':'#ECFDF5','badge-amber':'#FFFBEB','badge-blue':'#EFF6FF','badge-red':'#FEE2E2','badge-purple':'#EDE9FE','badge-cyan':'#CFFAFE'};
    const BADGE_CL2={'badge-green':'#059669','badge-amber':'#D97706','badge-blue':'#2563EB','badge-red':'#DC2626','badge-purple':'#7C3AED','badge-cyan':'#0891B2'};
    const ICON_CLR  = {
      'fa-money-bill-wave':'var(--qu-maroon)','fa-star-and-crescent':'var(--qu-gold)',
      'fa-file-alt':'#10B981','fa-file-contract':'#DC2626','fa-bell':'#7C3AED','fa-calendar-check':'#0891B2'
    };
    const ICON_BG2  = {
      'fa-money-bill-wave':'rgba(139,26,47,0.08)','fa-star-and-crescent':'rgba(196,146,42,0.08)',
      'fa-file-alt':'rgba(16,185,129,0.08)','fa-file-contract':'rgba(220,38,38,0.08)',
      'fa-bell':'rgba(124,58,237,0.08)','fa-calendar-check':'rgba(8,145,178,0.08)'
    };
    const IS_RTL_S = ${isRTL};
    try{
      const saved = JSON.parse(localStorage.getItem('qu_announcements'));
      if(saved && saved.length){
        const list = document.getElementById('staffAnnList');
        document.getElementById('staffAnnBadge').textContent = saved.length;
        list.innerHTML = saved.map(a=>\`
          <div class="ann-item flex items-center gap-3 py-3 px-2 rounded-xl transition cursor-pointer \${IS_RTL_S?'flex-row-reverse':''}">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                 style="background:\${ICON_BG2[a.icon]||'rgba(139,26,47,0.08)'}">
              <i class="fas \${a.icon} text-sm" style="color:\${ICON_CLR[a.icon]||'var(--qu-maroon)'}"></i>
            </div>
            <div class="flex-1 min-w-0 \${IS_RTL_S?'text-right':''}">
              <p class="text-sm font-semibold text-gray-800">\${a.title}</p>
              <p class="text-xs text-gray-400 mt-0.5"><i class="fas fa-calendar-alt me-1"></i>\${a.date}</p>
            </div>
            <span class="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 whitespace-nowrap"
              style="background:\${BADGE_BG2[a.bg]||'#EFF6FF'};color:\${BADGE_CL2[a.bg]||'#2563EB'}">\${a.badge}</span>
          </div>\`).join('');
      }
    }catch(e){}
  })();
  </script>

  <script>
  // ═══════════════════════════════════════════════════════════════════
  //   INTERACTIVE CALENDAR — بوابة الموظف
  // ═══════════════════════════════════════════════════════════════════
  const IS_RTL_CAL = ${isRTL};
  const DAY_NAMES_AR = ['أحد','اثن','ثلا','أرب','خمي','جمع','سبت'];
  const DAY_NAMES_EN = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  const MONTH_AR = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const MONTH_EN = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  // ─── أحداث الجامعة الثابتة — bilingual objects, اللغة تُختار في runtime ───
  // NOTE: لا نستخدم isRTL هنا لأن Vite لا يستطيع تقييم التعابير الثلاثية داخل JSON.stringify
  //       بدلاً من ذلك نمرر ar/en منفصلَين ونختار الصحيح بـ JS في المتصفح
  const _IS_RTL = ${isRTL};
  const _RAW_EVENTS = [
    {date:"2025-01-01",type:"holiday",color:"#6B7280",icon:"fa-moon",ar:"رأس السنة الميلادية",en:"New Year's Day",dar:"إجازة رسمية",den:"Official Holiday"},
    {date:"2025-01-29",type:"holiday",color:"#6B7280",icon:"fa-star-and-crescent",ar:"المولد النبوي الشريف",en:"Prophet's Birthday",dar:"إجازة رسمية",den:"Official Holiday"},
    {date:"2025-03-30",type:"holiday",color:"#D97706",icon:"fa-moon",ar:"عيد الفطر – اليوم الأول",en:"Eid Al-Fitr Day 1",dar:"إجازة عيد الفطر",den:"Eid Al-Fitr Holiday"},
    {date:"2025-03-31",type:"holiday",color:"#D97706",icon:"fa-moon",ar:"عيد الفطر – اليوم الثاني",en:"Eid Al-Fitr Day 2",dar:"إجازة عيد الفطر",den:"Eid Al-Fitr Holiday"},
    {date:"2025-04-01",type:"holiday",color:"#D97706",icon:"fa-moon",ar:"عيد الفطر – اليوم الثالث",en:"Eid Al-Fitr Day 3",dar:"إجازة عيد الفطر",den:"Eid Al-Fitr Holiday"},
    {date:"2025-04-02",type:"holiday",color:"#D97706",icon:"fa-moon",ar:"عيد الفطر – اليوم الرابع",en:"Eid Al-Fitr Day 4",dar:"إجازة موسعة",den:"Extended Break"},
    {date:"2025-06-06",type:"holiday",color:"#059669",icon:"fa-moon",ar:"عيد الأضحى – اليوم الأول",en:"Eid Al-Adha Day 1",dar:"إجازة عيد الأضحى",den:"Eid Al-Adha Holiday"},
    {date:"2025-06-07",type:"holiday",color:"#059669",icon:"fa-moon",ar:"عيد الأضحى – اليوم الثاني",en:"Eid Al-Adha Day 2",dar:"إجازة عيد الأضحى",den:"Eid Al-Adha Holiday"},
    {date:"2025-06-08",type:"holiday",color:"#059669",icon:"fa-moon",ar:"عيد الأضحى – اليوم الثالث",en:"Eid Al-Adha Day 3",dar:"إجازة عيد الأضحى",den:"Eid Al-Adha Holiday"},
    {date:"2025-06-09",type:"holiday",color:"#059669",icon:"fa-moon",ar:"عيد الأضحى – اليوم الرابع",en:"Eid Al-Adha Day 4",dar:"إجازة موسعة",den:"Extended Break"},
    {date:"2025-06-26",type:"holiday",color:"#6B7280",icon:"fa-star-and-crescent",ar:"رأس السنة الهجرية 1447",en:"Islamic New Year 1447",dar:"إجازة رسمية",den:"Official Holiday"},
    {date:"2025-12-18",type:"holiday",color:"#8B1A2F",icon:"fa-flag",ar:"اليوم الوطني القطري",en:"Qatar National Day",dar:"احتفال اليوم الوطني",den:"National Day Celebration"},
    {date:"2025-12-19",type:"holiday",color:"#8B1A2F",icon:"fa-flag",ar:"يوم الرياضة الوطني",en:"National Sport Day",dar:"إجازة يوم الرياضة",den:"Sport Day Holiday"},
    {date:"2025-01-12",type:"university",color:"#7C3AED",icon:"fa-calendar-check",ar:"آخر يوم تسجيل – الفصل الثاني",en:"Last Day to Register – Spring 2025",dar:"موعد إضافة/حذف المواد",den:"Add/Drop Deadline"},
    {date:"2025-01-19",type:"university",color:"#7C3AED",icon:"fa-play-circle",ar:"بداية الفصل الثاني 2025",en:"Spring Semester 2025 Begins",dar:"أول يوم دراسة",den:"First Day of Classes"},
    {date:"2025-02-09",type:"university",color:"#7C3AED",icon:"fa-calendar-day",ar:"آخر يوم انسحاب بلا رسوم",en:"Last Day to Withdraw – No Penalty",dar:"انسحاب بدون W",den:"Withdrawal without W"},
    {date:"2025-03-01",type:"university",color:"#7C3AED",icon:"fa-folder-open",ar:"فتح تسجيل الفصل الصيفي",en:"Summer 2025 Registration Opens",dar:"بدء التسجيل للصيف",den:"Summer registration starts"},
    {date:"2025-03-16",type:"university",color:"#7C3AED",icon:"fa-calendar-minus",ar:"آخر يوم انسحاب من المواد",en:"Last Day to Withdraw",dar:"انسحاب مع W في السجل",den:"Withdrawal with W on record"},
    {date:"2025-04-27",type:"university",color:"#7C3AED",icon:"fa-book-open",ar:"أسبوع المراجعة – الفصل الثاني",en:"Spring 2025 Study Week",dar:"أسبوع المراجعة النهائية",den:"Final Review Week"},
    {date:"2025-05-04",type:"university",color:"#7C3AED",icon:"fa-pencil-alt",ar:"الامتحانات النهائية – الفصل الثاني",en:"Spring 2025 Final Exams",dar:"فترة الامتحانات النهائية",den:"Final Examination Period"},
    {date:"2025-05-15",type:"university",color:"#7C3AED",icon:"fa-stop-circle",ar:"نهاية الفصل الثاني 2025",en:"Spring Semester 2025 Ends",dar:"آخر يوم امتحانات",den:"Last Day of Final Exams"},
    {date:"2025-05-25",type:"university",color:"#C4922A",icon:"fa-graduation-cap",ar:"حفل تخرج جامعة قطر 2025",en:"QU Graduation Ceremony 2025",dar:"احتفال التخرج السنوي",den:"Annual Graduation Ceremony"},
    {date:"2025-05-25",type:"university",color:"#0891B2",icon:"fa-sun",ar:"بداية الفصل الصيفي 2025",en:"Summer Semester 2025 Begins",dar:"أول يوم صيفي",den:"First Day – Summer 2025"},
    {date:"2025-07-31",type:"university",color:"#0891B2",icon:"fa-stop-circle",ar:"نهاية الفصل الصيفي 2025",en:"Summer Semester 2025 Ends",dar:"آخر يوم امتحانات الصيف",den:"Last Day – Summer Exams"},
    {date:"2025-08-10",type:"university",color:"#7C3AED",icon:"fa-folder-open",ar:"فتح تسجيل الفصل الأول 2025-2026",en:"Fall 2025-26 Registration Opens",dar:"بدء التسجيل الخريفي",den:"Fall registration starts"},
    {date:"2025-08-24",type:"university",color:"#7C3AED",icon:"fa-play-circle",ar:"بداية الفصل الأول 2025-2026",en:"Fall Semester 2025-2026 Begins",dar:"أول يوم دراسة للخريف",den:"First Day of Classes – Fall"},
    {date:"2025-09-01",type:"university",color:"#7C3AED",icon:"fa-chalkboard-teacher",ar:"اجتماع هيئة التدريس والموظفين",en:"Faculty & Staff Assembly",dar:"الاجتماع العام السنوي",den:"Annual Assembly Meeting"},
    {date:"2025-09-14",type:"university",color:"#7C3AED",icon:"fa-calendar-day",ar:"آخر يوم انسحاب بلا رسوم – الخريف",en:"Last Day Withdraw No Penalty (Fall)",dar:"بدون تأثير على المعدل",den:"No GPA impact"},
    {date:"2025-10-19",type:"university",color:"#7C3AED",icon:"fa-calendar-minus",ar:"آخر يوم انسحاب – الفصل الأول",en:"Last Day to Withdraw (Fall)",dar:"انسحاب مع W في السجل",den:"Withdrawal with W recorded"},
    {date:"2025-10-26",type:"university",color:"#7C3AED",icon:"fa-folder-open",ar:"فتح تسجيل الفصل الثاني 2025-2026",en:"Spring 2026 Registration Opens",dar:"بدء التسجيل الربيعي",den:"Spring registration starts"},
    {date:"2025-11-30",type:"university",color:"#7C3AED",icon:"fa-book-open",ar:"أسبوع المراجعة – الفصل الأول",en:"Fall 2025 Study Week",dar:"مراجعة نهائية الخريف",den:"Fall Final Review Week"},
    {date:"2025-12-07",type:"university",color:"#7C3AED",icon:"fa-pencil-alt",ar:"الامتحانات النهائية – الفصل الأول",en:"Fall 2025 Final Exams",dar:"فترة الامتحانات الخريفية",den:"Fall Examination Period"},
    {date:"2025-12-20",type:"university",color:"#7C3AED",icon:"fa-stop-circle",ar:"نهاية الفصل الأول 2025-2026",en:"Fall Semester 2025-2026 Ends",dar:"نهاية الفصل والإجازة الشتوية",den:"End of Fall Semester"},
    {date:"2025-02-16",type:"event",color:"#DB2777",icon:"fa-trophy",ar:"يوم القدرات الطلابية",en:"Student Talents Day",dar:"احتفالية الإبداع الطلابي",den:"Student Talents Celebration"},
    {date:"2025-03-10",type:"event",color:"#DB2777",icon:"fa-flask",ar:"معرض البحث العلمي",en:"Qatar Research Exhibition",dar:"معرض الابتكار بجامعة قطر",den:"QU Research & Innovation"},
    {date:"2025-04-06",type:"event",color:"#DB2777",icon:"fa-handshake",ar:"يوم المجتمع والشراكات",en:"Community & Partnership Day",dar:"فعالية الشراكة مع القطاع الخاص",den:"QU Community Partnership"},
    {date:"2025-10-05",type:"event",color:"#DB2777",icon:"fa-star",ar:"اليوم المفتوح لجامعة قطر",en:"Qatar University Open Day",dar:"اليوم المفتوح للطلاب الجدد",den:"Open Day for New Students"},
    {date:"2025-11-12",type:"event",color:"#DB2777",icon:"fa-book",ar:"معرض الكتاب الجامعي",en:"University Book Fair",dar:"معرض الكتاب السنوي",den:"Annual University Book Fair"},
    {date:"2025-01-28",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب يناير 2025",en:"January 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-02-27",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب فبراير 2025",en:"February 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-03-27",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب مارس 2025",en:"March 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-04-28",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب أبريل 2025",en:"April 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-05-27",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب مايو 2025",en:"May 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-06-26",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب يونيو 2025",en:"June 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-07-28",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب يوليو 2025",en:"July 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-08-27",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب أغسطس 2025",en:"August 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-09-28",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب سبتمبر 2025",en:"September 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-10-28",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب أكتوبر 2025",en:"October 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-11-27",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب نوفمبر 2025",en:"November 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-12-25",type:"salary",color:"#8B1A2F",icon:"fa-money-bill-wave",ar:"صرف راتب ديسمبر 2025",en:"December 2025 Salary",dar:"إيداع الراتب الشهري",den:"Monthly Salary Deposit"},
    {date:"2025-03-20",type:"advance",color:"#D97706",icon:"fa-hand-holding-usd",ar:"آخر موعد سلفة عيد الفطر",en:"Eid Al-Fitr Advance Deadline",dar:"الموعد النهائي للتقديم",den:"Request Deadline"},
    {date:"2025-03-25",type:"advance",color:"#D97706",icon:"fa-hand-holding-usd",ar:"صرف سلفة عيد الفطر",en:"Eid Al-Fitr Advance Payment",dar:"إيداع سلفة العيد",den:"Eid advance deposited"},
    {date:"2025-05-28",type:"advance",color:"#D97706",icon:"fa-hand-holding-usd",ar:"آخر موعد سلفة عيد الأضحى",en:"Eid Al-Adha Advance Deadline",dar:"الموعد النهائي للتقديم",den:"Request Deadline"},
    {date:"2025-06-04",type:"advance",color:"#D97706",icon:"fa-hand-holding-usd",ar:"صرف سلفة عيد الأضحى",en:"Eid Al-Adha Advance Payment",dar:"إيداع سلفة العيد",den:"Eid advance deposited"},
    {date:"2025-12-10",type:"advance",color:"#D97706",icon:"fa-hand-holding-usd",ar:"آخر موعد سلفة اليوم الوطني",en:"National Day Advance Deadline",dar:"الموعد النهائي للتقديم",den:"Request Deadline"},
    {date:"2025-12-15",type:"advance",color:"#D97706",icon:"fa-hand-holding-usd",ar:"صرف سلفة اليوم الوطني",en:"National Day Advance Payment",dar:"إيداع سلفة اليوم الوطني",den:"National Day advance deposited"}
  ];
  // تحويل bilingual → title/desc حسب اللغة الحالية
  const QU_EVENTS_DATA = _RAW_EVENTS.map(function(e){
    return {date:e.date,type:e.type,color:e.color,icon:e.icon,
            title:_IS_RTL?e.ar:e.en, desc:_IS_RTL?e.dar:e.den};
  });

  let _calYear  = new Date().getFullYear();
  let _calMonth = new Date().getMonth();
  let _calFilter = 'all';
  let _fullCalYear  = _calYear;
  let _fullCalMonth = _calMonth;

  // ─── جمع كل الأحداث (ثابتة + طلبات الموظف من localStorage) ───────
  function getAllEvents(){
    const events = [...QU_EVENTS_DATA];
    // جلب طلبات الموظف من sla_requests
    try{
      const reqs = JSON.parse(localStorage.getItem('sla_requests')||'[]');
      reqs.forEach(function(r){
        // موعد الراتب / السلفة / المهمة من slaDue
        const typeColor = {salary:'var(--qu-maroon)',advance:'#D97706',mission:'#D97706',certificate:'#0891B2',allowance:'#0891B2',eos:'#DC2626',scholarship:'#7C3AED',other:'#6B7280'};
        const typeIcon  = {salary:'fa-money-bill-wave',advance:'fa-hand-holding-usd',mission:'fa-plane',certificate:'fa-file-certificate',allowance:'fa-house',eos:'fa-door-open',scholarship:'fa-graduation-cap',other:'fa-bell'};
        const typeLabel = {
          salary: IS_RTL_CAL?'صرف راتب':'Salary Payment',
          advance: IS_RTL_CAL?'سلفة':'Advance',
          mission: IS_RTL_CAL?'مهمة علمية':'Scientific Mission',
          certificate: IS_RTL_CAL?'شهادة راتب':'Salary Certificate',
          allowance: IS_RTL_CAL?'طلب بدل':'Allowance',
          eos: IS_RTL_CAL?'نهاية خدمة':'End of Service',
          scholarship: IS_RTL_CAL?'ابتعاث':'Scholarship',
          other: IS_RTL_CAL?'طلب خدمة':'Service Request'
        };
        if(r.slaDue){
          events.push({
            date: r.slaDue.substring(0,10),
            type: 'my',
            subtype: r.type,
            color: '#0891B2',
            icon: typeIcon[r.type]||'fa-bell',
            title: (IS_RTL_CAL?'طلب: ':'Request: ') + (typeLabel[r.type]||r.type) + ' — ' + r.id,
            reqId: r.id, status: r.status, emp: r.emp
          });
        }
        // إذا كان نوعه صرف راتب أو سلفة نضيف أيضاً تاريخ التقديم
        if((r.type==='advance'||r.type==='mission') && r.submittedAt){
          events.push({
            date: r.submittedAt.substring(0,10),
            type: 'my',
            subtype: r.type,
            color: '#D97706',
            icon: typeIcon[r.type]||'fa-bell',
            title: (IS_RTL_CAL?'تقديم طلب: ':'Submitted: ') + (typeLabel[r.type]||r.type) + ' — ' + r.id,
            reqId: r.id, status: r.status, emp: r.emp
          });
        }
      });
    }catch(e){}
    return events;
  }

  function eventsForDate(dateStr, filter){
    return getAllEvents().filter(function(ev){
      if(ev.date !== dateStr) return false;
      if(filter==='all') return true;
      if(filter==='my') return ev.type==='my';
      if(filter==='university') return ev.type==='university';
      if(filter==='salary') return ev.type==='salary';
      if(filter==='advance') return ev.type==='advance' || ev.subtype==='advance' || ev.subtype==='mission';
      return ev.type===filter;
    });
  }

  // ─── ألوان الأنواع ─────────────────────────────────────────────────
  function typeColorOf(ev){
    if(ev.type==='salary')     return 'var(--qu-maroon)';
    if(ev.type==='advance')    return '#D97706';
    if(ev.type==='university') return '#7C3AED';
    if(ev.type==='holiday')    return '#6B7280';
    if(ev.type==='my')         return '#0891B2';
    return '#9CA3AF';
  }

  // ─── رسم أسماء الأيام ─────────────────────────────────────────────
  function renderDayNames(containerId){
    const names = IS_RTL_CAL ? DAY_NAMES_AR : DAY_NAMES_EN;
    document.getElementById(containerId).innerHTML = names.map(function(n){
      return '<div class="text-center text-xs font-semibold text-gray-400 py-1">'+n+'</div>';
    }).join('');
  }

  // ─── رسم التقويم المصغّر (الشهر الحالي في البطاقة الجانبية) ─────
  function renderMiniCal(){
    const year = _calYear, month = _calMonth;
    const title = (IS_RTL_CAL ? MONTH_AR : MONTH_EN)[month] + ' ' + year;
    document.getElementById('miniCalTitle').textContent = title;
    renderDayNames('miniCalDayNames');

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const today = new Date();
    const todayStr = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
    const allEv = getAllEvents();

    let cells = '';
    for(let i=0; i<firstDay; i++) cells += '<div></div>';
    for(let d=1; d<=daysInMonth; d++){
      const dateStr = year+'-'+String(month+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const dayEvs = allEv.filter(function(ev){ return ev.date===dateStr; });
      const isToday = dateStr===todayStr;
      const dots = dayEvs.slice(0,3).map(function(ev){
        return '<span class="inline-block w-1.5 h-1.5 rounded-full" style="background:'+typeColorOf(ev)+'"></span>';
      }).join('');
      cells += '<div data-d="'+dateStr+'" onclick="calDayClick(this)" class="cursor-pointer rounded-lg p-0.5 text-center transition hover:bg-indigo-50 '+(isToday?'ring-2 ring-offset-1':'')+(isToday?' ring-offset-white':'')+'" style="'+(isToday?'background:rgba(139,26,47,0.08);ring-color:var(--qu-maroon)':'')+'">'
        + '<span class="text-xs '+(isToday?'font-black text-red-800':'font-medium text-gray-700')+'">'+d+'</span>'
        + (dots?'<div class="flex justify-center gap-0.5 mt-0.5">'+dots+'</div>':'')
        + '</div>';
    }
    document.getElementById('miniCalGrid').innerHTML = cells;
  }

  function calPrev(){ _calMonth--; if(_calMonth<0){_calMonth=11;_calYear--;} renderMiniCal(); }
  function calNext(){ _calMonth++; if(_calMonth>11){_calMonth=0;_calYear++;} renderMiniCal(); }

  // ─── رسم التقويم الكامل ────────────────────────────────────────────
  function renderFullCal(){
    const year = _fullCalYear, month = _fullCalMonth;
    const title = (IS_RTL_CAL ? MONTH_AR : MONTH_EN)[month] + ' ' + year;
    document.getElementById('fullCalTitle').textContent = title;
    renderDayNames('fullCalDayNames');

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month+1, 0).getDate();
    const today = new Date();
    const todayStr = today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0')+'-'+String(today.getDate()).padStart(2,'0');
    const allEv = getAllEvents();

    let cells = '';
    for(let i=0; i<firstDay; i++)
      cells += '<div class="rounded-xl border border-transparent min-h-20"></div>';

    for(let d=1; d<=daysInMonth; d++){
      const dateStr = year+'-'+String(month+1).padStart(2,'0')+'-'+String(d).padStart(2,'0');
      const dayEvs = allEv.filter(function(ev){
        if(ev.date!==dateStr) return false;
        if(_calFilter==='all') return true;
        if(_calFilter==='my') return ev.type==='my';
        if(_calFilter==='university') return ev.type==='university';
        if(_calFilter==='salary') return ev.type==='salary';
        if(_calFilter==='advance') return ev.type==='advance' || ev.subtype==='advance' || ev.subtype==='mission';
        return ev.type===_calFilter;
      });
      const isToday = dateStr===todayStr;
      const isWeekend = [5,6].includes(new Date(year,month,d).getDay()); // جمعة وسبت

      const evPills = dayEvs.slice(0,3).map(function(ev){
        return '<div class="text-white text-xs rounded px-1 py-0.5 truncate leading-tight mt-0.5 cursor-pointer hover:opacity-80" '
          + 'style="background:'+typeColorOf(ev)+';font-size:10px" '
          + 'onclick="event.stopPropagation();showEventDetail('+JSON.stringify(ev).replace(/"/g,'&quot;')+')">'
          + '<i class="fas '+ev.icon+' me-0.5" style="font-size:8px"></i>'+ev.title
          + '</div>';
      }).join('');
      const more = dayEvs.length>3 ? '<div class="text-xs text-gray-400 mt-0.5">+' + (dayEvs.length-3) + (IS_RTL_CAL?' أخرى':' more') + '</div>' : '';

      cells += '<div data-d="'+dateStr+'" onclick="calDayClick(this)" class="rounded-xl border min-h-20 p-1.5 cursor-pointer transition '
        + (isToday?'border-red-300 ':'border-gray-100 hover:border-indigo-200 ')
        + (isWeekend?'bg-gray-50/60 ':isToday?'bg-red-50 ':'bg-white hover:bg-indigo-50/30 ')
        + '">'
        + '<span class="text-xs font-bold '+(isToday?'text-red-700':'text-gray-600')+(isWeekend?' opacity-50':'')+' block text-center mb-0.5">'+d+'</span>'
        + evPills + more
        + '</div>';
    }
    document.getElementById('fullCalGrid').innerHTML = cells;
    renderUpcoming();
  }

  // ─── قائمة الأحداث القادمة (30 يوم) ─────────────────────────────
  function renderUpcoming(){
    const today = new Date();
    const next30 = new Date(today); next30.setDate(next30.getDate()+30);
    const allEv = getAllEvents().filter(function(ev){
      const d = new Date(ev.date);
      return d>=today && d<=next30 && (_calFilter==='all'||ev.type===_calFilter||(ev.subtype&&(_calFilter==='advance'?(ev.subtype==='advance'||ev.subtype==='mission'):ev.subtype===_calFilter)));
    }).sort(function(a,b){ return a.date.localeCompare(b.date); });

    const el = document.getElementById('upcomingEventsList');
    if(!el) return;
    if(allEv.length===0){
      el.innerHTML = '<p class="text-sm text-gray-400 italic text-center py-4">'+(IS_RTL_CAL?'لا توجد أحداث قادمة في هذه الفترة':'No upcoming events in this period')+'</p>';
      return;
    }
    el.innerHTML = allEv.map(function(ev){
      const d = new Date(ev.date);
      const diffDays = Math.ceil((d-today)/(1000*60*60*24));
      const dayLabel = diffDays===0?(IS_RTL_CAL?'اليوم':'Today'):diffDays===1?(IS_RTL_CAL?'غداً':'Tomorrow'):(IS_RTL_CAL?'خلال '+diffDays+' أيام':'In '+diffDays+' days');
      return '<div class="flex items-center gap-3 p-3 rounded-xl border border-gray-50 hover:border-indigo-100 hover:bg-indigo-50/30 transition cursor-pointer '+(IS_RTL_CAL?'flex-row-reverse':'')+'" onclick="showEventDetail('+JSON.stringify(ev).replace(/"/g,'&quot;')+')">'
        + '<div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style="background:'+typeColorOf(ev)+'">'
        + '<i class="fas '+ev.icon+' text-sm"></i></div>'
        + '<div class="flex-1 min-w-0 '+(IS_RTL_CAL?'text-right':'')+'">'
        + '<p class="text-sm font-semibold text-gray-800 truncate">'+ev.title+'</p>'
        + '<p class="text-xs text-gray-400 mt-0.5">'+ev.date+'</p>'
        + '</div>'
        + '<span class="text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 whitespace-nowrap" style="background:'+typeColorOf(ev)+'22;color:'+typeColorOf(ev)+'">'+dayLabel+'</span>'
        + '</div>';
    }).join('');
  }

  function fullCalPrev(){ _fullCalMonth--; if(_fullCalMonth<0){_fullCalMonth=11;_fullCalYear--;} renderFullCal(); }
  function fullCalNext(){ _fullCalMonth++; if(_fullCalMonth>11){_fullCalMonth=0;_fullCalYear++;} renderFullCal(); }
  function goToToday(){
    const t=new Date(); _fullCalYear=t.getFullYear(); _fullCalMonth=t.getMonth();
    renderFullCal();
  }

  // ─── فتح/إغلاق التقويم الكامل ─────────────────────────────────────
  function openFullCal(){
    _fullCalYear=_calYear; _fullCalMonth=_calMonth;
    document.getElementById('fullCalSection').classList.remove('hidden');
    renderFullCal();
    document.getElementById('fullCalSection').scrollIntoView({behavior:'smooth',block:'start'});
  }
  function closeFullCal(){
    document.getElementById('fullCalSection').classList.add('hidden');
  }

  // ─── فلتر الأحداث ─────────────────────────────────────────────────
  function setCalFilter(f){
    _calFilter = f;
    ['all','salary','advance','university','my'].forEach(function(k){
      const btn = document.getElementById('calF_'+k);
      if(!btn) return;
      if(k===f){
        btn.style.background='#1F2937'; btn.style.color='white';
      } else {
        btn.style.background='white'; btn.style.color='#4B5563';
      }
    });
    renderFullCal();
  }

  // ─── wrapper لتجنب مشكلة الـ single-quote داخل onclick ──────────
  function calDayClick(el){ openDayEvents(el.getAttribute('data-d')); }

  // ─── عرض أحداث يوم محدد (modal) ──────────────────────────────────
  function openDayEvents(dateStr){
    const evs = getAllEvents().filter(function(ev){ return ev.date===dateStr; });
    const d = new Date(dateStr);
    const dayNum = d.getDate();
    const monthName = (IS_RTL_CAL?MONTH_AR:MONTH_EN)[d.getMonth()];
    document.getElementById('evModalTitle').textContent = dayNum + ' ' + monthName + ' ' + d.getFullYear();

    if(evs.length===0){
      document.getElementById('evModalBody').innerHTML =
        '<p class="text-sm text-gray-400 italic text-center py-4">'+(IS_RTL_CAL?'لا توجد أحداث في هذا اليوم':'No events on this day')+'</p>';
    } else {
      document.getElementById('evModalBody').innerHTML = evs.map(function(ev){
        const typeLabel = {salary:IS_RTL_CAL?'صرف راتب':'Salary',advance:IS_RTL_CAL?'سلفة':'Advance',university:IS_RTL_CAL?'حدث جامعي':'University',holiday:IS_RTL_CAL?'إجازة رسمية':'Holiday',my:IS_RTL_CAL?'طلبي':'My Request'};
        const statusLabel = {open:IS_RTL_CAL?'مفتوح':'Open',inprogress:IS_RTL_CAL?'قيد التنفيذ':'In Progress',done:IS_RTL_CAL?'مكتمل':'Done'};
        return '<div class="flex items-start gap-3 p-3 rounded-xl '+(IS_RTL_CAL?'flex-row-reverse':'')+'" style="background:'+typeColorOf(ev)+'11;border:1px solid '+typeColorOf(ev)+'33">'
          + '<div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white mt-0.5" style="background:'+typeColorOf(ev)+'">'
          + '<i class="fas '+ev.icon+' text-sm"></i></div>'
          + '<div class="flex-1 '+(IS_RTL_CAL?'text-right':'')+'">'
          + '<p class="font-bold text-gray-800 text-sm">'+ev.title+'</p>'
          + '<p class="text-xs mt-0.5 font-semibold" style="color:'+typeColorOf(ev)+'">'+( typeLabel[ev.type]||ev.type )+'</p>'
          + (ev.reqId?'<p class="text-xs text-gray-400 mt-0.5 font-mono">'+ev.reqId+(ev.status?' · '+(statusLabel[ev.status]||ev.status):'')+'</p>':'')
          + '</div></div>';
      }).join('');
    }
    document.getElementById('eventModal').classList.remove('hidden');
  }

  // ─── عرض تفاصيل حدث واحد مباشرة ──────────────────────────────────
  function showEventDetail(ev){
    if(typeof ev === 'string') ev = JSON.parse(ev);
    openDayEvents(ev.date);
  }
  function closeEventModal(){ document.getElementById('eventModal').classList.add('hidden'); }

  // ─── Init ─────────────────────────────────────────────────────────
  renderMiniCal();
  </script>`

  return c.html(staffLayout(isRTL?'الرئيسية':'Home', content, 'home', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF DASHBOARD  /staff-dashboard  — لوحة متابعة الموظف
// ─────────────────────────────────────────────────────────────────────────────
app.get('/staff-dashboard', (c) => {
  const lang  = getLang(c)
  const isRTL = lang === 'ar'

  const content = `
<style>
  .dash-card{background:white;border-radius:16px;box-shadow:0 2px 12px rgba(0,0,0,0.07);transition:box-shadow 0.2s,transform 0.2s}
  .dash-card:hover{box-shadow:0 8px 28px rgba(139,26,47,0.13);transform:translateY(-2px)}
  .prog-bar{height:8px;border-radius:999px;background:#F3F4F6;overflow:hidden}
  .prog-fill{height:100%;border-radius:999px;transition:width 0.6s cubic-bezier(.4,0,.2,1)}
  .status-pill{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:700}
  .tab-btn2{padding:8px 18px;border-radius:12px;font-size:13px;font-weight:700;border:none;cursor:pointer;transition:all 0.2s}
  .tab-btn2.active2{background:linear-gradient(135deg,#8B1A2F,#A52840);color:white;box-shadow:0 4px 12px rgba(139,26,47,0.3)}
  .tab-btn2:not(.active2){background:#F3F4F6;color:#6B7280}
  .tab-btn2:not(.active2):hover{background:#E5E7EB;color:#374151}
  .timeline-line{position:absolute;${isRTL?'right':'left'}:19px;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,#8B1A2F20,#8B1A2F60,#8B1A2F20)}
  .deduction-row{border-bottom:1px solid #F3F4F6;transition:background 0.15s}
  .deduction-row:hover{background:#FAFAFA}
  @keyframes countUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
  .count-anim{animation:countUp 0.5s ease both}

    /* ══ THEME ENGINE v2 ══ */
    @keyframes th-slidein{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
    @keyframes th-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-9px) rotate(2deg)}}
    @keyframes th-ticker{0%{transform:translateX(110%)}100%{transform:translateX(-110%)}}
    @keyframes th-tickerR{0%{transform:translateX(-110%)}100%{transform:translateX(110%)}}
    @keyframes th-confetti{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(140px) rotate(720deg);opacity:0}}
    @keyframes th-glow-nd {0%,100%{box-shadow:0 0 18px #8B1A2F66,0 4px 32px #00000044}50%{box-shadow:0 0 40px #C41E3ABB,0 4px 48px #00000066}}
    @keyframes th-glow-eid{0%,100%{box-shadow:0 0 18px #05966988,0 4px 32px #00000044}50%{box-shadow:0 0 40px #10B981BB,0 4px 48px #00000066}}
    @keyframes th-glow-ram{0%,100%{box-shadow:0 0 18px #4338CA88,0 4px 32px #00000044}50%{box-shadow:0 0 40px #6366F1BB,0 4px 48px #00000066}}
    @keyframes th-glow-spr{0%,100%{box-shadow:0 0 18px #16A34A66,0 4px 32px #00000033}50%{box-shadow:0 0 40px #22C55E99,0 4px 48px #00000055}}
    @keyframes th-glow-sum{0%,100%{box-shadow:0 0 18px #D9770666,0 4px 32px #00000044}50%{box-shadow:0 0 40px #F9731688,0 4px 48px #00000066}}
    @keyframes th-glow-aut{0%,100%{box-shadow:0 0 18px #92400E66,0 4px 32px #00000044}50%{box-shadow:0 0 40px #B4540077,0 4px 48px #00000066}}
    @keyframes th-glow-win{0%,100%{box-shadow:0 0 18px #1E3A5F66,0 4px 32px #00000044}50%{box-shadow:0 0 40px #2563EB88,0 4px 48px #00000066}}
    @keyframes th-glow-nb {0%,100%{box-shadow:0 0 18px #14532D66,0 4px 32px #00000044}50%{box-shadow:0 0 40px #16A34A88,0 4px 48px #00000066}}
    #themeBanner2{animation:th-slidein .65s cubic-bezier(.22,.68,0,1.2) both;margin-bottom:1.25rem}
    .th-particle{position:absolute;pointer-events:none;font-size:1.3rem;animation:th-confetti 3.2s ease-in infinite}
    .th-ticker-wrap2{overflow:hidden;white-space:nowrap;width:100%}
    .th-ticker-inner2{display:inline-block;padding-inline-start:100%;animation:th-ticker 26s linear infinite}
    .th-ticker-innerR2{display:inline-block;padding-inline-end:100%;animation:th-tickerR 26s linear infinite}


    <!-- ══ THEME BTN ══ -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:4px">
      <button id="thInlineBtn" onclick="window._thToggle2&&window._thToggle2()"
        style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border:none;border-radius:10px;background:rgba(55,65,81,0.85);color:#F0C040;font-size:.78rem;font-weight:700;cursor:pointer;backdrop-filter:blur(6px);box-shadow:0 2px 8px rgba(0,0,0,.25);transition:.2s"
        onmouseover="this.style.background='rgba(79,70,229,.9)'" onmouseout="this.style.background='rgba(55,65,81,0.85)'">
        <i class="fas fa-palette"></i> Theme
      </button>
    </div>
    <!-- ══ THEME BANNER 2 ══ -->
    <div id="themeBanner2" class="hidden relative rounded-2xl overflow-hidden" style="min-height:130px"></div>
    <script>
    (function(){
      /* reuse shared helpers if already defined by /staff page in same session — 
         but since each page is standalone, we define them locally with suffix 2 */
      function _getNow2(){
        try{var ov=localStorage.getItem('nd_test_date');
          if(ov){var p=ov.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
        }catch(e){}
        return new Date();
      }
      var THEMES2=[
        {id:'national',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===11&&d.getDate()===18;},
         bg:'linear-gradient(135deg,#8B1A2F 0%,#6B0A22 40%,#1a1a2e 100%)',
         titleAr:'🇶🇦 كل عام وقطر بخير',titleEn:'🇶🇦 Happy Qatar National Day',
         subtitleAr:'اليوم الوطني القطري — ١٨ ديسمبر',subtitleEn:'Qatar National Day — December 18',
         tickerAr:'🇶🇦 يوم المجد والعطاء • تحيا قطر • ١٨ ديسمبر يوم العز والكرامة • الله يحفظ قطر وقيادتها 🇶🇦',
         tickerEn:'🇶🇦 Glory & Pride • Long Live Qatar • December 18 • God Bless Qatar 🇶🇦',
         particles:['🇶🇦','⭐','✨','🌟','🎊','🎉','🏅','💫']},
        {id:'eid_fitr',glow:'th-glow-eid',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===2&&dt>=29)||(m===3&&dt<=3);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 45%,#0D2B1F 100%)',
         titleAr:'🌙 عيد الفطر المبارك',titleEn:'🌙 Eid Al-Fitr Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله صيامكم',subtitleEn:'May your fast be accepted • Happy Eid',
         tickerAr:'🌙 عيد الفطر المبارك • تقبّل الله منا ومنكم • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Eid Al-Fitr Mubarak • May Allah accept our deeds • Happy Eid to all 🌙',
         particles:['🌙','⭐','✨','🌟','🎊','💚','🕌','🤲']},
        {id:'eid_adha',glow:'th-glow-eid',
         match:function(d){return d.getMonth()===5&&d.getDate()>=5&&d.getDate()<=10;},
         bg:'linear-gradient(135deg,#1E3A5F 0%,#1a4a7a 45%,#0f1f36 100%)',
         titleAr:'🕌 عيد الأضحى المبارك',titleEn:'🕌 Eid Al-Adha Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله طاعتكم',subtitleEn:'May your worship be accepted • Happy Eid',
         tickerAr:'🕌 عيد الأضحى المبارك • تقبّل الله منا ومنكم صالح الأعمال • كل عام وأنتم بخير 🕌',
         tickerEn:'🕌 Eid Al-Adha Mubarak • May Allah accept our sacrifices • Happy Eid to all 🕌',
         particles:['🕌','🌙','⭐','✨','💙','🤲','🌟','🎊']},
        {id:'ramadan',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===2&&d.getDate()>=1&&d.getDate()<=28;},
         bg:'linear-gradient(135deg,#1E1B4B 0%,#312E81 45%,#0D0B2E 100%)',
         titleAr:'🌙 رمضان كريم',titleEn:'🌙 Ramadan Kareem',
         subtitleAr:'شهر الخير والبركة والعبادة',subtitleEn:'Month of Blessings & Worship',
         tickerAr:'🌙 رمضان كريم • شهر القرآن والخير • تقبّل الله صيامكم وقيامكم 🌙',
         tickerEn:'🌙 Ramadan Kareem • Month of Quran • May Allah accept your fasting 🌙',
         particles:['🌙','⭐','🌟','✨','📿','🕌','🤲','💜']},
        {id:'mawlid',glow:'th-glow-nb',
         match:function(d){return d.getMonth()===0&&d.getDate()>=28&&d.getDate()<=30;},
         bg:'linear-gradient(135deg,#14532D 0%,#166534 45%,#052E16 100%)',
         titleAr:'🌿 المولد النبوي الشريف',titleEn:'🌿 Mawlid Al-Nabawi',
         subtitleAr:'ذكرى مولد سيدنا محمد ﷺ',subtitleEn:'Birthday of Prophet Muhammad ﷺ',
         tickerAr:'🌿 بمناسبة المولد النبوي الشريف • صلِّ على النبي محمد ﷺ 🌿',
         tickerEn:'🌿 Happy Mawlid Al-Nabawi • Blessings upon Prophet Muhammad ﷺ 🌿',
         particles:['🌿','🌟','⭐','✨','💚','🤲','📿','🕌']},
        {id:'hijri_new',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===5&&d.getDate()>=25&&d.getDate()<=27;},
         bg:'linear-gradient(135deg,#44337A 0%,#553C9A 45%,#231942 100%)',
         titleAr:'🌙 رأس السنة الهجرية',titleEn:'🌙 Islamic New Year',
         subtitleAr:'عام هجري جديد مبارك',subtitleEn:'Blessed Islamic New Year',
         tickerAr:'🌙 رأس السنة الهجرية الجديدة • عام مبارك • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Happy Islamic New Year • May this year be full of blessings 🌙',
         particles:['🌙','⭐','✨','🌟','💜','🎊','📿','🕌']},
        {id:'spring',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===3||(d.getMonth()===4&&d.getDate()<=31);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#052e16 100%)',
         titleAr:'🌸 فصل الربيع',titleEn:'🌸 Spring Season',
         subtitleAr:'الطبيعة تتجدّد والأمل يزهر',subtitleEn:'Nature renews & hope blossoms',
         tickerAr:'🌸 مرحباً بالربيع • الأزهار والجمال • فصل الخير والتجديد 🌸',
         tickerEn:'🌸 Welcome Spring • Flowers & Beauty • Season of renewal & hope 🌸',
         particles:['🌸','🌺','🌻','🦋','🌿','🌱','🌼','🍀']},
        {id:'summer',glow:'th-glow-sum',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===5&&dt>=10)||m===6||m===7;},
         bg:'linear-gradient(135deg,#7C2D12 0%,#9A3412 40%,#431407 100%)',
         titleAr:'☀️ فصل الصيف',titleEn:'☀️ Summer Season',
         subtitleAr:'الحرارة والنشاط والإجازات',subtitleEn:'Heat, energy & summer holidays',
         tickerAr:'☀️ مرحباً بالصيف • موسم الإجازات • الشمس تُشرق للجميع ☀️',
         tickerEn:'☀️ Welcome Summer • Vacation season • Enjoy the sunny days ☀️',
         particles:['☀️','🌞','🌊','🏖️','🌴','🍹','🌻','⭐']},
        {id:'autumn',glow:'th-glow-aut',
         match:function(d){return d.getMonth()>=8&&d.getMonth()<=10;},
         bg:'linear-gradient(135deg,#78350F 0%,#92400E 40%,#3B1A08 100%)',
         titleAr:'🍂 فصل الخريف',titleEn:'🍂 Autumn Season',
         subtitleAr:'تتساقط الأوراق وتتجدد الأيام',subtitleEn:'Leaves fall, days refresh',
         tickerAr:'🍂 مرحباً بالخريف • موسم التغيير والجمال • الألوان الذهبية تزيّن الطبيعة 🍂',
         tickerEn:'🍂 Welcome Autumn • Season of change & golden colors 🍂',
         particles:['🍂','🍁','🌾','🍄','🌰','🦔','🍃','🌙']},
        {id:'winter',glow:'th-glow-win',
         match:function(d){var m=d.getMonth(),dt=d.getDate();
           return m===0||m===1||(m===11&&dt>=20)||(m===11&&dt<=17&&dt>=1);},
         bg:'linear-gradient(135deg,#0F172A 0%,#1E3A5F 45%,#0a0f1e 100%)',
         titleAr:'❄️ فصل الشتاء',titleEn:'❄️ Winter Season',
         subtitleAr:'البرد والهدوء وجمال الليالي',subtitleEn:'Cool nights & peaceful days',
         tickerAr:'❄️ مرحباً بالشتاء • موسم الدفء والقهوة • ليالٍ هادئة وجميلة 🌌',
         tickerEn:'❄️ Welcome Winter • Cozy season • Beautiful quiet nights in Qatar 🌌',
         particles:['❄️','⛄','🌨️','✨','💙','🌟','🌙','⭐']},
        {id:'new_year',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===0&&d.getDate()===1;},
         bg:'linear-gradient(135deg,#4C1D95 0%,#6D28D9 45%,#1e0a3c 100%)',
         titleAr:'🎆 كل عام وأنتم بخير',titleEn:'🎆 Happy New Year!',
         subtitleAr:'عام جديد مبارك • ٢٠٢٦',subtitleEn:'Wishing you a wonderful New Year 2026',
         tickerAr:'🎆 سنة جديدة سعيدة • كل عام وأنتم بخير • عام مليء بالخير والسعادة 🎆',
         tickerEn:'🎆 Happy New Year 2026 • Wishing you joy, health & success 🎆',
         particles:['🎆','🎇','✨','🎊','🎉','⭐','💜','🌟']},
        {id:'sport_day',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===11&&d.getDate()===19;},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#022c22 100%)',
         titleAr:'🏃 اليوم الوطني للرياضة',titleEn:'🏃 Qatar National Sport Day',
         subtitleAr:'الرياضة حياة • قطر تتحرك',subtitleEn:'Sport is Life • Qatar Moves',
         tickerAr:'🏃 اليوم الوطني للرياضة • الرياضة صحة وحياة • كن نشيطاً كن صحياً 🏃',
         tickerEn:'🏃 Qatar National Sport Day • Sport is Health & Life • Stay Active 🏃',
         particles:['🏃','⚽','🏅','🎽','💪','🌟','🏆','⭐']}
      ];
      function _detect2(now){for(var i=0;i<THEMES2.length;i++)if(THEMES2[i].match(now))return THEMES2[i];return null;}
      function _spawn2(wrap,particles){
        for(var i=0;i<20;i++){(function(i){setTimeout(function(){
          var p=document.createElement('span');p.className='th-particle';
          p.textContent=particles[i%particles.length];
          p.style.left=Math.random()*100+'%';p.style.top='-20px';
          p.style.animationDelay=(Math.random()*2)+'s';
          p.style.animationDuration=(2.5+Math.random()*2)+'s';
          p.style.fontSize=(0.9+Math.random()*0.7)+'rem';
          wrap.appendChild(p);
          setTimeout(function(){if(p.parentNode)p.parentNode.removeChild(p);},5000);
        },i*160);})(i);}
      }
      function _render2(th){
        var b=document.getElementById('themeBanner2');if(!b)return;
        var isRTL=document.documentElement.dir==='rtl'||document.body.dir==='rtl';
        b.classList.remove('hidden');
        b.style.background=th.bg;
        var title=isRTL?th.titleAr:th.titleEn;
        var subtitle=isRTL?th.subtitleAr:th.subtitleEn;
        var ticker=isRTL?th.tickerAr:th.tickerEn;
        var tc=isRTL?'th-ticker-innerR2':'th-ticker-inner2';
        b.innerHTML=
          '<div style="position:relative;z-index:2;padding:18px 22px 12px;display:flex;flex-direction:column;gap:3px">'
          +'<div style="font-size:clamp(1.2rem,2.5vw,1.55rem);font-weight:800;color:#fff;'
          +'text-shadow:0 2px 12px rgba(0,0,0,.4);animation:th-float 3.5s ease-in-out infinite;display:inline-block">'
          +title+'</div>'
          +'<div style="font-size:.85rem;color:rgba(255,255,255,.8);margin-top:1px">'+subtitle+'</div>'
          +'</div>'
          +'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.25);'
          +'padding:6px 0;overflow:hidden;z-index:3">'
          +'<div class="th-ticker-wrap2"><span class="'+tc+'" '
          +'style="color:rgba(255,255,255,.9);font-size:.78rem;letter-spacing:.03em">'+ticker+'</span></div></div>';
        (function loop(){_spawn2(b,th.particles);setTimeout(loop,5200);})();
      }
      var _th=_detect2(_getNow2());
      if(_th)_render2(_th);
    })();
    </script>
    <script>
    /* ══ THEME DEV PANEL 2 ══ */
    // globals so onclick="" can reach them
    window._thPanel2 = null;

    window._thToggle2 = function(){
      var p = document.getElementById('thDevPanel2');
      if(!p) return;
      var showing = p.style.display === 'block';
      p.style.display = showing ? 'none' : 'block';
      if(!showing){
        var s = document.getElementById('thDevStatus2');
        if(s){
          var cur = localStorage.getItem('nd_test_date');
          s.innerHTML = cur
            ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
            : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
        }
      }
    };

    window._thSet2 = function(d){
      if(d){ localStorage.setItem('nd_test_date', d); }
      else { localStorage.removeItem('nd_test_date'); }
      var inp = document.getElementById('thDateInput2');
      if(inp) inp.value = d || '';
      // refresh banner
      var th = _detect2(_getNow2());
      var b2 = document.getElementById('themeBanner2');
      var br = document.getElementById('thBtnRow');
      if(b2){ b2.innerHTML=''; b2.style.display='none'; }
      if(th){
        _render2(th);
        if(br) br.style.display='flex';
      } else {
        if(br) br.style.display='none';
      }
      // update status
      var s = document.getElementById('thDevStatus2');
      if(s){
        var cur = localStorage.getItem('nd_test_date');
        s.innerHTML = cur
          ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
          : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
      }
    };

    // build panel HTML once DOM ready
    (function(){
      var quick=[
        {label:'🇶🇦 اليوم الوطني', date:'2025-12-18', c:'rgba(139,26,47,.8)'},
        {label:'🌙 عيد الفطر',      date:'2025-03-30', c:'rgba(5,150,105,.8)'},
        {label:'🕌 عيد الأضحى',     date:'2025-06-07', c:'rgba(30,58,95,.9)'},
        {label:'🌙 رمضان',           date:'2025-03-05', c:'rgba(67,56,202,.8)'},
        {label:'🌿 المولد النبوي',   date:'2025-01-29', c:'rgba(20,83,45,.8)'},
        {label:'🌸 الربيع',          date:'2025-04-15', c:'rgba(5,150,105,.7)'},
        {label:'☀️ الصيف',           date:'2025-07-10', c:'rgba(194,65,12,.8)'},
        {label:'🍂 الخريف',          date:'2025-10-01', c:'rgba(120,53,15,.8)'},
        {label:'❄️ الشتاء',          date:'2025-01-15', c:'rgba(30,58,95,.9)'},
        {label:'🎆 رأس السنة',        date:'2026-01-01', c:'rgba(76,29,149,.8)'},
        {label:'🏃 يوم الرياضة',      date:'2025-12-19', c:'rgba(6,78,59,.8)'},
        {label:'📅 اليوم الحقيقي',    date:'',           c:'rgba(55,65,81,.8)'}
      ];
      var qBtns = quick.map(function(q){
        return '<button onclick="window._thSet2(''+q.date+'')"'
          +' style="padding:5px 8px;border:none;border-radius:8px;cursor:pointer;font-size:.75rem;'
          +'background:'+q.c+';color:#fff">'
          +q.label+'</button>';
      }).join('');

      var p = document.createElement('div');
      p.id = 'thDevPanel2';
      p.style.cssText = 'display:none;position:fixed;bottom:24px;right:24px;z-index:99999;width:310px;'
        +'background:rgba(15,23,42,.96);border-radius:16px;padding:16px;'
        +'box-shadow:0 8px 32px rgba(0,0,0,.7);backdrop-filter:blur(12px);'
        +'border:1px solid rgba(255,255,255,.12);color:#e2e8f0;font-size:.83rem';
      p.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'
        +'<span style="font-weight:700;color:#F0C040;font-size:.9rem"><i class="fas fa-palette" style="margin-inline-end:6px"></i>Theme Dev Panel</span>'
        +'<button onclick="document.getElementById('thDevPanel2').style.display='none'"'
        +' style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1.2rem;line-height:1;padding:0">✕</button>'
        +'</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:12px">'+qBtns+'</div>'
        +'<div style="margin-bottom:8px">'
        +'<label style="display:block;margin-bottom:4px;color:#94a3b8">تاريخ مخصص:</label>'
        +'<input type="date" id="thDateInput2" style="width:100%;padding:6px 8px;border-radius:8px;'
        +'border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:.82rem">'
        +'</div>'
        +'<div style="display:flex;gap:8px;margin-bottom:10px">'
        +'<button onclick="var i=document.getElementById('thDateInput2');if(i&&i.value)window._thSet2(i.value)"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(99,102,241,.85);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-play" style="margin-inline-end:4px"></i>تطبيق</button>'
        +'<button onclick="window._thSet2('')"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(239,68,68,.75);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-times" style="margin-inline-end:4px"></i>إلغاء</button>'
        +'</div>'
        +'<div id="thDevStatus2" style="font-size:.75rem;color:#94a3b8;text-align:center;padding:4px;background:rgba(255,255,255,.05);border-radius:6px"></div>';
      document.body.appendChild(p);

      // show btn if theme active
      var th = _detect2(_getNow2());
      var br = document.getElementById('thBtnRow');
      if(th && br) br.style.display = 'flex';
    })();
    </script>
</style>

<div dir="${isRTL?'rtl':'ltr'}" class="space-y-6">

  <!-- ══ HEADER ══════════════════════════════════════════════════════════ -->
  <div class="dash-card p-6" style="background:linear-gradient(135deg,#8B1A2F 0%,#6B1223 100%)">
    <div class="flex items-center justify-between flex-wrap gap-4 ${isRTL?'flex-row-reverse':''}">
      <div class="${isRTL?'text-right':''}">
        <p class="text-white/60 text-sm mb-1">${isRTL?'لوحة متابعتي الشخصية':'My Personal Dashboard'}</p>
        <h1 class="text-2xl font-bold text-white">${isRTL?'مرحباً، الموظف':'Welcome, Employee'}</h1>
        <p class="text-white/70 text-sm mt-1" id="dashSubtitle">${isRTL?'جاري تحميل بياناتك...':'Loading your data...'}</p>
      </div>
      <div class="flex gap-3 flex-wrap ${isRTL?'flex-row-reverse':''}">
        <a href="/staff-request?lang=${lang}" class="px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition"
           style="background:rgba(255,255,255,0.18);border:1px solid rgba(255,255,255,0.3)">
          <i class="fas fa-plus-circle"></i>${isRTL?'طلب جديد':'New Request'}
        </a>
        <button onclick="refreshDash()" class="px-4 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition"
           style="background:rgba(196,146,42,0.8);border:1px solid rgba(196,146,42,0.5)">
          <i class="fas fa-sync-alt" id="refreshIcon"></i>${isRTL?'تحديث':'Refresh'}
        </button>
      </div>
    </div>
  </div>

  <!-- ══ KPI CARDS ════════════════════════════════════════════════════════ -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4" id="kpiCards">
    <div class="dash-card p-5 count-anim" style="border-top:4px solid #8B1A2F">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.1)">
          <i class="fas fa-file-alt" style="color:#8B1A2F"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-2xl font-black text-gray-800" id="kpi_total">—</p>
          <p class="text-xs text-gray-500 font-medium">${isRTL?'إجمالي الطلبات':'Total Requests'}</p>
        </div>
      </div>
    </div>
    <div class="dash-card p-5 count-anim" style="border-top:4px solid #059669;animation-delay:0.1s">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center" style="background:rgba(5,150,105,0.1)">
          <i class="fas fa-check-circle" style="color:#059669"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-2xl font-black text-gray-800" id="kpi_done">—</p>
          <p class="text-xs text-gray-500 font-medium">${isRTL?'منجزة':'Completed'}</p>
        </div>
      </div>
    </div>
    <div class="dash-card p-5 count-anim" style="border-top:4px solid #D97706;animation-delay:0.2s">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center" style="background:rgba(217,119,6,0.1)">
          <i class="fas fa-hand-holding-usd" style="color:#D97706"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-2xl font-black text-gray-800" id="kpi_advances">—</p>
          <p class="text-xs text-gray-500 font-medium">${isRTL?'طلبات سلفة':'Advance Requests'}</p>
        </div>
      </div>
    </div>
    <div class="dash-card p-5 count-anim" style="border-top:4px solid #7C3AED;animation-delay:0.3s">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-11 h-11 rounded-xl flex items-center justify-center" style="background:rgba(124,58,237,0.1)">
          <i class="fas fa-clock" style="color:#7C3AED"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-2xl font-black text-gray-800" id="kpi_pending">—</p>
          <p class="text-xs text-gray-500 font-medium">${isRTL?'قيد المعالجة':'In Progress'}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ MAIN GRID ════════════════════════════════════════════════════════ -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

    <!-- ── COL LEFT: السلف والخصميات ───────────────────────────────────── -->
    <div class="lg:col-span-2 space-y-6">

      <!-- TABS -->
      <div class="flex gap-2 ${isRTL?'flex-row-reverse':''}">
        <button class="tab-btn2 active2" onclick="switchTab('advances',this)">${isRTL?'السلف':'Advances'}</button>
        <button class="tab-btn2" onclick="switchTab('deductions',this)">${isRTL?'الخصميات':'Deductions'}</button>
        <button class="tab-btn2" onclick="switchTab('requests',this)">${isRTL?'سجل الطلبات':'Request Log'}</button>
      </div>

      <!-- ── تاب السلف ──────────────────────────────────────── -->
      <div id="tab_advances">

        <!-- ملخص السلف الحالية -->
        <div class="dash-card p-5 mb-4">
          <div class="flex items-center justify-between mb-4 ${isRTL?'flex-row-reverse':''}">
            <h3 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <i class="fas fa-hand-holding-usd text-sm" style="color:#D97706"></i>
              ${isRTL?'ملخص السلف الحالية':'Current Advances Summary'}
            </h3>
            <span class="text-xs text-gray-400" id="advLastUpdate"></span>
          </div>

          <!-- رصيد السلف -->
          <div class="grid grid-cols-3 gap-3 mb-5">
            <div class="rounded-xl p-3 text-center" style="background:rgba(217,119,6,0.08)">
              <p class="text-xl font-black" style="color:#D97706" id="adv_total_amount">0</p>
              <p class="text-xs text-gray-500 mt-0.5">${isRTL?'إجمالي السلف (ر.ق)':'Total Advances (QAR)'}</p>
            </div>
            <div class="rounded-xl p-3 text-center" style="background:rgba(220,38,38,0.08)">
              <p class="text-xl font-black text-red-600" id="adv_remaining">0</p>
              <p class="text-xs text-gray-500 mt-0.5">${isRTL?'المتبقي (ر.ق)':'Remaining (QAR)'}</p>
            </div>
            <div class="rounded-xl p-3 text-center" style="background:rgba(5,150,105,0.08)">
              <p class="text-xl font-black text-green-600" id="adv_paid">0</p>
              <p class="text-xs text-gray-500 mt-0.5">${isRTL?'المسدَّد (ر.ق)':'Paid (QAR)'}</p>
            </div>
          </div>

          <!-- قائمة السلف -->
          <div id="advancesList" class="space-y-3"></div>

          <div id="advancesEmpty" class="hidden text-center py-8">
            <i class="fas fa-hand-holding-usd text-3xl text-gray-200 mb-2"></i>
            <p class="text-sm text-gray-400">${isRTL?'لا توجد سلف حالية':'No current advances'}</p>
            <a href="/staff-request?lang=${lang}" class="inline-block mt-3 text-xs font-bold px-4 py-2 rounded-xl text-white" style="background:#D97706">${isRTL?'تقديم طلب سلفة':'Request an Advance'}</a>
          </div>
        </div>

      </div>

      <!-- ── تاب الخصميات ──────────────────────────────────── -->
      <div id="tab_deductions" class="hidden">
        <div class="dash-card p-5">
          <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-minus-circle text-sm text-red-500"></i>
            ${isRTL?'كشف الخصميات الشهرية':'Monthly Deductions Statement'}
          </h3>

          <!-- ملخص شهري -->
          <div class="rounded-xl p-4 mb-4 flex items-center justify-between ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#FEF2F2,#FEE2E2)">
            <div class="${isRTL?'text-right':''}">
              <p class="text-xs text-red-600 font-semibold mb-1">${isRTL?'إجمالي الخصميات الشهرية':'Total Monthly Deductions'}</p>
              <p class="text-2xl font-black text-red-700" id="ded_total">0 ${isRTL?'ر.ق':'QAR'}</p>
            </div>
            <div class="w-12 h-12 rounded-xl flex items-center justify-center" style="background:rgba(220,38,38,0.12)">
              <i class="fas fa-calculator text-red-500 text-lg"></i>
            </div>
          </div>

          <!-- جدول الخصميات -->
          <div class="overflow-hidden rounded-xl border border-gray-100">
            <table class="w-full text-sm">
              <thead>
                <tr style="background:#F9FAFB">
                  <th class="px-4 py-3 font-bold text-gray-600 text-${isRTL?'right':'left'} text-xs uppercase">${isRTL?'نوع الخصم':'Deduction Type'}</th>
                  <th class="px-4 py-3 font-bold text-gray-600 text-center text-xs uppercase">${isRTL?'المبلغ (ر.ق)':'Amount (QAR)'}</th>
                  <th class="px-4 py-3 font-bold text-gray-600 text-center text-xs uppercase">${isRTL?'الشهر':'Month'}</th>
                  <th class="px-4 py-3 font-bold text-gray-600 text-center text-xs uppercase">${isRTL?'الحالة':'Status'}</th>
                </tr>
              </thead>
              <tbody id="deductionsBody">
                <tr><td colspan="4" class="text-center py-8 text-gray-400 text-sm">${isRTL?'جاري التحميل...':'Loading...'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- ── تاب سجل الطلبات ──────────────────────────────── -->
      <div id="tab_requests" class="hidden">
        <div class="dash-card p-5">
          <div class="flex items-center justify-between mb-4 ${isRTL?'flex-row-reverse':''}">
            <h3 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <i class="fas fa-list-ul text-sm" style="color:#8B1A2F"></i>
              ${isRTL?'سجل جميع طلباتي':'All My Requests Log'}
            </h3>
            <select id="reqTypeFilter" onchange="renderRequestsTab()" class="text-xs border border-gray-200 rounded-lg px-2 py-1.5 focus:outline-none">
              <option value="all">${isRTL?'جميع الأنواع':'All Types'}</option>
              <option value="salary">${isRTL?'راتب':'Salary'}</option>
              <option value="advance">${isRTL?'سلفة':'Advance'}</option>
              <option value="allowance">${isRTL?'بدل':'Allowance'}</option>
              <option value="certificate">${isRTL?'شهادة':'Certificate'}</option>
              <option value="eos">${isRTL?'نهاية خدمة':'End of Service'}</option>
              <option value="other">${isRTL?'أخرى':'Other'}</option>
            </select>
          </div>

          <!-- Timeline -->
          <div class="relative" id="requestTimeline">
            <div class="text-center py-8 text-gray-400 text-sm">${isRTL?'جاري التحميل...':'Loading...'}</div>
          </div>
        </div>
      </div>

    </div>

    <!-- ── COL RIGHT: تتبع الطلبات + تقويم مدمج ───────────────────────── -->
    <div class="space-y-5">

      <!-- بطاقة تتبع الطلب الأخير -->
      <div class="dash-card p-5">
        <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-search-location text-sm" style="color:#8B1A2F"></i>
          ${isRTL?'تتبع آخر طلب':'Track Latest Request'}
        </h3>
        <div id="trackLatestCard">
          <div class="text-center py-6">
            <div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style="background:rgba(139,26,47,0.08)">
              <i class="fas fa-inbox" style="color:#8B1A2F"></i>
            </div>
            <p class="text-sm text-gray-400">${isRTL?'لا يوجد طلب حالياً':'No active request'}</p>
          </div>
        </div>
      </div>

      <!-- رصيد السلف المتبقي — progress visual -->
      <div class="dash-card p-5">
        <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-wallet text-sm" style="color:#D97706"></i>
          ${isRTL?'رصيد السلف':'Advance Balance'}
        </h3>
        <div id="advanceBalanceViz">
          <p class="text-xs text-gray-400 text-center py-4">${isRTL?'لا توجد سلف نشطة':'No active advances'}</p>
        </div>
      </div>

      <!-- أقرب الأحداث من تقويم الجامعة -->
      <div class="dash-card p-5">
        <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-calendar-alt text-sm" style="color:#7C3AED"></i>
          ${isRTL?'أقرب أحداث الجامعة':'Upcoming QU Events'}
        </h3>
        <div id="upcomingQU" class="space-y-2"></div>
        <a href="/staff?lang=${lang}#fullCalSection" class="mt-3 block text-center text-xs font-bold py-2 rounded-xl transition"
           style="background:rgba(124,58,237,0.08);color:#7C3AED">${isRTL?'عرض التقويم الكامل':'View Full Calendar'}</a>
      </div>

    </div>
  </div>

  <!-- ══ MODAL: تفاصيل الطلب ══════════════════════════════════════════ -->
  <div id="reqDetailModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg" dir="${isRTL?'rtl':'ltr'}">
      <div class="px-6 py-4 flex items-center justify-between ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#8B1A2F,#A52840);border-radius:16px 16px 0 0">
        <h3 class="font-bold text-white" id="rdm_title">${isRTL?'تفاصيل الطلب':'Request Details'}</h3>
        <button onclick="closeReqModal()" class="w-7 h-7 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition">×</button>
      </div>
      <div class="p-6 space-y-4" id="rdm_body"></div>
      <div class="px-6 pb-5 flex gap-3 ${isRTL?'flex-row-reverse':''}">
        <button onclick="closeReqModal()" class="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition">${isRTL?'إغلاق':'Close'}</button>
        <a id="rdm_newReqBtn" href="/staff-request?lang=${lang}" class="flex-1 py-2.5 rounded-xl text-sm font-bold text-white text-center transition" style="background:linear-gradient(135deg,#8B1A2F,#A52840)">${isRTL?'طلب جديد':'New Request'}</a>
      </div>
    </div>
  </div>

</div>

<script>
// ═══════════════════════════════════════════════════════════════════════════
//   STAFF DASHBOARD — لوحة متابعة الموظف
// ═══════════════════════════════════════════════════════════════════════════
const IS_RTL_D = ${isRTL};

// ─── بيانات تقويم جامعة قطر المُمرَّرة من الخادم ───────────────────────
const QU_CAL_EVENTS = ${JSON.stringify(
  (() => {
    const QU_EVENTS_FOR_DASH = [
      { date:'2025-01-01', type:'holiday', icon:'fa-moon',             title: isRTL?'رأس السنة الميلادية':'New Year\'s Day' },
      { date:'2025-01-28', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب يناير':'January Salary' },
      { date:'2025-01-29', type:'holiday', icon:'fa-star-and-crescent',title: isRTL?'المولد النبوي الشريف':'Prophet\'s Birthday' },
      { date:'2025-02-27', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب فبراير':'February Salary' },
      { date:'2025-03-20', type:'advance', icon:'fa-hand-holding-usd', title: isRTL?'آخر موعد سلفة عيد الفطر':'Eid Advance Deadline' },
      { date:'2025-03-25', type:'advance', icon:'fa-hand-holding-usd', title: isRTL?'صرف سلفة عيد الفطر':'Eid Al-Fitr Advance' },
      { date:'2025-03-27', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب مارس':'March Salary' },
      { date:'2025-03-30', type:'holiday', icon:'fa-moon',             title: isRTL?'عيد الفطر (يوم 1)':'Eid Al-Fitr Day 1' },
      { date:'2025-03-31', type:'holiday', icon:'fa-moon',             title: isRTL?'عيد الفطر (يوم 2)':'Eid Al-Fitr Day 2' },
      { date:'2025-04-01', type:'holiday', icon:'fa-moon',             title: isRTL?'عيد الفطر (يوم 3)':'Eid Al-Fitr Day 3' },
      { date:'2025-04-28', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب أبريل':'April Salary' },
      { date:'2025-05-04', type:'university',icon:'fa-pencil-alt',     title: isRTL?'امتحانات نهائية – فصل ربيع':'Final Exams – Spring' },
      { date:'2025-05-15', type:'university',icon:'fa-stop-circle',    title: isRTL?'نهاية الفصل الثاني':'Spring Semester Ends' },
      { date:'2025-05-25', type:'university',icon:'fa-graduation-cap', title: isRTL?'حفل التخرج 2025':'Graduation Ceremony 2025' },
      { date:'2025-05-27', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب مايو':'May Salary' },
      { date:'2025-05-28', type:'advance', icon:'fa-hand-holding-usd', title: isRTL?'آخر موعد سلفة عيد الأضحى':'Eid Adha Advance Deadline' },
      { date:'2025-06-04', type:'advance', icon:'fa-hand-holding-usd', title: isRTL?'صرف سلفة عيد الأضحى':'Eid Al-Adha Advance' },
      { date:'2025-06-06', type:'holiday', icon:'fa-moon',             title: isRTL?'عيد الأضحى (يوم 1)':'Eid Al-Adha Day 1' },
      { date:'2025-06-07', type:'holiday', icon:'fa-moon',             title: isRTL?'عيد الأضحى (يوم 2)':'Eid Al-Adha Day 2' },
      { date:'2025-06-08', type:'holiday', icon:'fa-moon',             title: isRTL?'عيد الأضحى (يوم 3)':'Eid Al-Adha Day 3' },
      { date:'2025-06-26', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب يونيو':'June Salary' },
      { date:'2025-07-28', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب يوليو':'July Salary' },
      { date:'2025-08-24', type:'university',icon:'fa-play-circle',    title: isRTL?'بداية الفصل الأول':'Fall Semester Begins' },
      { date:'2025-08-27', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب أغسطس':'August Salary' },
      { date:'2025-09-01', type:'university',icon:'fa-chalkboard-teacher',title:isRTL?'اجتماع هيئة التدريس':'Faculty Assembly' },
      { date:'2025-09-28', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب سبتمبر':'September Salary' },
      { date:'2025-10-05', type:'event',   icon:'fa-star',             title: isRTL?'اليوم المفتوح لجامعة قطر':'QU Open Day' },
      { date:'2025-10-28', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب أكتوبر':'October Salary' },
      { date:'2025-11-12', type:'event',   icon:'fa-book',             title: isRTL?'معرض الكتاب الجامعي':'University Book Fair' },
      { date:'2025-11-27', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب نوفمبر':'November Salary' },
      { date:'2025-12-07', type:'university',icon:'fa-pencil-alt',     title: isRTL?'امتحانات نهائية – فصل أول':'Final Exams – Fall' },
      { date:'2025-12-10', type:'advance', icon:'fa-hand-holding-usd', title: isRTL?'آخر موعد سلفة اليوم الوطني':'National Day Advance Deadline' },
      { date:'2025-12-15', type:'advance', icon:'fa-hand-holding-usd', title: isRTL?'صرف سلفة اليوم الوطني':'National Day Advance' },
      { date:'2025-12-18', type:'holiday', icon:'fa-flag',             title: isRTL?'اليوم الوطني القطري':'Qatar National Day' },
      { date:'2025-12-20', type:'university',icon:'fa-stop-circle',    title: isRTL?'نهاية الفصل الأول':'Fall Semester Ends' },
      { date:'2025-12-25', type:'salary',  icon:'fa-money-bill-wave',  title: isRTL?'صرف راتب ديسمبر':'December Salary' },
    ];
    return QU_EVENTS_FOR_DASH;
  })()
)};

// ─── تعريفات الأنواع ─────────────────────────────────────────────────────
const TYPE_LABEL = {
  salary:      IS_RTL_D?'استفسار راتب':'Salary Inquiry',
  advance:     IS_RTL_D?'سلفة':'Advance',
  allowance:   IS_RTL_D?'طلب بدل':'Allowance',
  certificate: IS_RTL_D?'شهادة راتب':'Salary Certificate',
  eos:         IS_RTL_D?'نهاية خدمة':'End of Service',
  mission:     IS_RTL_D?'مهمة علمية':'Scientific Mission',
  other:       IS_RTL_D?'أخرى':'Other'
};
const TYPE_COLOR = {salary:'#8B1A2F',advance:'#D97706',allowance:'#0891B2',certificate:'#7C3AED',eos:'#DC2626',mission:'#D97706',other:'#6B7280'};
const TYPE_ICON  = {salary:'fa-money-bill-wave',advance:'fa-hand-holding-usd',allowance:'fa-home',certificate:'fa-file-alt',eos:'fa-door-open',mission:'fa-plane',other:'fa-bell'};
const STATUS_LABEL = {
  pending:   IS_RTL_D?'قيد الانتظار':'Pending',
  review:    IS_RTL_D?'قيد المراجعة':'Under Review',
  approved:  IS_RTL_D?'موافق عليه':'Approved',
  done:      IS_RTL_D?'منجز':'Completed',
  rejected:  IS_RTL_D?'مرفوض':'Rejected',
  returned:  IS_RTL_D?'مُعاد للتعديل':'Returned'
};
const STATUS_COLOR = {pending:'#D97706',review:'#7C3AED',approved:'#0891B2',done:'#059669',rejected:'#DC2626',returned:'#F97316'};
const STATUS_BG    = {pending:'#FEF3C7',review:'#EDE9FE',approved:'#CFFAFE',done:'#D1FAE5',rejected:'#FEE2E2',returned:'#FFEDD5'};

// ─── خطوات تتبع الطلب ───────────────────────────────────────────────────
const TRACK_STEPS = IS_RTL_D
  ? ['تقديم الطلب','قيد المراجعة','موافقة رئيس القسم','معالجة الرواتب','منجز']
  : ['Submitted','Under Review','Dept Head Approval','Payroll Processing','Completed'];
const STEP_STATUS_MAP = {pending:0,review:1,approved:2,done:4,rejected:-1,returned:-1};

// ─── بيانات الخصميات التجريبية ───────────────────────────────────────────
const DEMO_DEDUCTIONS = [
  { type: IS_RTL_D?'استقطاع سلفة':'Advance Deduction',      amount:1500, month: IS_RTL_D?'مايو 2025':'May 2025',      status:'active',  ref:'ADV-001' },
  { type: IS_RTL_D?'تأمين طبي':'Medical Insurance',           amount:250,  month: IS_RTL_D?'مايو 2025':'May 2025',      status:'active',  ref:'INS-2025' },
  { type: IS_RTL_D?'استقطاع سلفة':'Advance Deduction',       amount:1500, month: IS_RTL_D?'أبريل 2025':'April 2025',   status:'paid',    ref:'ADV-001' },
  { type: IS_RTL_D?'تأمين طبي':'Medical Insurance',           amount:250,  month: IS_RTL_D?'أبريل 2025':'April 2025',   status:'paid',    ref:'INS-2025' },
  { type: IS_RTL_D?'مخالفة انضباطية':'Disciplinary Fine',    amount:500,  month: IS_RTL_D?'مارس 2025':'March 2025',    status:'paid',    ref:'DSC-012' },
  { type: IS_RTL_D?'استقطاع سلفة':'Advance Deduction',       amount:1500, month: IS_RTL_D?'مارس 2025':'March 2025',    status:'paid',    ref:'ADV-001' },
  { type: IS_RTL_D?'تأمين طبي':'Medical Insurance',           amount:250,  month: IS_RTL_D?'مارس 2025':'March 2025',    status:'paid',    ref:'INS-2025' },
];

// ─── بيانات السلف التجريبية ──────────────────────────────────────────────
const DEMO_ADVANCES = [
  {
    id:'ADV-001', type: IS_RTL_D?'سلفة عيد الفطر':'Eid Al-Fitr Advance',
    total:6000, paid:4500, remaining:1500,
    monthlyDeduction:1500, startDate:'2025-02-01', expectedEnd:'2025-05-27',
    status:'active', installments:4, paidInstallments:3
  },
];

let _activeTab = 'advances';
let _allRequests = [];

// ══════════════════════════════════════════════════════════════════════════
//   FUNCTIONS
// ══════════════════════════════════════════════════════════════════════════

// ── تحميل الطلبات من localStorage ──────────────────────────────────────
function loadRequests(){
  try{ _allRequests = JSON.parse(localStorage.getItem('sla_requests')||'[]'); }
  catch(e){ _allRequests = []; }
}

// ── تحديث KPIs ──────────────────────────────────────────────────────────
function updateKPIs(){
  const total    = _allRequests.length;
  const done     = _allRequests.filter(function(r){ return r.status==='done'; }).length;
  const advances = _allRequests.filter(function(r){ return r.type==='advance'||r.type==='mission'; }).length;
  const pending  = _allRequests.filter(function(r){ return r.status==='pending'||r.status==='review'||r.status==='approved'; }).length;
  document.getElementById('kpi_total').textContent    = total;
  document.getElementById('kpi_done').textContent     = done;
  document.getElementById('kpi_advances').textContent = advances;
  document.getElementById('kpi_pending').textContent  = pending;

  // الـ subtitle
  const today = new Date();
  const opts = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
  document.getElementById('dashSubtitle').textContent =
    (IS_RTL_D?'آخر تحديث: ':'Last updated: ') + today.toLocaleDateString(IS_RTL_D?'ar-QA':'en-US',opts);
}

// ── رسم تاب السلف ───────────────────────────────────────────────────────
function renderAdvancesTab(){
  const myAdvances = _allRequests.filter(function(r){ return r.type==='advance'||r.type==='mission'; });
  const allAdvances = [...DEMO_ADVANCES];

  // احسب الإجماليات
  let totalAmt=0,remAmt=0,paidAmt=0;
  allAdvances.forEach(function(a){ totalAmt+=a.total; remAmt+=a.remaining; paidAmt+=a.paid; });

  document.getElementById('adv_total_amount').textContent = totalAmt.toLocaleString();
  document.getElementById('adv_remaining').textContent    = remAmt.toLocaleString();
  document.getElementById('adv_paid').textContent         = paidAmt.toLocaleString();
  document.getElementById('advLastUpdate').textContent    = IS_RTL_D?'آخر تحديث: مايو 2025':'Last update: May 2025';

  const list = document.getElementById('advancesList');
  const empty = document.getElementById('advancesEmpty');

  if(allAdvances.length===0){
    list.innerHTML='';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  list.innerHTML = allAdvances.map(function(adv){
    const pct = Math.round((adv.paid/adv.total)*100);
    const instPct = Math.round((adv.paidInstallments/adv.installments)*100);
    const endDate = new Date(adv.expectedEnd);
    const today   = new Date();
    const daysLeft = Math.ceil((endDate-today)/(1000*60*60*24));
    const daysLabel = daysLeft>0
      ? (IS_RTL_D ? daysLeft+' يوم متبقٍ' : daysLeft+' days left')
      : (IS_RTL_D?'انتهت مدة السلفة':'Advance period ended');

    return '<div class="rounded-xl border-2 p-4 space-y-3" style="border-color:#D97706;background:linear-gradient(135deg,#FFFBEB,#FEF9E7)">'
      + '<div class="flex items-start justify-between gap-2 '+(IS_RTL_D?'flex-row-reverse':'')+'">'
      +   '<div class="'+(IS_RTL_D?'text-right':'')+'">'
      +     '<p class="font-bold text-gray-800">'+adv.type+'</p>'
      +     '<p class="text-xs text-gray-500 mt-0.5">'+IS_RTL_D?'رقم السلفة:':'Advance ID:'+'</p>'
      +     '<p class="text-xs font-mono text-amber-700">'+adv.id+'</p>'
      +   '</div>'
      +   '<span class="status-pill" style="background:#FEF3C7;color:#92400E">'
      +     '<i class="fas fa-circle text-amber-500" style="font-size:6px"></i>'
      +     (IS_RTL_D?'نشطة':'Active')
      +   '</span>'
      + '</div>'
      + '<div class="grid grid-cols-3 gap-2 text-center">'
      +   buildMiniStat(IS_RTL_D?'الإجمالي':'Total', adv.total.toLocaleString()+' '+( IS_RTL_D?'ر.ق':'QAR'), '#D97706')
      +   buildMiniStat(IS_RTL_D?'المسدَّد':'Paid',  adv.paid.toLocaleString()+' '+(IS_RTL_D?'ر.ق':'QAR'), '#059669')
      +   buildMiniStat(IS_RTL_D?'المتبقي':'Remaining', adv.remaining.toLocaleString()+' '+(IS_RTL_D?'ر.ق':'QAR'), '#DC2626')
      + '</div>'
      + '<div>'
      +   '<div class="flex justify-between text-xs text-gray-500 mb-1 '+(IS_RTL_D?'flex-row-reverse':'')+'">'
      +     '<span>'+(IS_RTL_D?'تقدم السداد:':'Payment Progress:')+'</span>'
      +     '<span class="font-bold text-amber-700">'+pct+'%</span>'
      +   '</div>'
      +   '<div class="prog-bar"><div class="prog-fill" style="width:'+pct+'%;background:linear-gradient(90deg,#D97706,#F59E0B)"></div></div>'
      + '</div>'
      + '<div class="grid grid-cols-2 gap-2 text-xs '+(IS_RTL_D?'text-right':'')+'">'
      +   '<div class="rounded-lg p-2" style="background:rgba(217,119,6,0.06)">'
      +     '<p class="text-gray-500">'+(IS_RTL_D?'الاستقطاع الشهري':'Monthly Deduction')+'</p>'
      +     '<p class="font-bold text-amber-700">'+adv.monthlyDeduction.toLocaleString()+' '+(IS_RTL_D?'ر.ق':'QAR')+'</p>'
      +   '</div>'
      +   '<div class="rounded-lg p-2" style="background:rgba(217,119,6,0.06)">'
      +     '<p class="text-gray-500">'+(IS_RTL_D?'الأقساط المتبقية':'Remaining Installments')+'</p>'
      +     '<p class="font-bold text-amber-700">'+( adv.installments-adv.paidInstallments)+' / '+adv.installments+'</p>'
      +   '</div>'
      + '</div>'
      + '<div class="flex items-center gap-2 text-xs '+(IS_RTL_D?'flex-row-reverse':'')+'">'
      +   '<i class="fas fa-calendar-check text-amber-600"></i>'
      +   '<span class="text-gray-600">'+(IS_RTL_D?'متوقع الانتهاء: ':'Expected end: ')+formatDate(adv.expectedEnd)+'</span>'
      +   '<span class="'+(daysLeft<=30?'text-red-600 font-bold':'text-gray-400')+'">— '+daysLabel+'</span>'
      + '</div>'
      + '</div>';
  }).join('');

  // render advance balance in sidebar too
  renderAdvanceBalance(allAdvances);
}

function buildMiniStat(label, value, color){
  return '<div class="rounded-lg p-2" style="background:white;border:1px solid #E5E7EB">'
    + '<p class="font-black text-sm" style="color:'+color+'">'+value+'</p>'
    + '<p class="text-xs text-gray-400">'+label+'</p>'
    + '</div>';
}

function renderAdvanceBalance(advances){
  const viz = document.getElementById('advanceBalanceViz');
  if(!advances||advances.length===0){
    viz.innerHTML='<p class="text-xs text-gray-400 text-center py-4">'+(IS_RTL_D?'لا توجد سلف نشطة':'No active advances')+'</p>';
    return;
  }
  viz.innerHTML = advances.map(function(adv){
    const pct = Math.round((adv.paid/adv.total)*100);
    const remPct = 100-pct;
    return '<div class="space-y-2">'
      + '<div class="flex justify-between text-sm '+(IS_RTL_D?'flex-row-reverse':'')+'">'
      +   '<span class="font-semibold text-gray-700">'+adv.type+'</span>'
      +   '<span class="text-xs text-gray-400">'+adv.id+'</span>'
      + '</div>'
      + '<div class="prog-bar"><div class="prog-fill" style="width:'+pct+'%;background:linear-gradient(90deg,#059669,#34D399)"></div></div>'
      + '<div class="flex justify-between text-xs '+(IS_RTL_D?'flex-row-reverse':'')+'">'
      +   '<span class="text-green-600 font-bold">'+IS_RTL_D?'مسدَّد:':'Paid:'+' '+pct+'%</span>'
      +   '<span class="text-red-500 font-bold">'+IS_RTL_D?'متبقٍ:':'Rem:'+' '+remPct+'%</span>'
      + '</div>'
      + '<div class="mt-2 flex items-center justify-between rounded-xl p-3 '+(IS_RTL_D?'flex-row-reverse':'')+'" style="background:#FEF9E7;border:1px dashed #D97706">'
      +   '<div class="'+(IS_RTL_D?'text-right':'')+'">'
      +     '<p class="text-xs text-gray-500">'+(IS_RTL_D?'المتبقي':'Remaining')+'</p>'
      +     '<p class="text-lg font-black text-red-600">'+adv.remaining.toLocaleString()+' <span class="text-xs font-normal">'+(IS_RTL_D?'ر.ق':'QAR')+'</span></p>'
      +   '</div>'
      +   '<div class="'+(IS_RTL_D?'text-right':'')+'">'
      +     '<p class="text-xs text-gray-500">'+(IS_RTL_D?'الاستقطاع الشهري':'Monthly')+'</p>'
      +     '<p class="text-base font-bold text-amber-700">'+adv.monthlyDeduction.toLocaleString()+' <span class="text-xs font-normal">'+(IS_RTL_D?'ر.ق':'QAR')+'</span></p>'
      +   '</div>'
      + '</div>'
      + '<p class="text-xs text-center text-gray-400">'+(IS_RTL_D?'انتهاء السلفة: ':'Advance ends: ')+formatDate(adv.expectedEnd)+'</p>'
      + '</div>';
  }).join('');
}

// ── رسم تاب الخصميات ────────────────────────────────────────────────────
function renderDeductionsTab(){
  const body = document.getElementById('deductionsBody');
  const total = DEMO_DEDUCTIONS.filter(function(d){ return d.status==='active'; }).reduce(function(s,d){ return s+d.amount; },0);
  document.getElementById('ded_total').textContent = total.toLocaleString()+' '+(IS_RTL_D?'ر.ق':'QAR');

  body.innerHTML = DEMO_DEDUCTIONS.map(function(d){
    const isPaid = d.status==='paid';
    return '<tr class="deduction-row">'
      + '<td class="px-4 py-3 '+(IS_RTL_D?'text-right':'')+'">'
      +   '<div class="flex items-center gap-2 '+(IS_RTL_D?'flex-row-reverse justify-end':'')+'">'
      +     '<div class="w-7 h-7 rounded-lg flex items-center justify-center" style="background:'+(isPaid?'#D1FAE5':'#FEE2E2')+'">'
      +       '<i class="fas '+(isPaid?'fa-check':'fa-minus')+' text-xs" style="color:'+(isPaid?'#059669':'#DC2626')+'"></i>'
      +     '</div>'
      +     '<div>'
      +       '<p class="text-sm font-semibold text-gray-800">'+d.type+'</p>'
      +       '<p class="text-xs text-gray-400">'+d.ref+'</p>'
      +     '</div>'
      +   '</div>'
      + '</td>'
      + '<td class="px-4 py-3 text-center"><span class="font-bold '+(isPaid?'text-gray-400':'text-red-600')+'">'+d.amount.toLocaleString()+'</span></td>'
      + '<td class="px-4 py-3 text-center text-xs text-gray-500">'+d.month+'</td>'
      + '<td class="px-4 py-3 text-center">'
      +   '<span class="status-pill" style="background:'+(isPaid?'#D1FAE5':'#FEE2E2')+';color:'+(isPaid?'#059669':'#DC2626')+'">'
      +     '<i class="fas '+(isPaid?'fa-check-circle':'fa-clock')+'" style="font-size:9px"></i>'
      +     (isPaid?(IS_RTL_D?'مسدَّد':'Paid'):(IS_RTL_D?'نشط':'Active'))
      +   '</span>'
      + '</td>'
      + '</tr>';
  }).join('');
}

// ── رسم تاب سجل الطلبات (timeline) ─────────────────────────────────────
function renderRequestsTab(){
  const filter = document.getElementById('reqTypeFilter').value;
  const filtered = filter==='all' ? _allRequests : _allRequests.filter(function(r){ return r.type===filter; });
  const container = document.getElementById('requestTimeline');

  if(filtered.length===0){
    container.innerHTML = '<div class="text-center py-10"><i class="fas fa-inbox text-3xl text-gray-200 mb-2"></i><p class="text-sm text-gray-400">'+(IS_RTL_D?'لا توجد طلبات':'No requests found')+'</p></div>';
    return;
  }

  container.innerHTML = '<div class="relative ps-10 space-y-4"><div class="timeline-line"></div>'
    + filtered.slice().reverse().map(function(req,idx){
        const color  = TYPE_COLOR[req.type]||'#6B7280';
        const icon   = TYPE_ICON[req.type]||'fa-bell';
        const status = req.status||'pending';
        const sColor = STATUS_COLOR[status]||'#6B7280';
        const sBG    = STATUS_BG[status]||'#F3F4F6';
        const sLabel = STATUS_LABEL[status]||status;
        const typeLabel = TYPE_LABEL[req.type]||req.type;
        const date = req.submittedAt ? formatDate(req.submittedAt) : '—';
        const step = STEP_STATUS_MAP[status]!==undefined ? STEP_STATUS_MAP[status] : 0;
        const stepPct = status==='done'?100:status==='rejected'||status==='returned'?0:Math.round((step/4)*100);

        return '<div class="relative cursor-pointer" onclick="openReqDetail('+JSON.stringify(req).replace(/"/g,'&quot;')+')">'
          + '<div class="absolute '+(IS_RTL_D?'right-0 -translate-x-2':'left-0 -translate-x-2')+' top-4 w-9 h-9 rounded-full flex items-center justify-center shadow-md" style="background:'+color+';transform:translateX('+(IS_RTL_D?'12':'-12')+'px)">'
          +   '<i class="fas '+icon+' text-white text-xs"></i>'
          + '</div>'
          + '<div class="dash-card p-4 hover:shadow-lg">'
          +   '<div class="flex items-start justify-between gap-2 mb-2 '+(IS_RTL_D?'flex-row-reverse':'')+'">'
          +     '<div class="'+(IS_RTL_D?'text-right':'')+'">'
          +       '<p class="font-bold text-gray-800 text-sm">'+typeLabel+'</p>'
          +       '<p class="text-xs text-gray-400 mt-0.5 font-mono">'+req.id+'</p>'
          +     '</div>'
          +     '<span class="status-pill flex-shrink-0" style="background:'+sBG+';color:'+sColor+'">'+sLabel+'</span>'
          +   '</div>'
          +   '<div class="prog-bar mb-1"><div class="prog-fill" style="width:'+stepPct+'%;background:'+color+'"></div></div>'
          +   '<div class="flex justify-between text-xs text-gray-400 '+(IS_RTL_D?'flex-row-reverse':'')+'">'
          +     '<span><i class="fas fa-calendar-alt me-1"></i>'+date+'</span>'
          +     '<span>'+(IS_RTL_D?'خطوة ':'Step ')+(status==='done'?TRACK_STEPS.length:(step+1))+'/'+TRACK_STEPS.length+'</span>'
          +   '</div>'
          + '</div>'
          + '</div>';
      }).join('')
    + '</div>';
}

// ── تتبع آخر طلب ────────────────────────────────────────────────────────
function renderLatestTracker(){
  const card = document.getElementById('trackLatestCard');
  const active = _allRequests.filter(function(r){ return r.status!=='done'&&r.status!=='rejected'; });
  const req = active.length>0 ? active[0] : (_allRequests.length>0 ? _allRequests[0] : null);

  if(!req){
    card.innerHTML = '<div class="text-center py-6"><div class="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center" style="background:rgba(139,26,47,0.08)"><i class="fas fa-inbox" style="color:#8B1A2F"></i></div><p class="text-sm text-gray-400">'+(IS_RTL_D?'لا يوجد طلب حالياً':'No active request')+'</p><a href="/staff-request?lang=${lang}" class="inline-block mt-3 text-xs font-bold px-4 py-2 rounded-xl text-white" style="background:#8B1A2F">'+(IS_RTL_D?'قدّم طلبك':'Submit Request')+'</a></div>';
    return;
  }

  const color  = TYPE_COLOR[req.type]||'#6B7280';
  const icon   = TYPE_ICON[req.type]||'fa-bell';
  const status = req.status||'pending';
  const sColor = STATUS_COLOR[status]||'#6B7280';
  const sBG    = STATUS_BG[status]||'#F3F4F6';
  const step   = STEP_STATUS_MAP[status]!==undefined?STEP_STATUS_MAP[status]:0;

  card.innerHTML = '<div class="space-y-3">'
    // رأس البطاقة
    + '<div class="rounded-xl p-3 flex items-center gap-3 '+(IS_RTL_D?'flex-row-reverse':'')+'" style="background:'+color+'18">'
    +   '<div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:'+color+'">'
    +     '<i class="fas '+icon+' text-white text-sm"></i>'
    +   '</div>'
    +   '<div class="flex-1 '+(IS_RTL_D?'text-right':'')+'">'
    +     '<p class="font-bold text-gray-800 text-sm">'+(TYPE_LABEL[req.type]||req.type)+'</p>'
    +     '<p class="text-xs font-mono text-gray-400">'+req.id+'</p>'
    +   '</div>'
    +   '<span class="status-pill" style="background:'+sBG+';color:'+sColor+'">'+(STATUS_LABEL[status]||status)+'</span>'
    + '</div>'
    // خطوات التتبع
    + '<div class="space-y-1.5">'
    + TRACK_STEPS.map(function(label,i){
        const done    = status==='done' ? true : i<step;
        const current = status!=='done' && i===step;
        const rejected= (status==='rejected'||status==='returned') && i===step;
        let bg,txtC,dotC,iconI;
        if(done){        bg='#D1FAE5';txtC='#059669';dotC='#059669';iconI='fa-check-circle'; }
        else if(current){ bg='rgba(139,26,47,0.08)';txtC='#8B1A2F';dotC='#8B1A2F';iconI='fa-dot-circle'; }
        else if(rejected){bg='#FEE2E2';txtC='#DC2626';dotC='#DC2626';iconI='fa-times-circle'; }
        else{             bg='transparent';txtC='#9CA3AF';dotC='#D1D5DB';iconI='fa-circle'; }
        return '<div class="flex items-center gap-2 rounded-lg px-3 py-2 '+(IS_RTL_D?'flex-row-reverse':'')+'" style="background:'+bg+'">'
          + '<i class="fas '+iconI+' text-xs" style="color:'+dotC+'"></i>'
          + '<span class="text-xs font-semibold flex-1 '+(IS_RTL_D?'text-right':'')+'" style="color:'+txtC+'">'+label+'</span>'
          + (current?'<span class="text-xs text-gray-400 animate-pulse">'+(IS_RTL_D?'الآن':'Now')+'</span>':'')
          + '</div>';
      }).join('')
    + '</div>'
    // تاريخ التقديم
    + '<p class="text-xs text-gray-400 text-center">'
    +   '<i class="fas fa-calendar-alt me-1"></i>'
    +   (IS_RTL_D?'تاريخ التقديم: ':'Submitted: ')+(req.submittedAt?formatDate(req.submittedAt):'—')
    + '</p>'
    + '<button onclick="openReqDetail(JSON.parse(this.dataset.req))" data-req="'+JSON.stringify(req).replace(/"/g,'&quot;')+'" class="w-full py-2 rounded-xl text-xs font-bold text-white transition" style="background:'+color+'">'
    +   (IS_RTL_D?'عرض تفاصيل الطلب':'View Request Details')+'</button>'
    + '</div>';
}

// ── عرض الأحداث القادمة من تقويم جامعة قطر ──────────────────────────────
function renderUpcomingQU(){
  const today = new Date();
  today.setHours(0,0,0,0);
  const todayStr = today.toISOString().substring(0,10);
  const in30 = new Date(today); in30.setDate(in30.getDate()+60);
  const in30Str = in30.toISOString().substring(0,10);

  const upcoming = QU_CAL_EVENTS.filter(function(ev){
    return ev.date >= todayStr && ev.date <= in30Str;
  }).sort(function(a,b){ return a.date.localeCompare(b.date); }).slice(0,5);

  const container = document.getElementById('upcomingQU');
  if(upcoming.length===0){
    container.innerHTML='<p class="text-xs text-gray-400 text-center py-3">'+(IS_RTL_D?'لا أحداث قادمة':'No upcoming events')+'</p>';
    return;
  }

  const typeColor={'holiday':'#6B7280','salary':'#8B1A2F','advance':'#D97706','university':'#7C3AED','event':'#DB2777'};
  container.innerHTML = upcoming.map(function(ev){
    const d = new Date(ev.date);
    const day = d.getDate();
    const mon = IS_RTL_D
      ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'][d.getMonth()]
      : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
    const diff = Math.ceil((d-today)/(1000*60*60*24));
    const diffLabel = diff===0?(IS_RTL_D?'اليوم':'Today'):diff===1?(IS_RTL_D?'غداً':'Tomorrow'):(IS_RTL_D?'بعد '+diff+' يوم':'in '+diff+' days');
    const c = typeColor[ev.type]||'#6B7280';
    return '<div class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition '+(IS_RTL_D?'flex-row-reverse':'')+'">'
      + '<div class="w-10 h-10 rounded-xl flex flex-col items-center justify-center flex-shrink-0" style="background:'+c+'18">'
      +   '<span class="text-base font-black leading-none" style="color:'+c+'">'+day+'</span>'
      +   '<span class="text-xs leading-none" style="color:'+c+'">'+mon+'</span>'
      + '</div>'
      + '<div class="flex-1 min-w-0 '+(IS_RTL_D?'text-right':'')+'">'
      +   '<p class="text-xs font-semibold text-gray-800 truncate">'+ev.title+'</p>'
      +   '<p class="text-xs" style="color:'+c+'">'+diffLabel+'</p>'
      + '</div>'
      + '<i class="fas '+ev.icon+' text-xs flex-shrink-0" style="color:'+c+'"></i>'
      + '</div>';
  }).join('');
}

// ── Modal تفاصيل الطلب ──────────────────────────────────────────────────
function openReqDetail(req){
  if(typeof req==='string') req=JSON.parse(req);
  const color  = TYPE_COLOR[req.type]||'#6B7280';
  const status = req.status||'pending';
  const step   = STEP_STATUS_MAP[status]!==undefined?STEP_STATUS_MAP[status]:0;
  const stepPct= status==='done'?100:Math.round((step/4)*100);

  document.getElementById('rdm_title').textContent = (TYPE_LABEL[req.type]||req.type)+' — '+req.id;

  document.getElementById('rdm_body').innerHTML =
    // معلومات أساسية
    '<div class="grid grid-cols-2 gap-3">'
    + infoChip(IS_RTL_D?'رقم الطلب':'Request ID', req.id, 'fa-hashtag')
    + infoChip(IS_RTL_D?'النوع':'Type', TYPE_LABEL[req.type]||req.type, 'fa-tag')
    + infoChip(IS_RTL_D?'الحالة':'Status', STATUS_LABEL[status]||status, 'fa-info-circle', STATUS_COLOR[status])
    + infoChip(IS_RTL_D?'تاريخ التقديم':'Submitted', req.submittedAt?formatDate(req.submittedAt):'—', 'fa-calendar-alt')
    + infoChip(IS_RTL_D?'الأولوية':'Priority', req.priority||'normal', 'fa-flag')
    + infoChip(IS_RTL_D?'الموظف':'Employee', req.emp||'—', 'fa-user')
    + '</div>'
    // وصف الطلب
    + '<div class="rounded-xl p-3" style="background:#F9FAFB">'
    +   '<p class="text-xs font-bold text-gray-500 mb-1">'+(IS_RTL_D?'وصف الطلب:':'Description:')+'</p>'
    +   '<p class="text-sm text-gray-700">'+(req.desc||req.description||'—')+'</p>'
    + '</div>'
    // شريط التقدم
    + '<div>'
    +   '<div class="flex justify-between text-xs text-gray-500 mb-1 '+(IS_RTL_D?'flex-row-reverse':'')+'">'
    +     '<span>'+(IS_RTL_D?'تقدم الطلب:':'Progress:')+'</span>'
    +     '<span class="font-bold" style="color:'+color+'">'+stepPct+'%</span>'
    +   '</div>'
    +   '<div class="prog-bar"><div class="prog-fill" style="width:'+stepPct+'%;background:'+color+'"></div></div>'
    + '</div>'
    // خطوات التتبع
    + '<div class="space-y-1">'
    + TRACK_STEPS.map(function(label,i){
        const done    = status==='done'?true:i<step;
        const current = status!=='done'&&i===step;
        const rejected= (status==='rejected'||status==='returned')&&i===step;
        let bg='transparent',txtC='#9CA3AF',iconI='fa-circle';
        if(done){        bg='#D1FAE5';txtC='#059669';iconI='fa-check-circle'; }
        else if(current){ bg='rgba(139,26,47,0.08)';txtC='#8B1A2F';iconI='fa-dot-circle'; }
        else if(rejected){bg='#FEE2E2';txtC='#DC2626';iconI='fa-times-circle'; }
        return '<div class="flex items-center gap-2 rounded-lg px-3 py-1.5 '+(IS_RTL_D?'flex-row-reverse':'')+'" style="background:'+bg+'">'
          + '<i class="fas '+iconI+' text-xs" style="color:'+txtC+'"></i>'
          + '<span class="text-xs '+(IS_RTL_D?'text-right':'')+'" style="color:'+txtC+'">'+label+'</span>'
          + (current?'<i class="fas fa-angle-double-'+(IS_RTL_D?'left':'right')+' ms-auto text-xs animate-pulse" style="color:'+txtC+'"></i>':'')
          + '</div>';
      }).join('')
    + '</div>'
    // إذا كان سلفة — معلومات إضافية
    + (req.type==='advance'?
        '<div class="rounded-xl p-3 '+(IS_RTL_D?'text-right':'')+'" style="background:#FEF9E7;border:1px dashed #D97706">'
        + '<p class="text-xs font-bold text-amber-700 mb-2">'+(IS_RTL_D?'تفاصيل السلفة':'Advance Details')+'</p>'
        + '<div class="grid grid-cols-2 gap-2 text-xs">'
        + infoChipSmall(IS_RTL_D?'الإجمالي المطلوب':'Amount Requested', '— '+( IS_RTL_D?'ر.ق':'QAR'))
        + infoChipSmall(IS_RTL_D?'عدد الأقساط':'Installments', '— '+( IS_RTL_D?'قسط':'installments'))
        + '</div>'
        + '</div>'
      : '')
    // تعليق رئيس القسم إن وجد
    + (req.assignedNote||req.adminNote?
        '<div class="rounded-xl p-3 '+(IS_RTL_D?'text-right':'')+'" style="background:#EFF6FF">'
        + '<p class="text-xs font-bold text-blue-700 mb-1"><i class="fas fa-comment-dots me-1"></i>'+(IS_RTL_D?'ملاحظة الجهة المختصة:':'Dept Note:')+'</p>'
        + '<p class="text-xs text-blue-600">'+(req.assignedNote||req.adminNote)+'</p>'
        + '</div>'
      : '');

  document.getElementById('reqDetailModal').classList.remove('hidden');
}

function infoChip(label, value, icon, color){
  color = color||'#6B7280';
  return '<div class="rounded-xl p-2.5 '+(IS_RTL_D?'text-right':'')+'" style="background:#F9FAFB">'
    + '<p class="text-xs text-gray-400 mb-0.5"><i class="fas '+icon+' me-1"></i>'+label+'</p>'
    + '<p class="text-sm font-bold" style="color:'+color+'">'+value+'</p>'
    + '</div>';
}
function infoChipSmall(label, value){
  return '<div class="'+(IS_RTL_D?'text-right':'')+'">'
    + '<p class="text-gray-400 mb-0.5">'+label+'</p>'
    + '<p class="font-bold text-gray-700">'+value+'</p>'
    + '</div>';
}

function closeReqModal(){ document.getElementById('reqDetailModal').classList.add('hidden'); }

// ── Tab switching ────────────────────────────────────────────────────────
function switchTab(tab, btn){
  _activeTab = tab;
  ['advances','deductions','requests'].forEach(function(t){
    const el = document.getElementById('tab_'+t);
    if(el) el.classList.toggle('hidden', t!==tab);
  });
  document.querySelectorAll('.tab-btn2').forEach(function(b){ b.classList.remove('active2'); });
  if(btn) btn.classList.add('active2');
  if(tab==='deductions') renderDeductionsTab();
  if(tab==='requests') renderRequestsTab();
}

// ── format date helper ───────────────────────────────────────────────────
function formatDate(dateStr){
  if(!dateStr) return '—';
  const d = new Date(dateStr);
  const day = d.getDate();
  const mon = IS_RTL_D
    ? ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'][d.getMonth()]
    : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()];
  return day+' '+mon+' '+d.getFullYear();
}

// ── refresh ──────────────────────────────────────────────────────────────
function refreshDash(){
  const icon = document.getElementById('refreshIcon');
  icon.classList.add('fa-spin');
  setTimeout(function(){
    loadRequests();
    updateKPIs();
    renderAdvancesTab();
    renderLatestTracker();
    renderUpcomingQU();
    if(_activeTab==='deductions') renderDeductionsTab();
    if(_activeTab==='requests') renderRequestsTab();
    icon.classList.remove('fa-spin');
  }, 600);
}

// ── INIT ─────────────────────────────────────────────────────────────────
loadRequests();
updateKPIs();
renderAdvancesTab();
renderLatestTracker();
renderUpcomingQU();
</script>`

  return c.html(staffLayout(isRTL?'لوحة متابعتي':'My Dashboard', content, 'dashboard', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF FORMS  /staff-forms
// ─────────────────────────────────────────────────────────────────────────────
app.get('/staff-forms', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = isRTL ? 'النماذج والوثائق' : 'Forms & Documents'

  const content = `
  <div dir="${isRTL?'rtl':'ltr'}">

    <!-- ══ THEME BTN ══ -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:4px">
      <button id="thInlineBtn" onclick="window._thToggle2&&window._thToggle2()"
        style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border:none;border-radius:10px;background:rgba(55,65,81,0.85);color:#F0C040;font-size:.78rem;font-weight:700;cursor:pointer;backdrop-filter:blur(6px);box-shadow:0 2px 8px rgba(0,0,0,.25);transition:.2s"
        onmouseover="this.style.background='rgba(79,70,229,.9)'" onmouseout="this.style.background='rgba(55,65,81,0.85)'">
        <i class="fas fa-palette"></i> Theme
      </button>
    </div>
    <!-- ══ THEME BANNER 2 ══ -->
    <div id="themeBanner2" class="hidden relative rounded-2xl overflow-hidden" style="min-height:130px"></div>
    <script>
    (function(){
      /* reuse shared helpers if already defined by /staff page in same session — 
         but since each page is standalone, we define them locally with suffix 2 */
      function _getNow2(){
        try{var ov=localStorage.getItem('nd_test_date');
          if(ov){var p=ov.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
        }catch(e){}
        return new Date();
      }
      var THEMES2=[
        {id:'national',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===11&&d.getDate()===18;},
         bg:'linear-gradient(135deg,#8B1A2F 0%,#6B0A22 40%,#1a1a2e 100%)',
         titleAr:'🇶🇦 كل عام وقطر بخير',titleEn:'🇶🇦 Happy Qatar National Day',
         subtitleAr:'اليوم الوطني القطري — ١٨ ديسمبر',subtitleEn:'Qatar National Day — December 18',
         tickerAr:'🇶🇦 يوم المجد والعطاء • تحيا قطر • ١٨ ديسمبر يوم العز والكرامة • الله يحفظ قطر وقيادتها 🇶🇦',
         tickerEn:'🇶🇦 Glory & Pride • Long Live Qatar • December 18 • God Bless Qatar 🇶🇦',
         particles:['🇶🇦','⭐','✨','🌟','🎊','🎉','🏅','💫']},
        {id:'eid_fitr',glow:'th-glow-eid',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===2&&dt>=29)||(m===3&&dt<=3);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 45%,#0D2B1F 100%)',
         titleAr:'🌙 عيد الفطر المبارك',titleEn:'🌙 Eid Al-Fitr Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله صيامكم',subtitleEn:'May your fast be accepted • Happy Eid',
         tickerAr:'🌙 عيد الفطر المبارك • تقبّل الله منا ومنكم • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Eid Al-Fitr Mubarak • May Allah accept our deeds • Happy Eid to all 🌙',
         particles:['🌙','⭐','✨','🌟','🎊','💚','🕌','🤲']},
        {id:'eid_adha',glow:'th-glow-eid',
         match:function(d){return d.getMonth()===5&&d.getDate()>=5&&d.getDate()<=10;},
         bg:'linear-gradient(135deg,#1E3A5F 0%,#1a4a7a 45%,#0f1f36 100%)',
         titleAr:'🕌 عيد الأضحى المبارك',titleEn:'🕌 Eid Al-Adha Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله طاعتكم',subtitleEn:'May your worship be accepted • Happy Eid',
         tickerAr:'🕌 عيد الأضحى المبارك • تقبّل الله منا ومنكم صالح الأعمال • كل عام وأنتم بخير 🕌',
         tickerEn:'🕌 Eid Al-Adha Mubarak • May Allah accept our sacrifices • Happy Eid to all 🕌',
         particles:['🕌','🌙','⭐','✨','💙','🤲','🌟','🎊']},
        {id:'ramadan',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===2&&d.getDate()>=1&&d.getDate()<=28;},
         bg:'linear-gradient(135deg,#1E1B4B 0%,#312E81 45%,#0D0B2E 100%)',
         titleAr:'🌙 رمضان كريم',titleEn:'🌙 Ramadan Kareem',
         subtitleAr:'شهر الخير والبركة والعبادة',subtitleEn:'Month of Blessings & Worship',
         tickerAr:'🌙 رمضان كريم • شهر القرآن والخير • تقبّل الله صيامكم وقيامكم 🌙',
         tickerEn:'🌙 Ramadan Kareem • Month of Quran • May Allah accept your fasting 🌙',
         particles:['🌙','⭐','🌟','✨','📿','🕌','🤲','💜']},
        {id:'mawlid',glow:'th-glow-nb',
         match:function(d){return d.getMonth()===0&&d.getDate()>=28&&d.getDate()<=30;},
         bg:'linear-gradient(135deg,#14532D 0%,#166534 45%,#052E16 100%)',
         titleAr:'🌿 المولد النبوي الشريف',titleEn:'🌿 Mawlid Al-Nabawi',
         subtitleAr:'ذكرى مولد سيدنا محمد ﷺ',subtitleEn:'Birthday of Prophet Muhammad ﷺ',
         tickerAr:'🌿 بمناسبة المولد النبوي الشريف • صلِّ على النبي محمد ﷺ 🌿',
         tickerEn:'🌿 Happy Mawlid Al-Nabawi • Blessings upon Prophet Muhammad ﷺ 🌿',
         particles:['🌿','🌟','⭐','✨','💚','🤲','📿','🕌']},
        {id:'hijri_new',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===5&&d.getDate()>=25&&d.getDate()<=27;},
         bg:'linear-gradient(135deg,#44337A 0%,#553C9A 45%,#231942 100%)',
         titleAr:'🌙 رأس السنة الهجرية',titleEn:'🌙 Islamic New Year',
         subtitleAr:'عام هجري جديد مبارك',subtitleEn:'Blessed Islamic New Year',
         tickerAr:'🌙 رأس السنة الهجرية الجديدة • عام مبارك • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Happy Islamic New Year • May this year be full of blessings 🌙',
         particles:['🌙','⭐','✨','🌟','💜','🎊','📿','🕌']},
        {id:'spring',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===3||(d.getMonth()===4&&d.getDate()<=31);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#052e16 100%)',
         titleAr:'🌸 فصل الربيع',titleEn:'🌸 Spring Season',
         subtitleAr:'الطبيعة تتجدّد والأمل يزهر',subtitleEn:'Nature renews & hope blossoms',
         tickerAr:'🌸 مرحباً بالربيع • الأزهار والجمال • فصل الخير والتجديد 🌸',
         tickerEn:'🌸 Welcome Spring • Flowers & Beauty • Season of renewal & hope 🌸',
         particles:['🌸','🌺','🌻','🦋','🌿','🌱','🌼','🍀']},
        {id:'summer',glow:'th-glow-sum',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===5&&dt>=10)||m===6||m===7;},
         bg:'linear-gradient(135deg,#7C2D12 0%,#9A3412 40%,#431407 100%)',
         titleAr:'☀️ فصل الصيف',titleEn:'☀️ Summer Season',
         subtitleAr:'الحرارة والنشاط والإجازات',subtitleEn:'Heat, energy & summer holidays',
         tickerAr:'☀️ مرحباً بالصيف • موسم الإجازات • الشمس تُشرق للجميع ☀️',
         tickerEn:'☀️ Welcome Summer • Vacation season • Enjoy the sunny days ☀️',
         particles:['☀️','🌞','🌊','🏖️','🌴','🍹','🌻','⭐']},
        {id:'autumn',glow:'th-glow-aut',
         match:function(d){return d.getMonth()>=8&&d.getMonth()<=10;},
         bg:'linear-gradient(135deg,#78350F 0%,#92400E 40%,#3B1A08 100%)',
         titleAr:'🍂 فصل الخريف',titleEn:'🍂 Autumn Season',
         subtitleAr:'تتساقط الأوراق وتتجدد الأيام',subtitleEn:'Leaves fall, days refresh',
         tickerAr:'🍂 مرحباً بالخريف • موسم التغيير والجمال • الألوان الذهبية تزيّن الطبيعة 🍂',
         tickerEn:'🍂 Welcome Autumn • Season of change & golden colors 🍂',
         particles:['🍂','🍁','🌾','🍄','🌰','🦔','🍃','🌙']},
        {id:'winter',glow:'th-glow-win',
         match:function(d){var m=d.getMonth(),dt=d.getDate();
           return m===0||m===1||(m===11&&dt>=20)||(m===11&&dt<=17&&dt>=1);},
         bg:'linear-gradient(135deg,#0F172A 0%,#1E3A5F 45%,#0a0f1e 100%)',
         titleAr:'❄️ فصل الشتاء',titleEn:'❄️ Winter Season',
         subtitleAr:'البرد والهدوء وجمال الليالي',subtitleEn:'Cool nights & peaceful days',
         tickerAr:'❄️ مرحباً بالشتاء • موسم الدفء والقهوة • ليالٍ هادئة وجميلة 🌌',
         tickerEn:'❄️ Welcome Winter • Cozy season • Beautiful quiet nights in Qatar 🌌',
         particles:['❄️','⛄','🌨️','✨','💙','🌟','🌙','⭐']},
        {id:'new_year',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===0&&d.getDate()===1;},
         bg:'linear-gradient(135deg,#4C1D95 0%,#6D28D9 45%,#1e0a3c 100%)',
         titleAr:'🎆 كل عام وأنتم بخير',titleEn:'🎆 Happy New Year!',
         subtitleAr:'عام جديد مبارك • ٢٠٢٦',subtitleEn:'Wishing you a wonderful New Year 2026',
         tickerAr:'🎆 سنة جديدة سعيدة • كل عام وأنتم بخير • عام مليء بالخير والسعادة 🎆',
         tickerEn:'🎆 Happy New Year 2026 • Wishing you joy, health & success 🎆',
         particles:['🎆','🎇','✨','🎊','🎉','⭐','💜','🌟']},
        {id:'sport_day',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===11&&d.getDate()===19;},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#022c22 100%)',
         titleAr:'🏃 اليوم الوطني للرياضة',titleEn:'🏃 Qatar National Sport Day',
         subtitleAr:'الرياضة حياة • قطر تتحرك',subtitleEn:'Sport is Life • Qatar Moves',
         tickerAr:'🏃 اليوم الوطني للرياضة • الرياضة صحة وحياة • كن نشيطاً كن صحياً 🏃',
         tickerEn:'🏃 Qatar National Sport Day • Sport is Health & Life • Stay Active 🏃',
         particles:['🏃','⚽','🏅','🎽','💪','🌟','🏆','⭐']}
      ];
      function _detect2(now){for(var i=0;i<THEMES2.length;i++)if(THEMES2[i].match(now))return THEMES2[i];return null;}
      function _spawn2(wrap,particles){
        for(var i=0;i<20;i++){(function(i){setTimeout(function(){
          var p=document.createElement('span');p.className='th-particle';
          p.textContent=particles[i%particles.length];
          p.style.left=Math.random()*100+'%';p.style.top='-20px';
          p.style.animationDelay=(Math.random()*2)+'s';
          p.style.animationDuration=(2.5+Math.random()*2)+'s';
          p.style.fontSize=(0.9+Math.random()*0.7)+'rem';
          wrap.appendChild(p);
          setTimeout(function(){if(p.parentNode)p.parentNode.removeChild(p);},5000);
        },i*160);})(i);}
      }
      function _render2(th){
        var b=document.getElementById('themeBanner2');if(!b)return;
        var isRTL=document.documentElement.dir==='rtl'||document.body.dir==='rtl';
        b.classList.remove('hidden');
        b.style.background=th.bg;
        var title=isRTL?th.titleAr:th.titleEn;
        var subtitle=isRTL?th.subtitleAr:th.subtitleEn;
        var ticker=isRTL?th.tickerAr:th.tickerEn;
        var tc=isRTL?'th-ticker-innerR2':'th-ticker-inner2';
        b.innerHTML=
          '<div style="position:relative;z-index:2;padding:18px 22px 12px;display:flex;flex-direction:column;gap:3px">'
          +'<div style="font-size:clamp(1.2rem,2.5vw,1.55rem);font-weight:800;color:#fff;'
          +'text-shadow:0 2px 12px rgba(0,0,0,.4);animation:th-float 3.5s ease-in-out infinite;display:inline-block">'
          +title+'</div>'
          +'<div style="font-size:.85rem;color:rgba(255,255,255,.8);margin-top:1px">'+subtitle+'</div>'
          +'</div>'
          +'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.25);'
          +'padding:6px 0;overflow:hidden;z-index:3">'
          +'<div class="th-ticker-wrap2"><span class="'+tc+'" '
          +'style="color:rgba(255,255,255,.9);font-size:.78rem;letter-spacing:.03em">'+ticker+'</span></div></div>';
        (function loop(){_spawn2(b,th.particles);setTimeout(loop,5200);})();
      }
      var _th=_detect2(_getNow2());
      if(_th)_render2(_th);
    })();
    </script>
    <script>
    /* ══ THEME DEV PANEL 2 ══ */
    // globals so onclick="" can reach them
    window._thPanel2 = null;

    window._thToggle2 = function(){
      var p = document.getElementById('thDevPanel2');
      if(!p) return;
      var showing = p.style.display === 'block';
      p.style.display = showing ? 'none' : 'block';
      if(!showing){
        var s = document.getElementById('thDevStatus2');
        if(s){
          var cur = localStorage.getItem('nd_test_date');
          s.innerHTML = cur
            ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
            : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
        }
      }
    };

    window._thSet2 = function(d){
      if(d){ localStorage.setItem('nd_test_date', d); }
      else { localStorage.removeItem('nd_test_date'); }
      var inp = document.getElementById('thDateInput2');
      if(inp) inp.value = d || '';
      // refresh banner
      var th = _detect2(_getNow2());
      var b2 = document.getElementById('themeBanner2');
      var br = document.getElementById('thBtnRow');
      if(b2){ b2.innerHTML=''; b2.style.display='none'; }
      if(th){
        _render2(th);
        if(br) br.style.display='flex';
      } else {
        if(br) br.style.display='none';
      }
      // update status
      var s = document.getElementById('thDevStatus2');
      if(s){
        var cur = localStorage.getItem('nd_test_date');
        s.innerHTML = cur
          ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
          : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
      }
    };

    // build panel HTML once DOM ready
    (function(){
      var quick=[
        {label:'🇶🇦 اليوم الوطني', date:'2025-12-18', c:'rgba(139,26,47,.8)'},
        {label:'🌙 عيد الفطر',      date:'2025-03-30', c:'rgba(5,150,105,.8)'},
        {label:'🕌 عيد الأضحى',     date:'2025-06-07', c:'rgba(30,58,95,.9)'},
        {label:'🌙 رمضان',           date:'2025-03-05', c:'rgba(67,56,202,.8)'},
        {label:'🌿 المولد النبوي',   date:'2025-01-29', c:'rgba(20,83,45,.8)'},
        {label:'🌸 الربيع',          date:'2025-04-15', c:'rgba(5,150,105,.7)'},
        {label:'☀️ الصيف',           date:'2025-07-10', c:'rgba(194,65,12,.8)'},
        {label:'🍂 الخريف',          date:'2025-10-01', c:'rgba(120,53,15,.8)'},
        {label:'❄️ الشتاء',          date:'2025-01-15', c:'rgba(30,58,95,.9)'},
        {label:'🎆 رأس السنة',        date:'2026-01-01', c:'rgba(76,29,149,.8)'},
        {label:'🏃 يوم الرياضة',      date:'2025-12-19', c:'rgba(6,78,59,.8)'},
        {label:'📅 اليوم الحقيقي',    date:'',           c:'rgba(55,65,81,.8)'}
      ];
      var qBtns = quick.map(function(q){
        return '<button onclick="window._thSet2(''+q.date+'')"'
          +' style="padding:5px 8px;border:none;border-radius:8px;cursor:pointer;font-size:.75rem;'
          +'background:'+q.c+';color:#fff">'
          +q.label+'</button>';
      }).join('');

      var p = document.createElement('div');
      p.id = 'thDevPanel2';
      p.style.cssText = 'display:none;position:fixed;bottom:24px;right:24px;z-index:99999;width:310px;'
        +'background:rgba(15,23,42,.96);border-radius:16px;padding:16px;'
        +'box-shadow:0 8px 32px rgba(0,0,0,.7);backdrop-filter:blur(12px);'
        +'border:1px solid rgba(255,255,255,.12);color:#e2e8f0;font-size:.83rem';
      p.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'
        +'<span style="font-weight:700;color:#F0C040;font-size:.9rem"><i class="fas fa-palette" style="margin-inline-end:6px"></i>Theme Dev Panel</span>'
        +'<button onclick="document.getElementById('thDevPanel2').style.display='none'"'
        +' style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1.2rem;line-height:1;padding:0">✕</button>'
        +'</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:12px">'+qBtns+'</div>'
        +'<div style="margin-bottom:8px">'
        +'<label style="display:block;margin-bottom:4px;color:#94a3b8">تاريخ مخصص:</label>'
        +'<input type="date" id="thDateInput2" style="width:100%;padding:6px 8px;border-radius:8px;'
        +'border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:.82rem">'
        +'</div>'
        +'<div style="display:flex;gap:8px;margin-bottom:10px">'
        +'<button onclick="var i=document.getElementById('thDateInput2');if(i&&i.value)window._thSet2(i.value)"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(99,102,241,.85);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-play" style="margin-inline-end:4px"></i>تطبيق</button>'
        +'<button onclick="window._thSet2('')"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(239,68,68,.75);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-times" style="margin-inline-end:4px"></i>إلغاء</button>'
        +'</div>'
        +'<div id="thDevStatus2" style="font-size:.75rem;color:#94a3b8;text-align:center;padding:4px;background:rgba(255,255,255,.05);border-radius:6px"></div>';
      document.body.appendChild(p);

      // show btn if theme active
      var th = _detect2(_getNow2());
      var br = document.getElementById('thBtnRow');
      if(th && br) br.style.display = 'flex';
    })();
    </script>
    <div class="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${isRTL?'sm:flex-row-reverse':''}">
      <div class="${isRTL?'text-right':''}">
        <h1 class="text-2xl font-bold text-gray-800">${pageTitle}</h1>
        <p class="text-gray-500 mt-1 text-sm">${isRTL?'تحميل النماذج الرسمية للرواتب والبدلات. استخدم دائماً أحدث إصدار.':'Download official payroll and HR forms. Always use the latest version.'}</p>
      </div>
      <div class="flex items-center gap-2 flex-shrink-0 px-3 py-2 rounded-lg text-sm font-semibold" style="background:rgba(139,26,47,0.08);color:var(--qu-maroon)">
        <i class="fas fa-exclamation-circle"></i>
        <span>${isRTL?'قدّم النماذج الأصلية الموقعة لقسم الموارد البشرية':'Submit original signed forms to HR'}</span>
      </div>
    </div>

    <!-- Search -->
    <div class="card p-4 mb-5">
      <div class="relative">
        <input type="text" id="formSearch" oninput="filterForms()" dir="${t.dir}"
          placeholder="${isRTL?'ابحث عن نموذج...':'Search forms...'}"
          class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none ${isRTL?'pr-10 text-right':'pl-10'}"/>
        <i class="fas fa-search absolute ${isRTL?'right-3':'left-3'} top-3 text-gray-400"></i>
      </div>
    </div>

    <!-- Forms by Category -->
    <div id="formsContainer">
    ${t.formCategories.map((cat: any, ci: number) => `
    <div class="mb-6 form-section" data-cat="${ci}">
      <div class="flex items-center gap-2.5 mb-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(139,26,47,0.08)">
          <i class="fas ${cat.icon} text-sm" style="color:${cat.color}"></i>
        </div>
        <h2 class="text-base font-bold text-gray-800">${cat.category}</h2>
        <span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="background:#F3F4F6;color:#6B7280">${cat.forms.length} ${isRTL?'نماذج':'forms'}</span>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        ${cat.forms.map((form: any) => `
        <div class="card form-card p-4 form-item" data-title="${form.title.toLowerCase()}" data-ref="${form.ref.toLowerCase()}">
          <div class="flex items-start justify-between gap-2 ${isRTL?'flex-row-reverse':''}">
            <div class="flex-1 ${isRTL?'text-right':''}">
              <h3 class="font-semibold text-gray-800 text-sm leading-snug mb-1">${form.title}</h3>
              <p class="text-xs text-gray-500 mb-2 leading-relaxed">${form.desc}</p>
              <div class="flex items-center gap-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
                <span class="text-xs px-2 py-0.5 rounded font-mono" style="background:#F3F4F6;color:#374151">${form.ref}</span>
                <span class="text-xs text-gray-400">${form.version}</span>
              </div>
            </div>
          </div>
          ${form.attachment ? `
          <div class="mt-2 flex items-center gap-2 rounded-lg px-3 py-2 ${isRTL?'flex-row-reverse':''}" style="background:#FEF9EE;border:1px solid #F5C842">
            <i class="fas fa-paperclip text-xs flex-shrink-0" style="color:var(--qu-gold)"></i>
            <span class="text-xs font-medium text-yellow-800 flex-1 ${isRTL?'text-right':''}">${isRTL?'مرفق:':'Attachment:'} <strong>${form.attachment.label}</strong></span>
            <a href="${form.attachment.file}" target="_blank" download class="text-xs font-bold underline whitespace-nowrap" style="color:var(--qu-maroon)">${isRTL?'تحميل':'Download'}</a>
          </div>` : ''}
          <div class="mt-3 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
            ${form.file ? `
            <a href="${form.file}" target="_blank" download class="flex-1 text-center text-xs font-semibold py-2 px-3 rounded-lg btn-primary flex items-center justify-center gap-1.5 no-underline">
              <i class="fas fa-download text-xs"></i>${isRTL?'تحميل النموذج':'Download Form'}
            </a>` : `
            <a href="/contact?lang=${lang}" class="flex-1 text-center text-xs font-semibold py-2 px-3 rounded-lg btn-primary flex items-center justify-center gap-1.5">
              <i class="fas fa-download text-xs"></i>${isRTL?'تحميل':'Download'}
            </a>`}
            <a href="/staff-contact?lang=${lang}" class="text-xs font-semibold py-2 px-3 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition flex items-center gap-1.5">
              <i class="fas fa-envelope text-xs"></i>${isRTL?'استفسار':'Enquire'}
            </a>
          </div>
        </div>`).join('')}
      </div>
    </div>`).join('')}
    </div>

    <!-- Need more -->
    <div class="card p-5 mt-2" style="border-top:3px solid var(--qu-gold)">
      <div class="flex items-start gap-3 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-circle-question text-xl flex-shrink-0 mt-0.5" style="color:var(--qu-gold)"></i>
        <div class="${isRTL?'text-right':''}">
          <p class="font-bold text-gray-800 text-sm">${isRTL?'هل تحتاج نموذجاً غير موجود هنا؟':'Need a form not listed here?'}</p>
          <p class="text-xs text-gray-500 mt-1">${isRTL
            ? 'تواصل مع قسم الرواتب على <strong>payroll@qu.edu.qa</strong> أو اتصل بالداخلي <strong>4100</strong> وسنوفر النموذج المطلوب خلال يوم عمل واحد.'
            : 'Contact the Payroll Department at <strong>payroll@qu.edu.qa</strong> or call ext. <strong>4100</strong> and we will provide the required form within one working day.'}</p>
        </div>
      </div>
    </div>
  </div>
  <script>
    function filterForms() {
      const q = document.getElementById('formSearch').value.toLowerCase().trim();
      document.querySelectorAll('.form-item').forEach(el => {
        const match = !q || el.dataset.title.includes(q) || el.dataset.ref.includes(q);
        el.style.display = match ? '' : 'none';
      });
      document.querySelectorAll('.form-section').forEach(sec => {
        const visible = [...sec.querySelectorAll('.form-item')].some(e => e.style.display !== 'none');
        sec.style.display = visible ? '' : 'none';
      });
    }
  </script>`

  return c.html(staffLayout(pageTitle, content, 'forms', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF CONTACT  /staff-contact
// ─────────────────────────────────────────────────────────────────────────────
app.get('/staff-contact', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  const pageTitle = isRTL ? 'تواصل معنا' : 'Contact Us'

  const content = `
  <div dir="${isRTL?'rtl':'ltr'}">

    <!-- ══ THEME BTN ══ -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:4px">
      <button id="thInlineBtn" onclick="window._thToggle2&&window._thToggle2()"
        style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border:none;border-radius:10px;background:rgba(55,65,81,0.85);color:#F0C040;font-size:.78rem;font-weight:700;cursor:pointer;backdrop-filter:blur(6px);box-shadow:0 2px 8px rgba(0,0,0,.25);transition:.2s"
        onmouseover="this.style.background='rgba(79,70,229,.9)'" onmouseout="this.style.background='rgba(55,65,81,0.85)'">
        <i class="fas fa-palette"></i> Theme
      </button>
    </div>
    <!-- ══ THEME BANNER 2 ══ -->
    <div id="themeBanner2" class="hidden relative rounded-2xl overflow-hidden" style="min-height:130px"></div>
    <script>
    (function(){
      /* reuse shared helpers if already defined by /staff page in same session — 
         but since each page is standalone, we define them locally with suffix 2 */
      function _getNow2(){
        try{var ov=localStorage.getItem('nd_test_date');
          if(ov){var p=ov.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
        }catch(e){}
        return new Date();
      }
      var THEMES2=[
        {id:'national',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===11&&d.getDate()===18;},
         bg:'linear-gradient(135deg,#8B1A2F 0%,#6B0A22 40%,#1a1a2e 100%)',
         titleAr:'🇶🇦 كل عام وقطر بخير',titleEn:'🇶🇦 Happy Qatar National Day',
         subtitleAr:'اليوم الوطني القطري — ١٨ ديسمبر',subtitleEn:'Qatar National Day — December 18',
         tickerAr:'🇶🇦 يوم المجد والعطاء • تحيا قطر • ١٨ ديسمبر يوم العز والكرامة • الله يحفظ قطر وقيادتها 🇶🇦',
         tickerEn:'🇶🇦 Glory & Pride • Long Live Qatar • December 18 • God Bless Qatar 🇶🇦',
         particles:['🇶🇦','⭐','✨','🌟','🎊','🎉','🏅','💫']},
        {id:'eid_fitr',glow:'th-glow-eid',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===2&&dt>=29)||(m===3&&dt<=3);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 45%,#0D2B1F 100%)',
         titleAr:'🌙 عيد الفطر المبارك',titleEn:'🌙 Eid Al-Fitr Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله صيامكم',subtitleEn:'May your fast be accepted • Happy Eid',
         tickerAr:'🌙 عيد الفطر المبارك • تقبّل الله منا ومنكم • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Eid Al-Fitr Mubarak • May Allah accept our deeds • Happy Eid to all 🌙',
         particles:['🌙','⭐','✨','🌟','🎊','💚','🕌','🤲']},
        {id:'eid_adha',glow:'th-glow-eid',
         match:function(d){return d.getMonth()===5&&d.getDate()>=5&&d.getDate()<=10;},
         bg:'linear-gradient(135deg,#1E3A5F 0%,#1a4a7a 45%,#0f1f36 100%)',
         titleAr:'🕌 عيد الأضحى المبارك',titleEn:'🕌 Eid Al-Adha Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله طاعتكم',subtitleEn:'May your worship be accepted • Happy Eid',
         tickerAr:'🕌 عيد الأضحى المبارك • تقبّل الله منا ومنكم صالح الأعمال • كل عام وأنتم بخير 🕌',
         tickerEn:'🕌 Eid Al-Adha Mubarak • May Allah accept our sacrifices • Happy Eid to all 🕌',
         particles:['🕌','🌙','⭐','✨','💙','🤲','🌟','🎊']},
        {id:'ramadan',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===2&&d.getDate()>=1&&d.getDate()<=28;},
         bg:'linear-gradient(135deg,#1E1B4B 0%,#312E81 45%,#0D0B2E 100%)',
         titleAr:'🌙 رمضان كريم',titleEn:'🌙 Ramadan Kareem',
         subtitleAr:'شهر الخير والبركة والعبادة',subtitleEn:'Month of Blessings & Worship',
         tickerAr:'🌙 رمضان كريم • شهر القرآن والخير • تقبّل الله صيامكم وقيامكم 🌙',
         tickerEn:'🌙 Ramadan Kareem • Month of Quran • May Allah accept your fasting 🌙',
         particles:['🌙','⭐','🌟','✨','📿','🕌','🤲','💜']},
        {id:'mawlid',glow:'th-glow-nb',
         match:function(d){return d.getMonth()===0&&d.getDate()>=28&&d.getDate()<=30;},
         bg:'linear-gradient(135deg,#14532D 0%,#166534 45%,#052E16 100%)',
         titleAr:'🌿 المولد النبوي الشريف',titleEn:'🌿 Mawlid Al-Nabawi',
         subtitleAr:'ذكرى مولد سيدنا محمد ﷺ',subtitleEn:'Birthday of Prophet Muhammad ﷺ',
         tickerAr:'🌿 بمناسبة المولد النبوي الشريف • صلِّ على النبي محمد ﷺ 🌿',
         tickerEn:'🌿 Happy Mawlid Al-Nabawi • Blessings upon Prophet Muhammad ﷺ 🌿',
         particles:['🌿','🌟','⭐','✨','💚','🤲','📿','🕌']},
        {id:'hijri_new',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===5&&d.getDate()>=25&&d.getDate()<=27;},
         bg:'linear-gradient(135deg,#44337A 0%,#553C9A 45%,#231942 100%)',
         titleAr:'🌙 رأس السنة الهجرية',titleEn:'🌙 Islamic New Year',
         subtitleAr:'عام هجري جديد مبارك',subtitleEn:'Blessed Islamic New Year',
         tickerAr:'🌙 رأس السنة الهجرية الجديدة • عام مبارك • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Happy Islamic New Year • May this year be full of blessings 🌙',
         particles:['🌙','⭐','✨','🌟','💜','🎊','📿','🕌']},
        {id:'spring',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===3||(d.getMonth()===4&&d.getDate()<=31);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#052e16 100%)',
         titleAr:'🌸 فصل الربيع',titleEn:'🌸 Spring Season',
         subtitleAr:'الطبيعة تتجدّد والأمل يزهر',subtitleEn:'Nature renews & hope blossoms',
         tickerAr:'🌸 مرحباً بالربيع • الأزهار والجمال • فصل الخير والتجديد 🌸',
         tickerEn:'🌸 Welcome Spring • Flowers & Beauty • Season of renewal & hope 🌸',
         particles:['🌸','🌺','🌻','🦋','🌿','🌱','🌼','🍀']},
        {id:'summer',glow:'th-glow-sum',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===5&&dt>=10)||m===6||m===7;},
         bg:'linear-gradient(135deg,#7C2D12 0%,#9A3412 40%,#431407 100%)',
         titleAr:'☀️ فصل الصيف',titleEn:'☀️ Summer Season',
         subtitleAr:'الحرارة والنشاط والإجازات',subtitleEn:'Heat, energy & summer holidays',
         tickerAr:'☀️ مرحباً بالصيف • موسم الإجازات • الشمس تُشرق للجميع ☀️',
         tickerEn:'☀️ Welcome Summer • Vacation season • Enjoy the sunny days ☀️',
         particles:['☀️','🌞','🌊','🏖️','🌴','🍹','🌻','⭐']},
        {id:'autumn',glow:'th-glow-aut',
         match:function(d){return d.getMonth()>=8&&d.getMonth()<=10;},
         bg:'linear-gradient(135deg,#78350F 0%,#92400E 40%,#3B1A08 100%)',
         titleAr:'🍂 فصل الخريف',titleEn:'🍂 Autumn Season',
         subtitleAr:'تتساقط الأوراق وتتجدد الأيام',subtitleEn:'Leaves fall, days refresh',
         tickerAr:'🍂 مرحباً بالخريف • موسم التغيير والجمال • الألوان الذهبية تزيّن الطبيعة 🍂',
         tickerEn:'🍂 Welcome Autumn • Season of change & golden colors 🍂',
         particles:['🍂','🍁','🌾','🍄','🌰','🦔','🍃','🌙']},
        {id:'winter',glow:'th-glow-win',
         match:function(d){var m=d.getMonth(),dt=d.getDate();
           return m===0||m===1||(m===11&&dt>=20)||(m===11&&dt<=17&&dt>=1);},
         bg:'linear-gradient(135deg,#0F172A 0%,#1E3A5F 45%,#0a0f1e 100%)',
         titleAr:'❄️ فصل الشتاء',titleEn:'❄️ Winter Season',
         subtitleAr:'البرد والهدوء وجمال الليالي',subtitleEn:'Cool nights & peaceful days',
         tickerAr:'❄️ مرحباً بالشتاء • موسم الدفء والقهوة • ليالٍ هادئة وجميلة 🌌',
         tickerEn:'❄️ Welcome Winter • Cozy season • Beautiful quiet nights in Qatar 🌌',
         particles:['❄️','⛄','🌨️','✨','💙','🌟','🌙','⭐']},
        {id:'new_year',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===0&&d.getDate()===1;},
         bg:'linear-gradient(135deg,#4C1D95 0%,#6D28D9 45%,#1e0a3c 100%)',
         titleAr:'🎆 كل عام وأنتم بخير',titleEn:'🎆 Happy New Year!',
         subtitleAr:'عام جديد مبارك • ٢٠٢٦',subtitleEn:'Wishing you a wonderful New Year 2026',
         tickerAr:'🎆 سنة جديدة سعيدة • كل عام وأنتم بخير • عام مليء بالخير والسعادة 🎆',
         tickerEn:'🎆 Happy New Year 2026 • Wishing you joy, health & success 🎆',
         particles:['🎆','🎇','✨','🎊','🎉','⭐','💜','🌟']},
        {id:'sport_day',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===11&&d.getDate()===19;},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#022c22 100%)',
         titleAr:'🏃 اليوم الوطني للرياضة',titleEn:'🏃 Qatar National Sport Day',
         subtitleAr:'الرياضة حياة • قطر تتحرك',subtitleEn:'Sport is Life • Qatar Moves',
         tickerAr:'🏃 اليوم الوطني للرياضة • الرياضة صحة وحياة • كن نشيطاً كن صحياً 🏃',
         tickerEn:'🏃 Qatar National Sport Day • Sport is Health & Life • Stay Active 🏃',
         particles:['🏃','⚽','🏅','🎽','💪','🌟','🏆','⭐']}
      ];
      function _detect2(now){for(var i=0;i<THEMES2.length;i++)if(THEMES2[i].match(now))return THEMES2[i];return null;}
      function _spawn2(wrap,particles){
        for(var i=0;i<20;i++){(function(i){setTimeout(function(){
          var p=document.createElement('span');p.className='th-particle';
          p.textContent=particles[i%particles.length];
          p.style.left=Math.random()*100+'%';p.style.top='-20px';
          p.style.animationDelay=(Math.random()*2)+'s';
          p.style.animationDuration=(2.5+Math.random()*2)+'s';
          p.style.fontSize=(0.9+Math.random()*0.7)+'rem';
          wrap.appendChild(p);
          setTimeout(function(){if(p.parentNode)p.parentNode.removeChild(p);},5000);
        },i*160);})(i);}
      }
      function _render2(th){
        var b=document.getElementById('themeBanner2');if(!b)return;
        var isRTL=document.documentElement.dir==='rtl'||document.body.dir==='rtl';
        b.classList.remove('hidden');
        b.style.background=th.bg;
        var title=isRTL?th.titleAr:th.titleEn;
        var subtitle=isRTL?th.subtitleAr:th.subtitleEn;
        var ticker=isRTL?th.tickerAr:th.tickerEn;
        var tc=isRTL?'th-ticker-innerR2':'th-ticker-inner2';
        b.innerHTML=
          '<div style="position:relative;z-index:2;padding:18px 22px 12px;display:flex;flex-direction:column;gap:3px">'
          +'<div style="font-size:clamp(1.2rem,2.5vw,1.55rem);font-weight:800;color:#fff;'
          +'text-shadow:0 2px 12px rgba(0,0,0,.4);animation:th-float 3.5s ease-in-out infinite;display:inline-block">'
          +title+'</div>'
          +'<div style="font-size:.85rem;color:rgba(255,255,255,.8);margin-top:1px">'+subtitle+'</div>'
          +'</div>'
          +'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.25);'
          +'padding:6px 0;overflow:hidden;z-index:3">'
          +'<div class="th-ticker-wrap2"><span class="'+tc+'" '
          +'style="color:rgba(255,255,255,.9);font-size:.78rem;letter-spacing:.03em">'+ticker+'</span></div></div>';
        (function loop(){_spawn2(b,th.particles);setTimeout(loop,5200);})();
      }
      var _th=_detect2(_getNow2());
      if(_th)_render2(_th);
    })();
    </script>
    <script>
    /* ══ THEME DEV PANEL 2 ══ */
    // globals so onclick="" can reach them
    window._thPanel2 = null;

    window._thToggle2 = function(){
      var p = document.getElementById('thDevPanel2');
      if(!p) return;
      var showing = p.style.display === 'block';
      p.style.display = showing ? 'none' : 'block';
      if(!showing){
        var s = document.getElementById('thDevStatus2');
        if(s){
          var cur = localStorage.getItem('nd_test_date');
          s.innerHTML = cur
            ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
            : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
        }
      }
    };

    window._thSet2 = function(d){
      if(d){ localStorage.setItem('nd_test_date', d); }
      else { localStorage.removeItem('nd_test_date'); }
      var inp = document.getElementById('thDateInput2');
      if(inp) inp.value = d || '';
      // refresh banner
      var th = _detect2(_getNow2());
      var b2 = document.getElementById('themeBanner2');
      var br = document.getElementById('thBtnRow');
      if(b2){ b2.innerHTML=''; b2.style.display='none'; }
      if(th){
        _render2(th);
        if(br) br.style.display='flex';
      } else {
        if(br) br.style.display='none';
      }
      // update status
      var s = document.getElementById('thDevStatus2');
      if(s){
        var cur = localStorage.getItem('nd_test_date');
        s.innerHTML = cur
          ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
          : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
      }
    };

    // build panel HTML once DOM ready
    (function(){
      var quick=[
        {label:'🇶🇦 اليوم الوطني', date:'2025-12-18', c:'rgba(139,26,47,.8)'},
        {label:'🌙 عيد الفطر',      date:'2025-03-30', c:'rgba(5,150,105,.8)'},
        {label:'🕌 عيد الأضحى',     date:'2025-06-07', c:'rgba(30,58,95,.9)'},
        {label:'🌙 رمضان',           date:'2025-03-05', c:'rgba(67,56,202,.8)'},
        {label:'🌿 المولد النبوي',   date:'2025-01-29', c:'rgba(20,83,45,.8)'},
        {label:'🌸 الربيع',          date:'2025-04-15', c:'rgba(5,150,105,.7)'},
        {label:'☀️ الصيف',           date:'2025-07-10', c:'rgba(194,65,12,.8)'},
        {label:'🍂 الخريف',          date:'2025-10-01', c:'rgba(120,53,15,.8)'},
        {label:'❄️ الشتاء',          date:'2025-01-15', c:'rgba(30,58,95,.9)'},
        {label:'🎆 رأس السنة',        date:'2026-01-01', c:'rgba(76,29,149,.8)'},
        {label:'🏃 يوم الرياضة',      date:'2025-12-19', c:'rgba(6,78,59,.8)'},
        {label:'📅 اليوم الحقيقي',    date:'',           c:'rgba(55,65,81,.8)'}
      ];
      var qBtns = quick.map(function(q){
        return '<button onclick="window._thSet2(''+q.date+'')"'
          +' style="padding:5px 8px;border:none;border-radius:8px;cursor:pointer;font-size:.75rem;'
          +'background:'+q.c+';color:#fff">'
          +q.label+'</button>';
      }).join('');

      var p = document.createElement('div');
      p.id = 'thDevPanel2';
      p.style.cssText = 'display:none;position:fixed;bottom:24px;right:24px;z-index:99999;width:310px;'
        +'background:rgba(15,23,42,.96);border-radius:16px;padding:16px;'
        +'box-shadow:0 8px 32px rgba(0,0,0,.7);backdrop-filter:blur(12px);'
        +'border:1px solid rgba(255,255,255,.12);color:#e2e8f0;font-size:.83rem';
      p.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'
        +'<span style="font-weight:700;color:#F0C040;font-size:.9rem"><i class="fas fa-palette" style="margin-inline-end:6px"></i>Theme Dev Panel</span>'
        +'<button onclick="document.getElementById('thDevPanel2').style.display='none'"'
        +' style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1.2rem;line-height:1;padding:0">✕</button>'
        +'</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:12px">'+qBtns+'</div>'
        +'<div style="margin-bottom:8px">'
        +'<label style="display:block;margin-bottom:4px;color:#94a3b8">تاريخ مخصص:</label>'
        +'<input type="date" id="thDateInput2" style="width:100%;padding:6px 8px;border-radius:8px;'
        +'border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:.82rem">'
        +'</div>'
        +'<div style="display:flex;gap:8px;margin-bottom:10px">'
        +'<button onclick="var i=document.getElementById('thDateInput2');if(i&&i.value)window._thSet2(i.value)"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(99,102,241,.85);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-play" style="margin-inline-end:4px"></i>تطبيق</button>'
        +'<button onclick="window._thSet2('')"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(239,68,68,.75);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-times" style="margin-inline-end:4px"></i>إلغاء</button>'
        +'</div>'
        +'<div id="thDevStatus2" style="font-size:.75rem;color:#94a3b8;text-align:center;padding:4px;background:rgba(255,255,255,.05);border-radius:6px"></div>';
      document.body.appendChild(p);

      // show btn if theme active
      var th = _detect2(_getNow2());
      var br = document.getElementById('thBtnRow');
      if(th && br) br.style.display = 'flex';
    })();
    </script>
    <div class="mb-6 ${isRTL?'text-right':''}">
      <h1 class="text-2xl font-bold text-gray-800">${pageTitle}</h1>
      <p class="text-gray-500 mt-1 text-sm">${isRTL?'تواصل مع الفريق المختص لأي استفسار يخص راتبك أو بدلاتك. نحن هنا لمساعدتك.':'Reach the right team for your payroll and HR inquiries. We\'re here to help.'}</p>
    </div>

    <!-- General Info -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      ${[
        { icon:'fa-map-marker-alt', color:'var(--qu-maroon)', bg:'rgba(139,26,47,0.08)',
          label: isRTL?'الموقع':'Location',
          val: isRTL?'مبنى الإدارة أ، الطابق الأول، غرفة 101':'Admin Building A, 1st Floor, Room 101',
          sub: isRTL?'الحرم الجامعي الرئيسي، الدوحة':'Qatar University Main Campus, Doha' },
        { icon:'fa-clock', color:'var(--qu-gold)', bg:'rgba(196,146,42,0.08)',
          label: isRTL?'ساعات العمل':'Office Hours',
          val: isRTL?'الأحد – الخميس':'Sunday – Thursday',
          sub: isRTL?'7:30 ص – 3:30 م':'7:30 AM – 3:30 PM (AST)' },
        { icon:'fa-phone', color:'#10B981', bg:'rgba(16,185,129,0.08)',
          label: isRTL?'رقم الهاتف':'Phone',
          val: '+974 4403 4000',
          sub: isRTL?'اضغط 1 للموارد البشرية والرواتب':'Press 1 for HR & Payroll' },
      ].map(info => `
      <div class="card p-5 text-center flex flex-col items-center gap-2">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:${info.bg}">
          <i class="fas ${info.icon}" style="color:${info.color}"></i>
        </div>
        <p class="text-xs font-semibold text-gray-400 uppercase tracking-wide">${info.label}</p>
        <p class="text-sm font-bold text-gray-800">${info.val}</p>
        <p class="text-xs text-gray-500">${info.sub}</p>
      </div>`).join('')}
    </div>

    <!-- Department Cards -->
    <h2 class="text-lg font-bold text-gray-800 mb-4 ${isRTL?'text-right':''}">${isRTL?'أقسام التواصل':'Contact Departments'}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      ${t.contactDepts.map((dept: any) => `
      <div class="card p-5" style="border-top:3px solid ${dept.color}">
        <div class="flex items-start gap-3 mb-3 ${isRTL?'flex-row-reverse':''}">
          <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style="background:${dept.color}20">
            <i class="fas ${dept.icon}" style="color:${dept.color}"></i>
          </div>
          <div class="flex-1 ${isRTL?'text-right':''}">
            <h3 class="font-bold text-gray-800 text-sm">${dept.dept}</h3>
            <p class="text-xs text-gray-500 mt-0.5 leading-relaxed">${dept.desc}</p>
          </div>
        </div>
        <div class="space-y-1.5 text-xs text-gray-500 ${isRTL?'text-right':''}">
          <p><i class="fas fa-envelope ${isRTL?'ml-1.5':'mr-1.5'}" style="color:${dept.color}"></i>${dept.email}</p>
          <p><i class="fas fa-phone ${isRTL?'ml-1.5':'mr-1.5'}" style="color:${dept.color}"></i>${isRTL?'داخلي:':'Ext.'} ${dept.ext}</p>
          <p><i class="fas fa-clock ${isRTL?'ml-1.5':'mr-1.5'}" style="color:${dept.color}"></i>${dept.hours}</p>
          <p><i class="fas fa-reply ${isRTL?'ml-1.5':'mr-1.5'}" style="color:${dept.color}"></i>${isRTL?'وقت الرد:':'Response:'} ${dept.response}</p>
        </div>
        <div class="mt-3">
          <a href="mailto:${dept.email}" class="btn-primary text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 w-fit ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-paper-plane text-xs"></i>${isRTL?'إرسال بريد':'Send Email'}
          </a>
        </div>
      </div>`).join('')}
    </div>

    <!-- Quick Message Form -->
    <div class="card p-6">
      <div class="mb-5 ${isRTL?'text-right':''}">
        <h2 class="text-lg font-bold text-gray-800">${isRTL?'أرسل رسالة سريعة':'Send a Quick Message'}</h2>
        <p class="text-sm text-gray-500 mt-1">${isRTL?'املأ النموذج أدناه وسيتواصل معك الفريق المختص قريباً.':'Fill in the form and the right team will get back to you shortly.'}</p>
      </div>
      <form onsubmit="submitContactForm(event)" id="cForm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'الاسم الكامل':'Full Name'} <span class="text-red-500">*</span></label>
            <input type="text" id="cf_name" dir="${t.dir}" placeholder="${isRTL?'اسمك الكامل':'Your full name'}"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none ${isRTL?'text-right':''}" required/>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'رقم الموظف':'Employee ID'}</label>
            <input type="text" id="cf_empid" placeholder="${isRTL?'مثال: QU-12345':'e.g. QU-12345'}"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none"/>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'البريد الإلكتروني':'Email Address'} <span class="text-red-500">*</span></label>
          <input type="email" id="cf_email" placeholder="${isRTL?'your.email@qu.edu.qa':'your.email@qu.edu.qa'}"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none" required/>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'الموضوع / القسم':'Subject / Department'} <span class="text-red-500">*</span></label>
          <select id="cf_subject" dir="${t.dir}" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none ${isRTL?'text-right':''}" required>
            <option value="">${isRTL?'اختر قسماً...':'Select a department...'}</option>
            ${t.contactDepts.map((d: any) => `<option value="${d.email}">${d.dept}</option>`).join('')}
          </select>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'الرسالة':'Message'} <span class="text-red-500">*</span></label>
          <textarea id="cf_msg" rows="4" dir="${t.dir}" placeholder="${isRTL?'اكتب استفسارك بالتفصيل...':'Describe your inquiry in detail...'}"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-red-300 focus:ring-2 focus:ring-red-100 outline-none resize-none ${isRTL?'text-right':''}" required></textarea>
        </div>
        <div class="flex items-center justify-between flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
          <p class="text-xs text-gray-400 flex items-center gap-1.5"><i class="fas fa-shield-alt" style="color:var(--qu-gold)"></i>${isRTL?'رسالتك تُعالَج بسرية تامة.':'Your message is handled securely and confidentially.'}</p>
          <button type="submit" id="cSubmitBtn" class="btn-primary px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2">
            <i class="fas fa-paper-plane"></i>${isRTL?'إرسال الرسالة':'Send Message'}
          </button>
        </div>
        <div id="cSuccess" class="hidden mt-4 p-4 rounded-xl text-sm font-semibold text-center" style="background:#D1FAE5;color:#065F46">
          <i class="fas fa-check-circle mr-2"></i>${isRTL?'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.':'Your message has been sent! We\'ll get back to you soon.'}
        </div>
      </form>
    </div>
  </div>
  <script>
    function submitContactForm(e) {
      e.preventDefault();
      const btn = document.getElementById('cSubmitBtn');
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>${isRTL?'جاري الإرسال...':'Sending...'}';
      setTimeout(() => {
        document.getElementById('cForm').reset();
        document.getElementById('cSuccess').classList.remove('hidden');
        btn.innerHTML = '<i class="fas fa-check mr-2"></i>${isRTL?'تم الإرسال!':'Sent!'}';
        btn.style.background = '#10B981';
      }, 1000);
    }
  </script>`

  return c.html(staffLayout(pageTitle, content, 'contact', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SCHOLARSHIP SYSTEM  /scholarship  (نظام الابتعاث)
// ─────────────────────────────────────────────────────────────────────────────
app.get('/scholarship', (c) => {
  const lang = getLang(c)
  const isRTL = lang === 'ar'
  const t = T[lang]

  const pageTitle = isRTL ? 'نظام الابتعاث' : 'Scholarship System'

  const content = `
<div dir="${isRTL?'rtl':'ltr'}">

  <!-- Header -->
  <div class="mb-6 ${isRTL?'text-right':''}">
    <h1 class="text-2xl font-bold text-gray-800">${isRTL?'نظام إدارة الابتعاث':'Scholarship Management System'}</h1>
    <p class="text-gray-500 mt-1 text-sm">${isRTL?'إدارة المبتعثين، تتبع المدفوعات، والطلبات الجديدة':'Manage scholars, track payments, and new applications'}</p>
  </div>

  <!-- KPI Cards -->
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
    ${[
      {id:'total_scholars',icon:'fa-graduation-cap',color:'var(--qu-maroon)',bg:'rgba(139,26,47,0.08)',value:'45',label:isRTL?'إجمالي المبتعثين':'Total Scholars'},
      {id:'active_scholars',icon:'fa-user-graduate',color:'#10B981',bg:'rgba(16,185,129,0.08)',value:'38',label:isRTL?'مبتعث نشط':'Active'},
      {id:'pending_payments',icon:'fa-money-bill-wave',color:'#F59E0B',bg:'rgba(245,158,11,0.08)',value:'12',label:isRTL?'مدفوعات معلقة':'Pending Payments'},
      {id:'new_requests',icon:'fa-file-invoice',color:'#EF4444',bg:'rgba(239,68,68,0.08)',value:'5',label:isRTL?'طلبات جديدة':'New Requests'},
    ].map(k=>`
    <div class="card p-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${k.bg}">
        <i class="fas ${k.icon}" style="color:${k.color}"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <p class="text-2xl font-bold text-gray-800" id="${k.id}">${k.value}</p>
        <p class="text-xs text-gray-500">${k.label}</p>
      </div>
    </div>`).join('')}
  </div>

  <!-- Tabs -->
  <div class="mb-6 flex gap-2 border-b border-gray-200 overflow-x-auto ${isRTL?'flex-row-reverse':''}">
    <button onclick="showScholarshipTab('dashboard')" id="tab_dashboard" class="sch-tab-btn active pb-3 px-4 text-sm font-semibold border-b-2 border-red-700 text-red-700 whitespace-nowrap">
      <i class="fas fa-chart-line mr-1.5"></i>${isRTL?'لوحة التحكم':'Dashboard'}
    </button>
    <button onclick="showScholarshipTab('scholars')" id="tab_scholars" class="sch-tab-btn pb-3 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap">
      <i class="fas fa-users mr-1.5"></i>${isRTL?'المبتعثون':'Scholars'}
    </button>
    <button onclick="showScholarshipTab('payments')" id="tab_payments" class="sch-tab-btn pb-3 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap">
      <i class="fas fa-dollar-sign mr-1.5"></i>${isRTL?'المدفوعات':'Payments'}
    </button>
    <button onclick="showScholarshipTab('rules')" id="tab_rules" class="sch-tab-btn pb-3 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap">
      <i class="fas fa-book mr-1.5"></i>${isRTL?'القوانين':'Rules'}
    </button>
    <button onclick="showScholarshipTab('requests')" id="tab_requests" class="sch-tab-btn pb-3 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 whitespace-nowrap">
      <i class="fas fa-inbox mr-1.5"></i>${isRTL?'الطلبات':'Requests'} <span class="ml-1 px-1.5 py-0.5 rounded-full text-xs font-bold bg-red-100 text-red-600">5</span>
    </button>
  </div>

  <!-- Dashboard Tab -->
  <div id="pane_dashboard">
    <!-- Quick Stats Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div class="card p-5">
        <div class="flex items-center justify-between mb-3 ${isRTL?'flex-row-reverse':''}">
          <h3 class="font-bold text-gray-700 text-sm">${isRTL?'حسب الدرجة العلمية':'By Degree Type'}</h3>
          <i class="fas fa-award" style="color:var(--qu-gold)"></i>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between text-sm ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'دكتوراه':'PhD'}</span>
            <span class="font-bold text-gray-800">25</span>
          </div>
          <div class="flex justify-between text-sm ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'ماجستير':'Master'}</span>
            <span class="font-bold text-gray-800">18</span>
          </div>
          <div class="flex justify-between text-sm ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'دبلوم':'Diploma'}</span>
            <span class="font-bold text-gray-800">2</span>
          </div>
        </div>
      </div>

      <div class="card p-5">
        <div class="flex items-center justify-between mb-3 ${isRTL?'flex-row-reverse':''}">
          <h3 class="font-bold text-gray-700 text-sm">${isRTL?'حسب الحالة':'By Status'}</h3>
          <i class="fas fa-chart-pie text-blue-500"></i>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between text-sm ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'نشط':'Active'}</span>
            <span class="font-bold text-green-600">38</span>
          </div>
          <div class="flex justify-between text-sm ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'معلّق':'Suspended'}</span>
            <span class="font-bold text-orange-600">5</span>
          </div>
          <div class="flex justify-between text-sm ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'مكتمل':'Completed'}</span>
            <span class="font-bold text-gray-500">2</span>
          </div>
        </div>
      </div>

      <div class="card p-5">
        <div class="flex items-center justify-between mb-3 ${isRTL?'flex-row-reverse':''}">
          <h3 class="font-bold text-gray-700 text-sm">${isRTL?'الميزانية الشهرية':'Monthly Budget'}</h3>
          <i class="fas fa-wallet text-green-600"></i>
        </div>
        <div class="space-y-3">
          <div>
            <p class="text-2xl font-bold" style="color:var(--qu-maroon)">2.4M ${isRTL?'ريال':'QR'}</p>
            <p class="text-xs text-gray-500">${isRTL?'إجمالي المدفوعات الشهرية':'Total monthly payments'}</p>
          </div>
          <div class="flex items-center gap-2 text-xs text-green-600 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-arrow-up"></i>
            <span>${isRTL?'5% زيادة عن الشهر الماضي':'5% from last month'}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="card p-5">
      <h3 class="font-bold text-gray-800 mb-4 ${isRTL?'text-right':''}">${isRTL?'النشاط الأخير':'Recent Activity'}</h3>
      <div class="space-y-3">
        ${[
          {icon:'fa-check-circle',color:'#10B981',text:isRTL?'تمت الموافقة على طلب ابتعاث أحمد المري':'Ahmed Al-Marri scholarship approved',time:isRTL?'منذ ساعتين':'2h ago'},
          {icon:'fa-dollar-sign',color:'#F59E0B',text:isRTL?'تم صرف راتب ابتعاث فاطمة الكبيسي':'Fatima Al-Kubaisi payment processed',time:isRTL?'منذ 5 ساعات':'5h ago'},
          {icon:'fa-file-alt',color:'#3B82F6',text:isRTL?'طلب ابتعاث جديد من نورة المنصوري':'New application from Noora Al-Mansouri',time:isRTL?'أمس':'Yesterday'},
          {icon:'fa-exclamation-triangle',color:'#EF4444',text:isRTL?'تأخر دفعة محمد العلي – يتطلب مراجعة':'Mohammed Al-Ali payment delayed – review needed',time:isRTL?'منذ يومين':'2d ago'},
        ].map(a=>`
        <div class="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0 ${isRTL?'flex-row-reverse':''}">
          <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(${a.color==='#10B981'?'16,185,129':a.color==='#F59E0B'?'245,158,11':a.color==='#3B82F6'?'59,130,246':'239,68,68'},0.1)">
            <i class="fas ${a.icon} text-xs" style="color:${a.color}"></i>
          </div>
          <div class="flex-1 ${isRTL?'text-right':''}">
            <p class="text-sm text-gray-800">${a.text}</p>
            <p class="text-xs text-gray-400 mt-0.5">${a.time}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- Scholars Tab -->
  <div id="pane_scholars" class="hidden">
    <div class="card p-4 mb-4 flex flex-wrap gap-3 items-center ${isRTL?'flex-row-reverse':''}">
      <input id="scholarSearch" type="text" placeholder="${isRTL?'ابحث باسم المبتعث أو الرقم الوظيفي...':'Search by name or employee ID...'}"
        class="border border-gray-200 rounded-xl px-4 py-2 text-sm flex-1 min-w-48 focus:outline-none ${isRTL?'text-right':''}" oninput="filterScholars()"/>
      <select id="degreeFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}" onchange="filterScholars()">
        <option value="">${isRTL?'كل الدرجات':'All Degrees'}</option>
        <option value="phd">${isRTL?'دكتوراه':'PhD'}</option>
        <option value="master">${isRTL?'ماجستير':'Master'}</option>
        <option value="diploma">${isRTL?'دبلوم':'Diploma'}</option>
      </select>
      <select id="statusScholarFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}" onchange="filterScholars()">
        <option value="">${isRTL?'كل الحالات':'All Statuses'}</option>
        <option value="active">${isRTL?'نشط':'Active'}</option>
        <option value="suspended">${isRTL?'معلّق':'Suspended'}</option>
        <option value="completed">${isRTL?'مكتمل':'Completed'}</option>
      </select>
      <button onclick="openAddScholarModal()" class="btn-primary px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 whitespace-nowrap">
        <i class="fas fa-plus"></i>${isRTL?'مبتعث جديد':'Add Scholar'}
      </button>
    </div>

    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-100 bg-gray-50">
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'المبتعث':'Scholar'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الدرجة':'Degree'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الجامعة':'University'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الراتب الشهري':'Monthly Salary'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الحالة':'Status'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'إجراءات':'Actions'}</th>
            </tr>
          </thead>
          <tbody id="scholarsTableBody"></tbody>
        </table>
      </div>
      <div id="scholarsEmpty" class="hidden py-16 text-center text-gray-400">
        <i class="fas fa-graduation-cap text-4xl mb-3 block opacity-30"></i>
        <p class="text-sm">${isRTL?'لا يوجد مبتعثون حالياً':'No scholars found'}</p>
      </div>
    </div>
  </div>

  <!-- Payments Tab -->
  <div id="pane_payments" class="hidden">
    <div class="card p-4 mb-4 flex flex-wrap gap-3 items-center ${isRTL?'flex-row-reverse':''}">
      <select id="paymentMonthFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}">
        <option value="">${isRTL?'كل الأشهر':'All Months'}</option>
        <option value="2025-04">${isRTL?'أبريل 2025':'April 2025'}</option>
        <option value="2025-03">${isRTL?'مارس 2025':'March 2025'}</option>
        <option value="2025-02">${isRTL?'فبراير 2025':'February 2025'}</option>
      </select>
      <select id="paymentStatusFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}">
        <option value="">${isRTL?'كل الحالات':'All Statuses'}</option>
        <option value="pending">${isRTL?'معلق':'Pending'}</option>
        <option value="processing">${isRTL?'قيد التنفيذ':'Processing'}</option>
        <option value="paid">${isRTL?'مدفوع':'Paid'}</option>
        <option value="failed">${isRTL?'فشل':'Failed'}</option>
      </select>
      <button onclick="exportPayments()" class="px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 border border-gray-200 bg-white text-gray-600 hover:bg-gray-50">
        <i class="fas fa-download"></i>${isRTL?'تصدير':'Export'}
      </button>
    </div>

    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-100 bg-gray-50">
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'رقم الدفعة':'Payment ID'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'المبتعث':'Scholar'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'المبلغ':'Amount'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'التاريخ':'Date'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الحالة':'Status'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'إجراءات':'Actions'}</th>
            </tr>
          </thead>
          <tbody id="paymentsTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Rules Tab -->
  <div id="pane_rules" class="hidden">
    <div class="grid md:grid-cols-2 gap-6">
      <!-- القوانين -->
      <div class="card p-6">
        <div class="flex items-center gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.08)">
            <i class="fas fa-balance-scale" style="color:var(--qu-maroon)"></i>
          </div>
          <h2 class="text-lg font-bold text-gray-800">${isRTL?'شروط الابتعاث':'Scholarship Conditions'}</h2>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
            <p class="text-gray-700 ${isRTL?'text-right':''}">${isRTL?'أن يكون الموظف قطري الجنسية':'Employee must be Qatari national'}</p>
          </div>
          <div class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
            <p class="text-gray-700 ${isRTL?'text-right':''}">${isRTL?'الخدمة الفعلية لا تقل عن 3 سنوات':'Minimum 3 years of service'}</p>
          </div>
          <div class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
            <p class="text-gray-700 ${isRTL?'text-right':''}">${isRTL?'تقدير الأداء "ممتاز" أو "جيد جداً" في آخر سنتين':'Performance rating "Excellent" or "Very Good" for last 2 years'}</p>
          </div>
          <div class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
            <p class="text-gray-700 ${isRTL?'text-right':''}">${isRTL?'الحصول على قبول من جامعة معتمدة':'Admission from accredited university'}</p>
          </div>
          <div class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
            <p class="text-gray-700 ${isRTL?'text-right':''}">${isRTL?'التفرغ الكامل للدراسة (ما لم تكن الدراسة بنظام جزئي)':'Full-time study (unless part-time approved)'}</p>
          </div>
          <div class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle text-green-500 mt-0.5 flex-shrink-0"></i>
            <p class="text-gray-700 ${isRTL?'text-right':''}">${isRTL?'التعهد بالعودة للعمل لمدة ضعف مدة الابتعاث':'Commitment to return for double scholarship duration'}</p>
          </div>
        </div>
      </div>

      <!-- المستحقات المالية -->
      <div class="card p-6">
        <div class="flex items-center gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(16,185,129,0.08)">
            <i class="fas fa-money-bill-wave text-green-600"></i>
          </div>
          <h2 class="text-lg font-bold text-gray-800">${isRTL?'المستحقات المالية':'Financial Entitlements'}</h2>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'الراتب الأساسي':'Basic Salary'}</span>
            <span class="font-bold text-gray-800">100%</span>
          </div>
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'بدل السكن':'Housing Allowance'}</span>
            <span class="font-bold text-gray-800">50%</span>
          </div>
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'بدل الكتب':'Books Allowance'}</span>
            <span class="font-bold text-green-600">${isRTL?'5,000 ريال/سنة':'QR 5,000/year'}</span>
          </div>
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'تذاكر السفر':'Travel Tickets'}</span>
            <span class="font-bold text-green-600">${isRTL?'ذهاب وعودة/سنة':'Round trip/year'}</span>
          </div>
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'الرسوم الدراسية':'Tuition Fees'}</span>
            <span class="font-bold text-green-600">${isRTL?'كاملة':'Full coverage'}</span>
          </div>
          <div class="flex justify-between items-center ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'بدل مصاريف أخرى':'Miscellaneous'}</span>
            <span class="font-bold text-gray-800">${isRTL?'حسب الحاجة':'As needed'}</span>
          </div>
        </div>
      </div>

      <!-- الإجراءات -->
      <div class="card p-6">
        <div class="flex items-center gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(59,130,246,0.08)">
            <i class="fas fa-list-check text-blue-600"></i>
          </div>
          <h2 class="text-lg font-bold text-gray-800">${isRTL?'إجراءات التقديم':'Application Procedures'}</h2>
        </div>
        <div class="space-y-3">
          ${[
            {num:1,text:isRTL?'تعبئة نموذج طلب الابتعاث الإلكتروني':'Complete online scholarship application form'},
            {num:2,text:isRTL?'إرفاق قبول الجامعة المعتمدة':'Attach university admission letter'},
            {num:3,text:isRTL?'تقديم تقييم الأداء للسنتين الأخيرتين':'Submit performance evaluations (last 2 years)'},
            {num:4,text:isRTL?'الحصول على موافقة المشرف المباشر':'Obtain direct supervisor approval'},
            {num:5,text:isRTL?'مراجعة اللجنة الإدارية والموافقة النهائية':'Review by administrative committee'},
            {num:6,text:isRTL?'توقيع عقد الابتعاث والتعهدات':'Sign scholarship contract and commitments'},
          ].map(s=>`
          <div class="flex items-start gap-3 ${isRTL?'flex-row-reverse':''}">
            <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white" style="background:var(--qu-maroon)">${s.num}</div>
            <p class="text-sm text-gray-700 ${isRTL?'text-right':''}">${s.text}</p>
          </div>`).join('')}
        </div>
      </div>

      <!-- المدة الزمنية -->
      <div class="card p-6">
        <div class="flex items-center gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:rgba(245,158,11,0.08)">
            <i class="fas fa-clock text-amber-500"></i>
          </div>
          <h2 class="text-lg font-bold text-gray-800">${isRTL?'المدة الزمنية':'Duration'}</h2>
        </div>
        <div class="space-y-3 text-sm">
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'دكتوراه':'PhD'}</span>
            <span class="font-bold text-gray-800">${isRTL?'4-5 سنوات':'4-5 years'}</span>
          </div>
          <div class="flex justify-between items-center pb-2 border-b ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'ماجستير':'Master'}</span>
            <span class="font-bold text-gray-800">${isRTL?'2-3 سنوات':'2-3 years'}</span>
          </div>
          <div class="flex justify-between items-center ${isRTL?'flex-row-reverse':''}">
            <span class="text-gray-600">${isRTL?'دبلوم':'Diploma'}</span>
            <span class="font-bold text-gray-800">${isRTL?'1-2 سنة':'1-2 years'}</span>
          </div>
          <div class="mt-4 rounded-lg p-3" style="background:#FEF3C7">
            <p class="text-xs text-amber-800 ${isRTL?'text-right':''}">${isRTL?'<strong>ملاحظة:</strong> يمكن تمديد المدة بموافقة اللجنة المختصة في حالات استثنائية':'<strong>Note:</strong> Extension possible with committee approval in exceptional cases'}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Requests Tab -->
  <div id="pane_requests" class="hidden">
    <div class="card p-4 mb-4 flex flex-wrap gap-3 items-center ${isRTL?'flex-row-reverse':''}">
      <select id="requestStatusFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}">
        <option value="">${isRTL?'كل الحالات':'All Statuses'}</option>
        <option value="pending">${isRTL?'معلق':'Pending'}</option>
        <option value="under_review">${isRTL?'قيد المراجعة':'Under Review'}</option>
        <option value="approved">${isRTL?'موافق':'Approved'}</option>
        <option value="rejected">${isRTL?'مرفوض':'Rejected'}</option>
      </select>
    </div>

    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-100 bg-gray-50">
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'رقم الطلب':'Request ID'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الموظف':'Employee'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الدرجة المطلوبة':'Degree'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الجامعة':'University'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'تاريخ التقديم':'Submission Date'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الحالة':'Status'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'إجراءات':'Actions'}</th>
            </tr>
          </thead>
          <tbody id="requestsTableBody"></tbody>
        </table>
      </div>
    </div>
  </div>

</div>

<style>
  .sch-tab-btn.active { border-color: var(--qu-maroon) !important; color: var(--qu-maroon) !important; }
</style>

<script>
const SCH_KEY = 'scholarship_data';
const SCH_PAYMENTS_KEY = 'scholarship_payments';
const SCH_REQUESTS_KEY = 'scholarship_requests';
const IS_RTL_SCH = ${isRTL};

// Sample Data
function initScholarshipData(){
  if(localStorage.getItem(SCH_KEY)) return;
  const scholars = [
    {id:'S001',name:'أحمد محمد المري',empId:'QU-10145',degree:'phd',university:'جامعة كامبريدج',monthlySalary:45000,status:'active',startDate:'2023-09-01'},
    {id:'S002',name:'فاطمة يوسف الكبيسي',empId:'QU-10298',degree:'master',university:'جامعة أكسفورد',monthlySalary:35000,status:'active',startDate:'2024-01-15'},
    {id:'S003',name:'محمد علي السليطي',empId:'QU-10412',degree:'phd',university:'MIT',monthlySalary:48000,status:'active',startDate:'2022-09-01'},
    {id:'S004',name:'نورة خالد المنصوري',empId:'QU-10567',degree:'master',university:'جامعة لندن',monthlySalary:32000,status:'suspended',startDate:'2024-02-01'},
    {id:'S005',name:'سعيد عبدالله الدوسري',empId:'QU-10689',degree:'diploma',university:'جامعة قطر',monthlySalary:18000,status:'active',startDate:'2024-03-01'},
  ];
  localStorage.setItem(SCH_KEY, JSON.stringify(scholars));

  const payments = [
    {id:'PAY-001',scholarId:'S001',amount:45000,date:'2025-04-28',status:'paid',month:'2025-04'},
    {id:'PAY-002',scholarId:'S002',amount:35000,date:'2025-04-28',status:'paid',month:'2025-04'},
    {id:'PAY-003',scholarId:'S003',amount:48000,date:'2025-04-28',status:'processing',month:'2025-04'},
    {id:'PAY-004',scholarId:'S001',amount:45000,date:'2025-03-28',status:'paid',month:'2025-03'},
  ];
  localStorage.setItem(SCH_PAYMENTS_KEY, JSON.stringify(payments));

  const requests = [
    {id:'REQ-001',empName:'يوسف أحمد العمادي',empId:'QU-10890',degree:'master',university:'جامعة هارفارد',submittedAt:'2025-04-01',status:'pending'},
    {id:'REQ-002',empName:'مريم سالم النعيمي',empId:'QU-10912',degree:'phd',university:'جامعة ستانفورد',submittedAt:'2025-04-05',status:'under_review'},
    {id:'REQ-003',empName:'خالد محمد الكواري',empId:'QU-10945',degree:'master',university:'جامعة تورنتو',submittedAt:'2025-04-08',status:'pending'},
  ];
  localStorage.setItem(SCH_REQUESTS_KEY, JSON.stringify(requests));
}
initScholarshipData();

function getScholars(){ try{return JSON.parse(localStorage.getItem(SCH_KEY)||'[]')}catch(e){return[]} }
function saveScholars(d){ localStorage.setItem(SCH_KEY, JSON.stringify(d)) }
function getPayments(){ try{return JSON.parse(localStorage.getItem(SCH_PAYMENTS_KEY)||'[]')}catch(e){return[]} }
function getRequests(){ try{return JSON.parse(localStorage.getItem(SCH_REQUESTS_KEY)||'[]')}catch(e){return[]} }
function saveRequests(d){ localStorage.setItem(SCH_REQUESTS_KEY, JSON.stringify(d)) }

function showScholarshipTab(tab){
  ['dashboard','scholars','payments','rules','requests'].forEach(t=>{
    document.getElementById('pane_'+t).classList.toggle('hidden',t!==tab);
    const btn = document.getElementById('tab_'+t);
    if(btn){
      btn.classList.toggle('border-red-700',t===tab);
      btn.classList.toggle('text-red-700',t===tab);
      btn.classList.toggle('border-transparent',t!==tab);
      btn.classList.toggle('text-gray-500',t!==tab);
      btn.classList.remove('active');
      if(t===tab) btn.classList.add('active');
    }
  });
  if(tab==='scholars') renderScholarsTable();
  if(tab==='payments') renderPaymentsTable();
  if(tab==='requests') renderRequestsTable();
}

function renderScholarsTable(){
  const scholars = getScholars();
  const tbody = document.getElementById('scholarsTableBody');
  const empty = document.getElementById('scholarsEmpty');
  if(scholars.length===0){ tbody.innerHTML=''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  tbody.innerHTML = scholars.map(s=>{
    const statusLabel = {active:IS_RTL_SCH?'نشط':'Active',suspended:IS_RTL_SCH?'معلق':'Suspended',completed:IS_RTL_SCH?'مكتمل':'Completed'}[s.status]||s.status;
    const statusColor = {active:'badge-done',suspended:'badge-open',completed:'badge-breach'}[s.status]||'badge-open';
    const degreeLabel = {phd:IS_RTL_SCH?'دكتوراه':'PhD',master:IS_RTL_SCH?'ماجستير':'Master',diploma:IS_RTL_SCH?'دبلوم':'Diploma'}[s.degree]||s.degree;
    return \`
    <tr class="border-b border-gray-50 hover:bg-gray-50">
      <td class="px-4 py-3">
        <p class="font-semibold text-gray-800 text-sm">\${s.name}</p>
        <p class="text-xs text-gray-400">\${s.empId}</p>
      </td>
      <td class="px-4 py-3 text-sm text-gray-700">\${degreeLabel}</td>
      <td class="px-4 py-3 text-sm text-gray-700">\${s.university}</td>
      <td class="px-4 py-3 text-sm font-semibold text-gray-800">\${s.monthlySalary.toLocaleString()} ${isRTL?'ريال':'QR'}</td>
      <td class="px-4 py-3"><span class="\${statusColor} text-xs px-2 py-1 rounded-full font-semibold">\${statusLabel}</span></td>
      <td class="px-4 py-3">
        <button onclick="viewScholar('\${s.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition" title="${isRTL?'عرض':'View'}"><i class="fas fa-eye text-xs"></i></button>
      </td>
    </tr>\`;
  }).join('');
}

function renderPaymentsTable(){
  const payments = getPayments();
  const scholars = getScholars();
  const tbody = document.getElementById('paymentsTableBody');
  tbody.innerHTML = payments.map(p=>{
    const scholar = scholars.find(s=>s.id===p.scholarId);
    const statusLabel = {pending:IS_RTL_SCH?'معلق':'Pending',processing:IS_RTL_SCH?'قيد التنفيذ':'Processing',paid:IS_RTL_SCH?'مدفوع':'Paid',failed:IS_RTL_SCH?'فشل':'Failed'}[p.status]||p.status;
    const statusColor = {pending:'badge-open',processing:'badge-inprogress',paid:'badge-done',failed:'badge-breach'}[p.status]||'badge-open';
    return \`
    <tr class="border-b border-gray-50 hover:bg-gray-50">
      <td class="px-4 py-3 font-mono text-xs font-bold text-gray-800">\${p.id}</td>
      <td class="px-4 py-3 text-sm text-gray-700">\${scholar?scholar.name:p.scholarId}</td>
      <td class="px-4 py-3 text-sm font-semibold text-gray-800">\${p.amount.toLocaleString()} ${isRTL?'ريال':'QR'}</td>
      <td class="px-4 py-3 text-xs text-gray-500">\${new Date(p.date).toLocaleDateString(IS_RTL_SCH?'ar-QA':'en-GB')}</td>
      <td class="px-4 py-3"><span class="\${statusColor} text-xs px-2 py-1 rounded-full font-semibold">\${statusLabel}</span></td>
      <td class="px-4 py-3">
        <button onclick="viewPayment('\${p.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition" title="${isRTL?'عرض':'View'}"><i class="fas fa-eye text-xs"></i></button>
      </td>
    </tr>\`;
  }).join('');
}

function renderRequestsTable(){
  const requests = getRequests();
  const tbody = document.getElementById('requestsTableBody');
  tbody.innerHTML = requests.map(r=>{
    const statusLabel = {pending:IS_RTL_SCH?'معلق':'Pending',under_review:IS_RTL_SCH?'قيد المراجعة':'Under Review',approved:IS_RTL_SCH?'موافق':'Approved',rejected:IS_RTL_SCH?'مرفوض':'Rejected'}[r.status]||r.status;
    const statusColor = {pending:'badge-open',under_review:'badge-inprogress',approved:'badge-done',rejected:'badge-breach'}[r.status]||'badge-open';
    const degreeLabel = {phd:IS_RTL_SCH?'دكتوراه':'PhD',master:IS_RTL_SCH?'ماجستير':'Master',diploma:IS_RTL_SCH?'دبلوم':'Diploma'}[r.degree]||r.degree;
    return \`
    <tr class="border-b border-gray-50 hover:bg-gray-50">
      <td class="px-4 py-3 font-mono text-xs font-bold text-gray-800">\${r.id}</td>
      <td class="px-4 py-3">
        <p class="font-semibold text-gray-800 text-sm">\${r.empName}</p>
        <p class="text-xs text-gray-400">\${r.empId}</p>
      </td>
      <td class="px-4 py-3 text-sm text-gray-700">\${degreeLabel}</td>
      <td class="px-4 py-3 text-sm text-gray-700">\${r.university}</td>
      <td class="px-4 py-3 text-xs text-gray-500">\${new Date(r.submittedAt).toLocaleDateString(IS_RTL_SCH?'ar-QA':'en-GB')}</td>
      <td class="px-4 py-3"><span class="\${statusColor} text-xs px-2 py-1 rounded-full font-semibold">\${statusLabel}</span></td>
      <td class="px-4 py-3">
        <div class="flex gap-1.5">
          <button onclick="viewRequest('\${r.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition" title="${isRTL?'عرض':'View'}"><i class="fas fa-eye text-xs"></i></button>
          <button onclick="approveRequest('\${r.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition" title="${isRTL?'موافقة':'Approve'}"><i class="fas fa-check text-xs"></i></button>
          <button onclick="rejectRequest('\${r.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition" title="${isRTL?'رفض':'Reject'}"><i class="fas fa-times text-xs"></i></button>
        </div>
      </td>
    </tr>\`;
  }).join('');
}

function filterScholars(){}
function filterPayments(){}
function filterRequests(){}
function viewScholar(id){ alert('View scholar: '+id); }
function viewPayment(id){ alert('View payment: '+id); }
function viewRequest(id){ alert('View request: '+id); }
function approveRequest(id){ 
  const reqs = getRequests();
  const idx = reqs.findIndex(r=>r.id===id);
  if(idx!==-1){ reqs[idx].status='approved'; saveRequests(reqs); renderRequestsTable(); }
}
function rejectRequest(id){
  const reqs = getRequests();
  const idx = reqs.findIndex(r=>r.id===id);
  if(idx!==-1){ reqs[idx].status='rejected'; saveRequests(reqs); renderRequestsTable(); }
}
function openAddScholarModal(){ alert('Add new scholar modal'); }
function exportPayments(){ alert('Export payments'); }

// Init
showScholarshipTab('dashboard');
</script>`

  return c.html(layout(pageTitle, content, 'scholarship', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  NEWS ADMIN  /admin/news  (إدارة آخر الأخبار والإعلانات)
// ─────────────────────────────────────────────────────────────────────────────
app.get('/admin/news', (c) => {
  const lang  = getLang(c)
  const isRTL = lang === 'ar'
  const pageTitle = isRTL ? 'إدارة الأخبار والإعلانات' : 'News & Announcements Manager'

  const content = `
<div dir="${isRTL?'rtl':'ltr'}">

  <!-- Header -->
  <div class="flex items-center justify-between mb-6 flex-wrap gap-3">
    <div class="${isRTL?'text-right':''}">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <span class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:var(--qu-maroon)">
          <i class="fas fa-newspaper text-white text-lg"></i>
        </span>
        ${isRTL?'إدارة الأخبار والإعلانات':'News & Announcements Manager'}
      </h1>
      <p class="text-gray-500 text-sm mt-1 ${isRTL?'text-right':''}">${isRTL?'تخصيص شريط الأخبار المتحرك وبطاقات الإعلانات في الصفحة الرئيسية':'Customize the news ticker and announcement cards on the home page'}</p>
    </div>
    <div class="flex gap-2">
      <a href="/?lang=${lang}" target="_blank" class="px-4 py-2 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50 flex items-center gap-2">
        <i class="fas fa-external-link-alt text-xs"></i>${isRTL?'عرض الصفحة الرئيسية':'View Home Page'}
      </a>
      <button onclick="resetAllNews()" class="px-4 py-2 rounded-xl text-sm font-semibold border border-red-200 text-red-600 hover:bg-red-50 flex items-center gap-2">
        <i class="fas fa-undo text-xs"></i>${isRTL?'إعادة الضبط':'Reset to Default'}
      </button>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════════════════════
       SECTION 1 – TICKER
  ══════════════════════════════════════════════════════════════════════════ -->
  <div class="card p-6 mb-6">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <span class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:var(--qu-gold)">
          <i class="fas fa-stream text-white text-sm"></i>
        </span>
        ${isRTL?'شريط الأخبار المتحرك':'News Ticker Strip'}
      </h2>
      <span class="text-xs font-semibold px-2.5 py-1 rounded-full text-white" style="background:var(--qu-gold)" id="tickerCountBadge">0 ${isRTL?'خبر':'items'}</span>
    </div>

    <!-- Preview -->
    <div class="rounded-xl overflow-hidden mb-5" style="background:var(--qu-gold)">
      <div class="py-2 px-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <span class="text-white font-bold text-xs uppercase tracking-wide whitespace-nowrap flex-shrink-0">
          <i class="fas fa-bullhorn ${isRTL?'ml-1.5':'mr-1.5'}"></i>${isRTL?'آخر الأخبار:':'Latest:'}
        </span>
        <div class="overflow-hidden flex-1">
          <div class="ticker-preview text-white text-xs whitespace-nowrap" id="tickerPreview" style="animation:ticker-prev 20s linear infinite${isRTL?' reverse':''}">
            ${isRTL?'جارٍ التحميل…':'Loading…'}
          </div>
        </div>
      </div>
    </div>

    <!-- Ticker Items List -->
    <div id="tickerList" class="space-y-2 mb-4"></div>

    <!-- Add New Ticker Item -->
    <div class="rounded-xl p-4" style="background:#F8FAFC;border:1px dashed #CBD5E1">
      <p class="text-xs font-semibold text-gray-500 uppercase mb-2 ${isRTL?'text-right':''}">${isRTL?'إضافة خبر جديد للشريط':'Add New Ticker Item'}</p>
      <div class="flex gap-2 flex-wrap">
        <input id="newTickerInput" type="text" placeholder="${isRTL?'اكتب نص الخبر…':'Type news text…'}"
          class="flex-1 min-w-48 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-200 ${isRTL?'text-right':''}"/>
        <button onclick="addTickerItem()" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition" style="background:var(--qu-gold)">
          <i class="fas fa-plus"></i>${isRTL?'إضافة':'Add'}
        </button>
      </div>
    </div>
  </div>

  <!-- ══════════════════════════════════════════════════════════════════════════
       SECTION 2 – ANNOUNCEMENT CARDS
  ══════════════════════════════════════════════════════════════════════════ -->
  <div class="card p-6 mb-6">
    <div class="flex items-center justify-between mb-4">
      <h2 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <span class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:var(--qu-maroon)">
          <i class="fas fa-bullhorn text-white text-sm"></i>
        </span>
        ${isRTL?'بطاقات الإعلانات (الصفحة الرئيسية)':'Announcement Cards (Home Page)'}
      </h2>
      <button onclick="addAnnCard()" class="px-4 py-2 rounded-xl text-xs font-bold text-white flex items-center gap-2 hover:opacity-90 transition" style="background:var(--qu-maroon)">
        <i class="fas fa-plus"></i>${isRTL?'إضافة إعلان':'Add Card'}
      </button>
    </div>

    <!-- Cards list -->
    <div id="annCardsList" class="space-y-3"></div>
  </div>

  <!-- Save Button -->
  <div class="flex justify-end gap-3">
    <button onclick="saveAllNews()" class="px-8 py-3 rounded-xl text-sm font-bold text-white flex items-center gap-2 hover:opacity-90 transition shadow-lg" style="background:var(--qu-maroon)">
      <i class="fas fa-save"></i>${isRTL?'حفظ كل التغييرات':'Save All Changes'}
    </button>
  </div>

</div>

<!-- Edit Card Modal -->
<div id="annEditModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-lg" dir="${isRTL?'rtl':'ltr'}">
    <div class="px-6 py-4 border-b flex items-center justify-between" style="background:var(--qu-maroon)">
      <h3 class="font-bold text-white">${isRTL?'تعديل الإعلان':'Edit Announcement'}</h3>
      <button onclick="closeAnnModal()" class="text-white/70 hover:text-white text-2xl leading-none">×</button>
    </div>
    <div class="p-6 space-y-4">
      <input type="hidden" id="editCardIdx"/>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'عنوان الإعلان':'Title'} *</label>
        <input id="editCardTitle" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}"/>
      </div>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'التاريخ':'Date'}</label>
        <input id="editCardDate" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}"/>
      </div>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'التصنيف':'Badge'}</label>
        <input id="editCardBadge" type="text" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}"/>
      </div>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 ${isRTL?'text-right':''}">${isRTL?'الأيقونة والألوان':'Icon & Color'}</label>
        <div class="grid grid-cols-3 gap-2" id="iconPicker">
          ${[
            {icon:'fa-money-bill-wave', color:'#059669', bg:'badge-green', label: isRTL?'راتب':'Salary'},
            {icon:'fa-star-and-crescent', color:'#D97706', bg:'badge-amber', label: isRTL?'إجازة':'Leave'},
            {icon:'fa-file-alt', color:'#2563EB', bg:'badge-blue', label: isRTL?'نموذج':'Form'},
            {icon:'fa-file-contract', color:'#DC2626', bg:'badge-red', label: isRTL?'سياسة':'Policy'},
            {icon:'fa-bell', color:'#7C3AED', bg:'badge-purple', label: isRTL?'إشعار':'Notice'},
            {icon:'fa-calendar-check', color:'#0891B2', bg:'badge-cyan', label: isRTL?'تقويم':'Calendar'},
          ].map(ic=>`
          <button type="button" onclick="pickIcon('${ic.icon}','${ic.bg}')" class="icon-pick-btn flex flex-col items-center gap-1 p-2.5 rounded-xl border-2 border-transparent hover:border-gray-300 transition" data-icon="${ic.icon}" data-bg="${ic.bg}">
            <i class="fas ${ic.icon} text-lg" style="color:${ic.color}"></i>
            <span class="text-xs text-gray-600">${ic.label}</span>
          </button>`).join('')}
        </div>
        <input type="hidden" id="editCardIcon" value="fa-bell"/>
        <input type="hidden" id="editCardBg" value="badge-blue"/>
      </div>
      <div class="flex gap-3 pt-2 ${isRTL?'flex-row-reverse':''}">
        <button onclick="saveAnnCard()" class="flex-1 py-2.5 rounded-xl text-sm font-bold text-white" style="background:var(--qu-maroon)">${isRTL?'حفظ':'Save'}</button>
        <button onclick="closeAnnModal()" class="flex-1 py-2.5 rounded-xl text-sm font-bold border border-gray-200 text-gray-600">${isRTL?'إلغاء':'Cancel'}</button>
      </div>
    </div>
  </div>
</div>

<style>
@keyframes ticker-prev { 0%{transform:translateX(100%)} 100%{transform:translateX(-100%)} }
.badge-purple { background:#EDE9FE; color:#6D28D9; }
.badge-cyan   { background:#CFFAFE; color:#0E7490; }
</style>

<script>
const NEWS_KEY  = 'qu_news_ticker';
const ANN_KEY   = 'qu_announcements';
const IS_RTL_N  = ${isRTL};

/* ── Defaults ── */
const DEFAULT_TICKER = [
  ${isRTL
    ? `'سيتم إيداع رواتب أبريل 2025 بتاريخ 28 أبريل 2025',
  'سياسة حساب العمل الإضافي المحدّثة تسري من 1 مايو 2025',
  'الموعد النهائي لطلبات سلفة عيد الفطر: 10 أبريل 2025',
  'تم تحديث نموذج بدل السكن – يرجى تحميل الإصدار الأحدث',
  'مكتب الرواتب مغلق يوم 18 أبريل بمناسبة اليوم الوطني'`
    : `'April 2025 salaries will be credited on 28 April 2025',
  'New overtime calculation policy effective from 1 May 2025',
  'Eid Al-Fitr advance payment requests deadline: 10 April 2025',
  'Housing allowance form has been updated – download the latest version',
  'Payroll office will be closed on 18 April for National Day'`}
];

const DEFAULT_ANN = [
  { title: ${isRTL?`'موعد صرف رواتب أبريل 2025'`:`'April 2025 Salary Processing Date'`}, date: ${isRTL?`'15 أبريل 2025'`:`'April 15, 2025'`}, badge: ${isRTL?`'راتب'`:`'Salary'`}, icon:'fa-money-bill-wave', bg:'badge-green' },
  { title: ${isRTL?`'سلفة عيد الفطر – الموعد النهائي للطلبات'`:`'Eid Al-Fitr Advance Payment – Request Deadline'`}, date: ${isRTL?`'10 أبريل 2025'`:`'April 10, 2025'`}, badge: ${isRTL?`'سلفة'`:`'Advance'`}, icon:'fa-star-and-crescent', bg:'badge-amber' },
  { title: ${isRTL?`'تحديث نموذج بدل السكن (المراجعة 3)'`:`'Updated Housing Allowance Form (Rev. 3)'`}, date: ${isRTL?`'8 أبريل 2025'`:`'April 8, 2025'`}, badge: ${isRTL?`'نماذج'`:`'Forms'`}, icon:'fa-file-alt', bg:'badge-blue' },
  { title: ${isRTL?`'سياسة حساب العمل الإضافي الجديدة – تسري من مايو 2025'`:`'New Overtime Calculation Policy – Effective May 2025'`}, date: ${isRTL?`'5 أبريل 2025'`:`'April 5, 2025'`}, badge: ${isRTL?`'سياسة'`:`'Policy'`}, icon:'fa-file-contract', bg:'badge-red' },
];

/* ── State ── */
let tickerItems = [];
let annCards    = [];

function loadData(){
  try { tickerItems = JSON.parse(localStorage.getItem(NEWS_KEY)) || DEFAULT_TICKER.slice(); }
  catch(e){ tickerItems = DEFAULT_TICKER.slice(); }
  try { annCards = JSON.parse(localStorage.getItem(ANN_KEY)) || DEFAULT_ANN.slice(); }
  catch(e){ annCards = DEFAULT_ANN.slice(); }
}

function saveAllNews(){
  localStorage.setItem(NEWS_KEY, JSON.stringify(tickerItems));
  localStorage.setItem(ANN_KEY,  JSON.stringify(annCards));
  showNewsToast(IS_RTL_N?'✅ تم الحفظ! ستظهر التغييرات فور فتح الصفحة الرئيسية':'✅ Saved! Changes appear on the home page immediately.', '#059669');
}

function resetAllNews(){
  if(!confirm(IS_RTL_N?'هل تريد إعادة ضبط كل الأخبار إلى الافتراضي؟':'Reset all news to default?')) return;
  tickerItems = DEFAULT_TICKER.slice();
  annCards    = DEFAULT_ANN.slice();
  renderAll();
  saveAllNews();
}

/* ══ TICKER ══════════════════════════════════════════════════════════════════ */
function renderTicker(){
  const list = document.getElementById('tickerList');
  const badge = document.getElementById('tickerCountBadge');
  const preview = document.getElementById('tickerPreview');
  badge.textContent = tickerItems.length + ' ' + (IS_RTL_N?'خبر':'items');
  preview.textContent = tickerItems.join(' | ') || (IS_RTL_N?'لا توجد أخبار':'No items');
  list.innerHTML = tickerItems.map((item, i) => \`
    <div class="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:bg-gray-50 transition group">
      <span class="w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center flex-shrink-0 text-white" style="background:var(--qu-gold)">\${i+1}</span>
      <p class="flex-1 text-sm text-gray-800 \${IS_RTL_N?'text-right':''}" id="ticker_text_\${i}">\${item}</p>
      <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition">
        <button onclick="editTickerItem(\${i})" class="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500" title="\${IS_RTL_N?'تعديل':'Edit'}"><i class="fas fa-pen text-xs"></i></button>
        <button onclick="moveTickerItem(\${i},-1)" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400" title="\${IS_RTL_N?'أعلى':'Up'}"><i class="fas fa-arrow-up text-xs"></i></button>
        <button onclick="moveTickerItem(\${i},1)" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400" title="\${IS_RTL_N?'أسفل':'Down'}"><i class="fas fa-arrow-down text-xs"></i></button>
        <button onclick="deleteTickerItem(\${i})" class="p-1.5 rounded-lg hover:bg-red-50 text-red-400" title="\${IS_RTL_N?'حذف':'Delete'}"><i class="fas fa-trash text-xs"></i></button>
      </div>
    </div>
  \`).join('');
}

function addTickerItem(){
  const inp = document.getElementById('newTickerInput');
  const val = inp.value.trim();
  if(!val){ showNewsToast(IS_RTL_N?'يرجى كتابة نص الخبر':'Please enter news text','#DC2626'); return; }
  tickerItems.push(val);
  inp.value = '';
  renderTicker();
}

function deleteTickerItem(i){
  tickerItems.splice(i,1);
  renderTicker();
}

function moveTickerItem(i, dir){
  const j = i + dir;
  if(j<0||j>=tickerItems.length) return;
  [tickerItems[i], tickerItems[j]] = [tickerItems[j], tickerItems[i]];
  renderTicker();
}

function editTickerItem(i){
  const el = document.getElementById('ticker_text_'+i);
  const old = tickerItems[i];
  const input = document.createElement('input');
  input.type='text'; input.value=old;
  input.className='flex-1 border border-amber-300 rounded-lg px-3 py-1 text-sm focus:outline-none w-full';
  input.onblur = ()=>{ tickerItems[i]=input.value.trim()||old; renderTicker(); };
  input.onkeydown = (e)=>{ if(e.key==='Enter'){ input.blur(); } if(e.key==='Escape'){ tickerItems[i]=old; renderTicker(); } };
  el.replaceWith(input);
  input.focus(); input.select();
}

/* ══ ANNOUNCEMENT CARDS ══════════════════════════════════════════════════════ */
const BADGE_COLORS = {
  'badge-green':'#059669','badge-amber':'#D97706','badge-blue':'#2563EB',
  'badge-red':'#DC2626','badge-purple':'#7C3AED','badge-cyan':'#0891B2'
};
const BADGE_BG = {
  'badge-green':'#ECFDF5','badge-amber':'#FFFBEB','badge-blue':'#EFF6FF',
  'badge-red':'#FEF2F2','badge-purple':'#EDE9FE','badge-cyan':'#CFFAFE'
};

function renderAnnCards(){
  const list = document.getElementById('annCardsList');
  list.innerHTML = annCards.map((card,i)=> \`
    <div class="flex items-center gap-3 p-4 rounded-xl border border-gray-100 bg-white hover:shadow-sm transition group">
      <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
        <i class="fas \${card.icon} text-sm" style="color:var(--qu-maroon)"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-gray-800 text-sm \${IS_RTL_N?'text-right':''}">\${card.title}</p>
        <p class="text-xs text-gray-400 mt-0.5">\${card.date}</p>
      </div>
      <span class="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
        style="background:\${BADGE_BG[card.bg]||'#EFF6FF'};color:\${BADGE_COLORS[card.bg]||'#2563EB'}">\${card.badge}</span>
      <div class="flex gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition">
        <button onclick="openAnnModal(\${i})" class="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500" title="\${IS_RTL_N?'تعديل':'Edit'}"><i class="fas fa-pen text-xs"></i></button>
        <button onclick="moveAnnCard(\${i},-1)" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400"><i class="fas fa-arrow-up text-xs"></i></button>
        <button onclick="moveAnnCard(\${i},1)" class="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400"><i class="fas fa-arrow-down text-xs"></i></button>
        <button onclick="deleteAnnCard(\${i})" class="p-1.5 rounded-lg hover:bg-red-50 text-red-400"><i class="fas fa-trash text-xs"></i></button>
      </div>
    </div>
  \`).join('') || \`<p class="text-center text-gray-400 py-8">\${IS_RTL_N?'لا توجد إعلانات بعد':'No announcements yet'}</p>\`;
}

function addAnnCard(){
  annCards.push({ title: IS_RTL_N?'إعلان جديد':'New Announcement', date: new Date().toLocaleDateString(IS_RTL_N?'ar-QA':'en-QA'), badge: IS_RTL_N?'جديد':'New', icon:'fa-bell', bg:'badge-blue' });
  renderAnnCards();
  openAnnModal(annCards.length-1);
}

function deleteAnnCard(i){ annCards.splice(i,1); renderAnnCards(); }
function moveAnnCard(i,dir){ const j=i+dir; if(j<0||j>=annCards.length)return; [annCards[i],annCards[j]]=[annCards[j],annCards[i]]; renderAnnCards(); }

function openAnnModal(i){
  const card = annCards[i];
  document.getElementById('editCardIdx').value   = i;
  document.getElementById('editCardTitle').value = card.title;
  document.getElementById('editCardDate').value  = card.date;
  document.getElementById('editCardBadge').value = card.badge;
  document.getElementById('editCardIcon').value  = card.icon;
  document.getElementById('editCardBg').value    = card.bg;
  // highlight selected icon
  document.querySelectorAll('.icon-pick-btn').forEach(btn=>{
    const active = btn.dataset.icon===card.icon;
    btn.style.borderColor = active ? '#8B0C2C' : 'transparent';
    btn.style.background  = active ? '#FFF0F3' : '';
  });
  document.getElementById('annEditModal').classList.remove('hidden');
}

function closeAnnModal(){ document.getElementById('annEditModal').classList.add('hidden'); }

function pickIcon(icon, bg){
  document.getElementById('editCardIcon').value = icon;
  document.getElementById('editCardBg').value   = bg;
  document.querySelectorAll('.icon-pick-btn').forEach(btn=>{
    const active = btn.dataset.icon===icon;
    btn.style.borderColor = active ? '#8B0C2C' : 'transparent';
    btn.style.background  = active ? '#FFF0F3' : '';
  });
}

function saveAnnCard(){
  const i     = parseInt(document.getElementById('editCardIdx').value);
  const title = document.getElementById('editCardTitle').value.trim();
  const date  = document.getElementById('editCardDate').value.trim();
  const badge = document.getElementById('editCardBadge').value.trim();
  const icon  = document.getElementById('editCardIcon').value;
  const bg    = document.getElementById('editCardBg').value;
  if(!title){ showNewsToast(IS_RTL_N?'يرجى إدخال العنوان':'Please enter title','#DC2626'); return; }
  annCards[i] = { title, date, badge, icon, bg };
  closeAnnModal();
  renderAnnCards();
}

/* ══ Toast ══════════════════════════════════════════════════════════════════ */
function showNewsToast(msg, color){
  const el = document.createElement('div');
  el.className = 'fixed top-6 '+(IS_RTL_N?'left-6':'right-6')+' z-[200] px-5 py-3 rounded-2xl shadow-xl text-sm font-bold text-white';
  el.style.background = color||'#059669';
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(), 4000);
}

/* ══ Init ════════════════════════════════════════════════════════════════════ */
function renderAll(){ renderTicker(); renderAnnCards(); }
loadData();
renderAll();
</script>`

  return c.html(layout(pageTitle, content, 'admin-news', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  SLA ADMIN  /sla  (قسم الرواتب – لوحة إدارة الطلبات)
// ─────────────────────────────────────────────────────────────────────────────
app.get('/sla', (c) => {
  const lang = getLang(c)
  const isRTL = lang === 'ar'

  const pageTitle = isRTL ? 'إدارة طلبات الخدمة – SLA' : 'Service Request Management – SLA'

  const content = `
<div dir="${isRTL?'rtl':'ltr'}">

  <!-- Header -->
  <div class="mb-6 flex items-center justify-between flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
    <div class="${isRTL?'text-right':''}">
      <h1 class="text-2xl font-bold text-gray-800">${isRTL?'لوحة إدارة طلبات الخدمة':'Service Request Management'}</h1>
      <p class="text-gray-500 mt-1 text-sm">${isRTL?'متابعة الطلبات وإدارة مستوى الخدمة (SLA) بين الموظفين وقسم الرواتب':'Track requests and manage SLA between employees and Payroll Department'}</p>
    </div>
    <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
      <button onclick="openNewRequestModal()" class="btn-primary px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-plus"></i>${isRTL?'طلب جديد':'New Request'}
      </button>
      <button onclick="openTrackingPanel()" class="px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 text-white ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#4F46E5,#7C3AED)" title="${isRTL?'لوحة متابعة رئيس القسم':'Dept. Head Tracking Panel'}">
        <i class="fas fa-chart-gantt"></i>${isRTL?'لوحة التكليف':'Assignment Panel'}
      </button>
      <button onclick="exportSLA()" class="px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-download"></i>${isRTL?'تصدير':'Export'}
      </button>
    </div>
  </div>

  <!-- بانر إشعار الطلبات الجديدة من بوابة الموظف -->
  <div id="newStaffReqBanner" class="hidden mb-4 rounded-xl px-4 py-3 flex items-center gap-3 justify-between ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#1D4ED8,#2563EB);color:white">
    <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
      <div class="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,0.2)">
        <i class="fas fa-bell text-white text-sm"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <p class="font-bold text-sm">${isRTL?'طلب جديد من بوابة الموظف':'New Request from Staff Portal'} — <span id="newStaffReqCount">1</span> ${isRTL?'طلب':'request(s)'}</p>
        <p class="text-xs text-blue-100 mt-0.5" id="newStaffReqName"></p>
      </div>
    </div>
    <button onclick="document.getElementById('newStaffReqBanner').classList.add('hidden')" class="text-white/70 hover:text-white text-lg flex-shrink-0">×</button>
  </div>

  <!-- مؤشر آخر تحديث -->
  <div class="flex items-center justify-between mb-3 ${isRTL?'flex-row-reverse':''}">
    <div class="flex items-center gap-2 text-xs text-gray-400 ${isRTL?'flex-row-reverse':''}">
      <span class="w-2 h-2 rounded-full bg-green-400 inline-block" style="animation:pulse 2s infinite"></span>
      <span id="syncStatusLabel">${isRTL?'مزامنة تلقائية مع بوابة الموظف':'Auto-syncing with Staff Portal'}</span>
      <span class="text-gray-300">|</span>
      <span id="lastSyncTime">${isRTL?'الآن':'Now'}</span>
    </div>
    <span class="text-xs px-2 py-0.5 rounded-full font-semibold" id="staffReqBadge" style="background:#DBEAFE;color:#1D4ED8;display:none">
      <i class="fas fa-user-circle text-xs"></i> <span id="staffReqBadgeCount">0</span> ${isRTL?'من بوابة الموظف':'from Staff Portal'}
    </span>
  </div>

  <!-- KPI Cards -->
  <div class="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6" id="slaKpiCards">
    ${[
      {id:'kpi_total',icon:'fa-inbox',color:'var(--qu-maroon)',bg:'rgba(139,26,47,0.08)',value:'0',label:isRTL?'إجمالي الطلبات':'Total Requests'},
      {id:'kpi_open',icon:'fa-clock',color:'#F59E0B',bg:'rgba(245,158,11,0.08)',value:'0',label:isRTL?'طلبات مفتوحة':'Open Requests'},
      {id:'kpi_done',icon:'fa-check-circle',color:'#10B981',bg:'rgba(16,185,129,0.08)',value:'0',label:isRTL?'مكتملة':'Completed'},
      {id:'kpi_breach',icon:'fa-exclamation-triangle',color:'#EF4444',bg:'rgba(239,68,68,0.08)',value:'0',label:isRTL?'تجاوزت SLA':'SLA Breached'},
      {id:'kpi_assigned',icon:'fa-share-nodes',color:'#4F46E5',bg:'rgba(79,70,229,0.08)',value:'0',label:isRTL?'مكلَّفة لمختص':'Assigned'},
    ].map(k=>`
    <div class="card p-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
      <div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${k.bg}">
        <i class="fas ${k.icon}" style="color:${k.color}"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <p class="text-xl font-bold text-gray-800" id="${k.id}">${k.value}</p>
        <p class="text-xs text-gray-500">${k.label}</p>
      </div>
    </div>`).join('')}
  </div>

  <!-- Filters -->
  <div class="card p-4 mb-4 flex flex-wrap gap-3 items-center ${isRTL?'flex-row-reverse':''}">
    <input id="slaSearch" type="text" placeholder="${isRTL?'ابحث باسم الموظف أو رقم الطلب...':'Search by employee or request ID...'}"
      class="border border-gray-200 rounded-xl px-4 py-2 text-sm flex-1 min-w-48 focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}" oninput="renderSLATable()"/>
    <select id="slaStatusFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}" onchange="renderSLATable()">
      <option value="">${isRTL?'كل الحالات':'All Statuses'}</option>
      <option value="open">${isRTL?'مفتوح':'Open'}</option>
      <option value="inprogress">${isRTL?'قيد التنفيذ':'In Progress'}</option>
      <option value="done">${isRTL?'مكتمل':'Done'}</option>
      <option value="needs_revision">${isRTL?'يحتاج تعديل':'Needs Revision'}</option>
      <option value="breach">${isRTL?'تجاوز SLA':'SLA Breach'}</option>
    </select>
    <select id="slaTypeFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}" onchange="renderSLATable()">
      <option value="">${isRTL?'كل الخدمات':'All Services'}</option>
      <option value="salary">${isRTL?'استفسار راتب':'Salary Inquiry'}</option>
      <option value="allowance">${isRTL?'طلب بدل':'Allowance Request'}</option>
      <option value="advance">${isRTL?'سلفة':'Advance'}</option>
      <option value="certificate">${isRTL?'شهادة راتب':'Salary Certificate'}</option>
      <option value="eos">${isRTL?'نهاية الخدمة':'End of Service'}</option>
      <option value="scholarship">${isRTL?'طلب ابتعاث':'Scholarship Application'}</option>
      <option value="other">${isRTL?'أخرى':'Other'}</option>
    </select>
    <select id="slaSourceFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}" onchange="renderSLATable()">
      <option value="">${isRTL?'كل المصادر':'All Sources'}</option>
      <option value="staff">${isRTL?'بوابة الموظف':'Staff Portal'}</option>
      <option value="admin">${isRTL?'قسم الرواتب':'Payroll Dept'}</option>
    </select>
    <select id="slaAssignedFilter" class="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none ${isRTL?'text-right':''}" onchange="renderSLATable()">
      <option value="">${isRTL?'كل المكلَّفين':'All Assignees'}</option>
      <option value="unassigned">${isRTL?'غير مكلَّف':'Unassigned'}</option>
      <option value="SP-01">${isRTL?'محمد الغانم':'Mohammed Al-Ghanim'}</option>
      <option value="SP-02">${isRTL?'نورة المناعي':'Noura Al-Mana\'i'}</option>
      <option value="SP-03">${isRTL?'عبدالله القحطاني':'Abdullah Al-Qahtani'}</option>
      <option value="SP-04">${isRTL?'ريم الكواري':'Reem Al-Kawari'}</option>
      <option value="SP-05">${isRTL?'فيصل الدوسري':'Faisal Al-Dosari'}</option>
    </select>
  </div>

  <!-- Requests Table -->
  <div class="card overflow-hidden mb-6">
    <div class="overflow-x-auto">
      <table class="w-full text-sm" id="slaTable">
        <thead>
          <tr class="border-b border-gray-100 bg-gray-50">
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'رقم الطلب':'Req. ID'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'الموظف':'Employee'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'نوع الخدمة':'Service Type'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'تاريخ الطلب':'Submitted'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'الموعد النهائي SLA':'SLA Due'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'الحالة':'Status'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'المُكلَّف':'Assigned To'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wide ${isRTL?'text-right':'text-left'}">${isRTL?'إجراءات':'Actions'}</th>
          </tr>
        </thead>
        <tbody id="slaTableBody">
        </tbody>
      </table>
    </div>
    <div id="slaEmpty" class="hidden py-16 text-center text-gray-400">
      <i class="fas fa-inbox text-4xl mb-3 block opacity-30"></i>
      <p class="text-sm">${isRTL?'لا توجد طلبات حتى الآن':'No requests yet'}</p>
    </div>
  </div>

</div>

<!-- Modal: View/Update Request -->
<div id="slaModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto" dir="${isRTL?'rtl':'ltr'}">
    <div class="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between ${isRTL?'flex-row-reverse':''}">
      <h2 class="font-bold text-gray-800 text-lg" id="modalTitle">${isRTL?'تفاصيل الطلب':'Request Details'}</h2>
      <button onclick="closeSLAModal()" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div class="p-6" id="modalBody"></div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     Modal: Transfer / Assign Request — Department Head Control
═══════════════════════════════════════════════════════════════ -->
<div id="transferModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.55);backdrop-filter:blur(4px)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col" style="max-height:92vh" dir="${isRTL?'rtl':'ltr'}">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#4F46E5,#7C3AED)">
      <div class="${isRTL?'text-right':''}">
        <h2 class="font-bold text-white text-lg flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-share-nodes"></i>
          ${isRTL?'تحويل الطلب لموظف مختص':'Assign Request to Specialist'}
        </h2>
        <p class="text-indigo-200 text-xs mt-0.5" id="transferReqLabel">${isRTL?'اختر الموظف المناسب للطلب':'Select the most suitable specialist'}</p>
      </div>
      <button onclick="closeTransferModal()" class="text-white/70 hover:text-white text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/20 transition">×</button>
    </div>

    <!-- Body -->
    <div class="flex-1 overflow-y-auto p-6 space-y-5">

      <!-- Staff Cards Grid -->
      <div>
        <p class="text-sm font-bold text-gray-700 mb-3 ${isRTL?'text-right':''}">${isRTL?'اختر الموظف المختص:':'Select Specialist:'}</p>
        <div id="transferStaffGrid" class="grid grid-cols-1 gap-3 sm:grid-cols-2"></div>
      </div>

      <!-- Note / Reason -->
      <div>
        <label class="block text-sm font-bold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'ملاحظة التحويل (اختياري):':'Transfer Note (optional):'}</label>
        <textarea id="transferNote" rows="3" placeholder="${isRTL?'أضف تعليمات أو سبب التحويل...':'Add instructions or reason for transfer...'}"
          class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none ${isRTL?'text-right':''}"></textarea>
      </div>

      <!-- Transfer History (if any) -->
      <div id="transferHistoryBox" class="hidden">
        <p class="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2 ${isRTL?'flex-row-reverse text-right':''}">
          <i class="fas fa-history text-indigo-400"></i>
          ${isRTL?'سجل التحويلات السابقة:':'Previous Transfer History:'}
        </p>
        <div id="transferHistoryList" class="space-y-2 max-h-40 overflow-y-auto"></div>
      </div>

    </div>

    <!-- Footer Actions -->
    <div class="px-6 py-4 border-t border-gray-100 flex gap-3 ${isRTL?'flex-row-reverse':''}">
      <button onclick="confirmTransfer()" id="transferConfirmBtn"
        class="flex-1 py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 transition disabled:opacity-50"
        style="background:linear-gradient(135deg,#4F46E5,#7C3AED)" disabled>
        <i class="fas fa-share-nodes"></i>
        ${isRTL?'تأكيد التحويل':'Confirm Transfer'}
      </button>
      <button onclick="closeTransferModal()" class="px-6 py-2.5 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:bg-gray-50 transition">
        ${isRTL?'إلغاء':'Cancel'}
      </button>
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     Panel: Department Head Tracking — Slide-over from right
═══════════════════════════════════════════════════════════════ -->
<div id="trackingPanel" class="hidden fixed inset-0 z-50 flex ${isRTL?'justify-start':'justify-end'}" style="background:rgba(0,0,0,0.45);backdrop-filter:blur(3px)">
  <div class="bg-white w-full max-w-3xl flex flex-col shadow-2xl" dir="${isRTL?'rtl':'ltr'}" style="max-height:100vh">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#312E81,#4F46E5)">
      <div class="${isRTL?'text-right':''}">
        <h2 class="font-bold text-white text-lg flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
          <i class="fas fa-chart-gantt"></i>
          ${isRTL?'لوحة متابعة رئيس القسم':'Department Head Tracking Panel'}
        </h2>
        <p class="text-indigo-200 text-xs mt-0.5">${isRTL?'إدارة تكليف الطلبات ومتابعة أداء الفريق':'Manage request assignments and track team performance'}</p>
      </div>
      <button onclick="closeTrackingPanel()" class="text-white/70 hover:text-white text-2xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/20 transition">×</button>
    </div>

    <!-- Quick Stats Bar -->
    <div class="px-6 py-3 flex items-center gap-4 flex-wrap border-b border-gray-100 ${isRTL?'flex-row-reverse':''}" style="background:#F8F7FF">
      <div class="flex items-center gap-1.5 text-xs">
        <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#4F46E5"></span>
        <span class="text-gray-500">${isRTL?'إجمالي الموظفين:':'Total Staff:'}</span>
        <span class="font-bold text-gray-800">5</span>
      </div>
      <div class="flex items-center gap-1.5 text-xs">
        <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#F59E0B"></span>
        <span class="text-gray-500" id="tp_openCount">${isRTL?'مفتوحة:':'Open:'}</span>
        <span class="font-bold text-amber-600" id="tp_openVal">—</span>
      </div>
      <div class="flex items-center gap-1.5 text-xs">
        <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#10B981"></span>
        <span class="text-gray-500">${isRTL?'مكتملة:':'Done:'}</span>
        <span class="font-bold text-green-600" id="tp_doneVal">—</span>
      </div>
      <div class="flex items-center gap-1.5 text-xs">
        <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:#EF4444"></span>
        <span class="text-gray-500">${isRTL?'خرق SLA:':'SLA Breach:'}</span>
        <span class="font-bold text-red-600" id="tp_breachVal">—</span>
      </div>
      <button onclick="openTrackingPanel()" class="ms-auto text-xs text-indigo-500 hover:text-indigo-700 flex items-center gap-1 transition">
        <i class="fas fa-rotate-right"></i>${isRTL?'تحديث':'Refresh'}
      </button>
    </div>

    <!-- Body: Staff Cards + Assigned Requests -->
    <div class="flex-1 overflow-y-auto p-5" id="trackingBody">
      <!-- populated by openTrackingPanel() JS -->
    </div>
  </div>
</div>

<!-- ═══════════════════════════════════════════════════════════════
     Modal: New Request — Wizard (3 Steps)
═══════════════════════════════════════════════════════════════ -->
<div id="newReqModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.55);backdrop-filter:blur(4px)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col" style="max-height:92vh" dir="${isRTL?'rtl':'ltr'}">

    <!-- ── Header ── -->
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between ${isRTL?'flex-row-reverse':''}">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:rgba(139,26,47,0.1)">
          <i class="fas fa-plus-circle" style="color:var(--qu-maroon)"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <h2 class="font-bold text-gray-800 text-base leading-tight">${isRTL?'إنشاء طلب خدمة جديد':'Create New Service Request'}</h2>
          <p class="text-xs text-gray-400" id="nrStepLabel">${isRTL?'الخطوة 1 من 3 – بيانات الموظف':'Step 1 of 3 – Employee Info'}</p>
        </div>
      </div>
      <button onclick="closeNewReqModal()" class="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition text-lg font-bold">×</button>
    </div>

    <!-- ── Progress Bar ── -->
    <div class="px-6 pt-4 pb-2">
      <div class="flex items-center gap-2 mb-3 ${isRTL?'flex-row-reverse':''}">
        ${[1,2,3].map(s=>`
        <div class="flex items-center gap-2 flex-1 ${isRTL&&s<3?'flex-row-reverse':''}">
          <div id="nrStep${s}Circle" class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 transition-all duration-300 ${s===1?'text-white':'bg-gray-100 text-gray-400'}" style="${s===1?'background:var(--qu-maroon)':''}">
            <span id="nrStep${s}Icon">${s}</span>
          </div>
          <div class="flex-1 ${isRTL?'text-right':''}">
            <p class="text-xs font-semibold ${s===1?'text-gray-800':'text-gray-400'}" id="nrStep${s}Label">
              ${s===1?(isRTL?'بيانات الموظف':'Employee Info'):s===2?(isRTL?'نوع الخدمة':'Service Type'):(isRTL?'التفاصيل والتأكيد':'Details & Confirm')}
            </p>
          </div>
          ${s<3?`<div class="w-8 h-0.5 flex-shrink-0 transition-all duration-300 ${isRTL?'order-first':''}" id="nrLine${s}" style="background:#E5E7EB"></div>`:''}
        </div>`).join('')}
      </div>
    </div>

    <!-- ── Body (scrollable) ── -->
    <div class="flex-1 overflow-y-auto px-6 pb-2">

      <!-- ──────────────── STEP 1: Employee Info ──────────────── -->
      <div id="nrPane1">
        <!-- Guide Banner -->
        <div class="rounded-xl p-4 mb-5 flex gap-3 ${isRTL?'flex-row-reverse':''}" style="background:rgba(196,146,42,0.07);border:1px solid rgba(196,146,42,0.25)">
          <i class="fas fa-info-circle flex-shrink-0 mt-0.5" style="color:var(--qu-gold)"></i>
          <div class="${isRTL?'text-right':''}">
            <p class="text-sm font-bold text-gray-800 mb-1">${isRTL?'كيفية تقديم الطلب':'How to Submit a Request'}</p>
            <ul class="text-xs text-gray-600 space-y-1 ${isRTL?'list-none':'list-disc list-inside'}">
              <li>${isRTL?'▸ أدخل بيانات الموظف الذي يحتاج الخدمة':'▸ Enter the details of the employee who needs the service'}</li>
              <li>${isRTL?'▸ اختر نوع الخدمة من القائمة في الخطوة التالية':'▸ Choose the service type in the next step'}</li>
              <li>${isRTL?'▸ أضف وصفاً واضحاً للطلب حتى يُعالَج بسرعة':'▸ Add a clear description for faster processing'}</li>
              <li>${isRTL?'▸ سيتم تحديد موعد SLA تلقائياً حسب نوع الخدمة':'▸ SLA deadline will be set automatically based on service type'}</li>
            </ul>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">
              <i class="fas fa-user text-xs ${isRTL?'ml-1':'mr-1'}" style="color:var(--qu-maroon)"></i>
              ${isRTL?'اسم الموظف الكامل':'Full Employee Name'} <span class="text-red-500">*</span>
            </label>
            <input id="nr_emp" type="text" placeholder="${isRTL?'مثال: محمد أحمد العلي':'e.g. Mohammed Al-Ali'}"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition ${isRTL?'text-right':''}">
            <p class="text-xs text-gray-400 mt-1 ${isRTL?'text-right':''}">${isRTL?'الاسم كما هو في السجل الرسمي':'Name as in official records'}</p>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">
              <i class="fas fa-id-badge text-xs ${isRTL?'ml-1':'mr-1'}" style="color:var(--qu-maroon)"></i>
              ${isRTL?'رقم الموظف':'Employee ID'} <span class="text-red-500">*</span>
            </label>
            <input id="nr_id" type="text" placeholder="${isRTL?'مثال: QU-12345':'e.g. QU-12345'}"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition ${isRTL?'text-right':''}">
            <p class="text-xs text-gray-400 mt-1 ${isRTL?'text-right':''}">${isRTL?'يبدأ بـ QU- متبوعاً بالأرقام':'Starts with QU- followed by numbers'}</p>
          </div>
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">
              <i class="fas fa-envelope text-xs ${isRTL?'ml-1':'mr-1'}" style="color:var(--qu-maroon)"></i>
              ${isRTL?'البريد الإلكتروني (اختياري)':'Email (Optional)'}
            </label>
            <input id="nr_email" type="email" placeholder="${isRTL?'employee@qu.edu.qa':'employee@qu.edu.qa'}"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 transition ${isRTL?'text-right':''}">
          </div>
        </div>
      </div>

      <!-- ──────────────── STEP 2: Service Type ──────────────── -->
      <div id="nrPane2" class="hidden">
        <p class="text-sm text-gray-500 mb-4 ${isRTL?'text-right':''}">${isRTL?'اختر نوع الخدمة المطلوبة. سيظهر وقت SLA المتوقع فور اختيارك.':'Select the required service. The SLA timeline will appear once you choose.'}</p>

        <!-- Service Cards -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5" id="serviceCards">
          ${[
            {val:'salary',     icon:'fa-coins',                color:'#8B1A2F', bg:'rgba(139,26,47,0.08)', sla:2, label:isRTL?'استفسار راتب':'Salary Inquiry',        desc:isRTL?'استفسارات عن الراتب أو الاستقطاعات':'Salary or deduction queries'},
            {val:'certificate',icon:'fa-certificate',          color:'#1D4ED8', bg:'rgba(29,78,216,0.08)', sla:1, label:isRTL?'شهادة راتب':'Salary Certificate',     desc:isRTL?'إصدار شهادة راتب رسمية':'Issue an official salary certificate'},
            {val:'allowance',  icon:'fa-hand-holding-usd',     color:'#C4922A', bg:'rgba(196,146,42,0.08)',sla:3, label:isRTL?'طلب بدل':'Allowance Request',         desc:isRTL?'بدل سكن أو مواصلات أو غيره':'Housing, transport or other allowances'},
            {val:'advance',    icon:'fa-money-bill-wave',      color:'#059669', bg:'rgba(5,150,105,0.08)', sla:1, label:isRTL?'سلفة راتب':'Salary Advance',          desc:isRTL?'طلب سلفة على الراتب':'Request an advance on salary'},
            {val:'eos',        icon:'fa-person-walking-arrow-right',color:'#7C3AED',bg:'rgba(124,58,237,0.08)',sla:5,label:isRTL?'نهاية الخدمة':'End of Service',   desc:isRTL?'حساب وإجراءات نهاية الخدمة':'EOS calculations and procedures'},
            {val:'other',      icon:'fa-ellipsis-h',           color:'#6B7280', bg:'rgba(107,114,128,0.08)',sla:3, label:isRTL?'أخرى':'Other',                       desc:isRTL?'أي طلب آخر غير مذكور':'Any other request not listed'},
          ].map(s=>`
          <button type="button" onclick="selectService('${s.val}')" id="svc_${s.val}"
            class="svc-card border-2 border-gray-200 rounded-xl p-3 text-center transition-all duration-200 hover:border-red-300 hover:shadow-md focus:outline-none group ${isRTL?'text-right':''}">
            <div class="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 transition" style="background:${s.bg}">
              <i class="fas ${s.icon}" style="color:${s.color}"></i>
            </div>
            <p class="text-xs font-bold text-gray-800 group-hover:text-red-700 transition leading-tight">${s.label}</p>
            <p class="text-xs text-gray-400 mt-0.5 leading-tight hidden sm:block">${s.desc}</p>
            <div class="mt-2 text-xs font-bold rounded-full px-2 py-0.5 inline-block" style="background:rgba(196,146,42,0.12);color:var(--qu-gold)">
              SLA: ${s.sla} ${isRTL?'أيام':'days'}
            </div>
          </button>`).join('')}
        </div>

        <!-- SLA explanation card (shown after selection) -->
        <div id="slaExplainCard" class="hidden rounded-xl p-4" style="background:#F0FDF4;border:1px solid #86EFAC">
          <div class="flex items-start gap-3 ${isRTL?'flex-row-reverse':''}">
            <div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style="background:#DCFCE7">
              <i class="fas fa-clock" style="color:#16A34A"></i>
            </div>
            <div class="flex-1 ${isRTL?'text-right':''}">
              <p class="text-sm font-bold text-gray-800" id="slaExpTitle"></p>
              <p class="text-xs text-gray-600 mt-0.5" id="slaExpSub"></p>
              <div class="mt-2 flex flex-wrap gap-2" id="slaExpSteps"></div>
            </div>
          </div>
        </div>

        <input type="hidden" id="nr_type" value="">
      </div>

      <!-- ──────────────── STEP 3: Details & Confirm ──────────────── -->
      <div id="nrPane3" class="hidden">

        <!-- Summary card -->
        <div class="rounded-xl p-4 mb-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}" style="background:rgba(139,26,47,0.05);border:1px solid rgba(139,26,47,0.15)">
          <i class="fas fa-clipboard-check flex-shrink-0" style="color:var(--qu-maroon)"></i>
          <div class="${isRTL?'text-right':''}">
            <p class="text-xs text-gray-500 font-semibold">${isRTL?'ملخص الطلب حتى الآن:':'Request Summary So Far:'}</p>
            <p class="text-sm font-bold text-gray-800" id="nrSummaryLine"></p>
          </div>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">
              <i class="fas fa-align-right text-xs ${isRTL?'ml-1':'mr-1'}" style="color:var(--qu-maroon)"></i>
              ${isRTL?'وصف تفصيلي للطلب':'Detailed Request Description'} <span class="text-red-500">*</span>
            </label>
            <textarea id="nr_desc" rows="4" dir="${isRTL?'rtl':'ltr'}"
              placeholder="${isRTL?'اشرح طلبك بالتفصيل (السبب، الفترة الزمنية، أي معلومات إضافية)...':'Explain your request in detail (reason, time period, any additional info)...'}"
              class="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-300 focus:ring-2 focus:ring-red-50 resize-none transition ${isRTL?'text-right':''}"></textarea>
            <p class="text-xs text-gray-400 mt-1 ${isRTL?'text-right':''}">${isRTL?'💡 كلما كان الوصف أوضح، كلما تم معالجة الطلب أسرع':'💡 The clearer the description, the faster the request will be processed'}</p>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2 ${isRTL?'text-right':''}">
              <i class="fas fa-flag text-xs ${isRTL?'ml-1':'mr-1'}" style="color:var(--qu-maroon)"></i>
              ${isRTL?'مستوى الأولوية':'Priority Level'}
            </label>
            <div class="grid grid-cols-3 gap-3">
              ${[
                {val:'normal', icon:'fa-minus-circle', color:'#6B7280', bg:'#F3F4F6', label:isRTL?'عادية':'Normal', desc:isRTL?'معالجة ضمن SLA المعتاد':'Processed within normal SLA'},
                {val:'high',   icon:'fa-exclamation-circle', color:'#D97706', bg:'#FEF3C7', label:isRTL?'عالية':'High', desc:isRTL?'تحتاج معالجة أسرع':'Needs faster processing'},
                {val:'urgent', icon:'fa-fire', color:'#DC2626', bg:'#FEE2E2', label:isRTL?'عاجلة':'Urgent', desc:isRTL?'طارئ ويحتاج فورية':'Emergency, needs immediate action'},
              ].map(p=>`
              <label class="cursor-pointer">
                <input type="radio" name="nr_priority" value="${p.val}" ${p.val==='normal'?'checked':''} class="sr-only peer"/>
                <div class="peer-checked:border-red-700 peer-checked:shadow-md border-2 border-gray-200 rounded-xl p-3 text-center transition-all hover:border-gray-300 group">
                  <div class="w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-1.5" style="background:${p.bg}">
                    <i class="fas ${p.icon} text-sm" style="color:${p.color}"></i>
                  </div>
                  <p class="text-xs font-bold text-gray-800">${p.label}</p>
                  <p class="text-xs text-gray-400 mt-0.5 leading-tight">${p.desc}</p>
                </div>
              </label>`).join('')}
            </div>
          </div>

          <!-- What happens next -->
          <div class="rounded-xl p-4" style="background:#EFF6FF;border:1px solid #BFDBFE">
            <p class="text-xs font-bold text-blue-800 mb-2 ${isRTL?'text-right':''}">${isRTL?'ماذا يحدث بعد إرسال الطلب؟':'What happens after submission?'}</p>
            <div class="space-y-1.5">
              ${[
                {icon:'fa-check-circle', color:'#16A34A', text:isRTL?'يتم تسجيل الطلب فوراً ويُعطى رقم مرجعي':'Request is registered instantly with a reference number'},
                {icon:'fa-file-invoice', color:'#C4922A', text:isRTL?'تصدر فاتورة إلكترونية بتفاصيل الخدمة ووقت الإنجاز المتوقع':'An e-invoice is issued with service details and expected completion time'},
                {icon:'fa-comment-dots', color:'#2563EB', text:isRTL?'يمكن التواصل المباشر مع الموظف عبر الدردشة':'Direct chat with the employee is available'},
                {icon:'fa-bell', color:'#8B1A2F', text:isRTL?'يتابع الفريق الطلب ويحدّث حالته حتى الإتمام':'The team follows up and updates the status until completion'},
              ].map(s=>`
              <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse text-right':''}">
                <i class="fas ${s.icon} text-xs flex-shrink-0" style="color:${s.color}"></i>
                <p class="text-xs text-blue-700">${s.text}</p>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ── Footer / Navigation ── -->
    <div class="px-6 py-4 border-t border-gray-100 flex items-center justify-between gap-3 ${isRTL?'flex-row-reverse':''}">
      <button id="nrBtnBack" onclick="nrPrev()" class="hidden px-5 py-2.5 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-600 hover:bg-gray-50 transition flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-chevron-${isRTL?'right':'left'} text-xs"></i>${isRTL?'السابق':'Back'}
      </button>
      <div class="flex-1"></div>
      <button onclick="closeNewReqModal()" class="px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-500 hover:bg-gray-100 transition">${isRTL?'إلغاء':'Cancel'}</button>
      <button id="nrBtnNext" onclick="nrNext()" class="btn-primary px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        ${isRTL?'التالي':'Next'}<i class="fas fa-chevron-${isRTL?'left':'right'} text-xs" id="nrBtnNextIcon"></i>
      </button>
    </div>

  </div>
</div>

<style>
  .svc-card.selected{border-color:var(--qu-maroon)!important;background:rgba(139,26,47,0.04);box-shadow:0 0 0 3px rgba(139,26,47,0.12)}
  .svc-card.selected p{color:var(--qu-maroon)}
  #nrPane1,#nrPane2,#nrPane3{animation:nrFade 0.25s ease}
  @keyframes nrFade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
</style>

<!-- Invoice Modal -->
<div id="invoiceModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto">
    <div class="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <h2 class="font-bold text-gray-800 text-lg">${isRTL?'الفاتورة الإلكترونية':'Electronic Invoice'}</h2>
      <div class="flex gap-2">
        <button onclick="printInvoice()" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"><i class="fas fa-print"></i>${isRTL?'طباعة':'Print'}</button>
        <button onclick="document.getElementById('invoiceModal').classList.add('hidden')" class="text-gray-400 hover:text-gray-600 text-xl px-2">×</button>
      </div>
    </div>
    <div id="invoiceContent" class="p-8"></div>
  </div>
</div>

<!-- Return Request Modal -->
<div id="returnModal" class="hidden fixed inset-0 z-[60] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.55);backdrop-filter:blur(4px)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md" dir="${isRTL?'rtl':'ltr'}">
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-9 h-9 rounded-xl flex items-center justify-center" style="background:#FFEDD5">
          <i class="fas fa-undo text-sm" style="color:#C2410C"></i>
        </div>
        <h2 class="font-bold text-gray-800">${isRTL?'إرجاع الطلب للموظف':'Return Request to Employee'}</h2>
      </div>
      <button onclick="closeReturnModal()" class="text-gray-400 hover:text-gray-600 text-xl">×</button>
    </div>
    <div class="p-6 space-y-4">
      <div class="rounded-xl p-3 ${isRTL?'text-right':''}" style="background:#FFF7ED;border:1px solid #FED7AA">
        <p class="text-sm font-semibold text-orange-800 ${isRTL?'text-right':''}"><i class="fas fa-info-circle mr-1"></i>${isRTL?'سيتم إشعار الموظف بسبب الإرجاع ويمكنه إعادة تقديم الطلب بعد التعديل.':'The employee will be notified of the return reason and can resubmit after revision.'}</p>
      </div>
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 ${isRTL?'text-right':''}">${isRTL?'سبب الإرجاع *':'Return Reason *'}</label>
        <select id="returnReasonSelect" onchange="toggleCustomReason()" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 mb-2 ${isRTL?'text-right':''}">
          <option value="">${isRTL?'-- اختر السبب --':'-- Select Reason --'}</option>
          <option value="${isRTL?'المستندات المطلوبة غير مكتملة':'Required documents are incomplete'}">${isRTL?'المستندات غير مكتملة':'Incomplete documents'}</option>
          <option value="${isRTL?'البيانات المدخلة غير صحيحة':'Entered information is incorrect'}">${isRTL?'بيانات غير صحيحة':'Incorrect information'}</option>
          <option value="${isRTL?'يرجى تحديد المبلغ المطلوب بدقة':'Please specify the required amount precisely'}">${isRTL?'المبلغ غير محدد':'Amount not specified'}</option>
          <option value="${isRTL?'النموذج المرفق غير مكتمل أو غير موقّع':'Attached form is incomplete or unsigned'}">${isRTL?'النموذج غير مكتمل':'Incomplete form'}</option>
          <option value="custom">${isRTL?'سبب آخر (اكتب يدوياً)':'Other reason (type manually)'}</option>
        </select>
        <textarea id="returnReasonCustom" rows="3" placeholder="${isRTL?'اكتب سبب الإرجاع بالتفصيل...':'Write the return reason in detail...'}"
          class="hidden w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 resize-none ${isRTL?'text-right':''}"></textarea>
      </div>
      <input type="hidden" id="returnReqId"/>
      <div class="flex gap-3 pt-2 ${isRTL?'flex-row-reverse':''}">
        <button onclick="confirmReturn()" class="flex-1 py-2.5 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2" style="background:#C2410C">
          <i class="fas fa-undo"></i>${isRTL?'إرجاع الطلب':'Return Request'}
        </button>
        <button onclick="closeReturnModal()" class="flex-1 py-2.5 rounded-xl text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">${isRTL?'إلغاء':'Cancel'}</button>
      </div>
    </div>
  </div>
</div>

<!-- Email Modal -->
<div id="emailModal" class="hidden fixed inset-0 z-[70] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.55);backdrop-filter:blur(4px)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto" dir="${isRTL?'rtl':'ltr'}">
    <div class="sticky top-0 px-6 py-4 border-b border-gray-100 flex items-center justify-between rounded-t-2xl" style="background:linear-gradient(135deg,#8B0C2C 0%,#6B0A22 100%)">
      <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse':''}">
        <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
          <i class="fas fa-envelope text-white text-lg"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <h2 class="font-bold text-white text-lg">${isRTL?'إرسال إيميل للموظف':'Send Email to Employee'}</h2>
          <p class="text-white/70 text-xs" id="emailModalSubtitle">${isRTL?'بوابة خدمات الرواتب – جامعة قطر':'Payroll Portal – Qatar University'}</p>
        </div>
      </div>
      <button onclick="closeEmailModal()" class="text-white/70 hover:text-white text-2xl transition leading-none">×</button>
    </div>
    <div class="p-6 space-y-5">
      <!-- To Field -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'إلى (البريد الإلكتروني للموظف)':'To (Employee Email)'} <span class="text-red-500">*</span></label>
        <div class="flex items-center gap-2 flex-wrap">
          <div class="flex items-center border border-gray-200 rounded-xl px-4 py-2.5 bg-gray-50 flex-1 min-w-40">
            <i class="fas fa-user-circle text-gray-400 ${isRTL?'ml-2':'mr-2'}"></i>
            <div>
              <p class="text-xs text-gray-400 font-semibold uppercase">${isRTL?'الموظف':'Employee'}</p>
              <p class="text-sm font-semibold text-gray-800" id="emailToName"></p>
            </div>
          </div>
          <div class="flex-1 relative min-w-48">
            <i class="fas fa-envelope absolute ${isRTL?'right-3':'left-3'} top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none"></i>
            <input id="emailToAddr" type="email" placeholder="${isRTL?'البريد الإلكتروني':'Email address'}"
              class="w-full border border-gray-200 rounded-xl ${isRTL?'pr-9 pl-4 text-right':'pl-9 pr-4'} py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200"/>
          </div>
        </div>
      </div>
      <!-- Request Reference -->
      <div class="rounded-xl p-3 flex gap-3 items-center ${isRTL?'flex-row-reverse':''}" style="background:#F8FAFC;border:1px solid #E2E8F0">
        <i class="fas fa-hashtag text-gray-400 flex-shrink-0"></i>
        <p class="text-xs text-gray-600 ${isRTL?'text-right':''}">${isRTL?'مرجع الطلب:':'Request Ref:'} <span id="emailReqRef" class="font-mono font-bold text-gray-800"></span></p>
      </div>
      <!-- Template Selector -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 ${isRTL?'text-right':''}">${isRTL?'اختر قالب الرسالة':'Choose Message Template'}</label>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2" id="emailTemplateGrid"></div>
      </div>
      <!-- Subject -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'الموضوع':'Subject'} <span class="text-red-500">*</span></label>
        <input id="emailSubject" type="text" placeholder="${isRTL?'موضوع الرسالة...':'Email subject...'}"
          class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 ${isRTL?'text-right':''}"/>
      </div>
      <!-- Body -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'نص الرسالة':'Message Body'} <span class="text-red-500">*</span></label>
        <textarea id="emailBody" rows="8" placeholder="${isRTL?'اكتب نص الرسالة هنا...':'Write your message here...'}"
          class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-purple-200 resize-none ${isRTL?'text-right':''}"></textarea>
        <p class="text-xs text-gray-400 mt-1 ${isRTL?'text-right':''}">${isRTL?'يمكنك تعديل النص بعد اختيار القالب':'You can edit the text after selecting a template'}</p>
      </div>
      <!-- Priority -->
      <div>
        <label class="block text-sm font-semibold text-gray-700 mb-2 ${isRTL?'text-right':''}">${isRTL?'أهمية الرسالة':'Message Priority'}</label>
        <div class="flex gap-4 ${isRTL?'flex-row-reverse justify-end':''}">
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="emailPriority" value="normal" checked class="accent-purple-600"/>
            <span class="text-sm text-gray-700">${isRTL?'عادية':'Normal'}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="emailPriority" value="high" class="accent-orange-500"/>
            <span class="text-sm text-gray-700">${isRTL?'عالية':'High'}</span>
          </label>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="emailPriority" value="urgent" class="accent-red-600"/>
            <span class="text-sm text-gray-700">${isRTL?'عاجلة':'Urgent'}</span>
          </label>
        </div>
      </div>
      <!-- Info banner -->
      <div class="rounded-xl p-3 flex gap-3 items-start ${isRTL?'flex-row-reverse':''}" style="background:#F0F4FF;border:1px solid #C7D7F9">
        <i class="fas fa-info-circle mt-0.5 flex-shrink-0" style="color:#2563EB"></i>
        <p class="text-xs text-blue-800 ${isRTL?'text-right':''}">${isRTL?'سيفتح Outlook تلقائياً بالرسالة جاهزة. سيتم أيضاً تسجيل الإيميل في سجل الطلب.':'Outlook will open automatically with the message ready to send. The email will also be logged in the request history.'}</p>
      </div>
      <!-- Actions -->
      <div class="flex gap-3 pt-2 flex-wrap ${isRTL?'flex-row-reverse':''}">
        <!-- Outlook primary button -->
        <button onclick="sendViaOutlook()" class="flex-1 py-3 rounded-xl text-sm font-bold text-white flex items-center justify-center gap-2 min-w-40 transition hover:opacity-90" style="background:#0078D4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="Outlook" style="width:18px;height:18px;filter:brightness(10)" onerror="this.style.display='none'">
          <span>${isRTL?'فتح في Outlook':'Open in Outlook'}</span>
        </button>
        <button onclick="previewEmail()" class="flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 min-w-32 transition hover:bg-purple-100" style="border:1px solid #7C3AED;color:#7C3AED;background:#F5F3FF">
          <i class="fas fa-eye"></i>${isRTL?'معاينة':'Preview'}
        </button>
        <button onclick="closeEmailModal()" class="flex-1 py-3 rounded-xl text-sm font-bold border border-gray-200 text-gray-600 hover:bg-gray-50 min-w-28">${isRTL?'إلغاء':'Cancel'}</button>
      </div>
    </div>
  </div>
</div>

<!-- Email Preview Modal -->
<div id="emailPreviewModal" class="hidden fixed inset-0 z-[80] flex items-center justify-center p-4" style="background:rgba(0,0,0,0.6)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[85vh] overflow-y-auto">
    <div class="px-6 py-4 border-b flex items-center justify-between">
      <h3 class="font-bold text-gray-800">${isRTL?'معاينة الإيميل':'Email Preview'}</h3>
      <div class="flex gap-2">
        <button onclick="document.getElementById('emailPreviewModal').classList.add('hidden')" class="px-4 py-1.5 rounded-lg text-xs font-bold border border-gray-200 text-gray-600 hover:bg-gray-50">${isRTL?'تعديل':'Edit'}</button>
        <button onclick="document.getElementById('emailPreviewModal').classList.add('hidden');sendViaOutlook(true)" class="px-4 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5" style="background:#0078D4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg" alt="" style="width:14px;height:14px;filter:brightness(10)" onerror="this.style.display='none'">
          ${isRTL?'فتح في Outlook':'Open in Outlook'}
        </button>
      </div>
    </div>
    <div id="emailPreviewContent" class="p-6"></div>
  </div>
</div>

<!-- Chat Panel -->
<div id="chatPanel" class="hidden fixed bottom-0 ${isRTL?'left-0':'right-0'} w-full md:w-96 z-50 flex flex-col shadow-2xl" style="height:480px;${isRTL?'left:0':'right:0'}">
  <div class="topbar px-4 py-3 flex items-center justify-between ${isRTL?'flex-row-reverse':''}">
    <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
      <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i class="fas fa-comment-dots text-white text-sm"></i></div>
      <div class="${isRTL?'text-right':''}">
        <p class="text-white font-bold text-sm" id="chatEmpName">${isRTL?'دردشة مباشرة':'Live Chat'}</p>
        <p class="text-white/60 text-xs">${isRTL?'قسم الرواتب':'Payroll Dept'}</p>
      </div>
    </div>
    <button onclick="toggleChat()" class="text-white/70 hover:text-white"><i class="fas fa-times"></i></button>
  </div>
  <div class="flex-1 bg-gray-50 overflow-y-auto p-3 space-y-2" id="chatMessages"></div>
  <div class="bg-white border-t border-gray-200 p-3 flex gap-2 ${isRTL?'flex-row-reverse':''}">
    <input id="chatInput" type="text" placeholder="${isRTL?'اكتب رسالة...':'Type a message...'}"
      class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}"
      onkeydown="if(event.key==='Enter')sendAdminMsg()"/>
    <button onclick="sendAdminMsg()" class="btn-primary px-3 py-2 rounded-xl text-sm"><i class="fas fa-paper-plane"></i></button>
  </div>
</div>

<!-- Chat toggle button (floating) -->
<button id="chatToggleBtn" onclick="toggleChatPanel()" class="hidden fixed bottom-20 ${isRTL?'left-6':'right-6'} z-40 w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-white" style="background:var(--qu-maroon)">
  <i class="fas fa-comments"></i>
  <span id="chatBadge" class="hidden absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">!</span>
</button>

<style>
  .badge-open{background:#FEF3C7;color:#92400E}
  .badge-inprogress{background:#DBEAFE;color:#1E40AF}
  .badge-done{background:#D1FAE5;color:#065F46}
  .badge-breach{background:#FEE2E2;color:#991B1B}
  .badge-needs_revision{background:#FFEDD5;color:#C2410C;border:1px solid #FB923C}
  .priority-urgent{background:#FEE2E2;color:#991B1B}
  .priority-high{background:#FEF3C7;color:#92400E}
  .priority-normal{background:#F3F4F6;color:#374151}
  .chat-bubble-admin{background:var(--qu-maroon);color:white;border-radius:12px 12px 4px 12px;max-width:80%;padding:8px 12px;font-size:13px;${isRTL?'margin-right:auto':'margin-left:auto'};align-self:flex-end}
  .chat-bubble-emp{background:white;color:#374151;border:1px solid #E5E7EB;border-radius:12px 12px 12px 4px;max-width:80%;padding:8px 12px;font-size:13px;}
  .chat-time{font-size:10px;color:#9CA3AF;margin-top:2px}
  @media print{
    body *{visibility:hidden!important}
    #invoiceContent,#invoiceContent *{visibility:visible!important}
    #invoiceContent{position:fixed;top:0;left:0;width:100%;background:white}
  }
</style>

<script>
// ─── SLA Data Store (localStorage) ───
const SLA_KEY = 'sla_requests';
const CHAT_KEY = 'sla_chats';
const LANG = '${lang}';
const IS_RTL = ${isRTL};

const SERVICE_LABELS = {
  salary:      IS_RTL?'استفسار راتب':'Salary Inquiry',
  allowance:   IS_RTL?'طلب بدل':'Allowance Request',
  advance:     IS_RTL?'سلفة':'Advance',
  certificate: IS_RTL?'شهادة راتب':'Salary Certificate',
  eos:         IS_RTL?'نهاية الخدمة':'End of Service',
  scholarship: IS_RTL?'طلب ابتعاث':'Scholarship Application',
  other:       IS_RTL?'أخرى':'Other'
};

const SLA_DAYS = { salary:2, allowance:3, advance:1, certificate:1, eos:5, scholarship:20, other:3 };

// ─── قائمة الموظفين المختصين (رئيس القسم يحول إليهم الطلبات) ───
const DEPT_STAFF = [
  { id:'SP-01', name: IS_RTL?'محمد سعد الغانم':'Mohammed Al-Ghanim',   role: IS_RTL?'أخصائي رواتب':'Payroll Specialist',        avatar:'MG', specializations:['salary','certificate','allowance'], color:'#8B5CF6' },
  { id:'SP-02', name: IS_RTL?'نورة خالد المناعي':'Noura Al-Manaai',    role: IS_RTL?'محللة سلف ومكافآت':'Advance & Benefits Analyst', avatar:'NM', specializations:['advance','allowance','other'],    color:'#0891B2' },
  { id:'SP-03', name: IS_RTL?'عبدالله راشد القحطاني':'Abdullah Al-Qahtani', role: IS_RTL?'أخصائي نهاية الخدمة':'EOS Specialist',     avatar:'AQ', specializations:['eos','scholarship'],            color:'#059669' },
  { id:'SP-04', name: IS_RTL?'ريم يوسف الكواري':'Reem Al-Kawari',      role: IS_RTL?'مختصة شهادات وبيانات':'Certificates & Data',   avatar:'RK', specializations:['certificate','salary','other'],  color:'#DC2626' },
  { id:'SP-05', name: IS_RTL?'فيصل حمد الدوسري':'Faisal Al-Dosari',    role: IS_RTL?'مختص ابتعاث وإجراءات':'Scholarship Officer',   avatar:'FD', specializations:['scholarship','eos','advance'],   color:'#D97706' },
];

function getStaffWorkload(){
  const reqs = getSLARequests();
  return DEPT_STAFF.map(s=>({
    ...s,
    open:   reqs.filter(r=>r.assignedTo===s.id && r.status!=='done').length,
    done:   reqs.filter(r=>r.assignedTo===s.id && r.status==='done').length,
    breach: reqs.filter(r=>r.assignedTo===s.id && isBreach(r)).length,
    total:  reqs.filter(r=>r.assignedTo===s.id).length,
  }));
}

function getSLARequests(){ try{return JSON.parse(localStorage.getItem(SLA_KEY)||'[]')}catch(e){return[]} }
function saveSLARequests(d){ localStorage.setItem(SLA_KEY, JSON.stringify(d)) }
function getChats(){ try{return JSON.parse(localStorage.getItem(CHAT_KEY)||'{}')}catch(e){return{}} }
function saveChats(d){ localStorage.setItem(CHAT_KEY, JSON.stringify(d)) }

function addDays(date, days){
  const d = new Date(date); d.setDate(d.getDate()+days); return d.toISOString();
}

function fmtDate(iso){
  const d = new Date(iso);
  return d.toLocaleDateString(IS_RTL?'ar-QA':'en-GB',{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'});
}

function isBreach(req){
  if(req.status==='done') return false;
  return new Date() > new Date(req.slaDue);
}

// seed demo data on first load
(function seedDemo(){
  const existing = getSLARequests();
  if(existing.length>0) return;
  const demos = [
    { emp:'أحمد محمد العلي',      empId:'QU-10241', email:'ahmed.ali@qu.edu.qa',       type:'salary',      desc:'استفسار عن استقطاع شهر مارس 2025',         priority:'high',   status:'open' },
    { emp:'فاطمة يوسف الكبيسي',   empId:'QU-10589', email:'fatima.kubisi@qu.edu.qa',   type:'certificate', desc:'طلب شهادة راتب لغرض الإيجار',              priority:'normal', status:'inprogress' },
    { emp:'Ahmed Al-Mansoori',     empId:'QU-10312', email:'ahmed.mansoori@qu.edu.qa',  type:'allowance',   desc:'Housing allowance update request',           priority:'normal', status:'done' },
    { emp:'Noor Khalid Al-Rashidi',empId:'QU-10877', email:'noor.rashidi@qu.edu.qa',    type:'advance',     desc:'Emergency salary advance request',            priority:'urgent', status:'open' },
    { emp:'سعد ناصر المري',        empId:'QU-10124', email:'saad.almarri@qu.edu.qa',    type:'eos',         desc:'طلب حساب مكافأة نهاية الخدمة',              priority:'high',   status:'breach' },
  ];
  const now = new Date();
  const requests = demos.map((d,i)=>{
    const sub = new Date(now); sub.setDate(sub.getDate() - (i*2));
    const due = addDays(sub.toISOString(), SLA_DAYS[d.type]);
    const assignMap = ['SP-01','SP-03','','SP-02','SP-03'];
    const assignedId = assignMap[i] || '';
    const assignedStaff = assignedId ? DEPT_STAFF.find(s=>s.id===assignedId) : null;
    return {
      id: 'REQ-' + String(1000+i).padStart(4,'0'),
      emp: d.emp, empId: d.empId, email: d.email||'', type: d.type,
      desc: d.desc, priority: d.priority,
      status: d.status==='breach'?'open':d.status,
      submittedAt: sub.toISOString(),
      slaDue: d.status==='breach'? new Date(sub.getTime()-24*3600000).toISOString() : due,
      updatedAt: sub.toISOString(),
      notes: '',
      assignedTo: assignedId,
      assignedName: assignedStaff ? assignedStaff.name : '',
      assignedAt: assignedId ? sub.toISOString() : null,
      assignedNote: assignedId ? (IS_RTL?'تم التكليف تلقائياً عند الإنشاء':'Auto-assigned on creation') : '',
      transferHistory: assignedId ? [{
        from: IS_RTL?'رئيس القسم':'Dept. Head',
        to: assignedStaff ? assignedStaff.name : '',
        toId: assignedId,
        note: IS_RTL?'تم التكليف الأولي':'Initial assignment',
        at: sub.toISOString()
      }] : []
    };
  });
  saveSLARequests(requests);
  // seed chat for first request
  const chats = {};
  chats[requests[0].id] = [
    {from:'emp', text: IS_RTL?'مرحبا، هل يمكنكم التحقق من استقطاع شهر مارس؟':'Hello, can you check my March deduction?', time: requests[0].submittedAt},
    {from:'admin', text: IS_RTL?'سيتم مراجعة طلبك خلال يومي عمل.':'Your request will be reviewed within 2 business days.', time: requests[0].submittedAt}
  ];
  saveChats(chats);
})();

function updateKPIs(){
  const reqs = getSLARequests();
  document.getElementById('kpi_total').textContent = reqs.length;
  document.getElementById('kpi_open').textContent = reqs.filter(r=>r.status==='open'||r.status==='inprogress').length;
  document.getElementById('kpi_done').textContent = reqs.filter(r=>r.status==='done').length;
  document.getElementById('kpi_breach').textContent = reqs.filter(r=>isBreach(r)).length;
  const kpiAssigned = document.getElementById('kpi_assigned');
  if(kpiAssigned) kpiAssigned.textContent = reqs.filter(r=>r.assignedTo).length;
}

function renderSLATable(){
  const reqs = getSLARequests();
  const search = document.getElementById('slaSearch').value.toLowerCase();
  const statusF = document.getElementById('slaStatusFilter').value;
  const typeF = document.getElementById('slaTypeFilter').value;
  const sourceF = document.getElementById('slaSourceFilter') ? document.getElementById('slaSourceFilter').value : '';
  const assignedF = document.getElementById('slaAssignedFilter') ? document.getElementById('slaAssignedFilter').value : '';

  let filtered = reqs.filter(r=>{
    const matchSearch = !search || r.emp.toLowerCase().includes(search) || r.id.toLowerCase().includes(search) || r.empId.toLowerCase().includes(search);
    const rStatus = r.status==='needs_revision'?'needs_revision':(isBreach(r)?'breach':r.status);
    const matchStatus = !statusF || rStatus===statusF;
    const matchType = !typeF || r.type===typeF;
    const matchSource = !sourceF || (sourceF==='staff'?r.source==='staff':r.source!=='staff');
    const matchAssigned = !assignedF || (assignedF==='unassigned'?!r.assignedTo:r.assignedTo===assignedF);
    return matchSearch && matchStatus && matchType && matchSource && matchAssigned;
  }).sort((a,b)=>new Date(b.submittedAt).getTime()-new Date(a.submittedAt).getTime());

  const tbody = document.getElementById('slaTableBody');
  const empty = document.getElementById('slaEmpty');

  if(filtered.length===0){
    tbody.innerHTML='';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  tbody.innerHTML = filtered.map(req=>{
    const breach = isBreach(req);
    const status = breach?'breach':req.status;
    const statusLabels = {
      open: IS_RTL?'مفتوح':'Open',
      inprogress: IS_RTL?'قيد التنفيذ':'In Progress',
      done: IS_RTL?'مكتمل':'Done',
      breach: IS_RTL?'تجاوز SLA':'SLA Breach',
      needs_revision: IS_RTL?'يحتاج تعديل':'Needs Revision'
    };
    const prioLabel = {normal:IS_RTL?'عادية':'Normal',high:IS_RTL?'عالية':'High',urgent:IS_RTL?'عاجلة':'Urgent'};
    const chats = getChats();
    const unread = (chats[req.id]||[]).filter(m=>m.from==='emp'&&!m.read).length;
    const isFromStaff = req.source==='staff';
    const displayStatus = req.status==='needs_revision'?'needs_revision':(breach?'breach':req.status);
    return \`
    <tr class="border-b border-gray-50 hover:bg-gray-50 transition cursor-pointer\${isFromStaff?' ring-1 ring-inset ring-blue-100':''}" onclick="viewRequest('\${req.id}')">
      <td class="px-4 py-3">
        <div class="flex flex-col gap-0.5">
          <span class="font-mono text-xs font-bold text-gray-800">\${req.id}</span>
          <span class="text-xs priority-\${req.priority} rounded-full px-2 py-0.5 inline-block">\${prioLabel[req.priority]||req.priority}</span>
          \${isFromStaff?'<span class="text-xs px-1.5 py-0.5 rounded-full font-semibold inline-block" style="background:#DBEAFE;color:#1D4ED8"><i class="fas fa-user-circle" style="font-size:9px"></i> '+(IS_RTL?'بوابة الموظف':'Staff Portal')+'</span>':''}
        </div>
      </td>
      <td class="px-4 py-3">
        <p class="font-semibold text-gray-800 text-sm">\${req.emp}</p>
        <p class="text-xs text-gray-400">\${req.empId}</p>
      </td>
      <td class="px-4 py-3 text-sm text-gray-600">\${SERVICE_LABELS[req.type]||req.type}</td>
      <td class="px-4 py-3 text-xs text-gray-500">\${fmtDate(req.submittedAt)}</td>
      <td class="px-4 py-3 text-xs \${breach&&req.status!=='needs_revision'?'text-red-600 font-bold':'text-gray-500'}">\${fmtDate(req.slaDue)}\${breach&&req.status!=='needs_revision'?' ⚠️':''}</td>
      <td class="px-4 py-3">
        <span class="badge-\${displayStatus} text-xs px-2 py-1 rounded-full font-semibold">\${statusLabels[displayStatus]||displayStatus}</span>
        \${req.status==='needs_revision'&&req.revisionReason?'<p class="text-xs text-orange-600 mt-1 max-w-xs truncate" title="'+req.revisionReason+'"><i class=\\"fas fa-info-circle\\"></i> '+req.revisionReason+'</p>':''}
      </td>
      <td class="px-4 py-3">\${buildAssignedCell(req)}</td>
      <td class="px-4 py-3">
        <div class="flex items-center gap-1.5 \${IS_RTL?'flex-row-reverse':''}">
          <button onclick="event.stopPropagation();viewRequest('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition" title="\${IS_RTL?'عرض':'View'}"><i class="fas fa-eye text-xs"></i></button>
          <button onclick="event.stopPropagation();openChat('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition relative" title="\${IS_RTL?'دردشة':'Chat'}">\${unread>0?'<span class=\\"absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center\\">'+unread+'</span>':''}<i class="fas fa-comment-dots text-xs"></i></button>
          <button onclick="event.stopPropagation();showInvoice('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition" title="\${IS_RTL?'فاتورة':'Invoice'}"><i class="fas fa-file-invoice text-xs"></i></button>
          <button onclick="event.stopPropagation();openEmailModal('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition" title="\${IS_RTL?'إرسال إيميل للموظف':'Send Email to Employee'}" \${!req.email?'style=\\"opacity:0.4\\" title=\\"'+(IS_RTL?'البريد الإلكتروني غير متوفر':'No email on file')+'\\"':''} ><i class="fas fa-envelope text-xs"></i>\${req.email?'':'<i class=\\"fas fa-slash text-xs\\" style=\\"font-size:7px;margin-left:-6px\\" ></i>'}</button>
          \${req.status!=='done'&&req.status!=='needs_revision'?('<button onclick="event.stopPropagation();markDone(\\''+req.id+'\\');" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition" title="'+(IS_RTL?'إتمام':'Complete')+'"><i class="fas fa-check text-xs"></i></button>'):''}
          \${req.status!=='done'&&req.status!=='needs_revision'?('<button onclick="event.stopPropagation();openReturnModal(\\''+req.id+'\\');" class="p-1.5 rounded-lg text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition" title="'+(IS_RTL?'إرجاع للموظف':'Return to Employee')+'"><i class="fas fa-undo text-xs"></i></button>'):''}
          <button onclick="event.stopPropagation();openTransferModal('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition" title="\${IS_RTL?'تحويل لموظف مختص':'Transfer to Specialist'}"><i class="fas fa-share-nodes text-xs"></i></button>
        </div>
      </td>
    </tr>\`;
  }).join('');
  updateKPIs();
}

// ─── Helper: build assigned-staff cell for table rows ────────────────────────
function buildAssignedCell(req){
  if(!req.assignedTo){
    return '<span class="text-xs text-gray-400 italic px-1">'+(IS_RTL?'غير مكلَّف':'Unassigned')+'</span>';
  }
  const sp = DEPT_STAFF.find(s=>s.id===req.assignedTo);
  const color = sp ? sp.color : '#6B7280';
  const initials = sp ? sp.avatar : '??';
  const name = req.assignedName || (sp ? sp.name : req.assignedTo);
  const role = sp ? '<p class="text-xs text-gray-400 leading-tight">'+sp.role+'</p>' : '';
  return '<div class="flex items-center gap-2">'
    + '<div class="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style="background:'+color+'">'+initials+'</div>'
    + '<div><p class="text-xs font-semibold text-gray-700 leading-tight">'+name+'</p>'+role+'</div>'
    + '</div>';
}

// ─── Helper: build assigned-staff block for viewRequest modal ───────────────
function buildAssignedBlock(req){
  if(!req.assignedTo){
    return '<div class="rounded-xl p-3 flex items-center gap-3" style="background:#F5F3FF;border:1px solid #DDD6FE">'
      + '<i class="fas fa-user-slash text-indigo-400 me-2"></i>'
      + '<p class="text-sm text-indigo-700">'+(IS_RTL?'لم يتم تكليف هذا الطلب بعد':'This request has not been assigned yet')+'</p>'
      + '</div>';
  }
  const sp2 = DEPT_STAFF.find(s=>s.id===req.assignedTo);
  const color2 = sp2 ? sp2.color : '#6B7280';
  const avatar2 = sp2 ? sp2.avatar : '??';
  const name2 = req.assignedName || (sp2 ? sp2.name : req.assignedTo);
  const role2 = sp2 ? '<p class="text-xs text-gray-500">'+sp2.role+'</p>' : '';
  const atHTML = req.assignedAt ? '<p class="text-xs mt-0.5" style="color:#4338CA"><i class="fas fa-clock me-1"></i>'+fmtDate(req.assignedAt)+'</p>' : '';
  const noteHTML = req.assignedNote ? '<p class="text-xs text-gray-500 mt-0.5 italic">'+req.assignedNote+'</p>' : '';
  const hist = req.transferHistory || [];
  let histHTML = '';
  if(hist.length > 1){
    const prevItems = hist.slice(0, -1).map(function(h){
      return '<div class="flex items-center gap-2 text-xs text-gray-500 py-1 border-b border-dashed border-gray-100">'
        + '<i class="fas fa-arrow-right-arrow-left text-gray-300 flex-shrink-0"></i>'
        + '<span>'+h.from+' → '+h.to+'</span>'
        + '<span class="ms-auto opacity-60">'+fmtDate(h.at)+'</span>'
        + '</div>';
    }).join('');
    histHTML = '<div class="mt-2 pt-2 border-t border-indigo-100">'
      + '<p class="text-xs font-semibold text-gray-500 mb-1">'+(IS_RTL?'سجل التحويلات السابقة:':'Previous Transfers:')+'</p>'
      + prevItems + '</div>';
  }
  return '<div class="rounded-xl p-3" style="background:#EEF2FF;border:1px solid #C7D2FE">'
    + '<p class="text-xs font-bold mb-2 flex items-center gap-1.5" style="color:#4338CA">'
    + '<i class="fas fa-share-nodes me-1"></i>'+(IS_RTL?'المُكلَّف الحالي بالطلب':'Currently Assigned To')+'</p>'
    + '<div class="flex items-center gap-3">'
    + '<div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:'+color2+'">'+avatar2+'</div>'
    + '<div class="flex-1">'+
      '<p class="font-bold text-gray-800 text-sm">'+name2+'</p>'
      + role2 + atHTML + noteHTML
    + '</div></div>'
    + histHTML
    + '</div>';
}

function viewRequest(id){
  const reqs = getSLARequests();
  const req = reqs.find(r=>r.id===id);
  if(!req) return;
  const breach = isBreach(req);
  const allStatuses = ['open','inprogress','done','needs_revision'];
  const statusOptions = allStatuses.map(s=>\`<option value="\${s}" \${req.status===s?'selected':''}>\${
    {open:IS_RTL?'مفتوح':'Open',inprogress:IS_RTL?'قيد التنفيذ':'In Progress',done:IS_RTL?'مكتمل':'Done',needs_revision:IS_RTL?'يحتاج تعديل':'Needs Revision'}[s]||s
  }</option>\`).join('');

  document.getElementById('modalBody').innerHTML = \`
  <div class="space-y-4" dir="\${IS_RTL?'rtl':'ltr'}">
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
        <p class="text-xs text-gray-400 font-semibold uppercase">\${IS_RTL?'رقم الطلب':'Request ID'}</p>
        <p class="font-bold text-gray-800 font-mono">\${req.id}</p>
      </div>
      <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
        <p class="text-xs text-gray-400 font-semibold uppercase">\${IS_RTL?'نوع الخدمة':'Service Type'}</p>
        <p class="font-bold text-gray-800">\${SERVICE_LABELS[req.type]||req.type}</p>
      </div>
      <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
        <p class="text-xs text-gray-400 font-semibold uppercase">\${IS_RTL?'الموظف':'Employee'}</p>
        <p class="font-bold text-gray-800">\${req.emp}</p>
        <p class="text-xs text-gray-500">\${req.empId}</p>
        \${req.email?'<p class="text-xs mt-0.5" style="color:var(--qu-maroon)"><i class="fas fa-envelope me-1"></i>'+req.email+'</p>':'<p class="text-xs text-gray-400 mt-0.5 italic">'+(IS_RTL?'لا يوجد بريد إلكتروني':'No email on file')+'</p>'}
      </div>
      <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
        <p class="text-xs text-gray-400 font-semibold uppercase">\${IS_RTL?'الأولوية':'Priority'}</p>
        <span class="priority-\${req.priority} text-xs px-2 py-0.5 rounded-full font-semibold">\${{normal:IS_RTL?'عادية':'Normal',high:IS_RTL?'عالية':'High',urgent:IS_RTL?'عاجلة':'Urgent'}[req.priority]}</span>
      </div>
      <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
        <p class="text-xs text-gray-400 font-semibold uppercase">\${IS_RTL?'تاريخ التقديم':'Submitted'}</p>
        <p class="text-sm text-gray-700">\${fmtDate(req.submittedAt)}</p>
      </div>
      <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
        <p class="text-xs text-gray-400 font-semibold uppercase">\${IS_RTL?'الموعد النهائي SLA':'SLA Due'}</p>
        <p class="text-sm \${breach?'text-red-600 font-bold':'text-gray-700'}">\${fmtDate(req.slaDue)} \${breach?'⚠️':''}</p>
      </div>
    </div>
    <div class="bg-gray-50 rounded-xl p-3 \${IS_RTL?'text-right':''}">
      <p class="text-xs text-gray-400 font-semibold uppercase mb-1">\${IS_RTL?'وصف الطلب':'Description'}</p>
      <p class="text-sm text-gray-700">\${req.desc}</p>
    </div>
    \${buildAssignedBlock(req)}
    \${req.status==='needs_revision'&&req.revisionReason?\`
    <div class="rounded-xl p-3" style="background:#FFF7ED;border:1px solid #FED7AA">
      <p class="text-xs font-bold text-orange-700 mb-1"><i class="fas fa-undo mr-1"></i>\${IS_RTL?'سبب الإرجاع:':'Return Reason:'}</p>
      <p class="text-sm text-orange-800">\${req.revisionReason}</p>
    </div>\`:''}
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1 \${IS_RTL?'text-right':''}">\${IS_RTL?'تحديث الحالة':'Update Status'}</label>
      <select id="updStatus" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none">\${statusOptions}</select>
    </div>
    <div>
      <label class="block text-sm font-semibold text-gray-700 mb-1 \${IS_RTL?'text-right':''}">\${IS_RTL?'ملاحظات الفريق':'Team Notes'}</label>
      <textarea id="updNotes" rows="3" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none resize-none \${IS_RTL?'text-right':''}">\${req.notes||''}</textarea>
    </div>
    <div class="flex gap-3 pt-2 flex-wrap \${IS_RTL?'flex-row-reverse':''}">
      <button onclick="updateRequest('\${id}')" class="btn-primary flex-1 py-2.5 rounded-xl text-sm font-bold min-w-28">\${IS_RTL?'حفظ التحديث':'Save Update'}</button>
      <button onclick="openReturnModal('\${id}')" class="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 min-w-28" style="border:1px solid #FB923C;color:#C2410C;background:#FFF7ED">\${IS_RTL?'إرجاع للموظف':'Return to Employee'}</button>
      <button onclick="openChat('\${id}')" class="flex-1 py-2.5 rounded-xl text-sm font-bold border border-green-300 text-green-700 hover:bg-green-50 min-w-28">\${IS_RTL?'دردشة':'Chat'}</button>
      <button onclick="closeSLAModal();openEmailModal('\${id}')" class="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 min-w-28 \${!req.email?'opacity-50 cursor-not-allowed':''}" style="border:1px solid #7C3AED;color:#7C3AED;background:#F5F3FF" \${!req.email?'disabled':''} title="\${!req.email?(IS_RTL?'لا يوجد بريد إلكتروني':'No email on file'):''}"><i class="fas fa-envelope text-xs"></i>\${IS_RTL?'إرسال إيميل':'Send Email'}</button>
      <button onclick="closeSLAModal();openTransferModal('\${id}')" class="flex-1 py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 min-w-28" style="border:1px solid #4F46E5;color:#4338CA;background:#EEF2FF"><i class="fas fa-share-nodes text-xs"></i>\${IS_RTL?'تحويل لمختص':'Assign Specialist'}</button>
    </div>
  </div>\`;
  document.getElementById('slaModal').classList.remove('hidden');
}

function closeSLAModal(){ document.getElementById('slaModal').classList.add('hidden'); }

function updateRequest(id){
  const reqs = getSLARequests();
  const idx = reqs.findIndex(r=>r.id===id);
  if(idx===-1) return;
  reqs[idx].status = document.getElementById('updStatus').value;
  reqs[idx].notes = document.getElementById('updNotes').value;
  reqs[idx].updatedAt = new Date().toISOString();
  saveSLARequests(reqs);
  closeSLAModal();
  renderSLATable();
  showToast(IS_RTL?'تم حفظ التحديث بنجاح':'Update saved successfully','success');
}

function markDone(id){
  const reqs = getSLARequests();
  const idx = reqs.findIndex(r=>r.id===id);
  if(idx===-1) return;
  reqs[idx].status = 'done';
  reqs[idx].updatedAt = new Date().toISOString();
  saveSLARequests(reqs);
  renderSLATable();
  showToast(IS_RTL?'تم إتمام الطلب':'Request marked as done','success');
}

function openReturnModal(id){
  document.getElementById('returnReqId').value = id;
  document.getElementById('returnReasonSelect').value = '';
  document.getElementById('returnReasonCustom').value = '';
  document.getElementById('returnReasonCustom').classList.add('hidden');
  document.getElementById('returnModal').classList.remove('hidden');
  document.getElementById('slaModal').classList.add('hidden');
}

function closeReturnModal(){
  document.getElementById('returnModal').classList.add('hidden');
}

function toggleCustomReason(){
  const sel = document.getElementById('returnReasonSelect').value;
  const ta = document.getElementById('returnReasonCustom');
  if(sel==='custom'){ ta.classList.remove('hidden'); ta.focus(); }
  else { ta.classList.add('hidden'); }
}

function confirmReturn(){
  const id = document.getElementById('returnReqId').value;
  const sel = document.getElementById('returnReasonSelect').value;
  const custom = document.getElementById('returnReasonCustom').value.trim();
  const reason = sel==='custom' ? custom : sel;
  if(!reason){ showToast(IS_RTL?'يرجى تحديد سبب الإرجاع':'Please select a return reason','error'); return; }
  if(sel==='custom' && !custom){ showToast(IS_RTL?'يرجى كتابة سبب الإرجاع':'Please write the return reason','error'); return; }

  const reqs = getSLARequests();
  const idx = reqs.findIndex(r=>r.id===id);
  if(idx===-1) return;
  reqs[idx].status = 'needs_revision';
  reqs[idx].revisionReason = reason;
  reqs[idx].updatedAt = new Date().toISOString();
  reqs[idx].returnedAt = new Date().toISOString();
  saveSLARequests(reqs);

  // أضف رسالة دردشة تُشعر الموظف بالإرجاع
  const chats = getChats();
  if(!chats[id]) chats[id]=[];
  chats[id].push({
    from:'admin',
    text: IS_RTL
      ? 'تم إرجاع طلبك للمراجعة. السبب: ' + reason + ' — يرجى التعديل وإعادة تقديم الطلب.'
      : 'Your request has been returned for revision. Reason: ' + reason + ' — Please edit and resubmit.',
    time: new Date().toISOString(),
    read: false,
    isReturn: true
  });
  saveChats(chats);

  closeReturnModal();
  renderSLATable();
  showToast(IS_RTL?'تم إرجاع الطلب للموظف بنجاح':'Request returned to employee successfully','success');
}

// ─── New Request Wizard ───────────────────────────────────────────────────────
let nrCurrentStep = 1;

const SVC_META = {
  salary:      { sla:2, color:'#8B1A2F', icon:'fa-coins',
    steps: IS_RTL?['استلام الطلب','مراجعة كشف الراتب','التحقق من البيانات','الرد الرسمي']:['Receive request','Review payslip','Verify data','Official response'],
    note: IS_RTL?'يرجى ذكر الشهر المعني وطبيعة الاستفسار بالتفصيل':'Please mention the relevant month and the nature of the inquiry in detail' },
  certificate: { sla:1, color:'#1D4ED8', icon:'fa-certificate',
    steps: IS_RTL?['استلام الطلب','إصدار الشهادة','مراجعة البيانات','التسليم']:['Receive request','Issue certificate','Data review','Delivery'],
    note: IS_RTL?'حدد غرض الشهادة (بنك، إيجار، تأشيرة، إلخ)':'Specify the certificate purpose (bank, rent, visa, etc.)' },
  allowance:   { sla:3, color:'#C4922A', icon:'fa-hand-holding-usd',
    steps: IS_RTL?['استلام الطلب','مراجعة الأحقية','اعتماد القسم','التفعيل في الراتب']:['Receive request','Eligibility review','Department approval','Activation in salary'],
    note: IS_RTL?'أرفق المستندات الداعمة في وصف الطلب (عقد إيجار، مسافة، إلخ)':'Include supporting documents in description (lease, distance, etc.)' },
  advance:     { sla:1, color:'#059669', icon:'fa-money-bill-wave',
    steps: IS_RTL?['استلام الطلب','التحقق من الأهلية','الاعتماد المالي','الصرف']:['Receive request','Eligibility check','Financial approval','Disbursement'],
    note: IS_RTL?'السلف تخضع لشروط وسياسة الجامعة. حدد المبلغ المطلوب':'Advances are subject to university policy. Specify the required amount' },
  eos:         { sla:5, color:'#7C3AED', icon:'fa-person-walking-arrow-right',
    steps: IS_RTL?['استلام الطلب','حساب المستحقات','مراجعة قانونية','التدقيق','الإقرار النهائي']:['Receive request','Benefits calculation','Legal review','Audit','Final approval'],
    note: IS_RTL?'أرفق تاريخ آخر يوم عمل والسبب. الإجراء يستغرق 5 أيام كاملة':'Include last working day and reason. The process takes 5 full days' },
  other:       { sla:3, color:'#6B7280', icon:'fa-ellipsis-h',
    steps: IS_RTL?['استلام الطلب','التصنيف','المعالجة','الرد']:['Receive request','Classification','Processing','Response'],
    note: IS_RTL?'اشرح طلبك بالتفصيل الكافي حتى يتمكن الفريق من توجيهه للقسم المختص':'Describe your request in sufficient detail so the team can route it correctly' },
};

function openNewRequestModal(){
  nrCurrentStep = 1;
  // clear fields
  ['nr_emp','nr_id','nr_email','nr_desc'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
  document.getElementById('nr_type').value = '';
  document.querySelectorAll('.svc-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('slaExplainCard').classList.add('hidden');
  const summaryEl = document.getElementById('nrSummaryLine'); if(summaryEl) summaryEl.textContent='';
  const rb = document.querySelector('input[name="nr_priority"][value="normal"]');
  if(rb) rb.checked = true;
  nrGoToStep(1);
  document.getElementById('newReqModal').classList.remove('hidden');
}

function closeNewReqModal(){
  document.getElementById('newReqModal').classList.add('hidden');
}

function nrGoToStep(step){
  nrCurrentStep = step;
  [1,2,3].forEach(s=>{
    const pane = document.getElementById('nrPane'+s);
    if(pane) pane.classList.toggle('hidden', s!==step);
    const circle = document.getElementById('nrStep'+s+'Circle');
    const lbl = document.getElementById('nrStep'+s+'Label');
    const iconEl = document.getElementById('nrStep'+s+'Icon');
    if(circle){
      if(s < step){
        circle.style.background='#10B981'; circle.className=circle.className.replace(/text-white|bg-gray-100 text-gray-400/g,'')+'text-white';
        circle.style.color='white'; if(iconEl) iconEl.innerHTML='<i class="fas fa-check text-xs"></i>';
      } else if(s === step){
        circle.style.background='var(--qu-maroon)'; circle.style.color='white'; if(iconEl) iconEl.textContent=s;
      } else {
        circle.style.background='#F3F4F6'; circle.style.color='#9CA3AF'; if(iconEl) iconEl.textContent=s;
      }
    }
    if(lbl){ lbl.className = lbl.className.replace('text-gray-800','').replace('text-gray-400','') + (s===step?' text-gray-800':' text-gray-400'); }
    const line = document.getElementById('nrLine'+s);
    if(line) line.style.background = s < step ? '#10B981' : '#E5E7EB';
  });
  // step label
  const stepLabels = IS_RTL
    ? ['الخطوة 1 من 3 – بيانات الموظف','الخطوة 2 من 3 – نوع الخدمة','الخطوة 3 من 3 – التفاصيل والتأكيد']
    : ['Step 1 of 3 – Employee Info','Step 2 of 3 – Service Type','Step 3 of 3 – Details & Confirm'];
  document.getElementById('nrStepLabel').textContent = stepLabels[step-1];
  // buttons
  const back = document.getElementById('nrBtnBack');
  const next = document.getElementById('nrBtnNext');
  const nextIcon = document.getElementById('nrBtnNextIcon');
  back.classList.toggle('hidden', step===1);
  if(step===3){
    next.innerHTML = '<i class="fas fa-check mr-1.5"></i>'+(IS_RTL?'تأكيد وإنشاء الطلب':'Confirm & Create Request');
    if(nextIcon) nextIcon.className='';
    // fill summary
    const empName = document.getElementById('nr_emp').value||'–';
    const svcType = document.getElementById('nr_type').value;
    const svcLabel = {salary:IS_RTL?'استفسار راتب':'Salary Inquiry',certificate:IS_RTL?'شهادة راتب':'Salary Certificate',allowance:IS_RTL?'طلب بدل':'Allowance Request',advance:IS_RTL?'سلفة':'Advance',eos:IS_RTL?'نهاية الخدمة':'End of Service',other:IS_RTL?'أخرى':'Other'}[svcType]||svcType;
    const sl = document.getElementById('nrSummaryLine');
    if(sl) sl.textContent = (IS_RTL?'موظف: ':'Employee: ')+empName+' | '+(IS_RTL?'الخدمة: ':'Service: ')+svcLabel+' | SLA: '+(SLA_DAYS[svcType]||3)+(IS_RTL?' أيام عمل':' Business Days');
  } else {
    var chDir = IS_RTL?'left':'right'; next.innerHTML = (IS_RTL?'\u0627\u0644\u062a\u0627\u0644\u064a':'Next')+' <i class="fas fa-chevron-'+chDir+' text-xs ml-1"></i>';
  }
}

function nrNext(){
  if(nrCurrentStep===1){
    const emp = document.getElementById('nr_emp').value.trim();
    const empId = document.getElementById('nr_id').value.trim();
    if(!emp){ showToast(IS_RTL?'يرجى إدخال اسم الموظف':'Please enter employee name','error'); document.getElementById('nr_emp').focus(); return; }
    if(!empId){ showToast(IS_RTL?'يرجى إدخال رقم الموظف':'Please enter employee ID','error'); document.getElementById('nr_id').focus(); return; }
    nrGoToStep(2);
  } else if(nrCurrentStep===2){
    const type = document.getElementById('nr_type').value;
    if(!type){ showToast(IS_RTL?'يرجى اختيار نوع الخدمة':'Please select a service type','error'); return; }
    nrGoToStep(3);
  } else if(nrCurrentStep===3){
    createAdminRequest();
  }
}

function nrPrev(){
  if(nrCurrentStep>1) nrGoToStep(nrCurrentStep-1);
}

function selectService(val){
  document.getElementById('nr_type').value = val;
  document.querySelectorAll('.svc-card').forEach(c=>c.classList.remove('selected'));
  document.getElementById('svc_'+val).classList.add('selected');
  // show SLA explain
  const meta = SVC_META[val];
  if(!meta) return;
  const card = document.getElementById('slaExplainCard');
  card.classList.remove('hidden');
  document.getElementById('slaExpTitle').textContent = (IS_RTL?'مسار معالجة طلب: ':'Processing path for: ')
    + ({salary:IS_RTL?'استفسار راتب':'Salary Inquiry',certificate:IS_RTL?'شهادة راتب':'Salary Certificate',allowance:IS_RTL?'طلب بدل':'Allowance',advance:IS_RTL?'سلفة':'Advance',eos:IS_RTL?'نهاية الخدمة':'End of Service',other:IS_RTL?'أخرى':'Other'}[val]||val)
    + ' – SLA: ' + meta.sla + (IS_RTL?' أيام':' days');
  document.getElementById('slaExpSub').textContent = '💡 '+meta.note;
  var chevDir = IS_RTL ? 'left' : 'right';
  document.getElementById('slaExpSteps').innerHTML = meta.steps.map(function(s,i){
    return '<div class="flex items-center gap-1.5">'
      +'<div class="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0" style="background:'+meta.color+'">'+(i+1)+'</div>'
      +'<span class="text-xs text-gray-700">'+s+'</span>'
      +(i<meta.steps.length-1?'<i class="fas fa-chevron-'+chevDir+' text-xs text-gray-300 mx-0.5"></i>':'')
      +'</div>';
  }).join('');
}

function createAdminRequest(){
  const emp = document.getElementById('nr_emp').value.trim();
  const empId = document.getElementById('nr_id').value.trim();
  const type = document.getElementById('nr_type').value;
  const desc = document.getElementById('nr_desc').value.trim();
  const priority = document.querySelector('input[name="nr_priority"]:checked')?.value || 'normal';
  if(!emp||!empId||!desc){ showToast(IS_RTL?'يرجى تعبئة جميع الحقول المطلوبة':'Please fill all required fields','error'); return; }
  const reqs = getSLARequests();
  const newId = 'REQ-' + String(2000+reqs.length).padStart(4,'0');
  const now = new Date().toISOString();
  const email = document.getElementById('nr_email')?.value?.trim() || '';
  reqs.unshift({
    id: newId, emp, empId, email, type, desc, priority,
    status: 'open',
    submittedAt: now,
    slaDue: addDays(now, SLA_DAYS[type]||3),
    updatedAt: now, notes: '',
    assignedTo: '', assignedName: '', assignedAt: null, assignedNote: '',
    transferHistory: []
  });
  saveSLARequests(reqs);
  closeNewReqModal();
  renderSLATable();
  // success toast with invoice offer
  const toastEl = document.createElement('div');
  toastEl.className = 'fixed top-6 '+(IS_RTL?'left-6':'right-6')+' z-[100] px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold text-white flex items-start gap-3 max-w-sm';
  toastEl.style.background = 'var(--qu-maroon)';
  toastEl.innerHTML = \`
    <i class="fas fa-check-circle text-lg flex-shrink-0 mt-0.5"></i>
    <div>
      <p>\${IS_RTL?'تم إنشاء الطلب بنجاح!':'Request created successfully!'}</p>
      <p class="font-mono text-white/80 text-xs mt-0.5">\${newId}</p>
      <button onclick="showInvoice('\${newId}');this.closest('div.fixed').remove()" class="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-lg transition">\${IS_RTL?'عرض الفاتورة':'View Invoice'}</button>
    </div>\`;
  document.body.appendChild(toastEl);
  setTimeout(()=>{ if(toastEl.parentNode) toastEl.remove(); }, 6000);
}

function showInvoice(id){
  const reqs = getSLARequests();
  const req = reqs.find(r=>r.id===id);
  if(!req) return;
  closeSLAModal();
  const statusLabel = {open:IS_RTL?'مفتوح':'Open',inprogress:IS_RTL?'قيد التنفيذ':'In Progress',done:IS_RTL?'مكتمل':'Done'}[req.status]||(IS_RTL?'مفتوح':'Open');
  const invNum = 'INV-' + req.id.replace('REQ-','');
  const est = addDays(req.submittedAt, SLA_DAYS[req.type]||3);
  document.getElementById('invoiceContent').innerHTML = \`
  <div dir="\${IS_RTL?'rtl':'ltr'}" id="printable_inv">
    <!-- Invoice Header -->
    <div class="flex items-center justify-between mb-6 pb-4 border-b-2" style="border-color:var(--qu-maroon)">
      <div class="\${IS_RTL?'text-right':''}">
        <h1 class="text-2xl font-bold" style="color:var(--qu-maroon)">\${IS_RTL?'جامعة قطر':'Qatar University'}</h1>
        <p class="text-sm text-gray-500">\${IS_RTL?'قسم الرواتب والموارد البشرية':'Payroll & HR Department'}</p>
        <p class="text-xs text-gray-400">\${IS_RTL?'الدوحة، قطر | payroll@qu.edu.qa':'Doha, Qatar | payroll@qu.edu.qa'}</p>
      </div>
      <div class="\${IS_RTL?'text-left':'text-right'}">
        <p class="text-xs text-gray-400 uppercase font-semibold">\${IS_RTL?'فاتورة خدمة إلكترونية':'Electronic Service Invoice'}</p>
        <p class="text-xl font-bold font-mono" style="color:var(--qu-gold)">\${invNum}</p>
        <p class="text-xs text-gray-500">\${IS_RTL?'تاريخ الإصدار:':'Issue Date:'} \${fmtDate(new Date().toISOString())}</p>
      </div>
    </div>
    <!-- Bill To -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div>
        <p class="text-xs font-bold text-gray-400 uppercase mb-2">\${IS_RTL?'بيانات الموظف':'Employee Details'}</p>
        <p class="font-bold text-gray-800">\${req.emp}</p>
        <p class="text-sm text-gray-500">\${req.empId}</p>
        <p class="text-sm text-gray-500">\${IS_RTL?'جامعة قطر':'Qatar University'}</p>
      </div>
      <div class="\${IS_RTL?'text-left':'text-right'}">
        <p class="text-xs font-bold text-gray-400 uppercase mb-2">\${IS_RTL?'تفاصيل الطلب':'Request Details'}</p>
        <p class="text-sm text-gray-700"><span class="font-semibold">\${IS_RTL?'رقم الطلب:':'Request ID:'}</span> \${req.id}</p>
        <p class="text-sm text-gray-700"><span class="font-semibold">\${IS_RTL?'الحالة:':'Status:'}</span> \${statusLabel}</p>
        <p class="text-sm text-gray-700"><span class="font-semibold">\${IS_RTL?'الأولوية:':'Priority:'}</span> \${{normal:IS_RTL?'عادية':'Normal',high:IS_RTL?'عالية':'High',urgent:IS_RTL?'عاجلة':'Urgent'}[req.priority]||req.priority}</p>
      </div>
    </div>
    <!-- Service Table -->
    <table class="w-full text-sm mb-6 border border-gray-100 rounded-xl overflow-hidden">
      <thead>
        <tr style="background:var(--qu-maroon);color:white">
          <th class="px-4 py-3 text-left font-semibold">\${IS_RTL?'الخدمة المطلوبة':'Service Requested'}</th>
          <th class="px-4 py-3 text-center font-semibold">\${IS_RTL?'تاريخ التقديم':'Submitted'}</th>
          <th class="px-4 py-3 text-center font-semibold">\${IS_RTL?'الوقت المتوقع':'Est. Completion'}</th>
          <th class="px-4 py-3 text-center font-semibold">\${IS_RTL?'SLA (أيام)':'SLA (Days)'}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-100">
          <td class="px-4 py-3 font-semibold text-gray-800">\${SERVICE_LABELS[req.type]||req.type}</td>
          <td class="px-4 py-3 text-center text-gray-600">\${fmtDate(req.submittedAt)}</td>
          <td class="px-4 py-3 text-center text-gray-600">\${fmtDate(est)}</td>
          <td class="px-4 py-3 text-center font-bold" style="color:var(--qu-gold)">\${SLA_DAYS[req.type]||3} \${IS_RTL?'أيام عمل':'Business Days'}</td>
        </tr>
      </tbody>
    </table>
    <!-- Description -->
    <div class="bg-gray-50 rounded-xl p-4 mb-6">
      <p class="text-xs font-bold text-gray-400 uppercase mb-2">\${IS_RTL?'وصف الطلب':'Request Description'}</p>
      <p class="text-sm text-gray-700">\${req.desc}</p>
      \${req.notes?'<p class="text-xs text-gray-400 mt-2 font-semibold uppercase">'+(IS_RTL?'ملاحظات الفريق:':'Team Notes:')+'</p><p class="text-sm text-gray-600">'+req.notes+'</p>':''}
    </div>
    <!-- Footer -->
    <div class="border-t border-gray-200 pt-4 flex items-end justify-between">
      <div>
        <p class="text-xs text-gray-400">\${IS_RTL?'توقيع قسم الرواتب':'Payroll Department Signature'}</p>
        <div class="w-32 h-8 border-b border-gray-300 mt-4"></div>
      </div>
      <div class="text-right text-xs text-gray-400">
        <p>\${IS_RTL?'هذه فاتورة إلكترونية رسمية صادرة من قسم الرواتب':'This is an official electronic invoice from Payroll Dept'}</p>
        <p>\${IS_RTL?'جامعة قطر – الدوحة، قطر':'Qatar University – Doha, Qatar'}</p>
      </div>
    </div>
  </div>\`;
  document.getElementById('invoiceModal').classList.remove('hidden');
}

function printInvoice(){ window.print(); }

// ─── Chat ───
let currentChatReqId = null;

function openChat(reqId){
  closeSLAModal();
  currentChatReqId = reqId;
  const reqs = getSLARequests();
  const req = reqs.find(r=>r.id===reqId);
  document.getElementById('chatEmpName').textContent = req ? req.emp : (IS_RTL?'دردشة':'Chat');
  const chats = getChats();
  const msgs = chats[reqId] || [];
  // mark emp msgs as read
  msgs.forEach(m=>{ if(m.from==='emp') m.read=true; });
  chats[reqId] = msgs;
  saveChats(chats);
  renderChatMessages(msgs);
  document.getElementById('chatPanel').classList.remove('hidden');
  document.getElementById('chatToggleBtn').classList.remove('hidden');
}

function renderChatMessages(msgs){
  const container = document.getElementById('chatMessages');
  container.innerHTML = msgs.map(m=>\`
  <div class="flex \${m.from==='admin'?(IS_RTL?'justify-start':'justify-end'):(IS_RTL?'justify-end':'justify-start')}">
    <div>
      <div class="\${m.from==='admin'?'chat-bubble-admin':'chat-bubble-emp'}">\${m.text}</div>
      <p class="chat-time \${m.from==='admin'?(IS_RTL?'text-left':'text-right'):(IS_RTL?'text-right':'text-left')}">\${fmtDate(m.time)}</p>
    </div>
  </div>\`).join('');
  container.scrollTop = container.scrollHeight;
}

function sendAdminMsg(){
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if(!text || !currentChatReqId) return;
  const chats = getChats();
  if(!chats[currentChatReqId]) chats[currentChatReqId] = [];
  chats[currentChatReqId].push({from:'admin', text, time:new Date().toISOString(), read:true});
  saveChats(chats);
  input.value = '';
  renderChatMessages(chats[currentChatReqId]);
}

function toggleChat(){
  document.getElementById('chatPanel').classList.add('hidden');
}

function toggleChatPanel(){
  document.getElementById('chatPanel').classList.toggle('hidden');
}

function exportSLA(){
  const reqs = getSLARequests();
  const rows = [['ID','Employee','EmpID','Type','Priority','Status','Submitted','SLA Due']];
  reqs.forEach(r=>rows.push([r.id,r.emp,r.empId,r.type,r.priority,r.status,r.submittedAt,r.slaDue]));
  const csv = rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',')).join('\\n');
  const a = document.createElement('a'); a.href='data:text/csv;charset=utf-8,\\uFEFF'+encodeURIComponent(csv);
  a.download='sla_requests_'+new Date().toISOString().split('T')[0]+'.csv'; a.click();
}

function showToast(msg, type='success'){
  const t = document.createElement('div');
  t.className = 'fixed top-6 ${isRTL?'left-6':'right-6'} z-[100] px-5 py-3 rounded-xl shadow-xl text-sm font-bold text-white flex items-center gap-2';
  t.style.background = type==='error'?'#EF4444':'#10B981';
  t.innerHTML = '<i class="fas fa-'+(type==='error'?'times-circle':'check-circle')+'"></i>'+msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}

// ─── مزامنة فورية مع بوابة الموظف ───────────────────────────────────────────
let _lastCount = 0;

function checkNewStaffRequests(){
  const reqs = getSLARequests();
  const staffReqs = reqs.filter(r=>r.source==='staff');
  // إشعار إذا وصل طلب جديد
  if(staffReqs.length > _lastCount && _lastCount > 0){
    const diff = staffReqs.length - _lastCount;
    showNewRequestAlert(diff, staffReqs[0]);
  }
  _lastCount = staffReqs.length;
  // تحديث badge عدد طلبات الموظفين
  const badge = document.getElementById('staffReqBadge');
  const badgeCount = document.getElementById('staffReqBadgeCount');
  if(badge && badgeCount){
    if(staffReqs.length > 0){ badge.style.display='inline-flex'; badgeCount.textContent=staffReqs.length; }
    else { badge.style.display='none'; }
  }
  // تحديث وقت المزامنة
  const syncEl = document.getElementById('lastSyncTime');
  if(syncEl){
    const now = new Date();
    syncEl.textContent = IS_RTL
      ? 'آخر تحديث: ' + now.toLocaleTimeString('ar-QA',{hour:'2-digit',minute:'2-digit',second:'2-digit'})
      : 'Last sync: ' + now.toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
  }
  renderSLATable();
  updateKPIs();
}

function showNewRequestAlert(count, req){
  // إشعار بانر في أعلى الصفحة
  const banner = document.getElementById('newStaffReqBanner');
  if(!banner) return;
  document.getElementById('newStaffReqCount').textContent = count;
  document.getElementById('newStaffReqName').textContent = req ? (req.emp + ' — ' + (SERVICE_LABELS[req.type]||req.type)) : '';
  banner.classList.remove('hidden');
  banner.classList.add('animate-pulse');
  setTimeout(()=>{ banner.classList.remove('animate-pulse'); }, 3000);
  // صوت تنبيه خفيف
  try{
    const ctx = new AudioContext();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = 520; g.gain.value = 0.1;
    o.start(); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime+0.4);
    o.stop(ctx.currentTime+0.4);
  }catch(e){}
}

// BroadcastChannel للتزامن الفوري بين التبويبات
let _bc = null;
try {
  _bc = new BroadcastChannel('qu_payroll_sync');
  _bc.onmessage = (e) => {
    if(e.data && e.data.type === 'new_staff_request'){
      checkNewStaffRequests();
    }
  };
} catch(e) {}

// storage event كبديل لـ BroadcastChannel
window.addEventListener('storage', (e) => {
  if(e.key === 'sla_requests'){ checkNewStaffRequests(); }
});

// ─── Email Modal ─────────────────────────────────────────────────────────────
const EMAIL_TEMPLATES = [
  {
    id:'status_update',
    icon:'fa-bell',
    color:'#3B82F6', bg:'#EFF6FF',
    label: IS_RTL?'تحديث الحالة':'Status Update',
    subject: IS_RTL?'تحديث حالة طلبك – بوابة الرواتب':'Your Request Status Update – Payroll Portal',
    body: (req) => IS_RTL
      ? \`السيد/ة \${req?req.emp:'{اسم الموظف}'}،\n\nيسرنا إعلامكم بأنه تم تحديث حالة طلبكم رقم \${req?req.id:'REQ-XXXX'} في بوابة خدمات الرواتب.\n\nنوع الخدمة: \${req?(SERVICE_LABELS[req.type]||req.type):'{نوع الخدمة}'}\nالحالة الجديدة: {الحالة}\n\nللاطلاع على تفاصيل الطلب، يرجى تسجيل الدخول إلى بوابة خدمات الرواتب.\n\nشكراً لتواصلكم،\nقسم الرواتب – جامعة قطر\nPayroll@qu.edu.qa | تحويلة: 4100\`
      : \`Dear \${req?req.emp:'{Employee Name}'},\n\nWe are pleased to inform you that your request \${req?req.id:'REQ-XXXX'} has been updated in the Payroll Services Portal.\n\nService Type: \${req?(SERVICE_LABELS[req.type]||req.type):'{Service Type}'}\nNew Status: {Status}\n\nPlease log in to the portal to view your request details.\n\nBest regards,\nPayroll Department – Qatar University\nPayroll@qu.edu.qa | Ext: 4100\`
  },
  {
    id:'docs_required',
    icon:'fa-file-alt',
    color:'#D97706', bg:'#FFFBEB',
    label: IS_RTL?'طلب مستندات':'Documents Required',
    subject: IS_RTL?'مستندات مطلوبة لإتمام طلبك':'Required Documents for Your Request',
    body: (req) => IS_RTL
      ? \`السيد/ة \${req?req.emp:'{اسم الموظف}'}،\n\nبالإشارة إلى طلبكم رقم \${req?req.id:'REQ-XXXX'}، نود إعلامكم بأنه لإتمام معالجة طلبكم، يُرجى تزويدنا بالمستندات التالية:\n\n• {اذكر المستند الأول}\n• {اذكر المستند الثاني}\n\nيرجى تسليم المستندات خلال ثلاثة أيام عمل لتفادي تأخير معالجة طلبكم.\n\nشكراً لتعاونكم،\nقسم الرواتب – جامعة قطر\`
      : \`Dear \${req?req.emp:'{Employee Name}'},\n\nRegarding your request \${req?req.id:'REQ-XXXX'}, we need the following documents to complete processing:\n\n• {Document 1}\n• {Document 2}\n\nPlease submit the documents within 3 business days to avoid delays.\n\nThank you,\nPayroll Department – Qatar University\`
  },
  {
    id:'approved',
    icon:'fa-check-circle',
    color:'#059669', bg:'#ECFDF5',
    label: IS_RTL?'الطلب مُقبل':'Request Approved',
    subject: IS_RTL?'تمت الموافقة على طلبك':'Your Request Has Been Approved',
    body: (req) => IS_RTL
      ? \`السيد/ة \${req?req.emp:'{اسم الموظف}'}،\n\nيسعدنا إبلاغكم بأنه تمت الموافقة على طلبكم رقم \${req?req.id:'REQ-XXXX'} لخدمة "\${req?(SERVICE_LABELS[req.type]||req.type):'{نوع الخدمة}'}"\n\nسيتم إتمام الطلب خلال الوقت المحدد باتفاقية مستوى الخدمة. يمكنكم متابعة حالة الطلب من خلال بوابة الخدمات.\n\nمع التحيات،\nقسم الرواتب – جامعة قطر\`
      : \`Dear \${req?req.emp:'{Employee Name}'},\n\nWe are pleased to inform you that your request \${req?req.id:'REQ-XXXX'} for "\${req?(SERVICE_LABELS[req.type]||req.type):'{Service Type}'}" has been approved.\n\nYour request will be completed within the agreed SLA timeframe. You can track your request status via the portal.\n\nBest regards,\nPayroll Department – Qatar University\`
  },
  {
    id:'rejected',
    icon:'fa-times-circle',
    color:'#DC2626', bg:'#FEF2F2',
    label: IS_RTL?'الطلب مرفوض':'Request Rejected',
    subject: IS_RTL?'اعتذار – لم يتم قبول طلبك':'Apology – Request Not Accepted',
    body: (req) => IS_RTL
      ? \`السيد/ة \${req?req.emp:'{اسم الموظف}'}،\n\nنعتذر منكم على إبلاغكم بأنه لم يتم قبول طلبكم رقم \${req?req.id:'REQ-XXXX'} للأسباب التالية:\n\n{سبب الرفض}\n\nإذا كانت لديكم استفسارات أو تريدون تقديم طلب جديد بعد تصحيح البيانات، يُرجى التواصل مع قسم الرواتب.\n\nمع احترامنا،\nقسم الرواتب – جامعة قطر\`
      : \`Dear \${req?req.emp:'{Employee Name}'},\n\nWe regret to inform you that your request \${req?req.id:'REQ-XXXX'} was not accepted for the following reasons:\n\n{Rejection Reason}\n\nIf you have questions or wish to resubmit with corrected information, please contact the Payroll Department.\n\nRegards,\nPayroll Department – Qatar University\`
  },
  {
    id:'reminder',
    icon:'fa-clock',
    color:'#7C3AED', bg:'#F5F3FF',
    label: IS_RTL?'تذكير':'Reminder',
    subject: IS_RTL?'تذكير – طلب يحتاج متابعتك':'Reminder – Your Request Needs Attention',
    body: (req) => IS_RTL
      ? \`السيد/ة \${req?req.emp:'{اسم الموظف}'}،\n\nهذا تذكير بأن طلبكم رقم \${req?req.id:'REQ-XXXX'} لا يزال قيد المعالجة ويحتاج إلى اتخاذ إجراء من طرفكم.\n\n{تفاصيل الإجراء المطلوب}\n\nيرجى التصرف في أقرب وقت ممكن لضمان إتمام الطلب في الوقت المناسب.\n\nشكراً،\nقسم الرواتب – جامعة قطر\`
      : \`Dear \${req?req.emp:'{Employee Name}'},\n\nThis is a reminder that your request \${req?req.id:'REQ-XXXX'} is still pending and requires action from your side.\n\n{Required Action Details}\n\nPlease take action as soon as possible to ensure timely processing.\n\nThank you,\nPayroll Department – Qatar University\`
  },
  {
    id:'custom',
    icon:'fa-pen',
    color:'#6B7280', bg:'#F9FAFB',
    label: IS_RTL?'رسالة مخصصة':'Custom Message',
    subject: '',
    body: () => ''
  }
];

let _currentEmailReqId = null;

function openEmailModal(reqId){
  _currentEmailReqId = reqId;
  const reqs = getSLARequests();
  const req = reqs.find(r=>r.id===reqId);
  // Fill employee name & email
  document.getElementById('emailToName').textContent = req ? req.emp : '';
  document.getElementById('emailToAddr').value = req ? (req.email||'') : '';
  document.getElementById('emailReqRef').textContent = reqId;
  document.getElementById('emailModalSubtitle').textContent = IS_RTL
    ? 'بوابة خدمات الرواتب – جامعة قطر'
    : 'Payroll Portal – Qatar University';
  // Clear fields
  document.getElementById('emailSubject').value = '';
  document.getElementById('emailBody').value = '';
  document.querySelectorAll('input[name="emailPriority"]').forEach(r=>{ r.checked = r.value==='normal'; });
  // Render template buttons
  const grid = document.getElementById('emailTemplateGrid');
  grid.innerHTML = EMAIL_TEMPLATES.map(t=>\`
    <button onclick="applyEmailTemplate('\${t.id}')"
      class="email-tpl-btn flex flex-col items-center gap-1.5 p-3 rounded-xl border-2 border-transparent text-center transition hover:scale-105"
      style="background:\${t.bg};border-color:\${t.bg}"
      data-tpl="\${t.id}">
      <i class="fas \${t.icon} text-lg" style="color:\${t.color}"></i>
      <span class="text-xs font-semibold text-gray-700 leading-tight">\${t.label}</span>
    </button>
  \`).join('');
  document.getElementById('emailModal').classList.remove('hidden');
}

function closeEmailModal(){
  document.getElementById('emailModal').classList.add('hidden');
  document.getElementById('emailPreviewModal').classList.add('hidden');
  _currentEmailReqId = null;
}

function applyEmailTemplate(tplId){
  const reqs = getSLARequests();
  const req = _currentEmailReqId ? reqs.find(r=>r.id===_currentEmailReqId) : null;
  const tpl = EMAIL_TEMPLATES.find(t=>t.id===tplId);
  if(!tpl) return;
  // Highlight selected
  document.querySelectorAll('.email-tpl-btn').forEach(btn=>{
    const active = btn.dataset.tpl===tplId;
    btn.style.borderColor = active ? tpl.color : tpl.bg;
    btn.style.boxShadow = active ? \`0 0 0 2px \${tpl.color}40\` : '';
  });
  if(tplId==='custom') return; // user writes manually
  document.getElementById('emailSubject').value = tpl.subject;
  document.getElementById('emailBody').value = tpl.body(req);
}

function previewEmail(){
  const to   = document.getElementById('emailToAddr').value.trim();
  const subj = document.getElementById('emailSubject').value.trim();
  const body = document.getElementById('emailBody').value.trim();
  const priority = document.querySelector('input[name="emailPriority"]:checked')?.value||'normal';
  const prioColors = {normal:'#6B7280',high:'#D97706',urgent:'#DC2626'};
  const prioLabels = {normal:IS_RTL?'عادية':'Normal',high:IS_RTL?'عالية':'High',urgent:IS_RTL?'عاجلة':'Urgent'};
  if(!to||!subj||!body){ showToast(IS_RTL?'يرجى تعبئة الحقول المطلوبة':'Please fill required fields','error'); return; }
  document.getElementById('emailPreviewContent').innerHTML = \`
    <div dir="\${IS_RTL?'rtl':'ltr'}" class="space-y-4 font-sans text-sm">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <span class="font-semibold text-gray-500 text-xs uppercase">\${IS_RTL?'من:':'From:'}</span>
        <span class="text-gray-700">payroll@qu.edu.qa</span>
      </div>
      <div class="flex items-center justify-between flex-wrap gap-2 border-t pt-3">
        <span class="font-semibold text-gray-500 text-xs uppercase">\${IS_RTL?'إلى:':'To:'}</span>
        <span class="text-gray-700">\${to}</span>
      </div>
      <div class="flex items-center justify-between flex-wrap gap-2 border-t pt-3">
        <span class="font-semibold text-gray-500 text-xs uppercase">\${IS_RTL?'الموضوع:':'Subject:'}</span>
        <span class="font-bold text-gray-800">\${subj}</span>
      </div>
      <div class="flex items-center justify-between flex-wrap gap-2 border-t pt-3">
        <span class="font-semibold text-gray-500 text-xs uppercase">\${IS_RTL?'الأهمية:':'Priority:'}</span>
        <span class="text-xs font-bold px-2 py-0.5 rounded-full text-white" style="background:\${prioColors[priority]}">\${prioLabels[priority]}</span>
      </div>
      <div class="border-t pt-4">
        <div class="rounded-xl p-4 whitespace-pre-wrap text-gray-700 leading-relaxed" style="background:#F8FAFC;border:1px solid #E2E8F0">\${body.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
      </div>
      <div class="border-t pt-3 text-xs text-gray-400 \${IS_RTL?'text-right':''}">
        <i class="fas fa-shield-alt mr-1"></i>\${IS_RTL?'هذا الإيميل مُرسَل من بوابة خدمات الرواتب الرسمية – جامعة قطر':'This email is sent from the official Payroll Services Portal – Qatar University'}
      </div>
    </div>
  \`;
  document.getElementById('emailPreviewModal').classList.remove('hidden');
}

// ─── Open Outlook via mailto protocol ────────────────────────────────────────
function sendViaOutlook(fromPreview){
  const to   = document.getElementById('emailToAddr').value.trim();
  const subj = document.getElementById('emailSubject').value.trim();
  const body = document.getElementById('emailBody').value.trim();
  if(!to){ showToast(IS_RTL?'يرجى إدخال البريد الإلكتروني للموظف':'Please enter the employee email address','error'); return; }
  if(!subj){ showToast(IS_RTL?'يرجى إدخال موضوع الرسالة':'Please enter the email subject','error'); return; }
  if(!body){ showToast(IS_RTL?'يرجى كتابة نص الرسالة':'Please write the message body','error'); return; }

  // ── سجّل الإيميل في ملاحظات الطلب ──────────────────────────────────────────
  if(_currentEmailReqId){
    const reqs = getSLARequests();
    const idx  = reqs.findIndex(r=>r.id===_currentEmailReqId);
    if(idx!==-1){
      const ts = new Date().toLocaleString(IS_RTL?'ar-QA':'en-QA');
      const entry = IS_RTL
        ? \`\n\n📧 [تم فتح Outlook \${ts}]\nإلى: \${to}\nالموضوع: \${subj}\`
        : \`\n\n📧 [Outlook Opened \${ts}]\nTo: \${to}\nSubject: \${subj}\`;
      reqs[idx].notes    = (reqs[idx].notes||'') + entry;
      reqs[idx].updatedAt = new Date().toISOString();
      saveSLARequests(reqs);
    }
  }

  // ── بناء رابط mailto ────────────────────────────────────────────────────────
  // Outlook (desktop & web) يقرأ cc وbcc اختيارياً كذلك
  const mailtoUrl = 'mailto:' + encodeURIComponent(to)
    + '?subject=' + encodeURIComponent(subj)
    + '&body='    + encodeURIComponent(body);

  // ── فتح Outlook ─────────────────────────────────────────────────────────────
  // طريقة 1: window.location.href — يفتح تطبيق Outlook المثبت مباشرة
  window.location.href = mailtoUrl;

  closeEmailModal();
  renderSLATable();

  // ── Toast تأكيد ─────────────────────────────────────────────────────────────
  const toastEl = document.createElement('div');
  toastEl.className = 'fixed top-6 '+(IS_RTL?'left-6':'right-6')+' z-[100] px-5 py-4 rounded-2xl shadow-2xl text-sm font-bold text-white flex items-start gap-3 max-w-sm';
  toastEl.style.background = '#0078D4';          // Outlook blue
  toastEl.innerHTML = \`
    <i class="fas fa-envelope-open-text text-lg flex-shrink-0 mt-0.5"></i>
    <div>
      <p class="font-bold">\${IS_RTL?'جارٍ فتح Outlook…':'Opening Outlook…'}</p>
      <p class="text-white/80 text-xs mt-0.5">\${IS_RTL?'إلى:':'To:'} \${to}</p>
      <p class="text-white/70 text-xs mt-0.5 truncate max-w-xs">\${subj}</p>
      <p class="text-white/60 text-xs mt-1">\${IS_RTL
        ? 'إذا لم يفتح Outlook تلقائياً، اضغط الزر أدناه'
        : "If Outlook doesn't open, click the button below"}</p>
      <a href="\${mailtoUrl}"
        class="mt-2 text-xs bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-lg transition inline-block font-semibold">
        \${IS_RTL?'فتح يدوياً':'Open Manually'}
      </a>
    </div>\`;
  document.body.appendChild(toastEl);
  setTimeout(()=>{ if(toastEl.parentNode) toastEl.remove(); }, 10000);
}

// kept for backward-compatibility (preview modal still calls sendEmailAction)
function sendEmailAction(fromPreview){ sendViaOutlook(fromPreview); }

// ─── Transfer / Assign Modal ─────────────────────────────────────────────────
let _transferReqId = null;
let _transferSelectedStaff = null;

function openTransferModal(id){
  _transferReqId = id;
  _transferSelectedStaff = null;
  const reqs = getSLARequests();
  const req = reqs.find(r=>r.id===id);
  if(!req) return;

  // Update header label
  const lbl = document.getElementById('transferReqLabel');
  if(lbl) lbl.textContent = req.id + ' — ' + req.emp;

  // Reset note
  const noteEl = document.getElementById('transferNote');
  if(noteEl) noteEl.value = '';

  // Disable confirm button
  const btn = document.getElementById('transferConfirmBtn');
  if(btn) btn.disabled = true;

  // Render staff cards
  const workload = getStaffWorkload();
  const grid = document.getElementById('transferStaffGrid');
  if(grid){
    grid.innerHTML = workload.map(s=>{
      const isCurrent = req.assignedTo === s.id;
      const isSpec = s.specializations.includes(req.type);
      return \`<div id="tcard_\${s.id}" onclick="selectTransferStaff('\${s.id}')"
        class="rounded-xl p-4 cursor-pointer border-2 transition-all \${isCurrent?'border-indigo-400 bg-indigo-50':'border-gray-100 bg-gray-50 hover:border-indigo-200 hover:bg-indigo-50/40'}"
        style="\${isCurrent?'border-color:#818CF8':''}">
        <div class="flex items-start gap-3">
          <div class="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style="background:\${s.color}">\${s.avatar}</div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <p class="font-bold text-gray-800 text-sm">\${s.name}</p>
              \${isSpec?'<span class="text-xs px-1.5 py-0.5 rounded-full font-semibold" style="background:#D1FAE5;color:#065F46"><i class="fas fa-star" style="font-size:9px"></i> '+(IS_RTL?'مختص':'Specialist')+'</span>':''}
              \${isCurrent?'<span class="text-xs px-1.5 py-0.5 rounded-full font-semibold" style="background:#EEF2FF;color:#4338CA">'+(IS_RTL?'الحالي':'Current')+'</span>':''}
            </div>
            <p class="text-xs text-gray-500 mt-0.5">\${s.role}</p>
            <div class="flex items-center gap-3 mt-1.5 flex-wrap">
              <span class="text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:#F59E0B"></span>\${IS_RTL?'مفتوح:':'Open:'} <b>\${s.open}</b></span>
              <span class="text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:#10B981"></span>\${IS_RTL?'مكتمل:':'Done:'} <b>\${s.done}</b></span>
              \${s.breach>0?'<span class="text-xs flex items-center gap-1"><span class="w-2 h-2 rounded-full inline-block" style="background:#EF4444"></span>'+(IS_RTL?'خرق:':'Breach:')+'<b>'+s.breach+'</b></span>':''}
            </div>
          </div>
          <div class="flex-shrink-0">
            <div id="tcheck_\${s.id}" class="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all" style="\${isCurrent?'background:#4F46E5;border-color:#4F46E5':''}">
              \${isCurrent?'<i class="fas fa-check text-white" style="font-size:9px"></i>':''}
            </div>
          </div>
        </div>
      </div>\`;
    }).join('');
  }

  // Render transfer history
  const hist = req.transferHistory||[];
  const histBox = document.getElementById('transferHistoryBox');
  const histList = document.getElementById('transferHistoryList');
  if(histBox && histList){
    if(hist.length>0){
      histBox.classList.remove('hidden');
      histList.innerHTML = hist.slice().reverse().map((h,i)=>\`
        <div class="flex items-start gap-2 p-2 rounded-lg \${i===0?'bg-indigo-50':'bg-gray-50'}">
          <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style="background:\${i===0?'#4F46E5':'#9CA3AF'}">
            <i class="fas fa-\${i===0?'share-nodes':'history'} text-white" style="font-size:9px"></i>
          </div>
          <div class="flex-1">
            <p class="text-xs font-semibold text-gray-700">\${h.from} → \${h.to}</p>
            \${h.note?'<p class="text-xs text-gray-500 italic mt-0.5">'+h.note+'</p>':''}
            <p class="text-xs text-gray-400 mt-0.5">\${fmtDate(h.at)}</p>
          </div>
        </div>\`).join('');
    } else {
      histBox.classList.add('hidden');
    }
  }

  document.getElementById('transferModal').classList.remove('hidden');
}

function selectTransferStaff(staffId){
  _transferSelectedStaff = staffId;
  // Reset all cards
  DEPT_STAFF.forEach(s=>{
    const card = document.getElementById('tcard_'+s.id);
    const check = document.getElementById('tcheck_'+s.id);
    if(card){
      card.style.borderColor = '';
      card.classList.remove('border-indigo-400','bg-indigo-50');
      card.classList.add('border-gray-100','bg-gray-50');
    }
    if(check){
      check.style.background='';
      check.style.borderColor='';
      check.innerHTML='';
    }
  });
  // Highlight selected
  const selCard = document.getElementById('tcard_'+staffId);
  const selCheck = document.getElementById('tcheck_'+staffId);
  if(selCard){
    selCard.classList.remove('border-gray-100','bg-gray-50');
    selCard.classList.add('border-indigo-400','bg-indigo-50');
    selCard.style.borderColor = '#6366F1';
  }
  if(selCheck){
    selCheck.style.background='#4F46E5';
    selCheck.style.borderColor='#4F46E5';
    selCheck.innerHTML='<i class="fas fa-check text-white" style="font-size:9px"></i>';
  }
  // Enable confirm button
  const btn = document.getElementById('transferConfirmBtn');
  if(btn) btn.disabled = false;
}

function confirmTransfer(){
  if(!_transferReqId || !_transferSelectedStaff) return;
  const reqs = getSLARequests();
  const idx = reqs.findIndex(r=>r.id===_transferReqId);
  if(idx===-1) return;

  const staff = DEPT_STAFF.find(s=>s.id===_transferSelectedStaff);
  if(!staff) return;

  const note = (document.getElementById('transferNote')?.value||'').trim();
  const now = new Date().toISOString();
  const prevAssignedName = reqs[idx].assignedName || (IS_RTL?'غير مكلَّف':'Unassigned');

  // Update request assignment fields
  reqs[idx].assignedTo   = staff.id;
  reqs[idx].assignedName = staff.name;
  reqs[idx].assignedAt   = now;
  reqs[idx].assignedNote = note || (IS_RTL?'تم التحويل من لوحة رئيس القسم':'Transferred from dept. head panel');
  reqs[idx].updatedAt    = now;
  if(reqs[idx].status === 'open') reqs[idx].status = 'inprogress';

  // Log to transfer history
  if(!reqs[idx].transferHistory) reqs[idx].transferHistory = [];
  reqs[idx].transferHistory.push({
    from: prevAssignedName,
    to: staff.name,
    toId: staff.id,
    note: reqs[idx].assignedNote,
    at: now
  });

  saveSLARequests(reqs);
  closeTransferModal();
  renderSLATable();
  showToast(
    (IS_RTL?'تم تحويل الطلب إلى ':'Request assigned to ') + staff.name,
    'success'
  );
}

function closeTransferModal(){
  document.getElementById('transferModal').classList.add('hidden');
  _transferReqId = null;
  _transferSelectedStaff = null;
}

// ─── Department Head Tracking Panel ─────────────────────────────────────────
function openTrackingPanel(){
  const workload = getStaffWorkload();
  const reqs = getSLARequests();

  // Build staff workload rows
  const rows = workload.map(s=>{
    const pct = s.total > 0 ? Math.round((s.done/s.total)*100) : 0;
    const assignedReqs = reqs.filter(r=>r.assignedTo===s.id);
    const reqRows = assignedReqs.map(r=>{
      const breach = isBreach(r);
      const statusMap = {open:IS_RTL?'مفتوح':'Open',inprogress:IS_RTL?'قيد التنفيذ':'In Progress',done:IS_RTL?'مكتمل':'Done',needs_revision:IS_RTL?'يحتاج تعديل':'Needs Revision'};
      const st = breach?'breach':r.status;
      return \`<tr class="border-b border-gray-50 text-xs hover:bg-gray-50">
        <td class="px-3 py-2 font-mono font-bold text-gray-600">\${r.id}</td>
        <td class="px-3 py-2 text-gray-700">\${r.emp}</td>
        <td class="px-3 py-2 text-gray-500">\${SERVICE_LABELS[r.type]||r.type}</td>
        <td class="px-3 py-2"><span class="badge-\${st} px-2 py-0.5 rounded-full text-xs font-semibold">\${breach?(IS_RTL?'تجاوز SLA':'SLA Breach'):(statusMap[r.status]||r.status)}</span></td>
        <td class="px-3 py-2 \${breach?'text-red-600 font-bold':'text-gray-400'}">\${fmtDate(r.slaDue)}</td>
        <td class="px-3 py-2">
          <button onclick="closeTrackingPanel();openTransferModal('\${r.id}')" class="text-indigo-500 hover:text-indigo-700 transition" title="\${IS_RTL?'إعادة تحويل':'Reassign'}"><i class="fas fa-share-nodes text-xs"></i></button>
        </td>
      </tr>\`;
    }).join('');

    return \`<div class="border border-gray-100 rounded-xl overflow-hidden mb-4">
      <div class="flex items-center gap-3 px-4 py-3 \${IS_RTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,\${s.color}18,\${s.color}08)">
        <div class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style="background:\${s.color}">\${s.avatar}</div>
        <div class="flex-1 \${IS_RTL?'text-right':''}">
          <p class="font-bold text-gray-800 text-sm">\${s.name}</p>
          <p class="text-xs text-gray-500">\${s.role}</p>
        </div>
        <div class="flex items-center gap-4 text-xs \${IS_RTL?'flex-row-reverse':''}">
          <div class="text-center">
            <p class="font-bold text-amber-600 text-base">\${s.open}</p>
            <p class="text-gray-400">\${IS_RTL?'مفتوح':'Open'}</p>
          </div>
          <div class="text-center">
            <p class="font-bold text-green-600 text-base">\${s.done}</p>
            <p class="text-gray-400">\${IS_RTL?'مكتمل':'Done'}</p>
          </div>
          \${s.breach>0?\`<div class="text-center"><p class="font-bold text-red-600 text-base">\${s.breach}</p><p class="text-gray-400">\${IS_RTL?'خرق':'Breach'}</p></div>\`:''}
          <div class="text-center min-w-16">
            <div class="w-full bg-gray-200 rounded-full h-1.5 mt-1">
              <div class="h-1.5 rounded-full transition-all" style="width:\${pct}%;background:\${s.color}"></div>
            </div>
            <p class="text-gray-400 mt-0.5">\${pct}% \${IS_RTL?'إنجاز':'done'}</p>
          </div>
        </div>
      </div>
      \${assignedReqs.length>0?\`
      <div class="overflow-x-auto">
        <table class="w-full text-xs">
          <thead><tr class="bg-gray-50 border-b border-gray-100">
            <th class="px-3 py-2 text-gray-400 font-semibold \${IS_RTL?'text-right':'text-left'}">\${IS_RTL?'رقم الطلب':'Req. ID'}</th>
            <th class="px-3 py-2 text-gray-400 font-semibold \${IS_RTL?'text-right':'text-left'}">\${IS_RTL?'الموظف':'Employee'}</th>
            <th class="px-3 py-2 text-gray-400 font-semibold \${IS_RTL?'text-right':'text-left'}">\${IS_RTL?'الخدمة':'Service'}</th>
            <th class="px-3 py-2 text-gray-400 font-semibold \${IS_RTL?'text-right':'text-left'}">\${IS_RTL?'الحالة':'Status'}</th>
            <th class="px-3 py-2 text-gray-400 font-semibold \${IS_RTL?'text-right':'text-left'}">\${IS_RTL?'الموعد النهائي':'SLA Due'}</th>
            <th class="px-3 py-2 text-gray-400 font-semibold \${IS_RTL?'text-right':'text-left'}"></th>
          </tr></thead>
          <tbody>\${reqRows}</tbody>
        </table>
      </div>\`:\`<p class="text-xs text-gray-400 italic py-3 px-4 \${IS_RTL?'text-right':''}">\${IS_RTL?'لا توجد طلبات مكلَّفة حالياً':'No requests currently assigned'}</p>\`}
    </div>\`;
  }).join('');

  // Unassigned summary
  const unassigned = reqs.filter(r=>!r.assignedTo && r.status!=='done');
  const unassignedHTML = unassigned.length>0?\`
    <div class="rounded-xl p-4 mb-4" style="background:#FFF7ED;border:1px solid #FED7AA">
      <p class="text-sm font-bold text-orange-700 mb-2 flex items-center gap-2">
        <i class="fas fa-exclamation-triangle"></i>
        \${IS_RTL?'طلبات غير مكلَّفة ('+ unassigned.length +')':'Unassigned Requests ('+ unassigned.length +')'}
      </p>
      <div class="space-y-1">
        \${unassigned.map(r=>\`<div class="flex items-center justify-between gap-2 text-xs">
          <span class="font-mono font-bold text-orange-600">\${r.id}</span>
          <span class="text-gray-600 truncate">\${r.emp}</span>
          <button onclick="closeTrackingPanel();openTransferModal('\${r.id}')" class="text-indigo-600 hover:text-indigo-800 font-semibold flex-shrink-0 transition"><i class="fas fa-share-nodes me-1"></i>\${IS_RTL?'تكليف':'Assign'}</button>
        </div>\`).join('')}
      </div>
    </div>\`:'';

  document.getElementById('trackingBody').innerHTML = unassignedHTML + rows;

  // Update Quick Stats Bar
  const allOpen   = workload.reduce((a,s)=>a+s.open,0);
  const allDone   = workload.reduce((a,s)=>a+s.done,0);
  const allBreach = workload.reduce((a,s)=>a+s.breach,0);
  const tpOpen   = document.getElementById('tp_openVal');
  const tpDone   = document.getElementById('tp_doneVal');
  const tpBreach = document.getElementById('tp_breachVal');
  if(tpOpen)   tpOpen.textContent   = allOpen;
  if(tpDone)   tpDone.textContent   = allDone;
  if(tpBreach) tpBreach.textContent = allBreach;

  document.getElementById('trackingPanel').classList.remove('hidden');
}

function closeTrackingPanel(){
  document.getElementById('trackingPanel').classList.add('hidden');
}

// Init
_lastCount = getSLARequests().filter(r=>r.source==='staff').length;
renderSLATable();
updateKPIs();
// تحديث كل 3 ثوانٍ
setInterval(checkNewStaffRequests, 3000);
</script>`

  return c.html(layout(pageTitle, content, 'sla', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  STAFF SERVICE REQUEST  /staff-request  (الموظف يطلب خدمة ويرى طلباته)
// ─────────────────────────────────────────────────────────────────────────────
app.get('/staff-request', (c) => {
  const lang = getLang(c)
  const isRTL = lang === 'ar'

  const pageTitle = isRTL ? 'طلب خدمة' : 'Request a Service'

  const content = `
<div dir="${isRTL?'rtl':'ltr'}">

    <!-- ══ THEME BTN ══ -->
    <div style="display:flex;justify-content:flex-end;margin-bottom:4px">
      <button id="thInlineBtn" onclick="window._thToggle2&&window._thToggle2()"
        style="display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border:none;border-radius:10px;background:rgba(55,65,81,0.85);color:#F0C040;font-size:.78rem;font-weight:700;cursor:pointer;backdrop-filter:blur(6px);box-shadow:0 2px 8px rgba(0,0,0,.25);transition:.2s"
        onmouseover="this.style.background='rgba(79,70,229,.9)'" onmouseout="this.style.background='rgba(55,65,81,0.85)'">
        <i class="fas fa-palette"></i> Theme
      </button>
    </div>
    <!-- ══ THEME BANNER 2 ══ -->
    <div id="themeBanner2" class="hidden relative rounded-2xl overflow-hidden" style="min-height:130px"></div>
    <script>
    (function(){
      /* reuse shared helpers if already defined by /staff page in same session — 
         but since each page is standalone, we define them locally with suffix 2 */
      function _getNow2(){
        try{var ov=localStorage.getItem('nd_test_date');
          if(ov){var p=ov.split('-');return new Date(+p[0],+p[1]-1,+p[2]);}
        }catch(e){}
        return new Date();
      }
      var THEMES2=[
        {id:'national',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===11&&d.getDate()===18;},
         bg:'linear-gradient(135deg,#8B1A2F 0%,#6B0A22 40%,#1a1a2e 100%)',
         titleAr:'🇶🇦 كل عام وقطر بخير',titleEn:'🇶🇦 Happy Qatar National Day',
         subtitleAr:'اليوم الوطني القطري — ١٨ ديسمبر',subtitleEn:'Qatar National Day — December 18',
         tickerAr:'🇶🇦 يوم المجد والعطاء • تحيا قطر • ١٨ ديسمبر يوم العز والكرامة • الله يحفظ قطر وقيادتها 🇶🇦',
         tickerEn:'🇶🇦 Glory & Pride • Long Live Qatar • December 18 • God Bless Qatar 🇶🇦',
         particles:['🇶🇦','⭐','✨','🌟','🎊','🎉','🏅','💫']},
        {id:'eid_fitr',glow:'th-glow-eid',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===2&&dt>=29)||(m===3&&dt<=3);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 45%,#0D2B1F 100%)',
         titleAr:'🌙 عيد الفطر المبارك',titleEn:'🌙 Eid Al-Fitr Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله صيامكم',subtitleEn:'May your fast be accepted • Happy Eid',
         tickerAr:'🌙 عيد الفطر المبارك • تقبّل الله منا ومنكم • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Eid Al-Fitr Mubarak • May Allah accept our deeds • Happy Eid to all 🌙',
         particles:['🌙','⭐','✨','🌟','🎊','💚','🕌','🤲']},
        {id:'eid_adha',glow:'th-glow-eid',
         match:function(d){return d.getMonth()===5&&d.getDate()>=5&&d.getDate()<=10;},
         bg:'linear-gradient(135deg,#1E3A5F 0%,#1a4a7a 45%,#0f1f36 100%)',
         titleAr:'🕌 عيد الأضحى المبارك',titleEn:'🕌 Eid Al-Adha Mubarak',
         subtitleAr:'كل عام وأنتم بخير • تقبّل الله طاعتكم',subtitleEn:'May your worship be accepted • Happy Eid',
         tickerAr:'🕌 عيد الأضحى المبارك • تقبّل الله منا ومنكم صالح الأعمال • كل عام وأنتم بخير 🕌',
         tickerEn:'🕌 Eid Al-Adha Mubarak • May Allah accept our sacrifices • Happy Eid to all 🕌',
         particles:['🕌','🌙','⭐','✨','💙','🤲','🌟','🎊']},
        {id:'ramadan',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===2&&d.getDate()>=1&&d.getDate()<=28;},
         bg:'linear-gradient(135deg,#1E1B4B 0%,#312E81 45%,#0D0B2E 100%)',
         titleAr:'🌙 رمضان كريم',titleEn:'🌙 Ramadan Kareem',
         subtitleAr:'شهر الخير والبركة والعبادة',subtitleEn:'Month of Blessings & Worship',
         tickerAr:'🌙 رمضان كريم • شهر القرآن والخير • تقبّل الله صيامكم وقيامكم 🌙',
         tickerEn:'🌙 Ramadan Kareem • Month of Quran • May Allah accept your fasting 🌙',
         particles:['🌙','⭐','🌟','✨','📿','🕌','🤲','💜']},
        {id:'mawlid',glow:'th-glow-nb',
         match:function(d){return d.getMonth()===0&&d.getDate()>=28&&d.getDate()<=30;},
         bg:'linear-gradient(135deg,#14532D 0%,#166534 45%,#052E16 100%)',
         titleAr:'🌿 المولد النبوي الشريف',titleEn:'🌿 Mawlid Al-Nabawi',
         subtitleAr:'ذكرى مولد سيدنا محمد ﷺ',subtitleEn:'Birthday of Prophet Muhammad ﷺ',
         tickerAr:'🌿 بمناسبة المولد النبوي الشريف • صلِّ على النبي محمد ﷺ 🌿',
         tickerEn:'🌿 Happy Mawlid Al-Nabawi • Blessings upon Prophet Muhammad ﷺ 🌿',
         particles:['🌿','🌟','⭐','✨','💚','🤲','📿','🕌']},
        {id:'hijri_new',glow:'th-glow-ram',
         match:function(d){return d.getMonth()===5&&d.getDate()>=25&&d.getDate()<=27;},
         bg:'linear-gradient(135deg,#44337A 0%,#553C9A 45%,#231942 100%)',
         titleAr:'🌙 رأس السنة الهجرية',titleEn:'🌙 Islamic New Year',
         subtitleAr:'عام هجري جديد مبارك',subtitleEn:'Blessed Islamic New Year',
         tickerAr:'🌙 رأس السنة الهجرية الجديدة • عام مبارك • كل عام وأنتم بخير 🌙',
         tickerEn:'🌙 Happy Islamic New Year • May this year be full of blessings 🌙',
         particles:['🌙','⭐','✨','🌟','💜','🎊','📿','🕌']},
        {id:'spring',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===3||(d.getMonth()===4&&d.getDate()<=31);},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#052e16 100%)',
         titleAr:'🌸 فصل الربيع',titleEn:'🌸 Spring Season',
         subtitleAr:'الطبيعة تتجدّد والأمل يزهر',subtitleEn:'Nature renews & hope blossoms',
         tickerAr:'🌸 مرحباً بالربيع • الأزهار والجمال • فصل الخير والتجديد 🌸',
         tickerEn:'🌸 Welcome Spring • Flowers & Beauty • Season of renewal & hope 🌸',
         particles:['🌸','🌺','🌻','🦋','🌿','🌱','🌼','🍀']},
        {id:'summer',glow:'th-glow-sum',
         match:function(d){var m=d.getMonth(),dt=d.getDate();return(m===5&&dt>=10)||m===6||m===7;},
         bg:'linear-gradient(135deg,#7C2D12 0%,#9A3412 40%,#431407 100%)',
         titleAr:'☀️ فصل الصيف',titleEn:'☀️ Summer Season',
         subtitleAr:'الحرارة والنشاط والإجازات',subtitleEn:'Heat, energy & summer holidays',
         tickerAr:'☀️ مرحباً بالصيف • موسم الإجازات • الشمس تُشرق للجميع ☀️',
         tickerEn:'☀️ Welcome Summer • Vacation season • Enjoy the sunny days ☀️',
         particles:['☀️','🌞','🌊','🏖️','🌴','🍹','🌻','⭐']},
        {id:'autumn',glow:'th-glow-aut',
         match:function(d){return d.getMonth()>=8&&d.getMonth()<=10;},
         bg:'linear-gradient(135deg,#78350F 0%,#92400E 40%,#3B1A08 100%)',
         titleAr:'🍂 فصل الخريف',titleEn:'🍂 Autumn Season',
         subtitleAr:'تتساقط الأوراق وتتجدد الأيام',subtitleEn:'Leaves fall, days refresh',
         tickerAr:'🍂 مرحباً بالخريف • موسم التغيير والجمال • الألوان الذهبية تزيّن الطبيعة 🍂',
         tickerEn:'🍂 Welcome Autumn • Season of change & golden colors 🍂',
         particles:['🍂','🍁','🌾','🍄','🌰','🦔','🍃','🌙']},
        {id:'winter',glow:'th-glow-win',
         match:function(d){var m=d.getMonth(),dt=d.getDate();
           return m===0||m===1||(m===11&&dt>=20)||(m===11&&dt<=17&&dt>=1);},
         bg:'linear-gradient(135deg,#0F172A 0%,#1E3A5F 45%,#0a0f1e 100%)',
         titleAr:'❄️ فصل الشتاء',titleEn:'❄️ Winter Season',
         subtitleAr:'البرد والهدوء وجمال الليالي',subtitleEn:'Cool nights & peaceful days',
         tickerAr:'❄️ مرحباً بالشتاء • موسم الدفء والقهوة • ليالٍ هادئة وجميلة 🌌',
         tickerEn:'❄️ Welcome Winter • Cozy season • Beautiful quiet nights in Qatar 🌌',
         particles:['❄️','⛄','🌨️','✨','💙','🌟','🌙','⭐']},
        {id:'new_year',glow:'th-glow-nd',
         match:function(d){return d.getMonth()===0&&d.getDate()===1;},
         bg:'linear-gradient(135deg,#4C1D95 0%,#6D28D9 45%,#1e0a3c 100%)',
         titleAr:'🎆 كل عام وأنتم بخير',titleEn:'🎆 Happy New Year!',
         subtitleAr:'عام جديد مبارك • ٢٠٢٦',subtitleEn:'Wishing you a wonderful New Year 2026',
         tickerAr:'🎆 سنة جديدة سعيدة • كل عام وأنتم بخير • عام مليء بالخير والسعادة 🎆',
         tickerEn:'🎆 Happy New Year 2026 • Wishing you joy, health & success 🎆',
         particles:['🎆','🎇','✨','🎊','🎉','⭐','💜','🌟']},
        {id:'sport_day',glow:'th-glow-spr',
         match:function(d){return d.getMonth()===11&&d.getDate()===19;},
         bg:'linear-gradient(135deg,#064E3B 0%,#065F46 40%,#022c22 100%)',
         titleAr:'🏃 اليوم الوطني للرياضة',titleEn:'🏃 Qatar National Sport Day',
         subtitleAr:'الرياضة حياة • قطر تتحرك',subtitleEn:'Sport is Life • Qatar Moves',
         tickerAr:'🏃 اليوم الوطني للرياضة • الرياضة صحة وحياة • كن نشيطاً كن صحياً 🏃',
         tickerEn:'🏃 Qatar National Sport Day • Sport is Health & Life • Stay Active 🏃',
         particles:['🏃','⚽','🏅','🎽','💪','🌟','🏆','⭐']}
      ];
      function _detect2(now){for(var i=0;i<THEMES2.length;i++)if(THEMES2[i].match(now))return THEMES2[i];return null;}
      function _spawn2(wrap,particles){
        for(var i=0;i<20;i++){(function(i){setTimeout(function(){
          var p=document.createElement('span');p.className='th-particle';
          p.textContent=particles[i%particles.length];
          p.style.left=Math.random()*100+'%';p.style.top='-20px';
          p.style.animationDelay=(Math.random()*2)+'s';
          p.style.animationDuration=(2.5+Math.random()*2)+'s';
          p.style.fontSize=(0.9+Math.random()*0.7)+'rem';
          wrap.appendChild(p);
          setTimeout(function(){if(p.parentNode)p.parentNode.removeChild(p);},5000);
        },i*160);})(i);}
      }
      function _render2(th){
        var b=document.getElementById('themeBanner2');if(!b)return;
        var isRTL=document.documentElement.dir==='rtl'||document.body.dir==='rtl';
        b.classList.remove('hidden');
        b.style.background=th.bg;
        var title=isRTL?th.titleAr:th.titleEn;
        var subtitle=isRTL?th.subtitleAr:th.subtitleEn;
        var ticker=isRTL?th.tickerAr:th.tickerEn;
        var tc=isRTL?'th-ticker-innerR2':'th-ticker-inner2';
        b.innerHTML=
          '<div style="position:relative;z-index:2;padding:18px 22px 12px;display:flex;flex-direction:column;gap:3px">'
          +'<div style="font-size:clamp(1.2rem,2.5vw,1.55rem);font-weight:800;color:#fff;'
          +'text-shadow:0 2px 12px rgba(0,0,0,.4);animation:th-float 3.5s ease-in-out infinite;display:inline-block">'
          +title+'</div>'
          +'<div style="font-size:.85rem;color:rgba(255,255,255,.8);margin-top:1px">'+subtitle+'</div>'
          +'</div>'
          +'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.25);'
          +'padding:6px 0;overflow:hidden;z-index:3">'
          +'<div class="th-ticker-wrap2"><span class="'+tc+'" '
          +'style="color:rgba(255,255,255,.9);font-size:.78rem;letter-spacing:.03em">'+ticker+'</span></div></div>';
        (function loop(){_spawn2(b,th.particles);setTimeout(loop,5200);})();
      }
      var _th=_detect2(_getNow2());
      if(_th)_render2(_th);
    })();
    </script>
    <script>
    /* ══ THEME DEV PANEL 2 ══ */
    // globals so onclick="" can reach them
    window._thPanel2 = null;

    window._thToggle2 = function(){
      var p = document.getElementById('thDevPanel2');
      if(!p) return;
      var showing = p.style.display === 'block';
      p.style.display = showing ? 'none' : 'block';
      if(!showing){
        var s = document.getElementById('thDevStatus2');
        if(s){
          var cur = localStorage.getItem('nd_test_date');
          s.innerHTML = cur
            ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
            : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
        }
      }
    };

    window._thSet2 = function(d){
      if(d){ localStorage.setItem('nd_test_date', d); }
      else { localStorage.removeItem('nd_test_date'); }
      var inp = document.getElementById('thDateInput2');
      if(inp) inp.value = d || '';
      // refresh banner
      var th = _detect2(_getNow2());
      var b2 = document.getElementById('themeBanner2');
      var br = document.getElementById('thBtnRow');
      if(b2){ b2.innerHTML=''; b2.style.display='none'; }
      if(th){
        _render2(th);
        if(br) br.style.display='flex';
      } else {
        if(br) br.style.display='none';
      }
      // update status
      var s = document.getElementById('thDevStatus2');
      if(s){
        var cur = localStorage.getItem('nd_test_date');
        s.innerHTML = cur
          ? '<i class="fas fa-vial" style="color:#A78BFA;margin-inline-end:4px"></i>تاريخ الاختبار: <strong style="color:#F0C040">'+cur+'</strong>'
          : '<i class="fas fa-check-circle" style="color:#34D399;margin-inline-end:4px"></i>يستخدم التاريخ الحقيقي';
      }
    };

    // build panel HTML once DOM ready
    (function(){
      var quick=[
        {label:'🇶🇦 اليوم الوطني', date:'2025-12-18', c:'rgba(139,26,47,.8)'},
        {label:'🌙 عيد الفطر',      date:'2025-03-30', c:'rgba(5,150,105,.8)'},
        {label:'🕌 عيد الأضحى',     date:'2025-06-07', c:'rgba(30,58,95,.9)'},
        {label:'🌙 رمضان',           date:'2025-03-05', c:'rgba(67,56,202,.8)'},
        {label:'🌿 المولد النبوي',   date:'2025-01-29', c:'rgba(20,83,45,.8)'},
        {label:'🌸 الربيع',          date:'2025-04-15', c:'rgba(5,150,105,.7)'},
        {label:'☀️ الصيف',           date:'2025-07-10', c:'rgba(194,65,12,.8)'},
        {label:'🍂 الخريف',          date:'2025-10-01', c:'rgba(120,53,15,.8)'},
        {label:'❄️ الشتاء',          date:'2025-01-15', c:'rgba(30,58,95,.9)'},
        {label:'🎆 رأس السنة',        date:'2026-01-01', c:'rgba(76,29,149,.8)'},
        {label:'🏃 يوم الرياضة',      date:'2025-12-19', c:'rgba(6,78,59,.8)'},
        {label:'📅 اليوم الحقيقي',    date:'',           c:'rgba(55,65,81,.8)'}
      ];
      var qBtns = quick.map(function(q){
        return '<button onclick="window._thSet2(''+q.date+'')"'
          +' style="padding:5px 8px;border:none;border-radius:8px;cursor:pointer;font-size:.75rem;'
          +'background:'+q.c+';color:#fff">'
          +q.label+'</button>';
      }).join('');

      var p = document.createElement('div');
      p.id = 'thDevPanel2';
      p.style.cssText = 'display:none;position:fixed;bottom:24px;right:24px;z-index:99999;width:310px;'
        +'background:rgba(15,23,42,.96);border-radius:16px;padding:16px;'
        +'box-shadow:0 8px 32px rgba(0,0,0,.7);backdrop-filter:blur(12px);'
        +'border:1px solid rgba(255,255,255,.12);color:#e2e8f0;font-size:.83rem';
      p.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">'
        +'<span style="font-weight:700;color:#F0C040;font-size:.9rem"><i class="fas fa-palette" style="margin-inline-end:6px"></i>Theme Dev Panel</span>'
        +'<button onclick="document.getElementById('thDevPanel2').style.display='none'"'
        +' style="background:none;border:none;color:#94a3b8;cursor:pointer;font-size:1.2rem;line-height:1;padding:0">✕</button>'
        +'</div>'
        +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:12px">'+qBtns+'</div>'
        +'<div style="margin-bottom:8px">'
        +'<label style="display:block;margin-bottom:4px;color:#94a3b8">تاريخ مخصص:</label>'
        +'<input type="date" id="thDateInput2" style="width:100%;padding:6px 8px;border-radius:8px;'
        +'border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.08);color:#fff;font-size:.82rem">'
        +'</div>'
        +'<div style="display:flex;gap:8px;margin-bottom:10px">'
        +'<button onclick="var i=document.getElementById('thDateInput2');if(i&&i.value)window._thSet2(i.value)"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(99,102,241,.85);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-play" style="margin-inline-end:4px"></i>تطبيق</button>'
        +'<button onclick="window._thSet2('')"'
        +' style="flex:1;padding:7px;border:none;border-radius:8px;background:rgba(239,68,68,.75);color:#fff;cursor:pointer;font-size:.8rem">'
        +'<i class="fas fa-times" style="margin-inline-end:4px"></i>إلغاء</button>'
        +'</div>'
        +'<div id="thDevStatus2" style="font-size:.75rem;color:#94a3b8;text-align:center;padding:4px;background:rgba(255,255,255,.05);border-radius:6px"></div>';
      document.body.appendChild(p);

      // show btn if theme active
      var th = _detect2(_getNow2());
      var br = document.getElementById('thBtnRow');
      if(th && br) br.style.display = 'flex';
    })();
    </script>

  <!-- Tabs -->
  <div class="mb-6 flex gap-2 border-b border-gray-200 ${isRTL?'flex-row-reverse':''}">
    <button onclick="showTab('new')" id="tab_new" class="tab-btn active pb-3 px-4 text-sm font-semibold border-b-2 border-red-700 text-red-700">
      <i class="fas fa-plus-circle mr-1.5"></i>${isRTL?'طلب جديد':'New Request'}
    </button>
    <button onclick="showTab('my')" id="tab_my" class="tab-btn pb-3 px-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700">
      <i class="fas fa-list mr-1.5"></i>${isRTL?'طلباتي':'My Requests'}
    </button>
  </div>

  <!-- NEW REQUEST FORM -->
  <div id="pane_new">

    <!-- بانر إعادة التقديم بعد الإرجاع -->
    <div id="resubmitNoticeBanner" class="hidden mb-4 rounded-xl p-4 flex items-start gap-3 ${isRTL?'flex-row-reverse':''}" style="background:#FFF7ED;border:2px solid #FB923C">
      <i class="fas fa-exclamation-triangle text-orange-500 text-lg flex-shrink-0 mt-0.5"></i>
      <div class="flex-1 ${isRTL?'text-right':''}">
        <p class="font-bold text-orange-800 text-sm">${isRTL?'هذا الطلب أُعيد إليك للتعديل':'This request was returned to you for revision'}</p>
        <p class="text-xs text-orange-700 mt-0.5">${isRTL?'رقم الطلب:':'Request ID:'} <strong id="resubmitNoticeId"></strong> — ${isRTL?'السبب:':'Reason:'} <span id="resubmitNoticeReason" class="font-medium"></span></p>
        <p class="text-xs text-orange-600 mt-1">${isRTL?'يُرجى تعديل البيانات أدناه ثم الضغط على "إعادة تقديم الطلب".':'Please update the details below then click "Resubmit Request".'}</p>
      </div>
    </div>

    <div class="card p-6 max-w-2xl mx-auto">
      <div class="mb-5 ${isRTL?'text-right':''}">
        <h2 class="text-lg font-bold text-gray-800">${isRTL?'تقديم طلب خدمة جديد':'Submit a New Service Request'}</h2>
        <p class="text-sm text-gray-500 mt-1">${isRTL?'اختر نوع الخدمة المطلوبة واملأ التفاصيل. سيتم إصدار فاتورة إلكترونية فور تأكيد الطلب.':'Choose the service type and fill in the details. An e-invoice will be issued upon confirmation.'}</p>
      </div>

      <div class="space-y-4">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'نوع الخدمة':'Service Type'} <span class="text-red-500">*</span></label>
          <select id="sr_type" onchange="updateSLAInfo()" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}">
            <option value="">${isRTL?'اختر الخدمة...':'Select a service...'}</option>
            <option value="salary">${isRTL?'استفسار راتب':'Salary Inquiry'}</option>
            <option value="allowance">${isRTL?'طلب بدل':'Allowance Request'}</option>
            <option value="advance">${isRTL?'سلفة':'Advance'}</option>
            <option value="certificate">${isRTL?'شهادة راتب':'Salary Certificate'}</option>
            <option value="eos">${isRTL?'نهاية الخدمة':'End of Service'}</option>
            <option value="other">${isRTL?'أخرى':'Other'}</option>
          </select>
        </div>

        <!-- SLA Info Banner -->
        <div id="slaInfoBanner" class="hidden rounded-xl p-4 flex items-center gap-3 ${isRTL?'flex-row-reverse':''}" style="background:rgba(196,146,42,0.08);border:1px solid rgba(196,146,42,0.3)">
          <i class="fas fa-clock flex-shrink-0" style="color:var(--qu-gold)"></i>
          <div class="${isRTL?'text-right':''}">
            <p class="text-sm font-bold text-gray-800" id="slaInfoTitle">${isRTL?'وقت المعالجة المتوقع':'Expected Processing Time'}</p>
            <p class="text-xs text-gray-500" id="slaInfoSub"></p>
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'وصف الطلب':'Request Description'} <span class="text-red-500">*</span></label>
          <textarea id="sr_desc" rows="4" dir="${isRTL?'rtl':'ltr'}" placeholder="${isRTL?'اشرح طلبك بالتفصيل...':'Describe your request in detail...'}"
            class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 resize-none ${isRTL?'text-right':''}"></textarea>
        </div>

        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1 ${isRTL?'text-right':''}">${isRTL?'الأولوية':'Priority'}</label>
          <div class="flex gap-3 ${isRTL?'flex-row-reverse':''}">
            ${['normal','high','urgent'].map(p=>`
            <label class="flex-1 cursor-pointer">
              <input type="radio" name="sr_priority" value="${p}" ${p==='normal'?'checked':''} class="sr-only peer"/>
              <div class="peer-checked:border-red-700 peer-checked:bg-red-50 border-2 border-gray-200 rounded-xl p-3 text-center transition text-sm font-semibold text-gray-600 peer-checked:text-red-700">
                <i class="fas ${p==='normal'?'fa-minus-circle':p==='high'?'fa-exclamation-circle':'fa-fire'} block mb-1 text-base"></i>
                ${isRTL?(p==='normal'?'عادية':p==='high'?'عالية':'عاجلة'):(p==='normal'?'Normal':p==='high'?'High':'Urgent')}
              </div>
            </label>`).join('')}
          </div>
        </div>

        <button onclick="handleSRSubmit()" id="srSubmitBtn" class="btn-primary w-full py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2">
          <i class="fas fa-paper-plane"></i>${isRTL?'تقديم الطلب':'Submit Request'}
        </button>
      </div>
    </div>
  </div>

  <!-- MY REQUESTS -->
  <div id="pane_my" class="hidden">

    <!-- بانر تنبيه الإرجاع -->
    <div id="revisionAlertBanner" class="hidden mb-4 rounded-xl p-4 flex items-start gap-3 ${isRTL?'flex-row-reverse':''}" style="background:#FFF7ED;border:2px solid #FB923C">
      <i class="fas fa-exclamation-triangle text-orange-500 text-xl flex-shrink-0 mt-0.5 animate-pulse"></i>
      <div class="flex-1 ${isRTL?'text-right':''}">
        <p class="font-bold text-orange-800">${isRTL?'طلب يحتاج إلى تعديل':'A Request Needs Revision'}</p>
        <p class="text-sm text-orange-700 mt-0.5">
          ${isRTL?'لديك':'You have'} <strong id="revBannerCount">0</strong> ${isRTL?'طلب مُعاد إليك للمراجعة':'request(s) returned to you for revision'}
        </p>
        <p class="text-xs text-orange-600 mt-1"><strong>${isRTL?'السبب:':'Reason:'}</strong> <span id="revBannerReason"></span></p>
        <p class="text-xs text-gray-500 mt-0.5">${isRTL?'رقم الطلب:':'Req ID:'} <span id="revBannerReqId" class="font-mono font-bold"></span></p>
      </div>
    </div>

    <div class="card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-gray-100 bg-gray-50">
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'رقم الطلب':'Req. ID'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الخدمة':'Service'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'تاريخ الطلب':'Submitted'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الموعد المتوقع':'Expected'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'الحالة':'Status'}</th>
              <th class="px-4 py-3 text-xs font-bold text-gray-500 uppercase ${isRTL?'text-right':'text-left'}">${isRTL?'إجراءات':'Actions'}</th>
            </tr>
          </thead>
          <tbody id="myReqBody"></tbody>
        </table>
      </div>
      <div id="myReqEmpty" class="py-16 text-center text-gray-400">
        <i class="fas fa-inbox text-4xl mb-3 block opacity-30"></i>
        <p class="text-sm">${isRTL?'لا توجد طلبات حتى الآن. قدّم طلبك الأول الآن!':'No requests yet. Submit your first request!'}</p>
      </div>
    </div>
  </div>
</div>

<!-- Invoice Modal -->
<div id="staffInvModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,0.5)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto">
    <div class="sticky top-0 bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between">
      <h2 class="font-bold text-gray-800 text-lg">${isRTL?'الفاتورة الإلكترونية':'Electronic Invoice'}</h2>
      <div class="flex gap-2">
        <button onclick="window.print()" class="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5"><i class="fas fa-print"></i>${isRTL?'طباعة':'Print'}</button>
        <button onclick="document.getElementById('staffInvModal').classList.add('hidden')" class="text-gray-400 hover:text-gray-600 text-xl px-2">×</button>
      </div>
    </div>
    <div id="staffInvContent" class="p-8"></div>
  </div>
</div>

<!-- Chat Panel (موظف) -->
<div id="empChatPanel" class="hidden fixed bottom-0 ${isRTL?'left-0':'right-0'} w-full md:w-96 z-50 flex flex-col shadow-2xl" style="height:480px">
  <div class="topbar px-4 py-3 flex items-center justify-between ${isRTL?'flex-row-reverse':''}">
    <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
      <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i class="fas fa-headset text-white text-sm"></i></div>
      <div class="${isRTL?'text-right':''}">
        <p class="text-white font-bold text-sm">${isRTL?'قسم الرواتب':'Payroll Dept'}</p>
        <p class="text-white/60 text-xs" id="empChatReqId"></p>
      </div>
    </div>
    <button onclick="document.getElementById('empChatPanel').classList.add('hidden')" class="text-white/70 hover:text-white"><i class="fas fa-times"></i></button>
  </div>
  <div class="flex-1 bg-gray-50 overflow-y-auto p-3 space-y-2" id="empChatMessages"></div>
  <div class="bg-white border-t border-gray-200 p-3 flex gap-2 ${isRTL?'flex-row-reverse':''}">
    <input id="empChatInput" type="text" placeholder="${isRTL?'اكتب رسالتك...':'Type your message...'}"
      class="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-100 ${isRTL?'text-right':''}"
      onkeydown="if(event.key==='Enter')sendEmpMsg()"/>
    <button onclick="sendEmpMsg()" class="btn-primary px-3 py-2 rounded-xl text-sm"><i class="fas fa-paper-plane"></i></button>
  </div>
</div>

<style>
  .tab-btn{cursor:pointer;transition:all 0.2s}
  .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}
  .chat-bubble-admin{background:var(--qu-maroon);color:white;border-radius:12px 12px 4px 12px;max-width:80%;padding:8px 12px;font-size:13px;}
  .chat-bubble-emp{background:white;color:#374151;border:1px solid #E5E7EB;border-radius:12px 12px 12px 4px;max-width:80%;padding:8px 12px;font-size:13px;}
  .chat-time{font-size:10px;color:#9CA3AF;margin-top:2px}
  .badge-open{background:#FEF3C7;color:#92400E}
  .badge-inprogress{background:#DBEAFE;color:#1E40AF}
  .badge-done{background:#D1FAE5;color:#065F46}
  .badge-needs_revision{background:#FFEDD5;color:#C2410C;border:1px solid #FB923C}
  @media print{body *{visibility:hidden!important}#staffInvContent,#staffInvContent *{visibility:visible!important}#staffInvContent{position:fixed;top:0;left:0;width:100%;background:white}}
</style>

<script>
const SR_KEY = 'sla_requests';
const SR_CHAT_KEY = 'sla_chats';
const SR_LANG = '${lang}';
const SR_RTL = ${isRTL};

const SR_LABELS = {
  salary:      SR_RTL?'استفسار راتب':'Salary Inquiry',
  allowance:   SR_RTL?'طلب بدل':'Allowance Request',
  advance:     SR_RTL?'سلفة':'Advance',
  certificate: SR_RTL?'شهادة راتب':'Salary Certificate',
  eos:         SR_RTL?'نهاية الخدمة':'End of Service',
  other:       SR_RTL?'أخرى':'Other'
};
const SR_SLA = {salary:2,allowance:3,advance:1,certificate:1,eos:5,other:3};

function getSRRequests(){ try{return JSON.parse(localStorage.getItem(SR_KEY)||'[]')}catch(e){return[]} }
function saveSRRequests(d){ localStorage.setItem(SR_KEY, JSON.stringify(d)) }
function getSRChats(){ try{return JSON.parse(localStorage.getItem(SR_CHAT_KEY)||'{}')}catch(e){return{}} }
function saveSRChats(d){ localStorage.setItem(SR_CHAT_KEY, JSON.stringify(d)) }

function fmtDateSR(iso){
  const d=new Date(iso);
  return d.toLocaleDateString(SR_RTL?'ar-QA':'en-GB',{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'});
}
function addDaysSR(date,days){const d=new Date(date);d.setDate(d.getDate()+days);return d.toISOString();}

function getEmpId(){
  try{const s=JSON.parse(localStorage.getItem('staffSession')||'{}');return s.username||'unknown';}catch(e){return 'unknown';}
}
function getEmpName(){
  try{const s=JSON.parse(localStorage.getItem('staffSession')||'{}');return s.username||SR_RTL?'الموظف':'Employee';}catch(e){return SR_RTL?'الموظف':'Employee';}
}

function showTab(t){
  document.getElementById('pane_new').classList.toggle('hidden',t!=='new');
  document.getElementById('pane_my').classList.toggle('hidden',t!=='my');
  document.querySelectorAll('.tab-btn').forEach(b=>{
    b.classList.toggle('border-red-700',b.id==='tab_'+t);
    b.classList.toggle('text-red-700',b.id==='tab_'+t);
    b.classList.toggle('border-transparent',b.id!=='tab_'+t);
    b.classList.toggle('text-gray-500',b.id!=='tab_'+t);
  });
  if(t==='my') renderMyRequests();
}

function updateSLAInfo(){
  const type = document.getElementById('sr_type').value;
  const banner = document.getElementById('slaInfoBanner');
  if(!type){ banner.classList.add('hidden'); return; }
  const days = SR_SLA[type]||3;
  banner.classList.remove('hidden');
  document.getElementById('slaInfoTitle').textContent = SR_RTL?('الوقت المتوقع: '+days+' أيام عمل'):('Expected Time: '+days+' business day(s)');
  document.getElementById('slaInfoSub').textContent = SR_RTL?
    'سيتواصل معك فريق الرواتب خلال هذه المدة. يمكنك متابعة حالة طلبك من قسم "طلباتي".':
    'The payroll team will respond within this period. Track your request under "My Requests".';
}

function submitStaffRequest(){
  const type = document.getElementById('sr_type').value;
  const desc = document.getElementById('sr_desc').value.trim();
  const priority = document.querySelector('input[name="sr_priority"]:checked')?.value || 'normal';
  if(!type){ showSRToast(SR_RTL?'يرجى اختيار نوع الخدمة':'Please select a service type','error'); return; }
  if(!desc){ showSRToast(SR_RTL?'يرجى وصف طلبك':'Please describe your request','error'); return; }

  const reqs = getSRRequests();
  const newId = 'REQ-' + String(3000+reqs.length).padStart(4,'0');
  const now = new Date().toISOString();
  const emp = getEmpName();
  const empId = getEmpId();

  reqs.unshift({
    id: newId, emp, empId, type, desc, priority,
    status: 'open',
    submittedAt: now,
    slaDue: addDaysSR(now, SR_SLA[type]||3),
    updatedAt: now, notes: '',
    source: 'staff'
  });
  saveSRRequests(reqs);

  // إشعار فوري لصفحة SLA عبر BroadcastChannel
  try {
    const bc = new BroadcastChannel('qu_payroll_sync');
    bc.postMessage({ type: 'new_staff_request', id: newId, emp, empId, serviceType: type });
    bc.close();
  } catch(e) {}

  // Auto-add confirmation chat message from admin
  const chats = getSRChats();
  chats[newId] = [{
    from: 'admin',
    text: SR_RTL?
      'مرحباً، تم استلام طلبك بنجاح. سيتم مراجعته والرد عليك خلال '+(SR_SLA[type]||3)+' أيام عمل.':
      'Hello! Your request has been received. We will review it and respond within '+(SR_SLA[type]||3)+' business day(s).',
    time: now, read: false
  }];
  saveSRChats(chats);

  showInvoiceSR(newId);
  showTab('my');
}

function renderMyRequests(){
  const empId = getEmpId();
  const reqs = getSRRequests().filter(r=>r.empId===empId||r.source==='staff');
  const body = document.getElementById('myReqBody');
  const empty = document.getElementById('myReqEmpty');
  const revBanner = document.getElementById('revisionAlertBanner');

  // عرض بانر الإرجاع إذا كان هناك طلبات تحتاج مراجعة
  const needsRev = reqs.filter(r=>r.status==='needs_revision');
  if(revBanner){
    if(needsRev.length>0){
      revBanner.classList.remove('hidden');
      document.getElementById('revBannerCount').textContent = needsRev.length;
      document.getElementById('revBannerReason').textContent = needsRev[0].revisionReason||'';
      document.getElementById('revBannerReqId').textContent = needsRev[0].id;
    } else {
      revBanner.classList.add('hidden');
    }
  }

  if(reqs.length===0){ body.innerHTML=''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  body.innerHTML = reqs.map(req=>{
    const statusLabels = {
      open:SR_RTL?'مفتوح':'Open',
      inprogress:SR_RTL?'قيد التنفيذ':'In Progress',
      done:SR_RTL?'مكتمل':'Done',
      needs_revision:SR_RTL?'يحتاج تعديل':'Needs Revision'
    };
    const chats = getSRChats();
    const unread = (chats[req.id]||[]).filter(m=>m.from==='admin'&&!m.read).length;
    const isRevision = req.status==='needs_revision';
    return \`
    <tr class="border-b border-gray-50 hover:bg-gray-50\${isRevision?' bg-orange-50':''}" >
      <td class="px-4 py-3 font-mono text-xs font-bold text-gray-800">\${req.id}</td>
      <td class="px-4 py-3 text-sm text-gray-700">\${SR_LABELS[req.type]||req.type}</td>
      <td class="px-4 py-3 text-xs text-gray-500">\${fmtDateSR(req.submittedAt)}</td>
      <td class="px-4 py-3 text-xs text-gray-500">\${fmtDateSR(req.slaDue)}</td>
      <td class="px-4 py-3">
        <span class="badge-\${req.status} text-xs px-2 py-1 rounded-full font-semibold">\${statusLabels[req.status]||req.status}</span>
        \${isRevision&&req.revisionReason?'<p class=\\"text-xs text-orange-600 mt-1\\" title=\\"'+req.revisionReason+'\\"><i class=\\"fas fa-exclamation-circle\\"></i> '+req.revisionReason.substring(0,40)+(req.revisionReason.length>40?'...':'')+'</p>':''}
      </td>
      <td class="px-4 py-3">
        <div class="flex gap-1.5 items-center \${SR_RTL?'flex-row-reverse':''}">
          <button onclick="showInvoiceSR('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition" title="\${SR_RTL?'الفاتورة':'Invoice'}"><i class="fas fa-file-invoice text-xs"></i></button>
          <button onclick="openEmpChat('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition relative" title="\${SR_RTL?'دردشة':'Chat'}">\${unread>0?'<span class=\\"absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-red-500\\"></span>':''}<i class="fas fa-comment-dots text-xs"></i></button>
          \${isRevision?('<button onclick=\\"openResubmitModal(\\''+req.id+'\\');\\" class=\\"p-1.5 rounded-lg text-white hover:opacity-80 transition font-bold\\" style=\\"background:#C2410C\\" title=\\"'+(SR_RTL?'إعادة تقديم':'Resubmit')+'\\"><i class=\\"fas fa-redo text-xs\\"></i></button>'):''}
        </div>
      </td>
    </tr>\`;
  }).join('');
}

function showInvoiceSR(id){
  const reqs = getSRRequests();
  const req = reqs.find(r=>r.id===id);
  if(!req) return;
  const invNum = 'INV-'+req.id.replace('REQ-','');
  const est = addDaysSR(req.submittedAt, SR_SLA[req.type]||3);
  const statusLabel = {open:SR_RTL?'مفتوح':'Open',inprogress:SR_RTL?'قيد التنفيذ':'In Progress',done:SR_RTL?'مكتمل':'Done'}[req.status]||(SR_RTL?'مفتوح':'Open');

  document.getElementById('staffInvContent').innerHTML = \`
  <div dir="\${SR_RTL?'rtl':'ltr'}">
    <div class="flex items-center justify-between mb-6 pb-4 border-b-2" style="border-color:var(--qu-maroon)">
      <div class="\${SR_RTL?'text-right':''}">
        <h1 class="text-2xl font-bold" style="color:var(--qu-maroon)">\${SR_RTL?'جامعة قطر':'Qatar University'}</h1>
        <p class="text-sm text-gray-500">\${SR_RTL?'قسم الرواتب والموارد البشرية':'Payroll & HR Department'}</p>
      </div>
      <div class="\${SR_RTL?'text-left':'text-right'}">
        <p class="text-xs text-gray-400 uppercase font-semibold">\${SR_RTL?'فاتورة خدمة إلكترونية':'Electronic Service Invoice'}</p>
        <p class="text-xl font-bold font-mono" style="color:var(--qu-gold)">\${invNum}</p>
        <p class="text-xs text-gray-500">\${fmtDateSR(new Date().toISOString())}</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div>
        <p class="text-xs font-bold text-gray-400 uppercase mb-2">\${SR_RTL?'بيانات الموظف':'Employee Details'}</p>
        <p class="font-bold text-gray-800">\${req.emp}</p>
        <p class="text-sm text-gray-500">\${req.empId}</p>
      </div>
      <div class="\${SR_RTL?'text-left':'text-right'}">
        <p class="text-xs font-bold text-gray-400 uppercase mb-2">\${SR_RTL?'رقم الطلب':'Request ID'}</p>
        <p class="font-mono font-bold text-gray-800">\${req.id}</p>
        <span class="badge-\${req.status} text-xs px-2 py-0.5 rounded-full font-semibold">\${statusLabel}</span>
      </div>
    </div>
    <table class="w-full text-sm mb-6 border border-gray-100 rounded-xl overflow-hidden">
      <thead><tr style="background:var(--qu-maroon);color:white">
        <th class="px-4 py-3 text-left font-semibold">\${SR_RTL?'الخدمة':'Service'}</th>
        <th class="px-4 py-3 text-center font-semibold">\${SR_RTL?'تاريخ الطلب':'Submitted'}</th>
        <th class="px-4 py-3 text-center font-semibold">\${SR_RTL?'الإنجاز المتوقع':'Est. Completion'}</th>
        <th class="px-4 py-3 text-center font-semibold">\${SR_RTL?'SLA':'SLA'}</th>
      </tr></thead>
      <tbody>
        <tr><td class="px-4 py-3 font-semibold text-gray-800">\${SR_LABELS[req.type]||req.type}</td>
        <td class="px-4 py-3 text-center text-gray-600">\${fmtDateSR(req.submittedAt)}</td>
        <td class="px-4 py-3 text-center text-gray-600">\${fmtDateSR(est)}</td>
        <td class="px-4 py-3 text-center font-bold" style="color:var(--qu-gold)">\${SR_SLA[req.type]||3} \${SR_RTL?'أيام عمل':'Business Days'}</td>
        </tr>
      </tbody>
    </table>
    <div class="bg-gray-50 rounded-xl p-4 mb-6">
      <p class="text-xs font-bold text-gray-400 uppercase mb-2">\${SR_RTL?'وصف الطلب':'Description'}</p>
      <p class="text-sm text-gray-700">\${req.desc}</p>
    </div>
    <div class="border-t border-gray-200 pt-4 text-center">
      <p class="text-xs text-gray-400">\${SR_RTL?'هذه فاتورة إلكترونية رسمية صادرة من قسم الرواتب – جامعة قطر':'Official electronic invoice issued by Payroll Dept – Qatar University'}</p>
    </div>
  </div>\`;
  document.getElementById('staffInvModal').classList.remove('hidden');
}

let currentEmpChatReqId = null;
function openEmpChat(reqId){
  currentEmpChatReqId = reqId;
  document.getElementById('empChatReqId').textContent = reqId;
  const chats = getSRChats();
  const msgs = chats[reqId]||[];
  msgs.forEach(m=>{ if(m.from==='admin') m.read=true; });
  chats[reqId] = msgs;
  saveSRChats(chats);
  renderEmpChat(msgs);
  document.getElementById('empChatPanel').classList.remove('hidden');
}

function renderEmpChat(msgs){
  const container = document.getElementById('empChatMessages');
  container.innerHTML = msgs.map(m=>\`
  <div class="flex \${m.from==='emp'?(SR_RTL?'justify-start':'justify-end'):(SR_RTL?'justify-end':'justify-start')}">
    <div>
      <div class="\${m.from==='admin'?'chat-bubble-admin':'chat-bubble-emp'}">\${m.text}</div>
      <p class="chat-time \${m.from==='emp'?(SR_RTL?'text-left':'text-right'):(SR_RTL?'text-right':'text-left')}">\${fmtDateSR(m.time)}</p>
    </div>
  </div>\`).join('');
  container.scrollTop = container.scrollHeight;
}

function sendEmpMsg(){
  const input = document.getElementById('empChatInput');
  const text = input.value.trim();
  if(!text || !currentEmpChatReqId) return;
  const chats = getSRChats();
  if(!chats[currentEmpChatReqId]) chats[currentEmpChatReqId] = [];
  chats[currentEmpChatReqId].push({from:'emp', text, time:new Date().toISOString(), read:false});
  saveSRChats(chats);
  input.value = '';
  renderEmpChat(chats[currentEmpChatReqId]);
}

function openResubmitModal(reqId){
  const reqs = getSRRequests();
  const req = reqs.find(r=>r.id===reqId);
  if(!req) return;
  // عبّئ حقول النموذج بالبيانات السابقة
  document.getElementById('sr_type').value = req.type||'';
  document.getElementById('sr_desc').value = req.desc||'';
  const prioRb = document.querySelector('input[name="sr_priority"][value="'+(req.priority||'normal')+'"]');
  if(prioRb) prioRb.checked = true;
  updateSLAInfo();

  // احفظ معرف الطلب الأصلي للاستبدال
  document.getElementById('sr_type').dataset.resubmitId = reqId;

  showTab('new');
  // أظهر بانر يشرح للموظف أنه يعيد تقديم الطلب
  const nb = document.getElementById('resubmitNoticeBanner');
  if(nb){
    nb.classList.remove('hidden');
    document.getElementById('resubmitNoticeReason').textContent = req.revisionReason||'';
    document.getElementById('resubmitNoticeId').textContent = reqId;
  }
  showSRToast(SR_RTL?'جارٍ تعبئة بيانات الطلب السابق للتعديل...':'Loading previous request data for revision...','success');
}

function handleSRSubmit(){
  const resubmitId = document.getElementById('sr_type').dataset.resubmitId;
  if(resubmitId){ submitStaffResubmit(); }
  else { submitStaffRequest(); }
}

function submitStaffResubmit(){
  const type = document.getElementById('sr_type').value;
  const desc = document.getElementById('sr_desc').value.trim();
  const priority = document.querySelector('input[name="sr_priority"]:checked')?.value || 'normal';
  const origId = document.getElementById('sr_type').dataset.resubmitId;
  if(!type){ showSRToast(SR_RTL?'يرجى اختيار نوع الخدمة':'Please select a service type','error'); return; }
  if(!desc){ showSRToast(SR_RTL?'يرجى وصف طلبك':'Please describe your request','error'); return; }

  const reqs = getSRRequests();
  const idx = reqs.findIndex(r=>r.id===origId);
  if(idx===-1){ submitStaffRequest(); return; }

  const now = new Date().toISOString();
  reqs[idx].type = type;
  reqs[idx].desc = desc;
  reqs[idx].priority = priority;
  reqs[idx].status = 'open';
  reqs[idx].updatedAt = now;
  reqs[idx].submittedAt = now;
  reqs[idx].slaDue = addDaysSR(now, SR_SLA[type]||3);
  delete reqs[idx].revisionReason;
  delete reqs[idx].returnedAt;
  saveSRRequests(reqs);

  // رسالة في الدردشة
  const chats = getSRChats();
  if(!chats[origId]) chats[origId]=[];
  chats[origId].push({
    from:'emp',
    text: SR_RTL?'تم إعادة تقديم الطلب بعد التعديل.':'Request resubmitted after revision.',
    time: now, read: false
  });
  saveSRChats(chats);

  // إشعار فوري لصفحة SLA
  try {
    const bc2 = new BroadcastChannel('qu_payroll_sync');
    bc2.postMessage({ type: 'new_staff_request', id: origId });
    bc2.close();
  } catch(e) {}

  // مسح معرف الإعادة
  delete document.getElementById('sr_type').dataset.resubmitId;
  const nb = document.getElementById('resubmitNoticeBanner');
  if(nb) nb.classList.add('hidden');

  showInvoiceSR(origId);
  showTab('my');
  showSRToast(SR_RTL?'تم إعادة تقديم الطلب بنجاح':'Request resubmitted successfully','success');
}

function showSRToast(msg, type='success'){
  const t=document.createElement('div');
  t.className='fixed top-6 ${isRTL?'left-6':'right-6'} z-[100] px-5 py-3 rounded-xl shadow-xl text-sm font-bold text-white flex items-center gap-2';
  t.style.background=type==='error'?'#EF4444':'#10B981';
  t.innerHTML='<i class="fas fa-'+(type==='error'?'times-circle':'check-circle')+'"></i>'+msg;
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),3000);
}
</script>`

  return c.html(staffLayout(pageTitle, content, 'request', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  404
// ─────────────────────────────────────────────────────────────────────────────
app.notFound((c) => {
  const lang = getLang(c)
  return c.redirect(`/?lang=${lang}`, 302)
})

// ── THEME PREVIEW (no auth needed) ──
app.get('/theme-preview', (c) => {
  return c.html(`<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Theme Preview</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
<script src="https://cdn.tailwindcss.com"></script>
<style>
@keyframes th-slidein{from{opacity:0;transform:translateY(-18px)}to{opacity:1;transform:translateY(0)}}
@keyframes th-float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-9px) rotate(2deg)}}
@keyframes th-ticker{0%{transform:translateX(110%)}100%{transform:translateX(-110%)}}
@keyframes th-confetti{0%{transform:translateY(-10px) rotate(0deg);opacity:1}100%{transform:translateY(140px) rotate(720deg);opacity:0}}
@keyframes th-glow-nd{0%,100%{box-shadow:0 0 18px #8B1A2F66,0 4px 32px #00000044}50%{box-shadow:0 0 40px #C41E3ABB,0 4px 48px #00000066}}
.th-ticker-wrap{overflow:hidden;white-space:nowrap}
.th-ticker-inner{display:inline-block;animation:th-ticker 22s linear infinite}
.th-particle{position:absolute;pointer-events:none;font-size:1.4rem;animation:th-confetti 3.5s ease-in forwards;z-index:1}
#banner{animation:th-slidein .65s cubic-bezier(.22,.68,0,1.2) both,th-glow-nd 2.5s ease-in-out infinite}
</style>
</head>
<body class="bg-gray-900 min-h-screen flex flex-col items-center justify-start p-6 gap-6">
  <h1 class="text-white text-2xl font-bold mt-4">🎨 معاينة الثيمات</h1>

  <!-- NATIONAL DAY BANNER -->
  <div id="banner" class="w-full max-w-2xl relative rounded-2xl overflow-hidden" style="min-height:155px;background:linear-gradient(135deg,#8B1A2F 0%,#6B0A22 40%,#1a1a2e 100%)">
    <div style="position:relative;z-index:2;padding:22px 24px 14px;display:flex;flex-direction:column;gap:4px">
      <div style="font-size:clamp(1.35rem,3vw,1.75rem);font-weight:800;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.4);animation:th-float 3.5s ease-in-out infinite;display:inline-block">🇶🇦 كل عام وقطر بخير</div>
      <div style="font-size:.88rem;color:rgba(255,255,255,.8);margin-top:2px">اليوم الوطني القطري — ١٨ ديسمبر</div>
      <div style="font-size:.78rem;color:rgba(255,255,255,.6);margin-top:4px">يوم الوحدة الوطنية القطرية • عيد الاستقلال</div>
    </div>
    <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.25);padding:7px 0;overflow:hidden;z-index:3">
      <div class="th-ticker-wrap">
        <span class="th-ticker-inner" style="color:rgba(255,255,255,.9);font-size:.8rem;letter-spacing:.03em">🇶🇦 يوم المجد والعطاء • تحيا قطر • دولة قطر تحتفل باليوم الوطني • ١٨ ديسمبر يوم العز والكرامة • الله يحفظ قطر وقيادتها الرشيدة 🇶🇦</span>
      </div>
    </div>
  </div>

  <!-- QUICK THEME BUTTONS -->
  <div class="flex flex-wrap gap-2 justify-center">
    <button onclick="setTheme('national')"  class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#8B1A2F">🇶🇦 اليوم الوطني</button>
    <button onclick="setTheme('eid_fitr')"  class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#064E3B">🌙 عيد الفطر</button>
    <button onclick="setTheme('eid_adha')"  class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#1E3A5F">🕌 عيد الأضحى</button>
    <button onclick="setTheme('ramadan')"   class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#312E81">🌙 رمضان</button>
    <button onclick="setTheme('spring')"    class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#166534">🌸 الربيع</button>
    <button onclick="setTheme('summer')"    class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#C2410C">☀️ الصيف</button>
    <button onclick="setTheme('autumn')"    class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#92400E">🍂 الخريف</button>
    <button onclick="setTheme('winter')"    class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#1E3A5F">❄️ الشتاء</button>
    <button onclick="setTheme('new_year')"  class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#5B21B6">🎆 رأس السنة</button>
    <button onclick="setTheme('sport_day')" class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#0F766E">🏅 اليوم الرياضي</button>
    <button onclick="setTheme('mawlid')"    class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#14532D">🌿 المولد النبوي</button>
    <button onclick="setTheme('hijri_new')" class="px-4 py-2 rounded-xl text-sm font-bold text-white" style="background:#4C1D95">🌙 رأس السنة الهجرية</button>
  </div>

  <p class="text-gray-400 text-sm">على الصفحات الفعلية: سجّل دخول ثم اضغط زر 🎨 Theme</p>

<script>
const THEMES = {
  national:  {bg:'linear-gradient(135deg,#8B1A2F 0%,#6B0A22 40%,#1a1a2e 100%)', glow:'th-glow-nd',
               title:'🇶🇦 كل عام وقطر بخير', sub:'اليوم الوطني القطري — ١٨ ديسمبر',
               ticker:'🇶🇦 يوم المجد والعطاء • تحيا قطر • ١٨ ديسمبر يوم العز والكرامة • الله يحفظ قطر وقيادتها 🇶🇦',
               p:['🇶🇦','⭐','✨','🌟','🎊','🎉','🏅','💫'], c:['#C41E3A','#F0C040','#fff','#FFD700']},
  eid_fitr:  {bg:'linear-gradient(135deg,#064E3B 0%,#065F46 45%,#0D2B1F 100%)', glow:'th-glow-eid',
               title:'🌙 عيد الفطر المبارك', sub:'كل عام وأنتم بخير • تقبّل الله صيامكم',
               ticker:'🌙 عيد الفطر المبارك • تقبّل الله منا ومنكم • كل عام وأنتم بخير 🌙',
               p:['🌙','⭐','✨','🌟','🎊','💚','🕌','🤲'], c:['#10B981','#34D399','#F0C040','#fff']},
  eid_adha:  {bg:'linear-gradient(135deg,#1E3A5F 0%,#1a4a7a 45%,#0f1f36 100%)', glow:'th-glow-eid',
               title:'🕌 عيد الأضحى المبارك', sub:'كل عام وأنتم بخير • تقبّل الله طاعتكم',
               ticker:'🕌 عيد الأضحى المبارك • تقبّل الله منا ومنكم صالح الأعمال 🕌',
               p:['🕌','🌙','⭐','✨','💙','🤲','🌟','🎊'], c:['#3B82F6','#60A5FA','#F0C040','#fff']},
  ramadan:   {bg:'linear-gradient(135deg,#1E1B4B 0%,#312E81 45%,#0D0B2E 100%)', glow:'th-glow-ram',
               title:'🌙 رمضان كريم', sub:'شهر الخير والبركة والعبادة',
               ticker:'🌙 رمضان كريم • شهر القرآن والخير • تقبّل الله صيامكم وقيامكم 🌙',
               p:['🌙','⭐','✨','🌟','🕌','🤲','💜','🌙'], c:['#6366F1','#818CF8','#F0C040','#fff']},
  spring:    {bg:'linear-gradient(135deg,#166534 0%,#15803D 45%,#052e16 100%)', glow:'th-glow-spr',
               title:'🌸 مرحباً بالربيع', sub:'فصل الأزهار والجمال',
               ticker:'🌸 مرحباً بالربيع • فصل الأزهار والأمل • طبيعة جميلة وأجواء رائعة 🌸',
               p:['🌸','🌺','🌷','🌻','🍀','🌿','💐','🌱'], c:['#22C55E','#4ADE80','#FDE68A','#fff']},
  summer:    {bg:'linear-gradient(135deg,#7C2D12 0%,#C2410C 45%,#431407 100%)', glow:'th-glow-sum',
               title:'☀️ أهلاً بالصيف', sub:'فصل الحرارة والإجازات',
               ticker:'☀️ أهلاً بالصيف • أجواء حارة ومليئة بالنشاط • استمتع بإجازتك 🏖️',
               p:['☀️','🌊','🏖️','🌴','🍉','⭐','🌟','🔆'], c:['#F97316','#FB923C','#FDE68A','#fff']},
  autumn:    {bg:'linear-gradient(135deg,#78350F 0%,#92400E 45%,#2D1500 100%)', glow:'th-glow-aut',
               title:'🍂 مرحباً بالخريف', sub:'فصل الألوان الدافئة',
               ticker:'🍂 مرحباً بالخريف • ألوان الطبيعة الدافئة • فصل الهدوء والتأمل 🍁',
               p:['🍂','🍁','🌰','🎃','🍄','🌾','🦊','🍎'], c:['#D97706','#F59E0B','#DC2626','#fff']},
  winter:    {bg:'linear-gradient(135deg,#1E3A5F 0%,#1e40af 45%,#0A1628 100%)', glow:'th-glow-win',
               title:'❄️ مرحباً بالشتاء', sub:'فصل البرودة والهدوء',
               ticker:'❄️ مرحباً بالشتاء • أجواء باردة ومنعشة • استمتع بدفء المنزل والعائلة ⛄',
               p:['❄️','⛄','🌨️','💙','🌟','✨','🎿','🏔️'], c:['#3B82F6','#93C5FD','#fff','#BFDBFE']},
  new_year:  {bg:'linear-gradient(135deg,#4C1D95 0%,#5B21B6 45%,#1A0533 100%)', glow:'th-glow-nd',
               title:'🎆 كل عام وأنتم بخير', sub:'عام جديد مليء بالخير والبركة',
               ticker:'🎆 كل عام وأنتم بخير • عام جديد سعيد • أتمنى لكم عاماً مليئاً بالنجاح والسعادة 🎇',
               p:['🎆','🎇','✨','🌟','🎊','🎉','💫','⭐'], c:['#8B5CF6','#A78BFA','#F0C040','#fff']},
  sport_day: {bg:'linear-gradient(135deg,#134E4A 0%,#0F766E 45%,#042F2E 100%)', glow:'th-glow-nb',
               title:'🏅 اليوم الرياضي الوطني', sub:'قطر تحتفل بالرياضة والصحة',
               ticker:'🏅 اليوم الرياضي الوطني • الرياضة صحة وحيوية • قطر نشيطة وبطلة 🏆',
               p:['🏅','🏆','⚽','🏃','💪','🌟','🎯','🥇'], c:['#14B8A6','#2DD4BF','#F0C040','#fff']},
  mawlid:    {bg:'linear-gradient(135deg,#14532D 0%,#166534 45%,#052E16 100%)', glow:'th-glow-nb',
               title:'🌿 المولد النبوي الشريف', sub:'ذكرى مولد سيد الخلق ﷺ',
               ticker:'🌿 المولد النبوي الشريف • اللهم صلّ وسلّم على سيدنا محمد ﷺ • كل عام وأنتم بخير 🌿',
               p:['🌿','🌙','⭐','✨','💚','🕌','🤲','📿'], c:['#22C55E','#4ADE80','#F0C040','#fff']},
  hijri_new: {bg:'linear-gradient(135deg,#4C1D95 0%,#6D28D9 45%,#1E0A3C 100%)', glow:'th-glow-ram',
               title:'🌙 رأس السنة الهجرية', sub:'عام هجري جديد مبارك',
               ticker:'🌙 رأس السنة الهجرية • عام هجري جديد مبارك • أعاده الله علينا باليُمن والبركات 🌙',
               p:['🌙','⭐','✨','🌟','💜','🕌','🤲','📿'], c:['#7C3AED','#A78BFA','#F0C040','#fff']},
};

const GLOWS = {
  'th-glow-nd':  '0 0 40px #C41E3ABB,0 4px 48px #00000066',
  'th-glow-eid': '0 0 40px #10B981BB,0 4px 48px #00000066',
  'th-glow-ram': '0 0 40px #6366F1BB,0 4px 48px #00000066',
  'th-glow-spr': '0 0 40px #22C55E99,0 4px 48px #00000055',
  'th-glow-sum': '0 0 40px #F9731688,0 4px 48px #00000066',
  'th-glow-aut': '0 0 40px #B4540077,0 4px 48px #00000066',
  'th-glow-win': '0 0 40px #2563EB88,0 4px 48px #00000066',
  'th-glow-nb':  '0 0 40px #16A34A88,0 4px 48px #00000066',
};

function spawnParticles(wrap, particles, colors){
  for(var i=0;i<7;i++){
    (function(i){
      setTimeout(function(){
        var el=document.createElement('span');
        el.className='th-particle';
        el.textContent=particles[Math.floor(Math.random()*particles.length)];
        el.style.left=Math.random()*90+'%';
        el.style.top='-10px';
        el.style.animationDuration=(2.5+Math.random()*2)+'s';
        el.style.animationDelay=(Math.random()*.5)+'s';
        el.style.color=colors[Math.floor(Math.random()*colors.length)];
        wrap.appendChild(el);
        setTimeout(function(){el.remove()},4500);
      },i*220);
    })(i);
  }
}

function setTheme(id){
  var th=THEMES[id];
  if(!th) return;
  var b=document.getElementById('banner');
  b.style.background=th.bg;
  b.style.boxShadow=GLOWS[th.glow]||'';
  b.style.animation='th-slidein .65s cubic-bezier(.22,.68,0,1.2) both';
  b.innerHTML=
    '<div style="position:relative;z-index:2;padding:22px 24px 14px;display:flex;flex-direction:column;gap:4px">'
    +'<div style="font-size:clamp(1.35rem,3vw,1.75rem);font-weight:800;color:#fff;text-shadow:0 2px 12px rgba(0,0,0,.4);animation:th-float 3.5s ease-in-out infinite;display:inline-block">'+th.title+'</div>'
    +'<div style="font-size:.88rem;color:rgba(255,255,255,.8);margin-top:2px">'+th.sub+'</div>'
    +'</div>'
    +'<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.25);padding:7px 0;overflow:hidden;z-index:3">'
    +'<div class="th-ticker-wrap"><span class="th-ticker-inner" style="color:rgba(255,255,255,.9);font-size:.8rem;letter-spacing:.03em">'+th.ticker+'</span>'
    +'</div></div>';
  (function loop(){ spawnParticles(b,th.p,th.c); setTimeout(loop,5600); })();
}
</script>
</body>
</html>`)
})

// ─────────────────────────────────────────────────────────────────────────────
//  PAYROLL DEPARTMENT PAGE  /payroll-dept
// ─────────────────────────────────────────────────────────────────────────────
app.get('/payroll-dept', (c) => {
  const lang: Lang = (c.req.query('lang') === 'en' ? 'en' : 'ar') as Lang
  const isRTL = lang === 'ar'
  const t = T[lang]

  const pageHTML = `
<!-- ══════════════════════════════════════════
     صفحة قسم الرواتب – Payroll Department
══════════════════════════════════════════ -->

<!-- Hero -->
<div class="relative overflow-hidden rounded-2xl mb-8" style="background:linear-gradient(135deg,#8B1A2F 0%,#6B1422 40%,#1e3a5f 100%)">
  <div class="absolute inset-0 opacity-10" style="background-image:url('data:image/svg+xml,<svg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'><g fill=\'none\' fill-rule=\'evenodd\'><g fill=\'%23ffffff\' fill-opacity=\'1\'><path d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/></g></g></svg>')"></div>
  <div class="relative px-8 py-10 flex flex-col md:flex-row items-start md:items-center gap-6">
    <div class="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl" style="background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.3)">
      <i class="fas fa-building-columns text-4xl text-white"></i>
    </div>
    <div class="${isRTL?'text-right':''}">
      <div class="flex items-center gap-3 mb-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <span class="text-xs font-bold px-3 py-1 rounded-full" style="background:rgba(255,255,255,0.2);color:#fff">${isRTL?'جامعة قطر':'Qatar University'}</span>
        <span class="text-xs font-bold px-3 py-1 rounded-full" style="background:rgba(197,160,60,0.35);color:#F5D68A">${isRTL?'إدارة الموارد البشرية':'Human Resources'}</span>
      </div>
      <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-2">${isRTL?'قسم الرواتب':'Payroll Department'}</h1>
      <p class="text-white/75 text-base max-w-2xl">${isRTL?'مرجعكم الشامل لجميع خدمات الرواتب والمزايا المالية لموظفي جامعة قطر — أحكام، إجراءات، فريق العمل، وقنوات التواصل.':'Your complete reference for all payroll and financial benefits services at Qatar University — policies, procedures, team, and contact channels.'}</p>
    </div>
  </div>
  <!-- Stats bar -->
  <div class="grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
    ${[
      {n: isRTL?'4,200+':'4,200+', l: isRTL?'موظف مخدوم':'Employees Served', ic:'fa-users'},
      {n: isRTL?'12':'12',         l: isRTL?'نوع خدمة':'Service Types',     ic:'fa-layer-group'},
      {n: isRTL?'4 ساعات':'4 hrs', l: isRTL?'متوسط الاستجابة':'Avg. Response', ic:'fa-clock'},
      {n: isRTL?'7:30–3:30':'7:30–3:30', l: isRTL?'ساعات العمل':'Working Hours', ic:'fa-calendar-check'},
    ].map(s=>`
    <div class="px-6 py-4 ${isRTL?'text-right':''}">
      <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas ${s.ic} text-white/50 text-xs"></i>
        <p class="text-2xl font-extrabold text-white">${s.n}</p>
      </div>
      <p class="text-white/55 text-xs mt-0.5">${s.l}</p>
    </div>`).join('')}
  </div>
</div>

<!-- Tabs -->
<div class="flex gap-2 flex-wrap mb-6" id="pdTabs">
  ${[
    {id:'overview',  ic:'fa-th-large',         ar:'نظرة عامة',           en:'Overview'},
    {id:'services',  ic:'fa-concierge-bell',   ar:'الخدمات',             en:'Services'},
    {id:'team',      ic:'fa-users-gear',        ar:'فريق العمل',          en:'Our Team'},
    {id:'policies',  ic:'fa-book-open',         ar:'السياسات والأنظمة',   en:'Policies'},
    {id:'calendar',  ic:'fa-calendar-alt',      ar:'مواعيد الرواتب',      en:'Pay Calendar'},
    {id:'contact',   ic:'fa-headset',           ar:'تواصل معنا',          en:'Contact'},
  ].map((tb,i)=>`
  <button onclick="pdShowTab('${tb.id}')" id="pdTab-${tb.id}"
    class="pd-tab flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all border ${i===0?'active-tab':'border-gray-200 text-gray-500 hover:border-maroon hover:text-maroon bg-white'}"
    style="${i===0?'background:var(--qu-maroon);color:#fff;border-color:var(--qu-maroon)':''}">
    <i class="fas ${tb.ic}"></i>
    ${isRTL?tb.ar:tb.en}
  </button>`).join('')}
</div>

<!-- ── TAB: Overview ── -->
<div id="pdPanel-overview" class="pd-panel">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
    <!-- رسالة القسم -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div class="flex items-center gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:#FEF2F2"><i class="fas fa-bullseye text-red-700"></i></div>
        <h3 class="font-bold text-gray-800">${isRTL?'رسالتنا':'Our Mission'}</h3>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed ${isRTL?'text-right':''}">${isRTL?'نسعى في قسم الرواتب إلى تقديم خدمات مالية دقيقة وشفافة لجميع موظفي جامعة قطر، من خلال فريق متخصص يعمل وفق أعلى معايير الجودة والامتثال للوائح والأنظمة المعمول بها في الدولة.':'The Payroll Department is committed to delivering accurate, transparent, and timely financial services to all Qatar University staff, upholding the highest standards of quality and regulatory compliance.'}</p>
    </div>
    <!-- رؤية القسم -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div class="flex items-center gap-3 mb-4 ${isRTL?'flex-row-reverse':''}">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center" style="background:#EFF6FF"><i class="fas fa-eye text-blue-700"></i></div>
        <h3 class="font-bold text-gray-800">${isRTL?'رؤيتنا':'Our Vision'}</h3>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed ${isRTL?'text-right':''}">${isRTL?'أن نكون قسم الرواتب الأكثر احترافيةً وكفاءةً في المؤسسات الأكاديمية الخليجية، مستخدمين أحدث الأنظمة المالية لضمان حقوق الموظفين وتطوير تجربتهم المالية.':'To be the most professional and efficient payroll unit among Gulf academic institutions, leveraging modern financial systems to safeguard employee rights and enhance their financial experience.'}</p>
    </div>
  </div>

  <!-- الخدمات السريعة -->
  <h3 class="font-bold text-gray-700 mb-4 text-lg ${isRTL?'text-right':''}">${isRTL?'خدماتنا الرئيسية':'Main Services'}</h3>
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
    ${[
      {ic:'fa-file-invoice-dollar', bg:'#EFF6FF', cl:'#1D4ED8', ar:'قسيمة الراتب',         en:'Payslip',              href:'/forms'},
      {ic:'fa-hand-holding-usd',   bg:'#F0FDF4', cl:'#15803D', ar:'بدلات ومزايا',          en:'Allowances',           href:'/allowances'},
      {ic:'fa-plane-departure',    bg:'#FDF4FF', cl:'#7C3AED', ar:'مهام رسمية',             en:'Official Missions',    href:'/missions'},
      {ic:'fa-person-walking-arrow-right',bg:'#FFF7ED',cl:'#C2410C',ar:'مكافأة نهاية الخدمة',en:'End of Service',     href:'/end-of-service'},
      {ic:'fa-ranking-star',       bg:'#F0FDF4', cl:'#15803D', ar:'الترقيات الإدارية',      en:'Promotions',           href:'/promotions'},
      {ic:'fa-graduation-cap',     bg:'#FEF9C3', cl:'#A16207', ar:'الابتعاث',               en:'Scholarship',          href:'/scholarship'},
      {ic:'fa-envelope-open-text', bg:'#FEF2F2', cl:'#991B1B', ar:'قوالب المراسلات',        en:'Email Templates',      href:'/email-templates'},
      {ic:'fa-chart-gantt',        bg:'#F0F9FF', cl:'#0369A1', ar:'إدارة SLA',              en:'SLA Management',       href:'/sla'},
    ].map(s=>`
    <a href="${s.href}?lang=${lang}" class="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-all group text-center">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform" style="background:${s.bg}">
        <i class="fas ${s.ic} text-xl" style="color:${s.cl}"></i>
      </div>
      <span class="text-xs font-bold text-gray-700">${isRTL?s.ar:s.en}</span>
    </a>`).join('')}
  </div>

  <!-- إعلان / تنبيه -->
  <div class="rounded-2xl p-5 flex items-start gap-4 ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,#FFFBEB,#FEF9C3);border:1px solid #FDE68A">
    <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style="background:#FDE68A"><i class="fas fa-bullhorn text-yellow-700"></i></div>
    <div class="${isRTL?'text-right':''}">
      <p class="font-bold text-yellow-800 mb-1">${isRTL?'تنبيه: مواعيد صرف رواتب شهر يونيو 2025':'Notice: June 2025 Salary Payment Dates'}</p>
      <p class="text-yellow-700 text-sm">${isRTL?'سيتم صرف رواتب شهر يونيو 2025 بتاريخ الأربعاء 25 يونيو 2025. يُرجى التأكد من صحة بياناتكم البنكية قبل 15 يونيو.':'June 2025 salaries will be disbursed on Wednesday, June 25, 2025. Please verify your bank details before June 15.'}</p>
    </div>
  </div>
</div>

<!-- ── TAB: Services ── -->
<div id="pdPanel-services" class="pd-panel hidden">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    ${[
      {
        ic:'fa-file-invoice-dollar', bg:'#EFF6FF', cl:'#1D4ED8', brd:'#BFDBFE',
        ar_t:'قسيمة الراتب الشهرية', en_t:'Monthly Payslip',
        ar_d:'استلام نسخة مفصّلة من راتبك الشهري تتضمن المكوّنات والخصومات والصافي.', en_d:'Receive a detailed monthly salary slip including all components, deductions, and net pay.',
        ar_steps:['تسجيل الدخول لبوابة الموظفين','الانتقال إلى النماذج والوثائق','تحديد قسيمة الراتب وتنزيلها'],
        en_steps:['Login to the Staff Portal','Navigate to Forms & Documents','Select and download your payslip'],
        sla:'24 hr', href:'/forms'
      },
      {
        ic:'fa-hand-holding-usd', bg:'#F0FDF4', cl:'#15803D', brd:'#BBF7D0',
        ar_t:'طلب بدل أو مزية', en_t:'Allowance / Benefit Request',
        ar_d:'تقديم طلب لأي من البدلات (سكن، مواصلات، اتصالات) أو المزايا المالية الأخرى.', en_d:'Submit requests for housing, transportation, telecom allowances, or any other financial benefits.',
        ar_steps:['تعبئة نموذج طلب البدل','رفع المستندات المطلوبة','متابعة الحالة عبر البوابة'],
        en_steps:['Fill the allowance request form','Upload required documents','Track status via the portal'],
        sla:'3 days', href:'/allowances'
      },
      {
        ic:'fa-plane-departure', bg:'#FDF4FF', cl:'#7C3AED', brd:'#E9D5FF',
        ar_t:'إدارة المهام الرسمية', en_t:'Official Mission Management',
        ar_d:'رفع وإدارة طلبات المهام الرسمية والعلمية مع حساب المستحقات المالية تلقائياً.', en_d:'Submit and manage official and academic mission requests with automatic financial entitlement calculation.',
        ar_steps:['فتح صفحة إدارة المهام','إضافة تفاصيل المهمة والوجهة','مراجعة المستحقات والاعتماد'],
        en_steps:['Open Mission Management page','Add mission details and destination','Review entitlements and approve'],
        sla:'2 days', href:'/missions'
      },
      {
        ic:'fa-person-walking-arrow-right', bg:'#FFF7ED', cl:'#C2410C', brd:'#FED7AA',
        ar_t:'احتساب مكافأة نهاية الخدمة', en_t:'End of Service Calculation',
        ar_d:'حساب تقديري شفاف لمكافأة نهاية الخدمة استناداً إلى قانون العمل القطري ومدة الخدمة.', en_d:'Transparent estimate of end-of-service gratuity based on Qatari Labor Law and years of service.',
        ar_steps:['إدخال بيانات التوظيف','اختيار سبب إنهاء الخدمة','الاطلاع على التقدير التفصيلي'],
        en_steps:['Enter employment data','Select termination reason','View detailed estimate'],
        sla:'Instant', href:'/end-of-service'
      },
      {
        ic:'fa-ranking-star', bg:'#F0FDF4', cl:'#15803D', brd:'#BBF7D0',
        ar_t:'الترقيات الإدارية', en_t:'Administrative Promotions',
        ar_d:'الاطلاع على شروط الترقية ومسارات التقدم الوظيفي وسلّم الرواتب المعتمد.', en_d:'View promotion criteria, career progression paths, and the approved salary scale.',
        ar_steps:['مراجعة شروط الترقية','التحقق من استيفاء المعايير','تقديم طلب الترقية'],
        en_steps:['Review promotion criteria','Verify eligibility','Submit promotion request'],
        sla:'5 days', href:'/promotions'
      },
      {
        ic:'fa-graduation-cap', bg:'#FEF9C3', cl:'#A16207', brd:'#FDE68A',
        ar_t:'برنامج الابتعاث', en_t:'Scholarship Program',
        ar_d:'تقديم طلبات الابتعاث الخارجي ومتابعة الدفعات المالية للمبتعثين.', en_d:'Submit external scholarship applications and track scholarship payment disbursements.',
        ar_steps:['قراءة شروط الابتعاث','تعبئة نموذج التقديم','متابعة حالة الطلب'],
        en_steps:['Read scholarship terms','Fill the application form','Track application status'],
        sla:'10 days', href:'/scholarship'
      },
    ].map(s=>`
    <div class="bg-white rounded-2xl border p-6 hover:shadow-md transition-all" style="border-color:${s.brd}">
      <div class="flex items-start gap-4 mb-4 ${isRTL?'flex-row-reverse':''}">
        <div class="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center" style="background:${s.bg}">
          <i class="fas ${s.ic} text-xl" style="color:${s.cl}"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <h4 class="font-bold text-gray-800 mb-1">${isRTL?s.ar_t:s.en_t}</h4>
          <p class="text-gray-500 text-xs leading-relaxed">${isRTL?s.ar_d:s.en_d}</p>
        </div>
      </div>
      <div class="border-t border-gray-50 pt-4">
        <p class="text-xs font-bold text-gray-400 mb-2 ${isRTL?'text-right':''}">${isRTL?'خطوات الخدمة:':'Service Steps:'}</p>
        <ol class="space-y-1.5 ${isRTL?'text-right':''}">
          ${(isRTL?s.ar_steps:s.en_steps).map((st,idx)=>`
          <li class="flex items-center gap-2 text-xs text-gray-600 ${isRTL?'flex-row-reverse':''}">
            <span class="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style="background:${s.cl};font-size:10px">${idx+1}</span>
            ${st}
          </li>`).join('')}
        </ol>
        <div class="flex items-center justify-between mt-4 ${isRTL?'flex-row-reverse':''}">
          <span class="text-xs text-gray-400"><i class="fas fa-clock mr-1"></i>${isRTL?'وقت الاستجابة: ':'Response time: '}<strong>${s.sla}</strong></span>
          <a href="${s.href}?lang=${lang}" class="text-xs font-bold px-3 py-1.5 rounded-lg text-white transition" style="background:${s.cl}">${isRTL?'انتقل للخدمة':'Go to Service'} <i class="fas fa-arrow-${isRTL?'left':'right'} ms-1"></i></a>
        </div>
      </div>
    </div>`).join('')}
  </div>
</div>

<!-- ── TAB: Team ── -->
<div id="pdPanel-team" class="pd-panel hidden">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    ${[
      {
        name_ar:'أ. خالد بن سعد الهاجري',  name_en:'Khalid Al-Hajri',
        role_ar:'رئيس قسم الرواتب',         role_en:'Head of Payroll Department',
        dept_ar:'الإدارة العليا',             dept_en:'Senior Management',
        email:'k.alhajri@qu.edu.qa', ext:'4100',
        avatar:'KH', bg:'#8B1A2F', spec_ar:'الإشراف العام، السياسات المالية', spec_en:'General Oversight, Financial Policies'
      },
      {
        name_ar:'أ. سارة محمد العمادي',    name_en:'Sara Al-Amadi',
        role_ar:'مشرفة رواتب أعضاء هيئة التدريس', role_en:'Faculty Payroll Supervisor',
        dept_ar:'رواتب الأكاديميين',          dept_en:'Academic Payroll',
        email:'s.alamadi@qu.edu.qa', ext:'4102',
        avatar:'SA', bg:'#1e3a5f', spec_ar:'رواتب أعضاء هيئة التدريس، العلاوات', spec_en:'Faculty Salaries, Academic Allowances'
      },
      {
        name_ar:'أ. محمد راشد الكواري',     name_en:'Mohammed Al-Kuwari',
        role_ar:'مشرف رواتب الموظفين الإداريين', role_en:'Admin Staff Payroll Supervisor',
        dept_ar:'رواتب الإداريين',            dept_en:'Administrative Payroll',
        email:'m.alkuwari@qu.edu.qa', ext:'4103',
        avatar:'MK', bg:'#15803D', spec_ar:'رواتب الكوادر الإدارية، الخصومات', spec_en:'Admin Staff Salaries, Deductions'
      },
      {
        name_ar:'أ. فاطمة يوسف النعيمي',   name_en:'Fatima Al-Nuaimi',
        role_ar:'أخصائية بدلات ومزايا',      role_en:'Allowances & Benefits Specialist',
        dept_ar:'المزايا المالية',            dept_en:'Financial Benefits',
        email:'f.alnuaimi@qu.edu.qa', ext:'4104',
        avatar:'FN', bg:'#7C3AED', spec_ar:'البدلات، المكافآت، الحوافز', spec_en:'Allowances, Bonuses, Incentives'
      },
      {
        name_ar:'أ. عبدالله ناصر الشمري',  name_en:'Abdullah Al-Shammari',
        role_ar:'أخصائي نهاية الخدمة والمعاشات', role_en:'EOS & Pensions Specialist',
        dept_ar:'نهاية الخدمة',              dept_en:'End of Service',
        email:'a.alshammari@qu.edu.qa', ext:'4105',
        avatar:'AS', bg:'#C2410C', spec_ar:'مكافآت نهاية الخدمة، التقاعد', spec_en:'Gratuity, Retirement Benefits'
      },
      {
        name_ar:'أ. نورة علي المناعي',      name_en:'Noura Al-Manaai',
        role_ar:'أخصائية المهام والسفريات',   role_en:'Missions & Travel Specialist',
        dept_ar:'المهام الرسمية',             dept_en:'Official Missions',
        email:'n.almanaai@qu.edu.qa', ext:'4106',
        avatar:'NM', bg:'#0369A1', spec_ar:'المهام الرسمية والعلمية، السفريات', spec_en:'Official & Academic Missions, Travel'
      },
    ].map(m=>`
    <div class="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md transition-all">
      <div class="flex items-start gap-4 ${isRTL?'flex-row-reverse':''}">
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md" style="background:${m.bg}">${m.avatar}</div>
        <div class="flex-1 ${isRTL?'text-right':''}">
          <h4 class="font-bold text-gray-800 text-sm">${isRTL?m.name_ar:m.name_en}</h4>
          <p class="text-xs font-semibold mb-1" style="color:${m.bg}">${isRTL?m.role_ar:m.role_en}</p>
          <span class="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">${isRTL?m.dept_ar:m.dept_en}</span>
        </div>
      </div>
      <div class="mt-4 pt-4 border-t border-gray-50 space-y-2">
        <p class="text-xs text-gray-500 ${isRTL?'text-right':''}"><i class="fas fa-star ms-0 me-1.5 text-yellow-400"></i>${isRTL?m.spec_ar:m.spec_en}</p>
        <div class="flex items-center gap-3 ${isRTL?'flex-row-reverse justify-end':''}">
          <a href="mailto:${m.email}" class="flex items-center gap-1.5 text-xs text-blue-600 hover:underline"><i class="fas fa-envelope"></i>${m.email}</a>
        </div>
        <p class="text-xs text-gray-400"><i class="fas fa-phone me-1.5"></i>${isRTL?'تحويلة: ':'Ext. '}${m.ext}</p>
      </div>
    </div>`).join('')}
  </div>

  <!-- ساعات العمل -->
  <div class="mt-6 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
    <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
      <i class="fas fa-clock" style="color:var(--qu-maroon)"></i>
      ${isRTL?'ساعات عمل القسم':'Department Working Hours'}
    </h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      ${[
        {d_ar:'الأحد – الخميس', d_en:'Sunday – Thursday', h:'7:30 AM – 3:30 PM', ic:'fa-sun', cl:'#D97706'},
        {d_ar:'الجمعة – السبت', d_en:'Friday – Saturday',  h:isRTL?'إجازة رسمية':'Official Holiday', ic:'fa-moon', cl:'#6B7280'},
        {d_ar:'المواعيد الخاصة', d_en:'Special Appointments', h:isRTL?'بالتنسيق المسبق':'By Prior Arrangement', ic:'fa-calendar-check', cl:'#1D4ED8'},
      ].map(d=>`
      <div class="flex items-center gap-3 p-4 rounded-xl ${isRTL?'flex-row-reverse':''}" style="background:#F9FAFB">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="background:#fff;border:1px solid #E5E7EB">
          <i class="fas ${d.ic}" style="color:${d.cl}"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <p class="text-xs font-bold text-gray-700">${isRTL?d.d_ar:d.d_en}</p>
          <p class="text-xs text-gray-500">${d.h}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</div>

<!-- ── TAB: Policies ── -->
<div id="pdPanel-policies" class="pd-panel hidden">
  <div class="space-y-4">
    ${[
      {
        ic:'fa-scale-balanced', bg:'#EFF6FF', cl:'#1D4ED8',
        ar_t:'سياسة الرواتب والمزايا', en_t:'Salary & Benefits Policy',
        ar_d:'تُحدَّد رواتب موظفي جامعة قطر وفقاً للوائح الموارد البشرية المعتمدة ونظام الدرجات والرتب الوظيفية. تشمل المنظومة الراتب الأساسي والبدلات القانونية والمكافآت السنوية.',
        en_d:'Qatar University staff salaries are determined per approved HR regulations and the grading system. The package includes basic salary, statutory allowances, and annual bonuses.',
        points_ar:['يُصرف الراتب في آخر يوم عمل من كل شهر','تُراجَع الرواتب سنوياً بناءً على تقييم الأداء','تخضع جميع المدفوعات للائحة المالية للجامعة'],
        points_en:['Salary is paid on the last working day of each month','Salaries are reviewed annually based on performance evaluations','All payments are subject to University Financial Regulations']
      },
      {
        ic:'fa-home', bg:'#F0FDF4', cl:'#15803D',
        ar_t:'سياسة بدل السكن', en_t:'Housing Allowance Policy',
        ar_d:'يُمنح بدل السكن للموظفين المؤهلين وفقاً لفئتهم الوظيفية وحالتهم الاجتماعية وشروط العقد.',
        en_d:'Housing allowance is granted to eligible employees based on their job grade, family status, and contract terms.',
        points_ar:['يُحسب البدل شهرياً ضمن الراتب','يستلزم تقديم عقد إيجار سنوي','يختلف المبلغ حسب الدرجة الوظيفية'],
        points_en:['Allowance is calculated monthly within the salary','Annual rental contract submission required','Amount varies by job grade']
      },
      {
        ic:'fa-car', bg:'#FFF7ED', cl:'#C2410C',
        ar_t:'سياسة بدل المواصلات', en_t:'Transportation Allowance Policy',
        ar_d:'يُمنح بدل المواصلات للموظفين غير المقيمين في سكن الجامعة.',
        en_d:'Transportation allowance is granted to employees not residing in university accommodation.',
        points_ar:['بدل ثابت يُضاف للراتب الشهري','لا يُصرف جزئياً في حالة الغياب المتكرر','يُستثنى الموظفون المقيمون في سكن الجامعة'],
        points_en:['Fixed allowance added to monthly salary','May be withheld in case of repeated absence','Employees in university housing are excluded']
      },
      {
        ic:'fa-shield-halved', bg:'#FDF4FF', cl:'#7C3AED',
        ar_t:'سياسة التأمين الطبي', en_t:'Medical Insurance Policy',
        ar_d:'يتمتع جميع الموظفين الدائمون ومعالوهم بتغطية طبية شاملة من خلال مزود التأمين المعتمد.',
        en_d:'All permanent employees and their dependents enjoy comprehensive medical coverage through the approved insurance provider.',
        points_ar:['تغطية شاملة للموظف والعائلة','لا توجد رسوم اشتراك على الموظف','يُجدَّد التأمين تلقائياً مع بداية كل سنة مالية'],
        points_en:['Full coverage for employee and family','No subscription fees for the employee','Insurance auto-renewed at the start of each fiscal year']
      },
      {
        ic:'fa-receipt', bg:'#F0F9FF', cl:'#0369A1',
        ar_t:'سياسة الخصومات والاستقطاعات', en_t:'Deductions Policy',
        ar_d:'تُطبَّق الخصومات وفقاً لقانون العمل القطري وأنظمة الجامعة الداخلية في حالات محددة.',
        en_d:'Deductions are applied per Qatari Labour Law and internal university regulations in specified cases.',
        points_ar:['خصومات الغياب بدون إذن حسب اللوائح','استقطاع السلف والقروض بالاتفاق','يوضَّح كل خصم بشكل مفصّل في قسيمة الراتب'],
        points_en:['Unauthorized absence deductions per regulations','Salary advances/loans deducted by agreement','Each deduction itemized in the payslip']
      },
    ].map(p=>`
    <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex items-center gap-4 p-5 ${isRTL?'flex-row-reverse':''}">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${p.bg}">
          <i class="fas ${p.ic} text-xl" style="color:${p.cl}"></i>
        </div>
        <div class="flex-1 ${isRTL?'text-right':''}">
          <h4 class="font-bold text-gray-800">${isRTL?p.ar_t:p.en_t}</h4>
          <p class="text-sm text-gray-500 mt-0.5">${isRTL?p.ar_d:p.en_d}</p>
        </div>
        <button onclick="this.closest('.bg-white').querySelector('.policy-body').classList.toggle('hidden')" class="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition flex-shrink-0">
          <i class="fas fa-chevron-down text-gray-400 text-sm"></i>
        </button>
      </div>
      <div class="policy-body hidden border-t border-gray-50 px-5 pb-5 pt-4">
        <ul class="space-y-2">
          ${(isRTL?p.points_ar:p.points_en).map(pt=>`
          <li class="flex items-start gap-2 text-sm text-gray-600 ${isRTL?'flex-row-reverse text-right':''}">
            <i class="fas fa-check-circle mt-0.5 flex-shrink-0" style="color:${p.cl}"></i>
            ${pt}
          </li>`).join('')}
        </ul>
      </div>
    </div>`).join('')}
  </div>
</div>

<!-- ── TAB: Pay Calendar ── -->
<div id="pdPanel-calendar" class="pd-panel hidden">
  <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
    <div class="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style="background:linear-gradient(135deg,#8B1A2F,#6B1422)">
      <h3 class="font-bold text-white flex items-center gap-2"><i class="fas fa-calendar-alt"></i> ${isRTL?'جدول صرف رواتب عام 2025':'2025 Salary Disbursement Schedule'}</h3>
      <span class="text-white/70 text-xs">${isRTL?'الرواتب تُصرف في آخر يوم عمل بالشهر':'Salaries paid on last working day of month'}</span>
    </div>
    <div class="overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr style="background:#F9FAFB">
            <th class="px-4 py-3 text-xs font-bold text-gray-500 ${isRTL?'text-right':'text-left'}">${isRTL?'الشهر':'Month'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 text-center">${isRTL?'تاريخ الصرف':'Payment Date'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 text-center">${isRTL?'اليوم':'Day'}</th>
            <th class="px-4 py-3 text-xs font-bold text-gray-500 text-center">${isRTL?'الحالة':'Status'}</th>
          </tr>
        </thead>
        <tbody>
          ${[
            {m_ar:'يناير 2025',   m_en:'January 2025',   d:'29 Jan 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:true},
            {m_ar:'فبراير 2025',  m_en:'February 2025',  d:'26 Feb 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:true},
            {m_ar:'مارس 2025',    m_en:'March 2025',     d:'27 Mar 2025',  day_ar:'الخميس',   day_en:'Thursday',  done:true},
            {m_ar:'أبريل 2025',   m_en:'April 2025',     d:'29 Apr 2025',  day_ar:'الثلاثاء', day_en:'Tuesday',   done:true},
            {m_ar:'مايو 2025',    m_en:'May 2025',       d:'28 May 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:true},
            {m_ar:'يونيو 2025',   m_en:'June 2025',      d:'25 Jun 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:false, current:true},
            {m_ar:'يوليو 2025',   m_en:'July 2025',      d:'30 Jul 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:false},
            {m_ar:'أغسطس 2025',  m_en:'August 2025',    d:'27 Aug 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:false},
            {m_ar:'سبتمبر 2025',  m_en:'September 2025', d:'29 Sep 2025',  day_ar:'الاثنين',  day_en:'Monday',    done:false},
            {m_ar:'أكتوبر 2025',  m_en:'October 2025',   d:'29 Oct 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:false},
            {m_ar:'نوفمبر 2025',  m_en:'November 2025',  d:'26 Nov 2025',  day_ar:'الأربعاء', day_en:'Wednesday', done:false},
            {m_ar:'ديسمبر 2025',  m_en:'December 2025',  d:'29 Dec 2025',  day_ar:'الاثنين',  day_en:'Monday',    done:false},
          ].map(r=>`
          <tr class="border-b border-gray-50 ${r.current?'bg-yellow-50':''} hover:bg-gray-50 transition">
            <td class="px-4 py-3 font-bold text-sm text-gray-800 ${isRTL?'text-right':''}">${isRTL?r.m_ar:r.m_en} ${r.current?`<span class="text-xs px-2 py-0.5 rounded-full font-bold ms-2" style="background:#FDE68A;color:#92400E">${isRTL?'الشهر الحالي':'Current'}</span>`:''}</td>
            <td class="px-4 py-3 text-sm text-gray-700 text-center font-mono">${r.d}</td>
            <td class="px-4 py-3 text-xs text-gray-500 text-center">${isRTL?r.day_ar:r.day_en}</td>
            <td class="px-4 py-3 text-center">
              ${r.done
                ? `<span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style="background:#DCFCE7;color:#15803D"><i class="fas fa-check-circle"></i>${isRTL?'صُرف':'Paid'}</span>`
                : r.current
                  ? `<span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style="background:#FEF9C3;color:#92400E"><i class="fas fa-hourglass-half"></i>${isRTL?'قادم':'Upcoming'}</span>`
                  : `<span class="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full" style="background:#F3F4F6;color:#6B7280"><i class="fas fa-clock"></i>${isRTL?'مجدول':'Scheduled'}</span>`
              }
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <!-- ملاحظات التقويم -->
  <div class="rounded-2xl p-5" style="background:#F0FDF4;border:1px solid #BBF7D0">
    <h4 class="font-bold text-green-800 mb-3 flex items-center gap-2"><i class="fas fa-info-circle"></i>${isRTL?'ملاحظات مهمة':'Important Notes'}</h4>
    <ul class="space-y-2">
      ${(isRTL?[
        'في حال صادف تاريخ الصرف عطلة رسمية، يُصرف الراتب في اليوم العمل السابق مباشرةً.',
        'رواتب شهر رمضان وأعياد الفطر والأضحى قد تُصرف مبكراً وفقاً لتعميم الجامعة.',
        'يُرجى التأكد من صحة تفاصيل حسابك البنكي قبل 10 أيام من موعد الصرف.',
      ]:[
        'If the payment date falls on a public holiday, salary will be paid on the immediately preceding working day.',
        'Ramadan, Eid Al-Fitr, and Eid Al-Adha salaries may be paid earlier per university circular.',
        'Please verify your bank account details at least 10 days before the payment date.',
      ]).map(n=>`
      <li class="flex items-start gap-2 text-sm text-green-700 ${isRTL?'flex-row-reverse text-right':''}">
        <i class="fas fa-check-circle mt-0.5 flex-shrink-0 text-green-500"></i>${n}
      </li>`).join('')}
    </ul>
  </div>
</div>

<!-- ── TAB: Contact ── -->
<div id="pdPanel-contact" class="pd-panel hidden">
  <!-- بطاقات التواصل -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
    ${[
      {
        ic:'fa-phone-volume', bg:'#EFF6FF', cl:'#1D4ED8', brd:'#BFDBFE',
        ar_t:'الهاتف المباشر', en_t:'Direct Phone',
        ar_v:'تحويلة 4100 / 4101', en_v:'Ext. 4100 / 4101',
        ar_h:'أحد–خميس: 7:30 ص – 3:30 م', en_h:'Sun–Thu: 7:30 AM – 3:30 PM',
        action:'tel:+97444974100', ar_btn:'اتصل الآن', en_btn:'Call Now'
      },
      {
        ic:'fa-envelope', bg:'#F0FDF4', cl:'#15803D', brd:'#BBF7D0',
        ar_t:'البريد الإلكتروني', en_t:'Email',
        ar_v:'payroll@qu.edu.qa', en_v:'payroll@qu.edu.qa',
        ar_h:'الرد خلال 4 ساعات عمل', en_h:'Response within 4 working hours',
        action:'mailto:payroll@qu.edu.qa', ar_btn:'أرسل إيميل', en_btn:'Send Email'
      },
      {
        ic:'fa-location-dot', bg:'#FDF4FF', cl:'#7C3AED', brd:'#E9D5FF',
        ar_t:'الموقع', en_t:'Location',
        ar_v:'مبنى الإدارة الرئيسي – الدور الثاني', en_v:'Main Admin Building – 2nd Floor',
        ar_h:'حرم جامعة قطر الرئيسي', en_h:'Qatar University Main Campus',
        action:'https://maps.google.com', ar_btn:'الخريطة', en_btn:'View Map'
      },
      {
        ic:'fa-concierge-bell', bg:'#FFF7ED', cl:'#C2410C', brd:'#FED7AA',
        ar_t:'طلب خدمة عبر البوابة', en_t:'Request via Portal',
        ar_v:'بوابة الموظفين – طلب خدمة', en_v:'Staff Portal – Request a Service',
        ar_h:'متاح 24/7 | استجابة خلال 2–4 ساعات', en_h:'Available 24/7 | 2–4 hour response',
        action:'/staff-request?lang='+lang, ar_btn:'قدّم طلبك', en_btn:'Submit Request'
      },
    ].map(c=>`
    <div class="bg-white rounded-2xl p-5 border hover:shadow-md transition-all" style="border-color:${c.brd}">
      <div class="flex items-start gap-4 mb-4 ${isRTL?'flex-row-reverse':''}">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${c.bg}">
          <i class="fas ${c.ic} text-xl" style="color:${c.cl}"></i>
        </div>
        <div class="${isRTL?'text-right':''}">
          <h4 class="font-bold text-gray-800 text-sm mb-1">${isRTL?c.ar_t:c.en_t}</h4>
          <p class="font-mono text-sm font-bold" style="color:${c.cl}">${isRTL?c.ar_v:c.en_v}</p>
          <p class="text-xs text-gray-400 mt-0.5">${isRTL?c.ar_h:c.en_h}</p>
        </div>
      </div>
      <a href="${c.action}" class="flex items-center justify-center gap-2 w-full py-2 rounded-xl text-sm font-bold text-white transition hover:opacity-90" style="background:${c.cl}">
        <i class="fas ${c.ic}"></i> ${isRTL?c.ar_btn:c.en_btn}
      </a>
    </div>`).join('')}
  </div>

  <!-- نموذج تواصل سريع -->
  <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
    <h3 class="font-bold text-gray-800 mb-5 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
      <i class="fas fa-paper-plane" style="color:var(--qu-maroon)"></i>
      ${isRTL?'راسلنا مباشرة':'Send Us a Direct Message'}
    </h3>
    <form onsubmit="pdSendMsg(event)" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'الاسم الكامل':'Full Name'} <span class="text-red-500">*</span></label>
          <input id="pdName" type="text" required class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${isRTL?'text-right':''}" style="--tw-ring-color:var(--qu-maroon)" placeholder="${isRTL?'أدخل اسمك الكامل':'Enter your full name'}">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'الرقم الوظيفي':'Employee ID'} <span class="text-red-500">*</span></label>
          <input id="pdEmpId" type="text" required class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${isRTL?'text-right':''}" placeholder="${isRTL?'مثال: QU-2023-0001':'e.g. QU-2023-0001'}">
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'البريد الإلكتروني':'Email'} <span class="text-red-500">*</span></label>
          <input id="pdEmail" type="email" required class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${isRTL?'text-right':''}" placeholder="name@qu.edu.qa">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'موضوع الاستفسار':'Subject'} <span class="text-red-500">*</span></label>
          <select id="pdSubject" required class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 ${isRTL?'text-right':''}">
            <option value="">${isRTL?'-- اختر الموضوع --':'-- Select Subject --'}</option>
            <option>${isRTL?'استفسار عن الراتب':'Salary Inquiry'}</option>
            <option>${isRTL?'بدلات ومزايا':'Allowances & Benefits'}</option>
            <option>${isRTL?'قسيمة الراتب':'Payslip'}</option>
            <option>${isRTL?'مهمة رسمية':'Official Mission'}</option>
            <option>${isRTL?'نهاية الخدمة':'End of Service'}</option>
            <option>${isRTL?'أخرى':'Other'}</option>
          </select>
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-gray-600 mb-1.5 ${isRTL?'text-right':''}">${isRTL?'تفاصيل الاستفسار':'Message Details'} <span class="text-red-500">*</span></label>
        <textarea id="pdMsg" required rows="4" class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 resize-none ${isRTL?'text-right':''}" placeholder="${isRTL?'اكتب استفسارك هنا...':'Write your inquiry here...'}"></textarea>
      </div>
      <button type="submit" class="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-bold text-sm hover:opacity-90 transition" style="background:var(--qu-maroon)">
        <i class="fas fa-paper-plane"></i>
        ${isRTL?'إرسال الاستفسار':'Send Inquiry'}
      </button>
    </form>
  </div>
</div>

<!-- Toast -->
<div id="pdToast" class="fixed bottom-6 ${isRTL?'left-6':'right-6'} z-50 hidden">
  <div class="flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-white font-bold text-sm" style="background:#15803D">
    <i class="fas fa-check-circle text-lg"></i>
    <span id="pdToastMsg"></span>
  </div>
</div>

<script>
// Tabs
function pdShowTab(id){
  document.querySelectorAll('.pd-panel').forEach(p=>p.classList.add('hidden'));
  document.querySelectorAll('.pd-tab').forEach(b=>{
    b.style.background=''; b.style.color=''; b.style.borderColor='';
    b.classList.remove('active-tab');
    b.classList.add('border-gray-200','text-gray-500');
  });
  document.getElementById('pdPanel-'+id).classList.remove('hidden');
  var btn=document.getElementById('pdTab-'+id);
  btn.style.background='var(--qu-maroon)'; btn.style.color='#fff'; btn.style.borderColor='var(--qu-maroon)';
  btn.classList.remove('border-gray-200','text-gray-500');
}

// Contact form
function pdSendMsg(e){
  e.preventDefault();
  var n=document.getElementById('pdName').value;
  var ei=document.getElementById('pdEmpId').value;
  var em=document.getElementById('pdEmail').value;
  var s=document.getElementById('pdSubject').value;
  var m=document.getElementById('pdMsg').value;
  if(!n||!ei||!em||!s||!m){ pdToast('${isRTL?'يُرجى تعبئة جميع الحقول المطلوبة':'Please fill all required fields'}','#DC2626'); return; }
  pdToast('${isRTL?'تم إرسال استفسارك بنجاح! سيتم التواصل معك خلال 4 ساعات عمل.':'Your inquiry was sent successfully! We will contact you within 4 working hours.'}','#15803D');
  e.target.reset();
}

function pdToast(msg,color){
  var t=document.getElementById('pdToast');
  document.getElementById('pdToastMsg').textContent=msg;
  t.firstElementChild.style.background=color;
  t.classList.remove('hidden');
  setTimeout(function(){ t.classList.add('hidden'); }, 4000);
}
</script>
`

  return c.html(layout(
    isRTL ? 'قسم الرواتب – جامعة قطر' : 'Payroll Department – Qatar University',
    pageHTML,
    'payroll-dept',
    lang
  ))
})


// ─────────────────────────────────────────────────────────────────────────────
//  APPROVALS PAGE  /approvals
// ─────────────────────────────────────────────────────────────────────────────
app.get('/approvals', (c) => {
  const lang: Lang = (c.req.query('lang') === 'en' ? 'en' : 'ar') as Lang
  const isRTL = lang === 'ar'

  const pageHTML = `
<!-- ══ APPROVALS PAGE ══════════════════════════════════════════ -->

<!-- Hero Banner -->
<div class="relative overflow-hidden rounded-2xl mb-8" style="background:linear-gradient(135deg,#1e3a5f 0%,#0f2440 55%,#7B1228 100%)">
  <div class="absolute inset-0 opacity-5" style="background-image:url('data:image/svg+xml,<svg width=80 height=80 xmlns=http://www.w3.org/2000/svg><circle cx=40 cy=40 r=38 stroke=white stroke-width=1 fill=none/><line x1=0 y1=40 x2=80 y2=40 stroke=white stroke-width=.4/><line x1=40 y1=0 x2=40 y2=80 stroke=white stroke-width=.4/></svg>');background-size:80px"></div>
  <div class="relative px-6 py-8 md:px-10 md:py-10">
    <div class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
      <div class="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center flex-shrink-0" style="background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.25)">
        <i class="fas fa-stamp text-3xl md:text-4xl text-white"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <div class="flex flex-wrap items-center gap-2 mb-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <span class="text-xs font-bold px-3 py-1 rounded-full" style="background:rgba(255,255,255,.15);color:#fff">${isRTL?'جامعة قطر – إدارة الرواتب':'Qatar University – Payroll'}</span>
          <span class="text-xs font-bold px-3 py-1 rounded-full" style="background:rgba(197,160,60,.3);color:#F5D68A"><i class="fas fa-crown me-1"></i>${isRTL?'مدير الإدارة':'Admin Director'}</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-1">${isRTL?'الموافقات والاعتمادات':'Approvals & Endorsements'}</h1>
        <p class="text-white/65 text-sm">${isRTL?'إدارة طلبات الاعتماد متعددة المراحل لمهام الموظفين والقرارات الإدارية':'Multi-stage approval management for employee missions and administrative decisions'}</p>
      </div>
      <div class="md:ms-auto flex gap-3 ${isRTL?'flex-row-reverse':''}">
        <button onclick="apvOpenNew()" class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition" style="background:rgba(255,255,255,.18);border:1.5px solid rgba(255,255,255,.3)" onmouseover="this.style.background='rgba(255,255,255,.28)'" onmouseout="this.style.background='rgba(255,255,255,.18)'">
          <i class="fas fa-plus-circle"></i>${isRTL?'طلب اعتماد جديد':'New Approval Request'}
        </button>
        <button onclick="apvSyncMissions()" class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition" style="background:rgba(197,160,60,.25);color:#F5D68A;border:1.5px solid rgba(197,160,60,.4)" onmouseover="this.style.background='rgba(197,160,60,.4)'" onmouseout="this.style.background='rgba(197,160,60,.25)'">
          <i class="fas fa-sync-alt"></i>${isRTL?'مزامنة المهام':'Sync Missions'}
        </button>
      </div>
    </div>
    <!-- Stats Row -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-3">
      <div class="rounded-xl px-4 py-3 text-center" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)">
        <div class="text-2xl font-extrabold text-white" id="heroStat0">0</div>
        <div class="text-xs text-white/60 mt-0.5"><i class="fas fa-hourglass-half me-1"></i>${isRTL?'قيد المراجعة':'Pending'}</div>
      </div>
      <div class="rounded-xl px-4 py-3 text-center" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)">
        <div class="text-2xl font-extrabold text-emerald-400" id="heroStat1">0</div>
        <div class="text-xs text-white/60 mt-0.5"><i class="fas fa-check-double me-1"></i>${isRTL?'معتمدة':'Approved'}</div>
      </div>
      <div class="rounded-xl px-4 py-3 text-center" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)">
        <div class="text-2xl font-extrabold text-amber-400" id="heroStat2">0</div>
        <div class="text-xs text-white/60 mt-0.5"><i class="fas fa-rotate-left me-1"></i>${isRTL?'مُعادة':'Returned'}</div>
      </div>
      <div class="rounded-xl px-4 py-3 text-center" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)">
        <div class="text-2xl font-extrabold text-rose-400" id="heroStat3">0</div>
        <div class="text-xs text-white/60 mt-0.5"><i class="fas fa-times-circle me-1"></i>${isRTL?'مرفوضة':'Rejected'}</div>
      </div>
      <div class="rounded-xl px-4 py-3 text-center" style="background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)">
        <div class="text-2xl font-extrabold text-white" id="heroStat4">0</div>
        <div class="text-xs text-white/60 mt-0.5"><i class="fas fa-layer-group me-1"></i>${isRTL?'الإجمالي':'Total'}</div>
      </div>
    </div>
  </div>
</div>

<!-- Pipeline Visual - مراحل الاعتماد -->
<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
  <h3 class="font-bold text-gray-700 text-sm mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
    <i class="fas fa-route" style="color:#1e3a5f"></i>
    ${isRTL?'مسار الاعتماد المؤسسي':'Institutional Approval Pipeline'}
  </h3>
  <div class="flex flex-col md:flex-row items-center justify-between gap-2">
    ${[
      {key:'pending_head',     ar:'رئيس القسم',    en:'Dept. Head',     ic:'fa-user-tie',    cl:'#7C3AED', bg:'#FAF5FF', bd:'#DDD6FE', cnt:'pipeCount0'},
      {key:'pending_director', ar:'مدير الإدارة',  en:'Admin Director', ic:'fa-user-shield', cl:'#15803D', bg:'#F0FDF4', bd:'#BBF7D0', cnt:'pipeCount1'},
      {key:'pending_deputy',   ar:'النواب',         en:'Deputies',       ic:'fa-users-gear',  cl:'#0369A1', bg:'#F0F9FF', bd:'#BAE6FD', cnt:'pipeCount2'},
      {key:'approved',         ar:'معتمدة نهائياً','en':'Final Approval',ic:'fa-check-circle',cl:'#15803D', bg:'#DCFCE7', bd:'#86EFAC', cnt:'pipeCount3'},
    ].map((s,i)=>`
    <div class="flex items-center gap-2 flex-1 min-w-0">
      <div class="flex-1 rounded-xl px-3 py-3 text-center border-2 transition" style="background:${s.bg};border-color:${s.bd}">
        <i class="fas ${s.ic} text-xl mb-1" style="color:${s.cl}"></i>
        <div class="text-xs font-bold mt-1" style="color:${s.cl}">${isRTL?s.ar:s.en}</div>
        <div class="text-lg font-extrabold mt-0.5" style="color:${s.cl}" id="${s.cnt}">0</div>
      </div>
      ${i<3?`<i class="fas fa-chevron-${isRTL?'left':'right'} text-gray-300 flex-shrink-0 hidden md:block text-lg"></i>`:''}
    </div>`).join('')}
  </div>
</div>

<!-- Filters + Search -->
<div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-6">
  <div class="flex flex-wrap gap-3 items-center ${isRTL?'flex-row-reverse':''}">
    <div class="relative flex-1 min-w-48">
      <i class="fas fa-search absolute ${isRTL?'right-3':'left-3'} top-1/2 -translate-y-1/2 text-gray-400 text-sm"></i>
      <input id="apvSearch" type="text" placeholder="${isRTL?'بحث بالاسم أو الرقم أو العنوان...':'Search by name, ID or title...'}"
        class="w-full ${isRTL?'pr-9 pl-3 text-right':'pl-9 pr-3'} py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        oninput="apvFilter()">
    </div>
    <select id="apvStageFilter" onchange="apvFilter()" class="px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
      <option value="">${isRTL?'كل المراحل':'All Stages'}</option>
      <option value="pending_head">${isRTL?'رئيس القسم':'Dept. Head'}</option>
      <option value="pending_director">${isRTL?'مدير الإدارة':'Admin Director'}</option>
      <option value="pending_deputy">${isRTL?'النواب':'Deputies'}</option>
      <option value="approved">${isRTL?'معتمدة':'Approved'}</option>
      <option value="returned">${isRTL?'مُعادة':'Returned'}</option>
      <option value="rejected">${isRTL?'مرفوضة':'Rejected'}</option>
    </select>
    <select id="apvTypeFilter" onchange="apvFilter()" class="px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
      <option value="">${isRTL?'كل الأنواع':'All Types'}</option>
      <option value="mission">${isRTL?'مهمة':'Mission'}</option>
      <option value="financial">${isRTL?'مالي':'Financial'}</option>
      <option value="admin">${isRTL?'إداري':'Administrative'}</option>
      <option value="hr">${isRTL?'موارد بشرية':'HR'}</option>
      <option value="technical">${isRTL?'تقني':'Technical'}</option>
      <option value="legal">${isRTL?'قانوني':'Legal'}</option>
    </select>
    <select id="apvPrioFilter" onchange="apvFilter()" class="px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
      <option value="">${isRTL?'كل الأولويات':'All Priorities'}</option>
      <option value="very_urgent">${isRTL?'عاجل جداً':'Very Urgent'}</option>
      <option value="urgent">${isRTL?'عاجل':'Urgent'}</option>
      <option value="normal">${isRTL?'عادي':'Normal'}</option>
    </select>
    <button onclick="apvClearFilters()" class="px-4 py-2.5 rounded-xl text-sm font-bold text-gray-500 border border-gray-200 hover:bg-gray-50 transition">
      <i class="fas fa-filter-circle-xmark me-1"></i>${isRTL?'مسح':'Clear'}
    </button>
    <span id="apvCountLabel" class="text-sm text-gray-400 font-medium ms-1"></span>
  </div>
</div>

<!-- Tabs: بوابة المهام / الطلبات الإدارية -->
<div class="flex gap-2 mb-5 ${isRTL?'flex-row-reverse':''}">
  <button id="tabAll"      onclick="apvSetTab('all')"      class="apv-tab active-tab px-5 py-2.5 rounded-xl text-sm font-bold border transition">${isRTL?'جميع الطلبات':'All Requests'}</button>
  <button id="tabMissions" onclick="apvSetTab('missions')" class="apv-tab px-5 py-2.5 rounded-xl text-sm font-bold border transition">${isRTL?'مهام الموظفين':'Employee Missions'} <span id="missionsBadge" class="ms-1 bg-blue-500 text-white text-xs rounded-full px-1.5 py-0.5">0</span></button>
  <button id="tabAdmin"    onclick="apvSetTab('admin')"    class="apv-tab px-5 py-2.5 rounded-xl text-sm font-bold border transition">${isRTL?'الطلبات الإدارية':'Admin Requests'}</button>
  <button id="tabUrgent"   onclick="apvSetTab('urgent')"   class="apv-tab px-5 py-2.5 rounded-xl text-sm font-bold border transition">${isRTL?'العاجلة':'Urgent'} <span id="urgentBadge" class="ms-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">0</span></button>
</div>

<style>
.apv-tab { background:#fff; color:#6B7280; border-color:#E5E7EB; }
.apv-tab:hover { background:#F9FAFB; }
.apv-tab.active-tab { background:#1e3a5f; color:#fff; border-color:#1e3a5f; }
</style>

<!-- Main Content: Cards Grid -->
<div id="apvGrid" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"></div>
<div id="apvEmpty" class="hidden flex flex-col items-center justify-center py-20 text-center">
  <div class="w-20 h-20 rounded-full flex items-center justify-center mb-4" style="background:#F1F5F9">
    <i class="fas fa-inbox text-3xl text-gray-300"></i>
  </div>
  <p class="text-gray-400 font-medium">${isRTL?'لا توجد طلبات في هذا القسم':'No requests in this section'}</p>
  <button onclick="apvOpenNew()" class="mt-4 px-5 py-2.5 rounded-xl text-sm font-bold text-white" style="background:#1e3a5f">${isRTL?'إضافة طلب جديد':'Add New Request'}</button>
</div>

<!-- ══ MODAL: New / Edit Request ══ -->
<div id="apvModal" class="hidden fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto" style="background:rgba(0,0,0,.55)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-6">
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 ${isRTL?'flex-row-reverse':''}">
      <h2 class="text-lg font-bold" style="color:#1e3a5f" id="apvModalTitle">${isRTL?'طلب اعتماد جديد':'New Approval Request'}</h2>
      <button onclick="apvCloseModal()" class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 text-xl">&times;</button>
    </div>
    <div class="p-6 space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'عنوان الطلب *':'Request Title *'}</label>
          <input id="fTitle" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}" placeholder="${isRTL?'أدخل عنوان الطلب':'Enter request title'}">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'نوع الطلب':'Request Type'}</label>
          <select id="fType" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
            <option value="mission">${isRTL?'مهمة':'Mission'}</option>
            <option value="financial">${isRTL?'مالي':'Financial'}</option>
            <option value="admin">${isRTL?'إداري':'Administrative'}</option>
            <option value="hr">${isRTL?'موارد بشرية':'Human Resources'}</option>
            <option value="technical">${isRTL?'تقني':'Technical'}</option>
            <option value="legal">${isRTL?'قانوني':'Legal'}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'اسم مقدم الطلب':'Requester Name'}</label>
          <input id="fEmpName" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}" placeholder="${isRTL?'اسم الموظف':'Employee name'}">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'الرقم الوظيفي':'Employee ID'}</label>
          <input id="fEmpId" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}" placeholder="QU-XXXX-XXXX">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'القسم / الإدارة':'Department'}</label>
          <input id="fDept" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}" placeholder="${isRTL?'مثال: كلية الهندسة':'e.g. College of Engineering'}">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'الأولوية':'Priority'}</label>
          <select id="fPriority" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
            <option value="normal">${isRTL?'عادي':'Normal'}</option>
            <option value="urgent">${isRTL?'عاجل':'Urgent'}</option>
            <option value="very_urgent">${isRTL?'عاجل جداً':'Very Urgent'}</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'تاريخ الطلب':'Request Date'}</label>
          <input id="fDate" type="date" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
        </div>
        <div>
          <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'التكلفة الإجمالية (ريال)':'Total Cost (QAR)'}</label>
          <input id="fCost" type="number" min="0" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300" placeholder="0">
        </div>
      </div>
      <div>
        <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'وصف / ملاحظات':'Description / Notes'}</label>
        <textarea id="fDesc" rows="3" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}" placeholder="${isRTL?'تفاصيل إضافية عن الطلب...':'Additional details about the request...'}"></textarea>
      </div>
      <!-- مرحلة البدء -->
      <div>
        <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'ابدأ من مرحلة':'Start from Stage'}</label>
        <select id="fStage" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
          <option value="pending_head">${isRTL?'رئيس القسم':'Dept. Head'}</option>
          <option value="pending_director">${isRTL?'مدير الإدارة':'Admin Director'}</option>
          <option value="pending_deputy">${isRTL?'النواب':'Deputies'}</option>
        </select>
      </div>
      <!-- مهمة مرتبطة -->
      <div id="fMissionRow">
        <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'ربط بمهمة (اختياري)':'Link to Mission (optional)'}</label>
        <select id="fMissionLink" class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}">
          <option value="">${isRTL?'-- لا يوجد ربط --':'-- No link --'}</option>
        </select>
      </div>
    </div>
    <div class="flex gap-3 px-6 pb-5 ${isRTL?'flex-row-reverse':''}">
      <button onclick="apvSaveRequest()" class="flex-1 py-3 rounded-xl font-bold text-white text-sm transition" style="background:#1e3a5f" onmouseover="this.style.background='#0f2440'" onmouseout="this.style.background='#1e3a5f'">
        <i class="fas fa-save me-2"></i>${isRTL?'حفظ الطلب':'Save Request'}
      </button>
      <button onclick="apvCloseModal()" class="px-6 py-3 rounded-xl font-bold text-gray-600 text-sm border border-gray-200 hover:bg-gray-50">
        ${isRTL?'إلغاء':'Cancel'}
      </button>
    </div>
  </div>
</div>

<!-- ══ MODAL: Detail / Action ══ -->
<div id="apvDetailModal" class="hidden fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto" style="background:rgba(0,0,0,.55)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-6">
    <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 ${isRTL?'flex-row-reverse':''}">
      <h2 class="text-lg font-bold" style="color:#1e3a5f" id="detTitle">${isRTL?'تفاصيل الطلب':'Request Details'}</h2>
      <button onclick="apvCloseDetail()" class="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-400 text-xl">&times;</button>
    </div>
    <div id="detBody" class="p-6"></div>
    <!-- Action Buttons -->
    <div id="detActions" class="px-6 pb-5 flex flex-wrap gap-2 ${isRTL?'flex-row-reverse':''}"></div>
  </div>
</div>

<!-- ══ MODAL: Approve Confirm ══ -->
<div id="apvConfirmModal" class="hidden fixed inset-0 z-50 flex items-center justify-center p-4" style="background:rgba(0,0,0,.55)">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
    <div class="text-center mb-4">
      <div id="confirmIcon" class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3" style="background:#DCFCE7">
        <i class="fas fa-check text-2xl text-emerald-600"></i>
      </div>
      <h3 id="confirmTitle" class="text-lg font-bold text-gray-800">${isRTL?'تأكيد الاعتماد':'Confirm Approval'}</h3>
      <p id="confirmMsg" class="text-sm text-gray-500 mt-1"></p>
    </div>
    <div class="mb-4">
      <label class="block text-xs font-bold text-gray-600 mb-1 ${isRTL?'text-right':''}">${isRTL?'ملاحظات (اختياري)':'Notes (optional)'}</label>
      <textarea id="confirmNote" rows="3" class="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 ${isRTL?'text-right':''}" placeholder="${isRTL?'أضف ملاحظاتك هنا...':'Add your notes here...'}"></textarea>
    </div>
    <div class="flex gap-3 ${isRTL?'flex-row-reverse':''}">
      <button id="confirmBtn" onclick="apvDoAction()" class="flex-1 py-2.5 rounded-xl font-bold text-white text-sm" style="background:#15803D">${isRTL?'تأكيد':'Confirm'}</button>
      <button onclick="apvCloseConfirm()" class="px-6 py-2.5 rounded-xl font-bold text-gray-600 text-sm border border-gray-200 hover:bg-gray-50">${isRTL?'إلغاء':'Cancel'}</button>
    </div>
  </div>
</div>

<!-- ══ Toast ══ -->
<div id="apvToast" class="fixed bottom-6 ${isRTL?'left-6':'right-6'} z-[9999] hidden max-w-sm">
  <div id="apvToastInner" class="flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl text-white text-sm font-bold">
    <i id="apvToastIcon" class="fas fa-check-circle text-lg"></i>
    <span id="apvToastMsg"></span>
  </div>
</div>

<!-- ══ JS ══ -->
<script>
(function(){
  var IS_RTL = ${isRTL};
  var APV_KEY = 'qu_approvals_v1';
  var MS_KEY  = 'qu_missions_v1';
  var _editId  = null;
  var _actionId = null;
  var _actionType = null;
  var _currentTab = 'all';

  // ── localStorage helpers ────────────────────────────────────
  function getAll(){ try{ return JSON.parse(localStorage.getItem(APV_KEY)||'[]'); }catch(e){ return []; } }
  function saveAll(d){ localStorage.setItem(APV_KEY, JSON.stringify(d)); }
  function getMissions(){ try{ return JSON.parse(localStorage.getItem(MS_KEY)||'[]'); }catch(e){ return []; } }
  function genId(){ return 'APV-'+ Date.now().toString(36).toUpperCase(); }
  function fmtDate(iso){ if(!iso) return '-'; var d=new Date(iso); return d.toLocaleDateString(IS_RTL?'ar-QA':'en-GB',{year:'numeric',month:'short',day:'2-digit'}); }
  function fmtDateTime(iso){ if(!iso) return '-'; var d=new Date(iso); return d.toLocaleDateString(IS_RTL?'ar-QA':'en-GB',{year:'numeric',month:'short',day:'2-digit',hour:'2-digit',minute:'2-digit'}); }
  function $(id){ return document.getElementById(id); }

  // ── Labels ───────────────────────────────────────────────────
  var TYPE_LABEL   = { mission:IS_RTL?'مهمة':'Mission', financial:IS_RTL?'مالي':'Financial', admin:IS_RTL?'إداري':'Admin', hr:IS_RTL?'موارد بشرية':'HR', technical:IS_RTL?'تقني':'Technical', legal:IS_RTL?'قانوني':'Legal' };
  var TYPE_COLOR   = { mission:'#1e3a5f', financial:'#1D4ED8', admin:'#7C3AED', hr:'#15803D', technical:'#0369A1', legal:'#B45309' };
  var TYPE_BG      = { mission:'#EFF6FF', financial:'#EFF6FF', admin:'#FAF5FF', hr:'#F0FDF4', technical:'#F0F9FF', legal:'#FFFBEB' };
  var PRIO_LABEL   = { normal:IS_RTL?'عادي':'Normal', urgent:IS_RTL?'عاجل':'Urgent', very_urgent:IS_RTL?'عاجل جداً':'Very Urgent' };
  var PRIO_COLOR   = { normal:'#6B7280', urgent:'#D97706', very_urgent:'#DC2626' };
  var PRIO_BG      = { normal:'#F9FAFB', urgent:'#FFFBEB', very_urgent:'#FEF2F2' };

  var STAGES = [
    { key:'pending_head',     ar:'رئيس القسم',    en:'Dept. Head',      ic:'fa-user-tie',    cl:'#7C3AED', bg:'#FAF5FF' },
    { key:'pending_director', ar:'مدير الإدارة',  en:'Admin Director',  ic:'fa-user-shield', cl:'#15803D', bg:'#F0FDF4' },
    { key:'pending_deputy',   ar:'النواب',         en:'Deputies',        ic:'fa-users-gear',  cl:'#0369A1', bg:'#F0F9FF' },
    { key:'approved',         ar:'معتمدة',         en:'Approved',        ic:'fa-check-circle',cl:'#15803D', bg:'#DCFCE7' },
    { key:'returned',         ar:'معادة',          en:'Returned',        ic:'fa-rotate-left', cl:'#D97706', bg:'#FFFBEB' },
    { key:'rejected',         ar:'مرفوضة',         en:'Rejected',        ic:'fa-times-circle',cl:'#DC2626', bg:'#FEF2F2' }
  ];
  function stageInfo(k){ return STAGES.find(function(s){ return s.key===k; })||STAGES[0]; }
  function stageLabel(k){ var s=stageInfo(k); return IS_RTL?s.ar:s.en; }
  function nextStage(cur){
    if(cur==='pending_head')     return 'pending_director';
    if(cur==='pending_director') return 'pending_deputy';
    if(cur==='pending_deputy')   return 'approved';
    return cur;
  }

  // ── Update Stats ─────────────────────────────────────────────
  function apvUpdateStats(){
    var all = getAll();
    var pending  = all.filter(function(r){ return r.status.startsWith('pending'); }).length;
    var approved = all.filter(function(r){ return r.status==='approved'; }).length;
    var returned = all.filter(function(r){ return r.status==='returned'; }).length;
    var rejected = all.filter(function(r){ return r.status==='rejected'; }).length;
    if($('heroStat0')) $('heroStat0').textContent = pending;
    if($('heroStat1')) $('heroStat1').textContent = approved;
    if($('heroStat2')) $('heroStat2').textContent = returned;
    if($('heroStat3')) $('heroStat3').textContent = rejected;
    if($('heroStat4')) $('heroStat4').textContent = all.length;
    // Pipeline counts
    ['pending_head','pending_director','pending_deputy','approved'].forEach(function(k,i){
      var el = $('pipeCount'+i);
      if(el) el.textContent = all.filter(function(r){ return r.status===k; }).length;
    });
    // Badges
    var mCount = all.filter(function(r){ return r.type==='mission'; }).length;
    var uCount = all.filter(function(r){ return r.priority==='very_urgent'||r.priority==='urgent'; }).length;
    if($('missionsBadge')) $('missionsBadge').textContent = mCount;
    if($('urgentBadge'))   $('urgentBadge').textContent   = uCount;
    // Navbar badge (إن وجد)
    var nb = document.querySelector('[data-apv-badge]');
    if(nb) nb.textContent = pending;
  }

  // ── Build Card HTML ──────────────────────────────────────────
  function buildCard(r){
    var si = stageInfo(r.status);
    var tc = TYPE_COLOR[r.type]||'#6B7280';
    var tb = TYPE_BG[r.type]||'#F9FAFB';
    var pc = PRIO_COLOR[r.priority]||'#6B7280';
    var pb = PRIO_BG[r.priority]||'#F9FAFB';
    var tl = TYPE_LABEL[r.type]||r.type;
    var pl = PRIO_LABEL[r.priority]||r.priority;
    var sl = stageLabel(r.status);
    var isPending = r.status.startsWith('pending');
    var isApproved = r.status==='approved';
    var isReturned = r.status==='returned';
    var isRejected = r.status==='rejected';

    // Timeline dots
    var stageKeys = ['pending_head','pending_director','pending_deputy','approved'];
    var curIdx = stageKeys.indexOf(r.status);
    var tlDots = stageKeys.map(function(sk,i){
      var done = (r.status==='approved') ? true : (i < curIdx);
      var active = (i===curIdx && isPending);
      var col = done ? '#15803D' : (active ? si.cl : '#D1D5DB');
      var bg  = done ? '#DCFCE7' : (active ? si.bg : '#F9FAFB');
      return '<div class="flex flex-col items-center" style="flex:1">'
        + '<div class="w-6 h-6 rounded-full flex items-center justify-center border-2 transition" style="border-color:'+col+';background:'+bg+'">'
        + (done ? '<i class="fas fa-check text-xs" style="color:'+col+'"></i>' : (active ? '<div class="w-2 h-2 rounded-full animate-pulse" style="background:'+col+'"></div>' : '<div class="w-2 h-2 rounded-full" style="background:#D1D5DB"></div>'))
        + '</div>'
        + (i<3 ? '<div class="h-0.5 w-full mt-3" style="background:'+(done||active?col:'#E5E7EB')+';margin-top:-12px;position:relative;z-index:-1"></div>' : '')
        + '</div>';
    }).join('');

    return '<div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition hover:shadow-md hover:-translate-y-0.5" style="transform:translateY(0);transition:all .2s">'
      // Header strip
      + '<div class="px-4 py-3 flex items-center justify-between" style="background:'+si.bg+';border-bottom:2px solid '+si.cl+'20">'
      + '<div class="flex items-center gap-2">'
      + '<i class="fas '+si.ic+' text-sm" style="color:'+si.cl+'"></i>'
      + '<span class="text-xs font-bold" style="color:'+si.cl+'">'+sl+'</span>'
      + (isPending ? '<span class="w-2 h-2 rounded-full animate-pulse bg-amber-400 ms-1"></span>' : '')
      + '</div>'
      + '<span class="font-mono text-xs text-gray-400">'+r.id+'</span>'
      + '</div>'
      // Body
      + '<div class="p-4">'
      + '<div class="flex items-start justify-between gap-2 mb-3">'
      + '<h4 class="font-bold text-gray-800 text-sm leading-tight flex-1">'+r.title+'</h4>'
      + '<span class="text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0" style="background:'+pb+';color:'+pc+'">'+(r.priority==='very_urgent'?'<i class="fas fa-bolt me-1"></i>':'')+pl+'</span>'
      + '</div>'
      + '<div class="flex items-center gap-2 text-xs text-gray-500 mb-3 '+(IS_RTL?'flex-row-reverse':'')+'">'
      + '<i class="fas fa-user-circle text-gray-400"></i>'
      + '<span class="font-medium text-gray-700">'+r.empName+'</span>'
      + (r.empId ? '<span class="text-gray-300">|</span><span class="font-mono">'+r.empId+'</span>' : '')
      + '</div>'
      + (r.dept ? '<div class="text-xs text-gray-400 mb-3"><i class="fas fa-building me-1"></i>'+r.dept+'</div>' : '')
      + '<div class="flex items-center gap-2 mb-3 flex-wrap">'
      + '<span class="text-xs px-2 py-1 rounded-lg font-bold" style="background:'+tb+';color:'+tc+'">'+tl+'</span>'
      + (r.cost ? '<span class="text-xs px-2 py-1 rounded-lg font-bold bg-gray-50 text-gray-600"><i class="fas fa-coins me-1 text-amber-500"></i>'+Number(r.cost).toLocaleString()+' '+(IS_RTL?'ريال':'QAR')+'</span>' : '')
      + (r.missionId ? '<span class="text-xs px-2 py-1 rounded-lg font-bold bg-blue-50 text-blue-600"><i class="fas fa-plane me-1"></i>'+r.missionId+'</span>' : '')
      + '</div>'
      // Timeline
      + '<div class="flex items-center gap-0 mb-3 mt-4 px-1">'+tlDots+'</div>'
      + (r.returnNote ? '<div class="text-xs text-amber-700 bg-amber-50 rounded-lg px-2 py-1.5 mb-2 mt-1"><i class="fas fa-comment-alt me-1"></i>'+r.returnNote+'</div>' : '')
      + (r.rejectNote ? '<div class="text-xs text-red-700 bg-red-50 rounded-lg px-2 py-1.5 mb-2 mt-1"><i class="fas fa-ban me-1"></i>'+r.rejectNote+'</div>' : '')
      + '</div>'
      // Footer Actions
      + '<div class="px-4 pb-4 flex gap-2 flex-wrap '+(IS_RTL?'flex-row-reverse':'')+'">'
      + '<button onclick="apvViewDetail(this.dataset.id)" data-id="'+r.id+'" class="flex-1 py-2 rounded-xl text-xs font-bold text-white transition" style="background:#1e3a5f"><i class="fas fa-eye me-1"></i>'+(IS_RTL?'عرض':'View')+'</button>'
      + (isPending ? '<button onclick="apvShowConfirm(this.dataset.id, this.dataset.act)" data-id="'+r.id+'" data-act="approve" class="flex-1 py-2 rounded-xl text-xs font-bold text-white transition" style="background:#15803D"><i class="fas fa-check me-1"></i>'+(IS_RTL?'اعتماد':'Approve')+'</button>' : '')
      + (isPending ? '<button onclick="apvShowConfirm(this.dataset.id, this.dataset.act)" data-id="'+r.id+'" data-act="return" class="py-2 px-3 rounded-xl text-xs font-bold transition" style="background:#FFFBEB;color:#D97706;border:1.5px solid #FDE68A"><i class="fas fa-rotate-left"></i></button>' : '')
      + (isPending ? '<button onclick="apvShowConfirm(this.dataset.id, this.dataset.act)" data-id="'+r.id+'" data-act="reject" class="py-2 px-3 rounded-xl text-xs font-bold transition" style="background:#FEF2F2;color:#DC2626;border:1.5px solid #FECACA"><i class="fas fa-times"></i></button>' : '')
      + (isReturned ? '<button onclick="apvResubmit(this.dataset.id)" data-id="'+r.id+'" class="flex-1 py-2 rounded-xl text-xs font-bold text-white transition" style="background:#D97706"><i class="fas fa-paper-plane me-1"></i>'+(IS_RTL?'إعادة رفع':'Resubmit')+'</button>' : '')
      + '<button onclick="apvDeleteReq(this.dataset.id)" data-id="'+r.id+'" class="py-2 px-3 rounded-xl text-xs font-bold text-red-400 hover:bg-red-50 border border-red-100 transition"><i class="fas fa-trash"></i></button>'
      + '</div>'
      + '</div>';
  }

  // ── Render Grid ──────────────────────────────────────────────
  function apvRenderGrid(list){
    var grid  = $('apvGrid');
    var empty = $('apvEmpty');
    if(!list){ list = getAll(); }
    if(!list.length){ grid.innerHTML=''; empty.classList.remove('hidden'); return; }
    empty.classList.add('hidden');
    grid.innerHTML = list.map(buildCard).join('');
    if($('apvCountLabel')) $('apvCountLabel').textContent = list.length + (IS_RTL?' طلب':' requests');
  }

  // ── Filter ───────────────────────────────────────────────────
  function apvFilter(){
    var q   = ($('apvSearch')||{value:''}).value.toLowerCase();
    var st  = ($('apvStageFilter')||{value:''}).value;
    var tp  = ($('apvTypeFilter')||{value:''}).value;
    var pr  = ($('apvPrioFilter')||{value:''}).value;
    var all = getAll();
    // tab filter
    if(_currentTab==='missions') all = all.filter(function(r){ return r.type==='mission'; });
    if(_currentTab==='admin')    all = all.filter(function(r){ return r.type!=='mission'; });
    if(_currentTab==='urgent')   all = all.filter(function(r){ return r.priority==='urgent'||r.priority==='very_urgent'; });
    if(st) all = all.filter(function(r){ return r.status===st; });
    if(tp) all = all.filter(function(r){ return r.type===tp; });
    if(pr) all = all.filter(function(r){ return r.priority===pr; });
    if(q)  all = all.filter(function(r){
      return (r.title||'').toLowerCase().includes(q)
          || (r.empName||'').toLowerCase().includes(q)
          || (r.empId||'').toLowerCase().includes(q)
          || (r.id||'').toLowerCase().includes(q);
    });
    apvRenderGrid(all);
  }

  window.apvFilter = apvFilter;

  function apvClearFilters(){
    if($('apvSearch'))      $('apvSearch').value='';
    if($('apvStageFilter')) $('apvStageFilter').value='';
    if($('apvTypeFilter'))  $('apvTypeFilter').value='';
    if($('apvPrioFilter'))  $('apvPrioFilter').value='';
    apvFilter();
  }
  window.apvClearFilters = apvClearFilters;

  // ── Tabs ─────────────────────────────────────────────────────
  function apvSetTab(tab){
    _currentTab = tab;
    ['all','missions','admin','urgent'].forEach(function(t){
      var btn = $('tab'+t.charAt(0).toUpperCase()+t.slice(1));
      if(btn){
        if(t===tab){ btn.classList.add('active-tab'); }
        else { btn.classList.remove('active-tab'); }
      }
    });
    apvFilter();
  }
  window.apvSetTab = apvSetTab;

  // ── Open New Modal ───────────────────────────────────────────
  function apvOpenNew(){
    _editId = null;
    if($('apvModalTitle')) $('apvModalTitle').textContent = IS_RTL?'طلب اعتماد جديد':'New Approval Request';
    if($('fTitle'))    $('fTitle').value='';
    if($('fType'))     $('fType').value='mission';
    if($('fEmpName'))  $('fEmpName').value='';
    if($('fEmpId'))    $('fEmpId').value='';
    if($('fDept'))     $('fDept').value='';
    if($('fPriority')) $('fPriority').value='normal';
    if($('fDate'))     $('fDate').value=new Date().toISOString().split('T')[0];
    if($('fCost'))     $('fCost').value='';
    if($('fDesc'))     $('fDesc').value='';
    if($('fStage'))    $('fStage').value='pending_head';
    // populate missions dropdown
    apvPopulateMissions();
    if($('apvModal')) $('apvModal').classList.remove('hidden');
  }
  window.apvOpenNew = apvOpenNew;

  function apvPopulateMissions(){
    var sel = $('fMissionLink');
    if(!sel) return;
    var ms = getMissions();
    sel.innerHTML = '<option value="">'+(IS_RTL?'-- لا يوجد ربط --':'-- No link --')+'</option>'
      + ms.map(function(m){ return '<option value="'+m.id+'">'+m.id+' – '+(m.empName||'')+' – '+(m.dest||'')+'</option>'; }).join('');
  }

  function apvCloseModal(){
    if($('apvModal')) $('apvModal').classList.add('hidden');
  }
  window.apvCloseModal = apvCloseModal;

  // ── Save Request ─────────────────────────────────────────────
  function apvSaveRequest(){
    var title = ($('fTitle')||{value:''}).value.trim();
    if(!title){ apvToast(IS_RTL?'أدخل عنوان الطلب':'Enter request title','error'); return; }
    var all = getAll();
    if(_editId){
      all = all.map(function(r){
        if(r.id!==_editId) return r;
        r.title    = title;
        r.type     = ($('fType')||{value:'mission'}).value;
        r.empName  = ($('fEmpName')||{value:''}).value.trim();
        r.empId    = ($('fEmpId')||{value:''}).value.trim();
        r.dept     = ($('fDept')||{value:''}).value.trim();
        r.priority = ($('fPriority')||{value:'normal'}).value;
        r.cost     = ($('fCost')||{value:0}).value||0;
        r.desc     = ($('fDesc')||{value:''}).value.trim();
        r.missionId= ($('fMissionLink')||{value:''}).value;
        r.updatedAt= new Date().toISOString();
        return r;
      });
      apvToast(IS_RTL?'تم تحديث الطلب':'Request updated','success');
    } else {
      var rec = {
        id:        genId(),
        title:     title,
        type:      ($('fType')||{value:'mission'}).value,
        empName:   ($('fEmpName')||{value:''}).value.trim(),
        empId:     ($('fEmpId')||{value:''}).value.trim(),
        dept:      ($('fDept')||{value:''}).value.trim(),
        priority:  ($('fPriority')||{value:'normal'}).value,
        date:      ($('fDate')||{value:''}).value,
        cost:      ($('fCost')||{value:0}).value||0,
        desc:      ($('fDesc')||{value:''}).value.trim(),
        status:    ($('fStage')||{value:'pending_head'}).value,
        missionId: ($('fMissionLink')||{value:''}).value,
        timeline:  [{ stage: ($('fStage')||{value:'pending_head'}).value, action:'submitted', at: new Date().toISOString(), note:IS_RTL?'تم رفع الطلب':'Request submitted' }],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      all.unshift(rec);
      apvToast(IS_RTL?'تم إضافة الطلب بنجاح':'Request added successfully','success');
    }
    saveAll(all);
    apvCloseModal();
    apvUpdateStats();
    apvFilter();
  }
  window.apvSaveRequest = apvSaveRequest;

  // ── View Detail ──────────────────────────────────────────────
  function apvViewDetail(id){
    var all = getAll();
    var r = all.find(function(x){ return x.id===id; });
    if(!r) return;
    var si = stageInfo(r.status);
    var tc = TYPE_COLOR[r.type]||'#6B7280';
    var tb = TYPE_BG[r.type]||'#F9FAFB';
    var pc = PRIO_COLOR[r.priority]||'#6B7280';
    var pb = PRIO_BG[r.priority]||'#F9FAFB';

    // Timeline history
    var tlHTML = '';
    if(r.timeline && r.timeline.length){
      tlHTML = '<div class="mt-4"><p class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">'+(IS_RTL?'سجل التنقلات':'Activity Timeline')+'</p>'
        + '<div class="space-y-2">'
        + r.timeline.map(function(t){
            var ts = stageInfo(t.stage);
            return '<div class="flex items-start gap-2">'
              + '<div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style="background:'+ts.bg+'">'
              + '<i class="fas '+ts.ic+' text-xs" style="color:'+ts.cl+'"></i>'
              + '</div>'
              + '<div class="flex-1">'
              + '<div class="flex items-center gap-2 flex-wrap">'
              + '<span class="text-xs font-bold" style="color:'+ts.cl+'">'+(IS_RTL?ts.ar:ts.en)+'</span>'
              + '<span class="text-xs text-gray-400">'+fmtDateTime(t.at)+'</span>'
              + '</div>'
              + (t.note ? '<p class="text-xs text-gray-500 mt-0.5">'+t.note+'</p>' : '')
              + '</div></div>';
          }).join('')
        + '</div></div>';
    }

    var bodyHTML = '<div class="space-y-4">'
      + '<div class="flex items-center gap-3 p-3 rounded-xl" style="background:'+si.bg+'">'
      + '<i class="fas '+si.ic+' text-xl" style="color:'+si.cl+'"></i>'
      + '<div>'
      + '<div class="text-xs text-gray-500">'+(IS_RTL?'المرحلة الحالية':'Current Stage')+'</div>'
      + '<div class="font-bold text-sm" style="color:'+si.cl+'">'+(IS_RTL?si.ar:si.en)+'</div>'
      + '</div>'
      + '<span class="ms-auto font-mono text-xs text-gray-400">'+r.id+'</span>'
      + '</div>'
      + '<div class="grid grid-cols-2 gap-3 text-sm">'
      + '<div><p class="text-xs text-gray-400">'+(IS_RTL?'العنوان':'Title')+'</p><p class="font-bold text-gray-800">'+r.title+'</p></div>'
      + '<div><p class="text-xs text-gray-400">'+(IS_RTL?'النوع':'Type')+'</p><span class="text-xs font-bold px-2 py-0.5 rounded-lg" style="background:'+tb+';color:'+tc+'">'+(TYPE_LABEL[r.type]||r.type)+'</span></div>'
      + '<div><p class="text-xs text-gray-400">'+(IS_RTL?'مقدم الطلب':'Requester')+'</p><p class="font-bold text-gray-800">'+r.empName+'</p></div>'
      + '<div><p class="text-xs text-gray-400">'+(IS_RTL?'الرقم الوظيفي':'Emp. ID')+'</p><p class="font-mono text-gray-600 text-xs">'+r.empId+'</p></div>'
      + (r.dept ? '<div><p class="text-xs text-gray-400">'+(IS_RTL?'القسم':'Dept.')+'</p><p class="text-gray-700 text-xs">'+r.dept+'</p></div>' : '')
      + '<div><p class="text-xs text-gray-400">'+(IS_RTL?'الأولوية':'Priority')+'</p><span class="text-xs font-bold px-2 py-0.5 rounded-lg" style="background:'+pb+';color:'+pc+'">'+(PRIO_LABEL[r.priority]||r.priority)+'</span></div>'
      + (r.cost ? '<div><p class="text-xs text-gray-400">'+(IS_RTL?'التكلفة':'Cost')+'</p><p class="font-bold text-gray-800">'+Number(r.cost).toLocaleString()+' '+(IS_RTL?'ريال':'QAR')+'</p></div>' : '')
      + (r.missionId ? '<div><p class="text-xs text-gray-400">'+(IS_RTL?'مهمة مرتبطة':'Linked Mission')+'</p><p class="font-mono text-blue-600 text-xs">'+r.missionId+'</p></div>' : '')
      + '<div><p class="text-xs text-gray-400">'+(IS_RTL?'تاريخ الرفع':'Submitted')+'</p><p class="text-gray-600 text-xs">'+fmtDate(r.createdAt)+'</p></div>'
      + '</div>'
      + (r.desc ? '<div><p class="text-xs text-gray-400 mb-1">'+(IS_RTL?'الوصف':'Description')+'</p><p class="text-sm text-gray-700 bg-gray-50 rounded-xl p-3">'+r.desc+'</p></div>' : '')
      + (r.returnNote ? '<div class="bg-amber-50 border border-amber-200 rounded-xl p-3"><p class="text-xs font-bold text-amber-700 mb-1"><i class="fas fa-rotate-left me-1"></i>'+(IS_RTL?'سبب الإعادة':'Return Reason')+'</p><p class="text-sm text-amber-800">'+r.returnNote+'</p></div>' : '')
      + (r.rejectNote ? '<div class="bg-red-50 border border-red-200 rounded-xl p-3"><p class="text-xs font-bold text-red-700 mb-1"><i class="fas fa-ban me-1"></i>'+(IS_RTL?'سبب الرفض':'Rejection Reason')+'</p><p class="text-sm text-red-800">'+r.rejectNote+'</p></div>' : '')
      + tlHTML
      + '</div>';

    if($('detBody')) $('detBody').innerHTML = bodyHTML;
    if($('detTitle')) $('detTitle').textContent = r.title;

    // Actions in footer
    var isPending = r.status.startsWith('pending');
    var isReturned = r.status==='returned';
    var actHTML = '';
    if(isPending){
      actHTML += '<button onclick="apvShowConfirm(this.dataset.id,this.dataset.act)" data-id="'+r.id+'" data-act="approve" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white" style="background:#15803D"><i class="fas fa-check me-1"></i>'+(IS_RTL?'اعتماد':'Approve')+'</button>';
      actHTML += '<button onclick="apvShowConfirm(this.dataset.id,this.dataset.act)" data-id="'+r.id+'" data-act="return" class="px-5 py-2.5 rounded-xl text-sm font-bold" style="background:#FFFBEB;color:#D97706;border:1.5px solid #FDE68A"><i class="fas fa-rotate-left me-1"></i>'+(IS_RTL?'إعادة':'Return')+'</button>';
      actHTML += '<button onclick="apvShowConfirm(this.dataset.id,this.dataset.act)" data-id="'+r.id+'" data-act="reject" class="px-5 py-2.5 rounded-xl text-sm font-bold" style="background:#FEF2F2;color:#DC2626;border:1.5px solid #FECACA"><i class="fas fa-times me-1"></i>'+(IS_RTL?'رفض':'Reject')+'</button>';
    }
    if(isReturned){
      actHTML += '<button onclick="apvResubmit(this.dataset.id)" data-id="'+r.id+'" class="px-5 py-2.5 rounded-xl text-sm font-bold text-white" style="background:#D97706"><i class="fas fa-paper-plane me-1"></i>'+(IS_RTL?'إعادة رفع':'Resubmit')+'</button>';
    }
    actHTML += '<button onclick="apvEditReq(this.dataset.id)" data-id="'+r.id+'" class="px-4 py-2.5 rounded-xl text-sm font-bold text-gray-600 border border-gray-200 hover:bg-gray-50"><i class="fas fa-edit me-1"></i>'+(IS_RTL?'تعديل':'Edit')+'</button>';
    actHTML += '<button onclick="apvCloseDetail()" class="px-4 py-2.5 rounded-xl text-sm font-bold text-gray-500 border border-gray-200 hover:bg-gray-50">'+(IS_RTL?'إغلاق':'Close')+'</button>';
    if($('detActions')) $('detActions').innerHTML = actHTML;

    if($('apvDetailModal')) $('apvDetailModal').classList.remove('hidden');
  }
  window.apvViewDetail = apvViewDetail;

  function apvCloseDetail(){
    if($('apvDetailModal')) $('apvDetailModal').classList.add('hidden');
  }
  window.apvCloseDetail = apvCloseDetail;

  // ── Edit Request ─────────────────────────────────────────────
  function apvEditReq(id){
    var all = getAll();
    var r = all.find(function(x){ return x.id===id; });
    if(!r) return;
    _editId = id;
    apvCloseDetail();
    apvPopulateMissions();
    if($('apvModalTitle')) $('apvModalTitle').textContent = IS_RTL?'تعديل الطلب':'Edit Request';
    if($('fTitle'))    $('fTitle').value = r.title||'';
    if($('fType'))     $('fType').value  = r.type||'mission';
    if($('fEmpName'))  $('fEmpName').value = r.empName||'';
    if($('fEmpId'))    $('fEmpId').value   = r.empId||'';
    if($('fDept'))     $('fDept').value    = r.dept||'';
    if($('fPriority')) $('fPriority').value= r.priority||'normal';
    if($('fDate'))     $('fDate').value    = (r.date||r.createdAt||'').split('T')[0];
    if($('fCost'))     $('fCost').value    = r.cost||'';
    if($('fDesc'))     $('fDesc').value    = r.desc||'';
    if($('fStage'))    $('fStage').value   = r.status||'pending_head';
    if($('fMissionLink')) $('fMissionLink').value = r.missionId||'';
    if($('apvModal'))  $('apvModal').classList.remove('hidden');
  }
  window.apvEditReq = apvEditReq;

  // ── Show Confirm Modal ───────────────────────────────────────
  function apvShowConfirm(id, type){
    _actionId   = id;
    _actionType = type;
    var all = getAll();
    var r = all.find(function(x){ return x.id===id; });
    var title = r ? r.title : id;
    var icon  = $('confirmIcon');
    var ctitle= $('confirmTitle');
    var cmsg  = $('confirmMsg');
    var cbtn  = $('confirmBtn');
    if(type==='approve'){
      if(icon)  icon.style.background='#DCFCE7'; icon.innerHTML='<i class="fas fa-check text-2xl text-emerald-600"></i>';
      if(ctitle)ctitle.textContent=IS_RTL?'تأكيد الاعتماد':'Confirm Approval';
      if(cmsg)  cmsg.textContent=(IS_RTL?'هل تريد اعتماد الطلب: ':'Approve request: ')+title;
      if(cbtn)  { cbtn.style.background='#15803D'; cbtn.textContent=IS_RTL?'اعتماد':'Approve'; }
    } else if(type==='return'){
      if(icon)  icon.style.background='#FFFBEB'; icon.innerHTML='<i class="fas fa-rotate-left text-2xl" style="color:#D97706"></i>';
      if(ctitle)ctitle.textContent=IS_RTL?'إعادة الطلب':'Return Request';
      if(cmsg)  cmsg.textContent=(IS_RTL?'سيتم إعادة الطلب مع ملاحظاتك: ':'Request will be returned: ')+title;
      if(cbtn)  { cbtn.style.background='#D97706'; cbtn.textContent=IS_RTL?'إعادة':'Return'; }
    } else if(type==='reject'){
      if(icon)  icon.style.background='#FEF2F2'; icon.innerHTML='<i class="fas fa-times text-2xl text-red-600"></i>';
      if(ctitle)ctitle.textContent=IS_RTL?'رفض الطلب':'Reject Request';
      if(cmsg)  cmsg.textContent=(IS_RTL?'هل تريد رفض الطلب نهائياً: ':'Permanently reject: ')+title;
      if(cbtn)  { cbtn.style.background='#DC2626'; cbtn.textContent=IS_RTL?'رفض':'Reject'; }
    }
    if($('confirmNote')) $('confirmNote').value='';
    if($('apvConfirmModal')) $('apvConfirmModal').classList.remove('hidden');
  }
  window.apvShowConfirm = apvShowConfirm;

  function apvCloseConfirm(){
    if($('apvConfirmModal')) $('apvConfirmModal').classList.add('hidden');
  }
  window.apvCloseConfirm = apvCloseConfirm;

  // ── Do Action ────────────────────────────────────────────────
  function apvDoAction(){
    if(!_actionId || !_actionType) return;
    var note = ($('confirmNote')||{value:''}).value.trim();
    var all  = getAll();
    all = all.map(function(r){
      if(r.id !== _actionId) return r;
      var entry = { stage: r.status, action: _actionType, at: new Date().toISOString(), note: note };
      if(!r.timeline) r.timeline=[];
      if(_actionType==='approve'){
        var ns = nextStage(r.status);
        entry.stage = ns;
        r.status = ns;
        if(ns==='approved') entry.note = note||(IS_RTL?'تم الاعتماد النهائي':'Final approval granted');
        apvToast(IS_RTL?'تم الاعتماد وترفيع الطلب':'Approved and forwarded','success');
        // تحديث المهمة المرتبطة إن وجدت
        if(ns==='approved' && r.missionId){
          var ms = getMissions();
          ms = ms.map(function(m){ if(m.id===r.missionId){ m.status='approved'; m.updatedAt=new Date().toISOString(); } return m; });
          localStorage.setItem(MS_KEY, JSON.stringify(ms));
        }
      } else if(_actionType==='return'){
        r.status = 'returned';
        r.returnNote = note;
        entry.stage = 'returned';
        apvToast(IS_RTL?'تم إعادة الطلب':'Request returned','warning');
      } else if(_actionType==='reject'){
        r.status = 'rejected';
        r.rejectNote = note;
        entry.stage = 'rejected';
        apvToast(IS_RTL?'تم رفض الطلب':'Request rejected','error');
        // تحديث المهمة المرتبطة
        if(r.missionId){
          var ms2 = getMissions();
          ms2 = ms2.map(function(m){ if(m.id===r.missionId){ m.status='rejected'; m.updatedAt=new Date().toISOString(); } return m; });
          localStorage.setItem(MS_KEY, JSON.stringify(ms2));
        }
      }
      r.timeline.push(entry);
      r.updatedAt = new Date().toISOString();
      return r;
    });
    saveAll(all);
    apvCloseConfirm();
    apvCloseDetail();
    apvUpdateStats();
    apvFilter();
  }
  window.apvDoAction = apvDoAction;

  // ── Resubmit ─────────────────────────────────────────────────
  function apvResubmit(id){
    var all = getAll();
    all = all.map(function(r){
      if(r.id!==id) return r;
      r.status = 'pending_head';
      r.returnNote = null;
      if(!r.timeline) r.timeline=[];
      r.timeline.push({ stage:'pending_head', action:'resubmit', at:new Date().toISOString(), note:IS_RTL?'أُعيد رفع الطلب':'Request resubmitted' });
      r.updatedAt = new Date().toISOString();
      return r;
    });
    saveAll(all);
    apvCloseDetail();
    apvUpdateStats();
    apvFilter();
    apvToast(IS_RTL?'تمت إعادة رفع الطلب':'Request resubmitted','success');
  }
  window.apvResubmit = apvResubmit;

  // ── Delete ───────────────────────────────────────────────────
  function apvDeleteReq(id){
    if(!confirm(IS_RTL?'هل تريد حذف هذا الطلب نهائياً؟':'Delete this request permanently?')) return;
    var all = getAll().filter(function(r){ return r.id!==id; });
    saveAll(all);
    apvUpdateStats();
    apvFilter();
    apvToast(IS_RTL?'تم حذف الطلب':'Request deleted','error');
  }
  window.apvDeleteReq = apvDeleteReq;

  // ── Sync Missions ────────────────────────────────────────────
  function apvSyncMissions(){
    var ms  = getMissions();
    var all = getAll();
    var added = 0;
    ms.forEach(function(m){
      // تحقق من عدم وجود طلب مرتبط بهذه المهمة مسبقاً
      var exists = all.find(function(r){ return r.missionId===m.id; });
      if(!exists && (m.status==='pending'||m.status==='approved')){
        var typeMap  = { official:'mission', academic:'mission', training:'mission', conference:'mission' };
        var prioMap  = { pending:'normal', approved:'normal' };
        all.unshift({
          id:        genId(),
          title:     (IS_RTL?'مهمة: ':'Mission: ')+(m.dest||m.id),
          type:      'mission',
          empName:   m.empName||'',
          empId:     m.empId||'',
          dept:      m.dept||'',
          priority:  'normal',
          date:      (m.dateFrom||'').split('T')[0]||new Date().toISOString().split('T')[0],
          cost:      m.totalCost||0,
          desc:      m.purpose||'',
          status:    m.status==='approved'?'approved':'pending_head',
          missionId: m.id,
          timeline:  [{ stage:'pending_head', action:'synced', at:new Date().toISOString(), note:IS_RTL?'مزامنة من نظام المهام':'Synced from Missions system' }],
          createdAt: m.createdAt||new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        added++;
      }
    });
    saveAll(all);
    apvUpdateStats();
    apvFilter();
    apvToast((IS_RTL?'تمت المزامنة: تم استيراد ':'Sync complete: ')+added+(IS_RTL?' مهام جديدة':' new missions'),'success');
  }
  window.apvSyncMissions = apvSyncMissions;

  // ── Toast ────────────────────────────────────────────────────
  function apvToast(msg, type){
    var el  = $('apvToast');
    var inn = $('apvToastInner');
    var ic  = $('apvToastIcon');
    var ms  = $('apvToastMsg');
    if(!el||!inn) return;
    var cfg = {
      success: { bg:'#15803D', icon:'fa-check-circle' },
      warning: { bg:'#D97706', icon:'fa-rotate-left' },
      error:   { bg:'#DC2626', icon:'fa-times-circle' }
    }[type||'success'] || { bg:'#1e3a5f', icon:'fa-info-circle' };
    inn.style.background = cfg.bg;
    if(ic) ic.className = 'fas '+cfg.icon+' text-lg';
    if(ms) ms.textContent = msg;
    el.classList.remove('hidden');
    setTimeout(function(){ el.classList.add('hidden'); }, 3200);
  }
  window.apvToast = apvToast;

  // ── Seed Demo ────────────────────────────────────────────────
  function apvSeedDemo(){
    if(getAll().length) return;
    var demos = [
      {id:'APV-DEMO01',title:IS_RTL?'اعتماد مهمة رسمية – أحمد النعيمي':'Official Mission – Ahmed Al-Naimi',type:'mission',empName:IS_RTL?'أحمد محمد النعيمي':'Ahmed M. Al-Naimi',empId:'QU-2019-0245',dept:IS_RTL?'كلية الهندسة':'College of Engineering',priority:'urgent',date:'2025-05-10',cost:4500,desc:IS_RTL?'حضور مؤتمر الهندسة الدولي في دبي':'Attending International Engineering Conference in Dubai',status:'pending_director',missionId:'MS-A1B2C3',timeline:[{stage:'pending_head',action:'submitted',at:'2025-05-10T08:00:00Z',note:IS_RTL?'تم الرفع':'Submitted'},{stage:'pending_director',action:'approve',at:'2025-05-11T10:00:00Z',note:IS_RTL?'اعتمدها رئيس القسم':'Approved by Dept. Head'}],createdAt:'2025-05-10T08:00:00Z',updatedAt:'2025-05-11T10:00:00Z'},
      {id:'APV-DEMO02',title:IS_RTL?'اعتماد تدريب خارجي – فاطمة القحطاني':'External Training – Fatima Al-Qahtani',type:'mission',empName:IS_RTL?'فاطمة سالم القحطاني':'Fatima S. Al-Qahtani',empId:'QU-2020-0189',dept:IS_RTL?'إدارة الموارد البشرية':'HR Department',priority:'normal',date:'2025-04-01',cost:10000,desc:IS_RTL?'دورة تدريبية في إدارة الموارد البشرية – لندن':'HR Management Training – London',status:'pending_head',missionId:'MS-D4E5F6',timeline:[{stage:'pending_head',action:'submitted',at:'2025-04-01T09:00:00Z',note:IS_RTL?'تم الرفع':'Submitted'}],createdAt:'2025-04-01T09:00:00Z',updatedAt:'2025-04-01T09:00:00Z'},
      {id:'APV-DEMO03',title:IS_RTL?'قرار مالي – صرف مكافآت الربع الثاني':'Financial Decision – Q2 Bonuses',type:'financial',empName:IS_RTL?'نواف عبدالله':'Nawaf Abdullah',empId:'QU-2015-0100',dept:IS_RTL?'إدارة الرواتب':'Payroll Dept.',priority:'very_urgent',date:'2025-05-01',cost:85000,desc:IS_RTL?'اعتماد صرف مكافآت الأداء للربع الثاني 2025':'Approval for Q2 2025 performance bonuses',status:'pending_deputy',missionId:'',timeline:[{stage:'pending_head',action:'submitted',at:'2025-05-01T08:00:00Z',note:''},{stage:'pending_director',action:'approve',at:'2025-05-02T10:00:00Z',note:IS_RTL?'اعتمدها مدير الإدارة':'Approved by Admin Director'},{stage:'pending_deputy',action:'forward',at:'2025-05-03T09:00:00Z',note:IS_RTL?'للمراجعة النهائية':'For final review'}],createdAt:'2025-05-01T08:00:00Z',updatedAt:'2025-05-03T09:00:00Z'},
      {id:'APV-DEMO04',title:IS_RTL?'قرار إداري – تعديل هيكل الوردية':'Admin Decision – Shift Structure',type:'admin',empName:IS_RTL?'نورة راشد المري':'Noura R. Al-Marri',empId:'QU-2021-0098',dept:IS_RTL?'إدارة المالية':'Finance Dept.',priority:'normal',date:'2025-04-20',cost:0,desc:IS_RTL?'تعديل جداول الوردية للقسم الإداري':'Administrative shift schedule modification',status:'approved',missionId:'',timeline:[{stage:'pending_head',action:'submitted',at:'2025-04-20T08:00:00Z',note:''},{stage:'pending_director',action:'approve',at:'2025-04-21T10:00:00Z',note:''},{stage:'pending_deputy',action:'approve',at:'2025-04-22T09:00:00Z',note:''},{stage:'approved',action:'approve',at:'2025-04-23T11:00:00Z',note:IS_RTL?'اعتمدت بالكامل':'Fully approved'}],createdAt:'2025-04-20T08:00:00Z',updatedAt:'2025-04-23T11:00:00Z'},
      {id:'APV-DEMO05',title:IS_RTL?'طلب موارد بشرية – إجازة استثنائية':'HR Request – Special Leave',type:'hr',empName:IS_RTL?'خالد عبدالله الدوسري':'Khaled Al-Dosari',empId:'QU-2018-0312',dept:IS_RTL?'كلية العلوم':'College of Science',priority:'urgent',date:'2025-05-12',cost:0,desc:IS_RTL?'طلب إجازة استثنائية لظروف عائلية':'Special leave request for family circumstances',status:'returned',missionId:'',returnNote:IS_RTL?'يرجى إرفاق المستندات الداعمة قبل إعادة الرفع':'Please attach supporting documents before resubmitting',timeline:[{stage:'pending_head',action:'submitted',at:'2025-05-12T08:00:00Z',note:''},{stage:'returned',action:'return',at:'2025-05-13T10:00:00Z',note:IS_RTL?'يرجى إرفاق المستندات الداعمة':'Attach supporting documents'}],createdAt:'2025-05-12T08:00:00Z',updatedAt:'2025-05-13T10:00:00Z'}
    ];
    saveAll(demos);
  }

  // ── Init ─────────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function(){
    apvSeedDemo();
    apvUpdateStats();
    apvFilter();
  });

})();
</script>
`;

  return c.html(layout(
    isRTL ? 'الموافقات والاعتمادات – جامعة قطر' : 'Approvals & Endorsements – Qatar University',
    pageHTML,
    'approvals',
    lang
  ))
})


export default app
