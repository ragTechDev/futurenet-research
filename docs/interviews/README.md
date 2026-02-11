# 🧑‍🤝‍🧑 Stakeholder Research & Interview Guide

Welcome to the stakeholder research area of the FutureNet project.  
This folder explains **how to plan, conduct, and document stakeholder interviews** and outlines expectations before, during, and after each session.

The goal of stakeholder interviews is to understand the needs of children aged 5–12, parents, teachers, schools, and experts regarding **safe, distraction-minimal, ethically designed communication devices for kids**.

---

## 🎯 Purpose of Stakeholder Interviews

We conduct interviews to:
- Understand real needs and behaviours around children’s device usage
- Learn what parents, teachers, and students value most
- Verify or challenge our design and product assumptions
- Identify risks, constraints, and opportunities
- Inform UI/UX decisions, feature roadmap, and positioning strategy

Interviews are not sales pitches — they are learning conversations.

---

## 🧠 Stakeholder Types

We aim to speak with:
- Children (5–8, 9–12)
- Parents and caregivers
- Teachers & school staff
- Safety and education experts
- Technology and policy advisors

We use stakeholder codes (e.g. P01, T01, S03) to protect identities.

---

# 📌 Before the Interview

### **1. Review Materials and Prepare**
- Prepare and/or if already available read the relevant **interview-questions**
- Know which stakeholder type you’re speaking with
- Check if consent form is needed for recording

### **2. Schedule + Confirm**
Send invitation message including:
- Purpose
- Duration (30–45 mins)
- Research privacy statement
- Consent to record (optional)

### **3. Set Roles**
| Role | Description |
|------|-------------|
| Interviewer | leads discussion & deepens questions |
| Note-taker | captures quotes & observations |
| Observer (optional) | silent, watches interaction |

If solo: record (if allowed) and take lightweight notes.

---

# 🎙 During the Interview

### **Opening Script**
Introduce:
- who we are
- what FutureNet aims to explore
- why their input matters
- consent

### **Conversation Approach**
- Ask open-ended questions
- Listen more than you speak
- Avoid leading questions
- Follow curiosity

### **Note-taking**
Capture:
- Direct quotes (word-for-word where possible)
- Pain points & emotions
- Needs & expectations
- Surprising insights

Use the template:  
[`docs\research\stakeholders\interview-notes\0-interview-notes-template.md`](docs\research\stakeholders\interview-notes\0-interview-notes-template.md)

Use tags such as `#safety #communication #screenaddiction #schooluse #trust #privacy` for easy searching across repository.

---

# 📝 After the Interview

### **1. Save Transcript/Raw Notes**
Create a file in:
[`docs\research\stakeholders\interview-transcripts`](docs\research\stakeholders\interview-transcripts)

Use format:
- E01-expert-transcripts.md
- P01-parent-transcripts.md
- R01-regulator-transcripts.md
- S01-student-transcripts.md
- T01-teacher-transcripts.md

### **2. Summarize into Notes In Standard Format**
Use the template in [`docs/research/stakeholders/interview-notes/0-interview-notes-template.md`](docs/research/stakeholders/interview-notes/0-interview-notes-template.md) to fill in notes template from your raw notes in the transcript. You can use an AI tool to do so! 

_Chatbot Prompt_
```txt
Generate user interview notes in markdown using the template below from the raw notes and transcript:

Raw notes/transcript:
[Copy-paste your raw notes here]

Interview Notes template:
[Copy-paste template here]
```

_Vibe Coding Tool Prompt_
```
Create a user interview note file in docs/research/stakeholders/interview-notes/ using the template in 0-interview-notes-template.md below from the raw notes and transcript in docs\research\stakeholders\interview-transcripts\[name-of-file].md
```

### **3. Create User Persona If New Persona identified**
Look through the user personas in [`docs/research/user-personas`](docs/research/user-personas) if any of them fit the interview you just did. If this is a new user persona, create a new user persona file. You can adapt the prompts from above to use the same workflow to generate a user persona.

### **4. Add Findings to Insights Dashboard**
In a group after a batch of interviews or individually, update:
[`docs\research\stakeholders\summary\insights-dashboard.md`](docs\research\stakeholders\summary\insights-dashboard.md)


### **5. Identify Themes**
Add summary insights & opportunities to:
[`docs\research\stakeholders\summary\insights-and-themes.md`](docs\research\stakeholders\summary\insights-and-themes.md)


### **6. Create GitHub Issues if Needed**
Examples:
- New feature request
- UX problem discovered
- Safety gap identified

### **7. Thank the participant**
A short message expressing appreciation.

---

# ✔ Success Checklist

| Task | Done |
|-------|-------|
| Scheduled + confirmed interview | ☐ |
| Prepared guide + questions | ☐ |
| Consent confirmed | ☐ |
| Notes taken & stored | ☐ |
| Dashboard updated | ☐ |
| Insights shared | ☐ |

---

# 💡 Tools We Recommend
| Tool | Purpose |
|-------|----------|
| Google Meet / Zoom / In-person | Interview |
| GitHub Markdown | Note storage |
| Miro (optional) | Group clustering / affinity mapping |
| Notion or Obsidian (optional) | Research knowledge base |

---

# 🙌 Thank You
Running interviews is one of the most valuable contributions to FutureNet.  
It ensures we build something children can use safely — and parents & educators can trust.

