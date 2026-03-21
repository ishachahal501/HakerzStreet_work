// ===== RAPID — MAIN JS =====

// Animate counters
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target);
    const duration = 1500;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current);
    }, 16);
  });
}

// Highlight active nav
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', href === path);
  });
}

// Clock
function startClock() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  setInterval(() => {
    el.textContent = new Date().toLocaleTimeString();
  }, 1000);
}

// Toast notification
function showToast(msg, type = 'info') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${msg}</span>`;
  toast.style.cssText = `
    position:fixed; bottom:2rem; right:2rem; z-index:9999;
    background:var(--card); border:1px solid var(--border);
    border-left:3px solid ${type === 'success' ? 'var(--green)' : type === 'error' ? 'var(--red)' : 'var(--blue)'};
    padding:0.9rem 1.25rem; border-radius:10px;
    font-size:0.88rem; animation:slideUp 0.3s ease;
    max-width:300px; color:var(--text);
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500);
}

// Format time
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Random between
function rand(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// Random item from array
function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// AUTH GUARD — redirect to login if not authenticated
function authGuard() {
  if (!sessionStorage.getItem('rapidLoggedIn')) {
    // Determine relative path depth
    const depth = window.location.pathname.includes('/pages/') ? '../' : '';
    window.location.href = depth + 'login.html';
    return false;
  }
  return true;
}

// LOGOUT
function logout() {
  sessionStorage.removeItem('rapidLoggedIn');
  sessionStorage.removeItem('rapidRole');
  const depth = window.location.pathname.includes('/pages/') ? '../' : '';
  window.location.href = depth + 'login.html';
}

// Inject logout button + user badge into nav
function injectNavAuth() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const role = sessionStorage.getItem('rapidRole') || 'user';
  const existing = document.getElementById('navAuthArea');
  if (existing) existing.remove();
  const div = document.createElement('div');
  div.id = 'navAuthArea';
  div.style.cssText = 'display:flex;align-items:center;gap:0.75rem;margin-left:1rem';
  div.innerHTML = `
    <div style="display:flex;align-items:center;gap:0.5rem;padding:4px 10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:20px;font-size:0.72rem;font-family:var(--font-mono);color:var(--text-dim)">
      ${role === 'hospital' ? '🏥' : '👤'} ${role.toUpperCase()}
    </div>
    <button onclick="logout()" style="padding:4px 12px;background:rgba(255,23,68,0.1);border:1px solid rgba(255,23,68,0.3);border-radius:6px;color:var(--red);font-size:0.75rem;font-family:var(--font-mono);cursor:pointer;transition:background 0.2s" onmouseover="this.style.background='rgba(255,23,68,0.2)'" onmouseout="this.style.background='rgba(255,23,68,0.1)'">LOGOUT</button>
  `;
  // Insert after nav-status
  const status = nav.querySelector('.nav-status');
  if (status) status.after(div);
  else nav.appendChild(div);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  authGuard();
  setActiveNav();
  animateCounters();
  startClock();
  injectNavAuth();
});
