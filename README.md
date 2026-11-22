# AtomicSite — Cybersecurity Educational Platform

<p align="center">
  <img src="https://img.shields.io/badge/Category-Education-blue?style=for-the-badge" alt="Education" />
  <img src="https://img.shields.io/badge/Field-Cybersecurity-red?style=for-the-badge" alt="Cybersecurity" />
  <img src="https://img.shields.io/badge/Language-English-green?style=for-the-badge" alt="English" />
</p>

**AtomicSite** is an educational cybersecurity platform for exploring core concepts through structured material: network security, encryption, and secure system simulations. It includes a static educational page and a modern client/server application stack for local development.

## Focus areas

- **Network security** — connectivity and protocol-oriented learning material
- **Cryptography** — encoding and encryption principles
- **System simulation** — secure architecture examples (including banking-oriented demos)
- **Foundations** — discrete structures relevant to secure computing

## Stack

| Layer | Technology |
|---|---|
| Static educational page | HTML / CSS |
| Application | TypeScript, Vite, React-style client, Node server |
| Reports | PDF materials under `docs/reports/` |

## Repository layout

```text
.
├── atomic_educational_site.html   # Standalone educational interface
├── client/                        # Application frontend
├── server/                        # Application backend
├── shared/                        # Shared types / utilities
├── docs/                          # Reports and documentation
└── README.md
```

## Getting started

### Option A — static educational page

```bash
git clone https://github.com/9gkc/AtomicSite.git
cd AtomicSite
# Open atomic_educational_site.html in a browser
```

### Option B — full application (local)

```bash
git clone https://github.com/9gkc/AtomicSite.git
cd AtomicSite
pnpm install
pnpm dev
```

Review `package.json` for the exact scripts available on your machine.

## Reports

Highlighted materials live under `docs/reports/` (banking system simulation, encryption principles, security fundamentals).

## Responsible use

This project is **educational**. It is not a scanner, exploit toolkit, or production security product. Practice only on systems you own or are explicitly authorized to assess.

## Author

[Ali Al-Karrar](https://github.com/9gkc)
