(() => {
  const header = document.querySelector('[data-site-header]');
  if (header) {
    header.innerHTML = `<div class="wrap nav">
  <a class="brand" href="index.html">MARCIN<span>MYSZKA</span></a>
  <nav class="site-nav" id="site-nav">
    <a href="index.html">Start</a>
    <a href="o-mnie.html">O mnie</a>
    <a href="projekty.html">Projekty</a>
    <a href="osiagniecia.html">Osiągnięcia</a>
    <a href="media.html">Media</a>
    <a href="wspolpraca.html">Współpraca</a>
    <a class="nav-cta" href="kontakt.html">Kontakt</a>
  </nav>
  <button class="menu-toggle" type="button" aria-label="Otwórz menu" aria-expanded="false" aria-controls="site-nav">
    <span></span><span></span>
  </button>
</div>`;
  }

  const footer = document.querySelector('[data-site-footer]');
  if (footer) {
    footer.classList.add('site-footer-shell');
    footer.innerHTML = `<section class="contact" id="kontakt-footer">
  <div class="wrap contact-inner">
    <div>
      <div class="eyebrow">Współpraca reklamowa / wystąpienia / wydarzenia / wywiady</div>
      <h2 class="display slow-scramble contact-scramble" data-scramble-slow aria-label="Porozmawiajmy.">Porozmawiajmy.</h2>
    </div>
    <div class="contact-text">
      <p>Współpraca z markami, obecność w mediach, wydarzenia i formaty specjalne związane z tematyką true crime.</p>
      <a class="mail" href="mailto:kryminatorium@gmail.com">kryminatorium@gmail.com</a>
    </div>
  </div>
</section>
<div class="footer-bar">
  <div class="wrap footer-inner">
    <nav class="footer-pages" aria-label="Menu w stopce">
      <a href="index.html">Start</a>
      <a href="o-mnie.html">O mnie</a>
      <a href="projekty.html">Projekty</a>
      <a href="osiagniecia.html">Osiągnięcia</a>
      <a href="media.html">Media</a>
      <a href="wspolpraca.html">Współpraca</a>
      <a href="kontakt.html">Kontakt</a>
    </nav>
    <div class="footer-meta">
      <span>Marcin Myszka © 2026</span>
      <span>Koncepcja one-page / wersja robocza</span>
    </div>
    <div class="footer-social" aria-label="Kanały Marcina Myszki w stopce">
      <div class="social-links">
        <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm10.05 1.55a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z"/></svg><span>Instagram</span></a>
        <a href="#" aria-label="TikTok"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.9 2c.37 1.76 1.44 3.08 3.1 3.85A5.9 5.9 0 0 0 21 6.4v2.78a8.2 8.2 0 0 1-3.32-.92v6.27c0 3.66-2.76 6.22-6.36 6.22A6.1 6.1 0 0 1 5 14.63c0-3.4 2.76-6.16 6.19-6.16.37 0 .72.03 1.07.1v2.93a3.84 3.84 0 0 0-1.07-.16 3.28 3.28 0 1 0 3.29 3.3V2h.42Z"/></svg><span>TikTok</span></a>
        <a href="#" aria-label="Spotify"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.57 14.47a.97.97 0 0 1-1.34.31 9.8 9.8 0 0 0-8.22-.88.97.97 0 1 1-.59-1.85 11.72 11.72 0 0 1 9.83 1.06.97.97 0 0 1 .32 1.36Zm1.32-2.92a1.2 1.2 0 0 1-1.63.39 12.06 12.06 0 0 0-10.1-1.05 1.2 1.2 0 1 1-.73-2.28 14.46 14.46 0 0 1 12.11 1.25 1.2 1.2 0 0 1 .35 1.69Zm.16-3.11A14.44 14.44 0 0 0 5.82 9.2a1.43 1.43 0 0 1-.87-2.73A17.28 17.28 0 0 1 19.07 7.9a1.43 1.43 0 1 1-1.02 2.54Z"/></svg><span>Spotify</span></a>
        <a href="#" aria-label="YouTube"><svg class="icon-youtube" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.2a2.93 2.93 0 0 0-2.06-2.08C17.73 4.6 12 4.6 12 4.6s-5.73 0-7.52.52A2.93 2.93 0 0 0 2.42 7.2 30.3 30.3 0 0 0 2 12a30.3 30.3 0 0 0 .42 4.8 2.93 2.93 0 0 0 2.06 2.08C6.27 19.4 12 19.4 12 19.4s5.73 0 7.52-.52a2.93 2.93 0 0 0 2.06-2.08A30.3 30.3 0 0 0 22 12a30.3 30.3 0 0 0-.42-4.8ZM10 15.3V8.7l5.7 3.3Z"/></svg><span>YouTube</span></a>
        <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.47 22v-8.18h2.74l.41-3.18h-3.15V8.61c0-.92.26-1.55 1.58-1.55h1.69V4.22A22.8 22.8 0 0 0 14.28 4C11.84 4 10.18 5.49 10.18 8.24v2.4H7.42v3.18h2.76V22h3.29Z"/></svg><span>Facebook</span></a>
      </div>
    </div>
  </div>
</div>`;
  }
})();


(() => {
  const replaceProjectImage = (selector, src) => {
    const img = document.querySelector(selector);
    if (!img) return;
    img.src = src;
    img.removeAttribute('srcset');
  };

  replaceProjectImage(
    '.project-niediegetyczne .project-media img',
    'assets/images/projects/niediegetyczne.webp'
  );
  replaceProjectImage(
    '.project-kryminalne-miasto .project-media img',
    'assets/images/projects/kryminalne-miasto-2026.webp'
  );
  replaceProjectImage(
    '.project-zbrodnia .project-media img',
    'assets/images/projects/zbrodnia-obok-ciebie.webp'
  );
  replaceProjectImage(
    '.project-akta .project-media img',
    'assets/images/projects/akta-tajemnic.webp'
  );

  const duo = document.querySelector('.project-live .project-media-poster');
  if (duo) {
    duo.style.display = 'grid';
    duo.style.gridTemplateColumns = '1fr 1fr';

    const first = duo.querySelector('img');
    if (first) {
      first.src = 'assets/images/projects/audiobooki-true-crime.webp';
      first.removeAttribute('srcset');

      const live = first.cloneNode(false);
      live.src = 'assets/images/projects/kryminatorium-live-2026.webp';
      live.alt = 'Kryminatorium Live';
      live.loading = 'lazy';
      duo.appendChild(live);
    }
  }
})();
