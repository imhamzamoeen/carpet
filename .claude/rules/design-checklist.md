---
alwaysApply: false
---

# Design Excellence Checklist for FreeBoilerUpgrade.uk
*Combining Ultrathink Philosophy with Web Design Mastery*

## 📋 Pre-Development: Think Different

### Strategic Planning
- [ ] **Understand the Real Problem** - Not just what's asked, but what user truly needs
- [ ] **Create Mental Architecture** - Sketch the solution before touching code
- [ ] **Site Map Clarity** - Know where this fits in the information architecture
- [ ] **Wireframe First** - Plan layout structure before visual design
- [ ] **Challenge Assumptions** - Why does it have to work the existing way?
- [ ] **Study Existing Patterns** - Review similar pages in codebase for consistency

### Target Audience Check
- [ ] **UK Homeowner Perspective** - Will pensioners and benefit recipients understand this?
- [ ] **Mobile-First Mindset** - Most users are on phones, addicted to them
- [ ] **Accessibility Consideration** - Can users with varying abilities navigate this?
- [ ] **Trust Signals** - Does this reinforce trustworthiness (critical for ECO4)?

---

## 🎨 Visual Design: Obsess Over Details

### Typography Excellence
- [ ] **Golden Ratio Applied** - Base 16px → 26px → 42px → 68px progression
- [ ] **Single Font Philosophy** - Using system fonts or limited custom fonts for speed
- [ ] **Font Weight Hierarchy** - Use weight/size/color for visual interest, not multiple fonts
- [ ] **Left-Aligned Text** - Default for body content (never center large text blocks)
- [ ] **Line Height Breathing Room** - Optimal readability (1.5-1.8 for body text)

### Color Strategy
- [ ] **Primary Action Color** - British Blue (#3b82f6) for main CTAs
- [ ] **Consistent Color System** - Using Tailwind design tokens, not arbitrary values
- [ ] **Contrast Excellence** - Text readable against all backgrounds (WCAG AA minimum)
- [ ] **Avoid Pure Colors** - Using shades, tints, tones (blue-600 not raw blue)
- [ ] **Limited Palette** - Stick to 3-4 colors maximum per component
- [ ] **Black & White Sophistication** - Using slate-900/slate-100 instead of #000/#fff

### Whitespace Mastery
- [ ] **Breathing Room** - Generous padding/margins (not cramped rookie design)
- [ ] **Consistent Spacing System** - Using Tailwind spacing scale (4, 8, 16, 24, 32, 48, 64px)
- [ ] **Visual Separation** - Clear hierarchy through spacing, not just borders
- [ ] **Mobile Spacing** - Adequate touch targets (min 44px) and spacing on small screens

---

## 🖼️ Images & Media: Strategic Use

### Image Optimization
- [ ] **Format Correct** - JPG for photos, PNG for graphics, WebP for modern browsers
- [ ] **SVG for Logos** - Vector graphics for scalable icons/logos
- [ ] **Vercel Blob Integration** - Using optimized storage for generated images
- [ ] **Next.js Image Component** - Always use `<Image>` or custom `<ResponsiveImage>`
- [ ] **Alt Text Excellence** - Descriptive, keyword-rich, but natural
- [ ] **Lazy Loading** - Below-fold images load on demand
- [ ] **Size Optimization** - Images compressed without quality loss

### Visual Strategy
- [ ] **Strategic Imagery** - Images support content, not distract from it
- [ ] **Hero Image Impact** - First impression within 50 milliseconds
- [ ] **Consistent Style** - Photos match overall brand aesthetic
- [ ] **Break Rules Intentionally** - If using many images, optimize aggressively

---

## 🎭 Interactions & Animations: Delight Users

### Animation Excellence
- [ ] **Lead Animations** - Subtle entrance animations for key elements
- [ ] **Loading Feedback** - Users know something's happening
- [ ] **Aceternity UI Effects** - Used sparingly for premium feel (hero sections)
- [ ] **Performance Budget** - Animations don't impact Core Web Vitals
- [ ] **Purposeful Motion** - Every animation serves a function
- [ ] **Reduced Motion Support** - Respect `prefers-reduced-motion` setting

### Interactive Elements
- [ ] **Button Consistency** - Primary/secondary button system maintained
- [ ] **Clear Visual Feedback** - Hover, active, focus states defined
- [ ] **Touch-Friendly** - 44px minimum touch targets on mobile
- [ ] **Loading States** - Forms show submission progress

---

## 📱 Responsive Design: Mobile-First

### Layout Systems
- [ ] **Flexbox Mastery** - Using stacks/layers for responsive layouts
- [ ] **Grid Systems** - Tailwind grid for complex layouts
- [ ] **Breakpoint Testing** - Tested on sm, md, lg, xl, 2xl breakpoints
- [ ] **Content Priority** - Most important content visible on mobile first
- [ ] **Sticky Elements** - CTA bars sticky on mobile for conversion

### Mobile Excellence
- [ ] **Loads Fast on 3G** - Under 3 seconds on slow connections
- [ ] **Thumb-Friendly Nav** - Bottom or easy-to-reach navigation
- [ ] **Short Paragraphs** - Mobile-optimized content chunks
- [ ] **Tap Targets Clear** - Phone number (+447375868046) easily tappable
- [ ] **Form Optimization** - Input types correct (tel, email, postcode)

---

## 🎯 Conversion & UX: Simplify Ruthlessly

### Call-to-Action Strategy
- [ ] **Single Primary CTA** - One main action per section/page
- [ ] **CTA Always Visible** - Above fold or sticky bar implementation
- [ ] **Action Color Consistency** - Primary CTAs use British Blue
- [ ] **Button Text Clarity** - Action-oriented (Check Eligibility, Get Free Survey)
- [ ] **No Overwhelming Choices** - Limited options reduce decision paralysis

### User Flow Excellence
- [ ] **Obvious Next Steps** - User never confused about what to do
- [ ] **Multi-Step Forms** - Progress indicators for eligibility wizard
- [ ] **Error Prevention** - Zod validation with helpful error messages
- [ ] **Success Confirmation** - Clear feedback after form submission
- [ ] **Exit Intent** - Consider popup or offer before user leaves

---

## 🏗️ Component Architecture: Craft, Don't Code

### Code Quality
- [ ] **Right UI Library** - Aceternity for wow, MUI for data, Radix for primitives
- [ ] **Global Assets** - Reusable components saved and consistent
- [ ] **Style Guide Integration** - Using Tailwind config for design tokens
- [ ] **TypeScript Strict** - No `any` types, proper interfaces defined
- [ ] **Component Composition** - Small, focused, reusable components

### Pattern Consistency
- [ ] **Existing Patterns First** - Check `/components/ui/` before creating new
- [ ] **Schema Markup Included** - SEO components from `/components/schema-markup/`
- [ ] **Analytics Integration** - Tracking for key interactions
- [ ] **Email Templates** - Confirmation emails styled and tested

---

## 🚀 Performance: Iterate Relentlessly

### Speed Optimization
- [ ] **Lighthouse Score 95+** - All metrics (Performance, A11y, Best Practices, SEO)
- [ ] **LCP Under 2.5s** - Largest Contentful Paint optimized
- [ ] **CLS Under 0.1** - No layout shift on load
- [ ] **Bundle Size Check** - No unnecessary dependencies added
- [ ] **Code Splitting** - Large components lazy loaded

### Technical Excellence
- [ ] **Next.js Best Practices** - Server components where possible
- [ ] **API Route Optimization** - Rate limiting on endpoints
- [ ] **Database Queries** - Supabase queries optimized
- [ ] **Caching Strategy** - Static generation where appropriate
- [ ] **Error Boundaries** - Graceful failure handling

---

## 🔍 SEO & Discoverability: Leave Better Than You Found

### SEO Implementation
- [ ] **Meta Tags Complete** - Title (55 chars), description (155 chars), OG tags
- [ ] **Canonical URLs** - Proper canonical structure maintained
- [ ] **JSON-LD Schema** - Appropriate schema type (LocalBusiness, Article, FAQPage)
- [ ] **Semantic HTML** - Proper heading hierarchy (h1 → h2 → h3)
- [ ] **Internal Linking** - Links to related pages/content
- [ ] **Keyword Natural** - ECO4, LA Flex, etc. naturally integrated

### Content Excellence
- [ ] **UK-Specific Language** - Boiler not furnace, postcode not zip code
- [ ] **Expert Authority** - Peter Davies byline, credible information
- [ ] **E-E-A-T Signals** - Experience, Expertise, Authority, Trust demonstrated
- [ ] **Featured Snippet Worthy** - Structured answers to common questions
- [ ] **Brand Consistency** - Phone, email, company stats consistent everywhere

---

## ✅ Pre-Launch: Ship It

### Testing Gauntlet
- [ ] **Cross-Browser Testing** - Chrome, Safari, Firefox, Edge
- [ ] **Device Testing** - iPhone, Android, iPad, Desktop
- [ ] **Lighthouse Audit** - All scores green
- [ ] **Redirect Testing** - `npm run test-redirects` passes
- [ ] **Canonical Testing** - `npm run test-canonical` passes
- [ ] **Form Submission** - Test all form flows end-to-end
- [ ] **Email Delivery** - Confirmation emails sent and formatted correctly

### Final Polish
- [ ] **Screenshot Review** - Take before/after screenshots
- [ ] **Peer Review** - Get feedback from team/community
- [ ] **Copy Proofread** - No typos, grammar perfect
- [ ] **Loading States** - All async operations show feedback
- [ ] **404/Error Pages** - Graceful handling of edge cases

### Reality Distortion Field
- [ ] **Seems Impossible?** - You made it possible through ultrathinking
- [ ] **Elegant Solution?** - It feels inevitable, not just working
- [ ] **Nothing Left to Remove?** - Simplified ruthlessly
- [ ] **Proud to Ship?** - This makes a dent in the universe

---

## 🎓 Continuous Improvement

### Post-Launch
- [ ] **Monitor Analytics** - GA4 + Vercel Analytics for real behavior
- [ ] **User Feedback** - Listen to actual user pain points
- [ ] **Performance Monitoring** - Core Web Vitals in production
- [ ] **A/B Testing** - Test assumptions about design choices
- [ ] **Iterate Based on Data** - Let user behavior guide improvements

### Community & Growth
- [ ] **Document Learnings** - Update CLAUDE.md with new patterns
- [ ] **Share Knowledge** - Help others in Creative X crew
- [ ] **Practice Daily** - Build something every day
- [ ] **Break Rules Intentionally** - When you understand why they exist

---

## 🎯 The Ultrathink Integration

Remember: Technology married with liberal arts, married with the humanities, yields results that make our hearts sing.

This checklist isn't bureaucracy—it's a **commitment to excellence**.

Every checkbox is a chance to craft something **insanely great**.

The people who are crazy enough to think they can change the world are the ones who do.

**Now go build something beautiful.**

---

*Last Updated: 2025-11-14*
*"Here's to the crazy ones. The misfits. The rebels. The troublemakers."*
