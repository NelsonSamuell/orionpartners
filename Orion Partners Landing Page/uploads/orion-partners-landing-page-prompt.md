# Orion Partners — landing page prompt

Copy everything below the line into Rocket AI or Claude Design.

---

Build a complete, single-page responsive landing page for a professional services consultancy called **Orion Partners**, based in Nairobi, Kenya. Output one self-contained page (HTML/CSS/JS or React, whichever your platform uses) with smooth-scroll navigation between sections. No placeholder lorem ipsum anywhere — use the exact copy I give you below.

## Design direction

- Tone: established boutique advisory firm. Think law firm or Big Four spin-off, not a tech startup.
- Color palette (warm corporate, no purple/blue AI gradients):
  - Deep charcoal `#2B2B2B` for headings and footer background
  - Warm ivory `#FAF7F2` as the main page background
  - Terracotta `#C0603B` as the primary accent (buttons, links, active states)
  - Muted olive `#6B7052` as a secondary accent (icons, tags, dividers)
  - Soft sand `#E8E0D4` for card backgrounds and section alternation
- Typography: a serif for headings (Playfair Display or Lora) and a clean sans-serif for body text (Inter or Source Sans 3). Generous line height and whitespace.
- No gradients, no glassmorphism, no floating blobs, no emoji. Use thin rules, subtle borders, and one consistent card style. Photography-free is fine — use simple line icons where needed.
- Fully responsive: single column with a hamburger menu under 768px, comfortable tap targets on mobile, max content width around 1140px on desktop.
- Subtle only: fade-in on scroll is acceptable, nothing bouncy.

## Page structure (in this order)

### 1. Sticky header
Logo text "Orion Partners" left, nav links right: Services, About, Insights, Book a Consultation. The last link styled as a terracotta button.

### 2. Hero
- Headline: "Clarity where it matters most."
- Subheadline: "Orion Partners is a Nairobi-based advisory firm helping organisations across East Africa investigate fraud, strengthen controls, secure their systems, and prepare their people."
- Two buttons: "Book a Consultation" (primary, scrolls to booking form) and "Explore Our Services" (secondary outline, scrolls to services).

### 3. Services — four cards in a responsive grid (2×2 desktop, stacked mobile)

**Card 1 — Forensics & Corporate Investigations**
Fraud and corporate crime investigations, including field investigations, surveillance, and evidence gathering on internal fraud, procurement collusion, and asset misappropriation. Root-cause and victim-impact analysis, access-control and physical security audits, payroll and invoice verification, and investigator training for internal teams on interviewing, evidence handling, and case documentation.

**Card 2 — Internal Audit & Controls Assurance**
Risk-based audit planning ranked by financial exposure, fraud likelihood, and regulatory sensitivity. Controls testing across procure-to-pay, payroll, revenue recognition, and treasury cycles. Compliance monitoring with issue-tracking to closure, fraud risk assessment with structured red-flag screening, bookkeeping support, and board-ready audit committee reporting.

**Card 3 — Cybersecurity, GRC & Digital Forensics**
Cyber risk assessment and penetration testing across network, application, and cloud environments. GRC alignment mapping controls to ISO 27001 and NIST, incident response and forensically sound evidence capture, cloud and endpoint security hardening, and staff security awareness training with phishing simulations.

**Card 4 — Psychometric Testing Preparation**
Role-specific preparation for numerical, verbal, and abstract-reasoning assessments, calibrated to the candidate's actual test provider. Personality and EQ profiling review, plus structured mock interviews with scored feedback ahead of the live assessment date.

### 4. About section
Heading: "Who we are"
Copy: "Orion Partners is a partnership of certified practitioners in forensic investigation, audit and assurance, and cybersecurity. Between us we hold credentials spanning CPA, CFE (in progress), ISO 27001, computer forensics, and AML/CFT, with combined experience across private sector, NGO, and FMCG environments in Kenya and the wider region. We work as one team on every engagement: investigators, auditors, and security specialists who share findings across disciplines so nothing falls through the cracks."
Below the copy, three short stat blocks in a row: "15+ years combined experience", "3 practice areas, one team", "Kenya & East Africa coverage".

### 5. Insights — two blog cards side by side (stacked on mobile)
Each card has a category tag, title, 2–3 sentence excerpt, and a "Read more" link.

**Blog 1**
Tag: Fraud & Audit
Title: "Five red flags in procure-to-pay that most internal audits miss"
Excerpt: "Procurement fraud rarely announces itself. It hides in split purchase orders, recycled invoice numbers, and vendors who share directors with your own staff. Here is what a risk-based review of your procure-to-pay cycle should look for first."

**Blog 2**
Tag: Cybersecurity
Title: "ISO 27001 for Kenyan SMEs: where to start when you can't do everything at once"
Excerpt: "Full certification can feel out of reach for a small team. It doesn't have to be. We break down the controls that reduce the most risk for the least cost, and how to sequence the rest around Kenya's Data Protection Act obligations."

### 6. Booking form
Heading: "Book a consultation"
Subtext: "Tell us what you're dealing with. We respond within one business day."
Fields: Full name (text, required), Company / organisation (text), Email (email, required), Phone (tel), Service needed (dropdown with the four services above plus "Not sure yet"), Preferred date (date picker), Brief description of your situation (textarea). Submit button: "Request Consultation" in terracotta. On submit, show an inline success message: "Thank you. We've received your request and will be in touch within one business day." Include basic client-side validation for required fields.

### 7. Footer
Charcoal background, ivory text. Three columns: (1) "Orion Partners" with the one-line tagline "Forensics. Assurance. Security."; (2) quick links mirroring the nav; (3) contact block with placeholder email hello@orionpartners.co.ke, placeholder phone +254 7XX XXX XXX, and "Nairobi, Kenya". Bottom line: "© 2026 Orion Partners. All rights reserved."

Build the whole page in one output. Do not skip sections or replace my copy with generic filler.
