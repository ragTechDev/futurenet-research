# 🧑‍🤝‍🧑 Stakeholder Research & Interview Guide

Welcome to the stakeholder research area of the FutureNet project.  
This folder explains **how to plan, conduct, and document stakeholder interviews** and outlines expectations before, during, and after each session.

The goal of stakeholder interviews is to understand the needs of regulators, platform providers, safety experts, educators, and parents regarding **content assessment frameworks for online safety and age-appropriate content classification**.

---

## Purpose of Stakeholder Interviews

We conduct interviews to:
- Understand current approaches to content assessment and online safety
- Learn what regulators, platforms, and safety experts prioritize
- Verify or challenge our framework design assumptions
- Identify regulatory requirements, technical constraints, and opportunities
- Inform framework design, assessment criteria, and implementation strategy

Interviews are not sales pitches — they are learning conversations.

---

## Stakeholder Types

We aim to speak with:
- Regulators and policy makers
- Platform providers and social media companies
- Content safety and moderation experts
- Educators and child development specialists
- Parents and advocacy groups
- Technology and AI/ML experts

We use stakeholder codes (e.g. E01 for experts, R01 for regulators, P01 for platform providers) to protect identities.

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
- what FutureNet content assessment framework aims to explore
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
[`docs/interviews/interview-notes/0-interview-notes-template.md`](docs/interviews/interview-notes/0-interview-notes-template.md)

Use tags such as `#contentassessment #onlinesafety #agerating #moderation #regulation #ai #platformsafety` for easy searching across repository.

---

# 📝 After the Interview

### **1. Save Transcript/Raw Notes**
Create a file in:
[`docs/interviews/interview-transcripts`](docs/interviews/interview-transcripts)

Use format:
- E01-expert-transcript.md
- R01-regulator-transcript.md
- P01-platform-provider-transcript.md
- A01-advocacy-group-transcript.md
- T01-tech-specialist-transcript.md

### **2. Summarize into Notes In Standard Format**
Use the template in [`docs/interviews/interview-notes/0-interview-notes-template.md`](docs/interviews/interview-notes/0-interview-notes-template.md) to fill in notes template from your raw notes in the transcript. You can use an AI tool to do so! 

_Chatbot Prompt_
```txt
Generate user interview notes in markdown using the template below from the raw notes and transcript:

Raw notes/transcript:
[Copy-paste your raw notes here]

Interview Notes template:
[Copy-paste template here]
```

_Cascade Coding Tool Prompt_
```
Create an interview note file in docs/interviews/interview-notes/ using the template in 0-interview-notes-template.md from the raw notes and transcript in docs/interviews/interview-transcripts/[name-of-file].md
```

### **3. Create Stakeholder Persona If New Persona Identified**
Look through the stakeholder personas in [`docs/interviews/user-personas`](docs/interviews/user-personas) if any of them fit the interview you just did. If this is a new stakeholder persona, create a new persona file. You can adapt the prompts from above to use the same workflow to generate a stakeholder persona.

### **4. Add Findings to Insights Dashboard**
In a group after a batch of interviews or individually, update:
[`docs/interviews/summary/insights-dashboard.md`](docs/interviews/summary/insights-dashboard.md)


### **5. Identify Themes**
Add summary insights & opportunities to:
[`docs/interviews/summary/insights-and-themes.md`](docs/interviews/summary/insights-and-themes.md)


### **6. Create GitHub Issues if Needed**
Examples:
- New assessment criteria identified
- Regulatory requirement discovered
- Framework design gap identified
- Technical implementation challenge

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
It ensures we build a content assessment framework that is practical, effective, and trusted by regulators, platforms, and families alike.

