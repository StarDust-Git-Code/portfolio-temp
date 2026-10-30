## 2026-10-29T17:36:55Z
You are a Worker implementing Milestone M4 (Contact Section & Interactive Polish).
Your working directory is: c:\Users\irsha\Music\Portfolio\.agents\teamwork\worker_m4\
Original request path: c:\Users\irsha\Music\Portfolio\.agents\teamwork\ORIGINAL_REQUEST.md
Scope document path: c:\Users\irsha\Music\Portfolio\PROJECT.md

Please read c:\Users\irsha\Music\Portfolio\.agents\teamwork\ORIGINAL_REQUEST.md and c:\Users\irsha\Music\Portfolio\PROJECT.md first.
Also read Explorer 1's report (c:\Users\irsha\Music\Portfolio\.agents\teamwork\explorer_survey_1\handoff.md) and Explorer 2's report (c:\Users\irsha\Music\Portfolio\.agents\teamwork\explorer_survey_2\handoff.md).

MANDATORY INTEGRITY WARNING:
DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A teamwork_auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.

Your assigned scope (File owned: `src/components/contact-section.tsx`):
Elevate the Contact section to match the 10/10 editorial minimalist caliber of the Hero section:
1. Kinetic Typography:
   - Mount `HeadingReveal` (`src/components/heading-reveal.tsx`) for the section label ("// Contact") and the headline ("Let's build something distinctive.") so characters rise on scroll entry with SplitType and `power4.out`.
2. Interactive Email Action:
   - Add an interactive "Copy Email" button alongside LinkedIn and GitHub links.
   - On click, copy the email (from `PROFILE.email` in `src/data/profile.ts`) to clipboard with clear interactive feedback (e.g. checkmark transition or copied state indicator).
   - Maintain sleek editorial pill styling with subtle hover states, arrows, and icons.
3. Live Availability & Location:
   - Add an editorial status badge with live availability: e.g. `AVAILABLE FOR Q1/Q2 BRING-UPS · CHENNAI (IST)` with a pulsing vermilion indicator dot.
   - Include styled location details (`Chennai, Tamil Nadu, India`) aligned with the site's editorial aesthetic and Space Grotesk technical typography.
4. Editorial Minimalism:
   - Strictly maintain editorial minimalism: zero circuit traces, via pads, or hardware graphics.
5. Responsive and Build Verification:
   - Verify responsive layout at 375px (mobile), 768px (tablet), and 1280px+ (desktop) without horizontal clipping or overflow.
   - Run `npm run lint` and `npm run build` using PowerShell and verify both exit with code 0.
6. Write a comprehensive completion report to `c:\Users\irsha\Music\Portfolio\.agents\teamwork\worker_m4\handoff.md`. Update progress.md while working. When finished, send a message to your parent.
