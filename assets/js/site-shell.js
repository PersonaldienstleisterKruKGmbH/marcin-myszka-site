(() => {
  if (document.body.classList.contains('subpage') && !document.querySelector('link[data-editorial-kicker-style]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/editorial-kicker.css';
    link.dataset.editorialKickerStyle = 'true';
    document.head.appendChild(link);
  }
})();

(() => {
  const header = document.querySelector('[data-site-header]');
  if (header) {
    header.innerHTML = `<div class="wrap nav">
  <a class="brand" href="index.html">MARCIN<span>MYSZKA</span></a>
  <nav class="site-nav" id="site-nav">
    <a href="index.html">Start</a><a href="o-mnie.html">O mnie</a><a href="projekty.html">Projekty</a><a href="osiagniecia.html">Osiągnięcia</a><a href="media.html">Media</a><a href="press-kit.html">Press kit</a><a href="wspolpraca.html">Współpraca</a><a class="nav-cta" href="kontakt.html">Kontakt</a>
  </nav>
  <button class="menu-toggle" type="button" aria-label="Otwórz menu" aria-expanded="false" aria-controls="site-nav"><span></span><span></span></button>
</div>`;
  }
  const footer = document.querySelector('[data-site-footer]');
  if (footer) {
    footer.classList.add('site-footer-shell');
    footer.innerHTML = `<section class="contact" id="kontakt-footer"><div class="wrap contact-inner"><div><div class="eyebrow">Współpraca reklamowa / wystąpienia / wydarzenia / wywiady</div><h2 class="display slow-scramble contact-scramble" data-scramble-slow aria-label="Porozmawiajmy">Porozmawiajmy</h2></div><div class="contact-text"><p>Współpraca z markami, obecność w mediach, wydarzenia i formaty specjalne związane z tematyką true crime.</p><a class="mail" href="mailto:kryminatorium@gmail.com">kryminatorium@gmail.com</a></div></div></section><div class="footer-bar"><div class="wrap footer-inner"><nav class="footer-pages" aria-label="Menu w stopce"><a href="index.html">Start</a><a href="o-mnie.html">O mnie</a><a href="projekty.html">Projekty</a><a href="osiagniecia.html">Osiągnięcia</a><a href="media.html">Media</a><a href="press-kit.html">Press kit</a><a href="wspolpraca.html">Współpraca</a><a href="kontakt.html">Kontakt</a></nav><div class="footer-meta"><span>Marcin Myszka © 2026</span><span>Strona osobista / media kit</span></div><div class="footer-social" aria-label="Kanały Marcina Myszki w stopce"><div class="social-links"><a href="https://www.instagram.com/marcinmyszka1/" target="_blank" rel="noopener">Instagram</a><a href="https://open.spotify.com/show/4wEuac2C7cpuvy8HBjfvW7" target="_blank" rel="noopener">Spotify</a><a href="https://www.youtube.com/@kryminatorium" target="_blank" rel="noopener">YouTube</a><a href="https://www.facebook.com/kryminatorium" target="_blank" rel="noopener">Facebook</a></div></div></div></div>`;
  }
})();

(() => {
  const strip = (root = document) => {
    const headings = [];
    if (root.nodeType === 1 && root.matches?.('h1,h2,h3')) headings.push(root);
    if (root.querySelectorAll) headings.push(...root.querySelectorAll('h1,h2,h3'));

    headings.forEach((heading) => {
      const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const text = node.nodeValue || '';
        const cleaned = text.replace(/\.+(?=\s*$)/g, '');
        if (cleaned !== text) node.nodeValue = cleaned;
      }
    });
  };

  strip(document);

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'characterData') {
        const heading = mutation.target.parentElement?.closest('h1,h2,h3');
        if (heading) strip(heading);
        return;
      }
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) strip(node);
      });
    });
  });

  observer.observe(document.body, {subtree:true, childList:true, characterData:true});
})();

(() => {
  if (document.body.classList.contains('subpage')) return;
  const shell = document.querySelector('.credentials-shell-v18');
  const section = shell?.closest('section');
  if (!section) return;
  section.style.setProperty('background-color', '#eee9e1', 'important');
  section.style.setProperty('background-image', 'url("assets/images/media-awards-parchment-blood.webp")', 'important');
  section.style.setProperty('background-size', 'cover', 'important');
  section.style.setProperty('background-position', 'center', 'important');
  section.style.setProperty('background-repeat', 'no-repeat', 'important');
})();

(() => {
  const replaceProjectImage = (selector, src) => { const img = document.querySelector(selector); if (!img) return; img.src = src; img.removeAttribute('srcset'); };
  replaceProjectImage('.project-niediegetyczne .project-media img','assets/images/projects/niediegetyczne.webp');
  replaceProjectImage('.project-kryminalne-miasto .project-media img','assets/images/projects/kryminalne-miasto-2026.webp');
  replaceProjectImage('.project-zbrodnia .project-media img','assets/images/projects/zbrodnia-obok-ciebie.webp');
  replaceProjectImage('.project-akta .project-media img','assets/images/projects/akta-tajemnic.webp');
  const duo = document.querySelector('.project-live .project-media-poster');
  if (duo) { duo.style.display='grid'; duo.style.gridTemplateColumns='1fr 1fr'; const first=duo.querySelector('img'); if(first){ first.src='assets/images/projects/audiobooki-true-crime.webp'; first.removeAttribute('srcset'); if(!duo.querySelector('img[data-live-added]')){ const live=first.cloneNode(false); live.src='assets/images/projects/kryminatorium-live-2026.webp'; live.alt='Kryminatorium Live'; live.loading='lazy'; live.dataset.liveAdded='true'; duo.appendChild(live); } } }
})();