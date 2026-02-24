# 🚀 The Ultimate AI Stack

### 🧠 LM Studio + MCP + Agents — The Complete Self-Hosted AI Setup Guide

<div align="center">

![AI Stack](https://img.shields.io/badge/AI%20Stack-Complete-6c63ff?style=for-the-badge&logo=robot&logoColor=white)
![LM Studio](https://img.shields.io/badge/LM%20Studio-Local%20AI-00d4aa?style=for-the-badge&logo=server&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-Integration-ff6b6b?style=for-the-badge&logo=link&logoColor=white)
![Agents](https://img.shields.io/badge/Agents-7%20Specialized-ffa726?style=for-the-badge&logo=bot&logoColor=white)

**A personal passion project — a production-ready, self-hosted AI ecosystem synthesized from three expert AI guides (ChatGPT, Claude, Gemini) into one unified architecture.**

[📖 View the Guide](ultimate-guide.html) · [🏗️ Architecture](#-architecture) · [⚡ Quick Start](#-quick-start)

</div>

---

## ✨ What Is This?

This is a **comprehensive, unified guide** for building a hybrid AI system that runs on your own hardware. It combines the best practices and insights from **three separate AI-generated guides** (ChatGPT, Claude, and Gemini) into a single, beautiful, interactive HTML page.

The guide covers everything from local LLM setup to multi-agent orchestration, proactive morning briefings, and secure accounting automation.

---

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| 🧠 **30B Local Models** | GPT-OSS 20B, Qwen3-Coder, GLM-4.7-Flash running locally |
| 🔌 **8 MCP Servers** | Filesystem, Discord, GitHub, Gmail, Calendar, iMessage, Browser, SQLite |
| 🤖 **7 Specialized Agents** | Router, Deep Thinker, Coder, Researcher, Comms, Briefing Bot, Social Media |
| ⚡ **Hybrid Routing** | 70-80% tasks run FREE locally, only complex tasks hit paid APIs |
| 📋 **Morning Briefings** | Proactive daily digest delivered to Discord via cron |
| 🔧 **Self-Hosted Orchestration** | n8n + LangGraph (no OpenClaw dependency) |
| 🔐 **Security First** | Least privilege, compartmentalization, human-in-the-loop |
| 💻 **Coding Pipeline** | Claude Code + Codex with local-first hybrid architecture |

---

## 🏗️ Architecture

```
YOU
 ├─ 💬 Discord (briefings, commands, chat)
 ├─ 📱 iMessage (auto-replies via MCP)
 └─ 💻 Terminal (Claude Code)
      │
      ▼
 🧠 ORCHESTRATOR (GPT-OSS 20B via LM Studio API)
      │
      ├─ Simple tasks → Handles locally (FREE)
      ├─ Complex tasks → Routes to Claude / GPT / Gemini API
      ├─ Code tasks   → Routes to Claude Code / Codex
      ├─ Scheduled    → Cron jobs (briefings, monitoring)
      └─ 🔌 MCPs     → Discord, iMessage, GitHub, Files, DB, Calendar, Gmail
```

---

## 💻 Hardware Requirements

| Component | Desktop (Primary) | MacBook (Mobile) |
|-----------|------------------|------------------|
| 🎮 GPU/Chip | NVIDIA RTX 5080 | Apple M1 Pro |
| 💾 VRAM/Memory | 16 GB VRAM | 32 GB Unified |
| 🖥️ OS | WSL (Ubuntu) on Windows | macOS |
| 🎯 Role | Primary AI server & agent host | Mobile assistant |

---

## ⚡ Quick Start

### 1️⃣ Install LM Studio
Download from [lmstudio.ai](https://lmstudio.ai) and install the latest version.

### 2️⃣ Download Your Model
```bash
lms get openai/gpt-oss-20b
lms load openai/gpt-oss-20b
```

### 3️⃣ Enable the API Server
Go to the Developer tab in LM Studio and toggle the local API server ON.

### 4️⃣ Test the API
```python
from openai import OpenAI

client = OpenAI(base_url="http://localhost:1234/v1", api_key="not-needed")
result = client.chat.completions.create(
    model="openai/gpt-oss-20b",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(result.choices[0].message.content)
```

### 5️⃣ Open the Guide
Open `ultimate-guide.html` in your browser to explore the full interactive guide.

---

## 🤖 Model Roster

| Model | Type | Active Params | Speed | Use For |
|-------|------|---------------|-------|---------|
| 🌟 **GPT-OSS 20B** | Dense MoE | 3.6B | ~42 t/s | Daily driver, routing, chat |
| 🔧 **Qwen3-Coder-30B** | MoE | 3.3B | ~12-15 t/s | Local coding specialist |
| 🌐 **Qwen3-30B-A3B** | MoE | 3.3B | ~15-20 t/s | MacBook general purpose |
| ⚡ **GLM-4.7-Flash** | MoE | 3B | High | Alt coding model |
| 📦 **Nemotron-3-Nano** | MoE | 3.5B | Very High | Bulk data ingestion (1M ctx) |

---

## 🔌 MCP Servers

| Server | Purpose |
|--------|---------|
| 📁 Filesystem | Read/write files, project access |
| 💬 iMessage | Read & send messages |
| 🎮 Discord | Briefings, command interface |
| 🐙 GitHub | Repos, PRs, issues, automation |
| 🌐 Browser | Web search & scraping |
| 📅 Google Calendar | Events & scheduling |
| ✉️ Gmail | Email summaries & drafts |
| 🗄️ SQLite | Database queries, accounting data |

---

## 📊 Agent Swarm

| Agent | Model | Cost | Job |
|-------|-------|------|-----|
| 🔀 Router | GPT-OSS 20B (Local) | 🟢 Free | Triages tasks, routes to right agent |
| 🧠 Deep Thinker | Claude Pro API | 🟡 Sub | Complex reasoning, architecture |
| 💻 Coder | Claude Code + Codex | 🟡 Sub | Build and ship code |
| 🔍 Researcher | Gemini / GPT Pro | 🟡 Sub | Web search, summarization |
| 💬 Comms | GPT-OSS 20B (Local) | 🟢 Free | iMessage, email drafts |
| 🌅 Briefing Bot | GPT-OSS 20B (Local) | 🟢 Free | Daily morning briefing |
| 📣 Social Media | GPT-OSS 20B (Local) | 🟢 Free | Post scheduling, monitoring |

---

## 🌐 The Interactive Guide

The `ultimate-guide.html` file is a **single-file, award-winning design** featuring:

- 🎆 **Particle effect background** with connecting nodes
- ✨ **Scroll-triggered animations** via Intersection Observer
- 📱 **Fully responsive** — mobile, tablet, desktop, ultrawide
- 📳 **Haptic feedback** on interactions (mobile devices)
- 🎯 **Floating navigation** with section dots
- 📊 **Interactive routing demo** — type a task, see which agent handles it
- 🎨 **Glassmorphism cards** with mouse-tracking glow effects
- 📋 **Accordion explainers** for key concepts
- 🗂️ **Tabbed interfaces** for organized content
- 📈 **Animated stat counters**
- 📝 **Copy-to-clipboard** code blocks
- 🌊 **Gradient dividers** and smooth scroll
- 🔝 **Back-to-top button** and scroll progress bar

---

## 📂 Project Structure

```
LMStudioSetup/
├── 📄 ultimate-guide.html          # The complete interactive guide
├── 📖 README.md                     # This file
├── 📝 ChatGPT Setup Suggestion.docx # Source: ChatGPT guide
├── 📝 Claude Setup Guide.docx       # Source: Claude guide
└── 📝 Gemini Setup Suggestion.docx  # Source: Gemini guide
```

---

## 🔗 Useful Links

| Resource | URL |
|----------|-----|
| 🏠 LM Studio | https://lmstudio.ai |
| 🔌 MCP Servers | https://github.com/modelcontextprotocol/servers |
| 🤖 GPT-OSS | https://huggingface.co/openai/gpt-oss-20b |
| 🔧 n8n | https://docs.n8n.io/hosting/ |
| 📊 LangGraph | https://docs.langchain.com/oss/python/langgraph/overview |
| 💻 Claude Code | https://code.claude.com/docs/en/overview |

---

## 📜 Sources

This guide was synthesized from three AI-generated guides:

1. 🟢 **ChatGPT** — "Maxing Out LM Studio With a 30B Local Model and MCP-Powered Agents" (82 references)
2. 🟣 **Claude** — "THE COMPLETE AI STACK: Setup Guide & Architecture Plan" (13 tables, 6 phases)
3. 🔵 **Gemini** — "Architecting a Hybrid Agentic AI System" (64 references, 5 operational layers)

---

## 📄 License

This guide is for personal use. Built with ❤️ for Manuel's AI stack.

---

<div align="center">

**🧠 Local-first. 🔒 Private. 🤖 Autonomous.**

*Built February 2026*

</div>
