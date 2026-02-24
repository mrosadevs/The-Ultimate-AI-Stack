// ===== PARTICLES =====
(function() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.r = Math.random() * 1.5 + 0.5;
      this.alpha = Math.random() * 0.4 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108, 99, 255, ${this.alpha})`;
      ctx.fill();
    }
  }

  const count = Math.min(80, Math.floor(w * h / 15000));
  for (let i = 0; i < count; i++) particles.push(new Particle());

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 150)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
})();

// ===== PROGRESS BAR =====
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('progress-bar').style.width = progress + '%';
});

// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => {
  revealObserver.observe(el);
});

// ===== STAT COUNTER =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.count);
      let current = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 30);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ===== FLOATING NAV =====
const sections = document.querySelectorAll('section[id], header[id]');
const navDots = document.querySelectorAll('.nav-dot');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navDots.forEach(d => d.classList.remove('active'));
      const dot = document.querySelector(`.nav-dot[data-section="${entry.target.id}"]`);
      if (dot) dot.classList.add('active');
    }
  });
}, { threshold: 0.3 });

sections.forEach(s => navObserver.observe(s));

navDots.forEach(dot => {
  dot.addEventListener('click', () => {
    haptic();
    const target = document.getElementById(dot.dataset.section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== BACK TO TOP =====
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  backTop.classList.toggle('visible', window.scrollY > 500);
});
backTop.addEventListener('click', () => {
  haptic();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== CONCEPT ACCORDION =====
function toggleConcept(header) {
  haptic();
  const card = header.parentElement;
  card.classList.toggle('open');
}

// ===== TABS =====
function switchTab(e, tabId) {
  haptic();
  const tabHeader = e.target.closest('.tab-header');
  tabHeader.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  const tabs = e.target.closest('.tabs');
  tabs.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  tabs.querySelector('#' + tabId).classList.add('active');
}

// ===== COPY CODE =====
function copyCode(btn) {
  haptic();
  const pre = btn.closest('.code-block').querySelector('pre');
  navigator.clipboard.writeText(pre.textContent).then(() => {
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
  });
}

// ===== CARD MOUSE TRACKING =====
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
    card.style.setProperty('--my', (e.clientY - rect.top) + 'px');
  });
});

// ===== HAPTIC FEEDBACK =====
function haptic(duration = 10) {
  if (navigator.vibrate) navigator.vibrate(duration);
}

// add haptic to all clickable elements
document.querySelectorAll('.chip, .toc-item, .mcp-item, .agent-card, .flow-box').forEach(el => {
  el.addEventListener('click', () => haptic());
});

// ===== ROUTING DEMO =====
const routingInput = document.getElementById('routingInput');
const routingResult = document.getElementById('routingResult');

const routingRules = [
  { patterns: ['code', 'refactor', 'build', 'debug', 'test', 'pr', 'commit', 'deploy', 'feature', 'function', 'bug', 'fix', 'component'], agent: 'Coder', model: 'Claude Code + Codex', color: 'var(--accent5)', reason: 'Coding task detected - routing to Claude Code for development.' },
  { patterns: ['think', 'architect', 'design', 'plan', 'complex', 'strategy', 'decide', 'analyze', 'evaluate'], agent: 'Deep Thinker', model: 'Claude Pro API', color: 'var(--accent)', reason: 'Complex reasoning required - routing to Claude Pro.' },
  { patterns: ['research', 'search', 'find', 'look up', 'document', 'summarize article', 'paper'], agent: 'Researcher', model: 'Gemini / GPT Pro', color: 'var(--accent4)', reason: 'Research task - routing to Gemini for deep analysis.' },
  { patterns: ['email', 'message', 'imessage', 'text', 'reply', 'draft', 'send'], agent: 'Comms', model: 'GPT-OSS 20B (Local)', color: 'var(--accent2)', reason: 'Communication task - handled locally for FREE.' },
  { patterns: ['brief', 'morning', 'schedule', 'calendar', 'agenda', 'news'], agent: 'Briefing Bot', model: 'GPT-OSS 20B (Local)', color: 'var(--accent2)', reason: 'Scheduling/briefing task - handled locally for FREE.' },
  { patterns: ['post', 'social', 'tweet', 'linkedin', 'instagram', 'content'], agent: 'Social Media', model: 'GPT-OSS 20B (Local)', color: 'var(--accent2)', reason: 'Social media task - handled locally for FREE.' },
];

routingInput.addEventListener('input', () => {
  const query = routingInput.value.toLowerCase();
  if (query.length < 3) {
    routingResult.innerHTML = '<span style="color:var(--text-dim)">Type a task above to see the routing decision...</span>';
    return;
  }
  let matched = null;
  for (const rule of routingRules) {
    if (rule.patterns.some(p => query.includes(p))) { matched = rule; break; }
  }
  if (!matched) {
    matched = { agent: 'Router', model: 'GPT-OSS 20B (Local)', color: 'var(--accent2)', reason: 'General task - handled locally for FREE by the Router agent.' };
  }
  routingResult.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${matched.color}"></span>
      <strong style="font-size:1.1rem">${matched.agent}</strong>
      <span style="font-size:0.8rem;color:var(--text-dim)">${matched.model}</span>
    </div>
    <p style="color:var(--text-dim);font-size:0.9rem;margin:0">${matched.reason}</p>
  `;
});


// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'light' ? '&#9728;' : '&#9790;';

themeToggle.addEventListener('click', () => {
  haptic();
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  themeToggle.innerHTML = next === 'light' ? '&#9728;' : '&#9790;';
});

// ===== SMOOTH STAGGER ON SCROLL =====
document.querySelectorAll('.stagger').forEach(container => {
  Array.from(container.children).forEach((child, i) => {
    child.style.setProperty('--i', i);
  });
});
