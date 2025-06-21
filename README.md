Here’s the updated `README.md` with the latest additions, including **DaisyUI**, enhanced clarity, and fresh notes from recent progress:

---

# 🎧 MiniSpotify

> A React + TypeScript project inspired by Spotify’s UI/UX and architecture.
> Built for **learning**, **interview prep**, and **frontend architecture exploration** — *not for commercial use*.

---

## 🎯 Purpose

This is **not a commercial Spotify clone**, but a learning-oriented project designed to:

* Explore **Spotify-like tech stacks**: React, Tailwind, Zustand, REST APIs
* Build a realistic **music streaming UI/UX**
* Understand **frontend system design** and **audio architecture**
* Practice OAuth + async flows with real APIs
* Polish a feature-complete project for **portfolio** and **interviews**

---

## 🛠️ Tech Stack

| Area         | Tech Used                          |
| ------------ | ---------------------------------- |
| Framework    | React 18 + TypeScript              |
| Styling      | Tailwind CSS + **DaisyUI**         |
| State Mgmt   | Zustand (with session persistence) |
| Routing      | React Router v6                    |
| Audio Player | HTML5 `<audio>` + custom controls  |
| Auth/API     | Spotify OAuth + Web API            |
| Tooling      | Vite, ESLint, Prettier             |

---

## ✨ Features

| Feature                            | Status      |
| ---------------------------------- | ----------- |
| ✅ Spotify OAuth login              | Done ✅      |
| ✅ Fetch and cache top tracks       | Done ✅      |
| ✅ Responsive grid layout           | Done ✅      |
| ✅ State persistence via Zustand    | Done ✅      |
| ✅ DaisyUI components for UI polish | Done ✅      |
| ⏳ Playlist builder (drag/drop)     | WIP 🔧      |
| ⏳ Playback bar + visualizer        | Coming soon |
| ⏳ Save playlist locally            | Planned     |
| ⏳ Dark/light mode toggle (DaisyUI) | Planned     |
| ⏳ Deployment (Netlify)             | Soon 🚀     |

---

## 📦 DaisyUI Integration

DaisyUI is used to simplify styling with Tailwind utility classes + prebuilt UI components.

Examples:

```tsx
<button className="btn btn-primary">Play</button>
<div className="card shadow-md bg-base-100">...</div>
```

Customization coming soon via `tailwind.config.js`.

---

## 🚧 Developer Notes

* ⚠️ Uses real **Spotify OAuth and API calls** — make sure to use your client ID/secret for testing.
* TTL-based caching logic is in place to reduce API calls (default: 60 min).
* Zustand state is **persisted in sessionStorage** to avoid unnecessary re-auth.

---

## 🛡️ Disclaimer

This project uses the **Spotify Web API** strictly for **learning and personal portfolio purposes**.
It does **not** reproduce full Spotify functionality, and follows [Spotify Developer Terms](https://developer.spotify.com/terms).

---

## 🔗 Live Demo

Coming soon: [https://miniispotify.netlify.app/](https://miniispotify.netlify.app/)

---

## 🤝 License

MIT — Free to use, remix, and modify for personal or educational purposes.

---

Would you like me to save this updated version as a file or commit-ready content?
