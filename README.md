# 🔍 MayaBhed

> **"सत्य और भ्रम के बीच का अंतर पहचानने का प्रयास।"**

MayaBhed is an AI-powered misinformation detection web application that helps users analyze suspicious news, claims, social media posts, and viral messages using Large Language Models (LLMs).

The name **"MayaBhed"** is inspired by the Sanskrit words:

- **Maya (माया)** → Illusion, deception, false appearance
- **Bhed (भेद)** → Difference, distinction, uncovering the truth

Together, **MayaBhed** means:

> **"Uncovering the truth hidden behind illusion."**

---

# 🌐 Live Demo

🔗 https://maya-bhed.vercel.app


---

# ✨ Features

- 🧠 AI-powered claim analysis
- 📄 Detects misleading and fake information
- 📊 Confidence score generation
- 📝 Human-readable explanation
- ✅ Reasons behind the decision
- 💡 Verification advice
- 🎨 Modern glassmorphism UI
- 📱 Responsive design
- ⚡ Fast serverless deployment

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Backend

- Node.js
- Vercel Serverless Functions

### AI

- Groq API
- Llama 3.3 70B Versatile

### Deployment

- Vercel

---

# ⚙️ How It Works

1. User enters a claim, article, or news.
2. The request is sent securely to the backend.
3. MayaBhed sends the claim to Groq's Llama model.
4. The AI analyzes the content.
5. Structured information is returned including:
   - Classification
   - Confidence
   - Summary
   - Reasons
   - Verification Advice
6. Results are displayed in a clean UI.

---

# 📂 Project Structure

```
MayaBhed
│
├── api/
│   └── analyze.js
│
├── assets/
│
├── script.js
├── style.css
├── index.html
├── package.json
└── README.md
```

---

# 🧠 AI Response Format

The AI returns structured information in JSON format:

```json
{
  "classification": "Fake",
  "confidence": 95,
  "summary": "...",
  "reasons": [
    "...",
    "..."
  ],
  "verificationAdvice": [
    "...",
    "..."
  ]
}
```

---

# 🎯 Purpose

The internet is flooded with misinformation, manipulated headlines, and viral claims.

MayaBhed aims to assist users by providing AI-powered analysis that encourages critical thinking rather than blind trust.

It is designed as a supporting tool—not a replacement for professional fact-checking organizations.

---

# 🚀 Future Improvements

- Multi-language support
- Source citations
- URL fact checking
- Image misinformation detection
- PDF & document analysis
- Voice input
- Browser extension
- Fact-check history
- User accounts
- AI explanation improvements

---

# ⚠️ Disclaimer

MayaBhed provides AI-generated analysis and should be used as an informational assistant only.

Users are encouraged to verify important claims through trusted and official sources.

---

# 💡 Inspiration

The increasing spread of misinformation inspired the creation of MayaBhed.

The goal is to build an accessible AI assistant that helps users question, analyze, and verify information before believing or sharing it.

---

# 🇮🇳 Name Meaning

**माया (Maya)**

> भ्रम, छल, झूठा आभास

**भेद (Bhed)**

> सत्य और असत्य के बीच का अंतर

**MayaBhed**

> **"भ्रम के पीछे छिपे सत्य को पहचानने का प्रयास।"**

---

# 👩‍💻 Developed By

**Swati Singh**

B.Tech CSE (AI & ML)

Passionate about Artificial Intelligence, Cybersecurity and Web Development.

GitHub:
https://github.com/swatisingh1701

---

# ⭐ If you like this project

Give this repository a ⭐ and feel free to contribute or share feedback.

---

# 📜 License

Copyright © 2026 Swati Singh.

All Rights Reserved.

This project is published for portfolio and educational purposes only.

Unauthorized copying, modification, redistribution, commercial use, or reproduction of this project, in whole or in part, is prohibited without prior written permission from the author.

You may view this repository for learning and reference purposes only.

If you wish to collaborate or use any part of this project, please contact the author.