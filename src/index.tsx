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
    navLogin: 'Employee Login',
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
    stat4Value: '4 hrs',  stat4Label: 'Avg. Response Time',
    welcomeTag: 'Welcome',
    welcomeTitle: 'Qatar University – Human Resources & Payroll Department',
    welcomeBody: 'This portal provides Qatar University staff and employees with streamlined access to all payroll-related services, including procedures, downloadable forms, frequently asked questions, and direct contact channels. Our goal is to ensure transparent, efficient, and accessible payroll management for all university personnel.',
    btnGetStarted: 'Get Started',
    btnContactSupport: 'Contact Support',
    quickAccess: 'Quick Access',
    qa1Title: 'Procedures', qa1Desc: 'Step-by-step guides for payroll requests, allowances, and deductions', qa1Badge: '5 Guides',
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
    procedures: [
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
        id: 'salary-adj', icon: 'fa-sliders', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)',
        title: 'Salary Adjustment Request', badge: 'badge-blue', badgeLabel: 'Salary',
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
        { title: 'Salary Deduction Dispute Form', desc: 'Raise a formal dispute regarding an incorrect or unexpected salary deduction.', ref: 'PR-F-010', version: 'Rev. 2, 2025' },
        { title: 'Salary Advance Request Form', desc: 'Apply for a salary advance. Repayment terms must be specified.', ref: 'PR-F-011', version: 'Rev. 3, 2024' },
        { title: 'Staff Loan Application', desc: 'Apply for an interest-free staff loan as per QU HR policy.', ref: 'PR-F-012', version: 'Rev. 1, 2024' },
        { title: 'Loan Repayment Schedule Request', desc: 'Request a revised repayment schedule for an existing loan.', ref: 'PR-F-013', version: 'Rev. 1, 2023' },
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
    navLogin: 'دخول الموظف',
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
    stat4Value: '4 س',    stat4Label: 'متوسط وقت الرد',
    welcomeTag: 'أهلاً وسهلاً',
    welcomeTitle: 'جامعة قطر – الموارد البشرية وقسم الرواتب',
    welcomeBody: 'تتيح هذه البوابة لموظفي جامعة قطر الوصول السلس إلى جميع خدمات الرواتب، بما في ذلك الإجراءات والنماذج القابلة للتحميل والأسئلة الشائعة وقنوات التواصل المباشر. هدفنا توفير إدارة مرتبات شفافة وفعّالة وميسّرة لجميع منسوبي الجامعة.',
    btnGetStarted: 'ابدأ الآن',
    btnContactSupport: 'تواصل مع الدعم',
    quickAccess: 'وصول سريع',
    qa1Title: 'الإجراءات', qa1Desc: 'أدلة خطوة بخطوة لطلبات الرواتب والبدلات والاستقطاعات', qa1Badge: '5 أدلة',
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
    procedures: [
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
        id: 'salary-adj', icon: 'fa-sliders', color: '#3B82F6', bg: 'rgba(59,130,246,0.08)',
        title: 'طلب تعديل الراتب', badge: 'badge-blue', badgeLabel: 'الراتب',
        desc: 'طلب مراجعة أو تعديل الراتب بناءً على ترقية أو تغيير وظيفي أو تحديث عقد العمل.',
        steps: [
          { title: 'الحصول على موافقة رئيس القسم', body: 'يجب أن يصدر طلب تعديل الراتب من رئيس القسم أو المشرف المفوّض، مع الحصول على موافقة خطية عبر مذكرة رسمية أو بريد إلكتروني.' },
          { title: 'التقديم لفريق تعويضات الموارد البشرية', body: 'يرسل رئيس القسم طلب التعديل إلى فريق التعويضات والمزايا عبر hr.compensation@qu.edu.qa.' },
          { title: 'مراجعة الموارد البشرية', body: 'يراجع فريق الموارد البشرية الطلب وفق سلّم الرواتب وتصنيف الوظيفة والميزانية المعتمدة.' },
          { title: 'اعتماد الشؤون المالية', body: 'بعد موافقة الموارد البشرية، يُحال الطلب إلى إدارة الشؤون المالية للتحقق من التوفر الميزاني.' },
          { title: 'تحديث الراتب في النظام', body: 'بعد اكتمال الموافقات، يُحدّث فريق الرواتب الراتب في النظام ويسري التعديل في دورة الرواتب الشهرية التالية.' },
          { title: 'إشعار الموظف', body: 'يُصدر خطاب إشعار رسمي للموظف يُثبت الراتب الجديد وتاريخ سريانه.' },
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
        { title: 'نموذج تظلم استقطاع الراتب', desc: 'رفع اعتراض رسمي على استقطاع خاطئ أو غير متوقع من الراتب.', ref: 'PR-F-010', version: 'المراجعة 2، 2025' },
        { title: 'نموذج طلب سلفة الراتب', desc: 'طلب سلفة من الراتب مع تحديد شروط السداد.', ref: 'PR-F-011', version: 'المراجعة 3، 2024' },
        { title: 'طلب قرض الموظفين', desc: 'طلب قرض بدون فوائد وفق سياسة الموارد البشرية بجامعة قطر.', ref: 'PR-F-012', version: 'المراجعة 1، 2024' },
        { title: 'طلب جدول سداد القرض', desc: 'طلب تعديل جدول سداد قرض قائم.', ref: 'PR-F-013', version: 'المراجعة 1، 2023' },
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
        <div class="ticker text-white text-xs">${t.ticker}</div>
      </div>
    </div>
  </div>

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
  <div class="mb-6 ${isRTL ? 'text-right' : ''}">
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
    <div class="card p-5 flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${s.bg}">
        <i class="fas ${s.icon} text-xl" style="color:${s.color}"></i>
      </div>
      <div class="${isRTL ? 'text-right' : ''}">
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
    <div class="relative z-10 max-w-2xl ${isRTL ? 'mr-auto text-right' : ''}">
      <div class="flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
        <span class="w-8 h-0.5 rounded" style="background:var(--qu-gold)"></span>
        <span class="text-xs font-semibold uppercase tracking-widest" style="color:var(--qu-gold)">${t.welcomeTag}</span>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-2">${t.welcomeTitle}</h2>
      <p class="text-gray-600 text-sm leading-relaxed">${t.welcomeBody}</p>
      <div class="flex flex-wrap gap-3 mt-4 ${isRTL ? 'flex-row-reverse' : ''}">
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
  <h2 class="text-lg font-bold text-gray-700 mb-3 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
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
      <div class="flex items-center justify-between mb-4 ${isRTL ? 'flex-row-reverse' : ''}">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}">
          <i class="fas fa-bullhorn text-sm" style="color:var(--qu-maroon)"></i> ${t.recentAnnouncements}
        </h3>
        <span class="text-xs cursor-pointer" style="color:var(--qu-maroon)">${t.viewAllArrow}</span>
      </div>
      <div class="space-y-2">
        ${[
          { title: t.ann1, date: t.ann1Date, badge: 'badge-green', icon: 'fa-money-bill-wave', label: t.ann1Badge },
          { title: t.ann2, date: t.ann2Date, badge: 'badge-amber', icon: 'fa-star-and-crescent', label: t.ann2Badge },
          { title: t.ann3, date: t.ann3Date, badge: 'badge-blue',  icon: 'fa-file-alt', label: t.ann3Badge },
          { title: t.ann4, date: t.ann4Date, badge: 'badge-red',   icon: 'fa-file-contract', label: t.ann4Badge },
        ].map(a => `
        <div class="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}">
          <div class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style="background:rgba(139,26,47,0.08)">
            <i class="fas ${a.icon} text-sm" style="color:var(--qu-maroon)"></i>
          </div>
          <div class="flex-1 min-w-0 ${isRTL ? 'text-right' : ''}">
            <p class="text-sm font-medium text-gray-800">${a.title}</p>
            <p class="text-xs text-gray-400 mt-0.5"><i class="fas fa-calendar ${isRTL ? 'ml-1' : 'mr-1'}"></i>${a.date}</p>
          </div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${a.badge} whitespace-nowrap flex-shrink-0">${a.label}</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- Calendar + Contact -->
    <div class="flex flex-col gap-5">
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
          <i class="fas fa-calendar-alt text-sm" style="color:var(--qu-maroon)"></i> ${t.payrollCalendar}
        </h3>
        <div class="space-y-2 text-sm">
          ${[
            { month: t.calMonth1, date: t.calDate1 },
            { month: t.calMonth2, date: t.calDate2 },
            { month: t.calMonth3, date: t.calDate3 },
          ].map(m => `
          <div class="flex items-center justify-between py-2 border-b border-gray-50 ${isRTL ? 'flex-row-reverse' : ''}">
            <span class="text-gray-600 font-medium">${m.month}</span>
            <span class="text-xs font-semibold px-3 py-1 rounded-full badge-blue">${m.date}</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="card p-5">
        <h3 class="font-bold text-gray-800 flex items-center gap-2 mb-3 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
          <i class="fas fa-phone text-sm" style="color:var(--qu-maroon)"></i> ${t.emergencyContact}
        </h3>
        <div class="space-y-2 text-sm text-gray-600">
          ${[
            { icon: 'fa-envelope', text: 'payroll@qu.edu.qa' },
            { icon: 'fa-phone', text: t.contactExt },
            { icon: 'fa-clock', text: t.contactHours },
          ].map(e => `
          <div class="flex items-center gap-2 p-2 rounded-lg bg-gray-50 ${isRTL ? 'flex-row-reverse' : ''}">
            <i class="fas ${e.icon} text-xs flex-shrink-0" style="color:var(--qu-maroon)"></i>
            <span class="text-xs">${e.text}</span>
          </div>`).join('')}
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
  <div class="mb-6 flex items-center justify-between flex-wrap gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
    <div class="${isRTL ? 'text-right' : ''}">
      <h1 class="text-2xl font-bold text-gray-800">${t.procTitle}</h1>
      <p class="text-gray-500 mt-1 text-sm">${t.procSubtitle}</p>
    </div>
    <a href="/forms?lang=${lang}" class="btn-gold px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 text-white">
      <i class="fas fa-file-alt"></i> ${t.procGoForms}
    </a>
  </div>

  <div class="space-y-5">
    ${t.procedures.map(proc => `
    <div class="card overflow-hidden" id="${proc.id}">
      <div class="px-6 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition ${isRTL ? 'flex-row-reverse' : ''}" onclick="this.nextElementSibling.classList.toggle('hidden')">
        <div class="flex items-center gap-4 min-w-0 ${isRTL ? 'flex-row-reverse' : ''}">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:${proc.bg}">
            <i class="fas ${proc.icon} text-xl" style="color:${proc.color}"></i>
          </div>
          <div class="min-w-0 ${isRTL ? 'text-right' : ''}">
            <div class="flex items-center gap-2 mb-0.5 ${isRTL ? 'flex-row-reverse justify-end' : ''}">
              <h3 class="font-bold text-gray-800">${proc.title}</h3>
              <span class="text-xs font-semibold px-2 py-0.5 rounded-full ${proc.badge} whitespace-nowrap">${proc.badgeLabel}</span>
            </div>
            <p class="text-sm text-gray-500">${proc.desc}</p>
          </div>
        </div>
        <i class="fas fa-chevron-down text-gray-400 flex-shrink-0"></i>
      </div>
      <div class="hidden px-6 pb-6 bg-gray-50/50 border-t border-gray-100">
        <div class="pt-5 space-y-4">
          ${proc.steps.map((step: any, i: number) => `
          <div class="relative step-line last:before:hidden flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}">
            <div class="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm z-10 shadow-sm" style="background:${proc.color}">
              ${isRTL ? (proc.steps.length - i) : (i + 1)}
            </div>
            <div class="flex-1 pt-1 pb-2 ${isRTL ? 'text-right' : ''}">
              <h4 class="font-semibold text-gray-800 text-sm mb-1">${step.title}</h4>
              <p class="text-gray-600 text-sm leading-relaxed">${step.body}</p>
            </div>
          </div>`).join('')}
        </div>
        <div class="mt-5 pt-4 border-t border-gray-200 flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}">
          <a href="/forms?lang=${lang}" class="btn-primary px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <i class="fas fa-download"></i> ${t.procDownload}
          </a>
          <a href="/contact?lang=${lang}" class="btn-outline px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
            <i class="fas fa-headset"></i> ${t.procHelp}
          </a>
        </div>
      </div>
    </div>`).join('')}
  </div>`

  return c.html(layout(t.procTitle, content, 'procedures', lang))
})

// ─────────────────────────────────────────────────────────────────────────────
//  FORMS
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
            <div class="flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}">
              <div class="flex items-center gap-2 text-xs text-gray-400 ${isRTL ? 'flex-row-reverse' : ''}">
                <span class="font-mono bg-gray-100 px-1.5 py-0.5 rounded">${form.ref}</span>
                <span>${form.version}</span>
              </div>
              <button onclick="alert('${isRTL ? 'جارٍ التحميل...' : 'Downloading'}...')" class="btn-primary px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                <i class="fas fa-download"></i> ${t.btnDownload}
              </button>
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
//  FAQs
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
//  CONTACT
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

  <!-- Office Info -->
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

  <!-- Contact Cards -->
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

  <!-- Contact Form -->
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
//  LOGIN
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
//  404
// ─────────────────────────────────────────────────────────────────────────────
app.notFound((c) => {
  const lang = getLang(c)
  const t = T[lang]
  const content = `
  <div class="flex flex-col items-center justify-center text-center py-20">
    <div class="w-24 h-24 rounded-2xl flex items-center justify-center mb-6" style="background:rgba(139,26,47,0.08)">
      <i class="fas fa-triangle-exclamation text-4xl" style="color:var(--qu-maroon)"></i>
    </div>
    <h1 class="text-4xl font-bold text-gray-800 mb-3">404</h1>
    <p class="text-gray-500 mb-6">${t.notFoundMsg}</p>
    <a href="/?lang=${lang}" class="btn-primary px-6 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2">
      <i class="fas fa-home"></i> ${t.btnReturnHome}
    </a>
  </div>`
  return c.html(layout('404', content, '', lang), 404)
})

export default app
