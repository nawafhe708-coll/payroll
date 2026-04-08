// ─────────────────────────────────────────────────────────────────────────────
//  END OF SERVICE  /end-of-service
// ─────────────────────────────────────────────────────────────────────────────
app.get('/end-of-service', (c) => {
  const lang = getLang(c)
  const t = T[lang]
  const isRTL = lang === 'ar'

  // ── Sample data (demo) ────────────────────────────────────────────────────
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

  // Pending employees list (demo)
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

  // Clearance departments
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

  // Former employees recent (demo)
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
  <!-- ── PAGE HEADER ── -->
  <div class="mb-6 flex items-start justify-between flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
    <div class="${isRTL?'text-right':''}">
      <h1 class="text-2xl font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas fa-person-walking-arrow-right" style="color:var(--qu-maroon)"></i> ${lbl.title}
      </h1>
      <p class="text-gray-500 mt-1 text-sm">${lbl.subtitle}</p>
    </div>
    <div class="flex gap-2 ${isRTL?'flex-row-reverse':''}">
      <button onclick="window.print()" class="btn-outline px-3 py-2 rounded-lg text-sm flex items-center gap-2">
        <i class="fas fa-print"></i> ${isRTL?'طباعة':'Print'}
      </button>
      <a href="/forms?lang=${lang}" class="btn-gold px-3 py-2 rounded-lg text-sm flex items-center gap-2 text-white">
        <i class="fas fa-file-alt"></i> ${isRTL?'النماذج':'Forms'}
      </a>
    </div>
  </div>

  <!-- ── TABS ── -->
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

  <!-- ══════════════════════ TAB: DASHBOARD ══════════════════════ -->
  <div id="panel-dash" class="eos-panel">

    <!-- KPI Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      ${[
        {icon:'fa-users-slash',          val:stats.totalFormer,           label:lbl.statFormer,   col:'var(--qu-maroon)', bg:'rgba(139,26,47,0.08)'},
        {icon:'fa-hourglass-half',       val:stats.pendingThisYear,       label:lbl.statPending,  col:'#F59E0B',          bg:'rgba(245,158,11,0.08)'},
        {icon:'fa-calendar-plus',        val:stats.pendingNextYear,       label:lbl.statNext,     col:'#3B82F6',          bg:'rgba(59,130,246,0.08)'},
        {icon:'fa-money-bill-wave',      val:stats.avgGratuity,           label:lbl.statAvg,      col:'#10B981',          bg:'rgba(16,185,129,0.08)'},
        {icon:'fa-vault',                val:stats.totalPaid,             label:lbl.statTotal,    col:'#7C3AED',          bg:'rgba(124,58,237,0.08)'},
        {icon:'fa-clock-rotate-left',    val:stats.clearanceAvgDays+' '+  (isRTL?'يوم':'days'),  label:lbl.statClear,    col:'#0891B2',          bg:'rgba(8,145,178,0.08)'},
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

    <!-- Charts Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">

      <!-- Donut: Admin vs Academic -->
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

      <!-- Donut: Qatari vs Non-Qatari -->
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

    <!-- Bar Chart: Monthly trend -->
    <div class="card p-5 mb-5">
      <h3 class="font-bold text-gray-700 mb-4 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas fa-chart-bar text-sm" style="color:#3B82F6"></i>
        ${isRTL?'إنهاء الخدمة الشهري – 2024/2025':'Monthly Separations – 2024/2025'}
      </h3>
      <canvas id="chartBar" height="90"></canvas>
    </div>

    <!-- Policy Summary -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="card p-5" style="border-top:4px solid var(--qu-maroon)">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-star-and-crescent" style="color:var(--qu-maroon)"></i> ${lbl.policyQatari}
        </h4>
        <ul class="space-y-2 text-xs text-gray-600">
          ${(isRTL?[
            'تُحتسب المكافأة على أساس الراتب الأساسي عند إنهاء الخدمة',
            'أقل من 5 سنوات: 3 أسابيع راتب عن كل سنة',
            'من 5 إلى 10 سنوات: 4 أسابيع راتب عن كل سنة',
            'أكثر من 10 سنوات: شهر كامل عن كل سنة',
            'التقاعد الاختياري عند بلوغ 55 سنة (قانون 25/2025)',
            'الاستقالة: المكافأة كاملة بعد 5 سنوات',
            'فترة إشعار: شهر عن كل سنة (حد أقصى 3 أشهر)',
          ]:[
            'Gratuity based on basic salary at time of separation',
            'Less than 5 years: 3 weeks\' pay per year',
            '5–10 years: 4 weeks\' pay per year',
            'More than 10 years: 1 full month per year',
            'Optional retirement at age 55 (Law 25/2025)',
            'Resignation: full gratuity after 5 years',
            'Notice period: 1 month per year (max 3 months)',
          ]).map(p=>`<li class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle flex-shrink-0 mt-0.5" style="color:var(--qu-maroon)"></i>
            <span class="${isRTL?'text-right':''}">${p}</span></li>`).join('')}
        </ul>
      </div>
      <div class="card p-5" style="border-top:4px solid #3B82F6">
        <h4 class="font-bold text-gray-800 mb-3 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
          <i class="fas fa-globe" style="color:#3B82F6"></i> ${lbl.policyNonQ}
        </h4>
        <ul class="space-y-2 text-xs text-gray-600">
          ${(isRTL?[
            'تُحتسب المكافأة وفق قانون العمل القطري (المادة 54)',
            'أقل من سنة: لا تستحق مكافأة',
            'سنة إلى أقل من 5 سنوات: 3 أسابيع عن كل سنة',
            '5 سنوات فأكثر: 3 أسابيع عن كل سنة إلى 5 سنوات، وشهر كامل عن كل سنة بعدها',
            'الاستقالة قبل 5 سنوات: لا مكافأة',
            'الإنهاء من صاحب العمل: كاملة بغض النظر عن المدة',
            'فترة إشعار: شهر واحد (قابلة للتفاوض)',
          ]:[
            'Gratuity under Qatar Labour Law (Article 54)',
            'Less than 1 year: no gratuity entitlement',
            '1 to less than 5 years: 3 weeks\' pay per year',
            '5+ years: 3 weeks per year for first 5, 1 month per year thereafter',
            'Resignation before 5 years: no gratuity',
            'Termination by employer: full gratuity regardless of tenure',
            'Notice period: 1 month (negotiable in contract)',
          ]).map(p=>`<li class="flex items-start gap-2 ${isRTL?'flex-row-reverse':''}">
            <i class="fas fa-check-circle flex-shrink-0 mt-0.5" style="color:#3B82F6"></i>
            <span class="${isRTL?'text-right':''}">${p}</span></li>`).join('')}
        </ul>
      </div>
    </div>

  </div><!-- /panel-dash -->

  <!-- ══════════════════════ TAB: PENDING ══════════════════════ -->
  <div id="panel-pending" class="eos-panel hidden">
    <div class="flex items-center justify-between mb-4 flex-wrap gap-3 ${isRTL?'flex-row-reverse':''}">
      <h2 class="font-bold text-gray-800 flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
        <i class="fas fa-hourglass-half" style="color:#F59E0B"></i> ${lbl.pendingTitle}
      </h2>
      <!-- Filters -->
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
          <tr class="border-b border-gray-50 hover:bg-gray-50 transition emp-row" data-type="${e.type}" data-nat="${e.nat}">
            <td class="px-4 py-3 font-mono text-xs text-gray-500">${e.id}</td>
            <td class="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">${e.name}</td>
            <td class="px-4 py-3 text-gray-600 text-xs">${e.dept}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${e.type==='admin'?'badge-blue':'badge-amber'}">${typeLabel(e.type)}</span></td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${e.nat==='qatari'?'badge-red':'badge-green'}">${natLabel(e.nat)}</span></td>
            <td class="px-4 py-3 text-xs text-gray-600 whitespace-nowrap">${e.expDate}</td>
            <td class="px-4 py-3 text-center font-bold text-gray-700">${e.years}</td>
            <td class="px-4 py-3 text-xs font-semibold text-gray-700 whitespace-nowrap">${e.basic}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-xs font-semibold ${statusColor(e.status)}">${statusLabel(e.status)}</span></td>
            <td class="px-4 py-3 min-w-[120px]">
              <div class="flex items-center gap-2 ${isRTL?'flex-row-reverse':''}">
                <div class="flex-1 bg-gray-100 rounded-full h-2">
                  <div class="h-2 rounded-full transition-all" style="width:${e.clearance}%;background:${e.clearance===100?'#10B981':e.clearance>50?'#3B82F6':'#F59E0B'}"></div>
                </div>
                <span class="text-xs font-bold text-gray-600 whitespace-nowrap">${e.clearance}%</span>
              </div>
            </td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div><!-- /panel-pending -->

  <!-- ══════════════════════ TAB: FORMER ══════════════════════ -->
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
  </div><!-- /panel-former -->

  <!-- ══════════════════════ TAB: CLEARANCE ══════════════════════ -->
  <div id="panel-clearance" class="eos-panel hidden">
    <div class="mb-4 ${isRTL?'text-right':''}">
      <h2 class="font-bold text-gray-800 mb-1 flex items-center gap-2 ${isRTL?'flex-row-reverse justify-end':''}">
        <i class="fas fa-clipboard-check" style="color:#059669"></i> ${lbl.clearTitle}
      </h2>
      <p class="text-sm text-gray-500">${lbl.clearSubtitle}</p>
    </div>

    <!-- Progress Timeline -->
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

    <!-- Total clearance time -->
    <div class="card p-4 flex items-center gap-4 ${isRTL?'flex-row-reverse':''}" style="background:linear-gradient(135deg,rgba(5,150,105,0.07),rgba(5,150,105,0.03));border:1px solid rgba(5,150,105,0.2)">
      <div class="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style="background:rgba(5,150,105,0.12)">
        <i class="fas fa-check-double text-xl" style="color:#059669"></i>
      </div>
      <div class="${isRTL?'text-right':''}">
        <p class="font-bold text-gray-800">${isRTL?'المدة الإجمالية لإخلاء الطرف: 14–22 يوم عمل':'Total Clearance Duration: 14–22 Working Days'}</p>
        <p class="text-xs text-gray-500">${isRTL?'يجب استيفاء جميع الأقسام قبل صرف مستحقات نهاية الخدمة النهائية':'All departments must be cleared before final end-of-service payment is released'}</p>
      </div>
    </div>
  </div><!-- /panel-clearance -->

  <!-- ══════════════════════ TAB: CALCULATOR ══════════════════════ -->
  <div id="panel-calc" class="eos-panel hidden">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Input Form -->
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

      <!-- Result Panel -->
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
  </div><!-- /panel-calc -->

  <style>
    .eos-panel.hidden { display:none; }
    .eos-tab { user-select:none; }
  </style>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"><\/script>
  <script>
  // ── Tab switching ──────────────────────────────────────────────
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

  // ── Filter tables ──────────────────────────────────────────────
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

  // ── Charts ─────────────────────────────────────────────────────
  let chartsDrawn=false;
  function drawCharts(){
    if(chartsDrawn)return; chartsDrawn=true;
    // Donut Type
    new Chart(document.getElementById('chartType'),{
      type:'doughnut',
      data:{labels:['${lbl.catAdmin}','${lbl.catAcademic}'],
            datasets:[{data:[${stats.adminFormer},${stats.academicFormer}],backgroundColor:['#8B1A2F','#C4922A'],borderWidth:3,borderColor:'white'}]},
      options:{cutout:'72%',plugins:{legend:{display:false}}}
    });
    // Donut Nat
    new Chart(document.getElementById('chartNat'),{
      type:'doughnut',
      data:{labels:['${lbl.catQatari}','${lbl.catNonQatari}'],
            datasets:[{data:[${stats.qatariFormer},${stats.nonQatariFormer}],backgroundColor:['#7C3AED','#0891B2'],borderWidth:3,borderColor:'white'}]},
      options:{cutout:'72%',plugins:{legend:{display:false}}}
    });
    // Bar monthly
    const months=${isRTL?
      "['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']":
      "['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']"};
    new Chart(document.getElementById('chartBar'),{
      type:'bar',
      data:{
        labels:months,
        datasets:[
          {label:'${lbl.catAdmin}',   data:[4,3,6,2,5,4,3,7,5,4,6,3], backgroundColor:'rgba(139,26,47,0.75)',  borderRadius:4},
          {label:'${lbl.catAcademic}',data:[3,2,5,4,3,6,2,5,4,3,5,4], backgroundColor:'rgba(196,146,42,0.75)', borderRadius:4},
        ]
      },
      options:{
        responsive:true,
        plugins:{legend:{position:'bottom'}},
        scales:{x:{grid:{display:false}},y:{beginAtZero:true,ticks:{stepSize:2}}}
      }
    });
  }
  setTimeout(drawCharts,300);

  // ── Calculator ─────────────────────────────────────────────────
  function calculateGratuity(){
    const basic  = parseFloat(document.getElementById('calcBasic').value)||0;
    const years  = parseFloat(document.getElementById('calcYears').value)||0;
    const nat    = document.getElementById('calcNat').value;
    const reason = document.getElementById('calcReason').value;
    if(!basic||!years){alert('${isRTL?"أدخل الراتب وسنوات الخدمة":"Please enter salary and years of service"}');return;}

    let gratuity=0;
    // Weekly rate = basic / 4.33 (weeks per month)
    const weekRate = basic / 4.33;
    const monthRate = basic;

    if(nat==='qatari'){
      // Civil HR Law: <5 → 3wk/yr; 5-10 → 4wk/yr; >10 → 1mo/yr
      if(years<5)       gratuity = years * 3 * weekRate;
      else if(years<=10)gratuity = years * 4 * weekRate;
      else              gratuity = years * monthRate;
    } else {
      // Labour Law: <1yr → 0; 1-5yr → 3wk/yr; >5yr → 3wk for first 5 + 1mo for rest
      if(years<1) gratuity=0;
      else if(years<=5) gratuity = years * 3 * weekRate;
      else gratuity = (5*3*weekRate) + ((years-5)*monthRate);
    }

    // Resign before 5yr (non-qatari) = 0; resign qatari after 5yr = full
    if(reason==='resign'&&nat==='nonqatari'&&years<5) gratuity=0;

    const notice   = reason==='resign'? Math.min(years,3)*monthRate : 0;
    const leavEst  = basic * 1.5; // rough estimate
    const total    = gratuity + notice + leavEst;

    const fmt = (n)=> new Intl.NumberFormat(${isRTL?"'ar-QA'":"'en-QA'"},{style:'currency',currency:'QAR',maximumFractionDigits:0}).format(n);

    document.getElementById('calcPlaceholder').classList.add('hidden');
    document.getElementById('calcOutput').classList.remove('hidden');
    document.getElementById('calcRows').innerHTML = \`
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
  </script>
  `

  return c.html(layout(lbl.title, content, 'eos', lang))
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
