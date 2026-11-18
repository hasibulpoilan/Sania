# A Little Surprise for Sania 🌸

A thoughtfully crafted, premium, romantic, and interactive single-page celebration website built with Next.js, Tailwind CSS, and Framer Motion for Sania to celebrate the one-month milestone (November 19).

---

## 🌟 Features Included

1. **Section 1: Welcome Screen (Hey Sania! 🌸)**
   - Ambient background glows and floating pastel flower petals & hearts.
   - Interactive 3D/SVG Gift Box with smooth opening animation.
   - Confetti burst on clicking "Open Your Surprise 🎁".
   - Non-intrusive background music toggle button (mute/unmute controls).

2. **Section 2: A Picture Just for You**
   - High-end glowing border portrait frame.
   - Quotes: *"Some people make ordinary days feel a little special."* & *"And I'm glad we got to know each other."*
   - Pre-configured placeholder that can be instantly replaced with Sania's real photo.

3. **Section 3: A Bouquet of Roses 🌹**
   - Interactive digital rose bouquet.
   - Starts wrapped with ribbon ("Unwrap Your Roses 🌹").
   - Smooth bloom animation with layered petals and confetti burst.

4. **Section 4: Something Sweet 🍫**
   - Closed luxury chocolate gift box with satin ribbon.
   - Opens on click ("Open Chocolate Box 🍫") to reveal delicious artisan chocolate pieces with a bounce animation.

5. **Section 5: One Month of Knowing You ❤️**
   - Exact heartfelt letter formatted inside a glassmorphism card with a pink-purple-blue gradient border.
   - Respectful, warm, natural, and free of any relationship pressure.

6. **Section 6: Interactive Personality Rating Game 💜**
   - **Part A:** 10 Personality Questions (1 to 10 scale with labels *1 = Not much, 5 = Average, 10 = Absolutely*). Real-time color transition and score indicators.
   - **Part B:** 4 Conversation Memories multiple choice questions.
   - **Part C:** 3 Personal special rating questions.
   - **Part D:** 2 Optional heartfelt open-ended questions (*"What's one thing you genuinely like about me?"*, *"What's one thing you want me to know?"*).
   - Navigation: Previous / Next controls with question tracking (*"Question 3 of 10"*).
   - Form state preserved in `localStorage` so refreshing the page does not lose answers.
   - Validation ensures required questions are answered before submitting.
   - Ready-to-use `submitQuizAnswers()` handler.

7. **Section 7: Thank You Screen (Thank You, Sania! 🌷)**
   - Emotional closing message with celebration roses and confetti.
   - "Replay the Surprise" button to restart the journey anytime.

---

## 📷 How to Add Sania's Photo

1. Place Sania's photo in:
   ```
   public/images/sania.jpg
   ```
2. Open [`src/config/surprise.ts`](file:///c:/Users/haslb/OneDrive/Desktop/new%20site/src/config/surprise.ts):
   ```typescript
   export const SURPRISE_CONFIG = {
     recipientName: "Sania",
     occasionDate: "November 19",
     occasionTitle: "One Month of Knowing Each Other",
     
     // Change this to her photo's filename:
     photoUrl: "/images/sania.jpg",
     ...
   };
   ```

---

## 🎵 How to Add Background Music (Optional)

1. Put your desired soft romantic instrumental MP3 file in:
   ```
   public/audio/surprise-bg.mp3
   ```
   The site already includes the audio toggle button at the top-right corner.

---

## 🚀 How to Run the Website

- **Development server:**
  ```bash
  pnpm dev
  ```
- **Production build & run:**
  ```bash
  pnpm build --webpack
  pnpm start
  ```
  Visit: `http://localhost:3000`
