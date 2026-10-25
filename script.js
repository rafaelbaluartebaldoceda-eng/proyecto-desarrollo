(() => {
  const root = document.querySelector('[data-rayotec-mega]');
  if (!root) return;

  const trigger = root.querySelector('.rayotec-mega__trigger');
  const panel = root.querySelector('.rayotec-mega__panel');
  if (!trigger || !panel) return;

  const isOpen = () => trigger.getAttribute('aria-expanded') === 'true';

  function positionPanel() {
    if (!isOpen()) return;
    const rootRect = root.getBoundingClientRect();
    const triggerRect = trigger.getBoundingClientRect();
    const panelRect = panel.getBoundingClientRect();
    const viewportWidth = document.documentElement.clientWidth;
    const left = Math.max(12, Math.min(triggerRect.left, viewportWidth - panelRect.width - 12));
    const spaceBelow = Math.max(0, window.innerHeight - triggerRect.bottom - 12);
    const spaceAbove = Math.max(0, triggerRect.top - 12);
    const placeBelow = spaceBelow >= 300 || spaceBelow >= spaceAbove;
    const availableHeight = placeBelow ? spaceBelow : spaceAbove;
    panel.style.maxHeight = `${Math.max(180, availableHeight)}px`;

    const adjustedHeight = panel.getBoundingClientRect().height;
    const top = placeBelow
      ? triggerRect.bottom + 8
      : Math.max(12, triggerRect.top - adjustedHeight - 8);

    panel.style.left = `${left - rootRect.left}px`;
    panel.style.top = `${top - rootRect.top}px`;
  }

  function setOpen(open, returnFocus = false) {
    trigger.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;

    if (open) {
      positionPanel();
    } else {
      panel.style.left = '';
      panel.style.top = '';
      panel.style.maxHeight = '';
      if (returnFocus) trigger.focus();
    }
  }

  trigger.addEventListener('click', () => setOpen(!isOpen()));

  document.addEventListener('click', event => {
    if (isOpen() && !root.contains(event.target)) setOpen(false);
  });

  document.addEventListener('keydown', event => {
    if (!isOpen() || event.key !== 'Escape') return;
    event.preventDefault();
    setOpen(false, true);
  });

  trigger.addEventListener('keydown', event => {
    if (event.key !== 'ArrowDown') return;
    event.preventDefault();
    if (!isOpen()) setOpen(true);
    panel.querySelector('a')?.focus();
  });

  panel.addEventListener('focusout', () => {
    requestAnimationFrame(() => {
      if (isOpen() && !root.contains(document.activeElement)) setOpen(false);
    });
  });

  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  window.addEventListener('resize', positionPanel);
  window.addEventListener('scroll', positionPanel, true);
})();
