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
  {
    title: "Virtual Network Security Lab",
    tagline: "Cybersecurity bootcamp simulation — built and secured a client's network in VMs",
    description:
      "A cybersecurity career simulation where I acted as an IT subject matter expert for a " +
      "client who needed a network upgrade but had no budget for new hardware. I built the " +
      "entire environment as virtual machines in Oracle VirtualBox instead — a router/firewall, " +
      "DNS server, web server, CEO workstation, and Kali Linux boxes for security testing. From " +
      "there I diagnosed and fixed a real IP/DNS misconfiguration, documented every machine's " +
      "network config, scanned for open ports with Nmap, and used Wireshark to prove that FTP " +
      "transmits login credentials in plain text.",
    highlights: [
      "Diagnosed and fixed a live IPv4/DNS misconfiguration on a workstation",
      "Port-scanned a DNS server and web server with Nmap to assess exposure",
      "Captured FTP traffic in Wireshark, exposing plaintext credentials as a security finding",
      "Wrote client-facing security recommendations based on the findings",
    ],
    tech: ["VirtualBox", "Kali Linux", "Nmap", "Wireshark", "Linux Networking", "FTP"],
    repoUrl: "https://github.com/JahzeelReyes30/virtual-network-security-lab",
    images: [
      { src: "images/virtual-network-lab/01-network-diagram.png", alt: "Network architecture diagram: trusted zone, DMZ, and untrusted zone" },
      { src: "images/virtual-network-lab/03-ipv4-troubleshooting.png", alt: "Fixing an IPv4 misconfiguration on the CEO workstation" },
      { src: "images/virtual-network-lab/11-nmap-webserver-scan.png", alt: "Nmap scan revealing open ports on the web server" },
      { src: "images/virtual-network-lab/12-wireshark-capture.png", alt: "Wireshark capturing FTP credentials in plain text" },
    ],
  },
  {
    title: "Penetration Test & Vulnerability Assessment Lab",
    tagline: "Cybersecurity bootcamp simulation — hired as a penetration tester to break into two servers",
    description:
      "A cybersecurity career simulation where I was hired as the penetration tester for a " +
      "company that needed its Production Server and Web Server assessed before going live. " +
      "Working from Kali Linux inside an isolated VirtualBox network, I scanned both targets " +
      "with Nmap, researched and documented four CVE/CVSS-rated vulnerabilities per server, " +
      "and weaponized the findings in Metasploit to gain root on both machines through " +
      "different exploit vectors. I then proved persistence by planting a root backdoor " +
      "account, hunted both servers for sensitive files, and — as a bonus — cracked the " +
      "Production Server's user passwords with John the Ripper.",
    highlights: [
      "Documented 8 CVE/CVSS-rated vulnerabilities across two servers using NIST NVD",
      "Gained root on both servers with Metasploit, using a different exploit vector each time",
      "Planted a persistent root backdoor account to prove the takeover wasn't one-time",
      "Cracked user account passwords with unshadow + John the Ripper",
    ],
    tech: ["Kali Linux", "Metasploit", "Nmap", "John the Ripper", "VirtualBox", "CVE/CVSS Research"],
    repoUrl: "https://github.com/JahzeelReyes30/penetration-test-lab",
    images: [
      { src: "images/penetration-test-lab/01-network-diagram.jpeg", alt: "Network diagram: trusted zone, DMZ, and untrusted zone with two target servers" },
      { src: "images/penetration-test-lab/07-exploit-vsftpd-production.jpeg", alt: "Exploiting the vsFTPd backdoor in Metasploit to gain root on the Production Server" },
      { src: "images/penetration-test-lab/17-backdoor-account.jpeg", alt: "Planting a persistent root-level backdoor account" },
      { src: "images/penetration-test-lab/22-john-the-ripper-cracked.jpeg", alt: "Cracking user account passwords with John the Ripper" },
    ],
  },
  {
    title: "MajinCleaningSolutions Ops MCP Server",
    tagline: "MCP server connecting an AI assistant directly to my live production database",
    description:
      "An MCP (Model Context Protocol) server that connects Claude Desktop or any other " +
      "MCP-compatible AI assistant directly to the real Supabase database behind " +
      "MajinCleaningSolutions, my live production booking app. Instead of logging into the " +
      "admin dashboard, an assistant can check real appointment availability, list upcoming " +
      "bookings, and update a booking's status — all against live data, enforcing the exact " +
      "same business-hours and status-transition rules as the production site. Deliberately " +
      "uses the Supabase service-role key instead of the public anon key, since this server " +
      "only ever runs locally under my own control, standing in for the business owner.",
    highlights: [
      "Built with the official MCP SDK — the protocol layer AI apps use to connect to real tools/data",
      "Reuses the exact business-hours and status-transition logic from the live production app",
      "Deliberate security design: service-role key stays local, never exposed publicly",
      "Verified end-to-end over the real MCP protocol (handshake, tool listing, live tool calls)",
    ],
    tech: ["TypeScript", "Node.js", "Model Context Protocol", "Supabase", "PostgreSQL"],
    repoUrl: "https://github.com/JahzeelReyes30/majincleaning-ops-mcp",
  },
];
