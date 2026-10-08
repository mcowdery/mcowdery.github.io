export const site = {
  name: 'Mathew Cowdery',
  nickname: 'Mat',
  tagline: 'DevOps engineer building toward AI governance',
  github: 'https://github.com/mcowdery',
  linkedin: 'https://www.linkedin.com/in/mathewcowdery',
  email: 'mcowdery@gmail.com',
};

export interface Project {
  title: string;
  summary: string;
  details: string[];
  stack: string[];
  repo: string;
  art: string;
}

export const projects: Project[] = [
  {
    title: 'AD Traffic Analyzer',
    summary:
      'A Python tool that parses Active Directory network traffic (Kerberos, LDAP, SMB/NTLM) and flags patterns consistent with common attacks.',
    details: [
      'Detectors for Kerberoasting, AS-REP roasting, password guessing and spraying, and LDAP reconnaissance, each a tunable sliding-window heuristic.',
      'Exits non-zero on high-severity findings so it can run in a CI pipeline or scheduled job.',
      'A learning project: sample traffic is synthetically generated with scapy rather than captured from a real domain, and the README says so plainly.',
    ],
    stack: ['Python', 'scapy', 'Security detection'],
    repo: 'https://github.com/mcowdery/it-test-proj',
    art: 'ad',
  },
  {
    title: 'Wood Seasoning Tracker',
    summary:
      'A batch tracker for seasoning firewood and BBQ smoking wood: split dates, moisture readings, and storage location.',
    details: [
      'Estimates a ready date per batch from species and type, and moves batches between drying, ready, and archived.',
      'Runs entirely in the browser with localStorage, with no backend and no data leaving the machine.',
    ],
    stack: ['React', 'Vite', 'JavaScript'],
    repo: 'https://github.com/mcowdery/wood-seasoning-tracker',
    art: 'wood',
  },
  {
    title: 'agent-concurrency-kit',
    summary:
      'Small, dependency-free scripts for running several AI coding agents against one codebase without collisions.',
    details: [
      'Isolated git worktrees per agent, plus a file-based lock queue (shared or exclusive) for contended resources like a GPU or dev server.',
      'Stale locks clear themselves when the holding process dies, and waits time out instead of hanging.',
    ],
    stack: ['Node.js', 'Git worktrees', 'CLI tooling'],
    repo: 'https://github.com/mcowdery/agent-concurrency-kit',
    art: 'agent',
  },
  {
    title: 'claude-model-guard',
    summary:
      'Claude Code hooks that check each prompt against a classifier model and flag or block work running on an under-powered model tier.',
    details: [
      'An installer that is idempotent, keeps existing hooks, and supports a dry run and uninstall.',
      'Defaults to blocking only on confident upgrades; downgrades are advisory unless you opt in.',
      'Needs an API key for a third-party classifier service that is currently early access.',
    ],
    stack: ['Node.js', 'Claude Code hooks', 'Automation'],
    repo: 'https://github.com/mcowdery/claude-model-guard',
    art: 'guard',
  },
];
