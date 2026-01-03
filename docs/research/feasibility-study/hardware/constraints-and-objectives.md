# Objectives & Constraints (Hardware Exploration)

**Focus:** Feasibility, suppliers, and rugged hardware design for children

---

## 1. Research Objectives

- Confirm whether **e-ink or small Android hardware** is viable for children (7–12)
- Identify **commercially available display modules and OEM/ODM suppliers**
- Evaluate **durability, power, cost, and manufacturability**
- Determine **UX and safety trade-offs** vs LCD
- Shortlist **2–3 hardware reference designs** for prototyping

---

## 2. Use-Case Constraints  
**Primary Use Case: Children Ages 7–12**

---

### 2.1 User Profile Constraints

- **Target age range:** 7–12 years
- **Reading ability:** early reader → fluent
- **Motor skills:** needs to be surveyed
- **Attention span:** limited, easily distracted

**Implications**
- Touch targets ≥9–10mm
- UI legible at arm’s length
- No precision gestures or complex interactions

---

### 2.2 Usage Pattern Constraints

#### Session Length
- Typical session: **10–25 minutes**
- Maximum continuous use: **≤30 minutes**

**Implications**
- Instant wake required (<1 second)
- Long boot times unacceptable
- E-Ink acceptable only if page turns feel responsive

---

#### Interaction Type
- Primary: reading, light interaction
- Secondary: quizzes, drawing, note-taking
- Not required: video playback, fast animation, gaming

**Implications**
- Reading-first experience favors E-Ink
- Android acceptable only with interaction limits

---

### 2.3 Environmental Constraints

#### Usage Locations
- Home
- Classroom
- Car
- Outdoor environments

**Implications**
- Sunlight readability required
- Matte or reflective displays preferred

---

#### Handling Conditions
- One-handed and two-handed use
- Used while sitting, walking, or lying down

**Implications**
- Target weight ≤350g
- Rounded edges and non-slip grip required

---

### 2.4 Durability Constraints

#### Physical Stress
- Drops from desk height (~1m)
- Accidental knocks
- Backpack compression

**Implications**
- Ruggedized enclosure mandatory
- Raised bezel above display
- Internal shock absorption required

---

#### Environmental Exposure
- Light water splashes
- Dirt, crumbs, dust

**Implications**
- Minimum IPX4 water resistance
- Covered or sealed ports

---

### 2.5 Safety Constraints (Non-Negotiable)

#### Physical Safety
- No sharp edges
- No small detachable parts
- Stylus (if included) must be non-swallowable

---

#### Health & Ergonomics
- Low blue-light exposure
- Minimal heat generation
- Surface temperature ≤40°C during use

**Implications**
- E-Ink has inherent advantage
- Android requires thermal throttling and power limits

---

#### Regulatory Compliance
- CPSIA (US)
- EN71 (EU)
- RoHS
- SAR compliance (if wireless)

---

### 2.6 Power & Battery Constraints

#### Battery Life
- Target: **3–7 days** typical use
- Charging frequency: **≤2 times per week**

**Implications**
- E-Ink preferred for reading-heavy use
- Android devices require aggressive power optimization

---

#### Charging
- USB-C only
- Overcharge protection required
- No exposed pogo pins or fragile connectors

---

### 2.7 UX & Input Constraints

#### Input Method
- Touch-first interface
- Physical buttons limited to:
  - Power
  - Optional Home/Back

---

#### Stylus (Optional)
- Diameter ≥8mm
- Tethered or magnetically retained
- Passive (no battery)

---

### 2.8 Content Constraints

#### Allowed Content
- Text
- Static images
- Simple diagrams
- Low-frame animations (optional)

---

#### Discouraged / Disallowed
- Video autoplay
- Fast or continuous animations
- Infinite scrolling feeds
- Default notifications

---

### 2.9 OS & Lifecycle Constraints

- Minimum **3 years** of security updates
- Stable OS baseline (no frequent major upgrades)
- Core functionality must work offline

---

### 2.10 Cost & Replacement Constraints

- Device must tolerate higher breakage rates
- Replacement cost must be manageable

**Implications**
- Over-engineered displays discouraged
- Protective or modular design preferred

---

### 2.11 Manufacturing Constraints

- MOQ ≤5,000 units preferred
- Lead time ≤12 weeks
- At least one backup supplier required

---

### 2.12 Decision Gate (Fail Fast)

A hardware option is invalid if it:
- Requires daily charging
- Overheats during normal use
- Breaks under common drops
- Encourages long screen sessions
- Fails child-safety compliance
- Depends on unstable suppliers

---
