# Header and Menu Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the header navigation bar and off-canvas mobile drawer in `app/components/shared.tsx` to match the Liko minimal header layout with centered nav links, right-aligned 2-line hamburger icon (without cart icon), and rich side drawer overlay panel.

**Architecture:** Update `Navbar` component in `app/components/shared.tsx`. Keep `navLinks` unchanged. Create a modern centered desktop navigation with hover/dropdown menus, a 2-line minimalist hamburger toggle, and an off-canvas drawer containing brand info, image grid, contact details, social links, and navigation list.

**Tech Stack:** Next.js (App Router), React, TypeScript, inline styles / CSS variables (`var(--font-figtree)`).

## Global Constraints
- Target file: `app/components/shared.tsx`
- No cart icon.
- Preserve all existing navigation labels, routes, and submenus in `navLinks`.

---

### Task 1: Redesign Navbar Header and Side Drawer in shared.tsx

**Files:**
- Modify: `app/components/shared.tsx:382-697`

**Interfaces:**
- Consumes: `navLinks` from `app/components/shared.tsx`
- Produces: `Navbar` exported component

- [ ] **Step 1: Inspect `Navbar` in `app/components/shared.tsx`**

Ensure `Navbar` component structure, drawer overlay state, and hamburger button match the new design specification.

- [ ] **Step 2: Update `Navbar` code in `app/components/shared.tsx`**

Update `Navbar` to feature:
1. Header bar with Left Logo, Center `navLinks` (visible on desktop), and Right 2-line hamburger icon (`=`).
2. Off-canvas side drawer on right side with:
   - Header with Logo and Close `✕` button.
   - Headline ("Welcome to BND Travel!"), description, 4-photo preview grid (`/hero.png`, `/pkg-beach.jpg`, `/pkg-boat.jpg`, `/pkg-hills.jpg` or similar available images).
   - Navigation links with dropdown support.
   - INFORMATION section (Phone, Email, Address).
   - FOLLOW US section (Social media links).

- [ ] **Step 3: Run build/lint or dev server check**

Run `npm run build` or inspect output to verify no TypeScript or syntax errors.

- [ ] **Step 4: Commit changes**

```bash
git add app/components/shared.tsx docs/superpowers/
git commit -m "feat: redesign header navigation and off-canvas drawer menu"
```
