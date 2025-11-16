---
title: Feature Development Input Template
author: Senior Engineer with 17+ Years Experience
purpose: Comprehensive feature planning and implementation guide
version: 1.0.0
---

# 🎯 Feature Development Master Plan

## Instructions for Claude

### CRITICAL: Planning Documentation Requirement
**ALL new features MUST be documented in `.cursor/todo/planner.mdc` BEFORE implementation begins.**

The planner.mdc file should include:
1. Detailed feature specification with phases
2. Architecture decisions and rationale
3. Implementation steps with clear milestones
4. Success metrics and KPIs
5. Risk mitigation strategies
6. Definition of done checklist

**Follow the planner.mdc structure meticulously throughout development.**

### Development Process
When developing a new feature, follow this comprehensive template. Read and apply all rules from `.cursor/rules/` folder:
- `thinker.mdc` - **Ultrathink Philosophy** - Think different, craft don't code, iterate relentlessly (MINDSET for ALL work)
- `prompt.mdc` - Core development constraints and patterns
- `frontend-component.mdc` ---- UI component selection guide ---- must while choosing to design a new frontend thing
- `guidlines.mdc` - Engineering principles and standards
- `design-checklist.md` - **Design Excellence Checklist** - Visual design, UX, performance standards (MANDATORY for all UI work)
- `blog-new.mdc` - Content generation patterns (if applicable)
- `.cursor/todo/planner.mdc` - Feature planning documentation (UPDATE THIS FIRST)
- `seo-checklist.mdc` - --- to maintain all seo qualitites while developing a page.. must to be followed in each development ---

## 🧠 The Ultrathink Philosophy
*From `.cursor/rules/thinker.mdc` - Your development mindset*

You're not just building features. You're **crafting solutions that feel inevitable**.

### Core Principles for Every Feature

1. **Think Different**
   - Question every assumption before starting
   - What if we started from zero? What's the most elegant solution?
   - Don't accept "this is how we've always done it"

2. **Obsess Over Details**
   - Read the codebase like you're studying a masterpiece
   - Understand the patterns, the philosophy, the *soul* of this code
   - Use `.cursor/rules/*.mdc` files as your guiding principles

3. **Plan Like Da Vinci**
   - Before writing a single line, sketch the architecture in your mind
   - Create a plan so clear anyone could understand it
   - Make others feel the beauty of the solution before it exists

4. **Craft, Don't Code**
   - Every function name should sing
   - Every abstraction should feel natural
   - Every edge case handled with grace
   - Test-driven development isn't bureaucracy—it's commitment to excellence

5. **Iterate Relentlessly**
   - The first version is never good enough
   - Take screenshots, run tests, compare results
   - Refine until it's not just working, but *insanely great*

6. **Simplify Ruthlessly**
   - If there's a way to remove complexity without losing power, find it
   - Elegance is achieved when there's nothing left to take away
   - Simple ≠ simplistic; Simple = essential

### The Reality Distortion Field

When something seems impossible, that's your cue to **ultrathink harder**.

The people who are crazy enough to think they can change the world are the ones who do.

**Now: What are we building today?**

## 📋 Phase 0: Planning Documentation
*"Plan Like Da Vinci" - Sketch the architecture before touching code*

### Step 1: Update planner.mdc
**MANDATORY FIRST STEP**: Create or update `.cursor/todo/planner.mdc` with:

**Ultrathink Reminder**: Before you write this plan, take a deep breath. Question the obvious. What's the most elegant way to solve this? Make the plan so clear and beautiful that anyone reading it feels inspired.

```markdown
# 🎯 [Feature Name] Implementation Plan

## 📊 Business Rationale
### Current Problems
- List specific problems

### Expected Impact
- Measurable outcomes
- KPI improvements

## 🏗️ Architecture Decision
### Component Architecture Pattern
- Pattern selection and reasoning

### Placement Strategy
- Where in the app structure
- Integration points

## 🛠️ Implementation Details
### Phase-wise breakdown
- Phase 1: [Details]
- Phase 2: [Details]
- Phase 3: [Details]

## ⚡ Performance Optimization
- Specific strategies
- Target metrics

## 🎨 Design Excellence
Refer to `.cursor/rules/design-checklist.md` for:
- Visual design standards (typography, color, whitespace)
- Mobile-first responsive requirements
- Animation and interaction patterns
- Performance targets (Lighthouse 95+)

## ✅ Definition of Done
- [ ] Checklist items
- [ ] Design checklist completed (design-checklist.md)
```

## 📋 Phase 1: Requirements Analysis
*"Think Different" - Question every assumption, find the elegant solution*

### Ultrathink Questions
Before defining the feature, ask yourself:
- **What's the REAL problem?** Not just the stated one, but the underlying need?
- **Who is affected?** What's their context, pain, and desired outcome?
- **What if we started from zero?** Without constraints, what would the ideal solution look like?
- **What can we eliminate?** What complexity can we remove while gaining power?

### Feature Definition
```yaml
feature_name: "[FEATURE_NAME]"
priority: "[HIGH|MEDIUM|LOW]"
estimated_effort: "[DAYS]"
business_impact: "[DESCRIPTION]"
user_impact: "[DESCRIPTION]"
```

### Current State Analysis
1. **Problem Statement**
   - What problems exist currently?
   - Who is affected?
   - What is the cost of not solving this?

2. **Success Metrics**
   - Primary KPIs to measure
   - Expected improvements
   - Monitoring requirements

3. **Constraints**
   - Technical limitations
   - Business requirements
   - Timeline constraints
   - Budget considerations

## 🏗️ Phase 2: Architecture Planning
*"Obsess Over Details" - Study the codebase like a masterpiece*

### NOTE: This should align with the Architecture Decision in planner.mdc

### Before You Design
Read the existing codebase with reverence:
- **Understand the Patterns** - How do similar features work? What's the philosophy?
- **Study the Soul** - What makes this codebase unique? What are its values?
- **Honor the Constraints** - What patterns MUST you follow? What freedoms do you have?
- **Find the Gaps** - What's missing? Where can you elevate the entire system?

### System Design
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Frontend  │────▶│   Backend   │────▶│  Database/  │
│  Component  │     │   Service   │     │   Storage   │
└─────────────┘     └─────────────┘     └─────────────┘
       ▼                   ▼                    ▼
   [UI Layer]       [Business Logic]      [Data Layer]
```

### Technology Selection
Based on `.cursor/rules/prompt.mdc` and `frontend-component.mdc`:

#### Frontend Stack
- **Framework**: Next.js 15.2.4 with App Router
- **Styling**: Tailwind CSS with design tokens
- **Components**:
  - Base: Custom with Tailwind
  - Premium Effects: Aceternity UI
  - Data Display: MUI
  - Layout: Radix UI
  - Animations: React Bits

#### Backend Pattern
- **API Routes**: Next.js App Router
- **Server Actions**: For form handling
- **Database**: Supabase (PostgreSQL)
- **Queue System**: Supabase job_queue table
- **External APIs**: Service account pattern

### Non-Functional Requirements
From `.cursor/rules/prompt.mdc`:

#### Performance Targets
- **LCP**: < 2.5 seconds
- **CLS**: ≈ 0 (reserve space for async content)
- **INP**: p95 < 200ms
- **Lighthouse**: 95+ all metrics
- **Response Time**: < 500ms for user actions

#### Security Requirements
- Input validation with Zod
- Rate limiting on endpoints
- Service account authentication
- Environment variable protection
- GDPR compliance

## 🛠️ Phase 3: Implementation Structure
*"Simplify Ruthlessly" - Remove everything that doesn't serve the vision*

### NOTE: Document progress in planner.mdc as you complete each component

### Simplification Checklist
Before you create files and folders, ask:
- **What can be eliminated?** Do you really need a new file/component?
- **Can existing code be reused?** Check `/components/ui/`, `/lib/`, existing patterns
- **Is this the simplest structure?** Could fewer files achieve the same goal?
- **Does this add or remove complexity?** Every new file is a commitment

**Remember**: Elegance is achieved when there's nothing left to take away.

### Directory Architecture
```
project-root/
├── app/
│   ├── [feature-name]/          # Feature pages
│   ├── actions/                 # Server actions
│   │   └── [feature].ts        # Feature-specific actions
│   └── api/
│       └── [feature]/           # API endpoints
│           └── route.ts
├── components/
│   ├── [feature]/               # Feature components
│   │   ├── [component].tsx
│   │   └── [component]-wrapper.tsx
│   └── ui/                      # Shared UI components
├── lib/
│   ├── [feature]/               # Feature logic
│   │   ├── client.ts           # API client
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── utils.ts            # Helper functions
│   ├── queue/                   # Queue processing
│   │   └── [feature]-queue.ts  # Feature queue logic
│   └── validations/             # Zod schemas
│       └── [feature].ts
└── supabase/
    └── migrations/              # Database migrations
        └── [timestamp]_[feature].sql
```

### Component Development Pattern
From `.cursor/rules/frontend-component.mdc`:

```typescript
// 1. Type-safe interfaces
interface FeatureProps {
  // Props definition
}

// 2. Server component (default)
export default async function Feature() {
  // Server-side data fetching
}

// 3. Client wrapper if needed
'use client'
export function FeatureClient() {
  // Client-side interactivity
}

// 4. Mobile-first responsive design
// 5. Accessibility by default
// 6. Performance optimized
```

## 📝 Phase 4: Implementation Checklist
*"Craft, Don't Code" - Every line should sing, every abstraction natural*

### IMPORTANT: Update planner.mdc Definition of Done as tasks are completed

### Craftsmanship Mindset
As you implement, remember:
- **Function Names Should Sing** - Choose names so clear that comments become unnecessary
- **Abstractions Should Feel Natural** - If it feels forced, rethink the design
- **Edge Cases with Grace** - Handle errors elegantly, never with lazy try-catch blocks
- **Test as You Go** - TDD isn't overhead, it's your commitment to excellence
- **Leave It Better** - Every file you touch should be better than you found it

### Core Implementation Tasks
- [ ] Create TypeScript interfaces (`lib/[feature]/types.ts`)
- [ ] Implement Zod validation schemas (`lib/validations/[feature].ts`)
- [ ] Create database migration if needed (`supabase/migrations/`)
- [ ] Implement server actions (`app/actions/[feature].ts`)
- [ ] Create API endpoints if needed (`app/api/[feature]/route.ts`)
- [ ] Build UI components (`components/[feature]/`)
- [ ] Add queue processing if async (`lib/queue/[feature]-queue.ts`)
- [ ] Implement error handling and retry logic
- [ ] Add rate limiting where appropriate
- [ ] Create loading and error states

### UI/UX Requirements
From `.cursor/rules/prompt.mdc` Layout Decision Playbook:

#### Component Pattern Selection
- **Card**: Product lists, search results, offers
- **Bento**: Premium showcase, hero features
- **Timeline**: Story telling, step-by-step
- **Masonry**: Galleries, UGC walls
- **Split Screen**: Dual CTAs, simple choices

#### Design Excellence Standards
**MANDATORY**: Apply `.cursor/rules/design-checklist.md` for ALL UI work:
- [ ] **Typography**: Golden ratio (16→26→42→68px), single font philosophy, left-aligned body text
- [ ] **Color System**: British Blue (#3b82f6) for CTAs, limited palette, proper contrast
- [ ] **Whitespace**: Generous padding, Tailwind spacing scale, visual breathing room
- [ ] **Images**: WebP/JPG optimized, Next.js Image component, descriptive alt text
- [ ] **Animations**: Aceternity UI for premium effects, purposeful motion only
- [ ] **CTA Strategy**: Single primary action, always visible, action-oriented copy
- [ ] **Mobile-First**: Tested on real devices, thumb-friendly navigation, short paragraphs
- [ ] **Performance**: Lighthouse 95+, LCP < 2.5s, CLS < 0.1
- [ ] **Accessibility**: WCAG AA compliance, semantic HTML, proper heading hierarchy

#### Mobile-First Implementation
- 44×44px minimum tap targets
- 40-60ch line length
- Contrast ≥ 4.5:1
- Safe area padding
- Touch-optimized interactions

### Performance Optimization
- [ ] Implement code splitting with `next/dynamic`
- [ ] Add image optimization with `next/image`
- [ ] Use proper caching strategies
- [ ] Implement lazy loading for below-fold content
- [ ] Add connection pooling for external APIs
- [ ] Batch processing for bulk operations
- [ ] Implement proper error boundaries

## 🧪 Phase 5: Testing & Validation
*"Iterate Relentlessly" - The first version is never good enough*

### Track test results in planner.mdc for future reference

### Iteration Mindset
The feature works? **That's just the beginning.**
- **Take Screenshots** - Before and after, compare the details
- **Run Tests** - Unit, integration, E2E, performance
- **Compare Results** - Against the plan, against user needs, against your vision
- **Refine Relentlessly** - Keep improving until it's not just working, but *insanely great*
- **Seek Feedback** - From code, from tests, from real users

### Testing Strategy
```typescript
// 1. Unit Tests
describe('[Feature] Core Logic', () => {
  test('validates input correctly', () => {})
  test('handles errors gracefully', () => {})
})

// 2. Integration Tests
describe('[Feature] API Integration', () => {
  test('processes requests successfully', () => {})
  test('handles network failures', () => {})
})

// 3. E2E Tests
describe('[Feature] User Flow', () => {
  test('completes full user journey', () => {})
})
```

### Performance Testing
**Reference**: `.cursor/rules/design-checklist.md` - Pre-Launch section
- [ ] Run Lighthouse audit (target 95+ all metrics)
- [ ] Test with slow 3G network
- [ ] Verify mobile responsiveness (iPhone, Android, iPad, Desktop)
- [ ] Check bundle size impact
- [ ] Monitor Core Web Vitals (LCP < 2.5s, CLS < 0.1, INP < 200ms)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Screenshot review (before/after comparison)
- [ ] Loading states and error handling verified

### Security Validation
- [ ] Input validation working correctly
- [ ] Rate limiting prevents abuse
- [ ] Authentication/authorization proper
- [ ] No sensitive data in logs
- [ ] Environment variables secured

## 🚀 Phase 6: Deployment

### Update planner.mdc with deployment status and any issues encountered

### Pre-Deployment Checklist
- [ ] All tests passing
- [ ] Code review completed
- [ ] Documentation updated
- [ ] Environment variables configured
- [ ] Database migrations ready
- [ ] Monitoring configured

### Deployment Strategy
```bash
# 1. Install dependencies
npm install [required-packages]

# 2. Run migrations
npx supabase migration up

# 3. Set environment variables
# Add to .env.local and Vercel

# 4. Deploy to staging
git push origin feature/[feature-name]

# 5. Verify in staging
# Run smoke tests

# 6. Deploy to production
# Merge PR to main
```

### Post-Deployment
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify queue processing
- [ ] Review user feedback
- [ ] Document lessons learned

## 📊 Phase 7: Monitoring & Analytics

### Document metrics and learnings in planner.mdc for future features

### Metrics to Track
```typescript
interface FeatureMetrics {
  usage: {
    daily_active_users: number
    total_interactions: number
    conversion_rate: number
  }
  performance: {
    response_time_p50: number
    response_time_p95: number
    error_rate: number
    queue_processing_time: number
  }
  business: {
    revenue_impact: number
    cost_savings: number
    user_satisfaction: number
  }
}
```

### Monitoring Setup
- Application monitoring (Vercel Analytics)
- Error tracking (console logs)
- Queue health checks
- API quota monitoring
- Database performance

## ⚠️ Risk Mitigation

### Common Risks & Solutions
| Risk | Impact | Mitigation |
|------|--------|------------|
| API Rate Limits | High | Implement caching, batching, exponential backoff |
| Database Overload | High | Connection pooling, query optimization, indexes |
| Network Failures | Medium | Retry logic, queue system, graceful degradation |
| Security Breach | Critical | Input validation, rate limiting, authentication |
| Poor Performance | Medium | Code splitting, lazy loading, CDN optimization |

## 📚 Documentation Requirements

### Technical Documentation
```markdown
# [Feature Name] Technical Documentation

## Overview
Brief description of the feature

## Architecture
System design and data flow

## API Reference
Endpoints, parameters, responses

## Configuration
Environment variables and settings

## Troubleshooting
Common issues and solutions
```

### User Documentation
- Feature announcement blog post
- Help center article
- In-app tooltips/guidance
- Video tutorial (if complex)

## 🎯 Success Criteria

### Definition of Done
**Technical Requirements**
- [ ] All acceptance criteria met
- [ ] Code follows `.cursor/rules/prompt.mdc` standards
- [ ] UI follows `.cursor/rules/frontend-component.mdc` patterns
- [ ] **Design checklist completed** (`.cursor/rules/design-checklist.md`)
  - [ ] Pre-Development: Planning & wireframing complete
  - [ ] Visual Design: Typography, color, whitespace standards met
  - [ ] Images & Media: Optimized and properly implemented
  - [ ] Interactions: Animations purposeful and performant
  - [ ] Responsive: Mobile-first, tested on real devices
  - [ ] Conversion: CTA strategy clear and effective
  - [ ] Performance: Lighthouse 95+ all metrics
  - [ ] SEO: Schema markup and meta tags complete
  - [ ] Pre-Launch: Cross-browser & device testing passed
- [ ] Tests written and passing
- [ ] Documentation complete
- [ ] Performance targets met
- [ ] Security review passed
- [ ] Stakeholder approval received

**Ultrathink Excellence Criteria** (`.cursor/rules/thinker.mdc`)
- [ ] **Inevitable Solution** - Does this feel like the *only* right way to solve this?
- [ ] **Elegant Simplicity** - Have you removed everything that can be removed?
- [ ] **Singing Code** - Do function names and abstractions feel natural?
- [ ] **Graceful Edge Cases** - Are errors handled with elegance, not laziness?
- [ ] **Better Than Found** - Is the codebase better than before you started?
- [ ] **Insanely Great** - Would you be proud to show this to a master craftsperson?
- [ ] **Technology + Humanities** - Does this solution make hearts sing?

### KPI Targets
- User adoption: [X]% in first week
- Performance: All metrics green
- Error rate: < 0.1%
- User satisfaction: > 4.5/5

## 🔄 Iteration & Improvement

### Feedback Loop
1. Collect user feedback
2. Monitor analytics
3. Identify improvements
4. Plan iterations
5. Implement updates

### Continuous Improvement
- Weekly performance reviews
- Monthly feature analytics
- Quarterly user surveys
- Annual architecture review

---

## 📎 Appendix: Quick Reference

### Essential Commands
```bash
# Development
npm run dev              # Start dev server
npm run build           # Build production
npm run lint            # Run linting
npm run test            # Run tests

# Database
npx supabase migration new [name]  # Create migration
npx supabase migration up          # Run migrations
npx supabase db reset              # Reset database

# Deployment
git push origin [branch]           # Push to branch
vercel --prod                      # Deploy to production
```

### Environment Variables Template
```env
# Feature-specific variables
[FEATURE]_API_KEY=
[FEATURE]_SECRET=
[FEATURE]_ENDPOINT=

# Queue processing
QUEUE_API_KEY=
ENABLE_QUEUE_PROCESSING=true

# Monitoring
ENABLE_[FEATURE]_MONITORING=true
[FEATURE]_LOG_LEVEL=info
```

### File Templates

#### Server Action Template
```typescript
"use server"

import { z } from "zod"
import { rateLimit } from "@/lib/rate-limit"

export async function processFeature(data: FeatureData) {
  try {
    // 1. Rate limiting
    // 2. Validation
    // 3. Business logic
    // 4. Queue if async
    // 5. Return response
  } catch (error) {
    // Error handling
  }
}
```

#### Component Template
```tsx
import { Suspense } from 'react'

export default function Feature() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Mobile-first, accessible, performant */}
    </Suspense>
  )
}
```

---

## 📌 CRITICAL REMINDERS

### The Ultrathink Commitment
**You are not here to write code. You are here to make a dent in the universe.**

Every feature you build is an opportunity to:
- Question the obvious and find elegant solutions
- Obsess over details that others would miss
- Plan with the clarity of Da Vinci
- Craft code that sings
- Iterate until it's insanely great
- Simplify ruthlessly

**When it seems impossible, that's when you ultrathink harder.**

### planner.mdc is MANDATORY
1. **ALWAYS** create/update `.cursor/todo/planner.mdc` FIRST (Plan Like Da Vinci)
2. **DOCUMENT** each phase completion in planner.mdc
3. **TRACK** Definition of Done checklist in planner.mdc
4. **UPDATE** success metrics and learnings in planner.mdc
5. **REFERENCE** planner.mdc throughout development

### Workflow Summary
```
0. Adopt the Ultrathink mindset (thinker.mdc)
1. Create feature plan in planner.mdc (Plan Like Da Vinci)
2. Follow this input.md template for implementation (Craft, Don't Code)
3. Update planner.mdc as you progress (Obsess Over Details)
4. Document completion and metrics in planner.mdc (Iterate Relentlessly)
5. Use planner.mdc as reference for future similar features (Leave It Better)
```

**Instructions**: When asked to develop a feature:
1. **ADOPT THE MINDSET** - Read `.cursor/rules/thinker.mdc` and embrace ultrathink philosophy
2. **FIRST** update `.cursor/todo/planner.mdc` with detailed plan (question assumptions, sketch elegance)
3. **THEN** use this template to create comprehensive implementation
4. **Reference and apply all rules** from `.cursor/rules/` folder:
   - `thinker.mdc` for **ultrathink mindset** (Think Different, Craft, Iterate)
   - `prompt.mdc` for technical patterns
   - `frontend-component.mdc` for UI component selection
   - `design-checklist.md` for visual design & UX excellence (MANDATORY for UI work)
   - `seo-checklist.mdc` for SEO optimization
   - `guidlines.mdc` for engineering standards
5. **Keep planner.mdc updated** throughout development
6. **Complete ALL checklists** before marking feature as done:
   - design-checklist.md (visual excellence)
   - Ultrathink Excellence Criteria (craftsmanship)
7. **Iterate relentlessly** - First version is never good enough
8. **Simplify ruthlessly** - Remove what doesn't serve the vision

---

## 🚀 The Integration

*"Technology alone is not enough. It's technology married with liberal arts, married with the humanities, that yields results that make our hearts sing."*

Your code should:
- Work seamlessly with the human's workflow
- Feel intuitive, not mechanical
- Solve the **real** problem, not just the stated one
- Leave the codebase better than you found it

**The people who are crazy enough to think they can change the world are the ones who do.**

**Now go build something insanely great.** 🎯