# FutureNet — Web UI Demo
*A minimal-distraction kid-friendly mobile interface prototype for a safer digital future.*

FutureNet is a web-based prototype of a mobile launcher UI designed for children in primary school.  
The purpose of this demo is to **visualize the UI/UX direction**, validate interaction concepts, and present ideas to collaborators, parents, educators, and potential partners **before building hardware or Android apps**.

This project is part of the larger vision to build a **digital village (kampung)** for children — a safe environment that promotes responsible technological growth.

---

## 🌱 Project Vision
FutureNet imagines a world where children use technology safely, free from the commercial pressures and distractions of the modern internet.  
Inspired by **Japan’s keitai phones for kids**, FutureNet explores:

- A **minimal-distraction interface**
- **Whitelisted communication** with trusted contacts
- A **private network separate from the public internet**
- Tools for learning, independence, and digital wellbeing
- Community-driven development

FutureNet’s UI intends to later on branch into two age-appropriate variants, but first focusing on the 5-8 year old age group as a base:

| UI Track | Age Group | Purpose |
|----------|-----------|----------|
| **LittleLink** | 5–8 years | Simple, bright, focused experience |
| **LaterLink** | 9–12 years | More mature, safe transition toward independence |

This repo contains the **Web UI Demo** for these prototypes.

---

## 🎯 Goals of the Web Demo
- Explore layout, interaction patterns, colour systems, icon scale
- Validate design assumptions across age groups
- Support usability input from parents and educators
- Prototype concepts quickly and affordably in a sharable format
- Provide a visual basis for pitching and recruiting contributors

> ⚠ This demo is UI-only — no real messaging, networking, or OS features are implemented yet.

---

## 📱 Core App Concepts (Example placeholders)
- Messaging with parental controls
- Location sharing / tracking
- SOS button
- Safe browser (content filtering, whitelist)
- Note taking & homework reminders
- Maps / navigation
- Access to MOE learning tools
- Lightweight supervised payment
- Responsible AI tool for research

---

## 👦👧 User Profiles & Usability Notes
### Ages 5–8 (LittleLink)
- Bright colours  
- Large icons  
- Simple navigation  
- Low distraction environment  

### Ages 9–12 (LaterLink)
- Mimics simplified adult smartphone UX responsibly  
- Social creativity, messaging, and productivity  
- Safe gateway to internet-connected tools  

> *Most children start forming digital habits very early; FutureNet aims to establish healthy foundations from day one.*

---

## 🛠 Tech Stack
| Component | Technology |
|------------|------------|
| Framework | React or Next.js |
| Styling | TailwindCSS |
| Deployment | Vercel / Netlify |
| State | Minimal / local only (demo focus) |

**Future plan:** Android launcher in **Kotlin + Jetpack Compose** once UX stabilizes.

---

## 📁 Project Structure

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Project Resources

For easier navigation, here are links to the main project folders and documentation:

| Area | Description | Link |
|------|-------------|------|
| **Research** | All research documentation | [docs/research](docs/research/README.md) |
| **Stakeholder Research** | Notes, templates, and insights from interviews with parents, teachers, students, and experts. | [docs/research/stakeholders](docs/research/stakeholders/README.md) |
| **User Persona Research** | Template for user persona. | [docs\research\user-personas\user-persona-[name].md](docs\research\user-personas\user-persona-[name].md) |
| **Design** | All design documentation | [docs/design](docs/design/README.md) |
| **Wireframes (Low-Fidelity)** | PlantUML/SALT wireframes. | [docs\design\wireframes\low-fidelity\README.md](docs\design\wireframes\low-fidelity\README.md) |


> Tip: Always refer to the relevant README in each folder for detailed instructions and workflow.
