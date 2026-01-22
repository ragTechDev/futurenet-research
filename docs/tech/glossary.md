# Technical Glossary

A comprehensive guide to technical concepts, platforms, and terms for the FutureNet project.

---

## 1. Device Management Application (DMA)

**Definition:** A Device Management Application (DMA) is a school-mandated application installed on learning devices. It is used on school-issued devices and may also be installed on student-owned devices with parental or guardian consent. Its stated purpose is to support classroom use of devices and to safeguard students' online behaviour.

**The DMA consists of three functional components:**

1. **Mobile Device Management Service (MDM)**: A component within the DMA responsible for device and system management. It handles software and operating system updates, protects devices from malicious software, and applies filtering to block objectionable or non-educational internet content.

2. **Classroom Management Service**: Used during lesson time to allow teachers to manage how students use their devices.

3. **Usage Management Service**: Used to supervise and limit device use outside school hours (optional, decided by parents).

**Why it matters for us:** The DMA provides comprehensive device management that spans classroom control, content filtering, and optional parental supervision outside school hours.

**Learn more:** https://en.wikipedia.org/wiki/Mobile_device_management

---

## 2. Mobile Device Management Service (MDM)

**Definition:** Mobile Device Management (MDM) is a component within the Device Management Application (DMA) responsible for device and system management. More broadly, MDM refers to software and policies used to remotely manage, configure, secure, and monitor devices such as smartphones and tablets.

**Why it matters for us:** MDM allows schools or parents to enforce screen time limits, restrict apps, filter content, apply device‑wide settings, and manage devices at scale.

**Key capabilities:**
- Software and operating system updates
- Protection from malicious software
- Content filtering to block objectionable or non-educational content
- App installation and blocking
- Screen time enforcement
- Location tracking (when legally permitted)
- Remote lock and wipe

**Limitations:** Traditional MDM systems can sometimes be bypassed or disabled by tech-savvy students, and may only work at the network layer.

**Learn more:** https://en.wikipedia.org/wiki/Mobile_device_management

---

## 3. Classroom Management Service

**Definition:** A component of the Device Management Application (DMA) used during lesson time to allow teachers to manage how students use their devices.

**Key capabilities:**
- Real-time monitoring of student device activity
- Ability to lock/unlock student devices
- Screen sharing and broadcasting
- App and website access control during class
- Focus mode enforcement

**Why it matters:** Enables teachers to maintain classroom control and ensure students stay on-task during lessons.

---

## 4. Usage Management Service

**Definition:** A component of the Device Management Application (DMA) used to supervise and limit device use outside school hours. This service is optional and decided by parents or guardians.

**Key capabilities:**
- Screen time limits outside school hours
- Bedtime and downtime scheduling
- App usage monitoring and restrictions
- Parental oversight of device activity

**Why it matters:** Extends device management beyond school hours, giving parents control over their child's device usage at home while respecting parental choice.

---

## 5. Device Profile (Management Profile)

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

## 6. Enrolling a Device

**Definition:** Device enrollment is the process of registering a phone or tablet into an MDM system so that profiles and policies can be applied.

**Common enrollment methods:**
- QR code enrollment
- Zero‑touch / automated enrollment (for schools)
- Manual enrollment using a work or school account

**Why it matters:** Without enrollment, device‑level controls cannot be enforced reliably.

---

## 7. Samsung Knox

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

## 8. Managed Profile / Work Profile

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

## 9. Screen Time Management

**Definition:** Screen time management refers to controlling how long and when a device or app can be used.

**Common controls:**
- Daily time limits
- App‑specific limits
- Scheduled downtime
- School‑hours vs after‑hours policies

**Why it matters:** Excessive screen time is associated with poorer mental health outcomes in adolescents, though relationships are complex and multi‑factorial.

---

## 10. App Whitelisting and Blacklisting

**Whitelisting:** Only approved apps are allowed to be installed or used.

**Blacklisting:** Specific apps are explicitly blocked.

**Best practice for kids:** Whitelisting is generally safer for younger users; hybrid approaches work better for older teens.

---

## 11. Content Filtering

**Definition:** Content filtering restricts access to inappropriate or harmful content based on categories, keywords, or ratings.

**Types:**
- Web filtering (URLs, categories)
- Safe search enforcement
- App store age ratings

**Limitations:** Filtering reduces exposure but cannot fully replace education and guidance.

---

## 12. Location Tracking

**Definition:** The ability to view a device's approximate or real‑time location.

**Important considerations:**
- Should be transparent to both kids and guardians
- Best used for safety, not surveillance

---

## 13. Accessibility & Visual Comfort Settings

**Examples:**
- Reduced blue light
- Dark mode
- Lower brightness caps
- Larger text and simplified UI

**Why it matters:** Visual ergonomics can reduce eye strain, fatigue, and cognitive overload.

---

## 14. Digital Wellbeing APIs

**Definition:** Operating system APIs that provide data on app usage, screen time, and interaction patterns.

**Android reference:** https://developer.android.com/topic/digital-wellbeing

---

## 15. Data Privacy & Compliance

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

## 16. Role‑Based Access Control (RBAC)

**Definition:** RBAC restricts system access based on user roles.

**Example roles:**
- School administrator
- Teacher
- Parent or guardian
- Student

---

## 17. Zero‑Trust Security Model

**Definition:** A security model that assumes no device or user is trusted by default.

**Why it matters:** Protects against misuse, data leaks, and unauthorized access.

---

## 18. Audit Logs and Monitoring

**Definition:** Records of actions taken on a device or system.

**Examples:**
- Profile changes
- Policy updates
- App installs or removals
