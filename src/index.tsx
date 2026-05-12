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
    navEmailTemplates: 'Email Templates',
    navScholarship: 'Scholarship Program',
    navScholarshipRules: 'Scholarship Rules',
    navScholarshipProcedures: 'Scholarship Procedures',
    navScholarshipTracking: 'Scholar Tracking',
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
    navScholarship: 'برنامج الابتعاث',
    navScholarshipRules: 'قوانين وشروط الابتعاث',
    navScholarshipProcedures: 'إجراءات التقديم',
    navScholarshipTracking: 'متابعة المبتعثين',
    navEmailTemplates: 'أرشيف قوالب الإيميل',
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
      { href: '/email-templates', icon: 'fa-envelope-open-text', label: t.navEmailTemplates, page: 'email-templates' },
      { href: '/scholarship', icon: 'fa-graduation-cap', label: t.navScholarship, page: 'scholarship' },
      { href: '/sla', icon: 'fa-chart-gantt', label: isRTL ? 'إدارة طلبات SLA' : 'SLA Management', page: 'sla' },
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
    const content = document.getElementById('promotionReportModal').querySelector('.bg-white').innerHTML;
    const printWin = window.open('', '_blank', 'width=900,height=700');
    printWin.document.write(\`<!DOCTYPE html><html dir="\${isRTL_PR?'rtl':'ltr'}">
    <head>
      <meta charset="UTF-8">
      <title>\${isRTL_PR ? 'تقرير الترقيات الإدارية' : 'Promotions Report'} - Qatar University</title>
      <script src="https://cdn.tailwindcss.com"><\/script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
      <style>
        @media print { body { margin: 0; } button { display:none!important; } }
        body { font-family: 'Segoe UI', Arial, sans-serif; background:#fff; padding:24px; }
        :root { --qu-maroon:#8B1A2F; }
      </style>
    </head>
    <body>\${content}</body></html>\`);
    printWin.document.close();
    setTimeout(() => { printWin.focus(); printWin.print(); }, 600);
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
    const content = document.getElementById('eosReportModal').querySelector('.bg-white').innerHTML;
    const printWin = window.open('', '_blank', 'width=900,height=700');
    printWin.document.write(\`<!DOCTYPE html><html dir="${isRTL ? 'rtl' : 'ltr'}">
    <head>
      <meta charset="UTF-8">
      <title>${isRTL ? 'تقرير نهاية الخدمة' : 'End-of-Service Report'} - Qatar University</title>
      <script src="https://cdn.tailwindcss.com"><\/script>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
      <style>
        @media print { body { margin:0; } button,a { display:none!important; } }
        body { font-family:'Segoe UI',Arial,sans-serif; background:#fff; padding:24px; }
        :root { --qu-maroon:#8B1A2F; }
      </style>
    </head>
    <body>\${content}</body></html>\`);
    printWin.document.close();
    setTimeout(() => { printWin.focus(); printWin.print(); }, 600);
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
    { href: '/staff',          icon: 'fa-home',            label: isRTL ? 'الرئيسية' : 'Home',               page: 'home' },
    { href: '/staff-forms',    icon: 'fa-file-alt',        label: isRTL ? 'النماذج والوثائق' : 'Forms & Documents', page: 'forms' },
    { href: '/staff-request',  icon: 'fa-concierge-bell',  label: isRTL ? 'طلب خدمة' : 'Request a Service',   page: 'request' },
    { href: '/staff-contact',  icon: 'fa-envelope',        label: isRTL ? 'تواصل معنا' : 'Contact Us',        page: 'contact' },
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

  // تقويم الرواتب – مواعيد ثابتة
  const calRows = isRTL ? [
    { month:'يناير 2025',   date:'28 يناير',   status:'done',    statusLabel:'تم الصرف' },
    { month:'فبراير 2025',  date:'27 فبراير',  status:'done',    statusLabel:'تم الصرف' },
    { month:'مارس 2025',    date:'27 مارس',    status:'done',    statusLabel:'تم الصرف' },
    { month:'أبريل 2025',   date:'28 أبريل',   status:'done',    statusLabel:'تم الصرف' },
    { month:'مايو 2025',    date:'27 مايو',    status:'current', statusLabel:'هذا الشهر' },
    { month:'يونيو 2025',   date:'26 يونيو',   status:'upcoming',statusLabel:'قادم' },
    { month:'يوليو 2025',   date:'28 يوليو',   status:'upcoming',statusLabel:'قادم' },
    { month:'أغسطس 2025',   date:'27 أغسطس',   status:'upcoming',statusLabel:'قادم' },
    { month:'سبتمبر 2025',  date:'28 سبتمبر',  status:'upcoming',statusLabel:'قادم' },
    { month:'أكتوبر 2025',  date:'28 أكتوبر',  status:'upcoming',statusLabel:'قادم' },
    { month:'نوفمبر 2025',  date:'27 نوفمبر',  status:'upcoming',statusLabel:'قادم' },
    { month:'ديسمبر 2025',  date:'25 ديسمبر',  status:'upcoming',statusLabel:'قادم' },
  ] : [
    { month:'January 2025',  date:'Jan 28',  status:'done',    statusLabel:'Paid' },
    { month:'February 2025', date:'Feb 27',  status:'done',    statusLabel:'Paid' },
    { month:'March 2025',    date:'Mar 27',  status:'done',    statusLabel:'Paid' },
    { month:'April 2025',    date:'Apr 28',  status:'done',    statusLabel:'Paid' },
    { month:'May 2025',      date:'May 27',  status:'current', statusLabel:'This Month' },
    { month:'June 2025',     date:'Jun 26',  status:'upcoming',statusLabel:'Upcoming' },
    { month:'July 2025',     date:'Jul 28',  status:'upcoming',statusLabel:'Upcoming' },
    { month:'August 2025',   date:'Aug 27',  status:'upcoming',statusLabel:'Upcoming' },
    { month:'September 2025',date:'Sep 28',  status:'upcoming',statusLabel:'Upcoming' },
    { month:'October 2025',  date:'Oct 28',  status:'upcoming',statusLabel:'Upcoming' },
    { month:'November 2025', date:'Nov 27',  status:'upcoming',statusLabel:'Upcoming' },
    { month:'December 2025', date:'Dec 25',  status:'upcoming',statusLabel:'Upcoming' },
  ]

  const statusStyle = {
    done:    'background:#ECFDF5;color:#059669',
    current: 'background:#FEF3C7;color:#D97706',
    upcoming:'background:#F3F4F6;color:#6B7280',
  }

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
  </style>

  <div dir="${isRTL?'rtl':'ltr'}" class="space-y-6">

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

      <!-- ── تقويم الرواتب ─────────────────────────────────────────── -->
      <div class="card p-5">
        <h2 class="font-bold text-gray-800 flex items-center gap-2 mb-4 ${isRTL?'flex-row-reverse':''}">
          <span class="w-8 h-8 rounded-lg flex items-center justify-center" style="background:rgba(196,146,42,0.1)">
            <i class="fas fa-calendar-alt text-sm" style="color:var(--qu-gold)"></i>
          </span>
          ${isRTL?'تقويم الرواتب 2025':'Payroll Calendar 2025'}
        </h2>
        <div class="space-y-1">
          ${calRows.map(r=>`
          <div class="flex items-center justify-between px-3 py-2 rounded-xl ${r.status==='current'?'cal-row-current':'hover:bg-gray-50'} transition">
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <span class="badge-dot" style="background:${r.status==='done'?'#10B981':r.status==='current'?'#F59E0B':'#D1D5DB'}"></span>
              <span class="text-xs font-medium text-gray-700 ${r.status==='current'?'font-bold':''}">${r.month}</span>
            </div>
            <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
              <span class="text-xs font-bold text-gray-800">${r.date}</span>
              <span class="text-xs px-2 py-0.5 rounded-full font-semibold" style="${statusStyle[r.status]}">${r.statusLabel}</span>
            </div>
          </div>`).join('')}
        </div>
        <div class="mt-3 pt-3 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-400 flex-wrap ${isRTL?'flex-row-reverse':''}">
          <span class="flex items-center gap-1"><span class="badge-dot" style="background:#10B981"></span>${isRTL?'تم الصرف':'Paid'}</span>
          <span class="flex items-center gap-1"><span class="badge-dot" style="background:#F59E0B"></span>${isRTL?'هذا الشهر':'Current'}</span>
          <span class="flex items-center gap-1"><span class="badge-dot" style="background:#D1D5DB"></span>${isRTL?'قادم':'Upcoming'}</span>
        </div>
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
  </script>`

  return c.html(staffLayout(isRTL?'الرئيسية':'Home', content, 'home', lang))
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
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6" id="slaKpiCards">
    ${[
      {id:'kpi_total',icon:'fa-inbox',color:'var(--qu-maroon)',bg:'rgba(139,26,47,0.08)',value:'0',label:isRTL?'إجمالي الطلبات':'Total Requests'},
      {id:'kpi_open',icon:'fa-clock',color:'#F59E0B',bg:'rgba(245,158,11,0.08)',value:'0',label:isRTL?'طلبات مفتوحة':'Open Requests'},
      {id:'kpi_done',icon:'fa-check-circle',color:'#10B981',bg:'rgba(16,185,129,0.08)',value:'0',label:isRTL?'مكتملة':'Completed'},
      {id:'kpi_breach',icon:'fa-exclamation-triangle',color:'#EF4444',bg:'rgba(239,68,68,0.08)',value:'0',label:isRTL?'تجاوزت SLA':'SLA Breached'},
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
    return {
      id: 'REQ-' + String(1000+i).padStart(4,'0'),
      emp: d.emp, empId: d.empId, email: d.email||'', type: d.type,
      desc: d.desc, priority: d.priority,
      status: d.status==='breach'?'open':d.status,
      submittedAt: sub.toISOString(),
      slaDue: d.status==='breach'? new Date(sub.getTime()-24*3600000).toISOString() : due,
      updatedAt: sub.toISOString(),
      notes: ''
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
}

function renderSLATable(){
  const reqs = getSLARequests();
  const search = document.getElementById('slaSearch').value.toLowerCase();
  const statusF = document.getElementById('slaStatusFilter').value;
  const typeF = document.getElementById('slaTypeFilter').value;
  const sourceF = document.getElementById('slaSourceFilter') ? document.getElementById('slaSourceFilter').value : '';

  let filtered = reqs.filter(r=>{
    const matchSearch = !search || r.emp.toLowerCase().includes(search) || r.id.toLowerCase().includes(search) || r.empId.toLowerCase().includes(search);
    const rStatus = r.status==='needs_revision'?'needs_revision':(isBreach(r)?'breach':r.status);
    const matchStatus = !statusF || rStatus===statusF;
    const matchType = !typeF || r.type===typeF;
    const matchSource = !sourceF || (sourceF==='staff'?r.source==='staff':r.source!=='staff');
    return matchSearch && matchStatus && matchType && matchSource;
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
      <td class="px-4 py-3">
        <div class="flex items-center gap-1.5 \${IS_RTL?'flex-row-reverse':''}">
          <button onclick="event.stopPropagation();viewRequest('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition" title="\${IS_RTL?'عرض':'View'}"><i class="fas fa-eye text-xs"></i></button>
          <button onclick="event.stopPropagation();openChat('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition relative" title="\${IS_RTL?'دردشة':'Chat'}">\${unread>0?'<span class=\\"absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center\\">'+unread+'</span>':''}<i class="fas fa-comment-dots text-xs"></i></button>
          <button onclick="event.stopPropagation();showInvoice('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-amber-600 hover:bg-amber-50 transition" title="\${IS_RTL?'فاتورة':'Invoice'}"><i class="fas fa-file-invoice text-xs"></i></button>
          <button onclick="event.stopPropagation();openEmailModal('\${req.id}')" class="p-1.5 rounded-lg text-gray-400 hover:text-purple-600 hover:bg-purple-50 transition" title="\${IS_RTL?'إرسال إيميل للموظف':'Send Email to Employee'}" \${!req.email?'style=\\"opacity:0.4\\" title=\\"'+(IS_RTL?'البريد الإلكتروني غير متوفر':'No email on file')+'\\"':''} ><i class="fas fa-envelope text-xs"></i>\${req.email?'':'<i class=\\"fas fa-slash text-xs\\" style=\\"font-size:7px;margin-left:-6px\\" ></i>'}</button>
          \${req.status!=='done'&&req.status!=='needs_revision'?('<button onclick="event.stopPropagation();markDone(\\''+req.id+'\\');" class="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition" title="'+(IS_RTL?'إتمام':'Complete')+'"><i class="fas fa-check text-xs"></i></button>'):''}
          \${req.status!=='done'&&req.status!=='needs_revision'?('<button onclick="event.stopPropagation();openReturnModal(\\''+req.id+'\\');" class="p-1.5 rounded-lg text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition" title="'+(IS_RTL?'إرجاع للموظف':'Return to Employee')+'"><i class="fas fa-undo text-xs"></i></button>'):''}
        </div>
      </td>
    </tr>\`;
  }).join('');
  updateKPIs();
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
    updatedAt: now, notes: ''
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

export default app
