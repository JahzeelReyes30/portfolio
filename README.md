# Portfolio — Jahzeel Reyes

My personal portfolio site — the front door to everything I've built. Rather than sending
someone to dig through separate GitHub repos, this is one page that introduces me and links
out to each live project with real detail: what it does, what it's built with, and links to
both the running demo and the source code.

Every change made in this directory during a Claude Code session is automatically committed
and pushed to GitHub after each turn.

**Live site:** pending GitHub Pages activation (Settings → Pages → deploy from `main` /
root) — will be reachable at `https://jahzeelreyes30.github.io/portfolio/`.

## About this project

**Why it's plain HTML/CSS/JS, no framework or backend.** Unlike
[MajinCleaningSolutions](https://github.com/JahzeelReyes30/WebsiteProject), this site has no
accounts, no database, and no data that changes per visitor — everyone sees the same content.
That means it doesn't need any of the complexity a real app needs; a static site hosted free
on GitHub Pages is the right tool here, not overkill and not underpowered.

**Why it's built to grow.** I have more projects planned after this one — an AI-agent
project and a Model Context Protocol (MCP) server are next. Rather than hand-editing the page
every time I finish something new, every project lives as one entry in `js/projects.js`:

```js
{
  title: "Project Name",
  tagline: "One-line pitch",
  description: "...",
  highlights: ["...", "..."],
  tech: ["...", "..."],
  liveUrl: "...",
  repoUrl: "...",
}
```

`js/script.js` reads that list and builds the project cards on the page automatically. Adding
a new project later means adding one object to that array — nothing else on the page needs to
change.

## Files

```
portfolio/
├── index.html        page structure: hero, about, skills, projects, contact
├── css/style.css      all styling, responsive
├── js/projects.js     the list of projects — add new ones here
├── js/script.js       renders project cards from js/projects.js into the page
└── README.md          this file
```
