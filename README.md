# Qatar University - Payroll Services Portal

## 📋 Project Overview

**Name**: Qatar University Payroll & HR Services Portal  
**Description**: A comprehensive web-based portal for managing payroll, HR services, and scholarship programs at Qatar University.  
**Technology Stack**: Hono + TypeScript + Cloudflare Pages + TailwindCSS  
**Languages**: Full bilingual support (Arabic/English)

## 🚀 Live URLs

- **Production**: https://3000-i4hic5e192ibdvpepzx88-ea026bf9.sandbox.novita.ai
- **Scholarship Dashboard**: https://3000-i4hic5e192ibdvpepzx88-ea026bf9.sandbox.novita.ai/scholarship?lang=ar
- **SLA Management**: https://3000-i4hic5e192ibdvpepzx88-ea026bf9.sandbox.novita.ai/sla?lang=ar
- **Staff Portal**: https://3000-i4hic5e192ibdvpepzx88-ea026bf9.sandbox.novita.ai/staff-login?lang=ar
- **GitHub**: https://github.com/nawafhe708-coll/payroll

## ✨ Main Features

### 1. Payroll Management System
- **18 HR forms** available for download
- Complete procedures and policies documentation
- Allowances management system
- End-of-service calculations
- Promotion tracking dashboard

### 2. Staff Portal
- Secure employee login (demo credentials available)
- Service request submission
- Request status tracking with real-time updates
- Return/resubmit workflow for rejected requests
- Live chat with payroll department

### 3. Scholarship Program System ⭐ NEW
- **Dashboard**: Overview with KPIs (24 active scholars, 7 pending, QAR 2.4M budget)
- **Rules & Policies**: Complete eligibility criteria and coverage details
  - Minimum 3 years service requirement
  - Full tuition + QAR 5,000 monthly stipend
  - 2-year service commitment per study year
  - Minimum CGPA 3.0 requirement
- **Application Procedures**: 4-step workflow with timeline (17-25 working days)
  1. Submit application with documents
  2. Department head review (5-7 days)
  3. HR approval (3-5 days)
  4. Payroll setup (7-10 days)
- **Scholar Tracking**: Monitor active scholars, payments, and academic progress
  - Filter by status, program type, and university
  - Export to CSV
  - View payment history
- **Application Form**: Employee self-service application
  - Document upload (acceptance letter, transcript, CV)
  - Automatic SLA request creation
  - Real-time status tracking

### 4. SLA Management System
- Automatic request tracking with SLA deadlines
- Real-time cross-tab synchronization (BroadcastChannel API)
- Request return/approval workflow
- Priority-based processing
- Support for 7 service types including **Scholarship Applications**
- Staff portal and admin dashboard integration
- Audio notifications for new requests

## 📊 Data Architecture

### Storage Services
- **LocalStorage**: Request data, chat messages, and tracking
- **BroadcastChannel API**: Real-time cross-tab communication
- **Storage Events**: Fallback synchronization

### Data Models
- **SLA Requests**: id, type, empName, empId, status, priority, submittedAt, slaDate, details, source
- **Scholarship Applications**: Extends SLA requests with program details, university info, tuition, justification
- **Scholars**: id, name, empId, program, major, university, startDate, stipend, status
- **Chat Messages**: reqId, sender, text, time, read status

## 🎯 Completed Features

✅ Full HR forms catalog with download links  
✅ Comprehensive procedures and policies pages  
✅ Allowances calculation and tracking  
✅ End-of-service management  
✅ Promotion tracking system  
✅ Staff portal with authentication  
✅ Service request workflow with return/resubmit  
✅ SLA management dashboard  
✅ Real-time request synchronization  
✅ Live chat between staff and payroll  
✅ **Scholarship program dashboard with KPIs**  
✅ **Scholarship rules and eligibility criteria**  
✅ **Step-by-step application procedures**  
✅ **Scholar tracking and payment monitoring**  
✅ **Employee scholarship application form**  
✅ **Integration with SLA system**  
✅ **Bilingual scholarship interface (AR/EN)**  

## 📝 Pending Features

⏳ PDF scholarship forms generation  
⏳ Scholarship payment automation  
⏳ Academic progress tracking with grade submission  
⏳ Service commitment contract generation  

## 🔐 Demo Credentials

**Staff Portal Login**:
- Username: `staff` / Password: `qu2025`
- Username: `employee` / Password: `payroll@123`
- Username: `qu-staff` / Password: `qu@staff`

## 🛠️ Development

### Installation
```bash
git clone https://github.com/nawafhe708-coll/payroll.git
cd payroll
npm install
```

### Local Development
```bash
# Build first (required for Cloudflare Pages)
npm run build

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Or use wrangler directly
npm run dev:sandbox
```

### Testing
```bash
# Test main pages
curl http://localhost:3000
curl http://localhost:3000/scholarship?lang=ar
curl http://localhost:3000/sla?lang=ar
curl http://localhost:3000/staff-login?lang=ar
```

## 📦 Deployment

### Deploy to Cloudflare Pages
```bash
# Build
npm run build

# Deploy
npm run deploy
```

### Manual Deployment
```bash
# Login to Cloudflare
npx wrangler login

# Create project (first time only)
npx wrangler pages project create payroll

# Deploy
npx wrangler pages deploy dist --project-name payroll
```

## 📁 Project Structure

```
webapp/
├── src/
│   └── index.tsx           # Main application (7,700+ lines)
│       ├── Translations (EN/AR)
│       ├── Layout & Components
│       ├── Routes:
│       │   ├── / (Dashboard)
│       │   ├── /procedures
│       │   ├── /forms
│       │   ├── /allowances
│       │   ├── /end-of-service
│       │   ├── /promotions
│       │   ├── /scholarship ⭐
│       │   │   ├── /rules
│       │   │   ├── /procedures
│       │   │   ├── /tracking
│       │   │   └── /apply
│       │   ├── /sla (Admin)
│       │   ├── /staff-login
│       │   ├── /staff (Employee portal)
│       │   └── /staff-request
│       └── JavaScript Logic
├── public/
│   └── static/
│       ├── HR-17-Tuition-Waiver-Request-Form.pdf
│       └── style.css
├── dist/                   # Build output
├── package.json
├── wrangler.jsonc         # Cloudflare config
├── vite.config.ts
├── ecosystem.config.cjs   # PM2 config
└── README.md
```

## 🎨 UI Components

- **TailwindCSS**: Utility-first styling
- **FontAwesome 6**: Icon library
- **Responsive Design**: Mobile-first approach
- **RTL Support**: Full Arabic language support
- **Custom Maroon Theme**: QU branding colors

## 📞 Contact & Support

For inquiries about the scholarship program:
- **Phone**: Ext. 4100 / 4101
- **Email**: scholarship@qu.edu.qa
- **Working Hours**: Sun-Thu: 7:30 AM - 3:30 PM

For general payroll inquiries:
- **Email**: payroll@qu.edu.qa

## 📄 License

Qatar University © 2025 - Internal Use Only

## 🔄 Recent Updates

**Latest Update (2025-04-09)**:
- ✨ Added complete scholarship program management system
- ✨ Integrated scholarship requests with SLA tracking
- ✨ Built 4-page scholarship interface (dashboard, rules, procedures, tracking)
- ✨ Created employee scholarship application form
- ✨ Added scholar tracking with payment monitoring
- ✨ Full bilingual support for scholarship module
- 🐛 Fixed scholarship type in SLA filters

---

**Total Lines of Code**: 7,700+ lines of TypeScript/HTML/JavaScript  
**Last Build**: 2025-04-09  
**Version**: 2.5.0
