// Inner-page typography rule: headings must not end with a full stop.
// Homepage keeps its original punctuation.
(() => {
  if (!document.body.classList.contains('subpage')) return;

  const headings = document.querySelectorAll('h1, h2, h3');

  headings.forEach((heading) => {
    const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    let node;
    while ((node = walker.nextNode())) textNodes.push(node);

    for (let i = textNodes.length - 1; i >= 0; i -= 1) {
      const text = textNodes[i].nodeValue || '';
      if (!text.trim()) continue;
      textNodes[i].nodeValue = text.replace(/\.+\s*$/, '');
      break;
    }
  });
})();

(() => {
  const groups = [...document.querySelectorAll('[data-counter-group]')];
  if (!groups.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const formatter = new Intl.NumberFormat('pl-PL');
  const DURATION = 4200;

  const render = (el, value) => {
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    el.textContent = `${prefix}${formatter.format(value)}${suffix}`;
  };

  const renderFinal = (el) => render(el, Number(el.dataset.counter || 0));

  groups.forEach((group) => {
    group.querySelectorAll('[data-counter]').forEach((el) => render(el, 0));
  });

  const easeInOutCubic = (t) => t < .5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animateGroup = (group) => {
    if (group.dataset.countersAnimated === 'true') return;
    group.dataset.countersAnimated = 'true';

    const counters = [...group.querySelectorAll('[data-counter]')];
    if (!counters.length) return;

    const start = performance.now();

    const frame = (now) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = easeInOutCubic(progress);

      counters.forEach((el) => {
        const target = Number(el.dataset.counter || 0);
        render(el, Math.round(target * eased));
      });

      if (progress < 1) requestAnimationFrame(frame);
      else counters.forEach(renderFinal);
    };

    requestAnimationFrame(frame);
  };

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    groups.forEach((group) => group.querySelectorAll('[data-counter]').forEach(renderFinal));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateGroup(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.28, rootMargin: '0px 0px -5% 0px' });

  groups.forEach((group) => observer.observe(group));
})();
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  const closeMenu = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Otwórz menu');
  };

  toggle.addEventListener('click', () => {
    const nextOpen = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', nextOpen);
    toggle.setAttribute('aria-expanded', String(nextOpen));
    toggle.setAttribute('aria-label', nextOpen ? 'Zamknij menu' : 'Otwórz menu');
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.classList.contains('is-open')) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1000) closeMenu();
  });
})();
(() => {
  const section = document.querySelector('[data-about-sequence]');
  if (!section || window.matchMedia('(max-width: 1000px)').matches) return;

  let raf = 0;
  const clamp = (n, min=0, max=1) => Math.min(Math.max(n, min), max);
  const smooth = (t) => t * t * (3 - 2 * t);

  const update = () => {
    const rect = section.getBoundingClientRect();
    const total = Math.max(section.offsetHeight - window.innerHeight, 1);
    const passed = clamp(-rect.top, 0, total);
    const p = clamp(passed / total);
    const expand = smooth(clamp(p / .34));
    const quote = smooth(clamp((p - .30) / .27));
    const copy = smooth(clamp((p - .58) / .28));

    section.style.setProperty('--about-expand', expand.toFixed(4));
    section.style.setProperty('--about-quote', quote.toFixed(4));
    section.style.setProperty('--about-copy', copy.toFixed(4));
    raf = 0;
  };

  const request = () => {
    if (!raf) raf = requestAnimationFrame(update);
  };

  update();
  addEventListener('scroll', request, {passive:true});
  addEventListener('resize', request);
})();
(() => {
  const elements = [...document.querySelectorAll('[data-scramble-slow]')];
  if (!elements.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;
  const DURATION = 2600;
  const FRAME_MS = 78;
  const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  const isScramblable = (char) => /[A-Za-zÀ-ž0-9]/.test(char);

  elements.forEach((el) => {
    const original = el.textContent;
    let timer = null;
    let running = false;
    const lockSize = () => {
      const rect = el.getBoundingClientRect();
      const width = Math.ceil(rect.width);
      const height = Math.ceil(rect.height);
      if (width > 0) {
        el.style.width = `${width}px`;
        el.style.minWidth = `${width}px`;
      }
      if (height > 0) {
        el.style.height = `${height}px`;
        el.style.minHeight = `${height}px`;
      }
    };

    const restore = () => {
      el.textContent = original;
      running = false;
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      el.style.width = '';
      el.style.minWidth = '';
      el.style.height = '';
      el.style.minHeight = '';
    };

    const start = () => {
      if (running) return;
      running = true;
      lockSize();

      const startTime = performance.now();
      const scramblePositions = [...original]
        .map((char, index) => isScramblable(char) ? index : -1)
        .filter((index) => index >= 0);
      const total = scramblePositions.length || 1;

      const renderFrame = () => {
        const elapsed = performance.now() - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        const resolveProgress = progress < 0.18
          ? 0
          : Math.min((progress - 0.18) / 0.82, 1);
        const resolvedCount = Math.floor(total * resolveProgress);
        const resolvedSet = new Set(scramblePositions.slice(0, resolvedCount));

        const output = [...original].map((char, index) => {
          if (!isScramblable(char)) return char;
          if (resolvedSet.has(index)) return char;
          return CHARSET[Math.floor(Math.random() * CHARSET.length)];
        }).join('');

        el.textContent = output;

        if (progress >= 1) restore();
      };

      renderFrame();
      timer = setInterval(renderFrame, FRAME_MS);
    };

    el.addEventListener('mouseenter', start);
    el.addEventListener('focus', start);
  });
})();
(() => {
  const print = document.querySelector('#media .media-fingerprint-single-v32');
  if (!print) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const positions = [
    [8, 14], [20, 28], [38, 15], [61, 20], [77, 31],
    [12, 55], [34, 62], [55, 50], [73, 64], [19, 76], [58, 74],
    [29, 18], [48, 27], [68, 48], [24, 70], [66, 70]
  ];

  const randomize = () => {
    const [x, y] = positions[Math.floor(Math.random() * positions.length)];
    const rotate = -20 + Math.random() * 40;
    const scale = .82 + Math.random() * .34;
    const size = Math.round(150 + Math.random() * 120);

    print.style.left = `${x}%`;
    print.style.top = `${y}%`;
    print.style.width = `${size}px`;
    print.style.transform = `rotate(${rotate.toFixed(1)}deg) scale(${scale.toFixed(2)})`;
  };

  randomize();
  print.addEventListener('animationiteration', randomize);
})();
