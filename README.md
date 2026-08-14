# Marcin Myszka Site V11

Zmiana względem V10:
- górny header glassmorphism na pełną szerokość viewportu,
- brak pływającej karty, bocznych marginesów i zaokrągleń headera,
- cienka dolna linia i blur na całej szerokości,
- mobilne menu rozwija się również jako pełnoszeroki glass panel.

Pozostałe sekcje pozostają bez zmian.


## V12
- Przebudowana sekcja O mnie: nowoczesny pełny blok editorial/cinematic bez ciężkiej karty.
- Zdjęcie pozostaje głównym elementem, cytat i bio są wpisane bezpośrednio w kompozycję.
- Statystyki tworzą jedną glassmorphismową belkę u dołu zdjęcia.
- Wszystkie liczniki mają identyczną animację 4.2 s i startują grupowo po wejściu sekcji w viewport.


V17: O mnie only. Three-stage pinned sequence: image expands to full viewport, quote appears, then bio appears. Top section heading preserved from V12. No decorative grid/threads/side lines.


V18: Media/Nagrody only — minimalist cream editorial layout, no color hover; rows only scale text slightly and reveal matching media/award icon.


V19:
- media/award icons are now local PNG assets extracted from the user reference,
- removed CSS filter that turned Spotify and other marks into black blobs,
- no external logo dependency in the Media/Nagrody hover states.


V20:
- slow 2.6 s scramble on project titles,
- same slow scramble on POROZMAWIAJMY.,
- Hero MYSZKA red lamp animation is 2x faster (3.7 s cycle),
- no scramble added to small tags/body copy.


V21:
- hero background slow cinematic breathing effect,
- scale 100% → 103% → 100%,
- 14-second ease-in-out loop,
- text/buttons remain completely static,
- disabled automatically for prefers-reduced-motion.


V27 — Press Kit:
- restored from V23 as the base,
- changed only the Press Kit section,
- old-paper board background,
- three portrait/archive cards inspired by the supplied true-crime reference,
- irregular paper frames and horizontal torn-paper seams,
- typewriter-style captions underneath,
- third card uses the Kryminatorium brand mark for the logo/bio/materials package.


V28 — Press Kit correction:
- Press Kit section background restored to black,
- only the three press cards are light/white paper,
- removed all torn-paper strips and jagged clipping,
- cards use a clean archival-paper treatment with subtle lift on hover,
- no other section changed.


V29 — fingerprint cursor:
- created saved asset assets/images/fingerprint-cursor.svg,
- custom fingerprint cursor appears only in #about and #media sections,
- default cursor is hidden only inside those sections on desktop/fine pointer,
- cursor slightly scales on interactive elements.


V30 — fingerprint ambient effect:
- removed the fingerprint cursor completely,
- the supplied realistic fingerprint is saved locally as assets/images/fingerprint-real.webp,
- fingerprints appear only inside Media / Nagrody,
- smooth fade 0% → 80% → 0%,
- staggered long cycles and changing positions between cycles,
- no changes to other sections.


V31 — fixes:
- Media / Nagrody now uses only one fingerprint that fades 0→80→0 and changes place after each cycle.
- About section now has an animated red thread and two pins connecting the big quote area with the text area.


V32:
- Media/Nagrody: only one large fingerprint is visible at a time, max opacity 18%, then fades out and changes position.
- About: thread no longer crosses the face; it runs through the lower free area.
- About animation is one-time: first pin → red thread draws → second pin.


V33:
- Rebuilt About-section evidence thread in the proper style: three red pins and two straight thread segments, no arc, no dashed route.
- Thread sits low in the composition and avoids the face.
- Sequence: pin 1 -> segment 1 -> pin 2 -> segment 2 -> pin 3.


V34:
- removed all evidence pins and thread from About,
- Hero primary CTA uses reference style 01: distressed solid red,
- Hero secondary CTA uses reference style 02: dark outlined,
- Press Kit package CTA uses reference style 04: beige archive/dossier with paperclip detail.


V48:
- restored V41 composition exactly;
- changed only first red CTA background to approved SVG texture;
- kept original 270x54 desktop size and placement;
- first CTA label uses Courier New;
- no other site elements changed.


V51 code cleanup:
- removed CSS selectors that cannot match the current HTML or JavaScript states;
- removed obsolete V30/V31 fingerprint scripts and unused pressed-state script;
- removed unreferenced keyframes, comments and empty rules;
- no HTML structure, content or design changes.
