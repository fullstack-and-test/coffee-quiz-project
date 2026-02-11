# Coffee Personality Quiz - Requirements

## Project Overview
A fun, interactive quiz that helps users discover their coffee personality and get personalized drink recommendations. The quiz uses pop culture themes (Harry Potter, Netflix, etc.) to make it engaging and shareable.

---

## Personality Types & Coffee Recommendations

1. **Bold Adventurer** → Double Espresso
   - Tagline: "You live for intensity"
   - Image: espresso.jpg
   - Vibe: Intense, daring, energetic

2. **Sweet Enthusiast** → Caramel Latte
   - Tagline: "Life's too short for bitter"
   - Image: caramel-latte.jpg
   - Vibe: Warm, comforting, indulgent (but sweet)

3. **Health Nut** → Oat Milk Americano
   - Tagline: "Wellness in every sip"
   - Image: americano.jpg
   - Vibe: Mindful, healthy, intentional

4. **Indulgent Treat** → Mocha with Whip
   - Tagline: "Coffee is dessert"
   - Image: mocha.jpg
   - Vibe: Luxurious, fancy, treat-yourself energy

---

## Result Display Style

**Option Selected: B - Show All Percentages**

Users will see their complete personality breakdown with percentages:
- "You're 40% Bold Adventurer, 30% Sweet Enthusiast, 20% Health Nut, 10% Indulgent Treat"
- All four coffee recommendations displayed
- Users can explore all results and choose to focus on any personality type

---

## Visual Style

**Style Selected: Playful & Colorful (Style 1)**

**Design characteristics:**
- Bright, vibrant gradient backgrounds (purple, pink, blue, green)
- Rounded corners and friendly shapes
- Fun, playful fonts (Comic Sans or similar)
- Colorful answer buttons with gradient fills
- Each answer option has a unique color gradient
- Hover effects: buttons scale up and glow
- Overall feeling: Fun, approachable, energetic

**Color scheme:**
- Purple to Pink gradients
- Cyan/Blue gradients
- Green/Teal gradients
- Gold/Yellow gradients

---

## Visual Elements

**Images: YES**
- Each personality result shows the corresponding coffee image
- High-quality stock photos (from Unsplash)
- File locations:
  - /public/images/espresso.jpg
  - /public/images/caramel-latte.jpg
  - /public/images/americano.jpg
  - /public/images/mocha.jpg

**Icons: YES**
- Each answer option has an emoji or icon
- Icons help users quickly understand the vibe of each choice
- Icons reinforce the theme (Harry Potter houses, adventure symbols, etc.)

---

## Quiz Questions & Mappings

**Question 1: Which Harry Potter House are you?**
- ⚔️ Gryffindor → Bold Adventurer
- 📚 Ravenclaw → Health Nut
- 🦡 Hufflepuff → Sweet Enthusiast
- 🐍 Slytherin → Indulgent Treat

**Question 2: What's your ideal weekend vibe?**
- 🚀 Adventure seeking—hiking, trying new things → Bold Adventurer
- 📖 Cozy day in—reading, comfort activities → Sweet Enthusiast
- 🏃 Active & healthy—gym, running, wellness → Health Nut
- 🎉 Treat yourself—nice restaurant, fun indulgence → Indulgent Treat

**Question 3: Netflix show you'd binge first?**
- ⚡ Breaking Bad → Bold Adventurer
- 🍰 The Great British Baking Show → Sweet Enthusiast
- 🧘 Headspace Guide to Meditation → Health Nut
- 👑 The Crown → Indulgent Treat

**Question 4: What's your coffee order personality?**
- 💪 Strong & no-nonsense → Bold Adventurer
- 🍯 Sweet & smooth → Sweet Enthusiast
- 🌱 Healthy & mindful → Health Nut
- ✨ Fancy & luxurious → Indulgent Treat

**Question 5: Road trip snack of choice?**
- 🔥 Spicy snacks → Bold Adventurer
- 🍫 Chocolate & candy → Sweet Enthusiast
- 🥗 Healthy mix & nuts → Health Nut
- 🧁 Fancy pastries → Indulgent Treat

**Question 6: How do you approach challenges?**
- 💥 Head-on with intensity → Bold Adventurer
- 💝 With kindness & care → Sweet Enthusiast
- 🎯 Strategic & thoughtful → Health Nut
- 🌟 With style & flair → Indulgent Treat

---

## Quiz Logic

**Scoring:**
- Each question has 4 answers
- Each answer maps to one of the 4 personalities
- Track which personality is selected for each question
- Tally the votes at the end

**Result Calculation:**
- Count how many times each personality was selected
- Calculate percentage for each: (count / 6) × 100
- Display in descending order by percentage

**Result Display:**
- Show all 4 personalities with their percentages
- Display the corresponding coffee image for each
- Show the tagline for each
- Include a friendly message based on the top personality

---

## Additional Notes

**For Build Phase (2.3):**
- Make the quiz responsive (works on mobile and desktop)
- Add smooth transitions between questions
- Include progress indicator (e.g., "Question 1 of 6")
- Make results shareable (optional: can add later)
- Navigation: Next/Previous buttons, or single flow forward-only

**For Later Iteration (2.4+):**
- Add a "Retake Quiz" button on results
- Add social sharing buttons
- Consider adding a "Save My Results" feature
- Could add animations between questions

---

## Success Criteria for Build Phase

- ✓ Quiz displays all 6 questions sequentially
- ✓ Each question shows all 4 answer options with icons
- ✓ Playful & colorful design matches Style 1 preview
- ✓ Results page shows all 4 personalities with percentages
- ✓ Results page displays coffee images
- ✓ Results page shows taglines
- ✓ Quiz is responsive (works on mobile and desktop)
- ✓ Can retake quiz from results page

---

**Created:** Feb 11, 2025
**Status:** Ready for build phase
