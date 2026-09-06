# Latest Updates - Final Refinements

## Changes Made

### 1. ✅ Profile Photo - Bigger & No Circle
- **Increased size:** From 180px to 300px (300x300px)
- **Removed border radius:** Changed from circular (50%) to rectangular (0)
- **Removed border:** No more lavender border
- Profile photo now displays as a larger rectangular image
- Mobile responsive: 250x250px on tablets

### 2. ✅ Updated Experience Dates
- **IIT Jodhpur Research Intern:**
  - Changed from: "July – August 2024"
  - Now: "June 2024 – Present (2026)" (Still an intern)

- **Tech (AI) Head - DJS NOVA:**
  - Changed from: "08/2024 – Present"
  - Now: "June 2025 – June 2026"

- **Mechanical Head - DJS ARYA:**
  - Changed from: "03/2024 – Present"
  - Now: "June 2025 – June 2026"

### 3. ✅ Fixed About Section Text Wrapping
- Reduced gap between photo and text from 3rem to 2rem
- Adjusted container padding for better text flow
- About text now displays properly without breaking awkwardly
- Text formatting:
  > "I'm an ML Engineer at Unity Bank focusing on customer deduplication and entity resolution, and a Computer Science student at DJSCE specializing in Data Science and Computational Finance. I'm passionate about building scalable AI systems, multilingual NLP, and translating research into production-grade solutions."

## Files Modified
- `assets/css/style.css` — Hero photo size, border-radius, gap, padding
- `_data/experience.yml` — Updated dates for all 3 roles

## Visual Changes

### Before:
```
┌─────────────┐  About text
│  Circular   │  wrapping to
│  Photo      │  multiple lines
│  (180px)    │  awkwardly
└─────────────┘
```

### After:
```
┌──────────────────┐
│                  │  About text flows nicely
│   Rectangular    │  on the right with proper
│   Photo          │  spacing and formatting
│   (300x300px)    │  no awkward wrapping
│                  │
└──────────────────┘
```

## Responsive Behavior

### Desktop (>768px)
- Photo: 300x300px rectangular
- Text flows beside it

### Tablet/Mobile (<768px)
- Photo: 250x250px rectangular
- Stacks above text

## Next Steps
1. Verify the photo displays correctly
2. Check text alignment on different screen sizes
3. Deploy to GitHub Pages
4. Share your updated portfolio!

---

Your portfolio is now refined with a **larger, rectangular profile photo** and **properly formatted about section**.
