const dialog = document.getElementById('booking-dialog');
const context = document.getElementById('booking-context');
document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', () => {
  context.textContent = button.dataset.service ? `${button.dataset.service}. Зателефонуйте або напишіть нам — обговоримо стан авто й узгодимо час візиту.` : 'Зателефонуйте або напишіть нам. Узгодимо послугу та час вашого візиту.';
  dialog.showModal();
  document.body.classList.add('dialog-open');
}));
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); });
const menu = document.querySelector('.menu-toggle');
const nav = document.getElementById('mobile-nav');
function closeMenu() { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Відкрити меню'); nav.hidden = true; }
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Закрити меню' : 'Відкрити меню'); nav.hidden = !open; });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
