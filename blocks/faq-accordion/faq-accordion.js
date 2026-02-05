export default function decorate(block) {
  const items = [...block.children];
  if (!items.length) return;

  const accordionItems = [];

  items.forEach((item, index) => {
    item.classList.add('faq-accordion-item');

    const [headerCol, bodyCol] = item.children;
    if (!headerCol || !bodyCol) return;

    headerCol.classList.add('faq-accordion-header');
    bodyCol.classList.add('faq-accordion-body');

    const header = headerCol.querySelector('h1, h2, h3, h4, h5, h6');
    if (header) {
      headerCol.setAttribute('role', 'button');
      headerCol.setAttribute('tabindex', '0');
      headerCol.setAttribute('aria-expanded', index === 0 ? 'true' : 'false');
    }

    if (index === 0) {
      item.classList.add('is-open');
    }

    accordionItems.push({ item, headerCol, bodyCol });
  });

  accordionItems.forEach(({ item, headerCol }) => {
    const toggle = () => {
      const isOpen = item.classList.contains('is-open');
      if (isOpen) {
        item.classList.remove('is-open');
        headerCol.setAttribute('aria-expanded', 'false');
      } else {
		item.classList.add('is-open');
		headerCol.setAttribute('aria-expanded', 'true');
      }
    };

    headerCol.addEventListener('click', toggle);
    headerCol.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}
