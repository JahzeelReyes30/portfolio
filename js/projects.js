// Every project on the page comes from this one list. To add a new project
// later, just add another object here — nothing else on the page needs to
// change.

const PROJECTS = [
  {
    title: "MajinCleaningSolutions",
    tagline: "Full-stack booking web app for a real cleaning business",
    description:
      "A production web app I built end to end for a real healthcare-inspired cleaning " +
      "business: a public marketing site plus a real booking system backed by a Postgres " +
      "database, and a password-protected admin dashboard for managing incoming requests. " +
      "Row-level security policies enforce that a visitor can submit a booking but can't " +
      "read anyone else's data — only an authenticated admin can. Covered by a 26-case " +
      "automated test suite for the booking validation and status-transition logic. " +
      "Started as a static site and evolved into this full-stack version — the commit " +
      "history in the repo shows that whole progression.",
    highlights: [
      "Real database (Postgres via Supabase), not a mock",
      "Authentication + row-level security for the admin dashboard",
      "26 automated tests (Vitest) for booking validation & status rules",
      "CI-style auto-deploy: every push to GitHub redeploys the live site via Vercel",
    ],
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "Vitest"],
    liveUrl: "https://website-project-theta-eight.vercel.app",
    repoUrl: "https://github.com/JahzeelReyes30/WebsiteProject",
  },
  {
    title: "Tic-Tac-Toe",
    tagline: "My first project — console game and a browser version, from scratch",
    description:
      "Two versions of the same two-player game, built to learn how a program actually " +
      "thinks rather than fighting an unfamiliar problem. The console version (Python) " +
      "focuses purely on the logic: turn handling, win/draw detection across all 8 possible " +
      "winning lines, and input validation that never crashes no matter what a real person " +
      "types. The browser version (vanilla JavaScript) rebuilds that same logic with a real " +
      "interface, styled like a technical drawing sheet, where the X's and O's draw " +
      "themselves onto the board like pen strokes.",
    highlights: [
      "Two independent implementations of the same core logic (Python + JavaScript)",
      "Input validation that handles bad input without ever crashing",
      "Debugged and fixed real CSS layout and state-reset bugs along the way",
    ],
    tech: ["Python", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://claude.ai/code/artifact/01da0d3e-9eff-41d1-9b8f-29b4eac18e8f",
    repoUrl: "https://github.com/JahzeelReyes30/tic-tac-toe-project1",
  },
];
