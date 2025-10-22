# GitHub Issues Creation Guide

## Overview
This guide provides the commands to create all GitHub issues for the portfolio redesign epic using the GitHub CLI (`gh`).

## Prerequisites

1. **Install GitHub CLI**:
   ```bash
   # macOS
   brew install gh

   # Verify installation
   gh --version
   ```

2. **Authenticate**:
   ```bash
   gh auth login
   ```

3. **Navigate to repository**:
   ```bash
   cd /Users/ronnycoding/projects/shipease/ronnyfreites.com
   ```

## Issue Creation Commands

### Step 1: Create the Parent Epic Issue

```bash
gh issue create \
  --title "[EPIC] Next.js Portfolio Website - Complete Redesign with AI/Tech Aesthetic" \
  --body-file EPIC-PORTFOLIO-REDESIGN.md \
  --label "epic,enhancement,portfolio,high-priority" \
  --assignee ronnycoding
```

**Note the issue number returned** - you'll need it for sub-issues. Let's call it `EPIC_NUMBER`.

### Step 2: Create Foundation Phase Sub-Issues (#1-#4)

#### Sub-Issue #1: Project Setup & Dependencies Migration
```bash
gh issue create \
  --title "[SUB-ISSUE #1] Foundation - Project Setup & Dependencies Migration" \
  --body-file SUB-ISSUE-01-PROJECT-SETUP.md \
  --label "foundation,dependencies,configuration,critical,phase-1" \
  --assignee ronnycoding
```

#### Sub-Issue #2: i18n Configuration
```bash
gh issue create \
  --title "[SUB-ISSUE #2] Foundation - i18n Configuration with next-intl" \
  --body-file SUB-ISSUE-02-I18N-CONFIGURATION.md \
  --label "i18n,foundation,configuration,critical,phase-1" \
  --assignee ronnycoding
```

#### Sub-Issue #3: Theme System
```bash
gh issue create \
  --title "[SUB-ISSUE #3] Foundation - Theme System with next-themes" \
  --body "$(cat << 'EOF'
# [SUB-ISSUE #3] Foundation - Theme System with next-themes

## 🔗 Parent Issue
Part of #EPIC_NUMBER - [EPIC] Next.js Portfolio Website

## 📋 Summary
Implement dark/light mode theme system using next-themes with system preference detection, smooth transitions, and SSR compatibility.

## 🎯 Scope

### In Scope
- Install and configure next-themes
- Create ThemeProvider wrapper component
- Build ThemeToggle component (sun/moon icon)
- Configure dark/light mode color scheme in Tailwind
- Implement theme persistence in localStorage
- Add system preference detection
- Smooth theme transition animations
- SSR compatibility (no flash of wrong theme)

### Out of Scope
- Additional themes beyond dark/light
- Per-component theme overrides
- Theme customization UI

## ✅ Acceptance Criteria
- [ ] Theme toggles between dark and light modes
- [ ] System preference detected on first visit
- [ ] Theme persists across page reloads
- [ ] No flash of wrong theme on SSR
- [ ] Smooth transition animations (200-300ms)
- [ ] Theme toggle icon animates (rotate)
- [ ] All components support both themes
- [ ] Color contrast meets WCAG AA in both modes

## ⏱️ Time Estimate
6-8 hours

## 🏷️ Labels
foundation, theme, configuration, critical, phase-1

## 🔗 Dependencies
- Blocked by: #1 (Project Setup)
- Blocks: All visual components
EOF
)" \
  --label "foundation,theme,configuration,critical,phase-1" \
  --assignee ronnycoding
```

#### Sub-Issue #4: Tailwind CSS v4 + shadcn/ui Setup
```bash
gh issue create \
  --title "[SUB-ISSUE #4] Foundation - Tailwind CSS v4 + shadcn/ui Final Configuration" \
  --body "$(cat << 'EOF'
# [SUB-ISSUE #4] Foundation - Tailwind CSS v4 + shadcn/ui Final Configuration

## 🔗 Parent Issue
Part of #EPIC_NUMBER - [EPIC] Next.js Portfolio Website

## 📋 Summary
Complete Tailwind CSS v4 configuration with custom design system and install all required shadcn/ui components for the portfolio.

## 🎯 Scope

### In Scope
- Finalize Tailwind CSS v4 configuration
- Add all custom colors, fonts, animations
- Install all required shadcn/ui components
- Configure component variants
- Set up utility classes for glassmorphism
- Create custom scrollbar styles
- Configure responsive breakpoints

### Out of Scope
- Actual component implementation
- Content styling (handled per section)

## ✅ Acceptance Criteria
- [ ] All shadcn/ui components installed
- [ ] Custom color palette configured
- [ ] Font families loaded and configured
- [ ] Animation keyframes defined
- [ ] Glassmorphism utilities available
- [ ] Scrollbar styled for dark/light modes
- [ ] All breakpoints working correctly

## ⏱️ Time Estimate
8-10 hours

## 🏷️ Labels
foundation, tailwind, shadcn, configuration, critical, phase-1
EOF
)" \
  --label "foundation,tailwind,shadcn,configuration,critical,phase-1" \
  --assignee ronnycoding
```

### Step 3: Create Core Components Phase (#5-#8)

#### Sub-Issue #5: Navigation Bar
```bash
gh issue create \
  --title "[SUB-ISSUE #5] Navigation - Command Center Navigation Bar" \
  --body "$(cat << 'EOF'
# [SUB-ISSUE #5] Navigation - Command Center Navigation Bar

## 🔗 Parent Issue
Part of #EPIC_NUMBER - [EPIC] Next.js Portfolio Website

## 📋 Summary
Create sticky navigation bar with blur effect on scroll, theme toggle, language switcher, smooth scroll anchors, and mobile hamburger menu.

## 🎯 Scope

### In Scope
- Sticky navigation with blur effect
- Smooth scroll anchors to sections
- Active section indicator
- Theme toggle integration
- Language switcher integration
- Mobile hamburger menu
- Slide-in drawer animation
- Gradient border on scroll
- Logo/wordmark with hover animation

## ✅ Acceptance Criteria
- [ ] Nav sticks to top on scroll
- [ ] Blur effect appears on scroll
- [ ] Active section highlighted
- [ ] Smooth scrolling to anchors
- [ ] Mobile menu slides from right
- [ ] Theme toggle works
- [ ] Language switcher works
- [ ] Keyboard accessible

## ⏱️ Time Estimate
10-12 hours

## 🏷️ Labels
navigation, component, high-priority, phase-2

## 🔗 Dependencies
- Blocked by: #2 (i18n), #3 (Theme)
EOF
)" \
  --label "navigation,component,high-priority,phase-2" \
  --assignee ronnycoding
```

#### Sub-Issue #6: Hero Section
```bash
gh issue create \
  --title "[SUB-ISSUE #6] Hero - Above the Fold Impact Section" \
  --body-file SUB-ISSUE-06-HERO-SECTION.md \
  --label "hero,section,animations,3d,high-priority,phase-2" \
  --assignee ronnycoding
```

#### Sub-Issue #7: About Section
```bash
gh issue create \
  --title "[SUB-ISSUE #7] About - Professional Identity Section" \
  --body "$(cat << 'EOF'
# [SUB-ISSUE #7] About - Professional Identity Section

## 🔗 Parent Issue
Part of #EPIC_NUMBER - [EPIC] Next.js Portfolio Website

## 📋 Summary
Create About section with professional summary, highlight cards, and animated reveals on scroll.

## ✅ Acceptance Criteria
- [ ] Professional summary displays correctly
- [ ] Highlight cards show key stats
- [ ] Glassmorphic card effects work
- [ ] Content mapped from resume.md
- [ ] Responsive 2-column to single-column layout
- [ ] Scroll animations trigger correctly
- [ ] Both languages supported

## ⏱️ Time Estimate
8-10 hours

## 🏷️ Labels
about,section,high-priority,phase-2
EOF
)" \
  --label "about,section,high-priority,phase-2" \
  --assignee ronnycoding
```

#### Sub-Issue #8: Footer
```bash
gh issue create \
  --title "[SUB-ISSUE #8] Layout - Footer with Multi-column Design" \
  --body "$(cat << 'EOF'
# [SUB-ISSUE #8] Layout - Footer with Multi-column Design

## 🔗 Parent Issue
Part of #EPIC_NUMBER - [EPIC] Next.js Portfolio Website

## 📋 Summary
Create multi-column footer with quick links, social media icons, newsletter signup, and back-to-top button.

## ✅ Acceptance Criteria
- [ ] 4-column layout on desktop
- [ ] Accordion style on mobile
- [ ] Social icons with gradient hover
- [ ] Newsletter form functional
- [ ] Back-to-top button appears on scroll
- [ ] Copyright info displayed
- [ ] Both languages supported

## ⏱️ Time Estimate
6-8 hours

## 🏷️ Labels
footer,layout,medium-priority,phase-2
EOF
)" \
  --label "footer,layout,medium-priority,phase-2" \
  --assignee ronnycoding
```

### Step 4: Create Professional Content Sections (#9-#12)

Create similar issues for:
- #9: Experience Timeline
- #10: Expertise Matrix
- #11: Projects Carousel
- #12: Certifications Showcase

### Step 5: Create Advanced Features (#13-#16)

Create similar issues for:
- #13: Case Study Modal
- #14: Tech Stack Visualization
- #15: Animations Integration
- #16: 3D Elements

### Step 6: Create Content & Social Proof (#17-#20)

Create similar issues for:
- #17: Blog Preview
- #18: Testimonials
- #19: Open Source
- #20: Services

### Step 7: Create Contact & Engagement (#21-#22)

Create similar issues for:
- #21: Contact Section
- #22: Interactive Elements

### Step 8: Create Performance & Polish (#23-#26)

Create similar issues for:
- #23: Performance Optimization
- #24: Accessibility Compliance
- #25: Testing
- #26: Documentation

## Bulk Creation Script

To create all issues at once, create a bash script:

```bash
#!/bin/bash

# Create all-issues.sh

EPIC_FILE="EPIC-PORTFOLIO-REDESIGN.md"

# Create epic
EPIC_NUMBER=$(gh issue create \
  --title "[EPIC] Next.js Portfolio Website - Complete Redesign" \
  --body-file "$EPIC_FILE" \
  --label "epic,enhancement,high-priority" \
  --assignee ronnycoding \
  --json number \
  --jq '.number')

echo "Created Epic #$EPIC_NUMBER"

# Update all sub-issue files with epic number
find . -name "SUB-ISSUE-*.md" -exec sed -i '' "s/#EPIC_NUMBER/#$EPIC_NUMBER/g" {} \;

# Create Phase 1 issues
gh issue create --title "[SUB-ISSUE #1] Foundation - Project Setup" \
  --body-file "SUB-ISSUE-01-PROJECT-SETUP.md" \
  --label "foundation,critical,phase-1" \
  --assignee ronnycoding

gh issue create --title "[SUB-ISSUE #2] Foundation - i18n Configuration" \
  --body-file "SUB-ISSUE-02-I18N-CONFIGURATION.md" \
  --label "i18n,critical,phase-1" \
  --assignee ronnycoding

# ... add more issues

echo "All issues created successfully!"
```

Make it executable and run:
```bash
chmod +x all-issues.sh
./all-issues.sh
```

## After Creating Issues

1. **Link sub-issues to epic**:
   - Edit each sub-issue
   - Add "Part of #EPIC_NUMBER" reference
   - This creates automatic linking

2. **Create GitHub Project Board**:
   ```bash
   gh project create --owner ronnycoding --title "Portfolio Redesign"
   ```

3. **Add issues to project**:
   ```bash
   gh project item-add PROJECT_NUMBER --owner ronnycoding --url ISSUE_URL
   ```

4. **Set up milestones**:
   ```bash
   gh api repos/ronnycoding/ronnyfreites.com/milestones \
     -X POST \
     -f title="Phase 1: Foundation" \
     -f description="Week 1-2: Setup and configuration" \
     -f due_on="2026-01-31T00:00:00Z"
   ```

## Tracking Progress

View all issues:
```bash
gh issue list --label "epic,enhancement"
```

View specific phase:
```bash
gh issue list --label "phase-1"
```

Check issue status:
```bash
gh issue view ISSUE_NUMBER
```

## Notes

- Replace `ronnycoding` with actual GitHub username if different
- Replace `EPIC_NUMBER` with actual epic issue number after creation
- Update assignees as team members are assigned
- Add additional labels as needed
- Link related issues using `#NUMBER` in descriptions
