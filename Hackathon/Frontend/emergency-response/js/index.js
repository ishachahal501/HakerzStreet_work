// ===== INDEX PAGE JS =====

const EMERGENCIES = [
  { type: '🫀 Cardiac Arrest', loc: 'Connaught Place, Delhi', amb: 'AMB-023' },
  { type: '🚗 Road Accident', loc: 'NH-8 Near Mahipalpur', amb: 'AMB-041' },
  { type: '🩸 Trauma', loc: 'Saket South Extension', amb: 'AMB-077' },
  { type: '🤕 Head Injury', loc: 'Karol Bagh Market', amb: 'AMB-019' },
  { type: '😮‍💨 Respiratory', loc: 'Dwarka Sector 12', amb: 'AMB-055' },
  { type: '🔥 Burns', loc: 'Rohini Sector 9', amb: 'AMB-062' },
  { type: '💊 Overdose', loc: 'Lajpat Nagar', amb: 'AMB-088' },
  { type: '🤰 Obstetric', loc: 'Janakpuri D-Block', amb: 'AMB-034' },
];

const STATUSES = [
  { label: 'DISPATCHED', cls: 'badge-red' },
  { label: 'EN ROUTE', cls: 'badge-blue' },
  { label: 'RESOLVED', cls: 'badge-green' },
];

let reqCounter = 2840;

function buildFeedItem(data, status) {
  const now = new Date();
  return `
    <div class="feed-item ${status.label === 'RESOLVED' ? 'resolved' : status.label === 'EN ROUTE' ? 'enroute' : ''}">
      <span class="feed-time mono">${formatTime(now)}</span>
      <span class="feed-id">EM-${++reqCounter}</span>
      <span class="feed-type">${data.type}</span>
      <span class="feed-loc">${data.loc}</span>
      <span class="feed-amb">${data.amb}</span>
      <span class="feed-status"><span class="badge ${status.cls}">${status.label}</span></span>
    </div>`;
}

function addFeedItem() {
  const feed = document.getElementById('dispatchFeed');
  if (!feed) return;
  const data = pick(EMERGENCIES);
  const status = pick(STATUSES);
  const html = buildFeedItem(data, status);
  feed.insertAdjacentHTML('afterbegin', html);
  const items = feed.querySelectorAll('.feed-item');
  if (items.length > 8) items[items.length - 1].remove();
}

// Seed initial items
function seedFeed() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => addFeedItem(), i * 100);
  }
}

// Auto-add new items
setInterval(addFeedItem, 3500);

// Type buttons
document.addEventListener('DOMContentLoaded', () => {
  seedFeed();
  document.querySelectorAll('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
});

// SOS Modal
function openSOSModal() {
  document.getElementById('sosModal').style.display = 'flex';
}
function closeSOSModal() {
  document.getElementById('sosModal').style.display = 'none';
}

// GPS
function getLocation() {
  const input = document.getElementById('locationInput');
  input.placeholder = 'Getting location...';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      pos => {
        input.value = `${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;
      },
      () => { input.placeholder = 'New Delhi, India (default)'; input.value = 'New Delhi, India'; }
    );
  } else {
    input.value = 'New Delhi, India';
  }
}

// Submit SOS
function submitSOS(e) {
  e.preventDefault();
  closeSOSModal();
  const id = 'EM-' + rand(3000, 9999);
  document.getElementById('reqId').textContent = id;
  document.getElementById('confirmModal').style.display = 'flex';
}

// Close modals on overlay click
document.addEventListener('click', (e) => {
  if (e.target.id === 'sosModal') closeSOSModal();
  if (e.target.id === 'confirmModal') document.getElementById('confirmModal').style.display = 'none';
});
