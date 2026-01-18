# Technical Glossary

A comprehensive guide to technical concepts, platforms, and terms for the FutureNet project.

---

## 1. Mobile Device Management (MDM)

**Definition:** Mobile Device Management (MDM) refers to software and policies used to remotely manage, configure, secure, and monitor devices such as smartphones and tablets.

**Why it matters for us:** MDM allows schools or parents to enforce screen time limits, restrict apps, filter content, apply device‑wide settings, and manage devices at scale.

**Key capabilities:**
- App installation and blocking
- Screen time enforcement
- Content filtering
- Location tracking (when legally permitted)
- Remote lock and wipe

**Learn more:** https://en.wikipedia.org/wiki/Mobile_device_management

---

## 2. Device Profile (Management Profile)

**Definition:** A device profile is a configuration package — a set of rules and settings pushed to a device through an MDM system. Think of it as the "what" and "how" of device management.

**Examples:**
- Allowed and blocked apps
- Daily usage time windows
- Camera or microphone restrictions
- Network and VPN settings
- Display and accessibility settings

**Why it matters:** Profiles allow you to design age‑appropriate, context‑aware environments (for example, different rules for school hours vs home hours).

**Key distinction:** A device profile is the policy document itself, not a physical space on the device. It can be applied to:
- The entire device (full device management)
- Just a managed profile (leaving personal space untouched)

**Related concept:** Configuration Profiles (Apple terminology)

---

## 3. Enrolling a Device

**Definition:** Device enrollment is the process of registering a phone or tablet into an MDM system so that profiles and policies can be applied.

**Common enrollment methods:**
- QR code enrollment
- Zero‑touch / automated enrollment (for schools)
- Manual enrollment using a work or school account

**Why it matters:** Without enrollment, device‑level controls cannot be enforced reliably.

---

## 4. Samsung Knox

**Definition:** Samsung Knox is Samsung's enterprise‑grade security and device management platform built into Samsung devices at the hardware and OS level.

**Important distinction:** Knox is **not itself an MDM**, but rather a platform that enables MDM capabilities. It provides the infrastructure and APIs that allow MDM solutions (like Microsoft Intune, VMware Workspace ONE, etc.) to implement deep, system-level controls on Samsung devices.

**What Knox provides:**
- Secure boot and hardware‑backed security
- Enterprise‑level MDM capabilities
- Work and managed profiles
- Fine‑grained control over system features

**Knox components:**
- **Knox Platform for Enterprise (KPE)**: The core security framework
- **Knox Mobile Enrollment (KME)**: Zero-touch enrollment service
- **Knox Manage**: Samsung's own MDM solution (an actual MDM product)

**How it works with MDM:** Knox provides the secure foundation and technical capabilities, while MDM software leverages Knox APIs to push policies and manage devices.

**Analogy:** Knox is like the operating system's security layer, while MDM is the management software that runs on top of it.

**Why it matters:** Knox allows deep, system‑level controls that are not possible with consumer parental‑control apps.

**Official site:** https://www.samsungknox.com

---

## 5. Managed Profile / Work Profile

**Definition:** A managed profile is a separate, isolated environment (container) on the device where managed apps and data live separately from personal apps. It creates a dual-environment setup on a single device.

**Key characteristics:**
- Physical partition or container on the device
- Apps and data are isolated from the personal profile
- Visually distinct (often marked with a briefcase icon on Android)
- Personal apps remain unaffected by managed profile policies

**Use case for us:**
- School‑approved apps in a controlled container
- Clear separation between learning and entertainment
- Enforced restrictions without fully locking down the device

**How it works with device profiles:** A device profile (the rules/settings) can be pushed to a managed profile (the isolated space) to enforce policies without affecting the user's personal environment.

**Example:** A child's phone has two environments:
- Personal profile: Their own Instagram, games, photos
- Managed profile: School email, educational apps, restricted browser — all controlled by school policies

**Android reference:** https://developer.android.com/work/managed-profiles

---

## 6. Screen Time Management

**Definition:** Screen time management refers to controlling how long and when a device or app can be used.

**Common controls:**
- Daily time limits
- App‑specific limits
- Scheduled downtime
- School‑hours vs after‑hours policies

**Why it matters:** Excessive screen time is associated with poorer mental health outcomes in adolescents, though relationships are complex and multi‑factorial.

---

## 7. App Whitelisting and Blacklisting

**Whitelisting:** Only approved apps are allowed to be installed or used.

**Blacklisting:** Specific apps are explicitly blocked.

**Best practice for kids:** Whitelisting is generally safer for younger users; hybrid approaches work better for older teens.

---

## 8. Content Filtering

**Definition:** Content filtering restricts access to inappropriate or harmful content based on categories, keywords, or ratings.

**Types:**
- Web filtering (URLs, categories)
- Safe search enforcement
- App store age ratings

**Limitations:** Filtering reduces exposure but cannot fully replace education and guidance.

---

## 9. Location Tracking

**Definition:** The ability to view a device's approximate or real‑time location.

**Important considerations:**
- Should be transparent to both kids and guardians
- Best used for safety, not surveillance

---

## 10. Accessibility & Visual Comfort Settings

**Examples:**
- Reduced blue light
- Dark mode
- Lower brightness caps
- Larger text and simplified UI

**Why it matters:** Visual ergonomics can reduce eye strain, fatigue, and cognitive overload.

---

## 11. Digital Wellbeing APIs

**Definition:** Operating system APIs that provide data on app usage, screen time, and interaction patterns.

**Android reference:** https://developer.android.com/topic/digital-wellbeing

---

## 12. Data Privacy & Compliance

**Key concepts:**
- Data minimization
- Consent and transparency
- Purpose limitation

**Relevant regulations:**
- GDPR (EU)
- COPPA (US)
- PDPA (Singapore)

**Why it matters:** Any system involving minors must be privacy‑first by design.

---

## 13. Role‑Based Access Control (RBAC)

**Definition:** RBAC restricts system access based on user roles.

**Example roles:**
- School administrator
- Teacher
- Parent or guardian
- Student

---

## 14. Zero‑Trust Security Model

**Definition:** A security model that assumes no device or user is trusted by default.

**Why it matters:** Protects against misuse, data leaks, and unauthorized access.

---

## 15. Audit Logs and Monitoring

**Definition:** Records of actions taken on a device or system.

**Examples:**
- Profile changes
- Policy updates
- App installs or removals
